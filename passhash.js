const bcrypt = require("bcrypt");

const makeHash = async () => {
  const myPassword = "admin123";
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash)
};

makeHash();