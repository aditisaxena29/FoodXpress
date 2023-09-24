import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCOSmAerBvmp0ipgaqldUw9jc7OYqVmN6Y",
    authDomain: "foodxpress-2bbea.firebaseapp.com",
    databaseURL: "https://foodxpress-2bbea-default-rtdb.firebaseio.com",
    projectId: "foodxpress-2bbea",
    storageBucket: "foodxpress-2bbea.appspot.com",
    messagingSenderId: "872290340639",
    appId: "1:872290340639:web:9e40ad3055110467e6ea2a"
  };

const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};
  