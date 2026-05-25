/* global React */
const { useState } = React;

function I(d, props={}) { // icon helper
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {d}
    </svg>
  );
}
const Icons = {
  home: <><path d="M3 12L12 3l9 9"/><path d="M5 10v10h14V10"/></>,
  bars: <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-7"/></>,
  db: <><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
  files: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></>,
  msg: <><path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z"/></>,
  group: <><circle cx="9" cy="8" r="4"/><path d="M3 21a6 6 0 0112 0M16 4a4 4 0 010 8M22 21a6 6 0 00-6-6"/></>,
  settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.6 1.7 1.7 0 00-1.8.3l-.1.1A2 2 0 014 16.9l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></>,
  bell: <><path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 004 0"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  expand: <><path d="M14 4h6v6"/><path d="M4 14v6h6"/><path d="M20 4l-8 8M4 20l8-8"/></>,
  arrowUR: <><path d="M7 17L17 7M9 7h8v8"/></>,
};

function Sidebar() {
  const items = [
    {icon: 'home', label: 'Home Page'},
    {icon: 'bars', label: 'Dashboard', badge: 3, active: true},
    {icon: 'db',   label: 'Database'},
    {icon: 'files',label: 'Files', expand: true},
  ];
  const files = ['pricing_2026.pdf', 'publish.docx', 'summary.pdf', 'whop.pdf'];
  const account = [
    {icon: 'msg', label: 'Messages'},
    {icon: 'group', label: 'Groups'},
    {icon: 'settings', label: 'Settings'},
    {icon: 'user', label: 'My Account'},
  ];
  return (
    <aside className="sidebar">
      <div className="sb-brand">
        <div className="sb-mark">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8" stroke="#f5f5f5" strokeWidth="1.6"/>
            <circle cx="12" cy="12" r="2" fill="#f5f5f5"/>
          </svg>
        </div>
        <div>
          <div className="sb-brand-n">Halo <em>Studio</em></div>
          <div className="sb-brand-s">Finance Panel</div>
        </div>
      </div>

      <div className="sb-search">
        {I(Icons.search, {width: 14, height: 14})}
        <span>Search</span>
        <span className="sb-kbd">⌘S</span>
      </div>

      <div className="sb-section">General</div>
      <div className="sb-list">
        {items.map((it) => (
          <a key={it.label} className={`sb-item ${it.active ? 'is-active' : ''}`}>
            {I(Icons[it.icon], {width: 16, height: 16})}
            <span>{it.label}</span>
            {it.badge && <span className="sb-badge">●{it.badge}</span>}
            {it.expand && I(Icons.plus, {width: 12, height: 12, style: {marginLeft:'auto', opacity:0.5}})}
          </a>
        ))}
        <div className="sb-files">
          {files.map((f) => (<a key={f} className="sb-file">{f}</a>))}
        </div>
      </div>

      <div className="sb-section">Account</div>
      <div className="sb-list">
        {account.map((it) => (
          <a key={it.label} className="sb-item">
            {I(Icons[it.icon], {width: 16, height: 16})}
            <span>{it.label}</span>
          </a>
        ))}
      </div>

      <div className="sb-plan">
        <svg className="sb-plan-arc" viewBox="0 0 80 40" width="100%">
          <path d="M4 36 A36 36 0 0 1 76 36" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6"/>
          <path d="M4 36 A36 36 0 0 1 76 36" fill="none" stroke="#ff7a1a" strokeWidth="6" strokeLinecap="round" strokeDasharray="113 200"/>
        </svg>
        <div className="sb-plan-n">480 / 500</div>
        <div className="sb-plan-s">20 Auto Trades Left — <a>Be Pro</a></div>
      </div>
    </aside>
  );
}

Object.assign(window, { Sidebar, Icons, I });
