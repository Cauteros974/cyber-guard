import './AttackMap.css';

const GEO = {
    MY_SERVER: { x: 420, y: 180 },
    MOSCOW: { x: 480, y: 130 },
    BEIJING: { x: 640, y: 170 },
    NY: { x: 240, y: 160 },
    BRAZIL: { x: 290, y: 280 },
    SYDNEY: { x: 720, y: 320 },
};

const activeAttacks = [
    { id: 1, from: GEO.MOSCOW, to: GEO.MY_SERVER, type: 'critical' },
    { id: 2, from: GEO.BEIJING, to: GEO.MY_SERVER, type: 'critical' },
    { id: 3, from: GEO.BRAZIL, to: GEO.NY, type: 'high' },
    { id: 4, from: GEO.SYDNEY, to: GEO.BEIJING, type: 'medium' },
];

const worldPath = "M 240,160 Q 200,100 150,120 Q 100,140 80,180 Q 60,220 100,280 Q 140,340 200,320 Q 260,300 280,240 Q 300,180 240,160 M 420,180 Q 380,120 330,140 Q 280,160 300,220 Q 320,280 380,300 Q 440,320 480,260 Q 520,200 420,180 M 640,170 Q 600,110 550,130 Q 500,150 520,210 Q 540,270 600,290 Q 660,310 700,250 Q 740,190 640,170 M 720,320 Q 700,300 740,280 Q 780,260 790,300 Q 800,340 760,360 Q 720,380 720,320 Z";


export const AttackMap = () => {
  return (
    <div className="chart-card map-card">
      <h3 className="chart-title">Live Global Threat Vectors</h3>
      <div className="map-container">
        <svg className="world-map" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <path d={worldPath} className="world-path" />
          
          <circle cx={GEO.MY_SERVER.x} cy={GEO.MY_SERVER.y} r="6" className="target-dot" />
          
          <circle cx={GEO.MY_SERVER.x} cy={GEO.MY_SERVER.y} r="10" className="impact-ripple" style={{ animationDelay: '0s' }} />
          <circle cx={GEO.MY_SERVER.x} cy={GEO.MY_SERVER.y} r="10" className="impact-ripple" style={{ animationDelay: '1s' }} />
          
          {activeAttacks.map((attack) => (
            <g key={attack.id}>
              <path 
                d={`M ${attack.from.x},${attack.from.y} Q ${(attack.from.x + attack.to.x)/2},${(attack.from.y + attack.to.y)/2 - 50} ${attack.to.x},${attack.to.y}`}
                className={`attack-line ${attack.type}`}
              />
              <circle cx={attack.from.x} cy={attack.from.y} r="4" className="source-dot" fill={attack.type === 'critical' ? 'var(--critical)' : 'var(--high)'} />
            </g>
          ))}
        </svg>
      </div>
      <div style={{ position: 'absolute', bottom: '16px', left: '24px', display: 'flex', gap: '16px', fontSize: '12px', color: 'var(--custom-prop)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--critical)' }}></span> Critical Vector</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }}></span> Protected Asset</div>
      </div>
    </div>
  );
};