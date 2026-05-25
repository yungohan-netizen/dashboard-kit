/* global React, Icons, I */
const { useState: useState_, useEffect: useEffect_ } = React;

function TopBar() {
  return (
    <header className="topbar">
      <div className="tb-l">
        <div className="tb-ico">
          <svg viewBox="0 0 24 24" fill="none" stroke="#ff7a1a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
            <path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-7"/>
          </svg>
        </div>
        <div>
          <div className="tb-greet">
            <span>Dashboard</span>
            <span className="tb-dot">●3</span>
          </div>
          <div className="tb-sub">Track and learn about your assets</div>
        </div>
      </div>
      <div className="tb-r">
        <button className="tb-icon" title="Notifications">{I(Icons.bell, {width: 18, height: 18})}<span className="tb-pip"></span></button>
        <button className="tb-icon" title="Expand">{I(Icons.expand, {width: 18, height: 18})}</button>
        <div className="tb-profile">
          <div className="tb-avatar"></div>
          <div className="tb-profile-x">
            <div className="tb-profile-n">Daniel Potter</div>
            <div className="tb-profile-e">daniel@halo.studio</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function StatRow() {
  const cards = [
    { label: 'Gross Revenue', sub: 'Your revenue from last month', value: '$171,610.25', delta: '+5.29%', tone: 'up' },
    { label: 'Auto Trades',   sub: 'Amount of bot-trades',         value: '3,612',         delta: '+1,259', tone: 'warm' },
    { label: 'New Assets',    sub: 'New assets in your portfolio', value: '53',            delta: '+21',    tone: 'hot' },
  ];
  return (
    <section className="stats">
      <div className="stats-head">
        <h2 className="stats-h">Overview</h2>
        <button className="stats-range">7 days <svg width="10" height="10" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M6 9l6 6 6-6"/></svg></button>
        <div className="stats-tools">
          <button className="t-btn">{I(Icons.expand, {width:14,height:14})}</button>
          <button className="t-btn">⋯</button>
        </div>
      </div>
      <div className="stat-grid">
        {cards.map((c) => (
          <div key={c.label} className={`stat-card tone-${c.tone}`}>
            <div className="stat-label">{c.label}</div>
            <div className="stat-sub">{c.sub}</div>
            <div className="stat-value">{c.value}</div>
            <div className="stat-delta">↗ {c.delta} <span className="stat-from">From last month</span></div>
            <StatSpark tone={c.tone}/>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatSpark({tone}) {
  const colors = { up: '#ffb46a', warm: '#ff9a4a', hot: '#ff7a1a' };
  const pts = tone === 'up'   ? [8,12,9,16,14,22,20,26,22,30,28,36]
             : tone === 'warm'? [22,18,24,20,26,24,28,30,26,32,38,42]
             :                  [12,18,16,22,28,24,30,38,32,40,46,52];
  const max = 56;
  return (
    <svg className="stat-spark" viewBox="0 0 200 56" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sf-${tone}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={colors[tone]} stopOpacity="0.45"/>
          <stop offset="100%" stopColor={colors[tone]} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={`M0,${max-pts[0]} ${pts.map((p,i)=>`L${(i*(200/(pts.length-1))).toFixed(1)},${(max-p).toFixed(1)}`).join(' ')} L200,${max} L0,${max} Z`} fill={`url(#sf-${tone})`}/>
      <path d={`M0,${max-pts[0]} ${pts.map((p,i)=>`L${(i*(200/(pts.length-1))).toFixed(1)},${(max-p).toFixed(1)}`).join(' ')}`} fill="none" stroke={colors[tone]} strokeWidth="1.5"/>
    </svg>
  );
}

Object.assign(window, { TopBar, StatRow });
