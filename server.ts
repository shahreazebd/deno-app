import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.json({ msg: "hello from deno" });
});

app.get("/health", (_, res) => {
  res.json({ msg: "OK", timestamp: Date.now() });
});

app.listen(8081);
