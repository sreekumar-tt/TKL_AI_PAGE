import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: 'Do I need any technical skills or coding knowledge?',
      answer:
        'Not at all.Everything in this masterclass is beginner-friendly and fully guided. If you can use WhatsApp and email, you can learn Al automation from this session.',
    },
    {
      question:
        "I've used ChatGPT before but I don't know what to type. Will this help?",
      answer:
        "Yes this masterclass is perfect for you.Most people struggle not because Al is hard, but because they don't know prompt engineering frameworks.You'll learn the exact prompt structures used by experts to get: ✓ High-quality outputs ✓ Accurate responses ✓ Business-ready results",
    },
    {
      question: ' Will this session work for my business or profession?',
      answer:
        "If you're an entrepreneur, solopreneur, coach, consultant, freelancer, student, or working professional this session is made for you.If your work involves content, communication, planning, selling, or repetitive tasks, this will transform how you work.",
    },
    {
      question: 'What exactly will I learn in the 4 hours?',
      answer:
        "You'll master: • Prompt Engineering 2.0 (advanced prompts) • Custom GPT creation for your business • Building a RAG customer support chatbot (no code) • Simple automations using AI workflows to save hours every day • A complete AI roadmap to scale your business in 2025",
    },
    {
      question: 'Will there be any tasks to do during the session?',
      answer:
        "Yes - it's a hands-on, practical session.You'll work along with the trainer to build your own prompts, GPTs, chatbots, and workflows live.",
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
                className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 '
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
    </section>
  );
}
