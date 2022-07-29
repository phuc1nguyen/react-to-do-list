import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import Home from './pages/Home';
import { TaskProvider } from './context/TaskContext';
import TaskFormMobile from './components/tasks/TaskFormMobile';

export default function App() {
  return (
    <div className="wrapper">
      <Header />

      <TaskProvider>
        <main className="main-content">
          <Home />
          <TaskFormMobile />
        </main>
      </TaskProvider>

      <Footer />
    </div>
  );
}