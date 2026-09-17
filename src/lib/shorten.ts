/**
 * Form pemendek link — MODE DEMO.
 * Belum tersambung ke backend asli. Saat backend/API resmi sudah ada,
 * ganti fungsi `fakeShorten` di bawah dengan pemanggilan endpoint POST
 * (lihat komentar TODO), lalu hapus catatan "mode demo" di form-note.
 */

interface ShortenResult {
  shortUrl: string;
  longUrl: string;
}

// Menyimpan hasil demo selama sesi (hilang saat reload) — placeholder saja.
const demoStore = new Map<string, string>();

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

async function fakeShorten(longUrl: string, shortCode: string): Promise<ShortenResult> {
  // TODO: ganti blok ini dengan fetch ke endpoint asli, contoh:
  // const res = await fetch('https://api.data-slayer.id/shorten', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ longUrl, shortCode }),
  // });
  // if (!res.ok) throw new Error(await res.text());
  // return res.json();

  await new Promise((resolve) => setTimeout(resolve, 500));

  if (demoStore.has(shortCode)) {
    throw new Error('Kode ini sudah dipakai. Coba kode lain.');
  }
  demoStore.set(shortCode, longUrl);

  return {
    shortUrl: `https://data-slayer.id/${shortCode}`,
    longUrl,
  };
}

export function initShortenForm(): void {
  const form = document.getElementById('shortenForm') as HTMLFormElement | null;
  if (!form) return;

  const longUrlInput = document.getElementById('longUrl') as HTMLInputElement;
  const shortCodeInput = document.getElementById('shortCode') as HTMLInputElement;
  const submitBtn = document.getElementById('shortenSubmit') as HTMLButtonElement;
  const successPanel = document.getElementById('resultSuccess') as HTMLElement;
  const errorPanel = document.getElementById('resultError') as HTMLElement;
  const resultLink = document.getElementById('resultLink') as HTMLAnchorElement;
  const errorMessage = document.getElementById('errorMessage') as HTMLElement;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    successPanel.classList.remove('is-visible');
    errorPanel.classList.remove('is-visible');

    const longUrl = longUrlInput.value.trim();
    const shortCode = shortCodeInput.value.trim();

    if (!isValidUrl(longUrl)) {
      errorMessage.textContent = 'URL tidak valid. Pastikan diawali https:// atau http://';
      errorPanel.classList.add('is-visible');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'MEMPROSES...';

    try {
      const result = await fakeShorten(longUrl, shortCode);
      resultLink.href = result.shortUrl;
      resultLink.textContent = result.shortUrl;
      successPanel.classList.add('is-visible');
      form.reset();
    } catch (err) {
      errorMessage.textContent = err instanceof Error ? err.message : 'Terjadi kesalahan.';
      errorPanel.classList.add('is-visible');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'BUAT LINK';
    }
  });
}
