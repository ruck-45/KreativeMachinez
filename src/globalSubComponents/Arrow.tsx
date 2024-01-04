// Local Files
import './Arrow.css';

type ArrowProps = {
    className? : string,
}

const Arrow = (props:ArrowProps) => {
    const className = "arrow " + props.className;
  return (
    <div className={className}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Arrow;