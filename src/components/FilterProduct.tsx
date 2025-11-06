
const FilterProduct = (props: any) => {
    const { setSelectedProduct , selectedProduct} = props;
  return (
    <div className="mt-10">
        
    <label htmlFor="countries" className="block mb-2 ms-20 text-sm font-medium text-gray-900 dark:text-white">Select an Category :</label>
    <select 
       id="category"
       onChange={(e) => setSelectedProduct(e.target.value)} 
       className="bg-gray-50 mx-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a Category</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">jewelery</option> 
        {/* <option value="jewelery">jewelery</option> */}
    </select>

    </div>
  )
}

export default FilterProduct