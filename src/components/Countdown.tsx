import React, { useState, useEffect } from 'react';

export interface CountdownProps {
  targetDate?: string;
  label?: string;
  note?: string;
  category?: 'home' | 'mlc' | 'dac';
  accentColor?: 'cyan' | 'mlc' | 'dac';
}

interface Milestone {
  targetTime: number;
  label: string;
  note: string;
}

// Jadwal resmi MLC (Machine Learning Competition)
const MLC_MILESTONES: Milestone[] = [
  {
    targetTime: new Date('2026-10-19T00:00:00+07:00').getTime(),
    label: 'Pendaftaran Batch 1 dibuka dalam:',
    note: 'Registrasi Batch 1: 19 Oktober - 8 November 2026',
  },
  {
    targetTime: new Date('2026-11-08T23:59:59+07:00').getTime(),
    label: 'Pendaftaran Batch 1 ditutup dalam:',
    note: 'Registrasi Batch 1 berakhir 8 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-11-15T23:59:59+07:00').getTime(),
    label: 'Pendaftaran Batch 2 ditutup dalam:',
    note: 'Registrasi Batch 2 berakhir 15 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-11-29T23:59:59+07:00').getTime(),
    label: 'Penutupan Babak Penyisihan MLC dalam:',
    note: 'Batas akhir pengerjaan dataset dan submisi solusi Kaggle: 29 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-12-06T23:59:59+07:00').getTime(),
    label: 'Penilaian Solusi MLC Berlangsung:',
    note: 'Evaluasi dewan juri terhadap model dan notebook peserta: hingga 6 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-07T20:00:00+07:00').getTime(),
    label: 'Pengumuman Finalis MLC dalam:',
    note: 'Pengumuman resmi tim-tim yang berhasil melaju ke babak final: 7 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-12T09:00:00+07:00').getTime(),
    label: 'Technical Meeting Final MLC dimulai dalam:',
    note: 'Pengarahan teknis pelaksanaan babak final bersama seluruh finalis: 12 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-17T23:59:59+07:00').getTime(),
    label: 'Batas Pengumpulan Berkas Presentasi MLC:',
    note: 'Batas pengunggahan technical report dan slide presentasi: 17 Desember 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-12-19T08:00:00+07:00').getTime(),
    label: 'Babak Final MLC dimulai dalam:',
    note: 'Sesi presentasi solusi dan tanya jawab teknis di hadapan dewan juri: 19 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-21T20:00:00+07:00').getTime(),
    label: 'Pengumuman Juara & Awarding dalam:',
    note: 'Pengumuman resmi pemenang kompetisi Data Slayer 4.0: 21 Desember 2026',
  },
];

// Jadwal resmi DAC (Dashboard Analytics Competition)
const DAC_MILESTONES: Milestone[] = [
  {
    targetTime: new Date('2026-10-19T00:00:00+07:00').getTime(),
    label: 'Pendaftaran Batch 1 dibuka dalam:',
    note: 'Registrasi Batch 1: 19 Oktober - 8 November 2026',
  },
  {
    targetTime: new Date('2026-11-08T23:59:59+07:00').getTime(),
    label: 'Pendaftaran Batch 1 ditutup dalam:',
    note: 'Registrasi Batch 1 berakhir 8 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-11-15T23:59:59+07:00').getTime(),
    label: 'Pendaftaran Batch 2 ditutup dalam:',
    note: 'Registrasi Batch 2 berakhir 15 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-11-23T23:59:59+07:00').getTime(),
    label: 'Pengumpulan Karya DAC ditutup dalam:',
    note: 'Batas akhir pengumpulan file dashboard, dataset, dan PDF karya: 23 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-11-27T09:00:00+07:00').getTime(),
    label: 'Webinar DAC dimulai dalam:',
    note: 'Sesi webinar eksklusif seputar Data Analytics bagi peserta dan umum: 27 November 2026',
  },
  {
    targetTime: new Date('2026-11-29T23:59:59+07:00').getTime(),
    label: 'Penilaian Dashboard DAC (10 Besar):',
    note: 'Evaluasi dewan juri terhadap dashboard peserta untuk penentuan 10 finalis: hingga 29 November 2026',
  },
  {
    targetTime: new Date('2026-11-30T20:00:00+07:00').getTime(),
    label: 'Pengumuman Finalis DAC dalam:',
    note: 'Pengumuman resmi 10 tim finalis terbaik yang lolos ke tahap final: 30 November 2026',
  },
  {
    targetTime: new Date('2026-12-06T23:59:59+07:00').getTime(),
    label: 'Voting Juara Favorit DAC ditutup dalam:',
    note: 'Periode pemungutan suara publik secara terbuka untuk Juara Favorit: hingga 6 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-07T23:59:59+07:00').getTime(),
    label: 'Batas Pengumpulan Paper Finalis DAC:',
    note: 'Penyusunan laporan analisis dan pengumpulan paper oleh finalis: hingga 7 Desember 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-12-12T09:00:00+07:00').getTime(),
    label: 'Technical Meeting Final DAC dimulai dalam:',
    note: 'Pengarahan teknis pelaksanaan babak final bagi seluruh finalis: 12 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-17T23:59:59+07:00').getTime(),
    label: 'Batas Pengumpulan PPT Presentasi DAC:',
    note: 'Batas pengunggahan berkas slide presentasi akhir finalis: 17 Desember 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-12-19T08:00:00+07:00').getTime(),
    label: 'Babak Final DAC dimulai dalam:',
    note: 'Presentasi langsung karya di hadapan dewan juri dan penentuan juara: 19 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-21T20:00:00+07:00').getTime(),
    label: 'Pengumuman Juara & Awarding dalam:',
    note: 'Pengumuman resmi pemenang kompetisi Data Slayer 4.0: 21 Desember 2026',
  },
];

// Jadwal gabungan untuk Beranda
const HOME_MILESTONES: Milestone[] = [
  {
    targetTime: new Date('2026-10-19T00:00:00+07:00').getTime(),
    label: 'Pendaftaran Batch 1 dibuka dalam:',
    note: 'Registrasi Batch 1: 19 Oktober - 8 November 2026',
  },
  {
    targetTime: new Date('2026-11-08T23:59:59+07:00').getTime(),
    label: 'Pendaftaran Batch 1 ditutup dalam:',
    note: 'Registrasi Batch 1 berakhir 8 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-11-15T23:59:59+07:00').getTime(),
    label: 'Pendaftaran Batch 2 ditutup dalam:',
    note: 'Registrasi Batch 2 berakhir 15 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-11-23T23:59:59+07:00').getTime(),
    label: 'Pengumpulan Karya DAC ditutup dalam:',
    note: 'Batas akhir pengumpulan berkas karya dashboard DAC: 23 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-11-27T09:00:00+07:00').getTime(),
    label: 'Webinar DAC dimulai dalam:',
    note: 'Sesi webinar eksklusif Data Analytics bersama narasumber ahli: 27 November 2026',
  },
  {
    targetTime: new Date('2026-11-29T23:59:59+07:00').getTime(),
    label: 'Penutupan Babak Penyisihan MLC dalam:',
    note: 'Batas akhir submisi solusi Kaggle MLC dan penilaian DAC: 29 November 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-11-30T20:00:00+07:00').getTime(),
    label: 'Pengumuman Finalis DAC dalam:',
    note: 'Pengumuman resmi 10 besar finalis kategori DAC: 30 November 2026',
  },
  {
    targetTime: new Date('2026-12-07T20:00:00+07:00').getTime(),
    label: 'Pengumuman Finalis MLC dalam:',
    note: 'Pengumuman finalis MLC dan batas akhir paper finalis DAC: 7 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-12T09:00:00+07:00').getTime(),
    label: 'Technical Meeting Final dimulai dalam:',
    note: 'Pengarahan teknis babak final bersama seluruh finalis MLC dan DAC: 12 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-17T23:59:59+07:00').getTime(),
    label: 'Batas Pengumpulan Berkas Presentasi:',
    note: 'Batas akhir unggah slide materi presentasi finalis: 17 Desember 2026 pukul 23:59 WIB',
  },
  {
    targetTime: new Date('2026-12-19T08:00:00+07:00').getTime(),
    label: 'Babak Grand Final dimulai dalam:',
    note: 'Presentasi karya langsung di hadapan dewan juri untuk kategori MLC dan DAC: 19 Desember 2026',
  },
  {
    targetTime: new Date('2026-12-21T20:00:00+07:00').getTime(),
    label: 'Pengumuman Juara & Awarding dalam:',
    note: 'Pengumuman resmi pemenang kompetisi Data Slayer 4.0: 21 Desember 2026',
  },
];

function calculateCountdownState(
  now: number,
  targetDate?: string,
  customLabel?: string,
  customNote?: string,
  category?: 'home' | 'mlc' | 'dac'
) {
  const pad = (n: number) => n.toString().padStart(2, '0');

  let targetTime: number;
  let activeLabel: string;
  let activeNote: string;

  if (targetDate) {
    targetTime = new Date(targetDate).getTime();
    activeLabel = customLabel ?? 'Menuju batas waktu:';
    activeNote = customNote ?? '';
  } else {
    let effectiveCategory: 'home' | 'mlc' | 'dac' = category ?? 'home';
    if (!category && typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('/mlc')) effectiveCategory = 'mlc';
      else if (path.includes('/dac')) effectiveCategory = 'dac';
    }

    const milestones =
      effectiveCategory === 'mlc'
        ? MLC_MILESTONES
        : effectiveCategory === 'dac'
        ? DAC_MILESTONES
        : HOME_MILESTONES;

    const upcoming = milestones.find((m) => now < m.targetTime);

    if (upcoming) {
      targetTime = upcoming.targetTime;
      activeLabel = customLabel ?? upcoming.label;
      activeNote = customNote ?? upcoming.note;
    } else {
      targetTime = milestones[milestones.length - 1].targetTime;
      activeLabel = customLabel ?? 'Kompetisi Telah Berakhir';
      activeNote = customNote ?? 'Seluruh rangkaian kegiatan Data Slayer 4.0 resmi selesai.';
    }
  }

  if (Number.isNaN(targetTime)) {
    return {
      label: activeLabel,
      note: activeNote,
      days: '--',
      hours: '--',
      mins: '--',
      secs: '--',
    };
  }

  const diff = Math.max(0, targetTime - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  return {
    label: activeLabel,
    note: activeNote,
    days: pad(days),
    hours: pad(hours),
    mins: pad(mins),
    secs: pad(secs),
  };
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  label: customLabel,
  note: customNote,
  category,
  accentColor,
}) => {
  const [displayInfo, setDisplayInfo] = useState(() =>
    calculateCountdownState(Date.now(), targetDate, customLabel, customNote, category)
  );

  useEffect(() => {
    const update = () => {
      setDisplayInfo(
        calculateCountdownState(Date.now(), targetDate, customLabel, customNote, category)
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate, customLabel, customNote, category]);

  const activeColor =
    accentColor ??
    (category === 'mlc' ? 'mlc' : category === 'dac' ? 'dac' : 'cyan');

  const textColorClass =
    activeColor === 'mlc'
      ? 'text-mlc'
      : activeColor === 'dac'
      ? 'text-dac'
      : 'text-cyan';

  const hoverBorderClass =
    activeColor === 'mlc'
      ? 'hover:border-mlc'
      : activeColor === 'dac'
      ? 'hover:border-dac'
      : 'hover:border-cyan';

  return (
    <div
      className="max-w-[28rem] md:max-w-[32rem] mx-auto mt-8 p-5 md:p-6 rounded-2xl bg-panel/60 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] text-center w-full"
      aria-live="polite"
    >
      <p className="text-xs md:text-sm text-ink-dim mb-3.5 font-medium">{displayInfo.label}</p>
      <div className="flex justify-center gap-2.5 flex-wrap">
        <div
          className={`flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 ${hoverBorderClass} hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200`}
        >
          <span className={`font-pixel text-base md:text-lg ${textColorClass}`}>
            {displayInfo.days}
          </span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Hari</small>
        </div>
        <div
          className={`flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 ${hoverBorderClass} hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200`}
        >
          <span className={`font-pixel text-base md:text-lg ${textColorClass}`}>
            {displayInfo.hours}
          </span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Jam</small>
        </div>
        <div
          className={`flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 ${hoverBorderClass} hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200`}
        >
          <span className={`font-pixel text-base md:text-lg ${textColorClass}`}>
            {displayInfo.mins}
          </span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Menit</small>
        </div>
        <div
          className={`flex flex-col items-center bg-void border border-line rounded-lg py-2.5 px-3 min-w-[4.2rem] hover:-translate-y-0.5 ${hoverBorderClass} hover:shadow-[0_0_16px_rgba(255,255,255,0.25)] transition-all duration-200`}
        >
          <span className={`font-pixel text-base md:text-lg ${textColorClass}`}>
            {displayInfo.secs}
          </span>
          <small className="text-[0.6rem] text-ink-dim mt-1">Detik</small>
        </div>
      </div>
      {displayInfo.note && <p className="text-xs text-ink-dim/80 mt-3">{displayInfo.note}</p>}
    </div>
  );
};
