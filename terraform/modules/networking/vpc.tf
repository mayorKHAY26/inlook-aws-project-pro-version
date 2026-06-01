resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true

  tags = {
    Name        = "${var.display_name}-${var.environment}-vpc"
    Project     = var.display_name
    Environment = var.environment
  }
}