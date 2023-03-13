import { Outlet } from 'react-router-dom';
import ContextProvider from './contexts/FetchContext';
import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

function App() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [local, setLocal] = useState<string>('light');
  const element = document.documentElement;
  const toggleTheme = () => {
    setEnabled((curr) => (curr === true ? false : true));
  };

  useEffect(() => {
    localStorage.setItem('theme', enabled.toString());
    const themeChanger = localStorage.getItem('theme');

    if (themeChanger !== null) {
      setLocal((curr) => (curr === 'dark' ? 'light' : 'dark'));
    }
  }, [enabled, setLocal]);

  /* useEffect(() => {
    const changeTheme = 
  }, [third]);
 */
  return (
    <div className="bg-white dark:bg-sky-900">
      <Switch
        checked={enabled === false ? true : false}
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
