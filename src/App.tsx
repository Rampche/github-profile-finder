import { Outlet } from 'react-router-dom';
import ContextProvider from './contexts/FetchContext';
import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

function App() {
  const element = document.documentElement;
  const [enabled, setEnabled] = useState<boolean>(() =>
    JSON.parse(localStorage.getItem('theme') || 'true')
  );

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(enabled));
    document.documentElement.classList.toggle('dark', enabled);
  }, [enabled]);

  const toggleTheme = () => setEnabled(!enabled);

  return (
    <div className="bg-white dark:bg-sky-900">
      <Switch
        checked={!enabled}
        onChange={toggleTheme}
        className={`h-6 w-11 rounded-full relative inline-flex items-center bg-sky-900 dark:bg-white  ${
          enabled
            ? element.classList.add('dark')
            : element.classList.remove('dark')
        }`}
      >
        <span
          className={`w-4 h-4 bg-white rounded-full inline-block transform transition dark:bg-sky-900 ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        ></span>
      </Switch>
      <ContextProvider>
        <Outlet />
      </ContextProvider>
    </div>
  );
}

export default App;
