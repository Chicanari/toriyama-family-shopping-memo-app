# 旧: FROM node:18-bullseye
FROM node:22-bullseye

RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*
RUN npm i -g @aws-amplify/cli
USER node
WORKDIR /workspace
