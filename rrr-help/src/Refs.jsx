import { useNavigate } from "react-router";

const Refs = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  const sendHome = () => {
    navigate("/home");
  };

  const sendNext = () => {
    navigate1("/memo");
  };

  return (
    <div className="page">
      <div className="card">
        <p>
          💡<marker style={{ color: "blue" }}>Key</marker> - уникальный
          идентификатор, который React использует для определения, какие
          элементы списка изменились, добавились или удалились.
        </p>
        <ul
          style={{
            listStyleType: "none",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          <h4>📜 Основные правила использования key:</h4>
          <li>Используй уникальные значения (id,uuid)</li>
          <li>Не используй индекс массива</li>
          <li>Сохраняй стабильность ключей</li>
        </ul>

        <p>
          Без key механизм reconciliation сверяет компоненты попарно между
          текущим и новым VDOM. Из-за этого может происходить большое количество
          лишних перерисовок интерфейса, что замедляет работу приложения.
        </p>
        <a
          className="refs-link"
          href="https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key"
          target="_blank"
        >
          📝 Документация
        </a>
      </div>
      <div className="card">
        <p>
          💡<marker style={{ color: "blue" }}>Fragment</marker> - Это
          вспомогательный компонент, который позволяет оборачивать несколько
          дочерних элементов без добавления лишнего элемента в DOM
        </p>
        <h4>❔Зачем нужен Fragment?</h4>
        <p>✔Избегает лишних обёрток в DOM</p>
        <p>✔Улучшает читаемость JSX</p>
        <p>
          <u style={{ color: "blue" }}>🖋 Использовать</u>:
          &lt;React.Fragmet&gt; и &lt;<></>&gt;
        </p>
        <a
          className="refs-link"
          href="https://react.dev/reference/react/Fragment"
          target="_blank"
        >
          📝 Документация
        </a>
      </div>
      <div
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "10px",
          textAlign: "start",
        }}
      >
        <div>
          <p>
            💡<marker style={{ color: "blue" }}>Refs</marker> в React позволяют
            получить доступ к DOM-элементам или компонентам напрямую.
          </p>

          <ul style={{ listStyleType: "none", marginBottom: "10px" }}>
            <h4>Когда использовать Refs:</h4>
            <li>✔Фокусировка или управление DOM</li>
            <li>✔Реализация пользовательских анимаций</li>
            <li>✔Интеграция с внешними библиотеками</li>
          </ul>
          <p>
            Лучше стараться использовать state и props для управления данными и
            поведением, а Refs применять только в исключительных случаях.
          </p>
        </div>
        <div>
          <p>
            <mark style={{ backgroundColor: "blue", color: "white" }}>
              Пример
            </mark>
          </p>
          <img src="../public/ref-example.png" alt="Пример Refs" />
        </div>
      </div>
      <div
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "10px",
          textAlign: "start",
        }}
      >
        <div>
          <p>
            💡<marker style={{ color: "blue" }}>ForwardRef</marker> — это
            инструмент, который позволяет передавать Ref в дочерний компонент.
            Это полезно, когда тебе нужно получить доступ к DOM-элементу,
            который находится внутри кастомного компонента.
          </p>
          <a
            className="refs-link"
            href="https://react.dev/reference/react/useRef"
            target="_blank"
          >
            📝 Документация
          </a>
        </div>

        <img src="../public/ref.png" alt="forwardRef" />
      </div>

      <div
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "10px",
          textAlign: "start",
        }}
      >
        <div>
          {" "}
          <p>
            💡<marker style={{ color: "blue" }}>React.StrictMode</marker> - это
            инструмент, встроенный в React, который помогает разработчикам
            выявлять потенциальные проблемы в приложениях.
          </p>
          <ul>
            <h4>
              Основные преимущества{" "}
              <mark style={{ backgroundColor: "blue", color: "white" }}>
                React.StrictMode
              </mark>
            </h4>
            <li>Выявление небезопасных методов жизненного цикла</li>
            <li>Предупреждения об использовании устаревших API</li>
            <li>Обнаружение побочных эффектов</li>
            <li>Улучшение производительности</li>
          </ul>
          <a
            className="refs-link"
            href="https://react.dev/reference/react/StrictMode"
            target="_blank"
          >
            📝 Документация
          </a>
        </div>

        <img src="../public//strict.png" alt="StrictMode" />
      </div>
      <div className="navigation">
        <button onClick={sendHome}>🏠 HOME</button>
        <button onClick={sendNext}>NEXT ⏩</button>
      </div>
    </div>
  );
};

export default Refs;
