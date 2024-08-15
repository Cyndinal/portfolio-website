'use server'
import React from 'react';

async function CreatePostAction(formData:FormData) {
     const firstName1 = formData.get("firstName")
       const lastName1 = formData.get("lastName")
       const email1 = formData.get("email")
       const phone1 = formData.get("phone")
       const textContent1 = formData.get("textContent")

    console.log(firstName1, lastName1, email1, phone1, textContent1)

}



export default CreatePostAction;