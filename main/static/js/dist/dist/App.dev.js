"use strict";

exports.__esModule = true;

require("./App");

var Note_1 = require("./components/Note");

var SelectedWorks_1 = require("./components/SelectedWorks");

var Prism_1 = require("./components/Prism");

var Plane_1 = require("./components/Plane");

var Shooter_1 = require("./components/Shooter");

var Scrollbar_1 = require("./components/Scrollbar");

var Cursor_1 = require("./components/Cursor");

var Link_1 = require("./components/Link");

var CursorWrapper_1 = require("./components/CursorWrapper");

var CursorContext_1 = require("./components/CursorContext");

var react_lenis_1 = require("@studio-freight/react-lenis");

var framer_motion_1 = require("framer-motion");

var react_1 = require("react");

var LoadingScreen_1 = require("./components/LoadingScreen");

function App() {
  var experienceRef = react_1.useRef(null);
  var expIsInView = framer_motion_1.useInView(experienceRef, {
    once: true
  });
  var imgRef = react_1.useRef(null);
  var imgIsInView = framer_motion_1.useInView(imgRef);

  var _a = react_1.useState(false),
      loadingComplete = _a[0],
      setLoadingComplete = _a[1];

  react_1.useEffect(function () {
    if (!loadingComplete) {
      document.body.setAttribute('data-lenis-prevent', 'true');
    } else {
      document.body.removeAttribute('data-lenis-prevent');
    }

    document.body.style.overflow = loadingComplete ? 'visible' : 'hidden';
  }, [loadingComplete]);

  var handleLoadingComplete = function handleLoadingComplete() {
    setLoadingComplete(true);
  };

  return React.createElement(CursorContext_1.CursorProvider, null, React.createElement(react_lenis_1.ReactLenis, {
    root: true
  }, React.createElement(CursorWrapper_1["default"], null, !loadingComplete && React.createElement(LoadingScreen_1["default"], {
    onComplete: handleLoadingComplete
  }), React.createElement("div", {
    id: 'hero',
    className: 'container relative uppercase'
  }, React.createElement(framer_motion_1.motion.h1, {
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1]
    },
    initial: {
      x: -200,
      opacity: 0
    },
    animate: loadingComplete ? {
      x: 0,
      opacity: 1
    } : {},
    className: 'absolute z-10'
  }, "Frontend developer"), React.createElement("h1", {
    className: 'absolute z-10'
  }, React.createElement(framer_motion_1.motion.span, {
    className: 'block',
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .2
    },
    initial: {
      x: -100,
      opacity: 0
    },
    animate: loadingComplete ? {
      x: 0,
      opacity: 1
    } : {}
  }, "specializing in"), React.createElement(framer_motion_1.motion.span, {
    className: 'block',
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .3
    },
    initial: {
      x: -100,
      opacity: 0
    },
    animate: loadingComplete ? {
      x: 0,
      opacity: 1
    } : {}
  }, "interactive web"), React.createElement(framer_motion_1.motion.span, {
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .4
    },
    initial: {
      x: -100,
      opacity: 0
    },
    animate: loadingComplete ? {
      x: 0,
      opacity: 1
    } : {},
    className: 'block'
  }, "experiences")), React.createElement(framer_motion_1.motion.h1, {
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .6
    },
    initial: {
      y: 100,
      opacity: 0
    },
    animate: loadingComplete ? {
      y: 0,
      opacity: 1
    } : {},
    className: 'absolute z-10'
  }, "for tech and"), React.createElement(framer_motion_1.motion.h1, {
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .7
    },
    initial: {
      y: 100,
      opacity: 0
    },
    animate: loadingComplete ? {
      y: 0,
      opacity: 1
    } : {},
    className: 'absolute z-10'
  }, "creative teams"), React.createElement(Note_1["default"], {
    text: 'Currently seeking new opportunities',
    typingAnimation: true,
    delayOffset: 1,
    loadingComplete: loadingComplete
  }), React.createElement(Prism_1["default"], {
    sizeInVW: 45,
    shape: 'box',
    delay: .5,
    id: 'prism-1',
    loadingComplete: loadingComplete
  }), React.createElement(Prism_1["default"], {
    sizeInVW: 21,
    shape: 'triangle',
    delay: 1.25,
    id: 'prism-2',
    loadingComplete: loadingComplete
  })), React.createElement("div", {
    id: 'experience',
    className: 'uppercase w-full relative'
  }, React.createElement("div", {
    className: 'container text relative border-top-accent'
  }, React.createElement(framer_motion_1.motion.h2, {
    transition: {
      duration: 1,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .2
    },
    initial: {
      x: -100,
      opacity: 0
    },
    animate: loadingComplete && expIsInView ? {
      x: 0,
      opacity: 1
    } : {}
  }, "Professional experience"), React.createElement(framer_motion_1.motion.h1, {
    transition: {
      duration: 2,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .3
    },
    initial: {
      y: 10,
      opacity: 0
    },
    animate: loadingComplete && expIsInView ? {
      y: 0,
      opacity: 1
    } : {}
  }, "VMWare 2020\u20132024"), React.createElement(framer_motion_1.motion.h1, {
    ref: experienceRef,
    transition: {
      duration: 2,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .4
    },
    initial: {
      y: 10,
      opacity: 0
    },
    animate: loadingComplete && expIsInView ? {
      y: 0,
      opacity: 1
    } : {}
  }, "Pivotal 2018\u20132020"), React.createElement(Note_1["default"], {
    text: 'At VMware & Pivotal, I designed and developed web applications that achieved hundreds of thousands of impressions, enhancing brand awareness and bolstering customer acquisition. From mockup to launch, I ensured all code adhered to the highest standards of performance, responsiveness & accessibility while emphasizing a unique user experiences.',
    typingAnimation: false,
    delayOffset: .5,
    loadingComplete: loadingComplete
  })), React.createElement(Plane_1["default"], null)), React.createElement(SelectedWorks_1["default"], null), React.createElement("div", {
    id: 'skills',
    className: 'uppercase'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement(Shooter_1["default"], null))), React.createElement("div", {
    id: 'contact',
    className: 'uppercase'
  }, React.createElement("div", {
    className: 'container flex justify-end relative border-top-accent'
  }, React.createElement(Prism_1["default"], {
    sizeInVW: 70,
    shape: 'sphere',
    delay: 0,
    id: 'prism-3',
    loadingComplete: loadingComplete
  }), React.createElement("div", {
    className: 'black-block absolute'
  }), React.createElement(framer_motion_1.motion.div, {
    transition: {
      duration: .5,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .5
    },
    initial: {
      scaleY: 0
    },
    animate: imgIsInView ? {
      scaleY: 1
    } : {},
    className: 'green-block-1 absolute'
  }), React.createElement(framer_motion_1.motion.div, {
    transition: {
      duration: .5,
      ease: [0.075, 0.82, 0.165, 1],
      delay: .65
    },
    initial: {
      scaleY: 0
    },
    animate: imgIsInView ? {
      scaleY: 1
    } : {},
    className: 'green-block-2 absolute'
  }), React.createElement(framer_motion_1.motion.h1, {
    transition: {
      duration: .5,
      ease: [0.075, 0.82, 0.165, 1],
      delay: imgIsInView ? .5 : 0
    },
    initial: {
      scaleY: 0
    },
    animate: imgIsInView ? {
      scaleY: 1
    } : {},
    className: 'absolute part-1 z-10'
  }, "+ Let's work"), React.createElement(framer_motion_1.motion.h1, {
    transition: {
      duration: .5,
      ease: [0.075, 0.82, 0.165, 1],
      delay: imgIsInView ? .65 : 0
    },
    initial: {
      scaleY: 0
    },
    animate: imgIsInView ? {
      scaleY: 1
    } : {},
    className: 'absolute part-2 z-10'
  }, "together"), React.createElement(framer_motion_1.motion.div, {
    transition: {
      duration: .5,
      ease: [0.075, 0.82, 0.165, 1],
      delay: imgIsInView ? .8 : 0
    },
    initial: {
      scaleY: 0
    },
    animate: imgIsInView ? {
      scaleY: 1
    } : {},
    className: 'linkedin absolute z-10 select-none'
  }, React.createElement(Link_1["default"], {
    url: '#',
    text: 'Connect on LinkedIn',
    isCTA: false
  })), React.createElement(framer_motion_1.motion.div, {
    transition: {
      duration: .5,
      ease: [0.075, 0.82, 0.165, 1],
      delay: imgIsInView ? 1.1 : 0
    },
    initial: {
      x: 100,
      opacity: 0
    },
    animate: imgIsInView ? {
      x: 0,
      opacity: 1
    } : {},
    className: 'cta absolute right-0'
  }, React.createElement(Link_1["default"], {
    url: '',
    text: '',
    isCTA: true
  })), React.createElement("div", {
    ref: imgRef,
    className: 'img-container z-10 relative overflow-hidden'
  }, React.createElement("img", {
    className: '',
    src: '/images/headshot.webp',
    alt: ''
  }), React.createElement(framer_motion_1.motion.img, {
    ref: imgRef,
    transition: {
      duration: .5,
      ease: [0.075, 0.82, 0.165, 1],
      delay: imgIsInView ? 1 : 0
    },
    initial: {
      opacity: 1
    },
    animate: imgIsInView ? {
      opacity: 0
    } : {},
    className: 'absolute top-0 left-0',
    src: '/images/dither-headshot.png',
    alt: ''
  })))), React.createElement(Scrollbar_1["default"], null), React.createElement(Cursor_1["default"], null))));
}

exports["default"] = App;