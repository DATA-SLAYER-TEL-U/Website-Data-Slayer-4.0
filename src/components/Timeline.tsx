import React, { useRef, useState, useEffect } from 'react';

export interface TimelineStage {
  num: string;
  title: string;
  desc: string;
  time: string;
}

interface TimelineProps {
  eyebrow?: string;
  title?: string;
  lead?: string;
  stages: TimelineStage[];
}

export const Timeline: React.FC<TimelineProps> = ({
  eyebrow = 'Progres Level',
  title = 'Timeline Kompetisi',
  lead,
  stages,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathD, setPathD] = useState<string>('');

  useEffect(() => {
    const updatePath = () => {
      const container = containerRef.current;
      if (!container) return;
      if (window.innerWidth < 768) {
        setPathD('');
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const nodes = container.querySelectorAll<HTMLElement>('.level-num');
      if (nodes.length < 2) return;

      const points: { x: number; y: number }[] = [];
      nodes.forEach((node) => {
        const nodeRect = node.getBoundingClientRect();
        // Exact center coordinates relative to container top-left
        const x = Math.round(nodeRect.left + nodeRect.width / 2 - containerRect.left);
        const y = Math.round(nodeRect.top + nodeRect.height / 2 - containerRect.top);
        points.push({ x, y });
      });

      if (points.length >= 2) {
        const d = points.reduce((acc, pt, i) => {
          return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
        }, '');
        setPathD(d);
      }
    };

    updatePath();
    const rafId = requestAnimationFrame(updatePath);
    const t1 = setTimeout(updatePath, 80);
    const t2 = setTimeout(updatePath, 250);
    const t3 = setTimeout(updatePath, 600);

    if (document.fonts) {
      document.fonts.ready.then(updatePath);
    }

    const observer = new ResizeObserver(updatePath);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    window.addEventListener('resize', updatePath);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
      window.removeEventListener('resize', updatePath);
    };
  }, [stages]);

  return (
    <section id="timeline" className="section section--alt overflow-hidden" aria-labelledby="timeline-title">
      <div className="section-inner">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 id="timeline-title" className="section-title">{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}

        <div ref={containerRef} className="level-track-container relative">
          {/* Decorative Clouds */}
          <div className="absolute top-12 -left-12 md:-left-32 w-32 md:w-64 opacity-60 pointer-events-none z-0 hover:scale-105 transition-transform duration-700">
            <img src="/awan.webp" alt="" className="w-full h-auto drop-shadow-lg" />
          </div>
          <div className="absolute top-1/2 -right-10 md:-right-36 w-28 md:w-56 opacity-50 pointer-events-none z-0 hover:scale-105 transition-transform duration-700">
            <img src="/awan.webp" alt="" className="w-full h-auto scale-x-[-1] drop-shadow-lg" />
          </div>
          <div className="absolute bottom-16 -left-8 md:-left-24 w-36 md:w-72 opacity-70 pointer-events-none z-0 hover:scale-105 transition-transform duration-700">
            <img src="/awan.webp" alt="" className="w-full h-auto drop-shadow-lg" />
          </div>

          {pathD && (
            <svg
              className="absolute inset-0 pointer-events-none w-full h-full hidden md:block overflow-visible"
              style={{ zIndex: 1 }}
              aria-hidden="true"
            >
              {/* Soft ambient atmospheric glow underneath */}
              <path
                d={pathD}
                fill="none"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Glowing dashed arcade zigzag track */}
              <path
                d={pathD}
                fill="none"
                stroke="var(--color-cyan)"
                strokeWidth="2.5"
                strokeDasharray="9 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="timeline-zigzag-glow"
              />
            </svg>
          )}

          <ol className="level-track">
            {stages.map((stage) => (
              <li key={stage.num} className="level-stage">
                <span className="level-num">{stage.num}</span>
                <div className="level-body">
                  <h3>{stage.title}</h3>
                  <p>{stage.desc}</p>
                  <time>{stage.time}</time>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
