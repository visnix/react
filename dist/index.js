import * as ReactDOM  from './react-dom.development.js'
import {
  createElement as h,
  useState
} from './react.development.js'

performance.mark('===>2')


// https://babeljs.io/repl babel 在线转译jsx
function Source() {
  const [state, setState] = useState(0);

  const update = () => {
    setState(state + 1);
  };

  return h(
    "div",
    null,
    h("div", null, "state: ", state),
    h(
      "div",
      {
        onClick: update,
        className: 'button'
      },
      "点击"
    )
  );
}

const App = h(Source)


ReactDOM.render(App, document.getElementById('app'))