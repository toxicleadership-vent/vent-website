'use client';

import styles from './paypal.module.css';

const PayPalDonationButton = () => {
  return (
    <a
      href="https://www.paypal.com/donate?business=finance@toxicleadershipvent.com&currency_code=EUR"
      target="_blank"
      rel="noopener noreferrer"
      
    >
      <img
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
        alt="Donate with PayPal"
        className={styles.paypalButton}
      />
    </a>
  );
};

export default PayPalDonationButton;
