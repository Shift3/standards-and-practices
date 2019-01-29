#!/bin/bash

print_banner() {

echo '
 _____  _                    _ ______                      _     _____        _     _   _        
/  __ \| |                  | ||  ___|                    | |   /  ___|      | |   | | | |       
| /  \/| |  ___   _   _   __| || |_    _ __   ___   _ __  | |_  \ `--.   ___ | |_  | | | | _ __  
| |    | | / _ \ | | | | / _  ||  _|  | `__| / _ \ | |_ \ | __|  `--. \ / _ \| __| | | | ||  _ \ 
| \__/\| || (_) || |_| || (_| || |    | |   | (_) || | | || |_  /\__/ /|  __/| |_  | |_| || |_) |
 \____/|_| \___/  \__,_| \__,_|\_|    |_|    \___/ |_| |_| \__| \____/  \___| \__|  \___/ | .__/ 
                                                                                          | |    
'
}

domainName=
s3Name=
scriptDate=$(date +%Y-%m-%d)

print_usage() {
  print_banner
  echo "
DESCRIPTION
---------

This script automates the CloudFront set up process as documented in https://github.com/Shift3/standards-and-practices/blob/master/aws/s3-cloudfront-deployment.md.

It does the following:
    - Creates the CloudFront SSL Certificate on us-east-1 for the given domain.
    - Creates the SSL Certificate on us-west-2 for the given domain.
    - Creates the S3 Bucket with the given name.
    - Creates the CloudFront distribution for the given S3 bucket with the correct cache settings.
  

USAGE
---------
cloudfront-set-up.sh -d mydomain.com -b bucketName

-d string
Domain Name to create the SSL certificates under and to use for CloudFront.

-b string
S3 Bucket Name to create and attach to the CloudFront distribution.


"
}

while getopts 'd:b:' flag; do
  case "${flag}" in
    d) domainName="${OPTARG}" ;;
    b) s3Name="${OPTARG}" ;;
    *) print_usage
       exit 1 ;;
  esac
done


if [ "${domainName}" == "" ] || [ "${s3Name}" == "" ]; then
  print_usage
  exit 1
fi

print_banner
echo "Do you want to create the following [Y/n]?
  - SSL Domain: ${domainName} 
  - S3 Bucket and Cloudfront: $s3Name
 "
read -p " > " confirm

if [ "$confirm" != "Y" ]; then
    exit 1
fi

echo "Creating CloudFront SSL Cert for ${domainName} in us-east-1"
aws acm request-certificate --domain-name "${domainName}" --subject-alternative-name site.io --validation-method DNS --region=us-east-1

echo "Creating SSL Cert for ${domainName} in us-west-2"
aws acm request-certificate --domain-name "${domainName}" --subject-alternative-name site.io --validation-method DNS --region=us-west-2

echo "Creating S3 Web Bucket: ${s3Name} "
aws s3 mb s3://"${s3Name}"
aws s3 website s3://"${s3Name}/" --index-document index.html --error-document error.html

echo "Creating Cloudfront for S3: ${s3Name} "
echo "
 {
  \"CallerReference\": \"my-distribution-name\",
  \"Aliases\": {
    \"Quantity\": 0
  },
  \"DefaultRootObject\": \"index.html\",
  \"Origins\": {
    \"Quantity\": 1,
    \"Items\": [
      {
        \"Id\": \"S3-${s3Name}\",
        \"DomainName\": \"${s3Name}.s3.amazonaws.com\",
        \"S3OriginConfig\": {
          \"OriginAccessIdentity\": \"\"
        }
      }
    ]
  },
  \"DefaultCacheBehavior\": {
    \"TargetOriginId\": \"S3-${s3Name}\",
    \"ForwardedValues\": {
      \"QueryString\": false,
      \"Cookies\": {
        \"Forward\": \"none\"
      }
    },
    \"TrustedSigners\": {
      \"Enabled\": false,
      \"Quantity\": 0
    },
    \"ViewerProtocolPolicy\": \"redirect-to-https  \",
    \"MinTTL\": 0,
    \"MaxTTL\": 0,
    \"DefaultTTL\": 0,
  },
  \"CacheBehaviors\": {
    \"Quantity\": 0
  },
  \"Comment\": \"\",
  \"Logging\": {
    \"Enabled\": false,
    \"IncludeCookies\": true,
    \"Bucket\": \"\",
    \"Prefix\": \"\"
  },
  \"PriceClass\": \"PriceClass_All\",
  \"Enabled\": true
}
" > /tmp/cloudfront.json

aws cloudfront create-distribution --distribution-config file:///tmp/cloudfront.json

echo "

COMPLETE

"
