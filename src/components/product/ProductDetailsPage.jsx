import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { elipsisFunction } from '../utils/utilityFunctions.js';


const ProductDetailsPage = () => {

    const chartRef = useRef();
    const location = useLocation();

    const [productData, setProductData] = useState({});

    useEffect(() => {
        const product = location.state;
        setProductData(product);
        console.log({ product });
    }, [])
    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: productData.productPriceDateArr?.map(item => item.date),
                datasets: [{
                    label: 'Price',
                    data: productData.productPriceDateArr?.map(item => item.price),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
        });

        return () => chart.destroy();
    }, [productData?.productPriceDateArr]);

    return (
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Link to='/homepage' className='flex'><FaArrowLeftLong className='text-2xl mx-1'/>Back to Homepage</Link>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product Details</h2>

            <div className="product-card bg-white rounded-md shadow-md mt-8 pb-5 p-2">
                <canvas ref={chartRef} />
                <div className="text-2xl mt-5 p-4">
                    <h2 className='text-2xl font-bold'>{productData?.title}</h2>
                    <p className='text-1xl mt-5 text-gray-700'>{productData?.description}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetailsPage;

