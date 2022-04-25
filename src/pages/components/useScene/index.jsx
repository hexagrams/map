import React, { useState, useEffect } from 'react';
import { Scene } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';

/**
 * 初始化地图
 * @returns
 */
const useScene = () => {
  const [initScene, setInitScene] = useState(null)
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      logoVisible: false,
      map: new Mapbox({
        pitch: 40, //
        style: 'blank',
        // style: 'dark',
        center: [105.368652, 32],
        zoom: 3.8,
        //  token: 'mapbox token', 申请帐号获取token
      }),
    });
    setInitScene(scene)
  }, [])
  return initScene
}

export default useScene


