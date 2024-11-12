import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthLayout from './components/AuthLayout/AuthLayout';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <AuthLayout>
        <Navbar />
        <RegisterPage />
      </AuthLayout>
    </>
  );
}
export default App;
