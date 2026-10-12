import headerLogo from '../../assets/images/header-logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#main" className="header__brand" aria-label="Производственная безопасность — на главную">
          <img src={headerLogo} alt="Производственная безопасность" width="399" height="38" />
        </a>
        <nav className="header__nav" aria-label="Основная навигация">
          <a href="#scenarios">Сценарии</a>
          <a href="#how-it-works">Как это работает</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
