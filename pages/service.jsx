import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import NavTop from '../components/nav';
import TestimonySection from '../components/testimonysection';
import FooterSection from '../components/footersection';

import { navlinks } from "../data/data";
import { ictCourses, proCourses} from "../data/courses";
import { testimonies } from "../data/testimonies";
import HeaderBar from '../components/headerBar';
import SlideIn from '../components/animation/slideIn';

export default function CoursesIct() {

  return (
    <div className="text-xl leading-loose" >
      <Head>
        <title>Inbayelsa.com digital services and solutions.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} bgColor={true}/>

      <main className="text-gray-700">

{/* HEADER SECTION ------------------------------------------------------*/}

        <HeaderBar data={{
            heading: "Our Services", 
            sub:" We offer the following professional services."
          }} 
        />

        <section className="bg-white px-8 flex flex-wrap">

          {
            ictCourses.map((service) => (
              // Only show right border if its not the last index
              <p></p>
            ))
          }

        </section>


{/* FOOTER SECTION ------------------------------------------------------*/}

        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
