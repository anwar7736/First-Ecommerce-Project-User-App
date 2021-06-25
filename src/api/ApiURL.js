class ApiURL{
	static baseURL = "http://127.0.0.1:8000/api/";
	static VisitorDetails = this.baseURL + "GetVisitorDetails";
	static SendContactDetails = this.baseURL + "SendContactDetails";
	static GetSiteInfo = this.baseURL + "GetSiteInfo";
	static GetCategoryDetails = this.baseURL + "GetCategoryInfo";
	static GetSliderInfo = this.baseURL + "GetSliderInfo";

	static ProductListByRemark(remark){
		return this.baseURL+"ProductListByRemark/"+remark;
	}

	static ProductListByCategory(category){
		return this.baseURL+"ProductListByCategory/"+category;
	}

	static ProductListBySubcategory(category, subcategory){
		return this.baseURL+"ProductListBySubcategory/"+category+"/"+subcategory;
	}
	
	static GetProductDetails(product_code){
		return this.baseURL+"GetProductDetails/"+product_code;
	}

	static GetReviewList(product_code){
		return this.baseURL+"GetReviewList/"+product_code;
	}

	static GetSimilarProducts(subcategory){
		return this.baseURL+"GetSimilarProducts/"+subcategory;
	}
}
export default ApiURL;