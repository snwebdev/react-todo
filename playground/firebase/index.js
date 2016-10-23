import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAALILERvoNNYXSsNpLzmfATUBE-uJ-bDA",
    authDomain: "todo-app-d9383.firebaseapp.com",
    databaseURL: "https://todo-app-d9383.firebaseio.com",
    storageBucket: "todo-app-d9383.appspot.com",
    messagingSenderId: "654627852087"
  };
  firebase.initializeApp(config);

var firebaseRef =   firebase.database().ref();
  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0'
    },
    isRunning: true,
    user: {
      name: 'Stewart',
      age: 53
    }
  });

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('new todo added', snapshot.key, snapshot.val());
  });

  todosRef.push({
    text: 'todo 1'
  });

    todosRef.push({
      text: 'todo 2'
    });
