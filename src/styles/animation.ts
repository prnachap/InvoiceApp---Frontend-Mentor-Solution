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

// form animation variants
export const formVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
  },
};

// Modal variants
export const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.5,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};
