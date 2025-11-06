import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../types/hook"
import { fetchproducts } from "../service/fetchProducts";
import ProductListing from "../components/ProductListing";
import { nextPage, perviousPage } from "../slice/productSlice";
import SearchProduct from "../components/SearchProduct";
import FilterProduct from "../components/FilterProduct";
import DiscountPrice from "../components/DiscountPrice";

const Products = () => {
    const productData = useAppSelector((state: any) => state.product.data.data)
    const currentPage = useAppSelector((state : any) => state.product.currentPage)
    const itemsPerPage = useAppSelector((state: any) => state.product.itemsPerPage)
    // const searchedTerm = useAppSelector((state: any) => state.product.searchedTerm)
    const [searchedTerm , setSearchedTerm] = useState('');
    const [selectedProduct , setSelectedProduct] = useState('');
    const [filteredData , setFilteredData] = useState([]);
    const [discount , setDiscount] = useState(0)
    const dispatch = useAppDispatch();
    console.log("Products data from selector:" , productData)

    // const filteredData =  productData?.title.toLowerCase().includes(searchedTerm.toLowerCase())

    // const filterData =  {
    //    if(!searchedTerm) return productData

    //    if(searchedTerm){
    //      const results = productData?.filter((product: any) => 
    //        product.title && product.title.toLowerCase().includes(searchedTerm.toLowerCase())
    //      )
    //     return results;
    //    }
    // }

    const filterData = productData?.filter((product: any) => 
        (product.title.toLowerCase()).includes(searchedTerm.toLowerCase())
    )

    const selectData = productData?.filter((product:any) => 
        product.category === selectedProduct
    )

    // const updatedData = () => {
    //     const results : any = productData
    //     if(searchedTerm){
    //       const results = productData?.filter((product: any) => 
    //           product.title && product.title.toLowerCase().includes(searchedTerm.toLowerCase())
    //         )
    //       return results;
    //     }
    //     if(!selectedProduct) return productData;

    //     if(selectedProduct){
    //         const results = productData?.filter((product:any) => 
    //             product.category === selectedProduct
    //         )
    //         console.log("dropdown results inside if----")

    //         return results;
    //     }

    //     setFilteredData(results)
    // }

    useEffect(() => {
        let results = productData;
        if(searchedTerm){
            results = productData?.filter((product: any) => 
              product.title && product.title.toLowerCase().includes(searchedTerm.toLowerCase())
            )
        }

        if(selectedProduct){
            results = productData?.filter((product:any) => 
                product.category === selectedProduct
            )
            console.log("dropdown results inside if----")
        }
        
        setFilteredData(results)
    },[productData , searchedTerm , selectedProduct])

    console.log("Selected data: " , selectData)

    console.log("SearchedTerm:" , searchedTerm);
    console.log("SelectedProduct:" , selectedProduct)

    console.log("FilteredData:", filteredData)
    console.log("Searched Data:" , filterData)

    const startIndex = (currentPage - 1 ) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredData?.slice(startIndex , endIndex)
    const totalPages = Math.ceil(filteredData?.length / itemsPerPage)

    useEffect(() => {
       dispatch(fetchproducts())
    }, [dispatch , fetchproducts])

    

  return (
    <div>
        <h2 className="text-4xl font-bold text-center mt-10">Product-Listing</h2>

        <SearchProduct
          searchedTerm={searchedTerm}
          setSearchedTerm={setSearchedTerm}
        />

        <FilterProduct
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />

        {/* <DiscountPrice
          discount={discount}
          setDiscount={setDiscount}
        /> */}

        <div className="mx-20 mt-5 border-gray-200 flex flex-wrap">
            <form action="">
            <label htmlFor="">Discount :</label>
            <div >
            <input 
                type="number" 
                id="default-search"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Search Products...." 
            />
            </div>
            {/* <div>
            <button 
                type="submit"
                className="text-white ms-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >Enter</button>
            </div> */}
            </form>
        </div>

        <ProductListing
          data = {paginatedData}
        />

        <div className="flex justify-center my-10">
            <div>
                <button 
                    type="button"
                    onClick={() => dispatch(perviousPage())} 
                    className="text-white me-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >Previous</button>
            </div>
            <div>
                <p><strong>Page : </strong>{currentPage} - {totalPages}</p>
            </div>
            <div>
                <button 
                    type="button"
                    onClick={() => dispatch(nextPage())} 
                    className="text-white ms-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >Next</button>
            </div>
        </div>    
    </div>
  )
}

export default Products