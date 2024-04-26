//make api calls with axios interceptor
//SAMPLE REQUEST 
//NEED API CALL :{ url:'/', method:'POST/GET', params:true/false, query:true/false }
export const API_URLS={
    userSignup:{url:'/user/signupUser', method:"POST"},
    loginUser:{url:'/user/loginUser', method:"POST"},
    addProduct:{url:'/product/addProduct', method:"POST"},
    getAllProductList:{url:'/product/getAllProductList', method:"GET"}
};
