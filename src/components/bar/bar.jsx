/* eslint-disable import/no-extraneous-dependencies */

import BarContent from './bar-content/bar-content';
import './bar.module.css';

function Bar({ loading, barVisible }) {
  return (
    <div className={`bar ${barVisible ? 'visible' : 'not-visible'}`}>
      <BarContent loading={loading} />
    </div>
  );
}

export default Bar;
