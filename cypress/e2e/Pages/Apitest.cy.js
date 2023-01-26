///<reference types="cypress"/>

describe("",()=>
{
    it("Get Api testcase",()=>
    {
        let results=cy.request("https://reqres.in/api/users?page=2")
        results.its("status").should("equal",200)
        cy.log(results)
    })

    it.only("Post Api testcase",()=>
    {
        cy.request({
            method:"Post",
            url:"https://reqres.in/api/users",
            headers:{
                accept:"application/json"
            }
        }).then((response)=>
        {
          let body=JSON.parse(JSON.stringify(response.body)) 
          cy.log(body.id) 
        })

    })
})