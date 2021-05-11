import Link from "next/link";
import {Twitter, Linkedin, Instagram, Youtube, Whatsapp, Telegram, Facebook} from '@styled-icons/fa-brands';

interface navlink {// Each link interface
    title: string,
    url: string,
    icon?: JSX.Element
}

export interface FooterSectionProps {
    links: navlink[]
}
 
const FooterSection: React.FC<FooterSectionProps> = ({links}) => {
    return ( 
        <section className="footerHight text-gray-50">

            <div className="w-full h-3/5 bg-gray-500 py-16 px-8 flex sm:flex-row">
                <div className="w-1/2 lg:w-1/4 md:w-1/3">
                    <p>SOLUTIONS</p>
                    <ul className="text-sm pt-4 flex flex-col space-y-3">
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                        <li>Insight</li>
                        
                    </ul>
                </div>

                <div className="w-1/2 lg:w-1/4 md:w-1/3">
                    <p>LINKS</p>
                    <ul className="text-sm pt-4 flex flex-col space-y-3">
                        
                        {
                            links.map((link,index)=>(
                                <li key={index}>
                                    <Link href={link.url}>
                                        {link.title}
                                    </Link>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>

                <div className="w-1/2 lg:w-1/4 md:w-1/3">
                    <p>SUPPORT</p>
                    <ul className="text-sm pt-4 flex flex-col space-y-3">
                        <li>FAQ</li>
                        <li>Site map</li>
                        <li>Call: </li>
                        <li>Insight</li>
                        
                    </ul>
                </div>
            </div>

            <div className="w-full h-1/5 bg-gray-600 py-4 px-8 flex flex-wrap">
                
                <div className="w-full md:w-1/2">

                    <h2 className="font-bold text-xs">
                        SUBSCRIBT TO OUR NEWS LETTER
                    </h2>

                    <p className="text-xs pr-4">
                        All the latest news, vacancy and programmes straigth to your inbox, be the firs to know
                    </p>

                </div>

                <div className="w-full md:w-1/2 flex pt-2 md:pt-0 md:justify-end">
                    <form className="underline flex space-x-5">
                        <input 
                            type="text" 
                            className="focus:border-transparent rounded-md w-40 sm:w-80 text-gray-600" 
                            placeholder="Enter your email" 
                        />

                        <button 
                            type="submit"
                            className="bg-blue-600 relative no-underline text-white p-4 shadow hover:shadow-inner hover:bg-blue-500"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                
            </div>

            <div className="w-full h-1/5 bg-gray-900 p-8 flex">
                <p className="opacity-50 text-sm w-full sm:w-1/2">
                    2020 Digitec Hub. All rights reserved.
                </p>

                <p className="w-full sm:w-1/2 flex flex-wrap space-x-4 justify-end">
                    <a href="#">
                        <Facebook size="16" />   
                    </a> 

                    <a href="#">
                        <Linkedin size="16" />   
                    </a>

                    <a href="#">
                        <Telegram size="16" />   
                    </a>

                    <a href="#">
                        <Twitter size="16" />   
                    </a>

                    <a href="#">
                        <Whatsapp size="16" />   
                    </a>

                    <a href="#">
                        <Youtube size="16" />   
                    </a>

                    <a href="#">
                        <Instagram size="16" />   
                    </a>
                    
                </p>
            </div>

        </section>
     );
}
 
export default FooterSection;