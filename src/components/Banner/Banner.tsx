import info from '../../assets/images/info-ico.svg';
import './Banner.css';

function Banner() {
  return (
    <aside className="banner" aria-labelledby="safety-note-title">
      <div className="banner__card container">
        <img src={info} alt="" width="28" height="28" />
        <div>
          <h2 id="safety-note-title">Технологии помогают. Внимательность решает.</h2>
          <p>
            Система реагирует только на конкретный перечень сценариев и не может
            предупредить обо всех возможных опасностях. Соблюдайте правила
            безопасности и оставайтесь внимательны.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Banner;
