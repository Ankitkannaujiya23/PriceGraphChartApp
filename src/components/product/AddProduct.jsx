
import { PhotoIcon, PlusCircleIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import{addProduct}from '../../stateStore/storeSlices/ProductStoreSlice';
// import { PopupAlertBox } from '../sweetAlertBox/CustomAlert';
// import { Link, useNavigate } from 'react-router-dom';


// const AddProduct = () => {
//     const[productObj, setProductObj]=useState({
//         title:'',
//         description:'',
//         productPriceDateArr:[{ price: "", date: "2024-04-23" }]
//     });

// const dispatch=useDispatch();
// const navigate=useNavigate();
//     const handleAddPriceAndDate = () => {
//         let obj = { price: "", date: "2024-04-23" };
//         setProductObj({...productObj, productPriceDateArr:[...productObj.productPriceDateArr, obj]})
//     }

//     const handleChange = (e, index) => {
//         const { name, value } = e.target;

//         if (index !== undefined && index !== '') {
//             const productArr = productObj.productPriceDateArr.map((item, i) => {
//                 return index === i ? { ...item, [name]: value , id:index} : item;
//             });
//             setProductObj({ ...productObj, productPriceDateArr: productArr });
//         } else {
//             setProductObj({ ...productObj, [name]: value });
//         }
//     };

//     const addProductInStore=(e)=>{
//         e.preventDefault();
//         dispatch(addProduct([productObj]));
//         const alertData = { isShowAlert: true, isSuccess: true, message: "Product added successfully.", timer: 3000 }
//          PopupAlertBox(alertData);
//          let blankObj={
//             title:'',
//             description:'',
//             productPriceDateArr:[{ price: "", date: "2024-04-23" }]
//         }
//         setProductObj(blankObj)
//     }



//     return (
//         <div className="mx-auto max-w-2xl px-2 sm:px-6 lg:px-8 bg-white my-4 rounded ">
//             <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8'>
//                 <div className="lg:col-span-3 mt-5  ">
//                     <form className='px-5 py-12  rounded'>
//                         <div className="space-y-12">
//                             <div className="border-b border-gray-900/10 pb-12">
//                                 <h2 className="text-2xl font-bold leading-7 text-gray-900">Add Product</h2>
//                                 <p className="mt-1 text-sm leading-6 text-gray-600">Insert your product into the store.</p>

//                                 <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                                     <div className="sm:col-span-3">
//                                         <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//                                             Product Title
//                                         </label>
//                                         <div className="mt-2">
//                                             <input
//                                                 type="text"
//                                                 name="title"
//                                                 id="first-name"
//                                                 onChange={handleChange}
//                                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                             />
//                                         </div>
//                                     </div>

//                                     <div className="sm:col-span-3">
//                                         <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//                                             Product Description
//                                         </label>
//                                         <div className="mt-2">
//                                             <input
//                                                 type="text"
//                                                 name="description"
//                                                 id="last-name"
//                                                 onChange={handleChange}
//                                                 autoComplete="family-name"
//                                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                             />
//                                         </div>
//                                     </div>

//                                     </div>

//                                     <div className='sm:col-span-3 '>
//                                         {productObj.productPriceDateArr.map((obj,index) => (
//                                             <div className='grid grid-cols-4 gap-1 '>
//                                                 <div className="">
//                                                     <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                                                         Price
//                                                     </label>
//                                                     <div className="mt-2">
//                                                         <input
//                                                             type="text"
//                                                             name="price"
//                                                             value={obj.price}
//                                                             onChange={(e)=>handleChange(e,index)}
//                                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                                         />
//                                                     </div>
//                                                 </div>

//                                                 <div className="">
//                                                     <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                                                         Date
//                                                     </label>
//                                                     <div className="mt-2">
//                                                         <input
//                                                             type="date"
//                                                             name="date"
//                                                             value={obj.date}
//                                                             onChange={(e)=>handleChange(e,index)}
//                                                             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="mt-7">
//                                                     <div className=" cursor-pointer">
//                                                         <PlusCircleIcon onClick={() => handleAddPriceAndDate()} className='max-h-10  text-red-500' />
//                                                     </div>
//                                                 </div>
//                                             </div>))}
//                                     </div>

//                             </div>

//                             <div className="mt-6 flex items-center justify-end gap-x-6">
//                                 <Link to="/homepage" className="text-sm font-semibold leading-6 text-gray-900">
//                                     Go to Homepage
//                                 </Link>
//                                 <button
//                                     type="button"
//                                     onClick={(e)=>addProductInStore(e)}
//                                     className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 >
//                                     Add Product
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>

//             </div>
//         </div>
//     )
// }
// export default AddProduct;



import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PopupAlertBox } from '../sweetAlertBox/CustomAlert';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
        productPriceDateArr: Yup.array().of(
            Yup.object().shape({
                price: Yup.string().required('Price is required'),
                date: Yup.string().required('Date is required')
            })
        )
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            productPriceDateArr: [{ price: '', date: '2024-04-23' }]
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(addProduct([values]));
            const alertData = { isShowAlert: true, isSuccess: true, message: "Product added successfully.", timer: 3000 }
            PopupAlertBox(alertData);
            formik.resetForm();
        }
    });

    const handleAddPriceAndDate = () => {
        formik.setFieldValue('productPriceDateArr', [...formik.values.productPriceDateArr, { price: '', date: '2024-04-23' }]);
    };

    return (
        <div className="mx-auto max-w-2xl px-2 sm:px-6 lg:px-8 bg-white my-4 rounded ">
            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8'>
                <div className="lg:col-span-3 mt-5  ">
                    <form onSubmit={formik.handleSubmit} className='px-5 py-12  rounded'>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-2xl font-bold leading-7 text-gray-900">Add Product</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">Insert your product into the store.</p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Product Title
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="first-name"
                                                name="title"
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.title}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        {formik.touched.title && formik.errors.title ? (
                                            <div className="text-red-500">{formik.errors.title}</div>
                                        ) : null}
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Product Description
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="last-name"
                                                name="description"
                                                type="text"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.description}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        {formik.touched.description && formik.errors.description ? (
                                            <div className="text-red-500">{formik.errors.description}</div>
                                        ) : null}
                                    </div>

                                </div>

                                <div className='sm:col-span-3 '>
                                    {formik.values.productPriceDateArr.map((obj, index) => (
                                        <div key={index} className='grid grid-cols-4 gap-1 '>
                                            <div className="">
                                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Price
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id={`price${index}`}
                                                        name={`productPriceDateArr[${index}].price`}
                                                        type="text"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.productPriceDateArr[index].price}
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                {formik.touched.productPriceDateArr &&
                                                    formik.touched.productPriceDateArr[index] &&
                                                    formik.errors.productPriceDateArr &&
                                                    formik.errors.productPriceDateArr[index] &&
                                                    formik.errors.productPriceDateArr[index].price ? (
                                                        <div className="text-red-500">{formik.errors.productPriceDateArr[index].price}</div>
                                                    ) : null}
                                            </div>

                                            <div className="">
                                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Date
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id={`date${index}`}
                                                        name={`productPriceDateArr[${index}].date`}
                                                        type="date"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.productPriceDateArr[index].date}
                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                                {formik.touched.productPriceDateArr &&
                                                    formik.touched.productPriceDateArr[index] &&
                                                    formik.errors.productPriceDateArr &&
                                                    formik.errors.productPriceDateArr[index] &&
                                                    formik.errors.productPriceDateArr[index].date ? (
                                                        <div className="text-red-500">{formik.errors.productPriceDateArr[index].date}</div>
                                                    ) : null}
                                            </div>
                                            <div className="mt-7">
                                                <div className=" cursor-pointer">
                                                    <PlusCircleIcon onClick={handleAddPriceAndDate} className='max-h-10  text-red-500' />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <Link to="/homepage" className="text-sm font-semibold leading-6 text-gray-900">
                                    Go to Homepage
                                </Link>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;

