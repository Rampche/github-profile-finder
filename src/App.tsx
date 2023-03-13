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
    <>
      <Switch
        checked={!enabled}
        onChange={toggleTheme}
        className="absolute h-6 w-11 rounded-full inline-flex items-center dark:bg-white bg-[#001E3C]"
      >
        <span
          className={`w-4 h-4 bg-white rounded-full inline-block transform transition dark:bg-[#001E3C] ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
        ></span>
      </Switch>
      <ContextProvider>
        <Outlet />
      </ContextProvider>
    </>
  );
}

export default App;
