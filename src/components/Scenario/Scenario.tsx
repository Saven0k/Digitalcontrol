import { useEffect, useRef } from 'react';
import type { ScenarioData } from '../../types/scenario';
import notificationIcon from '../../assets/images/notification-icon.svg';
import './Scenario.css';

interface ScenarioProps {
  scenario: ScenarioData;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

function Scenario({ scenario, isOpen, onToggle }: ScenarioProps) {
  const { id, category, title, image, notification, cause } = scenario;
  const scenarioRef = useRef<HTMLElement>(null);
  const triggerId = `scenario-trigger-${id}`;
  const panelId = `scenario-panel-${id}`;

  useEffect(() => {
    if (isOpen) scenarioRef.current?.scrollIntoView({ block: 'start' });
  }, [isOpen]);

  return (
    <article ref={scenarioRef} className={`scenario${isOpen ? ' scenario--open' : ''}`}>
      <h3>
        <button
          id={triggerId}
          type="button"
          className="scenario__trigger"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(id)}
        >
          <span className={`scenario__badge ${category === 'ТКРС' ? 'scenario__badge--tkrs' : ''}`}>{category}</span>
          <span className="scenario__title">{title}</span>
          <span className="scenario__toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
        </button>
      </h3>
      <div id={panelId} aria-labelledby={triggerId} role="region" hidden={!isOpen}>
        {isOpen && (
          <div className="scenario__details">
            <figure className="scenario__figure">
              <img src={image} alt={`Иллюстрация сценария: ${title}`} loading="lazy" decoding="async" />
              <figcaption>Пример ситуации, распознаваемой системой</figcaption>
            </figure>
            <div className="scenario__explanation">
              <div className="scenario__notification">
                <div className="scenario__notification-heading">
                  <span className="scenario__notification-icon"><img src={notificationIcon} alt="" width="22" height="22" /></span>
                  <h3>Голосовое оповещение</h3>
                </div>
                <p>{notification}</p>
              </div>
              <div className="scenario__cause">
                <h3>Причина срабатывания</h3>
                <p>{cause}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default Scenario;
