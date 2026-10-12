import footerPicture from '../../assets/images/footer-picture.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__content">
          <span className="eyebrow">Безопасность начинается с понимания</span>
          <h2 className="section-title">Остались вопросы?</h2>
          <p>За дополнительной информацией о системе видеоаналитики обратитесь к вашему непосредственному руководителю.</p>
          <a href="#scenarios">Вернуться к сценариям <span aria-hidden="true">↑</span></a>
        </div>
        <img className="footer__image" src={footerPicture} alt="" width="329" height="365" loading="lazy" />
      </div>
      <div className="footer__bottom container">
        <span>DigitalControl · Производственная безопасность</span>
        <span>Информационный портал</span>
      </div>
    </footer>
  );
}

export default Footer;
