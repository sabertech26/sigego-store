import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD1RDtfOw7-4gfc6eCoqxr7BdWHZrqHdqo",
  authDomain: "sige-go-store.firebaseapp.com",
  projectId: "sige-go-store",
  storageBucket: "sige-go-store.appspot.com",
  messagingSenderId: "1075445449839",
  appId: "1:1075445449839:web:89215d8e155012f35bf99a",
};

initializeApp(firebaseConfig);

const db = getFirestore();

// collection Ref or ColRef
const colRef = collection(db, "products");

// get collection data
getDocs(colRef)
  .then((snaps) => snaps.forEach((doc) => console.log(doc.data())))
  .catch((e) => console.log(e));
