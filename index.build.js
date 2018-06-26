'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDom = _interopDefault(require('react-dom/server'));
var reactApollo = require('react-apollo');

const { Provider, Consumer } = React.createContext({ initial: 1 });

const App = React.createElement(
  Consumer,
  null,
  ({ initial }) => React.createElement(
    'div',
    null,
    'Initial: ',
    initial,
    React.createElement(
      Provider,
      { value: { initial: initial + 1 } },
      React.createElement(
        Consumer,
        null,
        ({ initial: nestedInitial }) => React.createElement(
          'div',
          null,
          'Nested Initial: ',
          nestedInitial
        )
      )
    )
  )
);

console.log('Render #1', ReactDom.renderToStaticMarkup(App));
console.log('Render #2', ReactDom.renderToStaticMarkup(App));

reactApollo.getDataFromTree(App).then(() => {
  console.log('Render #3', ReactDom.renderToStaticMarkup(App));
});
