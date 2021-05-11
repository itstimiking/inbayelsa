import {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface FadeInProps {
    
}
 
const FadeIn: React.FC<FadeInProps> = ({children}) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return ( 
        <motion.section
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5}}
            variants={{
            visible: { opacity: 1},
            hidden: { opacity: 0 }
            }}
        >
            {children}
        </motion.section>
     );
}
 
export default FadeIn;