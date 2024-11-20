import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { PartyPopper, RotateCcw } from "lucide-react";
import successImage from "../assets/success.png";
import successImageDark from "../assets/success-dark.png";
import errorImage from "../assets/error.png";
import errorImageDark from "../assets/error-dark.png";

export function Modal({ status }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    if (status) {
      setOpen(true);
      const timer = setTimeout(() => {
        setOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const message = status === "success" ? "Congratulations!" : "Error!";

  const desc =
    status === "success"
      ? "I must have received your email. I will get back to you as soon as possible"
      : "Oops! Something went wrong. Your message did not take off.";

  const label = status === "success" ? "Lets Go" : "Try again later";

  const icon =
    status === "success" ? <PartyPopper size={18} /> : <RotateCcw size={18} />;

  const image = status === "success" ? successImage : errorImage;
  const imageDark = status === "success" ? successImageDark : errorImageDark;

  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="xs"
      className="bg-white dark:bg-gray-900"
    >
      <DialogHeader></DialogHeader>
      <DialogBody className="flex flex-col items-center gap-8 text-center w-full">
        <img
          src={image}
          alt={status}
          className="h-64 w-full object-contain dark:hidden"
        />
        <img
          src={imageDark}
          alt={status}
          className="h-64 w-full object-contain hidden dark:block"
        />
        <div className="flex flex-col gap-1">
          <h4 className="sub-heading text-center">{message}</h4>
          <p className="text-gray-800 dark:text-gray-100 font-medium max-w-sm text-sm">{desc}</p>
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2 w-full inline-flex items-center justify-center gap-3 mb-3">
        <Button
          variant="gradient"
          className="inline-flex items-center gap-2 capitalize w-full justify-center"
          color="deep-purple"
          onClick={handleOpen}
        >
          {icon}
          <span>{label}</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
