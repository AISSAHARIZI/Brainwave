import React from 'react'
import Header from './Header';
import Main1 from './Main1/Main1';
import ChatSmarter from './ChatSmarter/ChatSmarter';
import Collarobation from './Collarobation';
import Creatorse from './Creators/Creatorse';
import VdphGen from './Creators/VdphGen';
import Pricing from './Pricing';
import Roadmap from './Roadmap';
import Footer from './Footer';

function Brainware() {
  return (
    <>
      <section className='bg-[#0e0c15]'>
      <Header/>
      <Main1/>
      <ChatSmarter/>
      <Collarobation/>
      <Creatorse/>
      <VdphGen/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
      </section>
    </>
  )
}

export default Brainware