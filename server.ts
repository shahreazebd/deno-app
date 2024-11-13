import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.json({ msg: "hello from deno" });
});

app.listen(8081);
