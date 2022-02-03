import { useThemeContext } from "../../context/themeContext";
import FadeInLate from "../animation/fadeInLate";
import FadeInUp from "../animation/fadeinUp";
import SlideIn from "../animation/slideIn";

const HeaderSection1: React.FC = () => {
    const { theme } = useThemeContext();

    return (
        <section className="container mx-auto banner-content px-8 md:px-14">
            <div className="h-1/5 w-full md:w-1/2 pt-32 md:pt-40 relative z-30">
                {/** Main Jumbotron Header ----------------------- */}
                <SlideIn>
                    <p
                        className="capitalize font-extrabold text-4xl md:text-6xl"
                        style={{ color: theme.text.rgb }}
                    >
                        The world is moving fast
                    </p>
                </SlideIn>

                {/** SUB Header ----------------------- */}
                <FadeInUp>
                    <p
                        className="capitalize font-bold text-xl md:text-3xl text-gray-700 pt-4 sm:mix-blend-darken"
                        style={{ color: theme.text.rgb }}
                    >
                        Your business should adapt accordingly
                    </p>
                </FadeInUp>

                {/** Text ----------------------- */}
                <FadeInLate>
                    <p
                        className="pt-4 md:hidden lg:block"
                        style={{ color: theme.text.rgb }}
                    >
                        Over 3 Billion people use the internet daily. In this digital age, 
                        if your business does not have an online presence you are likely 
                        losing up to 50% of potential clients. That's almost half of your 
                        potential return on investments (RIO). We can fix that for you fast.
                    </p>
                </FadeInLate>

                <SlideIn>
                    <p className="pt-8 flex space-x-4">
                        <button
                            className="relative text-white p-4 shadow-md hover:animate-bounce hover:shadow-inner rounded-md overflow-hidden"
                            style={{ backgroundColor: theme.highlight.rgb }}
                        >
                            Get Started
                            <span className="animate-ping rounded-full bg-white w-20 h-20 left-4 top-8 opacity-5 absolute"></span>
                        </button>

                        <button
                            className="p-4 text-gray-800 shadow-md hover:shadow-inner hover:bg-blue-200 rounded-md hover:animate-bounce"
                            style={{ backgroundColor: theme.text.rgb }}
                        >
                            What We Do
                        </button>
                    </p>
                </SlideIn>
            </div>
        </section>
    );
};

export default HeaderSection1;
