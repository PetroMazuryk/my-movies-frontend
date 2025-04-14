import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resendVerifyEmail } from '../../redux/auth/auth-operations';
import { Loader2 } from 'lucide-react';
import css from './ResendVerifyEmail.module.css';

const ResendVerifyEmail = ({ email }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [cooldown, setCooldown] = useState(0); 

  const handleResend = async () => {
    if (cooldown > 0) return;  

    setLoading(true);
    try {
    
      await dispatch(resendVerifyEmail({ email })).unwrap();
      setMessage('Confirmation email has been resent!');
      setCooldown(30); 
    } catch (error) {
      setMessage('Error sending confirmation email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  return (
    <div className={css.resendContainer}>
      <p>Якщо лист не прийшов.</p>
     <p>Відішліть його повторно, натиснувши на кнопку нижче</p>
      <button
        onClick={handleResend}
        className={css.resendButton}
        disabled={loading || cooldown > 0}
      >
        {loading ? (
          <>
            <Loader2 className={css.spinner} />
            Sending...
          </>
        ) : cooldown > 0 ? (
          `Resend email (${cooldown}s)`
        ) : (
          'Resend confirmation email'
        )}
      </button>

      {message && (
        <p className={css.message}>
          {message}
        </p>
      )}
    </div>
  );
};

export default ResendVerifyEmail;