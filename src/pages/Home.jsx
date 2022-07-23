import { useContext, useEffect, useState } from 'react';
import TaskForm from '../components/tasks/TaskForm';
import TaskDisplay from '../components/tasks/TaskDisplay';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import TaskContext from '../context/TaskContext';

export default function Home() {
  const { clearTasks } = useContext(TaskContext);
  const [taskStatus, setTaskStatus] = useState(false);

  const changeActiveTab = e => {
    // update class is-active on task status tab, remove is-active class from <ul>
    const active = e.target.closest('.task-status').querySelector('.is-active');
    if (active) active.classList.remove('is-active');  
    // update class is-active on clicked <li>
    const statusTab = e.target.closest('.task-status-item');
    statusTab.classList.add('is-active');
    // update state to display tasks based on which tab you choose
    if (statusTab.dataset.status === 'false') setTaskStatus(false);
    else if (statusTab.dataset.status === 'true') setTaskStatus(true);
    else setTaskStatus(null);
  }

  const boxShadow = {
    boxShadow: '0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)',
  };

  const homeBtnStyle = {
    zIndex: 1,
    position: 'fixed',
    bottom: '5rem',
  };

  useEffect(() => {
    const tabs = document.querySelectorAll('.task-status-item');

    tabs.forEach(tab => {
      tab.addEventListener('click', changeActiveTab);
    });
  
    return () => {
      tabs.forEach(tab => {
        tab.removeEventListener('click', changeActiveTab);
      });
    };
  }, []);

  return (
    <div className="tasks-wrapper w-100">
      <div className="columns m-0 h-100">
        <div className="column p-5 is-two-fifths is-hidden-touch" style={boxShadow}>
          <TaskForm />
        </div>
        <div className="column p-5">
          <TaskDisplay status={taskStatus} />
        </div>
      </div>

      <button type='button' className='button home-btn is-primary has-text-light is-focused is-hidden-desktop' style={{ ...homeBtnStyle, left: '1rem' }}>
        <FaPlus />
      </button>

      <button type='button' className='button home-btn is-danger has-text-light is-focused' style={{ ...homeBtnStyle, right: '1rem' }} onClick={clearTasks}>
        <FaTrashAlt />
      </button>
    </div>
  );
}