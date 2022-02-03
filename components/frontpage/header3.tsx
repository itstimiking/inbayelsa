import Image from 'next/image';
import { useThemeContext } from '../../context/themeContext';
import BoxDeck from '../boxdeck';


const HeaderSection3: React.FC = () => {
    const {theme} = useThemeContext();

    return ( 
        <section className="hidden md:block md:w-1/2 md:pb-0 px-4 md:pl-8 md:relative z-10 opacity-30">
            {/* <BoxDeck boxColor={theme.text.rgb} /> */}
        </section>
    );
}
 
export default HeaderSection3;