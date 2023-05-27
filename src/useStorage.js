import { useState ,useEffect } from "react";
import { projectStorage } from "../firebaseConfig";
const useStorage= (file) => {
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null)

    useEffect(() => {
        const storageRef=projectStorage.ref(file.name)
    })
}