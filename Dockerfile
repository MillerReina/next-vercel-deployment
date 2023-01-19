FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app 

COPY package.json /app 

RUN yarn install 

COPY . /app 

RUN yarn build 

# Cambiar el usuario a el del ambiente ROOT

EXPOSE 3000

CMD ["yarn", "start"]