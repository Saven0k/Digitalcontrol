import heroPicture from '../../assets/images/hero-picture.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__content">
          <span className="eyebrow">Видеоаналитика производства работ</span>
          <h1 id="hero-title" className="hero__title">
            Умная камера.<br /><span>Безопасная работа.</span>
          </h1>
          <p className="hero__description">
            Ещё один помощник на производстве. Искусственный интеллект замечает
            опасные ситуации и предупреждает о них, чтобы вы могли вовремя среагировать.
          </p>
          <div className="hero__actions">
            <a className="hero__button" href="#scenarios">Посмотреть сценарии <span aria-hidden="true">↗</span></a>
            <a className="hero__link" href="#how-it-works">Как это работает <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero__media">
          <span className="hero__media-label">Технологии на стороне безопасности</span>
          <img src={heroPicture} alt="Иллюстрация работника и камеры на производственном объекте" width="666" height="443" fetchPriority="high" />
          <p className="hero__media-caption">Фиксирует. Анализирует. Предупреждает.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
