export default function HowItWorks() {
  return (
    <section
      id='how-it-works'
      className='bg-[#0B0B0E] text-white py-16 how-section'
    >
      <div className='max-w-6xl mx-auto px-4 custom-container container'>
        {/* Top Section */}
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6'>
          {/* Left Text */}
          <div className='lg:w-2/3'>
            <span className='inline-block bg-white/10 border border-white/20 rounded-lg text-sm font-semibold mb-3 px-3 py-2'>
              Who Is This For
            </span>

            <h2 className='text-3xl sm:text-4xl font-light leading-snug mb-3'>
              Your AI Clarity Session,
              <br className='hidden md:block' /> Tailored to You
            </h2>
          </div>

          {/* Right Button */}
          <div className='lg:w-1/3 text-center lg:text-right'>
            <a
              href='https://forms.zohopublic.in/stratworksconsultingllp11/form/NotaWEBINARJust60MinutesofREALAICLARITY/formperma/qARv_V-TCs-4hVO9WZuhpmzGgd55NYf_-VDaZWLgymI'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all duration-200'>
                <img src='/icons/video.png' alt='icon' className='w-5 h-5' />
                Reserve Your Free Spot
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className='max-w-6xl mx-auto px-4 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
          {/* Step 01 */}
          <div className='bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300'>
            <img
              src='/icons/Heading-1.png'
              alt='icon'
              className='w-14 h-14 mb-3 hidden md:block object-contain'
            />

            <span className='text-xl md:hidden block mb-2 font-bold'>01</span>

            <h6 className='text-lg font-semibold mb-2'>For IT Consultants</h6>
            <p className='text-gray-300 text-sm leading-relaxed'>
              Already solving complex client problems. Now learn how to
              integrate AI the right way, without overpromising or
              overengineering.
            </p>
          </div>

          {/* Step 02 */}
          <div className='bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300'>
            <img
              src='/icons/Heading-2.png'
              alt='icon'
              className='w-14 h-14 mb-3 hidden md:block object-contain'
            />

            <span className='text-xl md:hidden block mb-2 font-bold'>02</span>

            <h6 className='text-lg font-semibold mb-2'>
              For Business Consultants
            </h6>
            <p className='text-gray-300 text-sm leading-relaxed'>
              You guide growth strategies. Discover AI use cases that actually
              create measurable client results, not just hype.
            </p>
          </div>

          {/* Step 03 */}
          <div className='bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300'>
            <img
              src='/icons/Heading-3.png'
              alt='icon'
              className='w-14 h-14 mb-3 hidden md:block object-contain'
            />

            <span className='text-xl md:hidden block mb-2 font-bold'>03</span>

            <h6 className='text-lg font-semibold mb-2'>For Business Owners</h6>
            <p className='text-gray-300 text-sm leading-relaxed'>
              You’ve heard “AI will change everything.” We’ll show you what’s
              real, what’s ready, and what works for your business today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
