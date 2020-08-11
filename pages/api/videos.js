//import videos from '../../static/videos.json';

import Video from '../../models/Video';
import connectDb from '../../utils/connectDb';

connectDb();

export default async (req, res) => {

  const videos = await Video.find()
  res.status(200).json(videos);
    
};