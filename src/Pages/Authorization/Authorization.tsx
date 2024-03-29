// Styles
import s from "./Authorization.module.scss";
// Icons
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// Router
import { Link } from "react-router-dom";
// Hooks
import { useState } from "react";

export const Authorization: React.FC = () => {
  const [activeSignIn, setActiveSignIn] = useState(false);
  const [activeSignUp, setActiveSignUp] = useState(false);

  if (activeSignUp) {
    document.title = "Ensome | Sign Up";
  } else {
    document.title = "Ensome | Sign In";
  }
  return (
    <>
      <section className={s.AuthorizationPage}>
        <section className={s.AuthorizationInner}>
          <section className={s.AuthorizationForms}>
            <form className={`${activeSignIn ? s.hide : ""}`}>
              <h1>Sign In</h1>
              <div className={s.formSignInInputs}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="name@email.com" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your pass..." />
                <button type="submit">Log in</button>
              </div>
              <div className={s.formSignInGoogle}>
                <p>
                  <span></span>
                  or
                  <span></span>
                </p>
                <button>
                  <FontAwesomeIcon icon={faGoogle} />
                  log in with google
                </button>
              </div>
              <div className={s.formSignInInfo}>
                <Link to={""}>Forgot password?</Link>
                <p>
                  Don`t have an account?
                  <Link
                    onClick={() => {
                      setActiveSignIn(true);
                      setActiveSignUp(true);
                    }}
                    to={""}
                  >
                    {" "}
                    Sign up
                  </Link>
                  <br />
                </p>
              </div>
            </form>
            <form className={` ${activeSignUp ? s.active : ""}`}>
              <h1>Sign Up</h1>
              <div className={s.formSignInInputs}>
                <label htmlFor="email">Login</label>
                <input type="text" placeholder="Enter your log..." />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="name@email.com" />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your pass..." />
                <label htmlFor="password">Password confirm</label>
                <input type="password" placeholder="Password conf..." />
                <button type="submit">Sign up</button>
              </div>
              <div className={s.formSignInInfo}>
                <p>
                  You have account?
                  <Link
                    onClick={() => {
                      setActiveSignIn(false);
                      setActiveSignUp(false);
                    }}
                    to={""}
                  >
                    {" "}
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
            <Link className={s.btnHome} to={"/"}>
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to home page
            </Link>
          </section>
        </section>
      </section>
    </>
  );
};
