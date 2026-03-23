import {
  getEvents,
  getEventCounts,
  getMostViewedProducts,
  getMostClickedProducts,
  getPageVisits
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

  return (
    <div>

      <h1>Analytics Dashboard</h1>

      {/* Metrics */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <MetricCard title="Total Events" value={totalEvents} />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Event Distribution */}
        <div style={{ marginTop: "40px" }}>
          <h2>Event Distribution</h2>
          <EventChart data={eventCounts} />
        </div>

        {/* Page Visits */}
        <div style={{ marginTop: "40px" }}>
          <h2>Page Visits</h2>
          <EventChart data={pageVisits} xKey="page" />
        </div>

        {/* Most Viewed Products */}
        <div style={{ marginTop: "40px" }}>
          <h2>Most Viewed Products</h2>
          <EventChart data={mostViewed} xKey="id" />
        </div>

        {/* Most Clicked Products */}
        <div style={{ marginTop: "40px" }}>
          <h2>Most Clicked Products</h2>
          <EventChart data={mostClicked} xKey="id" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;