
import Head from 'next/head';

import NavTop from '../components/nav';
import TestimonySection from '../components/testimonysection';
import FooterSection from '../components/footersection';

import { navlinks } from "../data/data";
import { testimonies } from "../data/testimonies";
import HeaderBar from '../components/headerBar';
import SlideIn from '../components/animation/slideIn';

export default function CoursesPro() {

  return (
    <div>
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

{/* PROFESSIONAL COURSES SECTION ------------------------------------------------------*/}

        <SlideIn>
        <div className="h-10 bg-gray-200 w-4/5 md:w-3/6 mt-12">
          <h3 className="flex justify-end p-2 text-xl font-bold pr-8"> 
            Professional Courses 
          </h3>
        </div>
        </SlideIn>

        <section className="bg-white px-8 flex flex-wrap">

         

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
