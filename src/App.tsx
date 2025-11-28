import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import AIFuture from './components/AIFuture';
import WhatYouLearn from './components/WhatYouLearn';
import Outcome from './components/Outcome';
import Bonus from './components/Bonus';
import WhyAttend from './components/WhyAttend';
import NoRecordings from './components/NoRecordings';
import FAQ from './components/FAQ';
// import Header from './components/Header';
import Modal from './components/Modal';
import AiSection from './components/AiSection';
// import HowItWorks from './components/HowItWorks';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schedule, setSchedule] = useState({
    open_date_text: '',
    end_date_text: '',
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await fetch(
          'https://technokeylearning.com/tkl_contact/api/process-schedule'
        );
        const data = await res.json();

        if (data.status && data.data.length > 0) {
          const s = data.data[0];
          setSchedule({
            open_date_text: s.open_date_text,
            end_date_text: s.end_date_text,
          });
        }
      } catch (error) {
        console.log('Schedule fetch error:', error);
      }
    };

    fetchSchedule();
  }, []);
  return (
    <div className='min-h-screen bg-white'>
      {/* <Header /> */}
      <Hero onOpenModal={openModal} schedule={schedule} />
      <AIFuture />
      {/* <WhoIsThisFor /> */}
      <WhatYouLearn />
      {/* <HowItWorks/> */}
      <Outcome />
      <Bonus />
      {/* <About /> */}
      <WhyAttend />
      <NoRecordings onOpenModal={openModal} />
      <FAQ />
      <AiSection onOpenModal={openModal} schedule={schedule} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
