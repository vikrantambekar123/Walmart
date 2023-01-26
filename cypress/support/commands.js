// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username,password) => 
{
        cy.session([username, password], () => 
        {
        cy.visit("https://wm.meetsoci.com/")
        cy.get("input[name='email']:visible").type(username)                  //Entering Username 
        cy.get("input[name='password']").type(password)               //Entering Password 
        cy.wait(1000)
        cy.get("#password_login > .gray_button").click()  
        })    
})

Cypress.Commands.add('Today_Day', () => 
{
        const date = new Date();
        let day = date.getDate();
        const newDtae=day+1
        // cy.log(newDtae);
        return newDtae
})



Cypress.Commands.add('New_Loc_create', () => {
        const date = new Date();
        let day = date.getDate();
        // cy.log(day)
        var nameOfMonth = new Date().toLocaleString(
            'default', {month: 'long'}
          );
        nameOfMonth=nameOfMonth.slice(0,3);
        const result = Math.random().toString(36).substring(2,7).toUpperCase()
        // cy.log(result);
        const newloc= day+"_"+nameOfMonth+"_loc_"+ result
        // cy.log(newloc)
        return newloc
})


Cypress.Commands.add('Jump_to_Location', (Location_name) => 
{
        cy.get("#select2-chosen-4").click() 
        cy.get("div[class='select2-result-label']").contains(Location_name).click()
})





