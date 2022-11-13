#!/bin/bash
docker build -t apka .
docker run -d  --name apeczka apka