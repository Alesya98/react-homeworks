import { useState, memo } from "react";

const TaskList = () => {
  console.log('render Task')
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const addTasks = () => {
    const arr = ['Облако', 'Снег','Зима','Кофе','Конфеты','Ветер','Карамель','Ёлка',]
    const randomInd = Math.floor(Math.random() * arr.length)
    setTasks([...tasks, arr[randomInd]]);
  };

  const deleteTasks = () => {
    setTasks(tasks.filter((_, i, arr) => i < arr.length - 1));
  };

  return (
    <>
      <h2>Список задач</h2>
      <ul>
        {tasks.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button onClick={addTasks}>Добавить задачу</button>
      <button onClick={() => deleteTasks()}>Удалить последнюю задачу</button>
    </>
  );
};

export default memo(TaskList);
