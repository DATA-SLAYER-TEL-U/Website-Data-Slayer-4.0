import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate?: string;
  label?: string;
  note?: string;
}

// Jadwal resmi pendaftaran Data Slayer 4.0 (WIB / UTC+7)
const BATCH_1_START = new Date('2026-10-19T00:00:00+07:00').getTime();
const BATCH_1_END = new Date('2026-11-08T23:59:59+07:00').getTime();
const BATCH_2_END = new Date('2026-11-15T23:59:59+07:00').getTime();

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  label: customLabel,
  note: customNote,
}) => {
  const [displayInfo, setDisplayInfo] = useState<{
    label: string;
    note: string;
    days: string;
    hours: string;
    mins: string;
    secs: string;
  }>(() => {
    return {
      label: customLabel ?? 'Pendaftaran Batch 1 dibuka dalam',
      note: customNote ?? 'Registrasi Batch 1: 19 Oktober – 8 November 2026',
      days: '--',
      hours: '--',
      mins: '--',
      secs: '--',
    };
  });

  useEffect(() => {
    const pad = (n: number) => n.toString().padStart(2, '0');

    const update = () => {
      const now = Date.now();

      let targetTime: number;
      let activeLabel: string;
      let activeNote: string;

      if (targetDate) {
        targetTime = new Date(targetDate).getTime();
        activeLabel = customLabel ?? 'Pendaftaran ditutup dalam';
        activeNote = customNote ?? 'Batas akhir pendaftaran resmi kompetisi.';
      } else if (now < BATCH_1_START) {
        targetTime = BATCH_1_START;
        activeLabel = customLabel ?? 'Pendaftaran Batch 1 dibuka dalam';
        activeNote = customNote ?? 'Registrasi Batch 1: 19 Oktober – 8 November 2026';
      } else if (now <= BATCH_1_END) {
        targetTime = BATCH_1_END;
        activeLabel = customLabel ?? 'Pendaftaran Batch 1 ditutup dalam';
        activeNote = customNote ?? 'Registrasi Batch 1 berakhir 8 November 2026 pukul 23:59 WIB';
      } else if (now <= BATCH_2_END) {
        targetTime = BATCH_2_END;
        activeLabel = customLabel ?? 'Pendaftaran Batch 2 ditutup dalam';
        activeNote = customNote ?? 'Registrasi Batch 2 berakhir 15 November 2026 pukul 23:59 WIB';
      } else {
        targetTime = BATCH_2_END;
        activeLabel = customLabel ?? 'Pendaftaran telah ditutup';
        activeNote = customNote ?? 'Seluruh gelombang pendaftaran Data Slayer 4.0 resmi ditutup.';
      }

      if (Number.isNaN(targetTime)) return;

      const diff = Math.max(0, targetTime - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setDisplayInfo({
        label: activeLabel,
        note: activeNote,
        days: pad(days),
        hours: pad(hours),
        mins: pad(mins),
        secs: pad(secs),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate, customLabel, customNote]);

  return (
    <div
      className="max-w-[28rem] md:max-w-[32rem] mx-auto mt-8 p-5 md:p-6 rounded-2xl bg-panel/60 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] text-center w-full"
      aria-live="polite"
    >
      <p className="text-xs md:text-sm text-ink-dim mb-3.5 font-medium">{displayInfo.label}</p>
      <div className="flex justify-center gap-2.5 flex-wrap">
        <div className="flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200">
          <span className="font-pixel text-base md:text-lg text-cyan">{displayInfo.days}</span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Hari</small>
        </div>
        <div className="flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200">
          <span className="font-pixel text-base md:text-lg text-cyan">{displayInfo.hours}</span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Jam</small>
        </div>
        <div className="flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200">
          <span className="font-pixel text-base md:text-lg text-cyan">{displayInfo.mins}</span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Menit</small>
        </div>
        <div className="flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 hover:border-cyan hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200">
          <span className="font-pixel text-base md:text-lg text-cyan">{displayInfo.secs}</span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Detik</small>
        </div>
      </div>
      {displayInfo.note && <p className="text-xs text-ink-dim/80 mt-3">{displayInfo.note}</p>}
    </div>
  );
};
