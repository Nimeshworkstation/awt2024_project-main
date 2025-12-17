FROM node:current-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . . 

ENV PORT 5000 
EXPOSE $PORT

CMD [ "npm", "start" ]
