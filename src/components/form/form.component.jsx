import "./form.styles.scss";

const UserForm = ({ label, ...otherProps }) => {
  return (
    <div className="container">
      <label className="form-input-label">{label}</label>
      <input className="form-input" {...otherProps} />
    </div>
  );
};
export default UserForm;
