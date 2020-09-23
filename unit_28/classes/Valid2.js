class Valid2 extends Valid {
	constructor(email, password, isValid, emailError = "", passwordError = "") {
		super(email, password, isValid);
		this.emailError = emailError;
		this.passwordError = passwordError;
	}
	validate() {
		this.isValid = (this.password.length > 6 && this.email.length != 0) ? true : false;
		this.emailError = (this.email.length == 0) ? "email empty" : this.email;
		this.passwordError = (this.password.length > 6) ? this.password : "min length 6";
	}
}