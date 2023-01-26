/// <reference types="cypress"/>


describe("Ads Testcases",()=>
{

    beforeEach("Login in Walmart Soci",()=>
    {
        cy.login("skakade@meetsoci.com","load keyboard partner worrying")
        cy.visit("https://wm.meetsoci.com/admin/account/42000004")

    })


    it("C2791 -  Verify if Dashboard loads",()=>
    {
        cy.Jump_to_Location("23 Dec Loc edited")                                        //Common Command written for selecting Locations
        cy.get("div[data-href='ads'] > .section-heading > .section-label").click()
    })



    it("C2792 - Verify if user is able create Audience",()=>
    {
        cy.Jump_to_Location("23 Dec Loc edited")                                        //Common Command written for selecting Locations

        cy.get("span[data-href='ads_audiences']").click()                               // Clicking on Audience
        cy.get(".btn_create_audience").click()                                          //Clicking on Create Audience
        cy.get("div[class='title'] h1").should("have.text","Create your own audience.")
        cy.get(".audience_name").type(Cypress.env("Audience_Create"))                   // Entering Audience name

        cy.get(".use_custom_location > .label_radio").click()                            //Selecting Locations Radiobutton
        cy.get("#s2id_autogen56").click()
        cy.get("#s2id_autogen56").type("x")
        cy.get(".select2-result-label").eq(1).click()
        cy.get(".primary_button.gray_button.btn_save").click()                          // Clicking on Submit button
        cy.get("[data-cy='toast_message']").should("have.text","\n\t\tAudience created!\n\t\t\n\t")     //Validating Success message

    })


    it("Verify if user is able create Library ",()=>
    {
        cy.Jump_to_Location("23 Dec Loc edited")
        cy.get("span[data-href='ads_audiences']").click()                                               //Clicking on Ads Plus
        cy.get("[data-href='ads_creatives']").click()                                                   //Clicking on Creatives
        cy.get("div[title='Create Library']").click()                                                   //Clicking on Create Library
        cy.get(".bbm-modal__title").should("have.text","Create Library")                                //Validating Create Library Text
        cy.get("#name").type(Cypress.env("Ads_Library"))                                                //Entering Ads Name 
        cy.get(".primary_button.gray_button.w-xs.btn_submit").click()                                   //Clicking on Submit button
        cy.get("[data-cy='toast_message']").should("have.text","\n\t\tLibrary created!\n\t\t\n\t")      //Validating Success Message
    })


    it.only("Verify if user is able create Creative",()=>
    {
        cy.Jump_to_Location("23 Dec Loc edited")
        cy.get("span[data-href='ads_audiences']").click()                                               //Clicking on Ads Plus
        cy.get("[data-href='ads_creatives']").click()                                                   //Clicking on Creatives
        
        cy.get("#select2-chosen-28").click()
        cy.get("#select2-chosen-28").type(Cypress.env("Ads_Library"))
        // cy.wait(2000)
        cy.get("#select2-result-label-30 > .content_selector_element > .name").click()
        cy.wait(2000)
        cy.get(".btn_add_creative").click()
        // cy.get(".bbm-modal__title").should("have.text","New Creative")
        // cy.get(".btn_upload_image").selectFile("Beach_Test.jpg")
    })
    





})