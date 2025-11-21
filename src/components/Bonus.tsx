import { Gift } from 'lucide-react';

export default function Bonus() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Gift className="w-16 h-16 text-[#2563EB]" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Bonus for All Live Attendees
        </h2>
        <p className="text-lg text-gray-600">
          Free AI Learning Roadmap (Worth ₹3,000) — A step-by-step guide showing what to learn and in what order.
        </p>
      </div>
    </section>
  );
}
