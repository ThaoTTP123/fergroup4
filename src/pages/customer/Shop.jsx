import { useEffect, useState } from 'react';
import ShopItem from '../../components/ShopItem';
import axios from '../../axios';
import PaginationBar from '../../components/PaginationBar';
import ReactPaginate from 'react-paginate';
import {
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaXmark,
} from 'react-icons/fa6';
export default function Shop() {
  const [pageCount, setPageCount] = useState(6);
  const [page, setPage] = useState(0);
  const [cakeList, setCakeList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');
  const [Checked, setChecked] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const handlePageClick = (e) => {
    setPage(e.selected);
  };
  const handleFilter = (value) => {
    const checkedIndex = Checked.indexOf(value);
    const newChecked = [...Checked];
    if (checkedIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(checkedIndex, 1);
    }
    setChecked(newChecked);
  };
  const fetchCakes = async () => {
    const res = await axios.get(
      `cakes?_page=${page + 1}&_limit=5${filterQuery}`
    );
    setCakeList(res.data);
    setIsLoading(false);
  };
  const fetchCategories = async () => {
    const res = await axios.get('categories');
    setCategoryList(res.data);
  };
  useEffect(() => {
    let newQuery = '';
    Checked.map((id) => {
      newQuery = newQuery + `&categoryId=${id}`;
    });
    setFilterQuery(newQuery);
  }, [Checked]);
  useEffect(() => {
    fetchCakes();
    setIsLoading(true);
  }, [filterQuery, page]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`cakes?${filterQuery}`);
      setPageCount(res.data.length / 5);
    })();
    fetchCategories();
  }, [filterQuery]);
  return (
    <div className="container mx-auto p-10 md:py-12 md:p-8">
      <div className="flex justify-between border-b border-gray-200 mx-5 md:mx-0 pb-6 pt-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Cakes
        </h1>
        <div className="items-end flex md:hidden">
          <div className="relative">
            {!openFilter ? (
              <FaFilter
                className="cursor-pointer"
                onClick={() => setOpenFilter(true)}
              />
            ) : (
              <FaXmark
                className="cursor-pointer"
                onClick={() => setOpenFilter(false)}
              />
            )}
            <div
              style={{ display: !openFilter ? 'none' : '' }}
              id="dropdownDefaultCheckbox"
              className="absolute right-0 z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownCheckboxButton"
              >
                {categoryList.map((category) => (
                  <li key={category.id}>
                    <div className="flex items-center">
                      <input
                        checked={
                          Checked.indexOf(category.id) === -1 ? false : true
                        }
                        onChange={() => handleFilter(category.id)}
                        id={category.id}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="checkbox-item-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {category.name}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-1 hidden md:flex">
          <div className="flex flex-col items-stretch w-[10%] max-md:w-full max-md:ml-0">
            <div>Category</div>
            <div className="flex flex-col mt-7 max-md:mt-12">
              <div className="items-start flex flex-col">
                {categoryList.map((category) => (
                  <div
                    key={category.id}
                    className="items-start flex justify-between gap-2 mt-4"
                  >
                    <input
                      checked={
                        Checked.indexOf(category.id) === -1 ? false : true
                      }
                      onChange={() => handleFilter(category.id)}
                      className="w-[17px] h-[17px] flex-col self-center"
                      type="checkbox"
                      name="category-checkbox"
                    />
                    <div className="flex-col grow self-center">
                      {category.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-5 p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cakeList.map((cake) => (
              <ShopItem openFilter={openFilter} key={cake.id} product={cake} />
            ))}
          </div>
          <div className="col-span-3 text-center">
            <ReactPaginate
              breakLabel={<span className="mr-4 font-bold">. . .</span>}
              nextLabel={
                <span className=" bg-gray-400 h-10 w-10 flex items-center justify-center rounded-md">
                  <FaChevronRight />
                </span>
              }
              forcePage={page}
              onPageChange={handlePageClick}
              pageCount={pageCount}
              previousLabel={
                <span className=" bg-gray-400 h-10 w-10 flex items-center justify-center rounded-md mr-3">
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
  );
}
