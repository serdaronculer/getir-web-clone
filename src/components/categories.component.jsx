import { useState, useEffect } from "react";
import categoryDatas from "../api/categories.json";
import Category from "./category.component";

const Categories = () => {
  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    setCategories(categoryDatas);
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto">
        <h6 className="text-sm font-semibold text-black mb-3">Kategoriler</h6>
        <div className="grid grid-cols-10 gap-4">
          {categories &&
            categories.map((category) => <Category category={category} key={category.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Categories;
