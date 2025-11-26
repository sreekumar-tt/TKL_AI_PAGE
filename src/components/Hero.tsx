interface HeroProps {
  onOpenModal: () => void;
}
import { CalendarDays, Clock, Languages, Monitor } from 'lucide-react';
export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className='py-16 sm:py-20 px-4 sm:px-6 md:min-h-screen lg:px-8 ]'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='flex items-center justify-center mb-4'>
          <img
            src='/Techno key logo-only key.png'
            alt='Technokey Learning Logo'
            className='h-12 w-auto'
          />
        </div>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
          Master AI in 4 Hours to Automate Your Work — What If AI Could Run Half
          Your Day?
        </h1>

        <p className='text-xl sm:text-2xl text-gray-600 mb-4'>
          Learn how to leverage Artificial Intelligence to boost productivity,
          automate tasks, and create stunning content in this exclusive free
          webinar.
        </p>
        <div>
          <p className='text-lg sm:text-xl text-blue-700 font-semibold mb-2 flex items-center gap-3 justify-center'>
            <CalendarDays className='w-5 h-5' />
            December 13th
            <Clock className='w-5 h-5 ml-4' />
            10 AM – 2 PM IST
          </p>

          {/* Language + Mode */}
          <p className='text-lg sm:text-xl text-blue-700 font-semibold mb-6 flex items-center gap-3 justify-center'>
            <Languages className='w-5 h-5' />
            Tamil
            <Monitor className='w-5 h-5 ml-4' />
            Live Online
          </p>
        </div>
        <span className='bg-yellow-400 text-black font-bold px-6 py-2 rounded-full text-sm shadow-lg '>
          Limited Seats Available!
        </span>
        <div className='flex justify-center mt-6'>
          <button
            onClick={onOpenModal}
            className='bg-[#2563EB] flex align-middle text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl'
          >
            Register for the Free Masterclass
            <img
              src='rocket_white.png'
              alt='AI Clarity Hero Background'
              width={20}
              height={20}
              className='ms-2 object-contain'
            />
          </button>
        </div>
      </div>
    </section>
  );
}
