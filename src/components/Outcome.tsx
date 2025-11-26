import { Star } from 'lucide-react';

export default function Outcome() {
  const outcomes = [
    'Skill to use AI for repetitive-work automation',
    'Strong understanding of prompt engineering',
    'Ability to build custom GPT assistants',
    'Knowledge to create simple automations',
    'A clear roadmap for AI mastery',
  ];

  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg_gray'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center'>
          What You'll Walk Away With
        </h2>
        <div className='space-y-4'>
          {outcomes.map((outcome, index) => (
            <div key={index} className='flex items-start'>
              <Star className='w-6 h-6 text-[#2563EB] mr-3 flex-shrink-0 mt-1 fill-current' />
              <p className='text-lg text-gray-700'>{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
