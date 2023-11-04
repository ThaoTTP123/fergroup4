import { useEffect, useState } from 'react';
import ShopItem from '../../components/ShopItem';
import axios from '../../axios';
import ReactPaginate from 'react-paginate';
import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
export default function Shop() {
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(0);
  const [cakeList, setCakeList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFilter = (value) => {
    setSelectedCategory(value);
  };

  const fetchCakes = async () => {
    setIsLoading(true);
    try {
      let apiUrl = `cakes?_page=${page + 1}&_limit=8`;
      if (selectedCategory) {
        apiUrl += `&category=${selectedCategory}`;
      }
      if (searchTerm) {
        apiUrl += `&name_like=${searchTerm}`;
      }
      apiUrl += `&_sort=price&_order=${sortOrder}`;

      const response = await axios.get(apiUrl);
      setCakeList(response.data);
      const totalCakes = parseInt(response.headers['x-total-count'], 10);
      setPageCount(Math.ceil(totalCakes / 8));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching cakes:', error);
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('categories');
      setCategoryList(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCakes();
  }, [selectedCategory, page, sortOrder, searchTerm]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handlePageClick = (e) => {
    setPage(e.selected);
  };

  return (
    <div className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
      <div style={{ textAlign: 'center' }} >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Cakes</h1>
      </div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <input
          type="text"
          placeholder="Search by cake name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded p-2 mb-4"
          style={{
            width: '500px',
            height: '40px'
          }}
        />
      </div>
      <div className="flex" style={{ justifyContent: 'space-around', alignItems: 'center' }}>

        {/* Sorting Order Toggle Button */}
        <div>
          <button
            style={{
              padding: '10px 20px',
              margin: '20px',
              backgroundColor: '	#ffd3c4',
              fontWeight: 'bold',
              borderRadius: '20px'
            }}
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
          >
            Toggle Sort Order: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
        </div>
        <div>
          <Link to='/addCake'>
            <button style={{
              padding: '10px 20px',
              margin: '20px',
              backgroundColor: '	#ffabab',
              fontWeight: 'bold',
              borderRadius: '20px'
            }}>Create</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div style={{ border: 'solid black 1px', borderRadius: '10%', height: '300px' }} className="col-span-1 hidden md:flex">
            <div className="flex flex-col  ml-8 items-stretch w-[10%] max-md:w-full max-md:ml-0">
              <h2 style={{ fontWeight: 'bold' }}>Category</h2>
              <div className="flex flex-col mt-7 max-md:mt-12">
                <div className="items-start flex flex-col">
                  {categoryList.map((category) => (
                    <div
                      key={category.id}
                      className="items-start flex justify-between gap-2 mt-4"
                    >
                      <input
                        checked={selectedCategory === category.id}
                        onChange={() => handleFilter(category.id)}
                        className="w-[17px] h-[17px] flex-col self-center"
                        type="radio"
                        name="category-radio"
                      />
                      <div className="flex-col grow self-center">{category.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-5 p-5">
            {/* Cake List Rendering */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
              {cakeList.map((cake) => (
                <ShopItem key={cake.id} product={cake} />
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="col-span-3 text-center">
              <ReactPaginate
                breakLabel={<span className="mr-4 font-bold">. . .</span>}
                nextLabel={
                  <span className="bg-gray-400 h-10 w-10 flex items-center justify-center rounded-md">
                    <FaChevronRight />
                  </span>
                }
                forcePage={page}
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel={
                  <span className="bg-gray-400 h-10 w-10 flex items-center justify-center rounded-md mr-3">
                    <FaChevronLeft />
                  </span>
                }
                renderOnZeroPageCount={null}
                containerClassName="flex justify-center item-center mt-10"
                pageClassName="block border border-lightgray w-10 h-10
              flex items-center justify-center rounded-md hover:bg-lightgray mr-3"
                pageLinkClassName="font-bold"
                activeClassName="bg-purple-600 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
