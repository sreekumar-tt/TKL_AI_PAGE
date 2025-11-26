import { useState } from 'react';
import Hero from './components/Hero';
import AIFuture from './components/AIFuture';
import WhoIsThisFor from './components/WhoIsThisFor';
import WhatYouLearn from './components/WhatYouLearn';
import Outcome from './components/Outcome';
import Bonus from './components/Bonus';
import About from './components/About';
import WhyAttend from './components/WhyAttend';
import NoRecordings from './components/NoRecordings';
import FAQ from './components/FAQ';
// import Header from './components/Header';
import Modal from './components/Modal';
import AiSection from './components/AiSection';
// import HowItWorks from './components/HowItWorks';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='min-h-screen bg-white'>
      {/* <Header /> */}
      <Hero onOpenModal={openModal} />
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
      <AiSection onOpenModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
