
import {  useNavigate } from 'react-router-dom';

const VerifyPage = () => {
  
 const navigate = useNavigate();
 
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      
      <h2>Перейти до пошти</h2>
      <button onClick={() => navigate('/login')} style={{ marginTop: 20 }}>
        Перейти до входу
      </button>
    </div>
  );
};

export default VerifyPage;
