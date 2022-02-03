
import Head from 'next/head';

import NavTop from '../components/nav';

import FooterSection from '../components/footersection';

import { navlinks} from "../data/data";
import HeaderBar from '../components/headerBar';

export default function Contact() {

  return (
    <div className="" >
      <Head>
        <title>Contact us Inbayelsa.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} bgColor={true} />
      

      <main className="text-gray-700">




        {/* HEADER SECTION ------------------------------------------------------*/}

        <HeaderBar data={{
          heading: "Contact Us", 
          sub:"For more info, or consultancy feel free to reach us."
         }} 
        />

        {/* PROFESSIONAL COURSES SECTION ------------------------------------------------------*/}

          <div className=" container mx-auto grid grid-row-2 md:flex">
            <div className={`
                row-start-2 shadow w-full md:w-2/3 h-auto 
                px-8 md:px-12 pt-8 pb-32 flex flex-col 
                space-y-4 text-justify text-gray-600
                border-l-2 border-solid
              `}
            >

                

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
