/* eslint-disable */
import { useNavigate } from "react-router-dom";
import { auth, provider } from "firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Bars3Icon } from "@heroicons/react/24/solid";
import BaseButton from "base/Button";
import logo from "./images/logo.svg";
import { signInWithPopup } from "firebase/auth";

function HeaderNav() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then(() => navigate("/channels"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="w-full max-w-[1180px] flex items-center justify-between py-4 px-6 md:px-10 z-50">
      <a href="#">
        <img src={logo} alt="logo" className="w-32 h-12 object-contain" />
      </a>
      <div className="hidden lg:flex space-x-6">
        <a className="link">Download</a>
        <a className="link">Why Discord?</a>
        <a className="link">Nitro</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
      </div>
      <div className="flex space-x-4 items-center">
        <BaseButton
          classes="bg-white !w-auto !text-sm !px-5 !py-2 text-black hover:text-blurple"
          onClick={!user ? signIn : () => navigate("/channels")}
        >
          {!user ? "Login" : "Open Discord"}
        </BaseButton>
        <Bars3Icon className="h-11 text-white cursor-pointer lg:hidden" />
      </div>
    </div>
  );
}

export default HeaderNav;
