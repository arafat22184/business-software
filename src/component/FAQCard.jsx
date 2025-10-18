import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { AiFillMinusCircle } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";

const FAQCard = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id, question, ans } = faq;
  useEffect(() => {
    if (id === 1) {
      setIsOpen(true);
    }
  }, [id]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className={`py-4 px-8 rounded-lg space-y-3 ${
        isOpen && "border border-[#253FB6] bg-[#F7F7F7]"
      }`}
    >
      <div className="flex justify-between items-center">
        <h5 className="text-[#192A48] font-medium text-2xl">
          {id}. {question}
        </h5>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" text-3xl cursor-pointer"
        >
          {isOpen ? (
            <AiFillMinusCircle className="text-[#253FB6]" />
          ) : (
            <CiCirclePlus />
          )}
        </button>
      </div>
      {isOpen && <p className="text-[#798090] text-lg">{ans}</p>}
    </motion.div>
  );
};

export default FAQCard;
