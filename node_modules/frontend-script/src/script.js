const withSideEffect = require('react-side-effect');
const PropTypes = require('prop-types');

const ALLOWED_PLACEMENTS = ['now', 'load'];

const Script = () => null;

Script.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  priority: PropTypes.number,
  on: PropTypes.string,
  inline: PropTypes.bool,
  preload: PropTypes.bool,
};

function reducePropsToState(propsList) {
  const scripts = {};

  propsList.forEach((props) => {
    const { src, inline, preload } = props;
    let { priority, children, on } = props;
    let sources = [];

    priority = Number(priority);
    if (priority < 0 || isNaN(priority)) { // eslint-disable-line no-restricted-globals
      priority = 100;
    }

    if (!on || ALLOWED_PLACEMENTS.indexOf(on) === -1) {
      on = 'load';
    }

    if (src) {
      if (Array.isArray(src)) {
        sources = sources.concat(src);
      } else {
        sources.push(src);
      }

      sources.forEach((source) => {
        if (scripts[source]) {
          if (scripts[source].priority > priority) {
            scripts[source].priority = priority;
          }
        } else {
          scripts[source] = {
            src: source,
            priority,
            on,
            inline,
            preload,
          };
        }
      });
    }

    if (children) {
      if (typeof children === 'function') {
        children = children.toString();
      } else {
        children = `function(){${Array.isArray(children) ? children.join(';') : children}}`;
      }

      if (sources.length) {
        const lastSource = sources[sources.length - 1];
        if (scripts[lastSource].children) {
          if (Array.isArray(scripts[lastSource].children)) {
            scripts[lastSource].children.push(children);
          } else {
            scripts[lastSource].children = [scripts[lastSource].children];
            scripts[lastSource].children.push(children);
          }
        } else {
          scripts[lastSource].children = children;
        }
      } else {
        scripts[children] = {
          src: children,
          priority,
          on,
          type: 'function',
          preload: false,
        };
      }
    }
  });

  const list = [];
  let naturalIndex = 0;
  for (const script in scripts) {
    if (Object.prototype.hasOwnProperty.call(scripts, script)) {
      scripts[script].index = naturalIndex;
      list.push(scripts[script]);
      naturalIndex += 1;
    }
  }

  list.sort((a, b) => {
    const diff = a.priority - b.priority;
    if (diff !== 0) {
      return diff;
    }

    return a.index - b.index;
  });

  return list.map((script) => ({
    src: script.src,
    on: script.on,
    type: script.type,
    inline: script.inline,
    preload: script.preload,
    children: script.children,
  }));
}

function handleStateChangeOnClient() {
  // Do nothing for now
  return null;
}

function mapStateOnServer(scripts) {
  return scripts;
}

module.exports = withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer)(Script);
