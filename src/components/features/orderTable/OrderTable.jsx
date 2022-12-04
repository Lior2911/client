import Table from "react-bootstrap/Table";
import { orderTableContext } from "../../../context/orderTableContext";
import { useContext } from "react";

function OrderTable() {
  const { table } = useContext(orderTableContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>orderNumber</th>
          <th>name</th>
          <th>address</th>
          <th>deliveryDate</th>
          <th>numOfItem</th>
          <th>sum</th>
   
        </tr>
      </thead>
      <tbody>
        {table?.map((item) => {
          return (
            <tr>
              <td>{item}</td>
         
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default OrderTable;
