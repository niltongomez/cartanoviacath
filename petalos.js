
        const container = document.getElementById("points-container");
       const numPoints = 10;
       
       
       function createPoint() {
           const point = document.createElement("div");
           point.classList.add("point");
           container.appendChild(point);
       
           // Set initial position at the center
           point.style.left = "50%";
           point.style.top = "50%";
       
       
           // Set animation properties
           const animation = point.animate(
               [
                   { transform: "translate(-50%, -50%) rotate(-50deg)" },
                   { transform: "translate(20%, -40%)"}
               ],
               {
                   duration: 2000 + Math.random() * 2000,
                   easing: "linear",
                   iterations: Infinity,
                   direction: "alternate",
               }
           );
       
           return { point, animation };
       }
       
       function startAnimation() {
           for (let i = 0; i < numPoints; i++) {
       
               createPoint();
           }
       }
       
       startAnimation();
       
       
       
       