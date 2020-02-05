#!/bin/sh
docker run -d -p 8081:80 -v $(pwd):/root/app --name webv2 node:10 /root/app/start.sh
