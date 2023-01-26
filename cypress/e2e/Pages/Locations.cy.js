///  <reference types="cypress"/>
import Location from "../../support/PageObjects/Locations.cy"



describe("Locations",()=>
{        
    const l=new Location()

    beforeEach("",()=>
    {
        cy.login("skakade@meetsoci.com","load keyboard partner worrying")
        // cy.visit("https://wm.meetsoci.com/admin/account/42000004")

    })


    it.only("C2768  Verify if user can create a new Location",()=>
    {
        cy.visit("https://wm.meetsoci.com/admin/account/42000004")
        l.ClickLocationTab()
        l.ClickAdd_Location_Button()
        var a=cy.New_Loc_create().then((a)=>{
            l.Add_Location_Name(a)
        })
        Cypress.env('NewLoc', a)

        // l.Click_Save_button()
    })

    it("C2769 Verify if user can Select the made location",()=>
    {
        cy.visit("https://wm.meetsoci.com/admin/account/42000004")
        
    })

    // it.only("Current_Time",()=>
    // {
    //     const a=cy.New_Loc_create().then((a)=>{cy.log(a)})
    // })





})