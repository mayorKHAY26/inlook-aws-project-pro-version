resource "aws_cloudwatch_log_group" "app" {
  name              = "/aws/ecs/${var.project_name}-${var.environment}"
  retention_in_days = 7

  tags = {
    Name        = "${var.display_name}-${var.environment}-cloudwatch-logs"
    Project     = var.display_name
    Environment = var.environment
  }
}