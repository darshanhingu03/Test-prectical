import "../../../assets/css/login.css";

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="formSection">
        <div className="loginLogo">
          <span>Logo Here</span>
        </div>
        <div className="loginTitle">
          <span className="tagLine">Welcome back !!!</span>
          <span className="titleText">Sign in</span>
        </div>
        <form>
          <div className="loginForm">
            <div className="inputSection">
              <span>Email</span>
              <input type="email" placeholder="Enter Email" name="email" />
            </div>
            <div className="inputSection">
              <span>password</span>
              <input type="password" placeholder="********" name="password" />
            </div>
            <div className="buttonSection">
              <button className="submitButton" type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
        <div className="signUpLink">
          <span style={{ color: "#00000033" }}>I don’t have an account ?</span>
          <a style={{ color: "#F47458" }}>Sign Up</a>
        </div>
      </div>
    </div>
  );
};
