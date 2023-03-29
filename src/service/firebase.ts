import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAykMCcxG9wb-VmPAtygzvbnrYShn3As0w",
  authDomain: "rpg-statistics.firebaseapp.com",
  projectId: "rpg-statistics",
  storageBucket: "rpg-statistics.appspot.com",
  messagingSenderId: "98784462146",
  appId: "1:98784462146:web:ef287967d6548c78e1b4db"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
