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
  
const IMGUR_BASE_URL = "https://api.imgur.com/3/gallery/"

app.get("/image/:image_id", (req: Request, res: Response) => {
  const {image_id} = req.params 
  console.log({image_id})
  fetch(`https://api.imgur.com/3/gallery/album/${image_id}`,{
      headers:{
        "Authorization": "Client-ID d07ca043349696e"
      }
    }).then(response=>{
      console.log({response})
      return response.json()
    }
      ).then(response=>
      res.json(response.data)
    ).catch(err=>res.status(500).send(err))
});

app.get("/", (req: Request, res: Response) => {
  const {sort, window, section} = req.query
  fetch(IMGUR_BASE_URL + `${section}/${sort}/${window}/1?album_previews=true?albumPreviews=false&showMature=false`,{
      headers:{
        "Authorization": "Client-ID d07ca043349696e"
      }
    }).then(response=>response.json()).then(response=>
      res.json(response.data.slice(0,20))
    ).catch(err=>res.status(500).send(err))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
