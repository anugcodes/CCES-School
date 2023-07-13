import React from 'react'
import { Card, Text, Row, Button, Col, Spacer } from '@nextui-org/react'

const ProductCard = () => {
    return (
        <>
            <Card isPressable variant="shadow" className='card-css'
             
             >
                <Card.Body css={{ p: 0 }}>
                    <Card.Image
                        src='https://th.bing.com/th/id/R.519ee84b18c14502bf9dd4e244863700?rik=8THhyfhnXTtlhg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fblue-tshirt-png-t-shirt-png-image-2000.png&ehk=unXPJaTM%2fIFs2pH9ypAqc8Ff68y7CZG8hx3OkCxXzVs%3d&risl=1&pid=ImgRaw&r=0'
                        objectFit="fill"
                        width="100%"
                        height="100%"
                        alt='..'
                    />
                </Card.Body>
                <Card.Footer
                    isBlurred
                    css={{
                        position: "absolute",
                        p: "$8",
                        bgBlur: "#ffffffcc",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}
                >
                    <Row>
                        <Col>
                            <Row justify="space-between" align="top">
                                <Col>
                                    <Text h3>Tshirt</Text>
                                    <Text
                                        size={"$sm"}
                                    >
                                        we’re going to improve the UI
                                    </Text>
                                </Col>
                                <Col css={{ width: "auto" }}>
                                    <Text
                                        css={{
                                            color: "$accents7",
                                            fontWeight: "$semibold",
                                            fontSize: "$2xl",
                                            pl: "$12",
                                        }}
                                    >
                                        $500
                                    </Text>
                                </Col>
                            </Row>
                            <Spacer y={1} />
                            <Button css={{ w: "90%" }}>Add to cart</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </>
    )
}

export default ProductCard