import "../styles/SignIn.css"

const SignInModal = () => {

    return (
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1 className="title-sign-in">Sign In</h1>
                <form>
                <div className="input-wrapper">
                    <label htmlFor="email" className="form-label">Username</label>
                    <input 
                        type="text" 
                        id="email"
                        className="form-control" 
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control" 
                    />
                </div>
                <div className="input-remember">
                    <input 
                        type="checkbox" 
                        id="remember-me" 
                        className="form-check-input" 
                    />
                    <label htmlFor="remember-me" className="form-check-label">Remember me</label>
                </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
    );
};

export default SignInModal


// PLACEHOLDER DUE TO STATIC SITE
// SHOULD BE THE BUTTON BELOW 