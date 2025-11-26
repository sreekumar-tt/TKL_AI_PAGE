import { SendHorizontal  } from 'lucide-react';

export default function WhyAttend() {
  const reasons = [
    'Beginner-friendly and practical',
    'No technical background required',
    'Real demos of real tools',
    'Instant-use workflows',
    'Exclusive shortcuts & templates',
    'Gain a competitive advantage',
  ];

  const firstThree = reasons.slice(0, 3);
  const nextThree = reasons.slice(3, 6);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
        What Makes This Training Unique
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#F4F8FB] to-[#E6F4FD] p-8 rounded-2xl shadow-[0_12px_24px_rgba(10,102,194,0.1)] relative overflow-hidden border border-[#dcecfc]">
            <div className="absolute top-4 -right-8 bg-gradient-to-r from-[#0A66C2] to-[#00C2FF] text-white px-10 py-1 transform rotate-45 text-xs font-bold">
              benefit
            </div>

            {firstThree.map((reason, index) => (
              <div key={index} className="flex items-start mb-4">
                <SendHorizontal  className="w-6 h-6 text-[#2563EB] mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{reason}</p>
              </div>
            ))}
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#F4F8FB] to-[#E6F4FD] p-8 rounded-2xl shadow-[0_12px_24px_rgba(10,102,194,0.1)] relative overflow-hidden border border-[#dcecfc]">
            <div className="absolute top-4 -right-8 bg-gradient-to-r from-[#0A66C2] to-[#00C2FF] text-white px-10 py-1 transform rotate-45 text-xs font-bold">
              benefit
            </div>
            {nextThree.map((reason, index) => (
              <div key={index} className="flex items-start mb-4">
                <SendHorizontal  className="w-6 h-6 text-[#2563EB] mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700">{reason}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
