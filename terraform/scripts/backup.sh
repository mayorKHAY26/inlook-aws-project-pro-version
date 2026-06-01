#!/bin/bash

echo "Starting backup for inlook-webmail-Komotehinse-version..."

DATE=$(date +%Y-%m-%d-%H-%M-%S)

mkdir -p backups

terraform state pull > backups/terraform-state-${DATE}.json

echo "Backup completed successfully."