import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import { type TaskCardProps } from "./libs/types";


function App() {

  const Taskcard: TaskCardProps[] = [
    {id: 1,title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: false},
    {id: 2,title: "Write code", description: "Finish project for class", isDone: false},
    {id: 3,title: "Deploy app", description: "Push project to GitHub Pages", isDone: false},
  ]
  
  
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="Vetphisit" type="student" />
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* Card รายการ */}
            <TaskInput />
            <Task{...Taskcard[0]} />
            <Task{...Taskcard[1]} />
            <Task{...Taskcard[2]} />
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2026" fullName="Vetphisit Bunthamma" studentId="670610735"></Footer>
    </div>
  );
}

export default App;