import { db } from "./lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default async function seedDatabase() {

    const users = [
        {
            userId: 'NvPY9M9MzFTARQ6M816YAzDJxZ72',
            username: 'karl',
            fullName: 'Karl Hadwen',
            emailAddress: 'karlhadwen@gmail.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'raphael',
            fullName: 'Raffaello Sanzio da Urbino',
            emailAddress: 'raphael@sanzio.com',
            following: [],
            followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'dali',
            fullName: 'Salvador Dalí',
            emailAddress: 'salvador@dali.com',
            following: [],
            followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
            dateCreated: Date.now()
        },
        {
            userId: '4',
            username: 'orwell',
            fullName: 'George Orwell',
            emailAddress: 'george@orwell.com',
            following: [],
            followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
            dateCreated: Date.now()
        }
    ];

    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
        await addDoc(collection(db, 'users'), users[k]);

    }

    // eslint-disable-next-line prefer-const
    // for (let i = 1; i <= 5; ++i) {
    //     await addDoc(collection(db, 'photos'), {
    //         photoId: i,
    //         userId: '2',
    //         imageSrc: `/images/users/raphael/${i}.jpg`,
    //         caption: 'Saint George and the Dragon',
    //         likes: [],
    //         comments: [
    //             {
    //                 displayName: 'dali',
    //                 comment: 'Love this place, looks like my animal farm!'
    //             },
    //             {
    //                 displayName: 'orwell',
    //                 comment: 'Would you mind if I used this picture?'
    //             }
    //         ],
    //         userLatitude: '40.7128°',
    //         userLongitude: '74.0060°',
    //         dateCreated: Date.now()
    //     });
    // }
}