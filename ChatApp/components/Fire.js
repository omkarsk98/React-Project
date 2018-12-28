import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }
  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        // 4.
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };
  
  get ref() {
    return firebase.database().ref("messages");
  }
  
  on = callback =>
    this.ref
      .limitToLast(20)
      .on("child_added", snapshot => callback(this.parse(snapshot)));
  
  parse = snapshot => {};
  
  off() {
    this.ref.off();
  }
  init = () =>
    firebase.initializeApp({
      apiKey: "AIzaSyCZTR4ynmRG5EMasttq-7skyB0DotSOLrg",
      authDomain: "chat-app-7e2f1.firebaseapp.com",
      databaseURL: "https://chat-app-7e2f1.firebaseio.com",
      projectId: "chat-app-7e2f1",
      storageBucket: "chat-app-7e2f1.appspot.com",
      messagingSenderId: "517560283933"
    });
}
Fire.shared = new Fire();
export default Fire;
