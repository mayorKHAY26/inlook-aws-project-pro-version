output "rds_endpoint" {
  value = aws_db_instance.main.endpoint
}

output "rds_identifier" {
  value = aws_db_instance.main.id
}

output "rds_engine" {
  value = aws_db_instance.main.engine
}