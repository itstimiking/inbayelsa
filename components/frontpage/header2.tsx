import {useState, useEffect} from 'react';
import FadeInUp from '../animation/fadeinUp';

interface Props{
    image: string
}
const ImageSlide: React.FC<Props> = ({image}) => {

    return (
        <div
            className="w-full h-full absolute top-0 left-0"
            style={{
                backgroundImage: image
            }}
        >

        </div>
    )
}

const HeaderSection2: React.FC = () => {

    const [image, setImage] = useState('url("/images/digitec_image_student.jpg")');
    let count = 0;

    const images = [
        'url("/images/digitec_image_student.jpg")',
        'url("/images/digitec_image_student2.jpg")',
        'url("/images/laptop_digitec.jpg")'
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
            <div className="clip w-full h-full opacity-70 md:opacity-100 mix-blend-darken relative">
                <ImageSlide image={image} /> 
            </div>
        </section>
    );
}
 
export default HeaderSection2;