import { CheckCircle } from 'lucide-react';

export default function WhyAttend() {
  const reasons = [
    'Beginner-friendly and practical',
    'No technical background required',
    'Real demos of real tools',
    'Instant-use workflows',
    'Exclusive shortcuts & templates',
    'Gain a competitive advantage',
  ];

  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center'>
          Why Attend
        </h2>
        <div className='grid sm:grid-cols-2 gap-4'>
          {reasons.map((reason, index) => (
            <div key={index} className='flex items-start'>
              <CheckCircle className='w-6 h-6 text-[#2563EB] mr-3 flex-shrink-0 mt-1' />
              <p className='text-lg text-gray-700'>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
