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
      <section className="sub-hero">
        <div className="sub-hero-inner">
          <p className="sub-hero-tag"><span className="blink">●</span> UTILITY MODULE</p>
          <h1 className="sub-hero-title">Data Slayer<br />Custom Link</h1>
          <p className="sub-hero-lead">
            Buat link pendek yang mudah diingat dari URL apa pun — cocok buat dibagikan di poster,
            bio, atau grup panitia.
          </p>

          <div className="terminal-panel">
            <form id="shortenForm" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label className="form-label" htmlFor="longUrl">LONG URL</label>
                <input
                  id="longUrl"
                  name="longUrl"
                  type="url"
                  className="form-input"
                  placeholder="https://url-panjang-kamu.com/dengan/path"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="shortCode">CUSTOM CODE</label>
                <div className="form-prefix-group">
                  <span className="form-prefix">data-slayer.id/</span>
                  <input
                    id="shortCode"
                    name="shortCode"
                    type="text"
                    className="form-input"
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
                className="btn btn-cta form-submit"
                disabled={loading}
              >
                {loading ? 'MEMPROSES...' : 'BUAT LINK'}
              </button>
            </form>

            {result && (
              <div id="resultSuccess" className="result-panel result-panel--success is-visible">
                <div className="result-panel-head">
                  <svg className="pixel-icon" width="18" height="18" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  <a id="resultLink" className="result-link" href={result} target="_blank" rel="noopener noreferrer">
                    {result}
                  </a>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.55rem' }}
                    onClick={handleCopy}
                  >
                    {copied ? 'TERSALIN!' : 'SALIN'}
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div id="resultError" className="result-panel result-panel--error is-visible">
                <div className="result-panel-head">
                  <svg className="pixel-icon" width="18" height="18" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
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

            <p className="form-note">
              Mode demo — link belum tersimpan permanen. Setelah backend resmi Data Slayer 4.0 siap,
              tool ini akan tersambung otomatis ke server pemendek link sungguhan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
