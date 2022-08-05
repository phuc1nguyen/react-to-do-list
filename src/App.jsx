import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";
import Home from "./pages/Home";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/tasks/TaskForm";

export default function App() {
  return (
    <div className="wrapper">
      <Header />

      <TaskProvider>
        <main className="main-content">
          <Home />
          <div className="modal is-hidden-desktop">
            <div className="modal-background"></div>
            <div className="modal-content p-5">
              <TaskForm device="mobile" />
            </div>
          </div>
        </main>
      </TaskProvider>

      <Footer />
    </div>
  );
}
