describe('search  element', () => {
    beforeEach("precondicion estar en el sitio web",()=>{
        cy.visit("/");

    });

    it("search diferent element wit multiple result",()=>{
        cy.fixture("index").then((index)=>{
            cy.get(index.searchBox).type("dress");
            cy.get(index.searchButton).click();
        });
        cy.fixture("searchResult").then((locator)=>{
            cy.get(locator.title).should("contain.text","dress");
        });


    }); 

    it("search from elements with not result",()=>{
        cy.fixture("index").then((elements)=>{
            cy.get(elements.searchBox).type("qwerty");
            cy.get(elements.searchButton).click();
        });
        cy.fixture("searchResult").then((locator)=>{
            cy.get(locator.alert).should("contain.text","No results were found for your search");
        });

    });
});
