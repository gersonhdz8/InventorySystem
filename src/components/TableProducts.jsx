export default function TableProducts({name,serial,category,quantity,inStock,inLoan,location,imageUrl}){

    return(
        <>
        <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            
                            <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={imageUrl} alt="iMac Front Image" className="w-auto h-8 mr-3"/>
                                {name}
                            </th>
                            <td className="px-4 py-2">
                                <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{serial}</span>
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-900  dark:text-white">
                                <div className="flex items-center">                                    
                                    {category}
                                </div>
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{quantity}</td>
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{inStock}</td>
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex items-center">                                    
                                    <span className="ml-1 text-gray-500 dark:text-gray-400">{inLoan}</span>
                                </div>
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex items-center">
                                    
                                    {location}
                                </div>
                            </td>
                        </tr>
        
        </>
    )
}