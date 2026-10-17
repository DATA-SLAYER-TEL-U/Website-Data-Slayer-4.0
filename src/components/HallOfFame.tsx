import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { hallOfFameData, type Winner } from '../data/hallOfFame';

export const HallOfFame: React.FC = () => {
  const [activeEdition, setActiveEdition] = useState<string>('4.0');

  const currentEditionData = hallOfFameData.find((item) => item.edition === activeEdition) ?? hallOfFameData[0];

  const renderWinnerRow = (winner: Winner, isUpcoming: boolean) => {
    return (
      <li
        key={winner.rankLabel}
        className="flex items-center justify-between p-3.5 sm:p-4 bg-void rounded-xl border border-line/80 hover:border-cyan/40 transition-all duration-200"
      >
        <div className="flex items-center gap-2 shrink-0">
          {winner.rankBadge === 'gold' && (
            <span className="font-pixel text-[0.6rem] text-gold bg-gold/10 border border-gold/30 px-2.5 py-1.5 rounded inline-flex items-center gap-1.5 font-bold">
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {winner.rankLabel}
            </span>
          )}
          {winner.rankBadge === 'silver' && (
            <span className="font-pixel text-[0.6rem] text-ink-dim bg-white/70 border border-line px-2.5 py-1.5 rounded inline-flex items-center gap-1">
              {winner.rankLabel}
            </span>
          )}
          {winner.rankBadge === 'bronze' && (
            <span className="font-pixel text-[0.6rem] text-ink-dim bg-white/70 border border-line px-2.5 py-1.5 rounded inline-flex items-center gap-1">
              {winner.rankLabel}
            </span>
          )}
          {winner.rankBadge === 'favorite' && (
            <span className="font-pixel text-[0.6rem] text-dac bg-dac/10 border border-dac/30 px-2.5 py-1.5 rounded inline-flex items-center gap-1.5 font-bold">
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {winner.rankLabel}
            </span>
          )}
        </div>

        {isUpcoming ? (
          <span className="font-pixel text-xs sm:text-sm text-cyan tracking-widest font-bold text-right ml-4">
            ???
          </span>
        ) : (
          <span className="font-bold text-sm sm:text-base text-ink text-right ml-4">
            {winner.teamName}
          </span>
        )}
      </li>
    );
  };

  return (
    <section id="hadiah" className="py-20 px-5 text-center" aria-labelledby="hall-of-fame-title">
      <div className="max-w-[68rem] mx-auto">
        <p className="font-pixel text-[0.6rem] text-cyan uppercase tracking-widest mb-2.5">
          High Score Archive
        </p>
        <h2 id="hall-of-fame-title" className="font-pixel text-[clamp(1.35rem,4vw,2rem)] text-ink leading-snug">
          Hall of Champions
        </h2>
        <p className="mt-4 text-ink-dim leading-relaxed text-sm md:text-base max-w-[50ch] mx-auto">
          Catatan sejarah para penakluk data dari edisi Data Slayer terdahulu. Siapakah yang akan menorehkan nama di Data Slayer 4.0?
        </p>

        {/* Edition Tabs (Only 4.0 and 3.0) */}
        <div
          role="tablist"
          aria-label="Pilih Edisi Data Slayer"
          className="flex flex-wrap items-center justify-center gap-3 mt-8"
        >
          {hallOfFameData.map((item) => {
            const isActive = activeEdition === item.edition;
            return (
              <button
                key={item.edition}
                role="tab"
                id={`tab-${item.edition}`}
                aria-selected={isActive}
                aria-controls={`panel-${item.edition}`}
                onClick={() => setActiveEdition(item.edition)}
                className={`font-pixel text-[0.65rem] sm:text-xs px-5 sm:px-7 py-3 rounded-xl transition-all duration-200 border-2 min-h-[44px] inline-flex items-center gap-2 ${
                  isActive
                    ? 'bg-void text-ink border-cyan shadow-[0_0_16px_rgba(121,174,229,0.35)] scale-105 font-bold z-10'
                    : 'bg-panel/70 text-ink-dim border-line/70 hover:text-ink hover:border-cyan/40 hover:bg-panel'
                }`}
              >
                <span>{item.tabLabel}</span>
                {item.isUpcoming && (
                  <span className="font-pixel text-[0.5rem] px-2 py-0.5 rounded bg-cyan/15 text-cyan border border-cyan/30 animate-pulse">
                    NOW
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content */}
        <div
          role="tabpanel"
          id={`panel-${currentEditionData.edition}`}
          aria-labelledby={`tab-${currentEditionData.edition}`}
          className="mt-8 transition-all duration-300"
        >
          {/* Edition Subtitle */}
          <div className="bg-panel/60 border border-line rounded-xl px-5 py-3 max-w-[46rem] mx-auto mb-8 text-center backdrop-blur-sm">
            <p className="text-xs sm:text-sm font-semibold text-ink">{currentEditionData.subtitle}</p>
          </div>

          {/* Cards Grid (Same Structure for Both 4.0 and 3.0) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* MLC Card */}
            <div className="prize-board border-2 border-line rounded-2xl p-6 sm:p-7 bg-panel/80 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-line/60 mb-5">
                  <h3 className="font-pixel text-lg text-mlc">MLC</h3>
                  <span className="font-pixel text-[0.55rem] text-mlc bg-mlc/10 border border-mlc/30 px-2.5 py-1 rounded">
                    MACHINE LEARNING
                  </span>
                </div>
                <ul className="space-y-3 list-none p-0">
                  {currentEditionData.mlc.map((winner) => renderWinnerRow(winner, !!currentEditionData.isUpcoming))}
                </ul>
              </div>

              {currentEditionData.isUpcoming && (
                <div className="mt-6 pt-4 border-t border-line/60">
                  <Link
                    to="/mlc"
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl font-pixel text-xs font-bold text-ink bg-gradient-to-r from-mlc to-mlc shadow-[0_0_14px_rgba(205,164,222,0.35)] hover:shadow-[0_0_20px_rgba(205,164,222,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Rebut Tahta Juara MLC
                  </Link>
                </div>
              )}
            </div>

            {/* DAC Card */}
            <div className="prize-board border-2 border-line rounded-2xl p-6 sm:p-7 bg-panel/80 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-line/60 mb-5">
                  <h3 className="font-pixel text-lg text-dac">DAC</h3>
                  <span className="font-pixel text-[0.55rem] text-dac bg-dac/10 border border-dac/30 px-2.5 py-1 rounded">
                    DATA ANALYTICS
                  </span>
                </div>
                <ul className="space-y-3 list-none p-0">
                  {currentEditionData.dac.map((winner) => renderWinnerRow(winner, !!currentEditionData.isUpcoming))}
                </ul>
              </div>

              {currentEditionData.isUpcoming && (
                <div className="mt-6 pt-4 border-t border-line/60">
                  <Link
                    to="/dac"
                    className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl font-pixel text-xs font-bold text-ink bg-gradient-to-r from-dac to-dac shadow-[0_0_14px_rgba(255,182,193,0.35)] hover:shadow-[0_0_20px_rgba(255,182,193,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Rebut Tahta Juara DAC
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
