import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: Number = 3000; // Change to be in dotenv

app.get("/", (req: Request, res: Response) => {
  res.send("THIS WORKS EVEN BETTER FOR TYPESCRIPT");
});

app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`);
});
