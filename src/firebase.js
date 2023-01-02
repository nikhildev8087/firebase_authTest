import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth" 


const firebaseConfig = {
  apiKey: "AIzaSyAEtjZAsim5kXvvDkciJGAMLhAvVi5MIl4",
  authDomain: "auth-developement-70c78.firebaseapp.com",
  projectId: "auth-developement-70c78",
  storageBucket: "auth-developement-70c78.appspot.com",
  messagingSenderId: "846721768332",
  appId: "1:846721768332:web:2b456b11e55e12f786d4a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;





