import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const productList = document.querySelector("#productList");
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
let products = [];
getDocs(colRef)
  .then((snaps) =>
    snaps.forEach((doc) => {
      products.push(doc.data());
      products.forEach((product) => {
        console.log(product);
        productList.innerHTML = "";
        productList.innerHTML = `<tr>
                                    <th>Product Name!</th>
                                    <th>QTY</th>
                                    <th>Price</th>
                                </tr>`;
        productList.innerHTML += `<tr>
                                    <td>${product.productname}</td>
                                    <td>${product.qty}</td>
                                    <td>${product.price}</td>
                                </tr>`;
      });
    })
  )
  .catch((e) => console.log(e));
