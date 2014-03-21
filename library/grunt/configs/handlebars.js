module.exports = {
  compile: {
    options: {
      namespace: "JST",
      commonjs: true
    },
    files: {
      "library/scripts/templates/work.js": "library/scripts/templates/*.hbs"
    }
  }
};