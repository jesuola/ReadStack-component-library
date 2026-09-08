import "./alert.css";

function Alert(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div className={`alert ${props.type}`}>
      {props.message}
    </div>
  );
}

export default Alert;