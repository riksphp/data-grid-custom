import { Col, Grid, Row } from "./components/LayoutComponent";
import mockData, { IProduct } from "./MockData";
import "./translations/i18n";
import { useTranslation } from "react-i18next";
import { Itrans } from "./interfaces/common.interface";
import { Header } from "./components/Header";

export const App = () => {
  const trans = useTranslation();
  const t = trans.t as Itrans;

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Grid>
        <Row>
          <Col size={1}>{t("ProductId")}</Col>
          <Col size={1}>{t("description")}</Col>
          <Col size={1}>{t("price")}</Col>
          <Col size={1}>{t("ratings")}</Col>
          <Col size={1}>{t("origin")}</Col>
        </Row>

        {mockData.map((ele: IProduct) => {
          return (
            <Row key={ele.productId}>
              <Col size={1}>{ele.productId}</Col>
              <Col size={1}>{ele.description}</Col>
              <Col size={1}>{ele.price}</Col>
              <Col size={1}>{ele.ratings}</Col>
              <Col size={1}>{ele.origin}</Col>
            </Row>
          );
        })}
      </Grid>
    </div>
  );
};

export default App;
