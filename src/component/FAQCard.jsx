import React, { useEffect, useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

const FAQCard = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id, question, ans } = faq;
  useEffect(() => {
    if (id === 1) {
      setIsOpen(true);
    }
  }, [id]);

  return (
    <div
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
          className="text-[#253FB6] text-4xl cursor-pointer"
        >
          {isOpen ? <FaMinusCircle /> : <FiPlusCircle />}
        </button>
      </div>
      {isOpen && <p className="text-[#798090] text-lg">{ans}</p>}
    </div>
  );
};

export default FAQCard;
