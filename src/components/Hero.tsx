interface HeroProps {
  onOpenModal: () => void;
}
import { CalendarDays, Clock, Languages, Monitor } from 'lucide-react';
export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className='py-12 sm:py-20 px-4 sm:px-6 lg:min-h-screen lg:px-8 ]'>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='flex items-center justify-center mb-6 sm:mb-8'>
          <img
            src='/Techno key logo-only key.png'
            alt='Technokey Learning Logo'
            className='h-12 w-auto'
          />
        </div>
        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-6'>
          Master AI in 4 Hours to Automate Your Work — What If AI Could Run Half
          Your Day?
        </h1>

        <p className='text-xl sm:text-2xl text-gray-600 mb-4'>
          Learn how to leverage Artificial Intelligence to boost productivity,
          automate tasks, and create stunning content in this exclusive free
          webinar.
        </p>
        <div>
          <div className='text-lg sm:text-xl text-blue-700 font-semibold mb-2 flex flex-wrap items-center gap-3 justify-center'>
           <div className='flex items-center'>
            <CalendarDays className='w-5 h-5 mr-2' />
            December 6th
            </div>
            <div  className='flex items-center'>
            <Clock className='w-5 h-5 mr-2' />
            10 AM – 2 PM IST
            </div>
          </div>

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
            className="
    bg-gradient-to-r from-[#0A66C2] to-[#00C2FF]
    hover:from-[#00C2FF] hover:to-[#0A66C2]
    text-white font-bold text-xl
    px-10 py-4 rounded-full
    shadow-[0_0_30px_rgba(0,194,255,0.5)]
    hover:shadow-[0_10px_40px_rgba(0,194,255,0.7)]
    transition-all duration-300
    hover:-translate-y-1
    flex items-center gap-3
  "
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
