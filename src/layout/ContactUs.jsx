import React from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const ContactUs = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const description = form.description.value.trim();

    if (!name || !email || !description) {
      toast.error("⚠️ Please fill in all required fields before submitting!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const scheduleDate = new Date(state).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    navigate("/");

    toast.success(`You are scheduled for ${scheduleDate}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const labelStyle = "text-[#192A48] text-[26px] font-normal";
  const inputStyle =
    "border border-[#DFE0E4] rounded-[5px] w-full pl-6 mt-[10px] text-2xl py-2";
  return (
    <div className="w-svw h-svh bg-[#EBEEF1] flex items-center justify-center flex-col">
      <div className="bg-white rounded-2xl p-11.5">
        <h1 className="text-5xl text-[#192A48] text-center font-semibold">
          Contact Us
        </h1>
        <p className="text-[#798090] text-center text-2xl mt-[23px] mb-[58px]">
          We’d love to hear from you! Please fill out the form below, and we’ll
          get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-9">
          <div>
            <label className={labelStyle} htmlFor="name">
              Name
            </label>
            <br />
            <input
              className={inputStyle}
              type="text"
              name="name"
              placeholder="name"
            />
          </div>
          <div>
            <label className={labelStyle} htmlFor="email">
              Email
            </label>
            <br />
            <input
              className={inputStyle}
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <label className={labelStyle} htmlFor="description">
              Description
            </label>
            <br />
            <textarea
              className={inputStyle}
              rows="5"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
          <br />
          <div className="text-right">
            <input
              type="submit"
              className="text-white bg-[#253FB6] rounded-[19458px] font-semibold text-[26px] px-[103px] py-[15.57px] cursor-pointer"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
