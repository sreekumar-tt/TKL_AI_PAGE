import { Gift, Store } from 'lucide-react';

export default function Bonus() {
  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A66C2] to-[#00C2FF] '>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 '>
        {/* Card 1 */}
        <div
          className=' about_bg_card pt-[60px] px-[20px] pb-[70px] lg:px-[40px]
 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2
          transition-all duration-300 ease-out'
        >
          <div className='flex justify-center mb-6'>
            <Gift className='w-16 h-16 text-[#2563EB]' />
          </div>

          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center'>
            Bonus for All Live Attendees
          </h2>

          <p className='text-lg text-gray-600 text-center leading-relaxed'>
            Free AI Learning Roadmap (Worth ₹3,000) — A step-by-step guide
            showing what to learn and in what order.
          </p>
        </div>

        {/* Card 2 */}
        {/* <div
          className='about_bg_card pt-[60px] px-[20px] pb-[70px] lg:px-[40px] rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2
          transition-all duration-300 ease-out'
        >
          <div className='flex justify-center mb-6'>
            <Store className='w-16 h-16 text-[#2563EB]' />
          </div>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center'>
            About Technokey Learning
          </h2>

          <p className='text-lg text-gray-600 leading-relaxed text-center'>
            Technokey Learning is one of India's fastest-growing AI
            skill-building platforms. We have trained over 10,000+ learners,
            supported 500+ businesses in adopting AI, and created more than 200+
            industry-specific AI use cases. Our approach is practical,
            beginner-friendly, and focused on real-world results.
          </p>
        </div> */}
      </div>
    </section>
  );
}
