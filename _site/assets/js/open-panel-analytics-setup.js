window.op =
  window.op ||
  function (...args) {
    (window.op.q = window.op.q || []).push(args);
  };
window.op("init", {
  clientId: "",
  trackScreenViews: true,
  trackOutgoingLinks: true,
  trackAttributes: true,
});
