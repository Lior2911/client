export const getInformation = async ()=>{
  try{
 return await fetch('http://localhost:6060/information/').then(res=>res.json()).then(res=>console.log(res))
  }
  catch(error){
    console.log(error);

  }
}
