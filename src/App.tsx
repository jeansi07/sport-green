import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import appFirebase from "../src/Credentials";
import "./App.css";
import { SingIn } from "./Pages";
import AppRoutes from "./routes/router";
import Themes from "./theme/theme";

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

  return (
    <>
      <ThemeProvider theme={Themes["light"]}>
        {user ? <AppRoutes /> : <SingIn />}
      </ThemeProvider>
    </>
  );
}

export default App;
