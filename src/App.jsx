import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import Home from './pages/Home';
import { TaskProvider } from './context/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <div className="wrapper">
          <Header />
          <main className="main-content">
            <Home />
          </main>
          <Footer />
      </div>
    </TaskProvider>
  );
}