// export default function WhatYouLearn() {
//   const cards = [
//     {
//       title: '1️⃣ How to Create Better Prompts (Prompt Engineering 2.0)',
//       points: [
//         'The psychology behind powerful prompts',
//         '2 proven frameworks used by top AI experts',
//         'Real examples for marketing, operations, and execution',
//         'Turn any AI model into a highly reliable assistant',
//       ],
//     },
//     {
//       title: '2️⃣ Custom GPT Creation — Build Your Own AI Tools',
//       points: [
//         'Create AI assistants tailored to your workflow',
//         'Train them using your documents and data',
//         'Build GPTs for content, HR, sales, finance & more',
//         'Reduce manual work dramatically',
//       ],
//     },
//     {
//       title: '3️⃣ RAG-Based Customer Support Chatbot (No-Code)',
//       points: [
//         'Understand RAG in simple language',
//         'Build a chatbot using your knowledge base',
//         'Reduce customer queries and response time',
//         'Great for small businesses',
//       ],
//     },
//     {
//       title: '4️⃣ Simple AI Automations Using Tools Like n8n',
//       points: [
//         'Create workflows that run automatically',
//         'Automate reports, follow-ups, emails & more',
//         'Save hours weekly without coding',
//       ],
//     },
//   ];

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
//           What You Will Learn
//         </h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
//             >
//               <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
//               <ul className="space-y-2">
//                 {card.points.map((point, idx) => (
//                   <li key={idx} className="text-gray-600 flex items-start">
//                     <span className="text-[#2563EB] mr-2">•</span>
//                     <span>{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function WhatYouLearn() {
  const cards = [
    {
      title: 'How to Create Better Prompts (Prompt Engineering 2.0)',
      points: [
        'The psychology behind powerful prompts',
        '2 proven frameworks used by top AI experts',
        'Real examples for marketing, operations, and execution',
        'Turn any AI model into a highly reliable assistant',
      ],
    },
    {
      title: 'Custom GPT Creation — Build Your Own AI Tools',
      points: [
        'Create AI assistants tailored to your workflow',
        'Train them using your documents and data',
        'Build GPTs for content, HR, sales, finance & more',
        'Reduce manual work dramatically',
      ],
    },
    {
      title: 'RAG-Based Customer Support Chatbot (No-Code)',
      points: [
        'Understand RAG in simple language',
        'Build a chatbot using your knowledge base',
        'Reduce customer queries and response time',
        'Great for small businesses',
      ],
    },
    {
      title: 'Simple AI Automations Using Tools Like n8n',
      points: [
        'Create workflows that run automatically',
        'Automate reports, follow-ups, emails & more',
        'Save hours weekly without coding',
      ],
    },
  ];

  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a975680] via-[#6A39FF] to-[#FF4FD8]'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center'>
          What You Will Learn
        </h2>

        <div className='grid sm:grid-cols-2 gap-6 md:gap-8'>
          {cards.map((card, index) => (
            <div
              key={index}
              className='
             
                bg-white p-8 rounded-2xl shadow-md 
                border border-transparent 
                transition-all duration-300 
                hover:shadow-xl hover:scale-[1.03]
                hover:border-blue-400 hover:bg-blue-50/30
              
              '
            >
              {/* <div className="flex"> */}
              {/* <img src="/live1.png" alt="arrow" className="" /> */}
              <h3 className='text-xl font-bold text-gray-900 mb-4 sm:flex w-m-content '>
                <img
                  src='/live1.png'
                  alt='arrow'
                  className='me-2 hidden sm:block'
                />
                {card.title}
              </h3>
              {/* </div> */}

              <ul className='space-y-2'>
                {card.points.map((point, idx) => (
                  <li key={idx} className='text-gray-700 flex items-start'>
                    <span className='text-blue-600 mr-2 text-lg'>•</span>
                    <span className='text-base font-medium text-gray-700'>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
