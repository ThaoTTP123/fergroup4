import React from 'react';

export default function CartItem() {
  return (
    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src="product1.jpg"
        alt="product-image"
        class="w-full rounded-lg sm:w-40"
      />
      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div class="mt-5 sm:mt-0">
          <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
          <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
        </div>
        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div class="flex items-center border-gray-100">
            <input
              class="h-8 w-[100%] border bg-white text-center text-xs outline-none"
              type="number"
              value="2"
              min="1"
            />
          </div>
          <div class="flex items-center space-x-4">
            <p class="text-sm">259.000 ₭</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
