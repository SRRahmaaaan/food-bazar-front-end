import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyB6qVARB6TnQyo12GbEXl7Fh2uRTQc3ljI",
  authDomain: "food-bazar-b4116.firebaseapp.com",
  projectId: "food-bazar-b4116",
  storageBucket: "food-bazar-b4116.appspot.com",
  messagingSenderId: "614123416085",
  appId: "1:614123416085:web:07e2c5e8e287da4c0dfc1c",
});
export const auth = app.auth()
export default app