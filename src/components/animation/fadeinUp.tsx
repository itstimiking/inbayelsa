import {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface FadeInUpProps {
    
}
 
const FadeInUp: React.FC<FadeInUpProps> = ({children}) => {

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
            transition={{ duration: 0.7 }}
            variants={{
            visible: { opacity: 1, y:0 },
            hidden: { opacity: 0, y:100 }
            }}
        >
            {children}
        </motion.section>
     );
}
 
export default FadeInUp;