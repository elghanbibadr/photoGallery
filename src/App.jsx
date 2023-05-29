import React, { useState } from 'react'
import { storage } from '../firebaseConfig'
const App = () => {
  const [imageUpload ,setImageUpload] = useState(null)

  const handleImageUploaded=(e) => {
    e.preventDefault();
    if(!imageUpload)return;
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