import React from 'react';
import { Form, Input, TextArea, Button, Image, Video, Embed,Message, Header,
  Icon,
  FormGroup} from 'semantic-ui-react';
import axios from 'axios';  
import baseUrl from '../utils/baseUrl';
import catchErrors from '../utils/catchErrors';

  const INITIAL_VIDEO = {
    title: "",
    price:"",
    mediaurl:"",
    videourl:"",
    description:""
   
  }
  

function UploadVideo(_id) {

    const [video, setVideo] =   React.useState(INITIAL_VIDEO);

    const [mediaPreview, setMediaPreview] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [disabled,setDisabled] = React.useState(true);
    const [error,setError] = React.useState('');

    React.useEffect( () => {
      const isVideo = Object.values(video).every(el => Boolean(el))
      isVideo ? setDisabled(false) : setDisabled(true)
       },[video])

    function handleChange(event) {
       const{ name, value, files } = event.target;
       if(name === 'media') {
         setVideo(prevState => ({ ...prevState, media: files[0]}
          ))
         setMediaPreview(window.URL.createObjectURL(files[0]))
       } else {
         setVideo(prevState => ({ ...prevState, [name]: value}))
         ;
       }
      
       //console.log(video);
    }

    {/* 
    function handleVideoUpload()
    {
      const data =  new FormData()
      data.append('upload_preset','vibeArmy')
      data.append('cloud_name','devappsniharika')
    }
    */}

   
   async function handleSubmit(event)
    {
      try {
        event.preventDefault();
        setLoading(true);
        setError('')
       //console.log(video);
       const url = `${baseUrl}/api/video`
       const { title, price, mediaurl, videourl, description} = video
       const payload = { title, price, mediaurl,videourl, description };
       const response =  await axios.post(url, payload);
       console.log({response})
       setLoading(false);
       setVideo(INITIAL_VIDEO)
       setSuccess(true);

      }catch(error) {
        catchErrors(error,setError)
       // console.error("Error!",error);
      }
      finally {
        setLoading(false);
      }
        
    } 
  return (
    <>
     <Header as="h2" block>
         <Icon name="add" color="orange"/>
         Create New Video
     </Header>

     <Form loading={loading} error={Boolean(error)} success={success} onSubmit={handleSubmit}>
     <Message
          error
          header="Something went wrong!"
          content={error}
       />
       
       <Message
          success
          icon="check"
          header="Success!"
          content="Your video has been posted"
       />
         <Form.Group widths="equal"> 
             <Form.Field
                 control= {Input}
                 name="title"
                 label="Title"
                 placeholder="Title"
                 value={video.title}
                 onChange={handleChange}
             />

          <Form.Field
                 control= {Input}
                 name="price"
                 label="Price"
                 placeholder="Price"
                 min="0.00"
                 step="0.01"
                 type="number"
                 value={video.price}
                 onChange={handleChange}
             />      
             </Form.Group>

             {/* 
          <Form.Field
                 control= {Input}
                 name="media"
                 type="file"
                 label="Media"
                 accept="video/*"
                 content="Select Video"
                 onChange={handleChange}
            />  
             */}
            {/* 
            <Embed
             icon='right circle arrow'
             placeholder={mediaPreview}
             url='https://res.cloudinary.com/devappsniharika/video/upload/v1596530565/videos/testVideo_ghms8k.mp4'
            />
             */}
             {/*  <Embed src={mediaPreview}/> */}

             

             <Form.Field
                 control= {Input}
                 name="mediaurl"
                 type="url"
                 label="MediaUrl"
                 accept="link/*"
                 placeholder="MediaUrl"
                 value={video.mediaurl}
                 onChange={handleChange}
            />  
            
            <Form.Field
                 control= {Input}
                 name="videourl"
                 type="url"
                 label="VideoUrl"
                 accept="link/*"
                 placeholder="VideoUrl"
                 value={video.videourl}
                 onChange={handleChange}
            />  

            <Form.Field
                control={TextArea}
                name="description"
                label="Description"
                placeholder="Description"
                value={video.description}
                onChange={handleChange}
                

            />
            <Form.Field
                 control= {Button}
                 disabled={ disabled || loading}
                 color="blue"
                 icon="pencil alternate"
                 content="Submit"
                 type="submit"
                
            />    


        

     </Form>


    </>
)
}

export default UploadVideo;
