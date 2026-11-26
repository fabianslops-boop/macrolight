// Everything the app needs is a static file in public/; the worker only hands requests to them.
export default {
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
