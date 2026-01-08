import { useEffect, useState } from "react";

const MyComp = () => {
  const [img, setImg] = useState([]);
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [updates, setUpdates] = useState(0); //счётчик

  useEffect(() => {
    loadDogs(count);
  }, []);

  async function loadDogs(n) {
    try {
      setLoading(true);

      const res = await fetch(`https://dog.ceo/api/breeds/image/random/${n}`);
      const data = await res.json();

      setImg(data.message);  //добавляем в массив
      setUpdates((count) => count + 1);
    } catch (err) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {console.log(`Обновлены:${updates}`)},[updates])

  return (
    <>
      <h1>Галерея собак</h1>
      <p>Картинки обновлены: {updates} </p>
      <p>
        Показать
        <input
          type="number"
          min="1"
          max="50"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={() => loadDogs(count)}>Обновить</button>
      </p>
      {loading && <p>Загрузка...</p>}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          width: "100%",
        }}
      >
        {img.map((url) => (
          <img
            src={url}
            alt="dog"
            style={{
              width: "100%",
              objectFit: "cover",
              height: "250px",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MyComp;
