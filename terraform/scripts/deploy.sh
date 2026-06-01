#!/bin/bash

echo "Deploying inlook-webmail-Komotehinse-version..."

terraform init

terraform validate

terraform plan -out=tfplan

terraform apply -auto-approve tfplan

echo "Deployment completed."