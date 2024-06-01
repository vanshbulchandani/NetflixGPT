import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const handleSignOut = () => {
    // Call API to sign out the user
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div class="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="usericon"
            src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
          />
          <button
            onClick={handleSignOut}
            className="text-white text-lg font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
