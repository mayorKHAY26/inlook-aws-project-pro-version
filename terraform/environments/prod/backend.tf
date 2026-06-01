terraform {
  backend "s3" {
    bucket         = "inlook-webmail-komotehinse-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "inlook-webmail-komotehinse-terraform-locks"
    encrypt        = true
  }
}