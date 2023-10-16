import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import axios from 'axios';

export default function Home() {
  const [featureCakes, setFeatureCakes] = useState([]);
  const fetchData = async () => {
    const res = await axios.get('http://localhost:3000/cakes?_start=0&_end=4');
    console.log(res);
    console.log(res.data);
    setFeatureCakes(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="">
        <img src="/banner.jpg" alt="" className="object-cover w-full" />
      </div>
      <div className="my-1 text-center">
        <div>
          <h1 className="inline text-[30px] font-bold font-['Roboto','Poppins'] uppercase">
            Feature products
          </h1>
          <hr class="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-25 dark:opacity-100" />
        </div>
        <div className="grid md:grid-cols-4 gap-6 p-4">
          {featureCakes.map((product) => {
            return <Card product={product} />;
          })}
        </div>
      </div>
      <div className="my-1 text-center">
        <div>
          <h1 className="inline text-[30px] font-bold font-['Roboto','Poppins'] uppercase">
            Hot Sales
          </h1>
          <hr class="my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-25 dark:opacity-100" />
        </div>
        <div className="grid md:grid-cols-4 gap-6 p-4">
          {featureCakes.map((product) => {
            return <Card product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
