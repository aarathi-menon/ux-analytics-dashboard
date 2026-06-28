import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../utils/tracking";
import { EVENT_TYPES } from "../utils/eventTypes";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    trackEvent({
      eventType: EVENT_TYPES.PAGE_VIEW,
      metadata: {
        path: location.pathname
      }
    });
  }, [location]);
}

export default usePageTracking;