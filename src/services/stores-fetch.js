export const getStores = async ()=>{
  try{
    const response = await fetch('http://localhost:6060/stores/')
    const stores = response.json()
    return stores

  }
  catch(error){
    console.log(error);

  }
}
