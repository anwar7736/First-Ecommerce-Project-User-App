class SessionHelper{

	static setIdSession(id){
		sessionStorage.setItem('id', id);
	}

	static getIdSession(){
		return sessionStorage.getItem('id');
	}

	static setNameSession(name){
		sessionStorage.setItem('name', name);
	}

	static getNameSession(){
		return sessionStorage.getItem('name');
	}

	static setEmailSession(email){
		sessionStorage.setItem('email', email);
	}

	static getEmailSession(){
		return sessionStorage.getItem('email');
	}

	static setPhoneSession(phone){
		sessionStorage.setItem('phone', phone);
	}

	static getPhoneSession(){
		return sessionStorage.getItem('phone');
	}

	static setPhotoSession(photo){
		sessionStorage.setItem('photo', photo);
	}

	static getPhotoSession(){
		return sessionStorage.getItem('photo');
	}
	static setRedirectPathSession(redirect_path){
		sessionStorage.setItem('redirect_path', redirect_path);
	}

	static getRedirectPathSession(){
		return sessionStorage.getItem('redirect_path');
	}

	static setAboutSession(about){
		localStorage.setItem('about', about);
	}

	static getAboutSession(){
		return localStorage.getItem('about');
	}

	static setRefundSession(refund){
		localStorage.setItem('refund', refund);
	}

	static getRefundSession(){
		return localStorage.getItem('refund');
	}

	static setPolicySession(policy){
		localStorage.setItem('policy', policy);
	}

	static getPolicySession(){
		return localStorage.getItem('policy');
	}

	static setPurchaseSession(purchase){
		localStorage.setItem('purchase', purchase);
	}

	static getPurchaseSession(){
		return localStorage.getItem('purchase');
	}


}
export default SessionHelper;