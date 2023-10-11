import { getDatabase, ref, set } from 'firebase/database';
import { firebase } from "../lib/firebase";

//intialize realtime database
export const database = getDatabase(firebase);



export const uploadPost = async (data) => {
    set(ref(database, 'posts/' + crypto.randomUUID()), data).then(alert('successful')).catch(err => alert(err));
};