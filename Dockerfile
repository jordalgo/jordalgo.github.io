FROM node:6

# Install app dependencies
COPY package.json .
RUN npm install --global gulp-cli
RUN npm install

WORKDIR /var/www/html
COPY gulpfile.js /var/www/html

EXPOSE 8080
CMD [ "npm", "run", "dev" ]
