import {
  getEvents,
  getEventCounts,
  getMostViewedProducts,
  getMostClickedProducts,
  getPageVisits,
  getUserJourneys
} from "../services/analyticsService";
import MetricCard from "../components/dashboard/MetricCard";
import EventChart from "../components/charts/EventChart";

function Dashboard() {

  const events = getEvents();
  const totalEvents = events.length;
  const eventCounts = getEventCounts();
  const mostViewed = getMostViewedProducts();
  const mostClicked = getMostClickedProducts();
  const pageVisits = getPageVisits();
  const journeys = getUserJourneys();

  function resetSession() {
    localStorage.removeItem("sessionId");
    window.location.reload();
  }

  return (
  <div>

    <div className="dashboard-header">
      <h1>Analytics Dashboard</h1>

      <div>
        <button
          className="button-primary"
          onClick={clearAnalytics}
        >
          Clear Data
        </button>

        <button
          className="button-primary"
          onClick={resetSession}
          style={{ marginLeft: "10px" }}
        >
          New Session
        </button>
      </div>
    </div>

    {/* Metrics */}
    <div className="dashboard-grid" style={{ marginTop: "20px" }}>
      <MetricCard title="Total Events" value={totalEvents} />
      <MetricCard title="Total Sessions" value={journeys.length} />
    </div>

    {/* Charts */}
    <div className="section">
      <h2>Event Distribution</h2>
      <div className="chart-container">
        <EventChart data={eventCounts} />
      </div>
    </div>

    <div className="section">
      <h2>Page Visits</h2>
      <div className="chart-container">
        <EventChart data={pageVisits} xKey="page" />
      </div>
    </div>

    <div className="section">
      <h2>Product Engagement</h2>

      <div className="dashboard-grid">
        <div className="chart-container">
          <h3>Most Viewed</h3>
          <EventChart data={mostViewed} xKey="id" />
        </div>

        <div className="chart-container">
          <h3>Most Clicked</h3>
          <EventChart data={mostClicked} xKey="id" />
        </div>
      </div>
    </div>

    {/* User Journeys */}
    <div className="section">
      <h2>User Journeys</h2>

      {journeys.map((j, index) => (
        <div
          key={index}
          className="card"
          style={{ marginBottom: "10px" }}
        >
          <p>{j.journey}</p>
        </div>
      ))}
    </div>

  </div>
);
}

export default Dashboard;