
import Head from 'next/head';

import NavTop from '../components/nav';

import StaffSection from '../components/staffsection';
import TestimonySection from '../components/testimonysection';

import { navlinks} from "../data/data";
import { staffs} from "../data/staffs";
import { testimonies } from "../data/testimonies";
import FooterSection from '../components/footersection';
import HeaderBar from '../components/headerBar';

export default function About() {

  return (
    <div className="text-xl leading-loose" >
      <Head>
        <title>About Inbayelsa, all you should know</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavTop links={navlinks} bgColor={true} />
      

      <main className="text-gray-700">


{/* HEADER SECTION ------------------------------------------------------*/}

        <HeaderBar data={{
          heading: "About Inbayelsa.com", 
          sub:"We need you to need us."
         }} 
        />

{/* PROFESSIONAL COURSES SECTION ------------------------------------------------------*/}

        <div className=" container mx-auto grid grid-row-2 md:flex">
            <div className={`
                row-start-2 shadow w-full md:w-2/3 h-auto 
                px-8 md:px-12 pt-8 pb-32 sm:flex sm:space-x-5 text-gray-600
                border-l-2 border-solid 
              `}
            >

                <div 
                  className="w-full sm:w-1/2 min-h-0 rounded-lg -mt-12 bg-gray-100 mb-10 p-10 "
                >
                    <fieldset 
                        className="w-full h-60 border border-gray-300 reounded-lg p-5"
                    >
                      <legend className="mx-5 px-5">Our Mission</legend>

                      <p>
                        Connect every business, indivudual or organization to digital opportunities and a global customer base. 
                      </p>
                    </fieldset>

                    <fieldset 
                        className="w-full h-60 border border-gray-300 reounded-lg p-5 mt-10"
                    >
                      <legend className="mx-5 px-5">Our Vission</legend>

                      <p>
                        Connect every business, indivudual or organization to digital opportunities and a global customer base. 
                      </p>
                    </fieldset>
                </div>

                <div className="w-full sm:w-1/2 p-5 flex flex-col space-y-10">

                  <p>
                    Inbayelsa.com offers end-to-end digital solutions to help businesses in bayelsa deploy web solutions that can increase sales, improve business coverage and attract more customers.
                    It is a technology driven world and we provide all the tech services that a business will need to expand and grow digitally.
                  </p>

                  <p>
                    Traditional media platforms are getting floorded, and yet they are not as productive as they once where. The world is already a digital one. 
                    We help businesses to establish a successful digital pressence.
                  </p>

                </div>
                

            </div>

            <div className="row-start-1 w-full md:w-1/3 h-auto p-8" >
               <img src="/logo_inbayelsa_vertical_light.png" className="object-cover w-full" />
            </div>
        </div>


        <FooterSection links={navlinks} />

      </main>

      <footer className="footer">

      </footer>
    </div>
  )
}
