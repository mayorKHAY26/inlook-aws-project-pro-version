output "backend_ecr_url" {
  value = aws_ecr_repository.backend.repository_url
}

output "frontend_ecr_url" {
  value = aws_ecr_repository.frontend.repository_url
}

output "jenkins_public_ip" {
  value = aws_instance.jenkins.public_ip
}

output "jenkins_public_dns" {
  value = aws_instance.jenkins.public_dns
}

output "ecs_execution_role_arn" {
  value = aws_iam_role.ecs_execution_role.arn
}

output "jenkins_key_pair_name" {
  value = aws_key_pair.jenkins.key_name
}

output "jenkins_private_key_file" {
  value = local_file.jenkins_private_key.filename
}