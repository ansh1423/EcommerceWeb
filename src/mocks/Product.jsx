import axios from "axios";
import { addProduct, updateProduct } from "../redux/slices/Product";

class ProductApi{

    async getProduct(){
      // ${process.env.NEXT_PUBLIC_HOST}
      console.log("data from product");
       const response = await axios.get(`http://localhost:5000/userapp/product/get/64e353cea474fca8fa0107eb`,{
      
        method: "get",
       
      });
      console.log("data from product",response)
       if(response.data.status==='SUCCESS'){
       console.log(response)
       return response.data;
       }
       else
        return false;
    } 
    
async updateProduct(data){
    // ${process.env.NEXT_PUBLIC_HOST}
    console.log("data from product");
     const response = await axios.put(`http://localhost:5000/userapp/product/update/63ffd0d9a024069685150c14`,data,{
    
      method: "put",
     
    });
    console.log("data from product",response)
     if(response.data.status==='SUCCESS'){
     console.log(response)
     return response.data;
     }
     else
      return false;
  } 
async addProduct (){
    const data=
        {
            "query":{},
            "options": {
              "collation": "",
              "sort": {"name":1},
              "populate": "",
              "projection": "",
              "lean": false,
              "leanWithId": true,
              "page": 1,
              "limit": 9,
              "pagination": true,
              "useEstimatedCount": false,
              "useCustomCountFn": false,
              "forceCountFn": false,
              "read": {},
              "options": {}
            },
            "isCountOnly": false
          }
          console.log("data from product");
          const response = await axios.post(`http://localhost:5000/userapp/product/list`,data,{
         
           method: "post",
          
         });
         console.log("data from product",response)
          if(response.data.status==='SUCCESS'){
          console.log(response)
          return response.data;
          }
          else
           return false;
       } 
    }     
     
    export const productApi = new ProductApi();