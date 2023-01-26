/// <reference types="cypress"/>

describe("Locations ",()=>
{

    beforeEach("Login in Walmart Soci",()=>
    {
        cy.login("skakade@meetsoci.com","load keyboard partner worrying")
        cy.visit(Cypress.env("login_url"))
    })

    // it("C2768 -  Verify if user can create a new Location",()=>
    // {
    //     cy.get("span[data-href='locations']").click()
    //     cy.get(".control_wrapper").click()
    //     cy.get(".bbm-modal__title").should("contain","Add New Location")
    //     cy.wait(200)
    //     cy.get("div[class='location_name'] div[class='SingleLineInputView']").type("23 Dec auto loc")
    //     cy.get(".primary_button.gray_button.btn_save").click()
    // })

    it("C2769 - Verify if user can Select the made location ",()=>
    {
        cy.visit(Cypress.env("login_url"))
        cy.get("#select2-chosen-4").click() 
        cy.get("div[class='select2-result-label']").contains("23 Dec Loc edited").click()    
        // cy.get(".select2-container.original").click()
    })





})