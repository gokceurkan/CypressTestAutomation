/// <reference types="cypress" />



describe('başarılı login', () => {
    beforeEach(() => {
        cy.viewport(900, 600)
      cy.visit('https://www.altinyildizclassics.com/login')
    })
  
    it('Başarılı login kontrlü', () => {
        
        var mail= "gokceisildakk@gmail.com"
    
      cy.get("[name='Email'] input").type(mail)

      cy.get("[name='Password'] input").type("Kerberos96")

      cy.get("[class='mt-10']").click()

      cy.wait(5000)

      cy.get("[name='account']").click()

      cy.get("[href='/hesabim/kullanici-bilgileri'] span").click()

      cy.get("[name='Email']").should('have.value',mail)
      
      
    })
    it('Başarısız login kontrlü', () => {
        
      var mail= "gokceisildakk@gmail.com"
  
    cy.get("[name='Email'] input").type(mail)

    cy.get("[name='Password'] input").type("Kerberos96.")

    cy.get("[class='mt-10']").click()

    cy.get("[class='text-red text-sm mt-5']").should("have.text","Kullanıcı bilgileri hatalıdır")
  
    
  })
    
})

