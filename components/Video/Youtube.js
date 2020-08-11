import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import { Item } from 'semantic-ui-react';




const Youtube = ({ videourl }) => {

    return (

        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url= {videourl}
          width='100%'
          height='100%'
          controls= 'true'
        />
      </div>

  

 
  
    )
}


export default Youtube;