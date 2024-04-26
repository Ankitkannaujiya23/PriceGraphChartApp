// ProductCard.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { EyeIcon, TrashIcon } from '@heroicons/react/24/solid';
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { elipsisFunction } from '../utils/utilityFunctions';



const ProductCard = ({ ind, title, description, data, gotoDetailsPage, getDeleteProduct }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data?.map(item => item.date),
        datasets: [{
          label: 'Price',
          data: data?.map(item => item?.price),
          borderColor: 'rgb(65, 122, 192)',
          tension: 0.1
        }]
      },
    });

    return () => chart.destroy();
  }, [data]);




  return (
    <div className="product-card bg-white rounded-md shadow-lg p-4">
      <div className='flex justify-between'>
        <h2 className='text-1xl font-bold'>{title}</h2>
        <div className=''>
          <button className='px-1 bg-white text-red-600 text-2xl ' onClick={() => getDeleteProduct(ind)}><MdDelete /></button>
          <button className='px-1 bg-white text-indigo-600 text-2xl' onClick={() => gotoDetailsPage(ind)}><FaEye /></button>
        </div>
      </div>
      <canvas ref={chartRef} />
      <div className="flex justify-between align-items-end">
      <p className='mt-8'>{elipsisFunction(description, 60)}</p>
      {description.length > 80 &&<button
        type=""
        onClick={() => gotoDetailsPage(ind)}
        className="rounded-md mt-6 bg-indigo-600 px-3  text-xs  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Read More
      </button>}
      </div>



    </div>
  );
};

export default ProductCard;
