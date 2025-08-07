export const asset = (path) => {
  const baseUrl = window.elealData?.plugin_url || '/';
  const imagePath = path.startsWith('/') ? path.substring(1) : path;
  return `${baseUrl}${imagePath}`;
};