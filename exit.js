AFRAME.registerComponent('exit-handler', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i m here")
        location.href="http://google.com/"
      
      })
    }
  });