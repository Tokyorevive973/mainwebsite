import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";


import {
getAuth,
onAuthStateChanged,
signOut
} from 
"https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";



const firebaseConfig = {

apiKey: "AIzaSyAVy5MKkpv4EiG3s6rZknj1KvXaUGh5ZXs",

authDomain: "whitecore-iv.firebaseapp.com",

projectId: "whitecore-iv",

storageBucket: "whitecore-iv.firebasestorage.app",

messagingSenderId: "709987333173",

appId: "1:709987333173:web:9ce43a25a704dfa525ad7c"

};



const app = initializeApp(firebaseConfig);


const auth = getAuth(app);



const profileBtn =
document.getElementById("profileBtn");



onAuthStateChanged(auth,(user)=>{


if(user){

    // be van jelentkezve

    profileBtn.innerHTML="LOGOUT";

    profileBtn.href="#";


    profileBtn.onclick=()=>{


        signOut(auth)

        .then(()=>{

            location.reload();

        });


    };


}else{


    // nincs bejelentkezve

    profileBtn.innerHTML="PROFILE";

    profileBtn.href="auth.html";


}


});