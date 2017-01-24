jordalgo.github.io
==================

The website code for www.jordanrome.com - web developer

Feel free to use any code you find here. I'm always experimenting with workflows, optimizations, css, etc... My development setup uses, npm, gulp, and docker.

## Setup (using Docker)

`docker build -t jordanromedotcom .`

## Development

`docker run -name "jordanromedotcom" -p 80:8080 -v $(pwd)/.:/var/www/html -d jordanromedotcom`

This runs a gulp watch task within the container and serves the files via browser-sync located at localhost:80 in your browser.

To tails the logs: `docker logs -f jordanromedotcom`

## Build

`docker run --rm -v $(pwd)/.:/var/www/html jordanromedotcom npm run build`

## Clean Up

Cleans up all docker containers: `docker rm -fv $(docker ps -aq)`
