jordalgo.github.io
==================

The website code for www.jordanrome.com - software developer

Feel free to use any code you find here. I'm always experimenting with workflows, optimizations, css, etc... The build uses npm, [esbuild](https://esbuild.github.io/), and [Less](https://lesscss.org/).

Requires Node.js 20+.

## Setup

`npm install`

## Development

`npm run dev`

Watches `library/scripts` and `library/style`, rebuilds on change, and serves the site at http://localhost:8080.

## Build

`npm run build`

Lints the JavaScript, then writes minified `library/build/main.js` and `library/build/style.css`. The build output is committed since the site is served by GitHub Pages.
