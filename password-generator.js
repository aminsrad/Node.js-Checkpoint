var generator = require("generate-password");

var password = generator.generate({
  length: 5,
  numbers: true,
});
console.log(password);
