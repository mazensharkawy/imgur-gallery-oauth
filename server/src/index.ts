import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { Request, Response, Application } from "express";

const app: Application = express();
app.use(express.json());

dotenv.config({ path: path.resolve(__dirname, "./config/.env") });

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  fetch("https://api.imgur.com/3/gallery/hot/viral/day/1?album_previews=true?albumPreviews=false&showMature=false",{
      headers:{
        "Authorization": "Client-ID d07ca043349696e"
      }
    }).then(response=>response.json()).then(response=>{
      res.json(response.data.slice(0,20))
    }).catch(err=>res.status(500).send(err))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
