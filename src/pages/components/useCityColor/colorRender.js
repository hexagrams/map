import { cityData, colorData } from '../../dataList';

export const colorRender = (name) => {
  let color = 'rgb(83,83,83)';
  // 如果没有这个城市则返回默认颜色
  if (!cityData[name]) {
    return color;
  }
  const number = cityData[name]['before'] - cityData[name]['after'];

  colorData.forEach((item) => {
    if (item.min < number && number <= item.max) {
      color = item.color;
    }
  });
  return color;
};
