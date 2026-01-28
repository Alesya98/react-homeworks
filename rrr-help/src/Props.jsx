import { useNavigate } from "react-router";

const Props = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  const sendHome = () => {
    navigate("/home");
  };

  const sendNext = () => {
    navigate1("/state");
  };
  return (
    <div className="page">
      <div className="props">
        <p>
          💡<marker style={{ color: "blue" }}>Props</marker> (от англ.
          “properties”) — это механизм передачи данных между компонентами в
          React.
        </p>
        <img src="../public/props.png" alt="props" loading="lazy" />
      </div>

      <div className="props">
        <p>
          📖 Чтение Props в дочернем компоненте : через объект ||
          деструктуризацию props
        </p>

        <img src="../public/props1.png" alt="props" loading="lazy" />
      </div>

      <div className="props">
        <p>Props поддерживают любые типы данных</p>
        <img src="../public/read-props.png" alt="props" loading="lazy" />
      </div>

      <p style={{ color: "red" }}>
        Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую
      </p>
      <div className="navigation">
        <button onClick={sendHome}>🏠 HOME</button>
        <a
          href="https://react.dev/learn/passing-props-to-a-component"
          target="_blank"
        >
          📝 Документация
        </a>
        <button onClick={sendNext}>NEXT ⏩</button>
      </div>
    </div>
  );
};

export default Props;
