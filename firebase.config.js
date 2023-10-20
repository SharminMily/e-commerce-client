
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeE_6hVzkQRMaJbmnnpCYeNUBWVgBxF-s",
  authDomain: "e-commerce-a9baf.firebaseapp.com",
  projectId: "e-commerce-a9baf",
  storageBucket: "e-commerce-a9baf.appspot.com",
  messagingSenderId: "912321567264",
  appId: "1:912321567264:web:bb7a8cb780c0c3d3b5ba45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;