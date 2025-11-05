import { useState, useEffect } from 'react';

export default function Toast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make showToast available globally
    window.showToastGlobal = (msg) => {
      setMessage(msg);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    return () => {
      window.showToastGlobal = null;
    };
  }, []);

  return (
    <div className={`toast ${isVisible ? 'show' : ''}`} id="toast">
      <span className="toast-icon">✓</span>
      <span className="toast-message">{message}</span>
    </div>
  );
}
