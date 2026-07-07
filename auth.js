import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";


import {
getAuth,
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


import {
getFirestore,
doc,
setDoc
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";



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


const db = getFirestore(app);



let registerMode = false;



const emailInput =
document.getElementById("email");


const passwordInput =
document.getElementById("password");


const authBtn =
document.getElementById("authBtn");


const switchBtn =
document.getElementById("switchBtn");


const title =
document.getElementById("title");


const message =
document.getElementById("message");





authBtn.onclick = async()=>{


const email =
emailInput.value.trim();


const password =
passwordInput.value.trim();



if(!email || !password){

message.innerHTML="Fill all fields";

return;

}



try {



if(registerMode){


const result =
await createUserWithEmailAndPassword(
auth,
email,
password
);



await setDoc(

doc(
db,
"users",
result.user.uid
),

{

email:email,

username:
email.split("@")[0],

created:
Date.now()

}

);



message.innerHTML=
"Account created";



location.href="index.html";



}

else{



await signInWithEmailAndPassword(
auth,
email,
password
);



message.innerHTML=
"Login successful";


location.href="index.html";



}



}

catch(error){

message.innerHTML=
error.message;

}



};





switchBtn.onclick=()=>{


registerMode=!registerMode;



if(registerMode){


title.innerHTML="Register";

authBtn.innerHTML="REGISTER";

switchBtn.innerHTML="Login";


}else{


title.innerHTML="Login";

authBtn.innerHTML="LOGIN";

switchBtn.innerHTML="Register";


}


};





onAuthStateChanged(auth,(user)=>{


if(user){

console.log(
"Logged:",
user.email
);

}


});