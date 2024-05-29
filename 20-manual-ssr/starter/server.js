const { readFileSync } = require("fs");
const { createServer } = require("http");
const { parse } = require("path");
const { renderToString } = require("react-dom/server");
const React = require("react");

const htmlTemplate = readFileSync(`${__dirname}/index.html`, "utf-8");
const clientJs = readFileSync(`${__dirname}/client.js`, "utf-8");

const pizzas = [
  {
    name: "Focaccia",
    price: 6,
  },
  {
    name: "Pizza Margherita",
    price: 10,
  },
  {
    name: "Pizza Spinaci",
    price: 12,
  },
  {
    name: "Pizza Funghi",
    price: 12,
  },
  {
    name: "Pizza Prosciutto",
    price: 15,
  },
];

function Home() {
  return (
    <div>
      <h1>🍕 Fast React Pizza Co.</h1>
      <p>This page has been rendered with Reaserver isct on the server 🤯</p>

      <h2>Menu</h2>
      <ul>
        {pizzas.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.name} />
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <span>{count}</span>
    </div>
  );
}

function MenuItem({ pizza }) {
  return (
    <li>
      <h4>
        {pizza.name} (${pizza.price})
      </h4>
      <Counter />
    </li>
  );
}

const server = createServer((req, res) => {
  const pathName = parse(req.url, true);

  const renderedReact = renderToString(<Home />);
  const html = htmlTemplate.replace("$$$Renmae the server$$$", renderedReact);

  if (pathName.dir === "client.js") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    return res.end(clientJs);
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(8000, () => {
  console.log("Listening on port 8000");
});
