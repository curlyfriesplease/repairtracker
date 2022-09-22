import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const app = initializeApp(databaseURL: process.env.REACT_APP_DATABASE_URL);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);



