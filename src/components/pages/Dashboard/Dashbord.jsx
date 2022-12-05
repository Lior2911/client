import React from "react";
import Header from "../../features/header/Header";
import Product from "../../features/product/Product";
import Stores from "../../features/stores/stores";
import Department from "../../features/department/Department";
import Category from "../../features/category/Category";
import Information from "../../features/information/Information";
import Diagram from "../../features/diagram/Diagram";
import OrderTable from "../../features/orderTable/OrderTable";
import LastOrder from "../../features/lastOrders/LastOrders";
import { Row, Col, Container } from "react-bootstrap";
import "./Dashboard.css";
const Dashbord = () => {
  return (
    <>
      <div className="container-fluid g-2" id="mainContainer"></div>
      <div className="headerDiv ">
        <Header />
      </div>

      <div
        className="row bg-secondary pb-2 pt-4 bg-opacity-25 justify-content-center "
        id="collectionRow"
      >
        <div className="col-sm-2 col-md-3 ">
          Department
          <div className="bg-white mb-2  justify-content-center ">
            <Department />
          </div>
        </div>

        <div className="col-sm-2 col-md-3">
          Stores
          <div className="bg-white mb-2  justify-content-center">
            <Stores />
          </div>
        </div>

        <div className="col-sm-2 col-md-2">
          Information
          <div className="bg-white mb-2  justify-content-center">
            <Information />
          </div>
        </div>

        <div className="col-sm-2 col-md">
          Category
          <div className="bg-white mb-2  justify-content-center">
            <Category />
          </div>
        </div>

        <div className="col-2">
          Product
          <div className="bg-white mb-2  justify-content-center">
            <Product />
          </div>
        </div>
      </div>
      <div className="bg-secondary  pb-4 pt-4 bg-opacity-25">
        <Diagram />
      </div>
      <div className="row bg-secondary bg-opacity-25">
        <div className="col-sm-12 col-md-5 ">
          <div className="row circleContainer " id="">
            <div className="circle">
              <div className="circleO">
                <LastOrder />
              </div>
            </div>
            
            <div className="circle">
              
              <div className="circleO">
                
                <LastOrder />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 text-center">
          <h5 className=" bg-white">upcoming orders</h5>
          <OrderTable />
        </div>
      </div>
    </>
  );
};
export default Dashbord;
