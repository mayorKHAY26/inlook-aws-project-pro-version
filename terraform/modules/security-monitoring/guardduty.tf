resource "aws_guardduty_detector" "main" {
  enable = true

  tags = {
    Name        = "${var.display_name}-${var.environment}-guardduty"
    Project     = var.display_name
    Environment = var.environment
  }
}