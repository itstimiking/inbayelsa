import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import { StyledIcon } from '@styled-icons/styled-icon';
import { Bars } from '@styled-icons/fa-solid';
import FadeInUp from './animation/fadeinUp';

import { Phone, Envelope, MapMarked} from '@styled-icons/fa-solid';

interface navlink {// Each link interface
    title: string,
    url: string,
    icon?: JSX.Element
}

interface Props { // Array of all links 
    links: navlink[],
    bgColor?: boolean,
}

const NavTop: React.FC<Props> = ({ links , bgColor}) => {

    const router = useRouter();

    const [linksMd, setLinksMd] = useState(false);
    const [linksSm, setLinksSm] = useState(false);

    const [courses, showCourses] = useState(false);

    console.log(router.pathname + "----------------")

    return (
        <nav className={"sticky h-40 w-full z-30 pt-5" + (bgColor ? "bg-white" : "")}>

            <div className="container mx-auto ">
                <div className="">
                    <Envelope size="15" 
                        className={
                            `text-blue-500 border-gray-600 
                            border-solid border-1 rounded-full`
                        } 
                    />
                </div>
            </div>
            
            <div className={
                    `container mx-auto px-8 md:pl-12 mt-5 flex 
                    flex-wrap space-x-10 content-center 
                    bg-blue-900 justify-between`
                } 
            >

                {/* Digitec Logo -------------------------------------*/}
                <div className="flex flex-wrap content-center h-20">
                    <img src="/images/logo_inbayelsa.png" className="w-52" />
                </div>


                {/* Navigation links ---------------------------------*/}

                <div className="flex flex-wrap content-center space-x-16 text-gray-100">

                    {// Show full links at large screen size ----------------------------
                        links.map(link => (
                            <div className="hidden lg:block mr-5 "
                                key={link.title + "aa"}
                            >

                                <span className="text-gray-200 mr-1">
                                    { link.icon}
                                </span>

                                { link.url === "/courses" ? (
                                    <Link href="#" >
                                        <a 
                                            onMouseEnter={()=>showCourses(!courses)}
                                            onClick={()=>link.url === "/courses" && showCourses(!courses) }
                                            className={ // Chang active link color to light blue if active
                                                router.pathname == link.url ? "text-red-500 border-b-2 border-solid border-yellow-500" : "hover:text-yellow-500"
                                            }
                                        >

                                            {link.title}

                                        </a>
                                    </Link>
                                    )
                                    : (
                                        <Link href={link.url} passHref >
                                            <a
                                                onMouseEnter={()=> showCourses(false) } 
                                                className={ // Chang active link color to light blue if active
                                                    router.pathname == link.url ? " border-b-2 border-solid border-yellow-500" : "hover:text-yellow-500"
                                                }
                                            >
                                                {link.title}
                                                
                                            </a>
                                        </Link>
                                    )
                                }

                                {/* Dropdown Links for the courses pages -----------------*/}
                                { link.url === "/courses" && (
                                    <div 
                                        className={!courses? "hidden" :"absolute  mt-4 "}
                                    >
                                        <FadeInUp>
                                        <div className="bg-gray-100 flex flex-col">
                                            <Link href="/courses_pro" passHref>
                                                <a className="shadow p-4 hover:bg-blue-600 hover:text-gray-50"> 
                                                    Professional Courses
                                                </a>
                                            </Link>
                                            <Link href="/courses_ict" passHref>
                                                <a className="shadow p-4 hover:bg-blue-600 hover:text-gray-50"> 
                                                    ICT Courses 
                                                </a>
                                            </Link>
                                        </div>
                                        </FadeInUp>
                                    </div>
                                )}
                            </div>
                        ))
                    }

                    {// Show only 3 initial top nav links at medium screen size ---------------------
                        links.slice(0, 3).map(link => (
                            <div className="hidden md:block lg:hidden mr-5 hover:text-blue-300"
                                key={link.title + "aa"}
                            >
                                <span className="text-blue-200">
                                    { link.icon}
                                </span>
                                <Link href={link.url} passHref>
                                    <a>{link.title}</a>
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
                            linksMd ? "flex flex-col absolute z-40 -ml-24 "
                            : "hidden"}>
                                <FadeInUp>

                                    {// Show only 3 nav links at medium screen size ---------------------
                                        links.slice(3, links.length).map(link => (
                                            <div className="hidden md:block lg:hidden mr-4 hover:bg-blue-600 hover:text-gray-50 shadow p-4"
                                                key={link.title + "md"}
                                            >
                                                <span className="text-blue-200">
                                                    { link.icon}
                                                </span>

                                                <Link href={link.url} passHref>
                                                <a> {link.title}</a>
                                                </Link>
                                            </div>
                                        ))
                                        
                                    }
                                </FadeInUp>

                        </div>
                    </div>
                    

                    {/** Mobile menu button only vissible in mobile small screens ------------- */}

                    <div className="">

                        <button
                            className="p-2 shadow md:hidden border-white border-solid border-b-2"
                            onClick={() => setLinksSm(!linksSm) }
                        >
                            <Bars size="27" className="pb-1" />
                            {" "} Menu
                        </button>

                        <div className={
                            linksSm ? "flex flex-col absolute z-40 w-48 mt-4 -ml-4 shadow-md"
                            : "hidden"}>
                                <FadeInUp>
                                    {// Nav links for mobile screen ---------------------
                                        links.map(link => (
                                            <div className="block md:hidden bg-gray-50 hover:bg-blue-600 hover:text-gray-50 shadow p-4"
                                                key={link.title + "md"}
                                            >
                                                <span className="text-blue-200">
                                                    { link.icon}
                                                </span>
                                                
                                                <Link href={link.url} passHref>
                                                    <a>{link.title}</a>
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