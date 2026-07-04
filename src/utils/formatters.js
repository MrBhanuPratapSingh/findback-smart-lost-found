export const formatDate = (value) => {
  if (!value) return "N/A";

  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const truncateText = (text = "", maxLength = 80) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};