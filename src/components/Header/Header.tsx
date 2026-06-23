import "./Header.css";
import headerLogo from "../../assets/images/header-logo.svg";
import headerLine from "../../assets/images/header-orange-line.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__brand">
                <img 
                    src={headerLogo} 
                    alt="Логотип компании «Производственная безопасность»" 
                    className="header__logo-image" 
                />
            </div>
            <img 
                src={headerLine} 
                alt="Декоративная оранжевая линия" 
                className="header__accent-line" 
            />
        </header>
    );
};

export default Header;