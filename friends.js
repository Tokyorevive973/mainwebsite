import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";


import {
getAuth,
onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";


import {
getFirestore,
collection,
getDocs
}
from
"https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";



const firebaseConfig = {

apiKey: "AIzaSyAVy5MKkpv4EiG3s6rZknj1KvXaUGh5ZXs",

authDomain: "whitecore-iv.firebaseapp.com",

projectId: "whitecore-iv",

storageBucket: "whitecore-iv.firebasestorage.app",

messagingSenderId:"709987333173",

appId:"1:709987333173:web:9ce43a25a704dfa525ad7c"

};



const app =
initializeApp(firebaseConfig);


const auth =
getAuth(app);


const db =
getFirestore(app);



const userList =
document.getElementById("userList");





onAuthStateChanged(auth,async(user)=>{


if(!user){

location.href="auth.html";

return;

}



try{


const snapshot =
await getDocs(
collection(db,"users")
);



userList.innerHTML="";



snapshot.forEach((doc)=>{


const data =
doc.data();



if(data.email !== user.email){



userList.innerHTML += `

<div class="user">


<div>

<h3>
${data.username}
</h3>


<p>
${data.email}
</p>


</div>


<div class="status"></div>


</div>

`;



}



});



if(userList.innerHTML===""){

userList.innerHTML=
"No players found";

}



}

catch(error){


console.log(error);


userList.innerHTML=
"Database error";


}



});