terraform {
  backend "s3" {
    bucket         = "inlook-webmail-komotehinse-terraform-state"
    key            = "qa/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "inlook-webmail-komotehinse-terraform-locks"
    encrypt        = true
  }
}