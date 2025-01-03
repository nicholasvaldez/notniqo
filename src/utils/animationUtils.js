export const animate = (
  currentPosition,
  mousePosition,
  setMousePosition,
  animationFrame
) => {
  const lerpFactor = 0.08;

  currentPosition.current = {
    x:
      currentPosition.current.x +
      (mousePosition.x - currentPosition.current.x) * lerpFactor,
    y:
      currentPosition.current.y +
      (mousePosition.y - currentPosition.current.y) * lerpFactor,
  };

  setMousePosition(currentPosition.current);
  animationFrame.current = requestAnimationFrame(() =>
    animate(currentPosition, mousePosition, setMousePosition, animationFrame)
  );
};

export const handleMouseMove = (e, mousePosition) => {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
};
