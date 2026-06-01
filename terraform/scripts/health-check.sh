#!/bin/bash

URL=$1

if [ -z "$URL" ]; then
  echo "Usage: ./health-check.sh <application-url>"
  exit 1
fi

echo "Checking application health..."

curl -I $URL

echo "Health check completed."