import NavbarView from "../components/NavBarView"
import AsideViewClient from "../components/AsideViewClient"
//import MainContentView from "../components/ContentViewInventory"


export default function ClientView(){
    return(        
    <>
        <div className="antialiased bg-gray-50 dark:bg-[#F1EFEF]">
            <NavbarView></NavbarView>
            <AsideViewClient></AsideViewClient>
            
        </div>
    </>    
    )
}