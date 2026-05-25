/* global React, Icons, I */

function ChartCard() {
  const pts = [10, 14, 12, 18, 22, 28, 24, 32, 36, 30, 42, 38, 48, 56, 52, 60, 68, 62, 72, 80, 74, 82, 78, 86];
  const max = 96; const W = 720; const H = 220;
  const path = pts.map((p,i)=>`${i?'L':'M'}${(i*(W/(pts.length-1))).toFixed(1)},${(H-p*2).toFixed(1)}`).join(' ');
  const fill = `${path} L${W},${H} L0,${H} Z`;
  // tooltip at 14
  const tipX = 14*(W/(pts.length-1)); const tipY = H - pts[14]*2;
  return (
    <section className="chart-card">
      <div className="chart-head">
        <div>
          <h3>Auto Trades Chart</h3>
          <div className="chart-sub">Chart of your auto-bot trades in last · <span className="chart-pill">📅 14 days</span></div>
        </div>
        <button className="chart-add">{I(Icons.plus, {width:14,height:14})}</button>
      </div>
      <div className="chart-body">
        <svg viewBox={`0 0 ${W} ${H+20}`} preserveAspectRatio="none" className="chart-svg">
          <defs>
            <linearGradient id="trades-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff7a1a" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0"/>
            </linearGradient>
            {[0,1,2,3].map((i)=>(<line key={i} x1="0" y1={H*(i/3)} x2={W} y2={H*(i/3)} stroke="rgba(255,255,255,0.04)" strokeDasharray="2 4"/>))}
          </defs>
          <path d={fill} fill="url(#trades-fill)"/>
          <path d={path} fill="none" stroke="#ff7a1a" strokeWidth="1.75"/>
          <line x1={tipX} y1="0" x2={tipX} y2={H} stroke="rgba(255,255,255,0.18)" strokeDasharray="2 3"/>
          <circle cx={tipX} cy={tipY} r="4" fill="#0a0a0a" stroke="#ff7a1a" strokeWidth="2"/>
          <g transform={`translate(${tipX+10}, ${tipY-32})`}>
            <rect x="0" y="0" width="78" height="26" rx="6" fill="#0a0a0a" stroke="rgba(255,255,255,0.12)"/>
            <text x="10" y="17" fill="#f5f5f5" fontSize="12" fontFamily="Geist Mono, monospace">$3,928.00</text>
          </g>
        </svg>
      </div>
      <div className="chart-foot">
        <div>
          <div className="chart-foot-l">AVG</div>
          <div className="chart-foot-v"><span className="chart-up">+5.29%</span></div>
        </div>
        <div>
          <div className="chart-foot-l">Date</div>
          <div className="chart-foot-v" style={{fontFamily:'var(--font-mono)', fontSize:13}}>01.05.2026 – 14.05.2026</div>
        </div>
      </div>
    </section>
  );
}

function SidePanel() {
  const assets = [
    { name: 'Bitcoin',  ticker: 'BTC',  trend: 'up',   data: [12,18,16,22,28,24,30,38] },
    { name: 'Ethereum', ticker: 'ETH',  trend: 'up',   data: [8,12,14,18,16,22,28,30] },
    { name: 'Serum',    ticker: 'SRM',  trend: 'down', data: [28,24,26,18,22,16,14,12] },
    { name: 'Kadena',   ticker: 'KDA',  trend: 'up',   data: [10,14,12,18,16,22,24,28] },
    { name: 'BNB',      ticker: 'BNB',  trend: 'up',   data: [14,18,22,18,22,26,28,32] },
  ];
  return (
    <aside className="side-panel">
      <div className="sp-head">
        <h3>Assets</h3>
        <div className="sp-sub">Best assets from your portfolio</div>
      </div>
      <div className="sp-list">
        {assets.map((a) => (<AssetRow key={a.ticker} {...a}/>))}
      </div>
      <div className="sp-foot">
        <div className="sp-foot-l">AVG</div>
        <div className="sp-foot-v sp-up">+5.29%</div>
      </div>
    </aside>
  );
}

function AssetRow({name, ticker, trend, data}) {
  const max = 40;
  const path = data.map((p,i)=>`${i?'L':'M'}${(i*(80/(data.length-1))).toFixed(1)},${(max-p).toFixed(1)}`).join(' ');
  const color = trend === 'up' ? '#ffb46a' : '#e85f00';
  return (
    <div className="ar-row">
      <div className="ar-ico" data-t={ticker[0]}>{ticker[0]}</div>
      <div className="ar-name">
        <div className="ar-n">{name}</div>
        <div className="ar-t">{ticker}</div>
      </div>
      <svg viewBox={`0 0 80 ${max}`} preserveAspectRatio="none" className="ar-spark">
        <path d={path} fill="none" stroke={color} strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

function AccessTable() {
  const rows = [
    { name: 'Bitcoin',  ticker: 'BTC',  share: '24.5%', balance: '$42,180.10', tx: 142, status: 'active'   },
    { name: 'Ethereum', ticker: 'ETH',  share: '18.2%', balance: '$31,492.00', tx: 98,  status: 'active'   },
    { name: 'Solana',   ticker: 'SOL',  share: '11.8%', balance: '$20,318.20', tx: 76,  status: 'paused'   },
    { name: 'Cosmos',   ticker: 'ATOM', share: ' 9.4%', balance: '$16,212.55', tx: 41,  status: 'active'   },
    { name: 'Kadena',   ticker: 'KDA',  share: ' 6.1%', balance: '$10,548.18', tx: 27,  status: 'review'   },
  ];
  return (
    <section className="access">
      <div className="access-head">
        <div>
          <h3>Access list</h3>
          <div className="access-sub">List of assets from your portfolio</div>
        </div>
        <div className="access-tools">
          <button className="t-btn">{I(Icons.search,{width:14,height:14})}</button>
          <button className="t-btn">{I(Icons.plus,{width:14,height:14})}</button>
        </div>
      </div>
      <table>
        <thead><tr>
          <th>Asset</th><th>Share</th><th>Balance</th><th>Transactions</th><th>Status</th><th></th>
        </tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.ticker}>
              <td><div className="ar-row" style={{padding:0}}><div className="ar-ico">{r.ticker[0]}</div><div className="ar-name"><div className="ar-n">{r.name}</div><div className="ar-t">{r.ticker}</div></div></div></td>
              <td className="mono">{r.share}</td>
              <td className="mono">{r.balance}</td>
              <td className="mono">{r.tx}</td>
              <td><span className={`tag tag-${r.status}`}>{r.status}</span></td>
              <td>{I(Icons.arrowUR, {width:14, height:14, style:{color:'var(--fg-3)'}})}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

Object.assign(window, { ChartCard, SidePanel, AccessTable });
