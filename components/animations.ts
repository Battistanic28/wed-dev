import { gsap } from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { CustomEase } from 'gsap/CustomEase';
import { RoughEase, ExpoScaleEase, SlowMo } from 'gsap/EasePack';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { EaselPlugin } from 'gsap/EaselPlugin';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// import { SplitText } from 'gsap-trial/SplitText';

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase,
  // SplitText,
);

// export const animateHeroText = () => {
//   const split = new SplitText('#heroText', { type: 'chars' });

//   gsap.from(split.chars, {
//     duration: 0.2,
//     // y: 100,
//     stagger: {
//       from: 'random',
//       each: 0.05,
//       ease: 'none',
//     },
//     autoAlpha: 0,
//   });

//   gsap.from(split.chars[4], {
//     duration: 0.5,
//     rotate: 1,
//     repeat: -1,
//     yoyo: true,
//   });

//   gsap.from(split.chars[split.chars.length - 1], {
//     duration: 0.5,
//     y: 1,
//     repeat: -1,
//     yoyo: true,
//   });
// };

export const animatePageIn = () => {
  const transitionElement = document.getElementById('transition-element');

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      xPercent: 0,
    })
      .to(transitionElement, {
        xPercent: 100,
        duration: 0.8,
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: '50vh',
          borderBottomLeftRadius: '50vh',
          duration: 0.4,
        },
        '<',
      );
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById('transition-element');

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      xPercent: -100,
      borderTopRightRadius: '50vh',
      borderBottomRightRadius: '50vh',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    })
      .to(animationWrapper, {
        xPercent: 0,
        duration: 0.8,
        onComplete: () => {
          router.push(href);
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
          duration: 0.4,
        },
        '<',
      );
  }
};
