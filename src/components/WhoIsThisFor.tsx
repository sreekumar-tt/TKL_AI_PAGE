import { CheckCircle } from 'lucide-react';

export default function WhoIsThisFor() {
  const audience = [
    'Entrepreneurs',
    'Solopreneurs',
    'Coaches, consultants & agency owners',
    'Senior working professionals',
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 faq-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          Who This Masterclass Is For
        </h2>
        <div className="space-y-4 mb-8">
          {audience.map((item, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#2563EB] mr-3 flex-shrink-0 mt-1" />
              <p className="text-lg text-white">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-white text-center italic">
          "If your work involves content, communication, customer support, analysis, or repetitive tasks — this is for you."
        </p>
      </div>
    </section>
  );
}
