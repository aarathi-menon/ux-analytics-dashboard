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

export function getMostViewedProducts() {
  const events = getEvents();

  const views = {};

  events.forEach(event => {
    if (event.eventType === "product_view") {
      views[event.elementId] =
        (views[event.elementId] || 0) + 1;
    }
  });

  return Object.entries(views).map(([id, count]) => ({
    id,
    count
  }));
}

export function getMostClickedProducts() {
  const events = getEvents();

  const clicks = {};

  events.forEach(event => {
    if (event.eventType === "product_click") {
      clicks[event.elementId] =
        (clicks[event.elementId] || 0) + 1;
    }
  });

  return Object.entries(clicks).map(([id, count]) => ({
    id,
    count
  }));
}

export function getPageVisits() {
  const events = getEvents();

  const pages = {};

  events.forEach(event => {
    if (event.eventType === "page_visit") {
      pages[event.page] =
        (pages[event.page] || 0) + 1;
    }
  });

  return Object.entries(pages).map(([page, count]) => ({
    page,
    count
  }));
}

export function getUserJourneys() {
  const events = getEvents();

  const sessions = {};

  // Group events by session
  events.forEach(event => {
    if (!sessions[event.sessionId]) {
      sessions[event.sessionId] = [];
    }

    sessions[event.sessionId].push(event.page);
  });

  // Convert into journey strings
  return Object.values(sessions).map(pages => {

    const uniquePages = pages.filter(
      (page, i) => page !== pages[i - 1]
    );

    return {
      journey: uniquePages.join(" → "),
      steps: uniquePages.length
    };
  });
}