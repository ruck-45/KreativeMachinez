export const scrollTop = (offset?: number) => {
  window.scrollTo({
    top: offset ? offset : 0,
    behavior: "smooth",
  });
};

