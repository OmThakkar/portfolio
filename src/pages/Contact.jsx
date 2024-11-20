import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Button, Textarea } from "@material-tailwind/react";
import SectionBadge from "../components/SectionBadge";
import { Send, UserRoundPlus } from "lucide-react";
import { Modal } from "../components/Modal";
import contact from "../assets/contact.png";
import contactDark from "../assets/contact-dark.png";

const Contact = () => {
  const [status, setStatus] = useState(null); // success or fail

  const formik = useFormik({
    initialValues: {
      user_name: "",
      subject: "",
      user_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      subject: Yup.string().required("Subject is required"),
      user_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(50, "Message must be at least 50 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs.send(serviceId, templateId, values, publicKey).then(
        () => {
          setStatus("success");
          resetForm(); // Reset the form on success
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("fail");
          resetForm(); // Reset the form on success
        }
      );
    },
  });

  return (
    <section className="section-container mt-12 flex flex-col gap-6 items-center">
      <SectionBadge icon={<UserRoundPlus size={16} />} text={"Get in touch"} />

      <h2 className="section-heading">
        Looking forward for an{" "}
        <span className="highlight">Amazing Collaboration</span>
      </h2>
      <div className="grid grid-cols-12 gap-y-8 lg:gap-12 w-full">
        <div className="col-span-12 lg:col-span-5 h-96">
          <img
            src={contact}
            alt=""
            className="dark:hidden h-full w-full object-contain"
          />
          <img
            src={contactDark}
            alt=""
            className="h-full w-full object-contain hidden dark:block"
          />
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-6 col-span-12 lg:col-span-7 items-start"
        >
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm lg:text-base">Name</label>
            <input
              className="focus:outline-none active:border-e-deep-purple-400 focus-within:border-deep-purple-400 focus-visible:border-deep-purple-400 border-deep-purple-50/50 focus:border-e-purple-300 dark:active:border-e-deep-purple-400 dark:focus-within:border-deep-purple-400 dark:focus-visible:border-deep-purple-400 dark:border-deep-purple-50/10 dark:focus:border-e-purple-300
              bg-deep-purple-50/20 border-2 rounded-lg  p-2 dark:bg-deep-purple-50/10"
              type="text"
              name="user_name"
              value={formik.values.user_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.user_name && formik.errors.user_name}
            />
            {formik.touched.user_name && formik.errors.user_name && (
              <span className="text-red-500 dark:text-red-400 text-sm">
                {formik.errors.user_name}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm lg:text-base">Subject</label>
            <input
              className="focus:outline-none active:border-e-deep-purple-400 focus-within:border-deep-purple-400 focus-visible:border-deep-purple-400 border-deep-purple-50/50 focus:border-e-purple-300 dark:active:border-e-deep-purple-400 dark:focus-within:border-deep-purple-400 dark:focus-visible:border-deep-purple-400 dark:border-deep-purple-50/10 dark:focus:border-e-purple-300
              bg-deep-purple-50/20 border-2 rounded-lg  p-2 dark:bg-deep-purple-50/10"
              type="text"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subject && formik.errors.subject}
            />
            {formik.touched.subject && formik.errors.subject && (
              <span className="text-red-500 dark:text-red-400 text-sm">
                {formik.errors.subject}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm lg:text-base">Email</label>
            <input
              className="focus:outline-none active:border-e-deep-purple-400 focus-within:border-deep-purple-400 focus-visible:border-deep-purple-400 border-deep-purple-50/50 focus:border-e-purple-300 dark:active:border-e-deep-purple-400 dark:focus-within:border-deep-purple-400 dark:focus-visible:border-deep-purple-400 dark:border-deep-purple-50/10 dark:focus:border-e-purple-300
              bg-deep-purple-50/20 border-2 rounded-lg  p-2 dark:bg-deep-purple-50/10"
              type="email"
              name="user_email"
              value={formik.values.user_email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.user_email && formik.errors.user_email}
            />
            {formik.touched.user_email && formik.errors.user_email && (
              <span className="text-red-500 dark:text-red-400 text-sm">
                {formik.errors.user_email}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="text-sm lg:text-base">Message</label>
            <textarea rows={5}
              className="focus:outline-none active:border-e-deep-purple-400 focus-within:border-deep-purple-400 focus-visible:border-deep-purple-400 border-deep-purple-50/50 focus:border-e-purple-300 dark:active:border-e-deep-purple-400 dark:focus-within:border-deep-purple-400 dark:focus-visible:border-deep-purple-400 dark:border-deep-purple-50/10 dark:focus:border-e-purple-300
              bg-deep-purple-50/20 border-2 rounded-lg  p-2 dark:bg-deep-purple-50/10 resize-none"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && formik.errors.message}
            />
            {formik.touched.message && formik.errors.message && (
              <span className="text-red-500 dark:text-red-400 text-sm">
                {formik.errors.message}
              </span>
            )}
          </div>
          <Button
            type="submit"
            variant="gradient"
            className="inline-flex items-center justify-center w-full gap-2 capitalize"
            color="deep-purple"
            size="lg"
            disabled={formik.isSubmitting}
          >
            <span>Send Message</span>
            <Send size={16} />
          </Button>
        </form>
      </div>
      {/* Modal for feedback */}
      {status && <Modal status={status} />}
    </section>
  );
};

export default Contact;
