import gsap from "gsap";

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTraget,
  secondTraget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power1.inOut",
  });

  timeline.to(
    firstTraget,
    {
      ...animationProps,
      ease: "power1.inOut",
    },
    "<"
  );

  timeline.to(
    secondTraget,
    {
      ...animationProps,
      ease: "power1.inOut",
    },
    "<"
  );
};

export const animationWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
