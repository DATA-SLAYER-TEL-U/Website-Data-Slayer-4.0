import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  isRestrictedRegistrationCode,
  getRegistrationEventInfo,
} from '../lib/registration';
import { useRegistrationStatus } from '../hooks/useRegistrationStatus';
import { Countdown } from '../components/Countdown';

export const RedirectPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const [error, setError] = useState<string | null>(null);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [resolved, setResolved] = useState<boolean>(false);

  const isRegOpen = useRegistrationStatus();
  const isRestricted = isRestrictedRegistrationCode(code);
  const eventInfo = getRegistrationEventInfo(code);
  const isLocked = isRestricted && !isRegOpen;

  useEffect(() => {
    if (!code) {
      setError('Kode link tidak valid.');
      setResolved(true);
      return;
    }

    let isMounted = true;

    const fetchLink = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('short_links')
          .select('long_url')
          .ilike('code', code)
          .maybeSingle();

        if (fetchError || !data?.long_url) {
          throw new Error('Link tidak ditemukan atau sudah kedaluwarsa.');
        }

        if (isMounted) {
          setTargetUrl(data.long_url);
          setResolved(true);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat memuat link.');
          setResolved(true);
        }
      }
    };

    fetchLink();

    return () => {
      isMounted = false;
    };
  }, [code]);

  // Lakukan redirect hanya jika link sudah didapatkan dan akses tidak terkunci
  useEffect(() => {
    if (!resolved || !targetUrl || isLocked) return;

    window.location.replace(targetUrl);
  }, [resolved, targetUrl, isLocked]);

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-12 text-center">
      <div className="max-w-lg w-full p-6 md:p-8 border-2 border-line rounded-2xl bg-panel/90 backdrop-blur-md shadow-2xl">
        <img
          src="/logo.png"
          alt="Data Slayer"
          className="h-14 md:h-16 mx-auto mb-5 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse"
        />

        {error ? (
          <div>
            <p className="font-pixel text-[0.65rem] text-rose-400 mb-3 bg-rose-500/10 border border-rose-500/30 px-3 py-1.5 rounded-full inline-block">
              ● ERROR 404
            </p>
            <h1 className="text-xl font-bold text-ink mb-2">Link Tidak Ditemukan</h1>
            <p className="text-xs text-ink-dim mb-6 leading-relaxed">
              {error}
            </p>
            <Link
              to="/"
              className="inline-block py-3 px-6 rounded-xl font-pixel text-xs font-bold text-void bg-cyan hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all"
            >
              KEMBALI KE BERANDA
            </Link>
          </div>
        ) : isLocked ? (
          <div>
            <div className="inline-flex items-center gap-2 font-pixel text-[0.65rem] px-3.5 py-1.5 rounded-full border mb-3 bg-panel/80 text-amber-300 border-amber-400/40 shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>PENDAFTARAN BELUM DIBUKA</span>
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-ink mb-2">
              Registrasi {eventInfo ? eventInfo.shortName : 'Kompetisi'}
            </h1>
            <p className="text-xs md:text-sm text-ink-dim mb-4 max-w-sm mx-auto leading-relaxed">
              Pendaftaran resmi dibuka otomatis pada{' '}
              <span className="text-ink font-semibold">19 Oktober 2026 pukul 00:00 WIB</span>.
              Halaman ini akan mengalihkan secara otomatis saat registrasi telah dibuka.
            </p>

            {/* Countdown otomatis */}
            <div className="my-5">
              <Countdown
                targetDate="2026-10-19T00:00:00+07:00"
                label="Pendaftaran dibuka dalam:"
                note="Registrasi Batch 1: 19 Oktober – 8 November 2026"
              />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
              {eventInfo && (
                <Link
                  to={eventInfo.pagePath}
                  className={`inline-flex items-center justify-center min-h-[42px] px-6 py-2.5 rounded-xl font-pixel text-xs font-bold text-ink transition-all duration-200 ${
                    eventInfo.shortName === 'MLC'
                      ? 'bg-mlc shadow-[0_4px_16px_rgba(205,164,222,0.4)] hover:shadow-[0_6px_22px_rgba(205,164,222,0.6)]'
                      : 'bg-dac shadow-[0_4px_16px_rgba(255,182,193,0.4)] hover:shadow-[0_6px_22px_rgba(255,182,193,0.6)]'
                  } hover:-translate-y-0.5`}
                >
                  Lihat Detail {eventInfo.shortName}
                </Link>
              )}
              <Link
                to="/"
                className="inline-flex items-center justify-center min-h-[42px] px-6 py-2.5 rounded-xl font-pixel text-xs font-bold text-ink bg-white/90 hover:bg-white border border-white/90 shadow-[0_4px_14px_rgba(110,120,160,0.18)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-pixel text-[0.65rem] text-cyan mb-3 bg-cyan/10 border border-cyan/30 px-3 py-1.5 rounded-full inline-flex items-center gap-2">
              <span className="blink">●</span> REDIRECTING
            </p>
            <h1 className="text-lg md:text-xl font-bold text-ink mb-2">
              Mengalihkan ke Tautan...
            </h1>
            <p className="font-pixel text-xs text-cyan break-all mb-6">
              data-slayer.com/{code}
            </p>

            <div className="w-48 h-1.5 bg-line rounded-full overflow-hidden mx-auto mb-4">
              <div className="h-full bg-cyan rounded-full animate-pulse w-full" />
            </div>

            <p className="text-[0.7rem] text-ink-dim">
              Mohon tunggu sebentar, Anda sedang dialihkan otomatis.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
