import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import NavTop from '../components/nav';
import HeaderSection1 from '../components/frontpage/header1';
import HeaderSection2 from '../components/frontpage/header2';

import SecondSection from '../components/frontpage/secondsection';
import BlogSection from '../components/blogsection';
import StaffSection from '../components/staffsection';
import TestimonySection from '../components/testimonysection';

import { navlinks, boxes} from "../data/data";

import { staffs} from "../data/staffs";
import { testimonies } from "../data/testimonies";
import FooterSection from '../components/footersection';

import {getAllPostsData} from "../lib/getPostData";


export default function Index({articles}) {

  return (
    <div>
      <Head>
        <title>Taking bayelsa to a digital space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} />
      

      <main className="text-gray-700">

        <header 
            className="flex -mt-14 py-50  justify-center relative bg-gray-200 banner"
        >

          {/** Main Jumbotron Header section ----------------------- */}
          <HeaderSection1 />
          <section className="w-full md:w-1/2 md:pb-0 px-4 md:pl-8 md:relative z-20">

          </section>

          {/** Header image section -------------------------------- */}
          
          <HeaderSection2 />

          

        </header>

        {/* Boxes section whith a side heading ---------------------*/}
        
        <SecondSection heading={boxes.heading} contents={boxes.content} />

        <BlogSection articles={articles} />

        <StaffSection staffs={staffs} />

        <TestimonySection testimonies={ testimonies }/>

        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}

export async function getStaticProps({ params }) {
  
  const articles = await getAllPostsData();
  
  return {
    props: { articles },
    revalidate: 1,
  };
}