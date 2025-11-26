import { Brain, Bot, Sparkles, Cpu } from 'lucide-react';

// Child component
const AIFuture = ({
  title = 'AI Fundamentals & Core Concepts',
  description = 'Understand the basics of AI, Machine Learning, and how they are transforming industries.',
  icon = null,
}) => {
  return (
    <div
      className='
        bg-white p-9 rounded-3xl 
        shadow-[0_12px_24px_rgba(10,102,194,0.1)]
        hover:-translate-y-3 transition-transform duration-300
        border-t-4 border-transparent 
        bg-gradient-to-b from-white to-white bg-origin-border
      '
      style={{
        backgroundImage:
          'linear-gradient(white, white), linear-gradient(135deg, rgb(10,102,194) 0%, rgb(0,194,255) 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {/* Icon */}
      <div className='w-12 h-12 mb-5 text-[#0A66C2]'>{icon}</div>

      {/* Title */}
      <h3 className='text-xl font-extrabold mb-4 text-[#0A66C2]'>{title}</h3>

      {/* Description */}
      <p className='text-gray-700 leading-relaxed'>{description}</p>
    </div>
  );
};

// Parent component
const AIFutureSection = () => {
  return (
    <>
      <section className='bg-[#F4F8FB] pt-8'>
        {/* <h2 className='text-2xl sm:text-4xl font-extrabold text-center mb-4 text-[#0A66C2] sm:px-24'>
          AI Is Becoming the Most Valuable Skill of 2025 — And Those Who Learn
          It Early Get the Biggest Advantage.
        </h2> */}
        <h2 className='text-2xl sm:text-4xl font-extrabold text-center mb-4 text-[#0A66C2] sm:px-22 leading-snug'>
          <span className='block'>
            “AI Is Becoming the Most Valuable Skill of 2025”
          </span>
          <span className='block'>
            “And Those Who Learn It Early Get the Biggest Advantage.”
          </span>
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-12 px-4 sm:px-6 lg:px-16'>
          <AIFuture
            title='Entrepreneurs'
            description='Build smarter systems that let your business grow without adding to your workload.'
            icon={<Brain className='w-12 h-12 text-[#0A66C2]' />}
          />

          <AIFuture
            title='Solopreneurs'
            description='juggling multiple responsibilities streamline workflows and boost efficiency.'
            icon={<Bot className='w-12 h-12 text-[#0A66C2]' />}
          />

          <AIFuture
            title='Coaches, consultants & agency owners'
            description='Use AI to scale your services, attract better clients, and deliver results faster.'
            icon={<Sparkles className='w-12 h-12 text-[#0A66C2]' />}
          />

          <AIFuture
            title='Senior working professionals'
            description='Leverage AI to boost productivity, stay competitive, and accelerate your career growth.'
            icon={<Cpu className='w-12 h-12 text-[#0A66C2]' />}
          />
        </div>
        <p className='text-lg text-[#0A66C2] text-center italic pb-6 font-bold'>
          "If your work involves content, communication, customer support,
          analysis, or repetitive tasks — this is for you."
        </p>
      </section>
    </>
  );
};

export default AIFutureSection;
