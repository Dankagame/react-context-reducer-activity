import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import "./App.css";

// Page layout that follows the current theme
const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <main>
        <TaskManager />
      </main>
    </div>
  );
};

// Wrap the app in ThemeProvider so every component can use the theme
function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
