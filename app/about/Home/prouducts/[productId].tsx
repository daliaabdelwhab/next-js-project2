import { useRouter } from 'next/router';

const ProductPage = () => {
    const router = useRouter();
    const { productId } = router.query;

    return (
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {productId}</p>
        </div>
    );
};

export default ProductPage;