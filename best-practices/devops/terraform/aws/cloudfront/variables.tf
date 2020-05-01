variable "profile" {
  description = "Name of your profile inside ~/.aws/credentials"
  default     = "default"
}

variable "application_name" {
  description = "Name of your application"
}

variable "application_description" {
  description = "Sample application based on Elastic Beanstalk & Docker"
}

variable "application_environment" {
  description = "Deployment stage e.g. 'staging', 'production', 'test', 'integration'"
}

variable "iam_s3_bucket_user" {
  description = "Full iam user name i.e. 000000000:user/IAMUserName"
}

variable "region" {
  default     = "us-west-2"
  description = "Defines where your app should be deployed"
}

variable "web_domain_name" {
  description = "Domain name for the s3 bucket"
}

variable "api_domain_name" {
  description = "Domain name for the api"
}

variable "zone_id" {
  description = "AWS Route53 hosted zone id"
}

variable "zone_alias_id" {
  description = "AWS Route53 s3 zone_alias id"
}

variable "solution_stack" {
  description = "AWS Instance stack"
}

variable "instance_type" {
  description = "EC2 Instace type"
}

variable "max_size" {
  description = "Maximum number of instances to spin up from the load balancer"
}

variable "cnames" {
  type = "list"

  default = []
}

variable "environment_variables" {
  type = "list"

  default = []
}