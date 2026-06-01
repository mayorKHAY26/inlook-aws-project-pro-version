#!/bin/bash

echo "Destroying inlook-webmail-Komotehinse-version infrastructure..."

terraform destroy -auto-approve

echo "Infrastructure destroyed."