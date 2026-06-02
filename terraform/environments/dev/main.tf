terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }

    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0"
    }

    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "networking" {
  source = "../../modules/networking"

  project_name         = var.project_name
  display_name         = var.display_name
  environment          = var.environment
  vpc_cidr             = var.vpc_cidr
  public_subnet_cidrs  = var.public_subnet_cidrs
  private_subnet_cidrs = var.private_subnet_cidrs
  my_ip                = var.my_ip
}

module "devops" {
  source = "../../modules/devops"

  project_name  = var.project_name
  display_name  = var.display_name
  environment   = var.environment
  vpc_id        = module.networking.vpc_id
  subnet_id     = module.networking.public_subnet_ids[0]
  jenkins_sg_id = module.networking.jenkins_sg_id
}

module "load_balancing" {
  source = "../../modules/load-balancing"

  project_name      = var.project_name
  display_name      = var.display_name
  environment       = var.environment
  vpc_id            = module.networking.vpc_id
  public_subnet_ids = module.networking.public_subnet_ids
  alb_sg_id         = module.networking.alb_sg_id
}

module "compute" {
  source = "../../modules/compute"

  project_name           = var.project_name
  display_name           = var.display_name
  environment            = var.environment
  aws_region             = var.aws_region
  vpc_id                 = module.networking.vpc_id
  private_subnet_ids     = module.networking.private_subnet_ids
  ecs_sg_id              = module.networking.ecs_sg_id
  target_group_arn       = module.load_balancing.target_group_arn
  backend_ecr_url        = module.devops.backend_ecr_url
  frontend_ecr_url       = module.devops.frontend_ecr_url
  ecs_execution_role_arn = module.devops.ecs_execution_role_arn
}

module "database" {
  source = "../../modules/database"

  project_name       = var.project_name
  display_name       = var.display_name
  environment        = var.environment
  private_subnet_ids = module.networking.private_subnet_ids
  database_sg_id     = module.networking.database_sg_id
}

module "security_monitoring" {
  source = "../../modules/security-monitoring"

  project_name = var.project_name
  display_name = var.display_name
  environment  = var.environment
}