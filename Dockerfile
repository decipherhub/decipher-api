FROM node:15-alpine
WORKDIR /app/server
COPY package.json yarn.lock ./
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && yarn install \
    && apk del .gyp
COPY . .
RUN yarn migrate && yarn build
EXPOSE 3000
CMD ["yarn", "start:prod"]  
