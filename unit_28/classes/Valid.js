class Valid {
	constructor(email, password, isValid = false) {
		this.email = email;
		this.password = password;
		this.isValid = isValid;
	}
	validate() {
		this.isValid = (this.password.length > 6)? true : false;
	}
}