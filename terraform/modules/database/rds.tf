resource "aws_db_subnet_group" "main" {
  name       = "${var.project_name}-${var.environment}-db-subnet-group"
  subnet_ids = var.private_subnet_ids

  tags = {
    Name        = "${var.display_name}-${var.environment}-db-subnet-group"
    Project     = var.display_name
    Environment = var.environment
  }
}

resource "aws_db_instance" "main" {
  identifier = "${var.project_name}-${var.environment}-db"

  engine         = "mysql"
  engine_version = "8.0"
  instance_class = "db.t3.micro"

  allocated_storage = 20
  storage_type      = "gp2"

  db_name  = "inlookdb"
  username = "admin"
  password = "ChangeMe123!"

  db_subnet_group_name   = aws_db_subnet_group.main.name
  vpc_security_group_ids = [var.database_sg_id]

  publicly_accessible = false
  skip_final_snapshot = true
  deletion_protection = false

  tags = {
    Name        = "${var.display_name}-${var.environment}-rds"
    Project     = var.display_name
    Environment = var.environment
  }
}