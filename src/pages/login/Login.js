import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useContext, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function Login() {
  const [error, set_error] = useState(false);
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  function handle_login(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type: "LOGIN", payload: user})
        navigate("/");
      })
      .catch(() => {
        set_error(true);
      });
  }

  return (
    <div className="login">
      <form onSubmit={handle_login}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => set_email(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => set_password(e.target.value)}
        ></input>
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
}

export default Login;
