import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbvUuZg47GcPPZLAJQsHu0WkazfKL-Zeo",
  authDomain: "redditclone-ce285.firebaseapp.com",
  projectId: "redditclone-ce285",
  storageBucket: "redditclone-ce285.appspot.com",
  messagingSenderId: "61131801859",
  appId: "1:61131801859:web:baaddb98dcd11283329536",
};

const app = initializeApp(firebaseConfig);

export { app };