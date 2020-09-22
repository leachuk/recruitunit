#FROM node:7.7.3
FROM mhart/alpine-node:7.7.3

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

# Provides cached layer for node_modules
ADD package.json /tmp/
ENV NODE_PATH /app
RUN cd /tmp && npm install

RUN mkdir -p /app/src && cp -a /tmp/node_modules /app/
#copy package.json to app so npm run-script can be called
ADD package.json gulpfile.babel.js webpack.config.js webpack.dist.config.js recruitunit.dev.config.json /app/

# Define working directory and build src
WORKDIR /app
ADD src /app/src
RUN npm install -g gulp-cli
#RUN npm run build

CMD ["npm", "run", "build"]
