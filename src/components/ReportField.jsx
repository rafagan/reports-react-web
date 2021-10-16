import './ReportField.css'

function ReportField(props) {
  return (
    <div className="report-field">
      <h3>{props.name}</h3>
      <h1>{props.value}</h1>
    </div>
  );
}

export default ReportField;
