import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import appFirebase from "../src/Credentials";
import "./App.css";
import { SingIn } from "./Pages";
import AppRoutes from "./routes/router";

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

  return <>{user ? <AppRoutes /> : <SingIn />}</>;
}

export default App;
