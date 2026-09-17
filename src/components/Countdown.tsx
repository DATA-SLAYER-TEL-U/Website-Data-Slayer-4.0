import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate?: string;
  label?: string;
  note?: string;
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  label = 'Pendaftaran ditutup dalam',
  note = 'Tanggal resmi akan diumumkan oleh panitia.',
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: string;
    hours: string;
    mins: string;
    secs: string;
  }>({
    days: '--',
    hours: '--',
    mins: '--',
    secs: '--',
  });

  useEffect(() => {
    if (!targetDate) return;
    const target = new Date(targetDate).getTime();
    if (Number.isNaN(target)) return;

    const pad = (n: number) => n.toString().padStart(2, '0');

    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        mins: pad(mins),
        secs: pad(secs),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="hero-countdown-panel" aria-live="polite">
      <p className="countdown-label">{label}</p>
      <div className="countdown">
        <div className="countdown-digit">
          <span>{timeLeft.days}</span>
          <small>Hari</small>
        </div>
        <div className="countdown-digit">
          <span>{timeLeft.hours}</span>
          <small>Jam</small>
        </div>
        <div className="countdown-digit">
          <span>{timeLeft.mins}</span>
          <small>Menit</small>
        </div>
        <div className="countdown-digit">
          <span>{timeLeft.secs}</span>
          <small>Detik</small>
        </div>
      </div>
      {note && <p className="form-note" style={{ marginTop: '0.85rem' }}>{note}</p>}
    </div>
  );
};
