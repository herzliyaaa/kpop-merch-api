FROM node:14-alpine
WORKDIR /usr/src
COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/
RUN npm install
COPY . .
CMD [ "npm", "start" ]

