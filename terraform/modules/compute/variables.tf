variable "project_name" {}
variable "display_name" {}
variable "environment" {}
variable "aws_region" {}

variable "vpc_id" {}

variable "private_subnet_ids" {
  type = list(string)
}

variable "ecs_sg_id" {}

variable "target_group_arn" {}

variable "backend_ecr_url" {}

variable "frontend_ecr_url" {}