import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNBRyU28j_q5_KzIu_vYQ-YIM8fv0tB3I",
  authDomain: "discord-clone-228eb.firebaseapp.com",
  projectId: "discord-clone-228eb",
  storageBucket: "discord-clone-228eb.appspot.com",
  messagingSenderId: "943343705581",
  appId: "1:943343705581:web:f0cf70ad96d6209e539be4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);

export { auth, provider, db };

