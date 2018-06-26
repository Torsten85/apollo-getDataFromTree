import React from 'react';
import ReactDom from 'react-dom/server';
import { getDataFromTree } from 'react-apollo';

const { Provider, Consumer } = React.createContext({ initial: 1 });

const App = (
  <Consumer>
    {({ initial }) => (
      <div>
        Initial: {initial}
        <Provider value={{initial: initial + 1 }}>
          <Consumer>
            {({ initial: nestedInitial }) => (
              <div>Nested Initial: {nestedInitial}</div>
            )}
          </Consumer>
        </Provider>
      </div>
    )}
  </Consumer>
);

console.log('Render #1', ReactDom.renderToStaticMarkup(App));
console.log('Render #2', ReactDom.renderToStaticMarkup(App));

getDataFromTree(App).then(() => {
  console.log('Render #3', ReactDom.renderToStaticMarkup(App));
});
