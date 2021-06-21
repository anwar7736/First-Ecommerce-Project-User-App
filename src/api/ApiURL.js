class ApiURL{
	static baseURL = "http://127.0.0.1:8000/api/";
	static VisitorDetails = this.baseURL + "GetVisitorDetails";
	static SendContactDetails = this.baseURL + "SendContactDetails";
	static GetSiteInfo = this.baseURL + "GetSiteInfo";
}
export default ApiURL;