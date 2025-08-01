# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.13.1

FROM node:${NODE_VERSION}-slim
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy everything else
COPY . .

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true

EXPOSE 3000

CMD ["npm", "run", "dev"]