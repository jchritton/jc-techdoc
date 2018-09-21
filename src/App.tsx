import * as React from 'react';

import Navigation from './components/Navigation';

const initialState = {};
type State = Readonly<typeof initialState>;

export default class App extends React.PureComponent <object, State> {
  readonly state: State = initialState;
  render() {
      return (
          <div>
              <Navigation />
          </div>);
  }
}