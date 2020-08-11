function catchErrors(error, displayError) {
   let errorMsg;
   if(error.response) {
       errorMsg = error.response.data;
       console.error("Error Response", errorMsg)

       //cloudinary
       if(error.response.data.error){
           errorMsg = error.response.data.error.message;
       }
   } else if(error.request){
       errorMsg = error.request;
       console.error("Error Request", errorMsg)
   } else {
       errorMsg = error.message;
       console.error("Error Message", errorMsg)
   }
   displayError(errorMsg);
}

export default catchErrors;