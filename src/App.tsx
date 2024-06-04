import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import appFirebase from "../src/Credentials";
import "./App.css";
import { Home, SingIn } from "./Pages";

const auth = getAuth(appFirebase);

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setUser(userFirebase);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return <>{user ? <Home /> : <SingIn />}</>;
}

export default App;
