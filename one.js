//  Write a function getUserData that simulates fetching userdata(name,age,place)from an API 
//  using a promise and async/await syntax.Use setTimeOut to simulate a 2 second delay in the data fetching process 
 
async function getUserData(){
    let l=new Promise(resolve=>{
        setTimeout(()=>{
        data={
            name:"anu",age:20,place:"palakkad"
        }
        resolve(data)
        }
    ,2000)})  
    console.log(await l)    
}
getUserData();

    //  let l=new Promise(resolve=>{
    //         setTimeout(()=>{
    //                 data={
    //                     name:"anu",age:20,place:"palakkad"
    //                 }
    //              resolve(data)
    //         },2000)  
    //     })
    // async function getUserData() {
    //     let d=await l
    //     console.log(d)
        
    // }
    // getUserData()