import React, { useState } from 'react';
import endPoints from '@services/api/index';
import useFetchProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';
import Paginacion from '@common/Paginacion';
import styles from '@styles/ProductList.module.scss';

const ProductList = () => {
	const PRODUCT_LIMIT = 16;
/* 	const PRODUCT_OFFSET = 0; */
	const [PRODUCT_OFFSET, setOffsetProducts] = useState(0);

	const products = useFetchProducts(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET), PRODUCT_OFFSET);
	const totalProducts = useFetchProducts(endPoints.products.getProducts(10000000,0)).length;

	return (
		<section className={styles["main-container"]}>
			<div className={styles.ProductList}>
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
			{totalProducts > 0 && <Paginacion totalItems={totalProducts} itemsPerPage={PRODUCT_LIMIT} setOffset={setOffsetProducts} neighbours={1}></Paginacion>}
		</section>
	);
}

export default ProductList;