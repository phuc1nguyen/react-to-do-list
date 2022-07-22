import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
    
      <Home />

      <Footer />
    </div>
  );
}