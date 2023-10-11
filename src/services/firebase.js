import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export const doesUsernameExist = async (username) => {
    const usersRef = collection(db, 'users');

    const q = query(usersRef, where("username", "==", username));

    const result = await getDocs(q)
    return result.docs.length
};