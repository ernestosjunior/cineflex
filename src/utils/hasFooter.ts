export const hasFooter = () => {
  const path = window.location.pathname;
  return path.includes("/sessoes") || path.includes("/assentos");
};
