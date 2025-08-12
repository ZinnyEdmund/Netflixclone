import Hero from '../component/Hero/Hero';
import Categories from '../component/Categories/Categories';
import Experience from '../component/Experience/Experience';
import Faqs from '../component/Faqs/Faqs';
import Footer from '../component/Footer/Footer';

function Home() {
  return (
    <>
        <Hero />
        <Categories /> 
        <Experience />
        <Faqs />
        <Footer />
    </>
  )
}

export default Home