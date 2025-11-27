import OneHourTimer from "./Timer";

interface AiSectionProps {
  onOpenModal: () => void;
}

export default function AiSection({ onOpenModal }: AiSectionProps) {
  return (
    <>
    
   
    <section className='w-full bg-gradient-to-r from-[#0A66C2] to-[#00C2FF] text-white py-16 px-4 md:px-10 lg:px-20'>
      {/* Heading */}
      <div className='text-center max-w-3xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold leading-tight'>
          The AI Revolution <span className='text-blue-900 '>Won't Wait</span>
        </h2>
        <p className='text-white mt-4 text-lg'>
          Every day you delay, your competitors move one step ahead. The
          professionals and businesses that will dominate 2026 are being built
          TODAY.
        </p>
      </div>

      {/* Two Column Section */}
      <div className='mt-14 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto'>
        {/* Left Box */}
        <div className='flex gap-4 items-start'>
          <div className='text-yellow-400 text-4xl'>⚠️</div>
          <div>
            <h3 className='text-2xl font-bold'>
              Stay Behind & Watch Others Grow
            </h3>
            <p className='text-white mt-2'>
              Every day you postpone learning AI, someone else takes the
              opportunity. The skills that will define the future are being
              mastered right now — by others.
            </p>
          </div>
        </div>

        {/* Right Box */}
        <div className='flex gap-4 items-start'>
          <div className='text-yellow-400 text-4xl'>🏆</div>
          <div>
            <h3 className='text-2xl font-bold'>
              Become the Expert Everyone Needs
            </h3>
            <p className='text-white mt-2'>
              Position yourself as the AI-powered professional or business owner
              who delivers faster, smarter, and premium-quality results.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className='mt-14 flex justify-center'>
        <a
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
          Register for Free
       
        </a>
      </div>

      {/* Closing Line */}
      {/* <p className="text-center text-white mt-6 text-lg">
        Enrollment Closes on{" "}
        <span className="text-purple-400 font-semibold">21st Nov</span>
      </p> */}
      <p className='text-center mt-10 text-black-600 font-bold italic'>
        Secure your spot and take the first step toward building your AI
        advantage.
      </p>
      <p className='text-center mt-2 text-black-600 font-bold'>
        Enrollment Closes on{' '}
        <span className='text-blue-900 font-extrabold text-xl'>5th December.</span>
      </p>
    </section>
    <div className="w-full bg-[#111] text-white py-4 px-4 sm:px-20 relative">


  {/* <div className="w-full bg-green-700 text-white text-sm py-2 px-4 flex items-center gap-2">
    <span className="w-2 h-2 bg-white rounded-full"></span>
    <p>Richa registered 3 mins ago</p>
  </div> */}

  <div className="flex items-center justify-between mt-4">

    <div>
      <div className="flex items-center gap-3">
        <p className="text-2xl  font-bold">
          Free<span className="line-through ml-3">
          ₹500 </span></p>
        {/* <p className="text-lg line-through opacity-60">500</p> */}
      </div>

      {/* <p className="text-sm mt-1 opacity-80">
        Offer ends in <span className="font-semibold">05:58</span>
      </p> */}
      <OneHourTimer />
    </div>

    <a
      href="#"
      className="
    bg-gradient-to-r from-[#0A66C2] to-[#00C2FF]
    hover:from-[#00C2FF] hover:to-[#0A66C2]
    text-white font-bold text-xl
    px-10 py-4 rounded-full
    shadow-[0_0_30px_rgba(0,194,255,0.5)]
    hover:shadow-[0_10px_40px_rgba(0,194,255,0.7)]
    transition-all duration-300
    hover:-translate-y-1
    flex items-center justify-center gap-3
  "
    >
       Enroll Now
    </a>
  </div>

</div>
 </>
  );
}
