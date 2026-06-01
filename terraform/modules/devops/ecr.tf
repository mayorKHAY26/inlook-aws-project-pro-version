resource "aws_ecr_repository" "backend" {
  name         = "${var.project_name}-backend"
  force_delete = true

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name        = "${var.display_name}-${var.environment}-backend-ecr"
    Project     = var.display_name
    Environment = var.environment
  }
}

resource "aws_ecr_repository" "frontend" {
  name         = "${var.project_name}-frontend"
  force_delete = true

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name        = "${var.display_name}-${var.environment}-frontend-ecr"
    Project     = var.display_name
    Environment = var.environment
  }
}