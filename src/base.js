import Rebase from 're-base';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseapp= firebase.initializeApp(
    {
        apiKey: "AIzaSyD2yokTKWqz1dVnkDQ1dClnzObKWH1rKSY",
        authDomain: "catch-of-the-day-palak-periwal.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-palak-periwal-default-rtdb.firebaseio.com",
        projectId : "catch-of-the-day-palak-periwal"
       
    }
)

// const base= Rebase.createClass(firebaseapp.firestore());
// export default base;