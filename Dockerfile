FROM node:16-alpine AS builder
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build-storybook

FROM callmemagnus/nginx4static:1.0
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/docs .