output "project_name_for_linkedin_screenshot" {
  value = "inlook-webmail-Komotehinse-version"
}

output "alb_dns_name" {
  value = module.load_balancing.alb_dns_name
}

output "application_url" {
  value = "http://${module.load_balancing.alb_dns_name}"
}

output "ecs_cluster_name" {
  value = module.compute.ecs_cluster_name
}