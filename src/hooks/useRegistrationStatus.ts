import { useState, useEffect } from 'react';
import { isRegistrationOpen } from '../lib/registration';

/**
 * Hook untuk mengecek apakah pendaftaran sudah resmi dibuka (19 Oktober 2026 00:00:00 WIB).
 * Menggunakan interval 1 detik sehingga transisi terjadi otomatis tanpa perlu refresh halaman.
 */
export function useRegistrationStatus(): boolean {
  const [isOpen, setIsOpen] = useState<boolean>(isRegistrationOpen);

  useEffect(() => {
    const check = () => {
      setIsOpen(isRegistrationOpen());
    };

    check();
    const timer = setInterval(check, 1000);
    return () => clearInterval(timer);
  }, []);

  return isOpen;
}
