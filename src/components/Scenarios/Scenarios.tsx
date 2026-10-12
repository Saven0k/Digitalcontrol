import { useState } from 'react';
import { drillingData, tkrsData } from '../../data/data';
import Scenario from '../Scenario/Scenario';
import './Scenarios.css';

const groups = [
  { id: 'all', label: 'Все сценарии', data: [...drillingData, ...tkrsData] },
  { id: 'drilling', label: 'Бурение', data: drillingData },
  { id: 'tkrs', label: 'ТКРС', data: tkrsData },
] as const;

type GroupId = (typeof groups)[number]['id'];

function Scenarios() {
  const [activeId, setActiveId] = useState<GroupId>('all');
  const [openScenarioId, setOpenScenarioId] = useState<number | null>(null);
  const activeGroup = groups.find(group => group.id === activeId) ?? groups[0];

  function selectGroup(id: GroupId) {
    if (id === activeId) return;
    setActiveId(id);
    setOpenScenarioId(null);
  }

  function toggleScenario(id: number) {
    setOpenScenarioId(previous => previous === id ? null : id);
  }

  return (
    <section id="scenarios" className="scenarios container" aria-labelledby="scenarios-title">
      <div className="scenarios__heading">
        <div>
          <span className="eyebrow">Знать, чтобы предупредить</span>
          <h2 id="scenarios-title" className="section-title">Сценарии видеоаналитики</h2>
          <p className="section-description">Узнайте, какие ситуации распознаёт система и почему срабатывает предупреждение.</p>
        </div>
        <span className="scenarios__total"><strong>{groups[0].data.length}</strong> сценария</span>
      </div>
      <div className="scenarios__filters" role="group" aria-label="Фильтр по направлению работ">
        {groups.map(group => (
          <button
            key={group.id}
            type="button"
            className="scenarios__filter"
            aria-pressed={activeId === group.id}
            aria-controls="scenarios-list"
            onClick={() => selectGroup(group.id)}
          >
            {group.label}<span className="scenarios__count">{group.data.length}</span>
          </button>
        ))}
      </div>
      <div className="scenarios__list-heading">
        <p aria-live="polite" aria-atomic="true">{activeGroup.label} · {activeGroup.data.length}</p>
        <span>Выберите сценарий, чтобы узнать подробности</span>
      </div>
      <div id="scenarios-list" className="scenarios__list">
        {activeGroup.data.map(scenario => (
          <Scenario key={scenario.id} scenario={scenario} isOpen={openScenarioId === scenario.id} onToggle={toggleScenario} />
        ))}
      </div>
    </section>
  );
}

export default Scenarios;
