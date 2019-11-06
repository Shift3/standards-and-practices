# Deploying a Static App to AWS Using Cloudfront and S3

## Setup

#### Configure Route53
- Go to Route53 (Global) and click Hosted Zones
- Click Create Record Set and enter the desired domain name
- Copy Name Server (NS) values (these will be used in Namecheap below)

#### Configure Namecheap
- Log into Namecheap and go to the domain
- Go to Domain, enter Name Servers from Route53
  - remove periods from Name Server values when copying them into Namecheap

#### Setup Certificate
- Go to AWS Certificate Manager
- NOTE: Cloudfront certificates MUST be in US East (N Virgina)
- Click Request a certificate (public)
- Enter the domain
- enter *.domain
- Click Next
- Select DNS Validation and click Review
- Click Confirm and Request
- Click arrow dropdown on the first Domain and select Create Record in Route53, then click Create
  - This will create a CNAME record for DNS validation
- Domain should be validated after a few minutes

#### Configure S3
- Create a bucket.
- Bucket name should be the domain
- Region should be US East (N Virginia)
- Lean Configure Options to Default
- Uncheck all Permission options (we want the website to be public)
- Review and click Create Bucket
- Open the newly created bucket, go to Permissions > Bucket Policy
- Replace the policy script with the following (replace `shift3tech.com` with your domain)
```
{
   “Version”: “2012-10-17",
   “Statement”: [
       {
           “Sid”: “PublicReadGetObject”,
           “Effect”: “Allow”,
           “Principal”: “*”,
           “Action”: “s3:GetObject”,
           “Resource”: “arn:aws:s3:::shift3tech.com/*”
       }
   ]
}
```

#### Configure Cloudfront
- Go to Cloudfront and select Create Distribution
- Select Web
- Select your Origin Domain Name from the dropdown
- Viewer Protocol Policy set Redirect HTTP to HTTPS
- Price Class, select Use Only US
- Enter the domain name in Alternate Domain Names
- Check Custom SSL Certificate
  - Select domain from dropdown
- Enter default Root Object (`index.html`)
- Create the Cloudfront Distribution
- Copy the URL for the created Cloudfront Distribution (used to finish Route53 config below)

#### Configure Route53 Alias
- Return to the Route53 Entry for the domain
- Click Create Record Set
- Type A
- Alias: Yes
- Enter Alias Target (use the copied url from the created Cloudfront instance above)

##### Caching Settings for Angular Apps
We want to remove chaching on `index.html` so that our deployments will apply immediately.
- Go to Cloud Front > Distribution Settings > Behaviors > Create Behavior
- Enter `index.html`
- Object Customize set to 0
- Set all TTL values to 0

##### Angular route handling
With Angular routes, which don't map routes to actual server paths, we need special error handling for page redirects.
- Go to Error Pages
- Create custom error response
- For 404 errors, do custom error response
- Response Page Path: `/index.html`
- HTTP Response Code: `200: OK`

Now it will take up to 24 hours for the DNS settings to propogate (1 hour is more likely)

#### Install S3 Commandline Tool
If you have already install this tool, move to the next step to configure for your new domain deployment.

#### Configure S3 Commandline Tool
TODO


## Deployment

##### Deployment using Browser Upload
- Go to Overview tab and click Upload
- Select the `index.html` and other files you want to upload
- Upload the files

##### Deployment using Command line:
TODO