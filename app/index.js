'use strict';

function App() {
  const [clicked, setClicked] = React.useState(false);
  const [step, setStep] = React.useState('list');
  return (
    <React.Fragment>
      <div>{JSON.stringify(window.port_list, null, 2)}</div>
      <div>
        {(clicked) ? "CLICKED": "NOT-CLICKED"}
      </div>      
      <button onClick={() => setClicked(!clicked)}>
        Like
      </button>
      <List />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.querySelector('#main'));