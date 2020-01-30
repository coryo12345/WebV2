#!/bin/sh
docker run -d -p 3000:3000 -v $(pwd):/root/app --name webv2 node:10 /root/app/start.sh
