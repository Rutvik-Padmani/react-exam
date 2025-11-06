import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchproducts = createAsyncThunk("product/fetchProducts" , 
    async () => {
        try{
         const data =  axios.get("https://fakestoreapi.com/products")
            return data;
        }
        catch(error){
          console.error("Error while fetching Products")
        }
    }
)