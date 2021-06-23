class ApiURL{
	static baseURL = "http://127.0.0.1:8000/api/";
	static VisitorDetails = this.baseURL + "GetVisitorDetails";
	static SendContactDetails = this.baseURL + "SendContactDetails";
	static GetSiteInfo = this.baseURL + "GetSiteInfo";
	static GetCategoryDetails = this.baseURL + "GetCategoryInfo";

	static ProductListByRemark(remark){
		return this.baseURL+"ProductListByRemark/"+remark;
	}

	static ProductListByCategory(category){
		return this.baseURL+"ProductListByCategory/"+category;
	}

	static ProductListBySubcategory(category, subcategory){
		return this.baseURL+"ProductListBySubcategory/"+category+"/"+subcategory;
	}
}
export default ApiURL;