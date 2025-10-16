import React, { useContext, useEffect } from "react";
import FAQCard from "./FAQCard";
import { AuthContext } from "../provider/DataProvider";
import { useInView } from "react-intersection-observer";

const FAQ = () => {
  const { setActiveSection } = useContext(AuthContext);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setActiveSection("faq");
    }
  }, [inView]);

  const faqs = [
    {
      id: 1,
      question: "What to do on a first visit to the city?",
      ans: "Known worldwide for its rich history and cultural influence, the Italian capital is a veritable open-air museum full of must-see places to visit. Discover its emblematic religious buildings such as the Pantheon or St. Peter's Basilica, marvel at the Colosseum and don't miss the Vatican and its fabulous Sistine Chapel. At the end of the day, you will enjoy contemplating a magnificent sunset at the Villa Borghese, strolling on the Piazza di Spagna and finishing in style with a wish at the Trevi Fountain.",
    },
    {
      id: 2,
      question: "What hidden treasures can be discovered there?",
      ans: "Explore lesser-known gems like the Aventine Keyhole with its unique view of St. Peter’s Basilica, the underground Catacombs of Priscilla, and the charming Trastevere district with narrow alleys, local eateries, and authentic Roman life.",
    },
    {
      id: 3,
      question: "How much time should I spend on it?",
      ans: "Ideally, plan at least 3 to 5 days to fully experience the city’s main attractions, enjoy the cuisine, and explore its hidden corners without rushing.",
    },
    {
      id: 4,
      question: "What are the local culinary specialties not to be missed?",
      ans: "Don’t miss traditional dishes such as Carbonara, Cacio e Pepe, and Supplì. Pair your meal with a local wine and finish with Tiramisu or Gelato for dessert.",
    },
    {
      id: 5,
      question: "What is the best way to get around the city?",
      ans: "Walking is often the best way to explore the historic center, but public transportation like buses and the metro are efficient for longer distances. Taxis and scooters are also popular options.",
    },
    {
      id: 6,
      question: "What time of year to visit the city?",
      ans: "Spring (April to June) and Autumn (September to October) are the best times to visit for pleasant weather, fewer crowds, and vibrant local events.",
    },
    {
      id: 7,
      question: "Which neighborhoods are a must-visit?",
      ans: "Explore Trastevere for its lively streets, Monti for vintage shops and cafes, the Historic Center for landmarks, and Testaccio for authentic Roman culture.",
    },
    {
      id: 8,
      question: "What are the best neighborhoods for eating out?",
      ans: "Head to Trastevere, Campo de’ Fiori, and Testaccio for authentic Italian cuisine, local trattorias, and vibrant dining experiences.",
    },
    {
      id: 9,
      question: "Which area to stay in?",
      ans: "Stay in the Historic Center or near Piazza Navona for sightseeing convenience, or in Trastevere for a more local and lively atmosphere.",
    },
    {
      id: 10,
      question: "What is the best activity to do with the family?",
      ans: "Families can enjoy a day at Villa Borghese park, visit the Bioparco Zoo, or take a fun cooking class to learn how to make pizza and pasta together.",
    },
  ];

  return (
    <section
      id="faq"
      ref={ref}
      className="mt-[150px] mb-23.5 max-w-7xl mx-auto"
    >
      {/* Title */}
      <h3 className="text-[#192A48] font-semibold text-center text-5xl">
        Frequently Asked Questions
      </h3>
      {/* Sub-Title */}
      <p className="text-[#798090] text-2xl text-center mt-4 mb-16">
        Have another question? Contact us on Twitter or by email
      </p>

      {/* faqs */}
      <div className="space-y-6">
        {faqs.map((faq) => (
          <FAQCard faq={faq} key={faq.id} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
