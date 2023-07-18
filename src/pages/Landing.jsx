import TopCategory from "../components/landing/TopCategory"
import Bestseller from "../components/landing/Bestseller"
import Trending from "../components/landing/Trending"
import TopHeading from "../components/landing/topHeading"

const Landing = () => {
    return(
        <>
            <TopHeading />
            <Trending />
            <TopCategory />
            <Bestseller />
        </>
    )
}

export default Landing