const Singleton = (function() {
  let instance;
  function createInstance() {
    const object = new String("Object instance!!!");
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

//console.log(instance);
console.log(instanceA === instanceB);
