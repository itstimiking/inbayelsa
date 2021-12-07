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
        <title>Digitec Hub Official website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} bgColor={true}/>

      <main className="text-gray-700">

{/* HEADER SECTION ------------------------------------------------------*/}

        <HeaderBar data={{
            heading: "Courses", 
            sub:"At digitec we offer a wide range of well tailored industry standard ICT courses that meets the damands of today's Digital world."
          }} 
        />

{/* ICT COURSES SECTION ------------------------------------------------------*/}
        <SlideIn>
        <div className="h-10 bg-gray-200 w-4/5 md:w-3/6 mt-12">
          <h3 className="flex justify-end p-2 text-xl font-bold pr-8"> 
            ICT Courses 
          </h3>
        </div>
        </SlideIn>

        <section className="bg-white px-8 flex flex-wrap">

          {
            ictCourses.map((course, index) => (
              // Only show right border if its not the last index
              <div 
                key={index}
                className={`${index == (ictCourses.length - 1) ? "":"border-solid border-r-2 border-gray-300"} w-full md:w-1/3 lg:w-1/4 sm:pb-8 sm:px-6 px-4 mt-12 md:mt-12 lg:my-24 flex flex-col shadow`}
              >
            
                <img src={ course.image}  className="w-full object-cover" />
              
                <h4 className="text-lg font-bold pt-2 sm:pt-4" >
                  {course.title}
                </h4>
                <a href="#" className="text-red-500">
                  Read more ...
                </a >
              </div>
            ))
          }

        </section>

{/* TESTIMONY SECTION ------------------------------------------------------*/}

        <TestimonySection testimonies={ testimonies }/>

{/* FOOTER SECTION ------------------------------------------------------*/}

        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
