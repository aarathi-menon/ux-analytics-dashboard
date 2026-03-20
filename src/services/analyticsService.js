export function getEvents() {
  return JSON.parse(localStorage.getItem("events")) || [];
}

export function getEventCounts() {
  const events = getEvents();

  const counts = {};

  events.forEach(event => {
    counts[event.eventType] =
      (counts[event.eventType] || 0) + 1;
  });

  return Object.entries(counts).map(([type, count]) => ({
    type,
    count
  }));
}