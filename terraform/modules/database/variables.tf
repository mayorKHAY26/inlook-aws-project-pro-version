variable "project_name" {}
variable "display_name" {}
variable "environment" {}

variable "private_subnet_ids" {
  type = list(string)
}

variable "database_sg_id" {}