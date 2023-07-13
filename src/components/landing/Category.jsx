import React from 'react'
import { Text, Card } from '@nextui-org/react'
import { FaTshirt } from 'react-icons/fa';
import { GiPencilBrush } from 'react-icons/gi'

function Category() {
  return (
    <>
      <div 
      className="d-flex justify-content-center"
      data-aos="fade-left"
      data-aos-duration="1000">
        <Text size={40} className='fw-bold'>Explore&nbsp;</Text>
        <Text color='error' size={40} className='fw-bold'>Categories</Text>
      </div>

      <div className="d-flex justify-content-center align-items-center m-3 p-3 flex-wrap">
        <Card 
        css={{ mw: "330px", $$cardColor: '$colors$secondary', p: "$3" , m: "$4"}}
        data-aos='zoom-in-up'
                        data-aos-duration='1000'
                        >
          <Card.Body css={{ py: "$15" }} className='d-flex align-items-center'>
            <div className='rounded-circle bg-white d-flex justify-content-center align-items-center' style={{ width: "5em", height: "5em" }}>
              <FaTshirt color='blue' size={50} />
            </div>
          </Card.Body>
          <Card.Footer className='d-flex align-items-center'>
            <Text size={30} className='fw-bold text-white mx-auto'>Clothing</Text>
          </Card.Footer>
        </Card>

        <Card 
        css={{ mw: "330px", $$cardColor: '$colors$secondary', p: "$3", m: "$4" }}
        data-aos='zoom-out-up'
                        data-aos-duration='1000'>
          <Card.Body css={{ py: "$15" }} className='d-flex align-items-center'>
            <div className='rounded-circle bg-white d-flex justify-content-center align-items-center' style={{ width: "5em", height: "5em" }}>
              <GiPencilBrush color='blue' size={50} />
            </div>
          </Card.Body>
          <Card.Footer className='d-flex align-items-center'>
            <Text size={30} className='fw-bold text-white mx-auto'>Stationery</Text>
          </Card.Footer>
        </Card>
      </div>
    </>
  )
}

export default Category