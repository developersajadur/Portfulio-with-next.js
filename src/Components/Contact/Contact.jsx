import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { FloatingLabel } from "flowbite-react";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

  const onSubmit = (data) => console.log(data);
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
             {" Let’s Discuss"}
            </h1>
            <p className="text-[#748195] text-lg">
              {"I'm"} always open to new freelance opportunities. Reach out{" "}
              <br /> {"let's"} discuss your project!
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row bg-[#083660] px-2 lg:px-0 pb-10 rounded-b-xl">
          <div className="w-full lg:w-[30%] mt-8 lg:mt-40 lg:ml-9 flex flex-col justify-center lg:justify-start items-center lg:items-start">
            <div className="mb-4">
              <p className="text-[#748195] text-center lg:text-start text-lg">Contact im With Email</p>
              <h2 className="text-white font-semibold text-2xl">
                itzmesojib@gmail.com
              </h2>
            </div>
            <div className="">
              <p className="text-[#748195] text-lg">Contact With Number</p>
              <h2 className="text-white font-semibold text-2xl">
                +8801787448412
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 justify-center items-center mt-8">
              <div className="">
                <button
                  type="submit"
                  className="bg-[#0788FF] text-sm text-white py-3 px-5 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  GET IN TOUCH
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/facebook.png"
                  className="w-10 h-10 rounded-full border-2"
                  height={600}
                  width={600}
                  alt="facebook"
                />
                <Image
                  src="/linkdin.png"
                  className="w-10 h-10 rounded-full border-2"
                  height={600}
                  width={600}
                  alt="linkdin"
                />
                <Image
                  src="/github.png"
                  className="w-10 h-10 rounded-full border-2"
                  height={600}
                  width={600}
                  alt="github"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[70%] text-start lg:mr-10 mt-5 lg:mt-12">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
        <div className="w-full">
          <p className="text-[#748195] font-medium text-sm mb-2">YOUR NAME</p>
          <FloatingLabel
            variant="outlined"
            label="Your Full Name"
            type="text"
            className={`bg-[#053059] border-[#748195] ${errors.name && 'border-red-500'}`}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-[#0788FF] text-sm">This field is required</span>
          )}
        </div>
        <div className="w-full">
          <p className="text-[#748195] font-medium text-sm mb-2">YOUR EMAIL</p>
          <FloatingLabel
            variant="outlined"
            label="Your Email"
            type="email"
            className={`bg-[#053059] border-[#748195] ${errors.email && 'border-red-500'}`}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-[#0788FF] text-sm">This field is required</span>
          )}
        </div>
      </div>
      <div className="w-full mt-4">
        <p className="text-[#748195] font-medium text-sm mb-2">SUBJECT</p>
        <FloatingLabel
          variant="outlined"
          label="Subject"
          type="text"
          className={`bg-[#053059] border-[#748195] ${errors.subject && 'border-red-500'}`}
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
