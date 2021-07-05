import * as firebase from 'firebase';
import "firebase/firebase-firestore";
import 'firebase/firebase-auth';
const firebaseConfig = {
    apiKey: "AIzaSyD_RnaYAeBQW_N65otZf67dv7n_DEGCKSo",
    authDomain: "signal-f727e.firebaseapp.com",
    projectId: "signal-f727e",
    storageBucket: "signal-f727e.appspot.com",
    messagingSenderId: "605889752529",
    appId: "1:605889752529:web:61a14a822f3aceee28c4f0"

  };
  let app;
  if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);
  }else{
    app=firebase.app();
  }
  const db=app.firestore();
  const auth=firebase.auth();
  export{ db, auth};
  
 