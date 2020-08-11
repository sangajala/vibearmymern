import { Card } from 'semantic-ui-react'
import Youtube from '../Video/Youtube'


function VideosList({ videos }) {

  const YoutubeVideo = () => {
    <Youtube />
  }

  function mapVideosToItems(videos) {

    return videos.map(video => ({
      header: video.title,
      image: video.mediaurl,
      color: 'teal',
      fluid: true,
      childKey: video._id,
      href: `/video?_id=${video._id}`
      
      
      
      
      

    }
    ))
  }
  return <Card.Group stackable itemsPerRow="3" centered items={mapVideosToItems(videos)} />
}

export default VideosList;
