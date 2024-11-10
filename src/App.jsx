import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthLayout from './components/AuthLayout/AuthLayout';

function App() {
  return (
    <>
      <AuthLayout>
        <RegisterPage />
      </AuthLayout>
    </>
  );
}
export default App;
