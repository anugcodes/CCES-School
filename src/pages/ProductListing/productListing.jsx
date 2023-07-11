import Navbar from "../../components/Navbar/navbar"
import Products from "../../components/ProductsList/productsList"
import PaginationTemplate from "../../components/Pagination/pagination"

export default function ProductsPage() {
    return(
        <>
        <Navbar />
        <Products />
        <PaginationTemplate />
        </>
    )
}