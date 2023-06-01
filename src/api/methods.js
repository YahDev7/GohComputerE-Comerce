
export const method={
    get:async(url)=>{
        const res = await fetch(url)
        const res2 =await res.json(); 
        return res2;
    },
    post:async(url,body,headers={ "Content-Type": "application/json"})=>{
        let options= {
            method: "POST",
            body: JSON.stringify(body),
            headers
          }

        const res = await fetch(url,options)
        const res2 =await res.json();    
        return res2;
    },
    put:async(url,body,headers={ "Content-Type": "application/json"})=>{
        let options= {
            method: "PUT",
            body: JSON.stringify(body),
            headers
          }

        const res = await fetch(url,options)
        const res2 =await res.json();    
        return res2;
    },
    delete:async(url,body,headers={ "Content-Type": "application/json"})=>{
        let options= {
            method: "DELETE",
            //body: JSON.stringify(body),
            headers
          }

        const res = await fetch(url,options)
        const res2 =await res.json();    
        return res2;
    }
}