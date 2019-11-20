profile = "shift3"

application_name = "terraform-live-demo"

application_description = "Testing terraform api and web"

application_environment = "staging"

region = "us-west-2"

web_domain_name = "terraform-live-demo.shift3sandbox.com"

api_domain_name = "terraform-live-demo-api.shift3sandbox.com"

zone_id = "Z234K2J0M1T89W"

zone_alias_id = "Z38NKT9BP95V3O"

solution_stack = "64bit Amazon Linux 2018.03 v4.8.1 running Node.js"

instance_type = "t2.micro"

max_size = "2"

environment_variables = [
  {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "APP_URL"
    value     = "http://terraform-live-demo.shift3sandbox.com/#/"
  },
]

iam_s3_bucket_user = "008036621198:user/S3BucketDeployer"

cnames = ["terraform-live-demo.shift3sandbox.com", "www.terraform-live-demo.shift3sandbox.com"]
