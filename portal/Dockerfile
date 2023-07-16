FROM node:16.17.0-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/portal
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
RUN /bin/sh -c 'echo init nginx ok!'
