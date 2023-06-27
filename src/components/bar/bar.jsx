import BarContent from './bar-content/bar-content';
import './bar.module.css';

function Bar({ loading }) {
  return (
    <div className="bar">
      <BarContent loading={loading} />
    </div>
  );
}

export default Bar;
