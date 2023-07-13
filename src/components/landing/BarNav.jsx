import React from "react";
import {
  Navbar,
  Link,
  Text,
  Modal,
  Button,
  Input,
  Row,
} from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";

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
      <Navbar isBordered isCompact variant="sticky" className="navIndex">
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
          <Text b color="error" size={30}>
            .
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="sm"
          variant="highlight-rounded"
        >
          <Navbar.Link isActive href="#">
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Products</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="sm"
          variant="highlight-rounded"
        >
          <Navbar.Link href="#" onPress={handler}>
            LogIn
          </Navbar.Link>
          <Navbar.Link href="#" onPress={handlerSignUp}>
            SignUp
          </Navbar.Link>
        </Navbar.Content>

        <Navbar.Toggle showIn="sm" />

        <Navbar.Collapse>
          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#">
              Home
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#">
              Products
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#">
              About
            </Link>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#" onPress={handler}>
              LogIn
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#" onPress={handlerSignUp}>
              SignUp
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>

      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className="m-2"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              &nbsp;nude
            </Text>
            <Text b size={18} color="error">
              .
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className="my-3">
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Email"
              contentLeft={<Mail fill="currentColor" />}
              id="email"
              name="email"
            />
          </div>
          <div className="my-3">
            <Input.Password
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Password"
              contentLeft={<Password fill="currentColor" />}
              id="password"
            />
          </div>
          <Row justify="space-between">
            <Text size={14}>
              <Link href="#" onPress={handlerSignUp}>
                Don't have Account?
              </Link>
            </Text>
            <Text size={14}>
              <Link href="#">Forgot password?</Link>
            </Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto>Sign in</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visibleSignUp}
        onClose={closeSignUp}
        className="m-2"
      >
        <Modal.Header>
          <Text id="modal-title" b size={23}>
            Create an account
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className="my-3">
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Email"
              contentLeft={<Mail fill="currentColor" />}
              id="emailCreate"
            />
          </div>
          <div className="my-3">
            <Input.Password
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Password"
              contentLeft={<Password fill="currentColor" />}
              id="passCreate"
            />
          </div>
          <div className="my-3">
            <Input.Password
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Password Again"
              contentLeft={<Password fill="currentColor" />}
              id="passCreateCheck"
            />
          </div>
          <Text size={14}>
            <Link href="#" onPress={handler}>
              Already have Account?
            </Link>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeSignUp}>
            Close
          </Button>
          <Button auto>Sign Up</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BarNav;
