import React from "react";
import { Link } from "react-router-dom";
import alien from "../assets/alien.png";
import alienDark from "../assets/alien-dark.png";
import { Button } from "@material-tailwind/react";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-full items-center text-center gap-4 min-h-svh justify-center">
      <img
        src={alien}
        alt="Not Found Illustration"
        className="dark:hidden h-56"
      />
      <img
        src={alienDark}
        alt="Not Found Illustration"
        className="hidden dark:block h-56"
      />
      <div className="flex flex-col gap-1">
      <h1 className="sub-heading text-2xl font-semibold">Not Found</h1>
      <p>Oops, seems like this page was taken by the aliens!</p>
      </div>
      <Link to="/">
            <Button
              variant="gradient"
              className="inline-flex items-center gap-2 capitalize group mt-4"
              color="deep-purple"
            >
                <Home size={18}/>
              <span>Return Home</span>
            </Button>
          </Link>
    </div>
  );
};

export default NotFound;
