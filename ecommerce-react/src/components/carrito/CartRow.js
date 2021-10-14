const CartRow = ({producto}) =>{
    return(
        <div className="p-6">
            <div className=" w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url("${producto.imagen}")`}} title="Mountain">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="text-gray-900 font-bold text-xl mb-2">{producto.titulo}</div>
                    <p className="text-gray-700 text-base">{producto.descripcionProducto}</p>
                
                    <div className="text-sm mt-4">
                        <p className="text-gray-900 leading-none">{producto.precio}</p>
                        <p className="text-gray-600">A{producto.categoria}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartRow