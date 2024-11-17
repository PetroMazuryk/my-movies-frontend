import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import AuthLayout from './components/AuthLayout/AuthLayout';
import Navbar from './components/Navbar/Navbar';
import UserRoutes from './UserRoutes.jsx';

import { store, persistor } from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <Navbar />
            <UserRoutes />
          </AuthLayout>
        </PersistGate>
      </Provider>
    </>
  );
}
export default App;
