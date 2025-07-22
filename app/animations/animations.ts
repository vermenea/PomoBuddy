export const slideAnimation = (isInView: boolean) => ({
  transform: isInView ? 'none' : 'translateX(-200px)',
  opacity: isInView ? 1 : 0,
  transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
});

export const displayContent = (isInView: boolean) => ({
  opacity: isInView ? 1 : 0,
  transition: '1s',
});

export const slide = (isInView: boolean) => ({
  opacity: isInView ? 1 : 0,
  transition: '0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
});
