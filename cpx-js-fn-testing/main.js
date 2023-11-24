function main(args) {
    const oneLinerJoke = require('one-liner-joke');
    let getRandomJoke = oneLinerJoke.getRandomJoke();

    return {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: `<html><body><h3>Hello, Functions on CodeEngine!</h3></body></html>`
   }
}

module.exports.main = main;