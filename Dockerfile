FROM node:16 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --aot

FROM nginx:1.21
COPY --from=node /app/dist/link-hub-fe /usr/share/nginx/html

EXPOSE 80
