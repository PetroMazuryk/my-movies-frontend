import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthLayout from './components/AuthLayout/AuthLayout';
import Navbar from './components/Navbar/Navbar';

import { store, persistor } from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthLayout>
            <Navbar />

            <RegisterPage />
          </AuthLayout>
        </PersistGate>
      </Provider>
    </>
  );
}
export default App;
