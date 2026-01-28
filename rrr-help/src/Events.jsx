import { useNavigate } from "react-router";

const Events = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  const sendHome = () => {
    navigate("/home");
  };

  const sendNext = () => {
    navigate1("/refs");
  };

  return (
    <div className="page">
      <ul
        style={{
          listStyleType: "none",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        <h3>⚛Наиболее часто используемых событий в React: </h3>
        <li>
          📝
          <a
            href="https://developer.mozilla.org/ru/docs/Web/API/Element/click_event"
            target="_blank"
          >
            onClick
          </a>
        </li>
        <li>
          📝
          <a
            href="https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/change_event"
            target="_blank"
          >
            onChange
          </a>
        </li>
        <li>
          📝
          <a
            href="https://developer.mozilla.org/ru/docs/Web/API/HTMLFormElement/submit_event"
            target="_blank"
          >
            onSubmit
          </a>
        </li>
        <li>
          📝
          <a
            href="https://developer.mozilla.org/ru/docs/Web/API/Window/focus_event"
            target="_blank"
          >
            onFocus
          </a>
        </li>
        <li>
          📝
          <a
            href="https://developer.mozilla.org/ru/docs/Web/API/Element/keydown_event"
            target="_blank"
          >
            onKeyDown
          </a>
        </li>
      </ul>
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        target VS currentTarget
      </h3>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <p style={{ borderRight: "1px solid black" }}>
          <strong>event.target.value</strong>: Это значение, которое было
          изменено в результате действия пользователя.
        </p>
        <p style={{ paddingLeft: "10px" }}>
          <strong>event.currentTarget.value</strong>: Это значение, которое
          ассоциировано с элементом, к которому привязан обработчик событий.
        </p>
      </div>

      <h3>⚠ Доп. методы которые нужно запомнить</h3>
      <p style={{ color: "blue", textAlign: "center" }}>
        event.preventDefault()
      </p>
      <p>
        Этот метод используется для отмены действия по умолчанию, которое должно
        было произойти в ответ на событие.
      </p>
      <p style={{ color: "blue", textAlign: "center" }}>
        event.stopPropagation()
      </p>
      <p> Предотвращает дальнейшее распространение события по дереву DOM</p>
      <p style={{ color: "blue", textAlign: "center" }}>
        event.stopImmediatePropagation()
      </p>
      <p>
        Не только предотвращает дальнейшее распространение события, но и
        останавливает выполнение других обработчиков события на текущем
        элементе.
      </p>

      <div className="navigation">
        <button onClick={sendHome}>🏠 HOME</button>
        <button onClick={sendNext}>NEXT ⏩</button>
      </div>
    </div>
  );
};

export default Events;
