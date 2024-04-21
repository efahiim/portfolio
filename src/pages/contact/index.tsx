import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Loader from "@components/loader";
import Alert from "@components/alert";
import Footer from "@components/footer";

import Fox, { ActionName } from "@models/fox";

import useAlert from "@hooks/useAlert";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FunctionComponent = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState<FormInputs>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentAnimation, setCurrentAnimation] = useState<ActionName>("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    const service = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const key = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
    const personalName = import.meta.env.PERSONAL_NAME;
    const emailAddress = import.meta.env.PERSONAL_EMAIL_ADDRESS;

    emailjs
      .send(
        service,
        template,
        {
          from_name: form.name,
          to_name: personalName,
          from_email: form.email,
          to_email: emailAddress,
          message: form.message,
        },
        key
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          text: "Message sent successfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("idle");
        console.log(error);
        showAlert({
          text: "I didn't receive your message.",
          type: "danger",
        });
      });
  };

  const handleFocus = () => setCurrentAnimation("walk");

  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <>
      <section className="relative flex lg:flex-row flex-col max-container">
        {alert.show && <Alert {...alert} />}

        <div className="flex-1 min-2-[50%] flex flex-col">
          <h1 className="head-text">Get in touch</h1>

          <form
            className="w-full flex flex-col gap-7 mt-14"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="John Doe"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="johndoe@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows={4}
                className="textarea"
                placeholder="Let me know how I can help you!"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type="submit"
              className="btn"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-[530px] md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox
                scale={[0.6, 0.6, 0.6]}
                position={[0.5, -0.5, 0]}
                rotation={[12.6, -0.8, 0]}
                currentAnimation={currentAnimation}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
