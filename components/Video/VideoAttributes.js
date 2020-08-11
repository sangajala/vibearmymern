import React from 'react';
import { Header, Button, Modal } from 'semantic-ui-react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import { useRouter } from 'next/router';

function VideoAttributes( { description, _id, user}) {
    const [modal, setModal] = React.useState(false)
    const router = useRouter();
    const isRoot = user.role === 'root';
    const isAdmin = user.role === 'admin';
    const isRootOrAdmin = isRoot || isAdmin

   async function handleDelete() {
        const url = `${baseUrl}/api/video`
        const payload = { params: { _id }}
        await  axios.delete(url,payload)
        router.push('/');

    }


  return  <>
   {isRootOrAdmin && <>
    <Button 
      icon="trash alternate outline"
      color ="red"
      content="Delete Video"
      onClick={() => setModal(true)}
    />
   <Modal open = {modal} dimmer = "blurring" >
       <Modal.Content>
              <p>Are you sure you want to delete this video?</p>
       </Modal.Content>

       <Modal.Actions>
         <Button 
           onClick={() => setModal(false)}
           content="Cancel"/>
         <Button 
            negative
            icon="trash"
            labelPosition="right"
            content="Delete"
            onClick={handleDelete}
         />
       </Modal.Actions>

   </Modal>
   </>}
  
  </>;
}

export default VideoAttributes;


/*
 <Header as="h2" id="fonts">About This Video</Header>
   <p>{ description }</p>
   <Button 
     icon="trash alternate outline"
     color ="red"
     content="Delete Video"
     
   />

*/