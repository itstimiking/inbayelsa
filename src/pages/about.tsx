import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import NavTop from '../components/nav';

import StaffSection from '../components/staffsection';
import TestimonySection from '../components/testimonysection';

import { navlinks} from "../data/data";
import { staffs} from "../data/staffs";
import { testimonies } from "../data/testimonies";
import FooterSection from '../components/footersection';
import HeaderBar from '../components/headerBar';
import SlideIn from '../components/animation/slideIn';

export default function About() {

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
          heading: "About Digitec", 
          sub:"From humble begining to where we are now."
         }} 
        />

{/* PROFESSIONAL COURSES SECTION ------------------------------------------------------*/}

        <SlideIn>
          <div className="h-10 bg-gray-200 w-3/5 md:w-2/6 shadow mt-12">
            <h3 className="flex justify-end p-2 text-xl font-bold pr-8"> 
              ABOUT US
            </h3>
          </div>
        </SlideIn>

        <div className="grid grid-row-2 md:flex">
        <div className="row-start-2 shadow w-full md:w-2/3 h-auto px-8 md:px-12 pt-8 pb-32 flex flex-col space-y-4 text-justify text-gray-600">

          <p>
            We are an ICT firm in the southern region of Nigeria that has pioneered ICT & Professional Course training and we never stopped.
          </p>

          <p>
            As changes in technology have accelerated, it’s become even more essential for people to master technology to be productive, invaluable employees who optimize, program and invent solutions and even grow companies of their own.
          </p>
          <p>
            For 12 years DIGITEC has provided students with industry leading technical training that delivers the most relevant and intuitive computer/ICT & Professional courses and certifications.
          </p>
          <p>
            Official training partner for Professional body leaders such as WORLD SAFETY ORGANISATION DIGITEC is a Renowned ICT & Professional Course training providers. For students that means training with the highest quality source materials and the latest products and technologies. For businesses it means getting the highest return on their training investment.
          </p>

          <h2 className="font-bold text-lg py-8">Invest in courses and certifications that advance careers:</h2>

          <p>
            All of DIGITEC’s Learning Methods deliver the same comprehensive content in online and traditional classroom settings, at your worksite, and self-paced with one-on-one support.
          </p>
          <p>We’ll create innovative training solutions that work for your business and we’ll account for the results whether your company is small, mid-sized or a global enterprise.
          </p>
          <p>DIGITEC is blazing new career paths every day.</p>

          </div>
          <div className="row-start-1 w-full md:w-1/3 h-auto p-8" >
          <img src="/images/logo_digitec.png" className="object-cover w-full" />
          </div>
        </div>

        <StaffSection staffs={staffs} />

        <TestimonySection testimonies={ testimonies }/>

        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
