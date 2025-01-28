export const AuthLayout = ({ children }) => {
  return (
    <div className="form-container container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="p-5 b-light rounded shadow">{children}</div>
        </div>
      </div>
    </div>
  );
};
