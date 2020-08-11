import { Item, Header, Button } from 'semantic-ui-react';
import AddVideo from './AddVideo';
import Youtube from './Youtube';


function VideoSummary({ title, price, mediaUrl,videourl, description,_id}) {
  return (
   
    <>
 
    <Item.Group>
    <Item>
      
      <Item.Content>
         <Item.Header> 
              <Header as="h2">About This Video</Header>
              <p>{ description }</p>
                
          </Item.Header>
         <Item.Description>
               <h3>Genre: { title } </h3>
               <p> Price: {price}</p>
              
               
         </Item.Description>


         <Item.Extra>
            <AddVideo videoId= {_id}/>
         </Item.Extra>

      </Item.Content>
     </Item>
   </Item.Group>
   

     
   </>
  )
}

export default VideoSummary;
