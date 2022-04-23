import React, { useState, useEffect } from 'react';
import { LineLayer, PolygonLayer, PointLayer } from '@antv/l7';

function useBorder(scene) {
  const [boundaries, setBoundaries] = useState(null)
  useEffect(() => {
    if (!scene) {
      return
    }

    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/ab42a860-f874-4452-a8b6-4168a36c1f2c.json', //  国界线
    )
      .then((res) => res.json())
      .then((data) => {
        const myBoundaries = new LineLayer({
          zIndex: 2,
        })
          .source(data)
          .color('rgb(93,112,146)')
          .size(0.6)
          .style({
            opacity: 1,
          });
        scene.addLayer(myBoundaries);
        setBoundaries(myBoundaries)
      });

    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/d09a3567-8c0e-4711-b8b8-cd82e8870e4b.json' //  标注数据
    ).then(res => res.json())
      .then(data => {
        const labelLayer = new PointLayer({
          zIndex: 2
        })
          .source(data, {
            parser: {
              type: 'json',
              coordinates: 'center'
            }
          })
          .color('#fff')
          .shape('name', 'text')
          .size(10)
          .style({
            opacity: 0.6,
            stroke: '#fff',
            strokeWidth: 0,
            padding: [5, 5],
            textAllowOverlap: false
          });

        scene.addLayer(labelLayer);
      });


  }, [scene]);
  return boundaries
}

export default useBorder;
