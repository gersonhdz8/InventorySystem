//import Card from "./Card"
import TableAdmin from "./TableAdmin"

export default function ContentViewInventoryAdmin({productData}){

    // Agregar estado para los datos de los productos
    
    return(<>    
        <main className="grid p-3 md:ml-64 h-auto pt-16">
        <div className="border-2 rounded-lg border-gray-300 dark:border-[#CCC8AA] w-full h-auto mb-4">
            <TableAdmin productsData={productData}></TableAdmin>
        </div>
        </main>
    </>)
}