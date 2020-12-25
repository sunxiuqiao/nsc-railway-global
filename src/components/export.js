/**
 * 全球视角
 */
const globalView = () => {
  window.NSCEarth.goHome();
};

/**
 * 中国视角
 */
const chinaView = () => {
  window.NSCEarth.goHome();
};
/**
 * 海外
 */
const overseaView = () => {
  window.NSCEarth.goHome();
};

export default {
  globalView,
  chinaView,
  overseaView,
};
