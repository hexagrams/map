import React, { useState, useEffect } from 'react';
import { LineLayer, PolygonLayer } from '@antv/l7';
import { colorRender } from './colorRender';

function useBorder(scene) {
  const [cityColor, setChinaPolygonLayer] = useState(null)
  useEffect(() => {
    if (!scene) {
      return
    }
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/707cd4be-8ffe-4778-b863-3335eefd5fd5.json' //  获取行政区划P噢利用
    )
      .then(res => res.json())
      .then(data => {
        const chinaPolygonLayer = new PolygonLayer({
          autoFit: true,
        })
          .source(data)
          .color(
            'name',
            colorRender
          )
          .shape('fill')
          .style({
            opacity: 1
          });
        //  图层边界
        const layer2 = new LineLayer({
          zIndex: 1
        })
          .source(data)
          .color('#fff')
          .size(0.5)
          .style({
            opacity: 1
          });
        scene.addLayer(chinaPolygonLayer);
        scene.addLayer(layer2);
        setChinaPolygonLayer(chinaPolygonLayer)
      });
  }, [scene]);
  return cityColor
}

export default useBorder;
