import React from 'react';
import './TableHeader.css';

const tableHeader = (props) => {
  const cellCount = Object.keys(props.item).length - 1;
  return (
    <div className="TableHeader">
      {Object.keys(props.item || {}).map((it) => {
        const header = props.item[it];
        if (typeof header !== 'object') {
          return <div key={it} className="cell" style={{ width: `${100 / cellCount}%` }}>{header}</div>;
        }
        return (
          <div key={it} className="btn-group" style={{ width: `${100 / cellCount}%` }}>
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {header.name}
            </button>
            <div className="dropdown-menu">
              {
              header.items.map(e => <a key={e} className="dropdown-item" onClick={() => header.click(e)} >{e}</a>)
            }
            </div>
          </div>
        );
      })}

    </div>

  );
};
export default tableHeader;

