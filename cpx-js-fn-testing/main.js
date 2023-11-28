function main(args) {
    const oneLinerJoke = require('one-liner-joke');
    let getRandomJoke = oneLinerJoke.getRandomJoke();

    return {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
      body: {"joke": getRandomJoke, "test": true}
   }
}

module.exports.main = main;