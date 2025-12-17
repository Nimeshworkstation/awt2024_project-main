# Dockerfile for FE

# get node version
FROM node:current-alpine AS build

WORKDIR /app

COPY package*.json ./

# Install dependencies

RUN npm install --slient

ENV PATH /app/node_modules/.bin:$PATH

# copy files from dir of the Dockerfile into WORKDIR
COPY . .

RUN npm run build

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]
