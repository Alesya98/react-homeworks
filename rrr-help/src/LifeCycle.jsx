import { useState } from "react";
import { useNavigate } from "react-router";

const LifeCycle = () => {
  const [mounting, setMounting] = useState(false);
  const [upDate, setUpDate] = useState(false);
  const [unmounting, setUnmounting] = useState(false);
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  const hendleMouting = () => {
    setMounting(!mounting);
  };

  const hendleUpDate = () => {
    setUpDate(!upDate);
  };

  const hendleUnMouting = () => {
    setUnmounting(!unmounting);
  };

  const sendHome = () => {
    navigate("/home");
  };

  const sendNext = () => {
    navigate1("/events");
  };
  return (
    <div className="page">
      <p>
        💡<marker style={{ color: "blue" }}>"Жизненный цикл"</marker> в React -
        это набор этапов, через которые компонент проходит, чтобы правильно
        работать на странице.{" "}
      </p>
      <p>
        💡 <marker style={{ color: "blue" }}>UseEffect</marker> - это хук в
        React, предназначенный для работы с методами жизненного цикла в
        функциональных компонентах.{" "}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Жизненный цикл:</h3>
        <button style={{ width: "400px" }} onClick={hendleMouting}>
          1.Mounting (Монтирование)
        </button>
        <p
          style={{ maxWidth: "500px", textAlign: "center", margin: "0px auto" }}
        >
          {mounting &&
            `useEffect(() => {}, []): Заменяет componentDidMount(). Выполняет побочные эффекты только один раз после монтирования. 
Передавая пустой массив зависимостей [], можно сделать хук useEffect аналогомcomponentDidMount.`}
        </p>
        <span>⬇</span>
        <button onClick={hendleUpDate} style={{ width: "400px" }}>
          2.Updating (Обновление)
        </button>
        <p style={{ maxWidth: "500px", textAlign: "center", margin: "0 auto" }}>
          {upDate &&
            `useEffect(() => {}, [dependency]): Заменяет componentDidUpdate(). Позволяет указать зависимость для выполнения функции только при изменении определенных props или state.  
Что передашь, за тем и будет следить и при изменении вызовет функцию.`}
        </p>
        <span>⬇</span>
        <button onClick={hendleUnMouting} style={{ width: "400px" }}>
          3.Unmounting (Размонтирование)
        </button>
        <p style={{ maxWidth: "500px", textAlign: "center", margin: "0 auto" }}>
          {unmounting &&
            `useEffect(() => () => {}): Заменяет componentWillUnmount(). Выполняет очистку и отписку от побочных эффектов при размонтировании (удалении из DOM) компонента.`}
        </p>
      </div>

      <p style={{ textAlign: "center" }}>Пример</p>
      <img
        src="../public/lifeCycle.png"
        alt="Жизненный цикл"
        loading="lazy"
        style={{
          maxWidth: "500px",
          height: "auto",
          display: "block",
          margin: "0 auto",
          marginBottom: "10px",
        }}
      />

      <div className="navigation">
        <button onClick={sendHome}>🏠 HOME</button>
        <a href="https://react.dev/reference/react/useEffect" target="_blank">
          📝 Документация
        </a>
        <button onClick={sendNext}>NEXT ⏩</button>
      </div>
    </div>
  );
};

export default LifeCycle;
