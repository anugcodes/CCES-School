import TopCategory from "../components/landing/TopCategory"
import Bestseller from "../components/landing/Bestseller"
import Trending from "../components/landing/Trending"
import TopHeading from "../components/landing/topHeading"
import AboutUs from "../components/landing/AboutUs"
import NewArrival from "../components/landing/newArrivals"

const Landing = () => {
    return(
        <>
            <TopHeading />
            <Trending />
            <NewArrival />
            <TopCategory />
            <Bestseller />
            <AboutUs />
        </>
    )
}

export default Landing