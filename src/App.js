import './App.css';
import useLocalStorage from 'use-local-storage';
import Container from './components/Container';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Container toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
};

export default App;
