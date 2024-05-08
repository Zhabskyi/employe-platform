export const getTime = () => {
  const date = new Date();

  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
};

export const getDate = () => {
  const date = new Date();

  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
};
