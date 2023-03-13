import Task from './Task';
import './TaskList.css';

function TaskList({ tasks }) {
  if (!tasks || tasks.length === 0) {
    return <p data-cy="no-tasks__text" className="no-tasks">No tasks found!</p>;
  }

  return (
    <ul data-cy="task-list" className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
}

export default TaskList;
