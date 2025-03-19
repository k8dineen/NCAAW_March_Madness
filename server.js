const http = require("http");
const { json } = require("stream/consumers");
//require("dotenv").config();

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    //res = response
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({message: "Hello to Kates code"}));
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server started on port : ${PORT}`);
})

