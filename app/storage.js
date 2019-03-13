'use strict';

function List() {
  const search = async() => {
    await window.serialPort.list((err, ports) => {
      setPorts(ports)
    })
  }
  const [ports, setPorts] = React.useState(false);
  
  return (
    <React.Fragment>
      {JSON.stringify(ports)}
      <button onClick={() => search()}>Search</button>
    </React.Fragment>
  );
}