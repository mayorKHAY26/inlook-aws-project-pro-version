output "project_name_for_linkedin_screenshot" {
  value = "inlook-webmail-Komotehinse-version"
}

output "inlook_webmail_komotehinse_version_url" {
  value = "http://${module.load_balancing.alb_dns_name}"
}

output "alb_dns_name" {
  value = module.load_balancing.alb_dns_name
}

output "jenkins_public_ip" {
  value = module.devops.jenkins_public_ip
}

output "backend_ecr_url" {
  value = module.devops.backend_ecr_url
}

output "frontend_ecr_url" {
  value = module.devops.frontend_ecr_url
}

output "ecs_cluster_name" {
  value = module.compute.ecs_cluster_name
}