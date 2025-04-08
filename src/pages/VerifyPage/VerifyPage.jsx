import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../api/auth';

const VerifyPage = () => {
  const { verificationCode } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Підтвердження...');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const { data } = await axios.get(
          `/api/users/verify/${verificationCode}`
        );
        setMessage(data.message);
      } catch (error) {
        setMessage('Щось пішло не так або код недійсний');
      }
    };

    verifyEmail();
  }, [verificationCode]);

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>{message}</h2>
      <button onClick={() => navigate('/login')} style={{ marginTop: 20 }}>
        Перейти до входу
      </button>
    </div>
  );
};

export default VerifyPage;
