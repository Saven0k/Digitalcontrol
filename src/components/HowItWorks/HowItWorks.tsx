import camera from '../../assets/images/camera.png';
import analysis from '../../assets/images/pizza.png';
import volume from '../../assets/images/volume.png';
import './HowItWorks.css';

const steps = [
  { image: camera, title: 'Камера фиксирует', text: 'Непрерывный видеопоток с места производства работ.' },
  { image: analysis, title: 'ИИ анализирует', text: 'Нейросеть распознаёт людей, технику и опасные зоны.' },
  { image: volume, title: 'Система оповещает', text: 'Голосовое предупреждение помогает вовремя заметить нарушение.' },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="how" aria-labelledby="how-title">
      <div className="container">
        <span className="eyebrow">От камеры до предупреждения</span>
        <h2 id="how-title" className="section-title">Как это работает</h2>
        <p className="section-description">
          Система анализирует видеопоток круглосуточно. При обнаружении одного из
          известных сценариев она предупреждает о потенциальной опасности.
        </p>
        <ol className="how__steps">
          {steps.map((step, index) => (
            <li key={step.title} className="how__step">
              <div className="how__step-top">
                <span className="how__number" aria-hidden="true">0{index + 1}</span>
                <img src={step.image} alt="" width="64" height="64" loading="lazy" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
