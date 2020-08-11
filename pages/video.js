import axios from 'axios';
import VideoSummary from '../components/Video/VideoSummary';
import VideoAttributes from '../components/Video/VideoAttributes';
import Youtube from '../components/Video/Youtube';
import baseUrl from '../utils/baseUrl';


function Video({ video, user }) {
  
  //console.log(video);
  // 
  return (
    
    <>
       <Youtube {...video}/>
      
       <VideoSummary {...video} />
       <VideoAttributes user={user} {...video} />
      
       
    </>
    
    
  
  )
  
}

Video.getInitialProps = async ({ query:{_id} }) => {
  const url = `${baseUrl}/api/video`;
  const payload = {params:{_id}}
  const response = await axios.get(url,payload)
  return { video: response.data }
 
}



export default Video;