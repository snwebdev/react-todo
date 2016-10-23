import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyAALILERvoNNYXSsNpLzmfATUBE-uJ-bDA",
      authDomain: "todo-app-d9383.firebaseapp.com",
      databaseURL: "https://todo-app-d9383.firebaseio.com",
      storageBucket: "todo-app-d9383.appspot.com",
      messagingSenderId: "654627852087"
    };
    firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef =   firebase.database().ref();
export default firebase;
