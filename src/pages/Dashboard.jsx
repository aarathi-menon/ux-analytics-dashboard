import { getEvents, getEventCounts } from "../services/analyticsService";
import MetricCard from "../components/dashboard/MetricCard";
import EventChart from "../components/charts/EventChart";

function Dashboard() {

  const events = getEvents();
  const eventCounts = getEventCounts();

  const totalEvents = events.length;

  return (
    <div>

      <h1>Analytics Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <MetricCard
          title="Total Events"
          value={totalEvents}
        />
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Event Distribution</h2>

        <EventChart data={eventCounts} />
      </div>

    </div>
  );
}

export default Dashboard;