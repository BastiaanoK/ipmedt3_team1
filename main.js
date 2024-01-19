window.onload = () => {
  const places = document.getElementsByClassName("js--place");
  const camera = document.getElementById("js--camera");
  const cursor = document.getElementById("js--cursor");
  const spheres = document.getElementsByClassName("js--inkleur");
  const pixels = document.getElementsByClassName("js--pix");


//pickup the brush and hold it
  const pickups = Array.from(document.getElementsByClassName("js--pickup"));
  pickups.forEach((pickup, i) => {
      pickup.addEventListener("click", function (evt) {
        let brush = document.createElement('a-entity');
        brush.setAttribute("obj-model", "obj: #brush-o; mtl: #brush-m");
        brush.setAttribute("position", "1 -1 -1");
        brush.setAttribute("scale", "0.3 0.3 0.3");
        camera.appendChild(brush);
        hold = "Brush";
        pickups.splice(i, 1);
        pickup.remove();
      });
  });

  
  for (let i = 0; i < places.length; i++) {
    places[i].addEventListener("click", function (evt) {
      let att = document.createAttribute("animation");
      att.value = "property: position; easing: linear; dur: 2000; to: " +
        this.getAttribute("position").x + " 1.6 " + this.getAttribute("position").z;
      camera.setAttribute('animation', att.value);
    });
  }

  let color;
  const colorElements = Array.from(document.getElementsByClassName("js--color"));

  for (let colorEl = 0; colorEl < colorElements.length; colorEl++) {
    colorElements[colorEl].addEventListener("click", function (evt) {
          color = this.getAttribute("color");
        });}

  const paintElements = Array.from(document.getElementsByClassName("js--paint"));

  for (let colorEl = 0; colorEl < paintElements.length; colorEl++) {
      paintElements[colorEl].addEventListener("click", function (evt) {
        const currentColor = color;
        const boxColor = this.getAttribute('color');
        this.setAttribute("color", mixingColors(currentColor, boxColor));
  });
  }

  for(let i =0; i < pixels.length; i++){
    //wanner je over een pixels hovert de pixel een event afvuurt.
    pixels[i].onmouseenter = (event) =>{
      pixels[i].setAttribute("color", brush);
    }
  
  }
  list = [];
  for(let i=0; i < spheres.length; i++)
   spheres[i].onmouseenter = (event) => {
     brush = spheres[i].getAttribute("color");
     cursor.setAttribute("color", brush);
   }
 

}





