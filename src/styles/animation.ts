// variants for frame motions
export const arrowAnimate = {
  initial: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
  final: {
    rotate: -180,
    transition: {
      duration: 1,
    },
  },
};

export const subMenuAnimate = {
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

// page variants
export const containerVariantsHome = {
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

export const containerVariantsView = {
  exit: {
    x: "100vw",
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};

// loader variants
export const loaderVariants = {
  start: {
    y: [0, -20],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.4,
      },
    },
  },
};
