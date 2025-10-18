/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import { FaSpinner } from "react-icons/fa";
import { Calendar } from "@/components/ui/calendar";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";

const Schedule = () => {
  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const description = form.description.value.trim();

    if (!name || !email || !description) {
      toast.error("⚠️ Please fill in all required fields before submitting!", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
      setIsLoading(false);
      return;
    }

    const scheduleDate = new Date(date).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name,
          email,
          message: `Schedule Date: ${scheduleDate} Message: ${description}`,
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success(`✅ You are scheduled for ${scheduleDate}`, {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });

      // Close modal and reset form
      setOpen(false);
      form.reset();
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
      console.log("Form submission process completed.");
    }
  };

  const labelStyle = "text-[#192A48] text-[20px] font-medium";
  const inputStyle =
    "border border-[#DFE0E4] rounded-[5px] w-full pl-6 mt-[10px] text-2xl py-2";

  return (
    <section
      id="contact"
      className="py-[60px] lg:py-[112px] bg-[#F2F1F1] px-4 xl:px-0"
    >
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-11/12 lg:max-w-[700px]">
          <DialogTitle className="text-3xl text-[#192A48] text-center font-semibold">
            Contact Us
          </DialogTitle>

          <DialogDescription className="text-[#798090] text-center text-sm">
            We’d love to hear from you! Please fill out the form below, and
            we’ll get back to you as soon as possible.
          </DialogDescription>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={labelStyle} htmlFor="name">
                Name
              </label>
              <input
                className={inputStyle}
                type="text"
                name="name"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className={labelStyle} htmlFor="email">
                Email
              </label>
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
              <textarea
                className={inputStyle}
                rows="5"
                name="description"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: !isLoading ? 1.05 : 1 }}
              className={`flex items-center justify-center gap-2 rounded-full font-semibold text-[20px] px-10 py-3 transition-all duration-300
    ${
      isLoading
        ? "bg-[#1e2e8a] cursor-not-allowed opacity-80 text-white"
        : "bg-[#253FB6] hover:bg-[#3953c7] text-white cursor-pointer shadow-md hover:shadow-lg"
    }`}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin text-white text-xl" />
                  <span>Sending...</span>
                </>
              ) : (
                "Submit"
              )}
            </motion.button>
          </form>
        </DialogContent>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0">
          {/* Left Section */}
          <motion.div
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-[#192A48] text-3xl lg:text-5xl font-semibold">
              Get a demo of customer
              <br className="hidden md:block" /> data
            </h3>
            <p className="text-[#192A48] text-lg lg:text-xl pt-3 lg:pt-6 pb-5 lg:pb-10">
              See how to grow your product faster with deep customer insights.
            </p>

            <DialogTrigger asChild>
              <button
                onClick={() => setOpen(true)}
                className="bg-[#253FB6] text-white lg:text-lg font-semibold rounded-full px-6 lg:px-12 py-2 lg:py-4 cursor-pointer hover:bg-[#3953c7] transition"
              >
                Schedule
              </button>
            </DialogTrigger>
          </motion.div>

          {/* Right Section - Calendar */}
          <motion.div
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 1.5 }}
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-[22px] border shadow-sm min-w-11/12 lg:min-w-[430px] p-6"
              captionLayout="dropdown"
            />
          </motion.div>
        </div>
      </Dialog>
    </section>
  );
};

export default Schedule;
