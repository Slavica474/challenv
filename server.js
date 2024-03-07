const port = process.env.SERVER_PORT;
server.listen(port);

require("dotenv").config();

const name = process.env.MY_NAME || "Slavica";
const city = process.env.MY_CITY || "Paris";
const language = process.env.MY_LANGUAGE || "JavaScript";

console.log(`I am ${Slavica}, wilder in ${Paris}, and I love ${JavaScript}.`);
