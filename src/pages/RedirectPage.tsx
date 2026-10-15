import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export const RedirectPage: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!code) {
      setError('Kode link tidak valid.');
      return;
    }

    let isMounted = true;

    const fetchAndRedirect = async () => {
      try {
        const { data, error: fetchError } = await supabase
          .from('short_links')
          .select('long_url')
          .eq('code', code)
          .maybeSingle();

        if (fetchError || !data?.long_url) {
          throw new Error('Link tidak ditemukan atau sudah kedaluwarsa.');
        }

        // Langsung alihkan pengunjung ke URL asli
        window.location.replace(data.long_url);
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Terjadi kesalahan saat memuat link.');
        }
      }
    };

    fetchAndRedirect();

    return () => {
      isMounted = false;
    };
  }, [code]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full p-8 border-2 border-line rounded-2xl bg-panel/90 backdrop-blur-md shadow-2xl">
        <img
          src="/logo.png"
          alt="Data Slayer"
          className="h-16 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse"
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
