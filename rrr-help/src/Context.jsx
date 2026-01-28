import { useNavigate } from "react-router";

const Context = () => {
  const navigate = useNavigate();

  const sendHome = () => {
    navigate("/home");
  };

  return (
    <div className="page">
      <p>
        💡<marker style={{ color: "blue" }}>Context</marker> предоставляет
        способ передачи данных через дерево компонентов без явной передачи
        пропсов от родительских компонентов к дочерним.{" "}
      </p>
      <h3>Использование Context</h3>
      <div className="page-step">
        <p> 1️⃣Шаг: Создание контекста</p>
        <img src="../public/step1.png" alt="шаг 1" loading="lazy" />
      </div>
      <div className="page-step">
        <p> 2️⃣Шаг: Предоставление значения контекста</p>
        <img src="../public/step2.png" alt="шаг 2" loading="lazy" />
      </div>
      <div className="page-step">
        <p>3️⃣Шаг: Использование хука useContext</p>
        <img
          src="../public/step3.png"
          alt="шаг3"
          loading="lazy"
          width="300px"
        />
      </div>

      <div className="navigation">
        <button onClick={sendHome}>🏠 HOME</button>
        <a
          href="https://react.dev/learn/scaling-up-with-reducer-and-context"
          target="_blank"
        >
          📝 Документация
        </a>
      </div>
    </div>
  );
};

export default Context;
