import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    type_of_role: '',
    location: '',
  });

  useEffect(() => {
    if (isOpen) {
      firstInputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setShowSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        type_of_role: '',
        location: '',
      });
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);
  //   setShowSuccess(true);
  //   setFormData({
  //     fullName: '',
  //     email: '',
  //     phone: '',
  //     companyName: '',
  //   });
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: formData.fullName,
      email_id: formData.email,
      mobile_number: formData.phone,
      company_name: formData.companyName,
      type_of_role: formData.type_of_role,
      location: formData.location,
    };

    try {
      const response = await fetch(
        'https://technokeylearning.com/tkl_contact/api/contact-submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      console.log('API Response:', data);

      if (response.ok) {
        setShowSuccess(true); // success UI
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          type_of_role: '',
          location: '',
        });
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Check console.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300'
      onClick={handleBackdropClick}
      aria-hidden={!isOpen}
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
    >
      <div
        ref={modalRef}
        className='bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in'
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors'
          aria-label='Close modal'
        >
          <X className='w-6 h-6' />
        </button>

        {showSuccess ? (
          <div className='text-center py-8'>
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <svg
                className='w-8 h-8 text-green-500'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>
              Thank you! Your seat is reserved.
            </h3>
          </div>
        ) : (
          <>
            <h2
              id='modal-title'
              className='text-2xl font-bold text-gray-900 mb-6 text-center'
            >
              Register for Free Masterclass
            </h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label
                  htmlFor='fullName'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Full Name <span className='text-red-500'>*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type='text'
                  id='fullName'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all'
                  placeholder='Enter your full name'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Email Address <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Phone Number <span className='text-red-500'>*</span>
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all'
                  placeholder='+91 XXXXX XXXXX'
                />
              </div>

              <div>
                <label
                  htmlFor='companyName'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Company Name <span className='text-gray-400'>(Optional)</span>
                </label>
                <input
                  type='text'
                  id='companyName'
                  name='companyName'
                  value={formData.companyName}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none transition-all'
                  placeholder='Your company name'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Designation <span className='text-gray-400'>(Optional)</span>
                </label>
                <input
                  type='text'
                  name='type_of_role'
                  value={formData.type_of_role}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB]'
                  placeholder='Eg: CEO, Executive Director, Managing Director'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Location <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  name='location'
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2563EB]'
                  placeholder='City Name (Eg: Coimbatore)'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mt-6'
              >
                Submit & Save My Seat
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
