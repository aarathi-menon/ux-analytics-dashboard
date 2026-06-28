// ======================================
// Session Management
// ======================================

function getSessionId() {
  let sessionId = localStorage.getItem("sessionId");

  if (!sessionId) {
    sessionId = `session_${Date.now()}`;
    localStorage.setItem("sessionId", sessionId);
  }

  return sessionId;
}

// ======================================
// Event Storage
// ======================================

function getStoredEvents() {
  return JSON.parse(localStorage.getItem("events")) || [];
}

function saveEvent(event) {
  const events = getStoredEvents();
  events.push(event);

  localStorage.setItem("events", JSON.stringify(events));
}

// ======================================
// Event Tracking
// ======================================

export function trackEvent({
  eventType,
  elementId = null,
  metadata = {},
}) {
  const event = {
    sessionId: getSessionId(),

    eventType,

    page: window.location.pathname,

    elementId,

    metadata,

    device: {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    },

    timestamp: new Date().toISOString(),
  };

  saveEvent(event);

  console.log("📊 Event Tracked:", event);
}

// ======================================
// Analytics Utilities
// ======================================

export function clearAnalyticsData() {
  localStorage.removeItem("events");
}

export function clearSession() {
  localStorage.removeItem("sessionId");
}

export function getTrackedEvents() {
  return getStoredEvents();
}