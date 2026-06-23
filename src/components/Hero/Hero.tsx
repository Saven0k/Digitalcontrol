import heroPicture from "../../assets/images/hero-picture.png";
import heroArrow from "../../assets/images/hero-arrow.svg";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">
                    Умная камера
                    <span className="hero__title-accent"> поможет вам </span>
                    в работе
                </h1>
                <p className="hero__description">
                    На объектах появился новый помощник — системы видеоаналитики производства работ, использующие технологии искусственного интеллекта. Их цель — повысить вашу безопасность.
                </p>
                <a
                    href="#how-it-works"
                    className="hero__button"
                >
                    Как это работает?
                    <img
                        src={heroArrow}
                        alt="Стрелка-указатель"
                        className="hero__button-icon"
                    />
                </a>
            </div>
            <div className="hero__media">
                <div className="hero__media-wrapper">
                    <img
                        src={heroPicture}
                        alt="Умная камера видеоаналитики на объекте"
                        className="hero__media-image"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;