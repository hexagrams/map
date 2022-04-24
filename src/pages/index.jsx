import React, { useEffect, useState } from 'react';
import { Scene, PolygonLayer, LineLayer, PointLayer } from '@antv/l7';
import useScene from './components/useScene';
import useBorder from './components/useBorder';
import useCityColor from './components/useCityColor';
import useLine from './components/useLine'
import ColorBar from './components/colorBar';
import './index.less';

export default function IndexPage() {
  /** 初始化地图 */
  const scene = useScene()
  /** 国界线 */
  const border = useBorder(scene)
  /** 渲染城市颜色 */
  const cityColor = useCityColor(scene)
  /** 渲染线 */
  const lin = useLine(scene)



  return (
    <div className='home'>
      <div id='map'></div>
      <ColorBar />
    </div>
  );
}
