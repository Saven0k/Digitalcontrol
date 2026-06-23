import "./Scenario.css";
import arrowUp from "../../assets/images/arrow-up.svg";
import arrowDown from "../../assets/images/arrow-down.svg";
import notificationIcon from "../../assets/images/notlification-icon.svg";

interface ScenarioProps {
    id: number;
    category: string;
    title: string;
    image: string;
    notlification: string; // ← меняем notification на notlification
    cause: string;
    isOpen: boolean;
    onToggle: (id: number) => void;
}

const Scenario = ({ id, category, title, image, notlification, cause, isOpen, onToggle }: ScenarioProps) => {
    const getCategoryClass = (category: string) => {
        switch (category) {
            case "Бурение":
                return "scenario__badge--drilling";
            case "ТКРС":
                return "scenario__badge--tkrs";
            default:
                return "";
        }
    };

    const handleCardClick = () => {
        onToggle(id);
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggle(id);
    };
    console.log(image)

    return (
        <div key={id} className={`scenario ${isOpen ? "scenario--open" : ""}`}>
            <div 
                className="scenario__card" 
                onClick={handleCardClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onToggle(id);
                    }
                }}
                aria-expanded={isOpen}
            >
                <span className={`scenario__badge ${getCategoryClass(category)}`}>
                    {category}
                </span>
                <span className="scenario__title">{title}</span>
                <button
                    onClick={handleButtonClick}
                    className="scenario__toggle-btn"
                    aria-label={isOpen ? "Свернуть описание" : "Развернуть описание"}
                >
                    <img
                        src={isOpen ? arrowUp : arrowDown}
                        alt={isOpen ? "Стрелка вверх, свернуть" : "Стрелка вниз, развернуть"}
                        className="scenario__toggle-icon"
                    />
                </button>
            </div>
            {isOpen && (
                <div className="scenario__expanded-content">
                    <img
                        src={image}
                        alt={title}
                        className="scenario__expanded-image"
                    />
                    <div className="scenario__expanded-side">
                        <div className="scenario__notification">
                            <div className="scenario__notification-icon-wrapper">
                                <img 
                                    src={notificationIcon} 
                                    alt="Иконка уведомления" 
                                    className="scenario__notification-icon" 
                                />
                            </div>
                            <div className="scenario__notification-text">
                                <span className="scenario__notification-title">Голосовое оповещение</span>
                                <p className="scenario__notification-subtitle">{notlification}</p> {/* ← используем notlification */}
                            </div>
                        </div>
                        <div className="scenario__cause">
                            <div className="scenario__cause-text">
                                <span className="scenario__cause-title">Причина срабатывания</span>
                                <p className="scenario__cause-subtitle">{cause}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Scenario;