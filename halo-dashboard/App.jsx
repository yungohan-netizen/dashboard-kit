/* global React, Sidebar, TopBar, StatRow, ChartCard, SidePanel, AccessTable */
const { createRoot } = ReactDOM;

function App() {
  return (
    <div className="app" data-screen-label="Halo Dashboard · Finance">
      <Sidebar/>
      <main className="main">
        <div className="main-panel"><TopBar/></div>
        <StatRow/>
        <div className="chart-row">
          <ChartCard/>
          <SidePanel/>
        </div>
        <AccessTable/>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App/>);
