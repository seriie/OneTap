export default function Product({ productName, productImage, productDescription, productPrice }) {
    return (
        <>
        <div id="product" className="products-app flex flex-wrap justify-center">
            <div className="product-card cursor-pointer border border-slate-700 rounded-xl p-4 m-4 max-w-xs relative">
                <div className="buy absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-80 text-white text-[50px] opacity-0 hover:opacity-100 hover:rounded-xl transition-opacity duration-300">
                    Buy
                </div>
                <img src={productImage} alt={productName} className="w-full h-auto" />
                <h2 className="product-name text-lg font-semibold mt-4">{productName}</h2>
                <p className="description text-gray-600 mt-2">{productDescription}</p>
                <h3 className="price text-xl font-bold mt-4">{productPrice}</h3>
            </div>
        </div>
        </>
    );
}