import { createSlice } from '@reduxjs/toolkit'
import { fetchproducts } from '../service/fetchProducts';

const initialState = {
   data : [],
   isLoading: false,
   error : null,
   currentPage : 1,
   itemsPerPage : 5,
//    searchedTerm : '',
   
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    nextPage : (state) => {
        state.currentPage += 1;
    },
    perviousPage : (state) => {
        state.currentPage -= 1;
    },
    // setSearchedTerm : (state , action) => {
    //     state.searchedTerm = action.paylaod
    // }
  },
  extraReducers : (builder) => {
    builder 
     .addCase (fetchproducts.pending , (state) => {
        state.isLoading = true;
     })
     .addCase(fetchproducts.fulfilled , (state , action) => {
        state.data = action.payload;
        state.isLoading = false
     })
     .addCase(fetchproducts.rejected , (state , action) => {
        state.error = action.payload || 'Something get wrong'
     })
  }
});

export const { nextPage , perviousPage , setSearchedTerm} = productSlice.actions

export default productSlice.reducer