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

	static setAboutSession(about){
		sessionStorage.setItem('about', about);
	}

	static getAboutSession(){
		return sessionStorage.getItem('about');
	}

	static setRefundSession(refund){
		sessionStorage.setItem('refund', refund);
	}

	static getRefundSession(){
		return sessionStorage.getItem('refund');
	}

	static setPolicySession(policy){
		sessionStorage.setItem('policy', policy);
	}

	static getPolicySession(){
		return sessionStorage.getItem('policy');
	}

	static setPurchaseSession(purchase){
		sessionStorage.setItem('purchase', purchase);
	}

	static getPurchaseSession(){
		return sessionStorage.getItem('purchase');
	}


}
export default SessionHelper;