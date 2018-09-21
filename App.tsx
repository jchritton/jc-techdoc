import * as React from 'react';

const initialState = {};
type State = Readonly<typeof initialState>;

export default class App extends React.PureComponent <object, State> {
  readonly state: State = initialState;
  render() {
      return (
          <div>
              <h1>Speak My Language</h1>
          </div>);
  }
}