import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import NavTop from '../components/nav';

import FooterSection from '../components/footersection';

import { navlinks} from "../data/data";
import HeaderBar from '../components/headerBar';
import SlideIn from '../components/animation/slideIn';

export default function Contact() {

  return (
    <div>
      <Head>
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} bgColor={true} />
      

      <main className="text-gray-700">




{/* HEADER SECTION ------------------------------------------------------*/}

<HeaderBar data={{
          heading: "Contact Digitec", 
          sub:"For more info, or consultancy feel free to reach us."
         }} 
        />

{/* PROFESSIONAL COURSES SECTION ------------------------------------------------------*/}

        <SlideIn>
          <div className="h-10 bg-gray-200 w-3/5 md:w-2/6 shadow mt-12">
            <h3 className="flex justify-end p-2 text-xl font-bold pr-8"> 
              CONTACT US
            </h3>
          </div>
        </SlideIn>

        <div className="grid grid-row-2 md:flex">
          <div className="row-start-2 shadow w-full md:w-2/3 h-auto px-8 md:px-12 pt-8 pb-32 flex flex-col space-y-4 text-justify text-gray-600">

          
          

          </div>
          
          <div className="row-start-1 w-full md:w-1/3 h-auto p-8" >
          <img src="/images/logo_digitec.png" className="object-cover w-full" />
          </div>
        </div>

        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
