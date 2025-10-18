import React from "react";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

const ContactUs = () => {
  const { state } = useLocation();

  return (
    <div className="bg-[#EBEEF1] flex items-center justify-center flex-col poppins">
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
