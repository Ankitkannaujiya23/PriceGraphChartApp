import React, { useEffect, useState, Fragment } from 'react'
import ProductCard from '../../components/product/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { deleteProduct } from '../../stateStore/storeSlices/ProductStoreSlice';
import { PopupAlertBox } from '../../components/sweetAlertBox/CustomAlert';


const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const productData = useSelector(state => state.ProductSlice.product);
  const dispatch=useDispatch();
const navigate=useNavigate()
  useEffect(() => {
    setProductList(productData);
  }, [productData]);

  const gotoDetailsPage=(index)=>{
    const product=productList?.find((row, ind)=> ind===index);
   navigate("/productDetailPage",{state:product});
  }

  const getDeleteProduct=(index)=>{
    const filterProducts=productList?.filter((row, ind)=> ind!==index);
    setProductList(filterProducts);
    const alertData = { isShowAlert: true, isSuccess: true, message: "Product Deleted successfully.", timer: 3000 }
    PopupAlertBox(alertData);
    dispatch(deleteProduct(filterProducts));

  }

  return (<>
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          
         
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>
              <div >
                <Link to='/addProduct'className='flex align-bottom text-3xl font-bold cursor-pointer' >
            <p>Add Products</p>
              <FaPlusCircle className='px-1  text-red-600 text-4xl' />
                </Link>
              </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-4 ">
                {productList.map((item, ind) => (<ProductCard ind={ind} title={item.title} description={item.description} data={item.productPriceDateArr} gotoDetailsPage={gotoDetailsPage} getDeleteProduct={getDeleteProduct} />))}

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>)
}

export default HomePage


