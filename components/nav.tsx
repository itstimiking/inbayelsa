import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Bars } from '@styled-icons/fa-solid';
import FadeInUp from './animation/fadeinUp';

import { Phone, Envelope, MapMarked} from '@styled-icons/fa-solid';
import { useThemeContext } from '../context/themeContext';


interface navlink {// Each link interface
    title: string,
    url: string,
}

interface Props { // Array of all links 
    links: navlink[],
    bgColor?: boolean,
}

const NavTop: React.FC<Props> = ({ links}) => {

    const router = useRouter();
    const nav = useRef(null);

    const [linksMd, setLinksMd] = useState(false);
    const [linksSm, setLinksSm] = useState(false);

    const {theme} = useThemeContext();

    const iconStyle = {
        borderRadius:"50%", 
        borderStyle:"solid",
        color: theme.primary.rgb, 
        borderWidth:"2px"
    }

    return (
        <nav className="relative h-40 w-full z-50 pt-5">

            <div className="text-sm leading-0 container mx-auto px-6 md:px-12 flex space-x-6"
                style={{color:theme.secondary.rgb}}
            >
                <div className=" flex itemes-center space-x-2">

                    <MapMarked 
                        size="30"
                        className="p-1 mt-1"
                        style={iconStyle}
                    />
                    <span className="flex flex-col h-full">
                        <small>No 271 chf melford okilo rd</small>
                        <small>Amarata, Yenagoa</small>
                    </span>

                </div>

                <div className=" flex itemes-center space-x-2">

                    <Phone 
                        size="30"
                        className="p-1 mt-1"
                        style={iconStyle}
                    />
                    <span className="flex flex-col h-full">
                        <small>08064655310</small>
                        <small>07054477323</small>
                    </span>

                </div>

                <div className="itemes-center space-x-2 hidden sm:flex">

                    <Envelope
                        size="30"
                        className="p-1 mt-1"
                        style={iconStyle}
                    />
                    <span className="flex flex-col h-full">
                        <small>contact@inbayelsa.com</small>
                        <small></small>
                    </span>

                </div>
            </div>
            
            <div 
                className={
                    `container mx-auto px-6 md:px-12 mt-5 flex 
                    flex-wrap space-x-10 content-center 
                     justify-between rounded-lg top-0 relative bg-gray-900`
                } 
                ref={nav}
            >

                {/* Logo -------------------------------------*/}
                <div className="flex flex-wrap content-center h-20">
                    <img src="/images/logo_inbayelsa.png" className="w-44" />
                </div>


                {/* Navigation links ---------------------------------*/}

                <div className="flex flex-wrap content-center lg:space-x-10 xl:space-x-16 text-gray-100">

                    {// Show full links at large screen size ----------------------------
                        links.map(link => (
                            <div className="hidden lg:block mr-3"
                                key={link.title}
                            >
                                <Link href={link.url} passHref >
                                    <a
                                        className={ // Chang active link color 
                                            router.pathname == link.url ? 
                                                " text-white" : 
                                                "hover:text-yellow-50"
                                        }
                                    >
                                        {link.title}
                                        
                                    </a>
                                </Link>
                                
                            </div>
                        ))
                    }

                    {// Show only 3 initial top nav links at medium screen size ---------------------
                        links.slice(0, 3).map(link => (
                            <div className="hidden md:block lg:hidden mr-5 pt-1 hover:text-blue-300"
                                key={link.title + "aa"}
                            >
                            
                                <Link href={link.url} passHref >
                                    <a
                                        className={ // Chang active link color to light blue if active
                                            router.pathname == link.url ? " border-b-2 border-solid border-yellow-500" : "hover:text-yellow-500"
                                        }
                                    >
                                        {link.title}
                                        
                                    </a>
                                </Link>
                            </div>
                        ))
                    }

                    {/* Medium screen button to show remaining hidden links, shows only at medium screen size -------------------*/}

                    <div>

                        <button
                            className="p-1 hidden md:block lg:hidden"
                            onClick={()=>setLinksMd(!linksMd)}
                        >
                            <Bars size="25" className="pb-1" />
                        </button>
                        <div className={
                            linksMd ? "flex flex-col absolute w-72 -ml-52 mt-5 shadow-md"
                            : "hidden"}>

                                    {// Show only 3 nav links at medium screen size ---------------------
                                        links.slice(3, links.length).map(link => (
                                            <div className="hidden md:block lg:hidden mr-4 bg-blue-900 hover:bg-blue-600 hover:text-gray-50 shadow p-4"
                                                key={link.title + "md"}
                                            >
                                                
                                                
                                                <Link href={link.url} passHref >
                                                    <a
                                                        className={ // Chang active link color to light blue if active
                                                            router.pathname == link.url ? "pb-2 border-b-2 border-solid border-yellow-500" : "pb-2 hover:text-yellow-500"
                                                        }
                                                    >
                                                        {link.title}
                                                        
                                                    </a>
                                                </Link>
                                            </div>
                                        ))
                                        
                                    }
                               

                        </div>
                    </div>
                    

                    {/** Mobile menu button only vissible in mobile small screens ------------- */}

                    <div className="relative">

                        <button
                            className="p-2 shadow md:hidden block cursor-pointer"
                            onClick={() => setLinksSm(!linksSm) }
                        >
                            <Bars size="22" className="" />
                            <span className="pt-5">{" "} Menu</span>
                        </button>

                        <div className={
                            linksSm ? "flex flex-col absolute w-72 -ml-44 mt-5 shadow-md"
                            : "hidden w-0"}>
                                <FadeInUp>
                                    {// Nav links for mobile screen ---------------------
                                        links.map(link => (
                                            <div className="block md:hidden bg-blue-900 border-solid border-r-2 border-blue-900 hover:bg-blue-600 hover:text-gray-50 shadow p-4"
                                                key={link.title + "md"}
                                            >
                                                
                                                
                                                <Link href={link.url} passHref >
                                                    <a
                                                        className={ // Chang active link color to light blue if active
                                                            router.pathname == link.url ? "pb-2 border-b-2 border-solid border-yellow-500" : "pb-2 hover:text-yellow-500"
                                                        }
                                                    >
                                                        {link.title}
                                                        
                                                    </a>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </FadeInUp>

                        </div>
                    </div>


                </div>

            </div>

            

        </nav>
    );
}

export default NavTop;