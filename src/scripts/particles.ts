interface GlobalConfigs {
  magnetism: number;
  smoothFactor: number;
  staticity: number;
  color: string;
  alpha: number;
  size: number;
  posX: number;
  posY: number;
  movementX: number;
  movementY: number;
  translateX: number;
  translateY: number;
}
interface IBubble {
  update: () => GlobalConfigs;
}

interface IBubbleParticles {
  start: () => void;
  play: () => void;
  pause: () => void;
  remove: () => void;
}

type bubblesList = IBubble[];

const Bubble = function (
  parentNode: HTMLElement,
  rgbColors: Array<string>
): IBubble {
  let canvasWidth = parentNode.clientWidth;
  let canvasHeight = parentNode.clientHeight;

  //config
  const colors = rgbColors;
  //---

  const globalConfigs = <GlobalConfigs>{
    magnetism: 0,
    smoothFactor: 0,
    staticity: 0,
    color: "",
    alpha: 0,
    size: 0,
    posX: 0,
    posY: 0,
    movementX: 0,
    movementY: 0,
    translateX: 0,
    translateY: 0,
  };

  window.addEventListener("resize", function () {
    canvasWidth = parentNode.clientWidth;
    canvasHeight = parentNode.clientHeight;
  });

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const generateDecimalBetween = function (min: number, max: number): number {
    return parseFloat((Math.random() * (min - max) + max).toFixed(2));
  };

  const randomise = function () {
    const velocity = 30; // Bubble levitation velocity (the higher the slower)
    globalConfigs.magnetism = 0.1 + Math.random() * 4;
    globalConfigs.smoothFactor = 50;
    globalConfigs.staticity = 30;
    globalConfigs.color = colors[Math.floor(Math.random() * colors.length)];
    globalConfigs.alpha = generateDecimalBetween(5, 10) / 10;
    globalConfigs.size = generateDecimalBetween(1, 4);
    globalConfigs.posX = 0;
    globalConfigs.posY = 0;
    globalConfigs.movementX = generateDecimalBetween(-2, 2) / velocity;
    globalConfigs.movementY = generateDecimalBetween(1, 20) / velocity;
    globalConfigs.translateX = generateDecimalBetween(0, canvasWidth);
    globalConfigs.translateY = generateDecimalBetween(0, canvasHeight);
    return globalConfigs;
  };

  const procedures = {
    update: function () {
      globalConfigs.translateX =
        globalConfigs.translateX - globalConfigs.movementX;
      globalConfigs.translateY =
        globalConfigs.translateY - globalConfigs.movementY;

      globalConfigs.posX +=
        (mouseX / (globalConfigs.staticity / globalConfigs.magnetism) -
          globalConfigs.posX) /
        globalConfigs.smoothFactor;
      globalConfigs.posY +=
        (mouseY / (globalConfigs.staticity / globalConfigs.magnetism) -
          globalConfigs.posY) /
        globalConfigs.smoothFactor;

      if (
        globalConfigs.translateY + globalConfigs.posY < 0 ||
        globalConfigs.translateX + globalConfigs.posX < 0 ||
        globalConfigs.translateX + globalConfigs.posX > canvasWidth
      ) {
        randomise();
        globalConfigs.translateY = canvasHeight;
      }
      return globalConfigs;
    },
  };

  randomise();
  return procedures;
};

export const bubbleParticles = function (
  selector: string,
  config = {
    bubbleDensity: 15,
    rgbColors: [
      "150,193,255",
      "68,160,255",
      "76,175,80",
      "243, 244, 255",
      "96, 100, 131",
    ],
  }
): IBubbleParticles {
  const canvas = <HTMLCanvasElement>document.querySelector(selector);
  const ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  const dpr = window.devicePixelRatio;
  const container = <HTMLElement>canvas.parentNode;

  let bubblesList = <bubblesList>[];

  let w = 0;
  let h = 0;
  let play = true;

  const getCanvasSize = function () {
    w = container.offsetWidth;
    h = container.offsetHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(dpr, dpr);
  };

  const generateBubbles = function () {
    for (let i = 0; i < config.bubbleDensity; i++) {
      bubblesList.push(Bubble(container, config.rgbColors));
    }
  };

  const animate = function () {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    bubblesList.forEach(function (bubble: IBubble) {
      const up = bubble.update();
      ctx.translate(up.translateX, up.translateY);
      ctx.beginPath();
      ctx.arc(up.posX, up.posY, up.size, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(" + up.color + "," + up.alpha + ")";
      ctx.fill();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    });

    if (play) {
      requestAnimationFrame(animate.bind(null));
    }
  };

  const procedures = {
    start: () => {
      getCanvasSize();
      window.addEventListener("resize", function () {
        getCanvasSize();
      });

      generateBubbles();
      animate();
    },
    play: () => {
      play = true;
      requestAnimationFrame(animate.bind(null));
    },
    pause: () => {
      play = false;
    },
    remove: () => {
      bubblesList = <bubblesList>[];
      animate();
    },
  };

  return procedures;
};
