
AFRAME.registerComponent('card-one', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function (evt) {
        console.log("i m here")
      var pos = el.getAttribute('position')
      console.log(pos)
      if( pos.x <= -4 && pos.x >= -6 && pos.z <=14 && pos.z >=12) {
        let boxOne=document.getElementById("boxOne");
        let imageOne=document.getElementById("imageOne");
        let image=document.getElementById("aImage1");
        
        imageOne.classList.add("displayNone");
        console.log(imageOne)
        boxOne.setAttribute('visible','false');
        image.setAttribute('visible','false');
      }
    })
  }
  });