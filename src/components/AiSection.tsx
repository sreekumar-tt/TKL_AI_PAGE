export default function AiSection() {
  return (
    <section className="w-full bg-[#1a1414] text-white py-16 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          The AI Revolution{" "}
          <span className="text-blue-500">Won't Wait</span>
        </h2>
        <p className="text-gray-300 mt-4 text-lg">
          Every day you delay, your competitors move one step ahead.
The professionals and businesses that will dominate 2026 are being built TODAY.
        </p>
      </div>

      {/* Two Column Section */}
      <div className="mt-14 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        
        {/* Left Box */}
        <div className="flex gap-4 items-start">
          <div className="text-yellow-400 text-4xl">⚠️</div>
          <div>
            <h3 className="text-2xl font-bold">Stay Behind & Watch Others Grow</h3>
            <p className="text-gray-300 mt-2">
             Every day you postpone learning AI, someone else takes the opportunity.
The skills that will define the future are being mastered right now — by others.
            </p>
          </div>
        </div>

        {/* Right Box */}
        <div className="flex gap-4 items-start">
          <div className="text-yellow-400 text-4xl">🏆</div>
          <div>
            <h3 className="text-2xl font-bold">Become the Expert Everyone Needs</h3>
            <p className="text-gray-300 mt-2">
              Position yourself as the AI-powered professional or business owner
who delivers faster, smarter, and premium-quality results.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-14 flex justify-center">
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-xl font-semibold px-10 py-4 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
        >
          Enroll Now
          {/* <span className="text-2xl">➡️</span> */}
        </a>
      </div>

      {/* Closing Line */}
      {/* <p className="text-center text-gray-300 mt-6 text-lg">
        Enrollment Closes on{" "}
        <span className="text-purple-400 font-semibold">21st Nov</span>
      </p> */}
       <p className='text-center mt-10 text-black-600 font-bold italic'>
        Secure your spot and take the first step toward building your AI advantage.
      </p>
       <p className="text-center mt-2 text-black-600 font-bold">
      Enrollment Closes on <span className="text-blue-600 font-extrabold">5th December.</span>
    </p>
    </section>
  );
}
