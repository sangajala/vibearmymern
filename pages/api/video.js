import Video from '../../models/Video';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req,res) => {
   switch(req.method) {
      case "GET" :
         await handleGetRequest(req,res);
      break;

      case "DELETE":
          await handleDeleteRequest(req,res);
      break;

      case "POST":
         await handlePostRequest(req,res);
      break;

      default:
         res.status(405).send(`Method ${req.method} not allowed`);
      break;   
   }
}


async function handleGetRequest(req, res) {
    const { _id }  =  req.query;
    const video =  await Video.findOne({ _id })
    res.status(200).json(video)
}

async function handleDeleteRequest(req, res) {
   const { _id }  =  req.query;
   await Video.findOneAndDelete({ _id })
   res.status(204).json({})
}


async function handlePostRequest(req, res){
   const { title, price, mediaurl,videourl, description } = req.body;
   try {
      if(!title || !price || !mediaurl || !videourl || !description) {
         return res.status(422).send("Video missing one or more fields")
      }
    const video = await new Video({
         title,
         price,
         mediaurl,
         videourl,
         description
      }).save()
      
      res.status(201).json(video)
   } catch(error) {
      console.error(error);
        res.status(500).send("Server Error While Creating Video");
   }
   
}



