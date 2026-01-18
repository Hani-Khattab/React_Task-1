import { Container } from 'react-bootstrap';
import style from './Hero.module.css';
import heroImage from './../assets/img/hero-img.png';
import { FaStar } from 'react-icons/fa';

function HeroSection() {
  return (
    <section className={style.heroSection}>
      <Container className="text-center">

        <img src={heroImage} alt="Hero Avatar" className={style.heroImage} />
        <h1 className={`text-white mt-4 fw-bold ${style.heroTitle} `} > START BOOTSTRAP </h1>
        <div className={`${style.divider} d-flex align-items-center justify-content-center gap-2 my-4`}>
          <span className={style.line}></span>
          <FaStar size={30} color="white" />
          <span className={style.line}></span>
        </div>

        <p className="hero-sub text-white ">
          Graphic Artist - Web Designer - Illustrator
        </p>

      </Container>
    </section>
  );
}

export default HeroSection;
