export const getOrderTable = async ()=>{
  try{
    const response = await fetch('http://localhost:6060/orders')
    const category = response.json()
    return category
  }
  catch(error){
    console.log(error);

  }
}
