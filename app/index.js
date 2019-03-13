'use strict';

function App() {
  const [step, setStep] = React.useState('list');
  return (
    <React.Fragment>
      <div>{JSON.stringify(window.port_list, null, 2)}</div>
      <List />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector('#main'));