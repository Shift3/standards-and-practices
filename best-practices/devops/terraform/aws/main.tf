provider "aws" {
  profile = "${var.profile}"
  region  = "${var.region}"
  version = ">=2.58"
}

module "eb_terraform" {
  source = "./elastic-beanstalk"
}

module "cloudfront_terraform" {
  source = "./cloudfront"
}