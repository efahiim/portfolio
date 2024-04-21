import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor: React.FunctionComponent = () => {
  const mouseRef = useRef({
    x: 0,
    y: 0,
  });
  const delayedOuterCircleRef = useRef({
    outerX: 0,
    outerY: 0,
  });
  const delayedInnerCircleRef = useRef({
    innerX: 0,
    innerY: 0,
  });
  const outerCircleRef = useRef();
  const innerCircleRef = useRef();

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);

  const outerSize = isHovering || isClicking ? 35 : 25;
  const innerSize = isHovering ? 25 : 10;

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  const handleMouseMove = (event: MouseEvent): void => {
    const { clientX, clientY } = event;

    mouseRef.current = {
      x: clientX,
      y: clientY,
    };
  };

  const moveOuterCircle = (x: number, y: number): void => {
    gsap.set(outerCircleRef.current as unknown as gsap.TweenTarget, {
      x,
      y,
      xPercent: -50,
      yPercent: -50,
    });
  };

  const moveInnerCircle = (x: number, y: number): void => {
    gsap.set(innerCircleRef.current as unknown as gsap.TweenTarget, {
      x,
      y,
      xPercent: -50,
      yPercent: -50,
    });
  };

  const animate = (): void => {
    const { outerX, outerY } = delayedOuterCircleRef.current;
    const { innerX, innerY } = delayedInnerCircleRef.current;

    delayedOuterCircleRef.current = {
      outerX: lerp(outerX, mouseRef.current.x, 0.025),
      outerY: lerp(outerY, mouseRef.current.y, 0.025),
    };

    delayedInnerCircleRef.current = {
      innerX: lerp(innerX, mouseRef.current.x, 1),
      innerY: lerp(innerY, mouseRef.current.y, 1),
    };

    moveOuterCircle(
      delayedOuterCircleRef.current.outerX,
      delayedOuterCircleRef.current.outerY
    );
    moveInnerCircle(
      delayedInnerCircleRef.current.innerX,
      delayedInnerCircleRef.current.innerY
    );
    window.requestAnimationFrame(animate);
  };

  const handleLinksHover = (event: MouseEvent): void => {
    event.stopPropagation();
    event.preventDefault();
    setIsHovering(true);
  };

  const handleLinksUnhover = (event: MouseEvent): void => {
    event.stopPropagation();
    event.preventDefault();
    setIsHovering(false);
  };

  const handleMouseDown = (event: MouseEvent): void => {
    const inputs = document.querySelectorAll("input");
    const textareas = document.querySelectorAll("textarea");
    const fields = [...inputs, ...textareas];
    
    if (event.target !== fields.find((field) => event.target === field)) {
      event.stopPropagation();
      event.preventDefault();
      setIsClicking(true);
    }
  };

  const handleMouseUp = (event: MouseEvent): void => {
    event.stopPropagation();
    event.preventDefault();
    setIsClicking(false);
  };

  useEffect(() => {
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("pointerdown", handleMouseDown);
    window.addEventListener("pointerup", handleMouseUp);

    const links = document.querySelectorAll("a");
    const buttons = document.querySelectorAll("button");
    const anchors = document.querySelectorAll("a.btn");

    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinksHover);
      link.addEventListener("mouseleave", handleLinksUnhover);
    });

    buttons.forEach((button) => {
      button.addEventListener("mouseover", handleLinksHover);
      button.addEventListener("mouseleave", handleLinksUnhover);
    });

    anchors.forEach((anchor) => {
      // @ts-expect-error: Anchor
      anchor.addEventListener("mouseover", handleLinksHover);
      // @ts-expect-error: Anchor
      anchor.addEventListener("mouseleave", handleLinksUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handleMouseDown);
      window.removeEventListener("pointerup", handleMouseUp);

      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinksHover);
        link.removeEventListener("mouseleave", handleLinksUnhover);
      });

      buttons.forEach((button) => {
        button.removeEventListener("mouseover", handleLinksHover);
        button.removeEventListener("mouseleave", handleLinksUnhover);
      });

      anchors.forEach((anchor) => {
        // @ts-expect-error: Anchor
        anchor.removeEventListener("mouseover", handleLinksHover);
        // @ts-expect-error: Anchor
        anchor.removeEventListener("mouseleave", handleLinksUnhover);
      });

      setIsHovering(false);
      setIsClicking(false);
    };
  }, []);

  return (
    <>
      <div
        ref={
          outerCircleRef as unknown as
            | React.LegacyRef<HTMLDivElement>
            | undefined
        }
        className="fixed top-0 left-0 border-2 border-white rounded-full flex justify-center items-center pointer-events-none z-50"
        style={{
          width: outerSize,
          height: outerSize,
          transition: "width 0.15s ease-in, height 0.15s ease-in",
        }}
      ></div>
      <div
        ref={
          innerCircleRef as unknown as
            | React.LegacyRef<HTMLDivElement>
            | undefined
        }
        className="fixed top-0 left-0 bg-[#00c6ff]/70 rounded-full flex justify-center items-center pointer-events-none z-50"
        style={{
          width: innerSize,
          height: innerSize,
          transition: "width 0.3s ease-in, height 0.3s ease-in",
        }}
      ></div>
    </>
  );
};

export default Cursor;
