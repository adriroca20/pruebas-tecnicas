import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import media from "./data/medias.json"
import mediaRoutes from "./routes/mediaRoutes";
import cors from "cors"
import bodyparser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(bodyparser.json());

app.get("/", (req: Request, res: Response) => {
  res.send(media);
});
app.use("/media", mediaRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});