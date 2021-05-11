import FadeInLate from "../animation/fadeInLate";
import FadeInUp from "../animation/fadeinUp";
import SlideIn from "../animation/slideIn";
 
const HeaderSection1: React.FC = () => {
    return ( 
      
        <section className="container absolute px-8">

          <div className="h-1/5 w-full md:w-1/2 pt-32 md:pt-40 relative z-20">

            {/** Main Jumbotron Header ----------------------- */}
            <SlideIn>
            <p className="capitalize font-extrabold text-6xl md:text-7xl text-gray-800"> 
              The world is moving forward
            </p>
            </SlideIn>

            {/** SUB Header ----------------------- */}
            <FadeInUp>
              <p className="capitalize font-bold text-xl md:text-3xl text-gray-700 pt-4"> 
                Your business should adapt accordingly
              </p>
            </FadeInUp>

            {/** Text ----------------------- */}
            <FadeInLate>
              <p className="text-gray-600 pt-4">
                Over 3 Billion people use the internet daily. In this digital age, if your business does not have an online presence you are likely loosing up to 50% of potential clients. Thats almost half of your potential return on investments (RIO). We can fix that for you fast.
              </p>
            </FadeInLate>

            <SlideIn>
              <p className="pt-8 flex space-x-4">
                <button className="bg-blue-600 relative text-white p-4 shadow hover:shadow-inner hover:bg-blue-500"> 
                  Get Started 
                  <span className="animate-ping rounded-full bg-white w-20 h-20 left-4 top-8 opacity-5 absolute"></span>
                </button>

                <button className="bg-blue-100 p-4 text-gray-800 shadow hover:shadow-inner hover:bg-blue-200"> 
                  Live Demo 
                </button>

              </p>
            </SlideIn>
          </div>

        </section>
      
    );
}
 
export default HeaderSection1;