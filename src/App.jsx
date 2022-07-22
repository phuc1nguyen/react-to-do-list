import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import TaskForm from './components/tasks/TaskForm';
import TaskList from './components/tasks/TaskList';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

export default function App() {
  const boxShadow = {
    boxShadow: '0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)',
  };

  const clearStyle = {
    zIndex: 1,
    position: 'absolute',
    right: '1rem',
    bottom: '1rem',
  };

  const createMobileStyle = {
    zIndex: 1,
    position: 'absolute',
    left: '1rem',
    bottom: '1rem',
  };

  return (
    <div className="wrapper">
      <Header />
    
      <main className="main-content">
        <div className="tasks-wrapper w-100">
          <div className="columns m-0 h-100">
            <div className="column p-5 is-two-fifths is-hidden-touch" style={boxShadow}>
              <TaskForm />
            </div>
            <div className="column p-5">
              <TaskList />
            </div>
          </div>

          <button type='button' className='button is-primary is-medium has-background-primary has-text-light is-focused' style={clearStyle}>
            <FaTrashAlt />
          </button>

          <button type='button' className='button is-primary is-medium has-background-primary has-text-light is-focused is-hidden-desktop' style={createMobileStyle}>
            <FaPlus />
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}