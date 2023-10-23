import { collection, where, query, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { myStorage } from "../lib/firebase";
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";

const storageRef = ref(myStorage)

export const doesUsernameExist = async (username) => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where("username", "==", username));
    const result = await getDocs(q)

    return result.docs.length
};

export const loggedUserDoc = async (userId) => {
    const docRef = doc(db, 'users', userId)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        return docSnapshot.data()
    } else alert("no such doc found!")
}

export const uploadImgToStorage = async (img, imgRefPath = 'img') => {
    const imgRef = ref(storageRef, imgRefPath)

    const result = await uploadBytes(imgRef, img)
    console.log(result)
    return result
}

export const downloadImgFromStorage = async (path) => {
    try {
        const imgRef = ref(storageRef, path)
        const url = await getDownloadURL(imgRef)
        return url
    } catch (error) {
        console.log(error)
    }
}

export const uploadPost = async (file, path) => {
    const postRef = ref(storageRef, path)
    uploadBytes(postRef, file).then(() => console.log('post uploaded')).catch(err => console.log(err.message))
}
export const deletePost = async (path) => {
    const postRef = ref(storageRef, path)
    deleteObject(postRef).then(() => console.log('file deleted'))
}