output "cloudwatch_log_group_name" {
  value = aws_cloudwatch_log_group.app.name
}

output "guardduty_detector_id" {
  value = aws_guardduty_detector.main.id
}

output "securityhub_enabled" {
  value = true
}