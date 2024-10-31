const gsap = window.gsap;

const spiderman = document.querySelector("#spider");
const strange = document.querySelector("#strange");
const wanda = document.querySelector("#wanda");

const shape = document.querySelector(".shape");

// array of elements
const characters = [spiderman, strange, wanda];

(async () => {
  const distance1 = 10;
  const distance2 = 200;
  let currDist;

  const rotation = 180;

  // =====================================================

  // event listener --  spiderman rotate
  shape.addEventListener("click", (evt) => {
    evt.preventDefault();

    const currRotation = gsap.getProperty(spiderman, "rotation");
    const newRotation = currRotation + rotation;

    gsap.to(spiderman, {
      rotation: newRotation,
      duration: 2,
      onComplete: () => {
        gsap.to(spiderman, {
            rotation: currRotation,
            duration: 2,
        });
      },
    });
  });

  // =====================================================

  // event listener -- dr strange circle path
  strange.addEventListener("click", (evt) => {
    evt.preventDefault();
    const radius = 80; // rasdius for circle path
    const duration = 2;
    // (originally at 0,0)

    gsap.to(strange, {
      // go right (80, 0)
      x: radius,
      y: 0,
      duration: duration / 4,
      // then ...
      onComplete: () => {
        gsap.to(strange, {
          // go to (0, 80)
          x: 0,
          y: radius,
          duration: duration / 4,
          // then ...
          onComplete: () => {
            gsap.to(strange, {
              // go to (0, 80)
              x: 0,
              y: 0,
              duration: duration / 4,
            });
          },
        });
      },
    });
  });

  // =====================================================

  // event listener -- wanda vertical
  wanda.addEventListener("click", (evt) => {
    evt.preventDefault();

    const distance = 100;
    const duration = 1;

    gsap.to(wanda, {
      // up
      y: -distance,
      duration: duration,
      onComplete: () => {
        gsap.to(wanda, {
          // down
          y: distance,
          duration: 2 * duration,
          onComplete: () => {
            gsap.to(wanda, {
              // center
              y: 0,
              duration: duration,
            });
          },
        });
      },
    });
  });

  // =====================================================

  // event listener -- spacebar = all 3
  window.addEventListener("keydown", (evt) => {
    if (evt.code === "Space") {
      evt.preventDefault(); 
      characters.forEach((char) => {
        gsap.to(char, {
          scale: 1.5, // zoom
          duration: 0.5,
          yoyo: true, // orginal size
          repeat: 1 // only repeat 1 time
        });
      });
    }
  });
})();

// click each to do something
// space = all of them do something...
