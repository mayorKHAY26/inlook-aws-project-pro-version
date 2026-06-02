resource "tls_private_key" "jenkins" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "jenkins" {
  key_name   = "${var.project_name}-${var.environment}-jenkins-key"
  public_key = tls_private_key.jenkins.public_key_openssh

  tags = {
    Name        = "${var.display_name}-${var.environment}-jenkins-key"
    Project     = var.display_name
    Environment = var.environment
  }
}

resource "local_file" "jenkins_private_key" {
  filename        = "${path.root}/${var.project_name}-${var.environment}-jenkins-key.pem"
  content         = tls_private_key.jenkins.private_key_pem
  file_permission = "0400"
}