import { Button } from 'antd';

export default function Toolbar() {

  const globalView = () => {
    window.NSCGlobal.globalView()
  };

  const chinaView = () => {};
  const overseaView = () => {};

  return (
    <>
      <Button onClick={globalView}>全球</Button>
      <Button onClick={chinaView}>国内</Button>
      <Button onClick={overseaView}>海外</Button>
    </>
  );
}
