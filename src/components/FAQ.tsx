import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQComponent = () => {
  // FAQ data
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What is Frontend Mentor, and how will it help me?",
      answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      id: 2,
      question: "Is Frontend Mentor free?",
      answer: "Frontend Mentor offers both free and premium challenges. Many projects are available for free, while premium challenges provide additional features, designs, and resources to help you build more complex projects."
    },
    {
      id: 3,
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer: "Yes! You are absolutely encouraged to use Frontend Mentor projects in your portfolio. They're designed specifically to help you build a strong portfolio of realistic projects that demonstrate your skills to potential employers."
    },
    {
      id: 4,
      question: "How can I get help if I'm stuck on a challenge?",
      answer: "Frontend Mentor has a supportive community where you can ask questions and get feedback on your solutions. You can post your questions in the community forum, join the Discord server, or submit your solution for peer review to get constructive feedback."
    }
  ];

  // State to track which FAQ is open (default to the first item)
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Toggle function to handle opening/closing FAQs
  const toggleFAQ = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-purple-900 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl shadow-lg p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <svg className="w-6 h-6 text-purple-600 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L4 5.5V11C4 16.5 7.8 21.7 12 23C16.2 21.7 20 16.5 20 11V5.5L12 2Z" />
            <path d="M12 7L9 10.5L11 13L15 9L12 7Z" fill="white" />
          </svg>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900">FAQs</h1>
        </div>
        
        {/* FAQ Items */}
        <div className="divide-y divide-gray-100">
          {faqData.map((faq, index) => (
            <div key={faq.id} className="py-5">
              <div 
                className="flex justify-between items-center cursor-pointer" 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                <div 
                  className={`rounded-full p-1 flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-purple-600 transform rotate-180' 
                      : 'bg-gray-200'
                  }`}
                >
                  <svg 
                    className={`w-5 h-5 ${
                      activeIndex === index ? 'text-white' : 'text-gray-600'
                    }`} 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              </div>
              <div 
                className={`mt-4 text-gray-600 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
