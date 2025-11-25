interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className='py-16 sm:py-24 px-4 sm:px-6 md:min-h-screen lg:px-8 bg-[linear-gradient(304deg,#164fa2_0%,rgba(87,199,133,1)_50%,#164fa2_100%)]'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
          Master AI in 4 Hours to Automate Your Work — What If AI Could Run Half
          Your Day?
        </h1>
        <p className='text-xl sm:text-2xl text-gray-600 mb-4'>
          Free Live GenAI Masterclass for Entrepreneurs, Solopreneurs &
          Professionals
        </p>
        <p className='text-lg sm:text-xl text-blue-700 font-semibold mb-8'>
          December 13th, 10 AM – 2 PM IST | Live Online
        </p>
        <div className='flex justify-center'>
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
