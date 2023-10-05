import Card from "./Card"

export default function ContentViewInventory({productData}){

    // Agregar estado para los datos de los productos
    
    return(<>    
        <main className="grid p-8 md:ml-64 h-auto pt-20">
                <div className="grid items-center justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {productData.map((product) => (
                    <Card key={product.id} name={product.name} description={product.description}
                        category={product.category} imageUrl={product.image_url} />
                ))}                    
                    
                </div>
        </main>
    </>)
}