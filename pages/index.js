import React from 'react';
import axios from 'axios';
import VideoList from '../components/Index/VideosList';
import baseUrl from '../utils/baseUrl';



function Home( {videos} ) {
   
    console.log(videos);

    React.useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        const url = `${baseUrl}/api/videos`;
        const response = await axios.get(url);
        console.log(response.data);
    }

   
    return <VideoList videos = {videos} />;
}

Home.getInitialProps = async () => {

     const url = 'http://localhost:3000/api/videos'
      const response = await axios.get(url);
      return { videos: response.data};
}


export default Home;
