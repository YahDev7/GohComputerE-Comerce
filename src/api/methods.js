const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjNiN2MzN2Q2ZTAyOThlZTczM2UxZSIsIm5vbWJyZSI6IndpZWwiLCJlbnRlcnByaXNlX2lkIjoiNjQ2M2I3MTc2ZjYyZWFiZGM1ZDczMjlkIiwicm9sIjoiQURNSU4iLCJpYXQiOjE2ODYzMzQyOTYsImV4cCI6MTY4NzE5ODI5Nn0.eTlZP-OMGonCzsioBaGixSLPioAcPku8sOMGpGb3zIA';

export const method={
    
    get:async(url,headers={ })=>{

        const res = await fetch(url,{headers})
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
    delete:async(url,headers={ "Content-Type": "application/json"})=>{
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