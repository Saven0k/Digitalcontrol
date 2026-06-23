import "./Banner.css";
import info from "../../assets/images/info-ico.svg";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__card">
                <img 
                    src={info} 
                    alt="Информационная иконка с восклицательным знаком" 
                    className="banner__icon" 
                />
                <div className="banner__content">
                    <span className="banner__label">ВАЖНО</span>
                    <span className="banner__message">
                        Система реагирует только на конкретный перечень сценариев. Она не может предупредить вас обо всех возможных опасностях. Будьте внимательны!
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;