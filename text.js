/*
<a-assets>
      <a-asset-item id="brush-o" src="Spray_Color_blend.obj"></a-asset-item>
      <a-asset-item id="brush-m" src="Spray_Color_blend.mtl"></a-asset-item>
      <a-asset-item id="muur-o" src="muur_lang.obj"></a-asset-item>
      <a-asset-item id="muur-m" src="muur_lang.mtl"></a-asset-item>
    </a-assets>
    <a-sky src="sky.jpg"></a-sky>


<!--camera and cursor setting-->
    <a-camera id="js--camera" position="0 1.6 6">
      <a-cursor  id="js--cursor" material = ""
      geometry = "primitive: ring; radiusInner: 0.007 ; radiusOuter: 0.015"
      animation__fusing="property: scale; startEvents: fusing; easing: easeInCubic; dur: 500; from: 1 1 1; to: 0.1 0.1 0.1"
      animation__click="property: scale; startEvents: click; easing: easeInCubic; dur: 500; from: 0.1 0.1 0.1; to: 1 1 1"

      ></a-cursor>

    </a-camera>

    




    <!-- WALL 
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.1 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.2 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.3 0 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.4 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.5 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.6 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.7 0 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.8 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.9 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.1 0 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.2 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.3 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.4 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.5 0 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.6 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.7 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.8 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.9 0 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.1 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.2 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.3 0 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.4 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.5 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.6 0 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.7 0 2.5"></a-plane>



    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.1 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.2 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.3 0.1 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.4 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.5 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.6 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.7 0.1 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.8 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.9 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.1 0.1 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.2 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.3 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.4 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.5 0.1 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.6 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.7 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.8 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.9 0.1 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.1 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.2 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.3 0.1 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.4 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.5 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.6 0.1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.7 0.1 2.5"></a-plane>


    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.1 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.2 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.3 0.2 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.4 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.5 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.6 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.7 0.2 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.8 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="0.9 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1  0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.1 0.2 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.2 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.3 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.4 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.5 0.2 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.6 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.7 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.8 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="1.9 0.2 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.1 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.2 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.3 0.2 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.4 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.5 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.6 0.2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="0.1" width="0.1" position="2.7 0.2 2.5"></a-plane>



    -->
   
  


    <a-plane id="canvas" class="js--paint" color="rgb(255, 255, 255)" height="6" width="6" position="1.5 0 2.5"></a-plane>
  


    <a-plane class="js--color" class="js--inkleur" color="rgb(0, 0, 255)" height="1" width="1" position="-2 0 2.5"></a-plane>
    <a-plane class="js--color" class="js--inkleur" color="rgb(0, 255, 0)" height="1" width="1" position="-2 1 2.5"></a-plane>
    <a-plane class="js--color" class="js--inkleur" color="rgb(255, 0, 0)" height="1" width="1" position="-2 2 2.5"></a-plane>
    <a-plane class="js--color" class="js--inkleur" color="rgb(255, 255, 0)" height="1" width="1"position="-2 3 2.5"></a-plane>




<!--
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="2 1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="1 1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="0 1 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="-1 1 2.5"></a-plane>
    <a-plane class="js--color" color="rgb(0, 255, 0)" height="1" width="1" position="-2 1 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="2 2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="1 2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="0 2 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="-1 2 2.5"></a-plane>
    <a-plane class="js--color" color="rgb(255, 0, 0)" height="1" width="1" position="-2 2 2.5"></a-plane>

    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="2 3 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="1 3 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="0 3 2.5"></a-plane>
    <a-plane class="js--paint" color="rgb(255, 255, 255)" height="1" width="1" position="-1 3 2.5"></a-plane>
    <a-plane class="js--color" color="rgb(255, 255, 0)" height="1" width="1"position="-2 3 2.5"></a-plane>

-->    

    <!-- brush -->
    <a-entity class="js--pickup" obj-model="obj: #brush-o; mtl: #brush-m" position="0 2 5  0"
      scale="0.3 0.3 0.3"></a-entity>
      <a-plane static-body position="1 0 -4" rotation="-90 0 0" width="40" height="40"  color="#7BC8A4"></a-plane>


      <!--muren -->

      <!--linksmuur -->

      <a-entity  obj-model="obj: #muur-o; mtl: #muur-m" position="-18 0 18 0" rotation="0 90 0"
      scale="0.3 0.3 0.3"></a-entity>
      <a-entity  obj-model="obj: #muur-o; mtl: #muur-m" position="-18 0 0 0" rotation="0 90 0"
      scale="0.3 0.3 0.3"></a-entity>

      <!--rechtmuur -->

      <a-entity  obj-model="obj: #muur-o; mtl: #muur-m" position="18 0 0 0" rotation="0 90 0"
      scale="0.3 0.3 0.3"></a-entity>
      <a-entity  obj-model="obj: #muur-o; mtl: #muur-m" position="18 0 18 0" rotation="0 90 0"
      scale="0.3 0.3 0.3"></a-entity>

      

      <!--achtermuur -->

      <a-entity  obj-model="obj: #muur-o; mtl: #muur-m" position="20 0 14 0" rotation="0 -180 0"
      scale="0.3 0.3 0.3"></a-entity>
      <a-entity  obj-model="obj: #muur-o; mtl: #muur-m" position="4 0 14 0" rotation="0 -180 0"
      scale="0.3 0.3 0.3"></a-entity>


      <!--voormuur -->

      <a-entity  obj-model="obj: #muur-o; mtl: #muur-m" position="18 0 -22 0" rotation="0 -180 0"
      scale="0.3 0.3 0.3"></a-entity>
      <a-entity  obj-model="obj: #muur-o; mtl: #muur-m" position="4 0 -22 0" rotation="0 -180 0"
      scale="0.3 0.3 0.3"></a-entity>


      

  


    <!--movement-->
    <a-cylinder class="js--place" color="red" radius="1" height="0.1" position="0 0 6"></a-cylinder>
    <a-cylinder class="js--place" color="red" radius="1" height="0.1" position="0 0 -6"></a-cylinder>
    <a-cylinder class="js--place" color="red" radius="1" height="0.1" position="-6 0 0"></a-cylinder>
    <a-cylinder class="js--place" color="red" radius="1" height="0.1" position="6 0 0"></a-cylinder>

    */