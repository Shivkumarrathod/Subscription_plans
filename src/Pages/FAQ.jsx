import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is included in the subscription plan?",
      answer:
        "The subscription provides access to live matches, highlights, exclusive sports shows, and player interviews across multiple sports, including football, basketball, tennis, and cricket.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription anytime through your account settings. The subscription will remain active until the end of the billing cycle.",
    },
    {
        question: "What is included in the subscription plan?",
        answer:
          "The subscription provides access to live matches, highlights, exclusive sports shows, and player interviews across multiple sports, including football, basketball, tennis, and cricket.",
      },
      {
        question: "Can I cancel my subscription at any time?",
        answer:
          "Yes, you can cancel your subscription anytime through your account settings. The subscription will remain active until the end of the billing cycle.",
      }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold  mb-8 border-b-2 py-2">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" rounded-lg p-1 shadow-sm"
          >
            <button
              className="w-full text-left flex justify-between items-center text-sm font-medium text-gray-700 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 011.04 1.085l-4 3.75a.75.75 0 01-1.04 0l-4-3.75a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
