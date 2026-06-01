resource "aws_db_instance" "main" {

  identifier = "${var.project_name}-${var.environment}-db"

  engine = "mysql"

  engine_version = "8.0"

  instance_class = "db.t3.micro"

  allocated_storage = 20

  username = "admin"

  password = "ChangeMe123!"

  skip_final_snapshot = true

  publicly_accessible = false

  tags = {
    Name        = "${var.display_name}-${var.environment}-rds"
    Project     = var.display_name
    Environment = var.environment
  }
}