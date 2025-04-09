import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { resendVerifyEmail } from '../../redux/auth/auth-operations';
import { MailCheck, Loader2 } from 'lucide-react';
import styles from './VerifyInfoPage.module.css';

const VerifyInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = location.state?.email || '';
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const handleResend = async () => {
    if (!email || cooldown > 0) return;
    setLoading(true);
    try {
      await dispatch(resendVerifyEmail({ email })).unwrap();
      setMessage('Confirmation email has been resent!');
      setResendSuccess(true);
      setCooldown(30);
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
      setResendSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!email) {
      navigate('/register');
    }
  }, [email, navigate]);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  return (
    <div className={styles.verifyContainer}>
      <div className={styles.verifyCard}>
        <MailCheck className={styles.verifyIcon} />
        <h2 className={styles.verifyTitle}>Please verify your email</h2>
        <p className={styles.verifyText}>
          We’ve sent a confirmation link to <strong>{email}</strong>. Please
          check your inbox.
        </p>

        <button
          onClick={handleResend}
          className={styles.verifyButton}
          disabled={loading || cooldown > 0}
        >
          {loading ? (
            <>
              <Loader2 className={styles.spinner} />
              Sending...
            </>
          ) : cooldown > 0 ? (
            `Resend email (${cooldown}s)`
          ) : (
            'Resend email'
          )}
        </button>

        {message && (
          <p
            className={
              resendSuccess ? styles.successMessage : styles.errorMessage
            }
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyInfoPage;
