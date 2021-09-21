import CardProducto from "./CardProducto";

const productos = [
	{
		titulo: 'Botella Green',
		precio: '49.90',
		url: 'https://tailwindui.com/components/ecommerce/components/product-lists',
		imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
		alt: 'botella ecologica'
	},
	{
		titulo: 'Nomad Tumbler',
		precio: '35.00',
		url: 'https://tailwindui.com/components/ecommerce/components/product-lists',
		imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
		alt: 'botella ecologica'
	},
	{
		titulo: 'anotador ecologico',
		precio: '40.50',
		url: 'https://tailwindui.com/components/ecommerce/components/product-lists',
		imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
		alt: 'anotador ecologico'
	},
	{
		titulo: 'birome mecanizada',
		precio: '40.50',
		url: 'https://tailwindui.com/components/ecommerce/components/product-lists',
		imagen: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		alt: 'birome mecanizada'
	}
]

function ListadoHerramientas() {
	return(
		<div id="ListadoHerramientas">
			<div className="bg-gray-200 max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
				<h2 className="mt-1 text-lg font-medium text-gray-900">Herramientas</h2>
				
				<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{productos.map(productos => <CardProducto titulo={productos.titulo} precio={productos.precio} url={productos.url} imagen={productos.imagen} alt={productos.alt} />)}
				</div>
			</div>
		</div>
	);
}

export default ListadoHerramientas;