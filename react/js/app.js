const { createElement: e } = React;

function App() {
  return e(
    'div',
    null,
    e('h1', null, 'Hola mundo desde React'),
  );
}

ReactDOM.render(e(App), document.getElementById('myApp'));