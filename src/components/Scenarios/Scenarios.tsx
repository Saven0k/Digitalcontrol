import { useState } from "react";
import "./Scenarios.css";
import Scenario from "../Scenario/Scenario";
import { drillingData, tkrsData } from "../../data/data";

const Scenarios = () => {
    const [activeId, setActiveId] = useState(0);
    const [openScenarioId, setOpenScenarioId] = useState<number | null>(null);

    const filters = [
        { id: 0, label: "Все сценарии", count: 32 },
        { id: 1, label: "Бурение", count: 18 },
        { id: 2, label: "ТКРС", count: 14 }
    ];

    const getCurrentData = () => {
        switch (activeId) {
            case 1:
                return drillingData;
            case 2:
                return tkrsData;
            default:
                return [...drillingData, ...tkrsData];
        }
    };

    const currentData = getCurrentData();
    const activeFilter = filters.find(f => f.id === activeId);

    const handleScenarioToggle = (id: number) => {
        setOpenScenarioId(prevId => prevId === id ? null : id);
    };

    const handleFilterClick = (id: number) => {
        setActiveId(id);
        setOpenScenarioId(null);
        // Прокрутка к началу списка
        setTimeout(() => {
            const scenariosList = document.querySelector('.scenarios__list');
            if (scenariosList) {
                const header = document.querySelector('.header') as HTMLElement;
                const headerHeight = header?.offsetHeight || 0;
                const elementPosition = scenariosList.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    return (
        <section className="scenarios">
            <h2 className="scenarios__title">Сценарии видеоаналитики</h2>
            <span className="scenarios__subtitle">
                Потенциально опасные ситуации, на которые реагирует система.
            </span>

            <div className="scenarios__filter-list" role="tablist">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => handleFilterClick(filter.id)}
                        className={`scenarios__filter-btn ${
                            activeId === filter.id ? "scenarios__filter-btn--active" : ""
                        }`}
                        role="tab"
                        aria-selected={activeId === filter.id}
                    >
                        {filter.label}
                        <span
                            className={`scenarios__filter-count ${
                                activeId === filter.id ? "scenarios__filter-count--active" : ""
                            }`}
                        >
                            {filter.count}
                        </span>
                    </button>
                ))}
            </div>

            <span className="scenarios__current-category">
                {activeFilter?.label} ({activeFilter?.count})
            </span>

            <div className="scenarios__list" role="tabpanel">
                {currentData.map((scenario) => (
                    <Scenario 
                        key={scenario.id}
                        {...scenario} 
                        isOpen={openScenarioId === scenario.id}
                        onToggle={handleScenarioToggle}
                    />
                ))}
            </div>
        </section>
    );
};

export default Scenarios;