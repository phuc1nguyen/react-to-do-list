import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import Home from './pages/Home';
import NotFound from './pages/404';
import { TaskProvider } from './context/TaskContext';

export default function App() {

  return (
    <TaskProvider>
      <div className="wrapper">
        <Router>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </TaskProvider>
  );
}