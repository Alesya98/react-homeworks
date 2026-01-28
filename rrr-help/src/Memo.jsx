import { useNavigate } from "react-router";

const Memo = () => {
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  const sendHome = () => {
    navigate("/home");
  };

  const sendNext = () => {
    navigate1("/context");
  };

  return (
    <div className="page">
      <div className="card">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            textAlign: "start",
          }}
        >
          <p>
            💡<marker style={{ color: "blue" }}>React.memo</marker> — это
            функция высшего порядка (HOC), которая используется для оптимизации
            функциональных компонентов. Она предотвращает ненужные повторные
            рендеры, если пропсы компонента не изменились.
          </p>
          <img src="../public/memo.png" alt="Пример memo" loading="lazy" />
        </div>

        <h3>
          Что принимает и что возвращает
          <marker style={{ color: "blue" }}>React.memo</marker>
        </h3>
        <p>
          <u style={{ color: "blue" }}>Принимает</u> (React.memo Component,
          compareFunction):
        </p>
        <p>
          📌 Component (обязательный параметр) – функциональный компонент,
          который нужно мемоизировать.
        </p>
        <p>
          📌 compareFunction (необязательный параметр) – кастомная функция для
          сравнения старых и новых пропсов.
        </p>

        <p>
          <u style={{ color: "blue" }}>Возвращает</u>: новый мемоизированный
          компонент, который ререндерится только при изменении пропсов.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            textAlign: "start",
          }}
        >
          <p>
            🔄 По умолчанию React.memo сравнивает пропсы поверхностно.
            Примитивные значения (string, number,...) работают корректно, но
            объекты и массивы сравниваются по ссылке, что может вызывать
            ненужные ререндеры.
          </p>
          <img
            src="../public/example-memo.png"
            alt="Пример memo"
            loading="lazy"
          />
        </div>

        <a
          className="refs-link"
          href="https://react.dev/reference/react/memo"
          target="_blank"
        >
          📝Документация
        </a>
      </div>
      <div
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          textAlign: "start",
        }}
      >
        <div>
          <p>
            💡<marker style={{ color: "blue" }}>useMemo </marker> — это хук для
            оптимизации производительности, который позволяет кэшировать
            результаты вычислений и избегать ненужных пересчётов при каждом
            рендере.
          </p>

          <ul style={{ marginBottom: "10px" }}>
            <u style={{ color: "blue" }}>Принимает:</u>
            <li>📌Функция – вычисляемое значение, которое нужно кэшировать.</li>
            <li>
              📌Массив зависимостей – список значений, при изменении которых
              вычисление будет выполняться заново.
            </li>
          </ul>
          <p>
            <u style={{ color: "blue" }}>Возвращает:</u> мемоизированное
            (кэшированное) значение – результат работы переданной функции.{" "}
          </p>
          <a
            className="refs-link"
            href="https://react.dev/reference/react/useMemo"
            target="_blank"
          >
            📝 Документация
          </a>
        </div>

        <img src="../public/example-memo1.png" alt="Пример" />
      </div>

      <div
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          textAlign: "start",
        }}
      >
        <div>
          <p>
            💡<marker style={{ color: "blue" }}>useCallback </marker> - это хук
            React, который позволяет кэшировать определение функции между
            повторными рендерами.
          </p>
          <p
            style={{
              border: "3px solid blue",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <code>const cachedFn = useCallback(fn, dependencies)</code>
          </p>
          <ul>
            <h4>
              <u style={{ color: "blue" }}>Принимает:</u>
            </h4>
            <li>📌Функцию – ту, которую нужно мемоизировать.</li>
            <li>
              📌Массив зависимостей – если зависимости не изменились, функция
              остаётся той же.
            </li>
          </ul>
          <p>
            <u style={{ color: "blue" }}>Возвращает:</u> ту же самую функцию
            между рендерами (если зависимости не изменились).
          </p>
          <a
            className="refs-link"
            href="https://react.dev/reference/react/useCallback"
            target="_blank"
          >
            📝 Документация
          </a>
        </div>

        <img src="../public/example-usecallback.png" alt="пример" />
      </div>
      <div className="navigation">
        <button onClick={sendHome}>🏠 HOME</button>
        <button onClick={sendNext}>NEXT ⏩</button>
      </div>
    </div>
  );
};

export default Memo;
