import React, { useState } from 'react'
import { storage } from '../firebaseConfig'
import { v4 } from 'uuid'
import { ref, uploadBytes } from 'firebase/storage'
const App = () => {
  const [imageUpload ,setImageUpload] = useState(null)

  const handleImageUploaded=(e) => {
    e.preventDefault();
    if(!imageUpload)return;
    const imageRef=ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef,imageUpload).then(() => {
      alert('image uploaded')
    });
    console.log(file)
  }
  return (
    <div>
      <form onSubmit={handleImageUploaded} >
      <input onChange={(e) =>setImageUpload(e.target.files[0])} type="file"   />
    <button >upload file</button>
      </form>

    </div>
  )
}

export default App