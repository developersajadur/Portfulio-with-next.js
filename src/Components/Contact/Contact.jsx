"use client"
import Image from "next/image";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thanks For Contact Me",
            showConfirmButton: false,
            timer: 2500
          });
        },
        (error) => {
          alert('Failed to send the message, please try again later.');
          console.error('Failed...', error.text);
        }
      );
    console.log(data);
  };

  return (
    <div id="contact" className="px-2 lg:px-10 mb-20">
      <div className="flex flex-col">
        <div className="bg-[#051A2F] flex py-8 rounded-t-xl">
          <div className="w-full lg:w-[30%] hidden lg:block lg:relative">
            <Image
              src="/hand.png"
              className="w-72 h-64 rounded-2xl hidden lg:block lg:absolute right-8"
              height={600}
              width={600}
              alt="hand shank"
            />
          </div>
          <div className="w-full lg:w-[70%] flex flex-1 flex-col text-center lg:text-start">
            <h1 className="text-white font-medium text-2xl lg:text-5xl">
              Let’s Discuss
            </h1>
            <p className="text-[#748195] text-lg">
              I'm always open to new freelance opportunities. Reach out, let's discuss your project!
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row bg-[#083660] px-2 lg:px-0 pb-10 rounded-b-xl">
          <div className="w-full lg:w-[30%] mt-8 lg:mt-40 lg:ml-9 flex flex-col justify-center lg:justify-start items-center lg:items-start">
            <div className="mb-4">
              <p className="text-[#748195] text-center lg:text-start text-lg">Contact me with Email</p>
              <h2 className="text-white font-semibold text-2xl">
                itzmesojib@gmail.com
              </h2>
            </div>
            <div>
              <p className="text-[#748195] text-lg">Contact with Number</p>
              <h2 className="text-white font-semibold text-2xl">
                +8801787448412
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-8">
              <button
                type="button"
                className="bg-[#0788FF] text-sm text-white py-3 px-5 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                GET IN TOUCH
              </button>
              <div className="flex items-center gap-2">
                <a href="https://www.facebook.com/developersajadur" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/facebook.png"
                    className="w-10 h-10 rounded-full border-2"
                    height={600}
                    width={600}
                    alt="facebook"
                  />
                </a>
                <a href="https://www.linkedin.com/in/sajadurrahman/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/linkdin.png"
                    className="w-10 h-10 rounded-full border-2"
                    height={600}
                    width={600}
                    alt="linkdin"
                  />
                </a>
                <a href="https://github.com/developersajadur" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/github.png"
                    className="w-10 h-10 rounded-full border-2"
                    height={600}
                    width={600}
                    alt="github"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[70%] text-start lg:mr-10 mt-5 lg:mt-12">
            <form className="w-full" ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
                <div className="w-full">
                  <p className="text-[#748195] font-medium text-sm mb-2">YOUR NAME</p>
                  <input
                    placeholder="Your Full Name"
                    type="text"
                    className={`bg-[#053059] border-[#748195] w-full p-3 rounded-lg focus:outline-none focus:border-blue-500 ${errors.user_name && 'border-red-500'}`}
                    {...register("user_name", { required: true })}
                  />
                  {errors.user_name && (
                    <span className="text-[#0788FF] text-sm">This field is required</span>
                  )}
                </div>
                <div className="w-full">
                  <p className="text-[#748195] font-medium text-sm mb-2">YOUR EMAIL</p>
                  <input
                    placeholder="Your Email"
                    type="email"
                    className={`bg-[#053059] border-[#748195] w-full p-3 rounded-lg focus:outline-none focus:border-blue-500 ${errors.user_email && 'border-red-500'}`}
                    {...register("user_email", { required: true })}
                  />
                  {errors.user_email && (
                    <span className="text-[#0788FF] text-sm">This field is required</span>
                  )}
                </div>
              </div>
              <div className="w-full mt-4">
                <p className="text-[#748195] font-medium text-sm mb-2">SUBJECT</p>
                <input
                  placeholder="Subject"
                  type="text"
                  className={`bg-[#053059] border-[#748195] w-full p-3 rounded-lg focus:outline-none focus:border-blue-500 ${errors.subject && 'border-red-500'}`}
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <span className="text-[#0788FF] text-sm">This field is required</span>
                )}
              </div>
              <div className="w-full mt-4">
                <p className="text-[#748195] font-medium text-sm mb-2">YOUR MESSAGE</p>
                <textarea
                  placeholder="Your Message"
                  className={`bg-[#053059] border-[#748195] w-full p-3 rounded-lg focus:outline-none focus:border-blue-500 ${errors.message && 'border-red-500'}`}
                  rows="4"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-[#0788FF] text-sm">This field is required</span>
                )}
              </div>
              <div className="w-full mt-4">
                <button
                  type="submit"
                  className="bg-[#0788FF] w-full lg:w-fit text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
