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
    <div
      className="max-w-[28rem] md:max-w-[32rem] mx-auto mt-8 p-5 md:p-6 rounded-2xl bg-panel/60 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] text-center w-full"
      aria-live="polite"
    >
      <p className="text-xs md:text-sm text-ink-dim mb-3.5 font-medium">{label}</p>
      <div className="flex justify-center gap-2.5 flex-wrap">
        <div className="flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200">
          <span className="font-pixel text-base md:text-lg text-cyan">{timeLeft.days}</span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Hari</small>
        </div>
        <div className="flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200">
          <span className="font-pixel text-base md:text-lg text-cyan">{timeLeft.hours}</span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Jam</small>
        </div>
        <div className="flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200">
          <span className="font-pixel text-base md:text-lg text-cyan">{timeLeft.mins}</span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Menit</small>
        </div>
        <div className="flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200">
          <span className="font-pixel text-base md:text-lg text-cyan">{timeLeft.secs}</span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Detik</small>
        </div>
      </div>
      {note && <p className="text-xs text-ink-dim/80 mt-3">{note}</p>}
    </div>
  );
};
