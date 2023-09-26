import { getDatabase, ref, set } from 'firebase/database'
import { firebaseApp } from "./firebase.config"

//intialize realtime database
export const database = getDatabase(firebaseApp)



export const uploadPost = async (data) => {
    set(ref(database, 'posts/' + crypto.randomUUID()), data).then(alert('successful')).catch(err => alert(err))
}