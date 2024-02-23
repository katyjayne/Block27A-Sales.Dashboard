import { mockTransactions } from "../mockData";

export default function Revenue() {
  
  const totalRevenue = mockTransactions.reduce((total, curTrans) => total + parseFloat(curTrans.cost), 0)
  .toFixed(2);
  
  
  const averageCost = (totalRevenue / mockTransactions.length).toFixed(2);

  return (
    <>
    <h4>Total Revenue: ${totalRevenue}</h4> 
    <h4> Average Cost: + ${averageCost}</h4>
    </>
  )
  
}