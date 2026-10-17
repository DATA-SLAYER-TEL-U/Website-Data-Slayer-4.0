export interface Winner {
  rankBadge: 'gold' | 'silver' | 'bronze' | 'favorite';
  rankLabel: string;
  teamName: string;
}

export interface EditionHallOfFame {
  edition: string;
  tabLabel: string;
  year: string;
  subtitle: string;
  isUpcoming?: boolean;
  mlc: Winner[];
  dac: Winner[];
}

export const hallOfFameData: EditionHallOfFame[] = [
  {
    edition: '4.0',
    tabLabel: 'Data Slayer 4.0',
    year: '2026',
    subtitle: 'Tahta juara Data Slayer 4.0 masih terbuka. Siapakah yang akan menorehkan namanya di puncak?',
    isUpcoming: true,
    mlc: [
      {
        rankBadge: 'gold',
        rankLabel: '#1 Juara 1',
        teamName: '???',
      },
      {
        rankBadge: 'silver',
        rankLabel: '#2 Juara 2',
        teamName: '???',
      },
      {
        rankBadge: 'bronze',
        rankLabel: '#3 Juara 3',
        teamName: '???',
      },
    ],
    dac: [
      {
        rankBadge: 'gold',
        rankLabel: '#1 Juara 1',
        teamName: '???',
      },
      {
        rankBadge: 'silver',
        rankLabel: '#2 Juara 2',
        teamName: '???',
      },
      {
        rankBadge: 'bronze',
        rankLabel: '#3 Juara 3',
        teamName: '???',
      },
      {
        rankBadge: 'favorite',
        rankLabel: 'Juara Favorit',
        teamName: '???',
      },
    ],
  },
  {
    edition: '3.0',
    tabLabel: 'Data Slayer 3.0',
    year: '2025',
    subtitle: 'penakluk data di panggung Data Slayer 3.0 (Tahun 2025).',
    isUpcoming: false,
    mlc: [
      {
        rankBadge: 'gold',
        rankLabel: '#1 Juara 1',
        teamName: 'Tim Manud Adz Wae',
      },
      {
        rankBadge: 'silver',
        rankLabel: '#2 Juara 2',
        teamName: 'Tim Three Makasih',
      },
      {
        rankBadge: 'bronze',
        rankLabel: '#3 Juara 3',
        teamName: 'Tim Teio Teio Teio',
      },
    ],
    dac: [
      {
        rankBadge: 'gold',
        rankLabel: '#1 Juara 1',
        teamName: 'Tim Vermak Data',
      },
      {
        rankBadge: 'silver',
        rankLabel: '#2 Juara 2',
        teamName: 'Tim Kita Semua Suka Ubi Cilembu',
      },
      {
        rankBadge: 'bronze',
        rankLabel: '#3 Juara 3',
        teamName: 'Tim Es Kom Jumbo',
      },
      {
        rankBadge: 'favorite',
        rankLabel: 'Juara Favorit',
        teamName: 'Tim Binary Muse',
      },
    ],
  },
];
