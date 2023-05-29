import React, { useEffect, useState } from 'react'
import { storage } from '../firebaseConfig'
import { v4 } from 'uuid'
import { ref, uploadBytes ,listAll, getDownloadURL} from 'firebase/storage'
const App = () => {
  const [imageUpload ,setImageUpload] = useState(null)
  const [imageList,setImageList] = useState([])

  const imageListRef=ref(storage,"images/")

  const handleImageUploaded=(e) => {
    e.preventDefault();
    if(!imageUpload)return;
    const imageRef=ref(storage, `images/${imageUpload.name + v4()}`)
    uploadBytes(imageRef,imageUpload).then(() => {
      alert('image uploaded')
    });
    }
    useEffect(()=>{
     listAll(imageListRef).then(res=>{
       res.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
          setImageList((prv) =>[...prv,url])
        })
       })
     })
    },[])
    console.log(imageList)
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