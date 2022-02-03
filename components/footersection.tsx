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
        <section className="footerHight text-gray-50 font-robo text-lg">

            <div className="w-full h-3/5 bg-gray-500 py-16 px-8 flex sm:flex-row">
                <div className="w-1/2 lg:w-1/4 md:w-1/3">
                    <p>SOLUTIONS</p>
                    <ul className="text-sm pt-4 flex flex-col space-y-3">
                        <li>Web Development</li>
                        <li>Digital Marketing</li>
                        <li>Mobile app development</li>
                        <li>Custom software development</li>
                        
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
                        <li>Call: 08064655310</li>
                        <li>Email: contact@inbayelsa.com</li>
                        
                    </ul>
                </div>
            </div>

            <div className="w-full h-1/5 bg-gray-600 py-4 px-8 flex flex-wrap">
                
                <div className="w-full md:w-1/2">

                    <h2 className="font-bold">
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h2>

                    <p className="pr-4 text-md">
                        Stay connected, watch out for our promos and updates
                    </p>

                </div>

                <div className="w-full md:w-1/2 flex pt-2 md:pt-0 md:justify-end">
                    <form className="flex space-x-5">
                        <input 
                            type="text" 
                            className="focus:outline-none rounded-md w-40 sm:w-80 text-gray-600 px-4" 
                            placeholder="Enter your email" 
                        />

                        <button 
                            type="submit"
                            className="bg-blue-600 rounded-md text-white p-4 hover:bg-blue-500"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                
            </div>

            <div className="w-full h-1/5 bg-gray-900 p-8 flex">
                <p className="opacity-50 text-sm w-full sm:w-1/2">
                    2020 Inbayelsa.com. All rights reserved.
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