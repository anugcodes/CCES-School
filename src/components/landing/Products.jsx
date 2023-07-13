import { Text } from '@nextui-org/react'
import React from 'react'
import ProductCard from './ProductCard'

function Products() {
    return (
        <>
            <div className='my-5 prod'>
                <div
                    className="d-flex d-inline-block justify-content-center prod-text"
                    data-aos="fade-down"
                    data-aos-delay="50"
                    data-aos-duration="400"
                >
                    <Text b size={40} >New&nbsp;</Text>
                    <Text b color='error' size={40}>Arrivals</Text>
                </div>


                <div className='prod-card justify-content-center'>
                    <div
                        className="my-3 mx-3"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000">
                        <ProductCard />
                    </div>
                    <div
                        className="my-3 mx-3"
                        data-aos="zoom-out"
                        data-aos-delay="50"
                        data-aos-duration="1000">
                        <ProductCard />
                    </div>
                    <div
                        className="my-3 mx-3"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000">
                        <ProductCard />
                    </div>
                    <div
                        className="my-3 mx-3"
                        data-aos="zoom-out"
                        data-aos-delay="50"
                        data-aos-duration="1000">
                        <ProductCard />
                    </div>
                    <div
                        className="my-3 mx-3"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000">
                        <ProductCard />
                    </div>
                    <div
                        className="my-3 mx-3"
                        data-aos="zoom-out"
                        data-aos-delay="50"
                        data-aos-duration="1000">
                        <ProductCard />
                    </div>
                    <div
                        className="my-3 mx-3"
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000">
                        <ProductCard />
                    </div>
                    <div
                        className="my-3 mx-3"
                        data-aos="zoom-out"
                        data-aos-delay="50"
                        data-aos-duration="1000">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products