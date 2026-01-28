import { useState } from "react";
import { useNavigate } from "react-router";

const State = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [example, setExample] = useState(false);
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleExample = () => {
    setExample(!example);
  };

  const sendHome = () => {
    navigate("/home");
  };

  const sendNext = () => {
    navigate1("/life");
  };

  return (
    <div className="page">
      <p>
        💡<marker style={{ color: "blue" }}>State</marker> (состояние) в React —
        это место, где компонент хранит свои динамические данные.
      </p>
      <button onClick={handleClick}>❔ Чем отличается state от props?</button>
      {isVisible && (
        <ul>
          <li>
            🔵 Props передаются компоненту "снаружи", от родителя и неизменные.
          </li>
          <li>🔵 State управляется "внутри" компонента и изменяется.</li>
        </ul>
      )}

      <p>
        В функциональных компонентах для работы с state используется хук{" "}
        <marker style={{ borderBottom: "3px solid blue" }}>useState</marker> .
      </p>
      <ul>
        <h4>Он возвращает массив из двух элементов:</h4>
        <li>- state: текущее значение состояния</li>
        <li>- setState: функцию для его обновления.</li>
      </ul>
      <p>
        <strong>Принимает</strong> initialState: начальное значение состояния.
      </p>
      <pre
        style={{
          border: "2px solid blue",
          padding: "5px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        <code>const [state, setState] = useState(initialState);</code>
      </pre>
      <p>Может быть примитивным типом данных, объектом или функцией.</p>

      <p>⚠ Не меняй state напрямую, используй setState(newValue)</p>
      <p>
        Обновление state происходит <u>асинхронно</u>. Если нужно обновить
        состояние на основе его текущего значения, используй функцию.
      </p>

      <p>
        Если state содержит объект или массив, обновляй его с помощью оператора
        <mark style={{ backgroundColor: "blue", color: "white" }}>
          {" "}
          spread (...)
        </mark>
      </p>
      <p>State можно передавать в дочерние компоненты при помощи props.</p>
      <button
        style={{ display: "block", margin: "0 auto", marginBottom: "10px" }}
        onClick={handleExample}
      >
        Простой пример
      </button>
      {example && (
        <img
          src="../public/example.png"
          alt="пример"
          loading="lazy"
          style={{
            maxWidth: "500px",
            height: "300px",
            display: "block",
            margin: "0 auto",
          }}
        />
      )}

      <div className="navigation">
        <button onClick={sendHome}>🏠 HOME</button>
        <a href="https://react.dev/learn/managing-state" target="_blank">
          📝 Документация
        </a>
        <button onClick={sendNext}>NEXT ⏩</button>
      </div>
    </div>
  );
};

export default State;
