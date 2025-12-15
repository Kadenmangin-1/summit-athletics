export default {
  open: true,
  watch: true,
  appIndex: 'index.html',
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },
  esbuildTarget: 'auto',
  middleware: [
    function rewriteIndex(context, next) {
      if (context.url !== '/' && !context.url.includes('.')) {
        context.url = '/index.html';
      }
      return next();
    },
  ],
};
