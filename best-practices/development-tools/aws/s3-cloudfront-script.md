This script automates the CloudFront set up process as documented in [S3 CloudFront Deployment](s3-cloudfront-deployment.md).

It does the following:
    - Creates the CloudFront SSL Certificate on us-east-1 for the given domain.
    - Creates the SSL Certificate on us-west-2 for the given domain.
    - Creates the S3 Bucket with the given name.
    - Creates the CloudFront distribution for the given S3 bucket with the correct cache settings.
  

# USAGE
`cloudfront-set-up.sh -d mydomain.com -b bucketName`

`-d string`
Domain Name to create the SSL certificates under and to use for CloudFront.

`-b string`
S3 Bucket Name to create and attach to the CloudFront distribution.
