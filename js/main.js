(function () {
  new Vue({
    el: '#main',
    data: {
      isOpen: false
    },
    methods: {
      openBox: function () {
        this.isOpen = true;
      }
    }
  });
})(Vue);