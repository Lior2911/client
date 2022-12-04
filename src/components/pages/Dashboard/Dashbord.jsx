import React from "react";
import Header from "../../features/header/Header";
import Product from "../../features/product/Product";
import Stores from "../../features/stores/stores";
import Department from "../../features/department/Department";
import Category from "../../features/category/Category";
import Information from "../../features/information/Information";
import Diagram from "../../features/diagram/Diagram";
import OrderTable from "../../features/orderTable/OrderTable";
import { Row, Col, Container } from "react-bootstrap";

const Dashbord = () => {
  return (
    <>
    <div className="container-fluid g-2" id="mainContainer">

    </div>
      <div className="bg-primary ">
      <Header/>

      </div>
  
      <div className="row bg-secondary pb-2 pt-4 bg-opacity-25 justify-content-center " id="collectionRow">

        <div className="col-3 ">
          Department
          <div className="bg-white mb-2  justify-content-center ">
            <Department/>
          </div>
        </div>

        <div className="col-2">
        Stores
          <div className="bg-white mb-2  justify-content-center">
            <Stores/>
          </div>
        </div>

        <div className="col-2">
        Information
          <div className="bg-white mb-2  justify-content-center">
            <Information/>
          </div>
        </div>

        <div className="col-2">
       Category 

          <div className="bg-white mb-2  justify-content-center">
            <Category/>
          </div>
        </div>

        <div className="col-2">
        Product
          <div className="bg-white mb-2  justify-content-center">
            <Product/>
          </div>
        </div>

      </div>
      <div className="bg-secondary pb-4 pt-4 bg-opacity-25">

      <Diagram />
      </div>
      <div className="row bg-secondary bg-opacity-25">
        <div className="col-4">
          <div className="row  justify-content-between">
          <div className='col-'>
            circle 1
          </div>
          <div className='col-2'>
            circle 2
          </div>
        
        </div>

        </div>
        <div className="col-7">
        <OrderTable/>
        </div>
      </div>

    </>
  );
};
export default Dashbord;
