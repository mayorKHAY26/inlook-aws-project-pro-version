resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name        = "${var.display_name}-${var.environment}-igw"
    Project     = var.display_name
    Environment = var.environment
  }
}