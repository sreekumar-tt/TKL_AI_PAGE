// export default function AIFuture() {
//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
//           AI Is Becoming the Most Valuable Skill of 2025 — And Those Who Learn It Early Get the Biggest Advantage.
//         </h2>
//         <p className="text-lg text-gray-600 leading-relaxed text-center">
//           Whether you're an entrepreneur trying to scale without adding more workload… a solopreneur juggling multiple responsibilities… or a professional looking to stay relevant and increase efficiency… this free 4-hour masterclass will show you exactly how to use AI to automate repetitive tasks, improve output, and build your own AI tools — without needing technical skills.
//         </p>
//       </div>
//     </section>
//   );
// }
export default function AIFuture() {
  return (
    <section
      className='
        py-16 px-4 sm:px-6 lg:px-8
        bg-[#111827]
        relative
      
      '
    >
      <div
        className='
          max-w-4xl mx-auto 
          bg-white/20 backdrop-blur-xl 
          p-4 md:p-10 rounded-3xl shadow-xl 
          transition-all duration-300
          hover:bg-white/30 hover:shadow-2xl
        '
      >
        <h2
          className='
            text-3xl sm:text-4xl font-bold text-white 
            mb-6 text-center 
            transition duration-300 
            hover:text-white/90 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]
          '
        >
          AI Is Becoming the Most Valuable Skill of 2025 — And Those Who Learn
          It Early Get the Biggest Advantage.
        </h2>

        <p
          className='
            text-lg text-white/90 leading-relaxed text-center 
            transition duration-300
            hover:text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]
          '
        >
          Whether you're an entrepreneur trying to scale without adding more
          workload… a solopreneur juggling multiple responsibilities… or a
          professional looking to stay relevant and increase efficiency… this
          free 4-hour masterclass will show you exactly how to use AI to
          automate repetitive tasks, improve output, and build your own AI tools
          — without needing technical skills.
        </p>
      </div>
    </section>
  );
}
