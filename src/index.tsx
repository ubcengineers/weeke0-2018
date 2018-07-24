import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Loadable from 'react-loadable';

const LoadableApp = Loadable({
  loader: () => import('./App'),
  loading() {
    return (
      <div className="spinner-wrapper">
            <div className="spinner">
              <div className="bounce1" />
              <div className="bounce2" />
              <div className="bounce3" />
            </div>
      </div>
    )
  }
});

ReactDOM.render(
  <LoadableApp />,
  document.getElementById('root') as HTMLElement
);
