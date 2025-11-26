import { AlertCircle } from 'lucide-react';

interface NoRecordingsProps {
  onOpenModal: () => void;
}

export default function NoRecordings({ onOpenModal }: NoRecordingsProps) {
  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-[#F4F8FB] '>
      <div className='max-w-4xl mx-auto text-center'>
        <div className='flex justify-center mb-6'>
          <AlertCircle className='w-16 h-16 text-[#2563EB]' />
        </div>
        <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
          No Recordings Will Be Provided —{' '}
          <span className='text-[#2563EB]'>Attend Live</span>
        </h2>
        <p className='text-lg text-gray-600 mb-8'>
          This ensures high-quality interaction and maximum value.
        </p>
        <div className='flex justify-center'>
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
    flex items-center justify-center gap-3
  "
        >
          Register for the Free Masterclass
        </button>
        </div>
      </div>
    </section>
  );
}
