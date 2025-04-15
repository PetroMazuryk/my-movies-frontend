import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../redux/auth/auth-selectors';
import TitleText from '../../components/TitleText/TitleText';
import ResendVerifyEmail from '../../components/ResendVerifyEmail/ResendVerifyEmail'
import { MailCheck } from 'lucide-react';

import css from './VerifyPage.module.css';

const VerifyPage = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const email = user?.email || '';
  const domain = email.split('@')[1]?.toLowerCase();

  const emailProviders = {
    'gmail.com': 'https://mail.google.com',
    'ukr.net': 'https://mail.ukr.net',
    'meta.ua': 'https://mail.meta.ua',
    'i.ua': 'https://mail.i.ua',
    'outlook.com': 'https://outlook.live.com',
    'yahoo.com': 'https://mail.yahoo.com',
    'icloud.com': 'https://www.icloud.com/mail',
  };

  const providerLink = emailProviders[domain] || `https://${domain}`;

  const handleOpenMail = () => {
    window.open(providerLink, '_blank');
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className={css.wrapper}>
      <TitleText>Дякуємо за реєстрацію!</TitleText>
      <div className={css.email}>
        Щоб отримати доступ до своїх даних, будь ласка, підтвердіть свій email.
      </div>
      <p className={css.message}>
        Ми надіслали лист на:
        <br />
        <span className={css.email}>{email}</span>
      </p>
    
      <div className={css.buttons}>
        <button onClick={handleOpenMail} className={css.button}>
        <MailCheck className={css.verifyIcon} />
          Перейти до пошти
        </button>
        <button onClick={handleGoToLogin} className={css.buttonSecondary}>
          Перейти до логіну
        </button>
      </div>

      <p className={css.hint}>
        Після підтвердження пошти, будь ласка, увійдіть у свій акаунт.
      </p>
      <ResendVerifyEmail email={email} />
    </div>
  );
};

export default VerifyPage;