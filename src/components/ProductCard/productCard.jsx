import React from "react";
import { Card, Text, Row, Button, Col, Spacer } from "@nextui-org/react";
import { css } from "@emotion/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {

  return (
    <>
      <Card isPressable isHoverable css={{ w: "100%", h: "400px" }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            showSkeleton
            src={products.image}
            objectFit="contain"
            width="100%"
            height="100%"
            alt={products.Name}
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
            color: "white",
          }}
        >
          <Row>
            <Col>
              <Row justify="space-between">
                <Text css={{ color: "white" }}>{products.Name}</Text>
                <Text css={{ color: "white" }}>{products.price}</Text>
              </Row>
              <Row justify="center">
                <Text css={{ color: "white" }}>{products.details}</Text>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProductCard;
