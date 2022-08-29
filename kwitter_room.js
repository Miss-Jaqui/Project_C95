// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAL0OMi1CMKpqORiJozMNETInEEmFYZxOs",
    authDomain: "project-c94-d9c5d.firebaseapp.com",
    databaseURL: "https://project-c94-d9c5d-default-rtdb.firebaseio.com",
    projectId: "project-c94-d9c5d",
    storageBucket: "project-c94-d9c5d.appspot.com",
    messagingSenderId: "563152523934",
    appId: "1:563152523934:web:e073e8b819687b123ae18f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";

  function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
    window.location.replace("kwitter_page.html");
  
  }

  
function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
     Room_names = childKey;
        //Inicia código
       console.log("Room name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
        //Termina código
      
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}