// import { Fragment, useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

// import ProductCard from "../../components/product-card/product-cart.component";
// import CategoryPreview from '../../components/category-preview/category-preview.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

// import { CategoriesContext } from "../../contexts/categories.context";

import './shop.style.scss';

const Shop = () => {
    // const { categoriesMap } = useContext(CategoriesContext);

    return (
        // <Fragment>
        //     {Object.keys(categoriesMap).map((title) => (
        //         <Fragment key={title}>
        //             <h2>{title}</h2>
        //             <div className='products-container'>
        //                 {categoriesMap[title].map((product) => (
        //                     <ProductCard key={product.id} product={product} />
        //                 ))}
        //             </div>
        //         </Fragment>
        //     ))}
        // </Fragment>
        // <div className='shop-container'>
        //     {Object.keys(categoriesMap).map((key) => {
        //         const products = categoriesMap[key];
        //         return <CategoryPreview key={key} title={key} products={products} />;
        //     })}
        // </div>
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
}

export default Shop;
