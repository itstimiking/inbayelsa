
import {useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props{
    image: string
}
const ImageSlide: React.FC<Props> = ({image }) => {


    return (
        <AnimatePresence>
        <motion.img
            className="w-full absolute"
            src={image}

            animate={{ x: 0 }}
            initial={{x:-1000}}
            exit={{x:-1000}}
            transition={{ duration: 2}}
        />
        </AnimatePresence>
    )
}

const HeaderSection2: React.FC = () => {
    
    const [image, setImage] = useState<any>();
    let count = 0;

    const images = [
        <ImageSlide image={'url("/images/inbayelsa_image_website2.jpg")'} /> ,
        <ImageSlide image={'url("/images/inbayelsa_image_website.jpg")'} /> ,
    ]

    useEffect(()=>{
        const imageSwitcher = setInterval(()=>{
            setImage(images[count])
            if(count < images.length){
                count++
            }else{
                count = 0
            }

        },3000)

        return ()=> {
            clearInterval(imageSwitcher)
        }
        
    },[])

    return ( 
        <section className="w-full clip-cover md:w-1/2 relative md:relative z-10">  
            <div className="clip w-full h-full opacity-70 md:opacity-100 mix-blend-darken relative"
                style={{backgroundImage:'url("/images/inbayelsa_image_website.jpg")'}}
            >
                { image }
            </div>
        </section>
    );
}
 
export default HeaderSection2;