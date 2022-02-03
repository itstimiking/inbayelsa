
import {useState, useEffect, useRef} from 'react';
import styles from './header.module.scss';
import { motion, AnimatePresence } from 'framer-motion';



const HeaderSection2: React.FC = () => {

    const slide = useRef(null);
    let count = 0;


    useEffect(()=>{
        let imageSwitcher;
        const slider = ()=>{
            clearInterval(imageSwitcher)
            imageSwitcher = setInterval(()=>{
                if(!slide.current.classList.contains("pause")){
                    const x = slide.current.firstChild
                    slide.current.removeChild(x)
                    slide.current.append(x)
                }
            },8000)
        }

        slider()

        return ()=> {
            clearInterval(imageSwitcher)
        }
        
    },[])

    return ( 
        <section className="w-full clip-cover md:w-1/2 relative md:relative z-10">  
            <div 
                className={`${styles.slide} clip w-full h-full opacity-70 md:opacity-100 mix-blend-darken relative`} 
                ref={slide}
                onMouseEnter={()=> slide.current.classList.add("pause")}
                onMouseLeave={()=> slide.current.classList.remove("pause")}
            >
                
                <img src="/images/inbayelsa_image_website.jpg" />
                <img src="/images/inbayelsa_image_website2.jpg" />
                <img src="/images/laptop_inbayelsa2.jpg" />

            </div>
        </section>
    );
}
 
export default HeaderSection2;