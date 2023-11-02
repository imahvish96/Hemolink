import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function StockReponsive({ stock }) {
  const [stockDetails, setStockDetails] = useState();
  const [access, setAccess] = useState(false);
  

  const refineStock = () => {
    if (stock) {
      const { data } = stock?.bloodStock;
      const refinedData = data.map((val, i) => {
        const address = val[1].split("<br/>").join(", ");
        const tempElement = document.createElement("div");
        tempElement.innerHTML = val[3];
        let textContent = tempElement.textContent.split(":")[1];
        console.log('00098', textContent ? textContent : 0);
        const availability = textContent ? textContent : 0;
        
        return [
          val[0],
          address,
          val[2],
          availability,
          val[4],
        ];
      });
      setStockDetails(refinedData);
    }
  };

  useEffect(() => {
    refineStock();
    if(stock) setAccess(true);
  }, [stock]);
  return (
   <>
     {access ? (<Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Blood Bank</th>
            <th>Category</th>
            <th>Availability</th>
            <th>Last Update</th>
          </tr>
        </thead>
        <tbody>
          {stock &&
              stockDetails?.map((row, i) => (
              <tr key={i}>
                {row.map((item) => (
                  <td>{item}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </Table>) : (<p style={{textAlign:'center', margin:'80px 0px'}}>No Data Available</p>)}
   </>
  );
}

export default StockReponsive;
