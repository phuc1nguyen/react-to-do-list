import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import TaskForm from './components/tasks/TaskForm';

export default function App() {
  const style = {
    boxShadow: '0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%)',
  };

  return (
    <div className="wrapper">
      <Header />
    
      <main className="main-content">
        <div className="tasks-wrapper w-100">
          <div className="columns m-0 h-100">
            <div className="column p-5 is-two-fifths" style={style}>
              <TaskForm />
            </div>
            <div className="column">

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}