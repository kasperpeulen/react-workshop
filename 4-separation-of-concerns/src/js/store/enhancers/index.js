import keyPressControlEnhancer from './enhancer-global-controls';

export default () => {
  return createStore => {
    return (...args) => {
      const store = createStore(...args);
      if (typeof window !== "undefined") {
        // Adds keydown event listener
        // that dispatches actions on global key events
        keyPressControlEnhancer({ store });
      }

      return store;
    };
  };
};
