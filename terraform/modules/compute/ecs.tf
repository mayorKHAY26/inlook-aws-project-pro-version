resource "aws_ecs_cluster" "main" {
  name = "${var.project_name}-${var.environment}-ecs-cluster"

  tags = {
    Name        = "${var.display_name}-${var.environment}-ecs-cluster"
    Project     = var.display_name
    Environment = var.environment
  }
}