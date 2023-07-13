import React from 'react';
import { Navbar, Link, Text, Modal, Button, Input, Row } from "@nextui-org/react";



function BarNav() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };

    const [visibleSignUp, setVisibleSignUp] = React.useState(false);
    const handlerSignUp = () => setVisibleSignUp(true);
    const closeSignUp = () => {
        setVisibleSignUp(false);
    };

    return (
        <>
            <Navbar isBordered isCompact variant="sticky">
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    {/* <AcmeLogo /> */}
                    {/* <img src={favicon} alt='icon' width={50} height={50} /> */}
                    <Text b color="inherit" size={30}>
                        nude
                    </Text>
                    <Text b color='error' size={30}>.</Text>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="secondary"
                    hideIn="sm"
                    variant="highlight-rounded"
                >
                    <Navbar.Link isActive href="/">Home</Navbar.Link>
                    <Navbar.Link href="./products">Products</Navbar.Link>
                    <Navbar.Link href="./product">About</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="secondary"
                    hideIn="sm"
                    variant="highlight-rounded"
                >
                </Navbar.Content>


                <Navbar.Toggle showIn="sm" />

                <Navbar.Collapse>
                    <Navbar.CollapseItem activeColor="secondary">
                        <Link color="secondary" href="#">Home</Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem activeColor="secondary">
                        <Link color="secondary" href="#">Products</Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem activeColor="secondary">
                        <Link color="secondary" href="#">About</Link>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </Navbar>






            <Modal
                closeButton
                preventClose
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                className='m-2'
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                            &nbsp;nude
                        </Text>
                        <Text b size={18} color='error'>
                            .
                        </Text>
                    </Text>
                </Modal.Header>
                
            </Modal>
        </>
    )
}

export default BarNav