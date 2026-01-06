import { useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const changeName = () => {
    setUser({
      ...user,
      name: "Алеся",
    });
  };

  const increaseAge = () => {
    setUser({
        ...user,
        age: user.age + 1
    })
  }

  const toggleActive = () => {
    setUser({
        ...user,
        isActive: !user.isActive
    })
  }

  return (
    <>
      <h2>Профиль пользователя</h2>
      <p>Имя: {user.name} </p>
      <p>Возраст: {user.age} </p>
      <p>Активен: {user.isActive ? "Активен" : "Не активен"} </p>

      <button onClick={changeName}>Сменить имя</button>
      <button onClick={increaseAge}>Увеличить возраст</button>
      <button onClick={toggleActive}>Переключить активность</button>
    </>
  );
};

export default User;
