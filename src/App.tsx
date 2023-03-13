import { Outlet } from 'react-router-dom';
import ContextProvider from './contexts/FetchContext';
import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

function App() {
  const [enabled, setEnabled] = useState<boolean>(
    localStorage.getItem('theme') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('theme', enabled ? 'true' : 'false');
    document.documentElement.classList.toggle('dark', enabled);
  }, [enabled]);

  const toggleTheme = () => setEnabled(!enabled);

  return (
    <div className={`bg-white ${enabled ? 'dark:bg-sky-900' : 'bg-white'}`}>
      <Switch
        checked={!enabled}
        onChange={toggleTheme}
        className="h-6 w-11 rounded-full relative inline-flex items-center bg-sky-900"
      >
        <span className="w-4 h-4 bg-white rounded-full inline-block transform transition dark:bg-sky-900"></span>
      </Switch>
      <ContextProvider>
        <Outlet />
      </ContextProvider>
    </div>
  );
}

export default App;
