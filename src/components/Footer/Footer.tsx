import "./Footer.css"
import Header from "../Header/Header";
import icon from "../../assets/images/footer-picture.png"

const Footer = () => {
    return (
        <footer className="footer">
            <Header />
            <div className="footer__block">
                <img
                    src={icon}
                    alt="Иллюстрация с вопросом"
                    className="footer__image"
                />
                <div className="footer__content">
                    <h2 className="footer__title">Остались вопросы по работе системы?</h2>
                    <p className="footer__subtitle">Для получения дополнительной информации или разъяснений по работе системы видеоаналитики обратитесь, пожалуйста, к вашему непосредственному руководителю.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;