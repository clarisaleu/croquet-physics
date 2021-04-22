/* global AFRAME, Croquet, Q */

AFRAME.registerComponent("croquet", {
  // https://aframe.io/docs/1.2.0/core/component.html#init
  init: function() {
    console.log(`Entity with "croquet" attribute added to scene`);
    this.system.addEntity(this.el);
  },

  // https://aframe.io/docs/1.2.0/core/component.html#remove
  remove: function() {
    console.log(`Entity with "croquet" attribute removed from scene`);
    this.system.removeEntity(this.el);
  },  
    log(string, ...etc) {
    if (!Q.LOGGING.component) return;
    
    console.groupCollapsed(`[Component] ${string}`, ...etc);
    console.trace(); // hidden in collapsed group
    console.groupEnd();
  }
});