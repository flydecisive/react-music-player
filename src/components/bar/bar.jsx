/* eslint-disable import/no-extraneous-dependencies */

import BarContent from './bar-content/bar-content';
import './bar.module.css';

function Bar({ loading }) {
  return (
    <div className="bar visible">
      <BarContent loading={loading} />
    </div>
  );
}

export default Bar;
