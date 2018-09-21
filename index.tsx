import * as React from 'react';
import * as ReactDOM from 'react-dom';

const initialState = {};
type State = Readonly<typeof initialState>;

class App extends React.PureComponent <object, State> {
  readonly state: State = initialState;
  render() {
      return (
          <div>
              <h1>Speak My Language</h1>
          </div>);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);