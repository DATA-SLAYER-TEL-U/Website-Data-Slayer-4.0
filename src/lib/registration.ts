// Jadwal resmi pembukaan pendaftaran Data Slayer 4.0 (WIB / UTC+7)
export const REGISTRATION_START_TIME = new Date('2026-10-19T00:00:00+07:00').getTime();

export function isRegistrationOpen(): boolean {
  return Date.now() >= REGISTRATION_START_TIME;
}

export const RESTRICTED_REGISTRATION_CODES = ['REGISTRASIMLC', 'REGISTRASIDAC'] as const;

export function isRestrictedRegistrationCode(code?: string): boolean {
  if (!code) return false;
  return RESTRICTED_REGISTRATION_CODES.includes(code.toUpperCase() as any);
}

export function getRegistrationEventInfo(code?: string): {
  name: string;
  shortName: string;
  pagePath: string;
  colorClass: string;
} | null {
  if (!code) return null;
  const upper = code.toUpperCase();
  if (upper === 'REGISTRASIMLC') {
    return {
      name: 'Machine Learning Competition',
      shortName: 'MLC',
      pagePath: '/mlc',
      colorClass: 'text-mlc',
    };
  }
  if (upper === 'REGISTRASIDAC') {
    return {
      name: 'Dashboard Analytics Competition',
      shortName: 'DAC',
      pagePath: '/dac',
      colorClass: 'text-dac',
    };
  }
  return null;
}
