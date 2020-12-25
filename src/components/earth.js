import React from 'react';
import { connect } from 'umi';
import NSCEarth, { NSCEarthUI } from 'nsc-earth';
import NSCGlobal from './export';

@connect(({ earth, loading }) => ({
  NSCEarth: earth.NSCEarth,
}))
class Earth extends React.Component {
  constructor(props) {
    super(props);
    this.NSCEarth = new NSCEarth(window.Cesium);
    //方法保存到window
    window.NSCGlobal = NSCGlobal;
    this.viewer = undefined;
  }

  componentDidMount() {}

  handleNSCEarthUILoad(NSCEarth) {
    this.viewer = NSCEarth.viewer;
    this.viewer.scene.globe.depthTestAgainstTerrain = true;
    this.viewer.imageryLayers.get(0).alpha = 0;
   
    var mapbox = new Cesium.MapboxStyleImageryProvider({
      styleId: 'dark-v10', //'streets-v11',
      accessToken:
        'pk.eyJ1IjoibWljaGVsbGUxMDA5IiwiYSI6ImNrajE1aWp2dDIyZnQycnFqaGszM2c2MmwifQ.0PT49I8R1sRwIWU29SLmrQ',
    });
    this.viewer.imageryLayers.addImageryProvider(mapbox);

    // this.viewer.terrainProvider = new Cesium.createWorldTerrain();
    this.props.dispatch({
      type: 'earth/updateNSCEarth',
      payload: NSCEarth,
    });

    NSCEarth.homeRectangle = Cesium.Rectangle.fromDegrees(
      90, -40, 120, 90
    );
    NSCEarth.goHome();
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <NSCEarthUI
          NSCEarth={this.NSCEarth}
          onLoad={this.handleNSCEarthUILoad.bind(this)}
        ></NSCEarthUI>
      </div>
    );
  }
}

export default Earth;
