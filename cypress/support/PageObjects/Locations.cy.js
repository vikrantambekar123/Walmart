/// <reference types="cypress"/>

class Location
{
    

    ClickLocationTab()
    {
        return cy.get("[data-href='locations']").click()
    }

    ClickAdd_Location_Button()
    {
        return cy.get("[data-tab='projects']").contains("Add Location").click()
    }

    Add_Location_Name(Location_name)
    {
        return cy.get("div[class='location_name'] input[placeholder='No Data']").type(Location_name)
    }

    Click_Save_button()
    {
        return cy.get(".primary_button.gray_button.btn_save").click()
    }


}


export default Location;