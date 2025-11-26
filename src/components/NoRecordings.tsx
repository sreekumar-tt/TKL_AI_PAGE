import { AlertCircle } from 'lucide-react';

interface NoRecordingsProps {
  onOpenModal: () => void;
}

export default function NoRecordings({ onOpenModal }: NoRecordingsProps) {
  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8'>
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
        <button
          onClick={onOpenModal}
          className='bg-[#2563EB] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl'
        >
          Register for the Free Masterclass
        </button>
      </div>
    </section>
  );
}
