export const pathLeft = {
  initial: {
    x: 0,
  },
  animate: {
    x: -20,
    transition: {
      duration: 0.4,
      delay: 1,
    },
  },
};

export const pathRight = {
  initial: {
    x: 0,
  },
  animate: {
    x: 20,
    transition: {
      duration: 0.3,
      delay: 1,
    },
  },
};

export const floatingDivVariants = {
  opening: {
    y: ["-100%", "0%", "100%"],
    transition: {
      duration: 1,
      times: [0, 0.5, 1],
    },
  },
  closing: {
    y: ["100%", "0%", "-100%"],
    transition: {
      duration: 1,
      times: [0, 0.5, 1],
    },
  },
};

export const sidebarBarVariants = {
  start: {
    transition: {
      staggerChildren: 0.5
    }
  }
}

export const sidebarTextVariants = {
  start: {
    y: 100
  },
  end: {
    y: 0,
    transition: {
      duration: 1,
      delay: 0.4
    },
    
  }
}
export const sidebarLineVariants = {
    start: {
      width: 0
    },
    end: {
      width: '100%'
    }
}
