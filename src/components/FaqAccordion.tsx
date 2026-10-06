import React, { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  items: FaqItem[];
  sectionAlt?: boolean;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  id = 'faq',
  eyebrow = 'Bantuan',
  title = 'Pertanyaan Umum',
  items,
  sectionAlt = true,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id={id} className={`section ${sectionAlt ? 'section--alt' : ''}`} aria-labelledby={`${id}-title`}>
      <div className="section-inner section-inner--narrow">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="section-title">{title}</h2>

        <div className="faq-list">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  type="button"
                  id={`${id}-btn-${idx}`}
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel-${idx}`}
                  onClick={() => toggle(idx)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </button>
                <div
                  id={`${id}-panel-${idx}`}
                  role="region"
                  aria-labelledby={`${id}-btn-${idx}`}
                  className="faq-answer"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
