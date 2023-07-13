import React from 'react'
import { Grid, Text, Card } from '@nextui-org/react'

function About() {
    return (
        <>
            <div className="slanted my-5">
                <div
                    className="slanted-text d-flex justify-content-center"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <Text className='fw-bold' size={55}>About&nbsp;</Text>
                    <Text className='fw-bold' color='error' size={55}>Us</Text>
                </div>
                <div
                    className="slanted-content m-4 text-center"
                    data-aos="fade"
                    data-aos-duration="200"
                >
                    <Text b size={20}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do7iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </div>
                <Grid.Container gap={2} justify="center" className='d-flex justify-content-center align-items-center mx-xl-5'>
                    <Grid sm>
                        <Card
                            css={{ mw: "330px", $$cardColor: '$colors$gradient', p: "$3" }}
                            data-aos='flip-left'
                            data-aos-duration='1500'
                        >
                            <Card.Header>
                                <Text b size={30}>Our Mision</Text>
                            </Card.Header>
                            <Card.Body css={{ py: "$10" }}>
                                <Text color='white'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Text>
                            </Card.Body>
                        </Card>
                    </Grid>

                    <Grid sm>
                        <Card
                            css={{ mw: "330px", $$cardColor: '$colors$gradient', p: "$3" }}
                            data-aos='flip-right'
                            data-aos-duration='1500'
                        >
                            <Card.Header>
                                <Text b size={30}>Our Vision</Text>
                            </Card.Header>
                            <Card.Body css={{ py: "$10" }}>
                                <Text color='white'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                    <Grid sm>
                        <Card
                            css={{ mw: "330px", $$cardColor: '$colors$gradient', p: "$3" }}
                            data-aos='flip-left'
                            data-aos-duration='1500'
                        >
                            <Card.Header>
                                <Text b size={30}>Our Brand values</Text>
                            </Card.Header>
                            <Card.Body css={{ py: "$10" }}>
                                <Text color='white'>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>
            </div>
        </>
    )
}

export default About