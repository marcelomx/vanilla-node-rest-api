const http = require("http");
const products = [
  {
    id: 1,
    title: "Test product",
    description: "Test product ",
    price: 1.95,
  },
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(products));
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
