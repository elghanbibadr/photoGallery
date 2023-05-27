
import './App.css'
import { db } from '../firebaseConfig'
import { collection, getDocs, addDoc, deleteDoc, doc ,updateDoc} from "firebase/firestore";
import { useState } from 'react'
import { useEffect } from 'react';

function App() {
  const [myImages ,setMyImages]=useState([])
  const collectionRef=collection(db, 'myImages')
  const getImages = async () => {
    const querySnapshot = await getDocs(collectionRef)
    const imagesData = []
    querySnapshot.forEach((doc) => {
      imagesData.push({ id: doc.id, ...doc.data() });
    });
    setMyImages(imagesData)
  }


  useEffect(() => {
    getImages()
  },[])

  const handleImageUpload=(e) => {
    const file = e.target.files[0];
    console.log(file)
  }
  console.log(myImages)

  return (
   <div className='mx-auto max-w-[1200px]'>
    <h2 className='text-orange-300 mt-10 text-2xl'>fireGram</h2>
    <div className='text-center'>
      <h1 className='text-5xl mt-40'>Your Pictures</h1>
      <p className='my-6 text-lg font-normal'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, earum.</p>
    <input type="file" onChange={handleImageUpload}  className='text-orange-300 text-xl border-2 border-orange-300 font-bold cursor-pointer  rounded-full  h-10 justify-center items-center inline-flex w-10' accept="image/*"  />
    <div className='grid grid-cols-3 gap-6  mt-10'>
      {myImages.map(({id,imageSrc}) =>{
         return <img className='h-full' key={id} src={imageSrc} alt="image" />
      })}
    </div>
    </div>
    </div>
  )
}

export default App
