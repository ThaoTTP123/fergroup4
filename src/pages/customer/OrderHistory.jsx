import React from 'react';
import OrderHistory from '../../components/OrderHistory';
export default function Cake() {
  return(
  <div class="p-5 h-screen bg-gray-100">
    <h1 class="text-xl mb-2">Your orders</h1>


  <form method="GET">
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off"/>
    </div>
  </form>


    <div class="overflow-auto rounded-lg shadow hidden md:block mt-5">
      <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
        <tr>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Details </th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
          <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left"> Order Date</th>
          <th class="w-3 p-3 text-sm font-semibold tracking-wide text-left">Total</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
        <tr class="bg-white">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">10001</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap" >2 Chocolate Cake, 1 Birthday Candles</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Pending</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">2023-10-15T18:00:00Z</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$55.97</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">10002</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">1 Cheesecake, 1 Birthday Candles</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">2023-10-15T20:00:00Z</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$29.99</td>
        </tr>
        <tr class="bg-white">
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" class="font-bold text-blue-500 hover:underline">10003</a>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">1 Fruit Tart</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">2023-10-15T22:00:00Z</td>
          <td class="p-3 text-sm text-gray-700 whitespace-nowrap">$21.99</td>
        </tr>
        </tbody>
      </table>
    </div>

    
    <div class="float-right mt-5">
      <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">Previous</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
          </svg>
        </a>

        <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
        <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span class="sr-only">Next</span>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
 
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
      <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" class="text-blue-500 font-bold hover:underline">#10001</a>
          </div>
          <div class="text-gray-500">2023-10-15T18:00:00Z</div>
          <div>
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">Pending</span>
          </div>
        </div>
        <div class="text-sm text-gray-700">2 Chocolate Cake, 1 Birthday Candles</div>
        <div class="text-sm font-medium text-black">
          $55.97
        </div>
      </div>
      <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" class="text-blue-500 font-bold hover:underline">#10002</a>
          </div>
          <div class="text-gray-500">2023-10-15T20:00:00Z</div>
          <div>
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </div>
        </div>
        <div class="text-sm text-gray-700">1 Cheesecake, 1 Birthday Candles</div>
        <div class="text-sm font-medium text-black">
        $29.99
        </div>
      </div>
      <div class="bg-white space-y-3 p-4 rounded-lg shadow">
        <div class="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" class="text-blue-500 font-bold hover:underline">#10003</a>
          </div>
          <div class="text-gray-500">2023-10-15T22:00:00Z</div>
          <div>
            <span
              class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </div>
        </div>
        <div class="text-sm text-gray-700">
        1 Fruit Tart
        </div>
        <div class="text-sm font-medium text-black">
        $21.99
        </div>
      </div>
    </div>
  </div>

  
  );
}