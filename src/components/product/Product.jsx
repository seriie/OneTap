export default function Product({ productName, productImage, productDescription, productPrice }) {
    return (
        <>
        <div id="product" className="products-app mt-[200px] flex flex-wrap justify-center">
            <div className="product-card cursor-pointer border border-slate-700 rounded-xl p-4 m-4 max-w-xs relative">
                <img src={productImage} alt={productName} className="w-full h-auto" />
                <h2 className="product-name text-lg font-semibold mt-4">{productName}</h2>
                <p className="description text-gray-600 mt-2">{productDescription}</p>
                <h3 className="price text-xl font-bold mt-4">{productPrice}</h3>
                <button className="product-button triggered-hover px-[12px] py-[6px] bg-sky-500 rounded-sm absolute right-5 bottom-5 text-slate-200">Buy</button>
            </div>
        </div>
        </>
    );
}