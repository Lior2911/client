export const getDepartment = async ()=>{
  try{
    const response = await fetch('http://localhost:6060/department/')
    const stores = response.json()
    return stores

  }
  catch(error){
    console.log(error);

  }
}
