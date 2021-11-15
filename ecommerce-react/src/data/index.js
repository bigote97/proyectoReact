import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp ({
	// CURRENT DB
	// apiKey: process.env.API_KEY,
	// authDomain: "greencommerce-db.firebaseapp.com",
	// projectId: "greencommerce-db",
	// storageBucket: "greencommerce-db.appspot.com",
	// messagingSenderId: "1092162152308",
	// appId: "1:1092162152308:web:c5f2ccbc2d88bc041d6e21",
	// measurementId: "G-BTR0W4LFSL"
	// AUXILIAR DB
	apiKey: "AIzaSyBmVAML8PeJwaPl0vp5K2KIPOltQRnah1I",
	authDomain: "greencommerce-db-auxiliar.firebaseapp.com",
	projectId: "greencommerce-db-auxiliar",
	storageBucket: "greencommerce-db-auxiliar.appspot.com",
	messagingSenderId: "855834797238",
	appId: "1:855834797238:web:ef32535a3c1bd2a6ad7217",
	measurementId: "G-7KC9C4WKBC"

})

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

