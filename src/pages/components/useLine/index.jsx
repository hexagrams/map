import React, { useEffect, useState } from 'react';
import { LineLayer, PointLayer } from '@antv/l7';
import { lineData } from '../../dataList'
import lineSvg from './line.svg';


function UseLine(scene) {
  const [line, setLine] = useState(null)


  useEffect(() => {
    if (!scene) {
      return
    }
    scene.addImage(
      'plane',
      lineSvg
    );
    const layer = new LineLayer({
      zIndex: 20
    })
      .source(lineData, {
        parser: {
          type: 'json',
          x: 'from_lon',
          y: 'from_lat',
          x1: 'to_lon',
          y1: 'to_lat'
        }
      })
      .size('lin_size', (lin_size) => lin_size)
      // .shape('arc3d')
      .shape('arc')
      .color('#FF7C6A')
      .animate({
        interval: 2,
        trailLength: 2,
        duration: 1
      })
      .style({
        opacity: 1,
        sourceColor: '#0f0', // 起点颜色
        targetColor: '#f00', // 终点颜色
      });

    const dotPoint = new PointLayer({
      zIndex: 21
    })
      .source(lineData, {
        parser: {
          type: 'json',
          x: 'to_lon',
          y: 'to_lat'
        }
      })
      .shape('circle')
      .color('#ffed11')
      .animate(true)
      .size(40)
      .style({
        opacity: 1.0
      });


    const flyLine = new LineLayer({ blend: 'normal', zIndex: 21 })
      .source(lineData, {
        parser: {
          type: 'json',
          x: 'from_lon',
          y: 'from_lat',
          x1: 'to_lon',
          y1: 'to_lat'
        }
      })
      .color('#ff6b34')
      .texture('plane')
      .shape('arc')
      .size(20)
      .animate({
        duration: 1,
        interval: 0.2,
        trailLength: 0.05
      })
      .style({
        textureBlend: 'replace',
        lineTexture: true, // 开启线的贴图功能
        iconStep: 6, // 设置贴图纹理的间距
        opacity: 1
      });



    scene.addLayer(dotPoint);
    scene.addLayer(layer);
    scene.addLayer(flyLine);

    setLine(layer)
  }, [scene])


  return line
}

export default UseLine;
