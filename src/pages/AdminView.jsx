import NavbarView from "../components/NavBarView"
import AsideViewAdmin from "../components/AsideViewAdmin"

export default function AdminView()
{
    return(<>
        <div className="antialiased bg-gray-50 dark:bg-[#F1EFEF]">
            <NavbarView></NavbarView>            
            <AsideViewAdmin></AsideViewAdmin>
            
        </div>
    
    </>)
}