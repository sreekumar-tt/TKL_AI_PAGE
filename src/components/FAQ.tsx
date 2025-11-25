import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: 'Is this workshop really free?',
      answer: 'Yes, completely free.',
    },
    {
      question: 'Do I need any technical knowledge?',
      answer: 'Not at all. Everything is simplified for non-tech users.',
    },
    {
      question: 'Will I get the recording?',
      answer: 'No — recordings will NOT be provided.',
    },
    {
      question: 'Will there be an offer at the end?',
      answer:
        'Yes, we will share details of an upcoming advanced AI program (optional).',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyPress = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg_gray'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden'
            >
              <button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => handleKeyPress(e, index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-inset'
              >
                <span className='font-semibold text-gray-900 pr-4'>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2563EB] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className='px-6 pb-4 text-gray-600'>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className='text-center mt-10 text-black-600 font-bold italic'>
        Secure your spot and take the first step toward building your AI advantage.
      </p>
       <p className="text-center mt-2 text-black-600 font-bold">
      Enrollment Closes on <span className="text-blue-600 font-extrabold">5th December.</span>
    </p>
    </section>
  );
}
