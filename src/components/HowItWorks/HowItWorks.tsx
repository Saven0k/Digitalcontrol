import "./HowItWorks.css";
import camera from "../../assets/images/camera.png"
import pizza from "../../assets/images/pizza.png"
import volume from "../../assets/images/volume.png"
import howArrow from "../../assets/images/how-arrow.svg"

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="how">
            <h2 className="how__title">КАК ЭТО РАБОТАЕТ?</h2>
            <h3 className="how__subtitle">Искусственный интеллект в режиме 24/7 анализирует видеопоток с мест производства работ.
                Система предупредит вас, как только будет обнаружена потенциально опасная ситуация.</h3>
            <div className="how__list">
                <div className="how__list-card">
                    <div className="how__list-card__circle">
                        <img src={camera} alt="" className="how__list-card__img" />
                    </div>
                    <h5 className="how__list-card__title">Камера фиксирует</h5>
                    <p className="how__list-card__subtitle">Непрерывный видеопоток
                        с места производства работ</p>
                </div>
                <img src={howArrow} alt="" className="how__list-card__arrow" />
                <div className="how__list-card">
                    <div className="how__list-card__circle">
                        <img src={pizza} alt="" className="how__list-card__img" />
                    </div>
                    <h5 className="how__list-card__title">ИИ анализирует</h5>
                    <p className="how__list-card__subtitle">Нейросеть распознает людей, технику и опасные зоны</p>
                </div>
                <img src={howArrow} alt="" className="how__list-card__arrow" />
                <div className="how__list-card">
                    <div className="how__list-card__circle">
                        <img src={volume} alt="" className="how__list-card__img" />
                    </div>
                    <h5 className="how__list-card__title">Система оповещает</h5>
                    <p className="how__list-card__subtitle">Голосовое предупреждение
                        при нарушении правил</p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;