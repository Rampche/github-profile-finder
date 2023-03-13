import { Outlet } from 'react-router-dom';
import ContextProvider from './contexts/FetchContext';

function App() {
  return (
    <ContextProvider>
      <Outlet />
    </ContextProvider>
  );
}

export default App;
