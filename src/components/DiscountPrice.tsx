
const DiscountPrice = (props:any) => {
    const { setDiscount , discount } = props;
    const handleChange = (e) => {
      setDiscount(e.target.value)
    }
    console.log("Discount:" , discount)
  return (
    <div className="mx-20 mt-5 border-gray-200">
        <label htmlFor="">Discount :</label>
        <input 
            type="search" 
            id="default-search"
            value={discount}
            onChange={handleChange}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search Products...." 
        />
    </div>
  )
}

export default DiscountPrice