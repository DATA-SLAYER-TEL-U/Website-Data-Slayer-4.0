import React from 'react';

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
  return (
    <section id="timeline" className="section section--alt" aria-labelledby="timeline-title">
      <div className="section-inner">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 id="timeline-title" className="section-title">{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}

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
    </section>
  );
};
