import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp ({
	// CURRENT DB
	apiKey: process.env.API_KEY,
	authDomain: "greencommerce-db.firebaseapp.com",
	projectId: "greencommerce-db",
	storageBucket: "greencommerce-db.appspot.com",
	messagingSenderId: "1092162152308",
	appId: "1:1092162152308:web:c5f2ccbc2d88bc041d6e21",
	measurementId: "G-BTR0W4LFSL"

})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

