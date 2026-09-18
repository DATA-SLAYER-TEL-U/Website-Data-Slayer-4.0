import React, { useState } from 'react';

const demoStore = new Map<string, string>();

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export const ShortenPage: React.FC = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setCopied(false);

    const trimmedUrl = longUrl.trim();
    const trimmedCode = shortCode.trim();

    if (!isValidUrl(trimmedUrl)) {
      setError('URL tidak valid. Pastikan diawali https:// atau http://');
      return;
    }

    if (!trimmedCode) {
      setError('Harap masukkan custom code yang diinginkan.');
      return;
    }

    setLoading(true);

    try {
      // Simulasi delay pengerjaan
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (demoStore.has(trimmedCode)) {
        throw new Error('Kode ini sudah dipakai. Coba kode lain.');
      }
      demoStore.set(trimmedCode, trimmedUrl);

      const generated = `https://data-slayer.id/${trimmedCode}`;
      setResult(generated);
      setLongUrl('');
      setShortCode('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="pt-30 pb-14 px-5 bg-gradient-to-b from-transparent via-[#18215a]/45 to-transparent border-b border-line/40 text-center">
        <div className="max-w-[56rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan inline-flex items-center gap-2 mb-5 bg-cyan/10 border border-cyan/25 px-3.5 py-1.5 rounded-full">
            <span className="blink">●</span> UTILITY MODULE
          </p>
          <h1 className="font-pixel text-[clamp(1.6rem,5.5vw,2.75rem)] leading-tight text-ink [text-shadow:0_0_18px_rgba(0,229,255,0.4)]">
            Data Slayer<br />Custom Link
          </h1>
          <p className="max-w-[40rem] mx-auto mt-4 text-ink-dim leading-relaxed text-sm md:text-base">
            Buat link pendek yang mudah diingat dari URL apa pun — cocok buat dibagikan di poster,
            bio, atau grup panitia.
          </p>

          <div className="border-2 border-line rounded-2xl p-6 sm:p-8 bg-panel/80 backdrop-blur-sm max-w-[36rem] mx-auto mt-10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] text-left">
            <form id="shortenForm" onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="block font-pixel text-[0.6rem] text-cyan mb-2 tracking-wider" htmlFor="longUrl">
                  LONG URL
                </label>
                <input
                  id="longUrl"
                  name="longUrl"
                  type="url"
                  className="w-full bg-void/80 border border-line rounded-xl px-4 py-3 text-ink font-body text-sm focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan/40 transition-all placeholder:text-ink-dim/50"
                  placeholder="https://url-panjang-kamu.com/dengan/path"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block font-pixel text-[0.6rem] text-cyan mb-2 tracking-wider" htmlFor="shortCode">
                  CUSTOM CODE
                </label>
                <div className="flex items-center border border-line rounded-xl overflow-hidden focus-within:border-cyan focus-within:ring-1 focus-within:ring-cyan/40 transition-all bg-void/80">
                  <span className="px-3.5 py-3 font-pixel text-[0.6rem] text-ink-dim bg-white/5 border-r border-line shrink-0 select-none">
                    data-slayer.id/
                  </span>
                  <input
                    id="shortCode"
                    name="shortCode"
                    type="text"
                    className="w-full bg-transparent px-4 py-3 text-ink font-body text-sm focus:outline-none placeholder:text-ink-dim/50"
                    placeholder="link-kamu"
                    pattern="[\w\-]+"
                    title="Hanya huruf, angka, tanda hubung, dan garis bawah yang diperbolehkan."
                    value={shortCode}
                    onChange={(e) => setShortCode(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                id="shortenSubmit"
                className="w-full py-3.5 px-6 rounded-xl font-pixel text-xs font-bold text-void bg-gradient-to-r from-cyan to-[#00b4d8] shadow-[0_0_15px_rgba(0,229,255,0.35)] hover:shadow-[0_0_25px_rgba(0,229,255,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'MEMPROSES...' : 'BUAT LINK'}
              </button>
            </form>

            {result && (
              <div id="resultSuccess" className="mt-6 p-4 rounded-xl border border-cyan/40 bg-cyan/10">
                <div className="flex items-center gap-2 font-pixel text-xs text-cyan">
                  <svg className="pixel-icon" width="16" height="16" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="4" width="1" height="1" fill="currentColor"/>
                    <rect x="2" y="5" width="1" height="1" fill="currentColor"/>
                    <rect x="3" y="6" width="1" height="1" fill="currentColor"/>
                    <rect x="4" y="5" width="1" height="1" fill="currentColor"/>
                    <rect x="5" y="4" width="1" height="1" fill="currentColor"/>
                    <rect x="6" y="3" width="1" height="1" fill="currentColor"/>
                    <rect x="7" y="2" width="1" height="1" fill="currentColor"/>
                  </svg>
                  <span>Link berhasil dibuat!</span>
                </div>
                <div className="flex items-center gap-3 mt-3 flex-wrap">
                  <a
                    id="resultLink"
                    className="font-pixel text-xs text-cyan break-all px-3 py-2.5 bg-void rounded-lg border border-line flex-1 hover:underline"
                    href={result}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {result}
                  </a>
                  <button
                    type="button"
                    className="font-pixel text-[0.6rem] px-4 py-2.5 rounded-lg border border-line bg-panel hover:border-cyan/50 hover:text-cyan transition-all cursor-pointer shrink-0"
                    onClick={handleCopy}
                  >
                    {copied ? 'TERSALIN!' : 'SALIN'}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div id="resultError" className="mt-6 p-4 rounded-xl border border-rose-500/40 bg-rose-500/10">
                <div className="flex items-center gap-2 font-pixel text-xs text-rose-400">
                  <svg className="pixel-icon" width="16" height="16" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="0" width="2" height="1" fill="currentColor"/>
                    <rect x="2" y="1" width="4" height="1" fill="currentColor"/>
                    <rect x="2" y="2" width="4" height="1" fill="currentColor"/>
                    <rect x="1" y="3" width="6" height="1" fill="currentColor"/>
                    <rect x="1" y="4" width="6" height="1" fill="currentColor"/>
                    <rect x="0" y="5" width="8" height="1" fill="currentColor"/>
                    <rect x="3" y="1" width="1" height="2" fill="#0a0e27"/>
                    <rect x="3" y="4" width="1" height="1" fill="#0a0e27"/>
                  </svg>
                  <span id="errorMessage">{error}</span>
                </div>
              </div>
            )}

            <p className="mt-6 text-xs text-ink-dim leading-relaxed">
              Mode demo — link belum tersimpan permanen. Setelah backend resmi Data Slayer 4.0 siap,
              tool ini akan tersambung otomatis ke server pemendek link sungguhan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
