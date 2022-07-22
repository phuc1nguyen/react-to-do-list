import { useEffect } from 'react';
import TaskForm from '../components/tasks/TaskForm';
import TaskDisplay from '../components/tasks/TaskDisplay';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

export default function Home() {
  const handleScroll = () => {
    // update two bottom buttons when scroll to bottom of the page
    const scrollEnd = (window.innerHeight + window.scrollY);

    if (scrollEnd >= document.body.offsetHeight) {
      // Todo: add bottom: 5rem to styles -> useState()
      console.log('end of page');
    }
  };

  const changeActiveTab = (e) => {
    // update class is-active on task status tab, remove is-active class from <ul>
    const active = e.target.closest('.task-status').querySelector('.is-active');
    if (active) active.classList.remove('is-active');  
    // update class is-active on clicked <li>
    const statusTab = e.target.closest('.task-status-item');
    statusTab.classList.add('is-active');
  }

  const boxShadow = {
    boxShadow: '0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)',
  };

  const homeBtnStyle = {
    zIndex: 1,
    position: 'fixed',
    bottom: '1rem',
  };

  useEffect(() => {
    const tabs = document.querySelectorAll('.task-status-item');   // items = ['todo', 'done', 'all'];

    window.addEventListener('scroll', handleScroll);
    tabs.forEach(tab => {
      tab.addEventListener('click', changeActiveTab);
    });
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          <TaskDisplay />
        </div>
      </div>

      <button type='button' className='button is-primary has-text-light is-focused is-hidden-desktop' style={{ ...homeBtnStyle, left: '1rem' }}>
        <FaPlus />
      </button>

      <button type='button' className='button is-danger has-text-light is-focused' style={{ ...homeBtnStyle, right: '1rem' }}>
        <FaTrashAlt />
      </button>
    </div>
  );
}