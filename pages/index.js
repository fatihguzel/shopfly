import { Inter } from "@next/font/google";
import { Col, Row } from "reactstrap";
import CategoryLists from "../components/CategoryList";
import ProductList from "../components/Products";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Row
        style={{
          width: "100%",
        }}
      >
        <Col xs="3">
          <CategoryLists />
        </Col>
        <Col xs="9">
          <ProductList />
        </Col>
      </Row>
    </div>
  );
}
