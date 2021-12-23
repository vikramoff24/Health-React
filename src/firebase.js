import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAOFuPIZ5XFw2RKXvDu6ZYhVh8-OlXyGd4",
  authDomain: "medex-583a2.firebaseapp.com",
  databaseURL: "https://medex-583a2-default-rtdb.firebaseio.com",
  projectId: "medex-583a2",
  storageBucket: "medex-583a2.appspot.com",
  messagingSenderId: "688094426420",
  appId: "1:688094426420:web:e46214081e3b9733e06161",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    // const query = await db
    //   .collection("users")
    //   .where("uid", "==", user.uid)
    //   .get();

    // if (query.docs.length === 0) {
    //   await db.collection("users").add({
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //   });
    // }

    // console.log("sucessfull");

    const userRef = db.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    console.log(userRef);
    if (!snapshot.exixts) {
      userRef.set({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        createdAt: new Date(),
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res;
    const userRef = db.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    console.log(userRef);
    if (!snapshot.exixts) {
      userRef.set({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        createdAt: new Date(),
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
