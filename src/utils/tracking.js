export function trackEvent(eventType, elementId = null) {

  const event = {
    eventType,
    elementId,
    page: window.location.pathname,
    timestamp: new Date().toISOString()
  };

  const existingEvents =
    JSON.parse(localStorage.getItem("events")) || [];

  existingEvents.push(event);

  localStorage.setItem(
    "events",
    JSON.stringify(existingEvents)
  );

  console.log("Event tracked:", event);
}