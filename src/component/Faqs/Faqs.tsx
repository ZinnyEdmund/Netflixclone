import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import "./Faqs.css";

// Array of FAQ
const faqData = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. \n\n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦2,500 to ₦8,500 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n\n You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. \n\n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];
// A functional component for each individual FAQ item
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  // useState hook to track whether this FAQ item's answer is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the isOpen state between true and false when the question is clicked
  const toggleAnswer = () => {
    setIsOpen(!isOpen); // If it's open, close it; if it's closed, open it
  };

  return (
    <div className="faq-item">
      {" "}
      {/* Container for each FAQ item */}
      <div className="faq-question" onClick={toggleAnswer}>
        {" "}
        {/* Question section clickable to toggle the answer */}
        <h3>{question}</h3> {/* Render the question text */}
        <span className="Spaniie">
          {isOpen ? <LiaTimesSolid size={35} /> : <BsPlusLg size={35} />}
        </span>{" "}
        {/* Show '*' if open, '+' if closed */}
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}{" "}
      {/* Conditionally render the answer if isOpen is true */}
    </div>
  );
};

// Main FAQ component that loops through all FAQ data and renders FAQItem components
const FAQ = () => {
  return (
    <div className="faq-container">
      {" "}
      {/* Container for all FAQ items */}
      <h2>Frequently Asked Questions</h2>
      {faqData.map(
        (
          item,
          index // Loop through each FAQ object in faqData array
        ) => (
          <FAQItem
            key={index} // Unique key prop required by React for list rendering
            question={item.question} // Pass the question as a prop
            answer={item.answer} // Pass the answer as a prop
          />
        )
      )}
    </div>
  );
};

export default FAQ;
