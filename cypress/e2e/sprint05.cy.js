describe('Sprint 05 automatic tests', () => {

  beforeEach(() =>{
    // Go to the page
    cy.visit('https://www.worten.pt')

    // Click in "Olá! Inicar Sessão"
    cy.xpath("//button[@aria-label='Iniciar Sessão']").click()

    // Click in "Inicar Sessão"
    cy.xpath("//a[@class='button--primary button--md button--red button w-app-link button--primary button--md button--red button']").click()

    // Type the email
    cy.xpath("//input[@id='username']").type("paulomarquestechfixe@gmail.com")

    // Type the password
    cy.xpath("//input[@id='current-password']").type("testesdoestagio")

    // Click in "Iniciar Sessão"
    cy.xpath("//button[@type='submit']").click()

  })
  
  it('TC01-Recondicionated iPhones page', () => {
    // Click in "Produtos"
    cy.xpath("//button[@aria-label='Produtos']").click()

    // Click in "Telemóveis e Smartwatches"
    cy.xpath("//div[@class='nav-tab nav-tab--products nav-tab--active-products']//li[3]").click()

    // Click in "Telemóveis Recondicionados"
    cy.xpath("//a[@href='/telemoveis-e-pacotes-tv/telemoveis-recondicionados']").click()

    // Assertion on the URL
    cy.url().should("eq","https://www.worten.pt/telemoveis-e-pacotes-tv/telemoveis-recondicionados")
  })

  it('TC02-Apple and iPhone SE Filter', () => {
    // Click in "Produtos"
    cy.xpath("//button[@aria-label='Produtos']").click()

    // Click in "Telemóveis e Smartwatches"
    cy.xpath("//div[@class='nav-tab nav-tab--products nav-tab--active-products']//li[3]").click()

    // Click in "Telemóveis Recondicionados"
    cy.xpath("//a[@href='/telemoveis-e-pacotes-tv/telemoveis-recondicionados']").click()

    // Click in "Filtrar"
    cy.get('.filters-bar__filter-button').click({force: true})

    // Choose the brand "Apple"
    cy.xpath("//label[@for='brand_name_APPLE']").click()

    // Choose the model "iPhone SE"
    cy.get('#accordion__content-modelo > [data-v-84311617=""] > .facet-filter__fieldset > .h-input-hide-clear > #inputSearch').type("iphone SE")

    cy.get('#accordion__content-modelo > [data-v-84311617=""] > .facet-filter__fieldset > .facet-filter__content--scroll > :nth-child(2) > .checkbox__container > .checkbox__label').click()
  
    // Click in "Ver Resultados"
    cy.get('.filters__footer > .button--primary').click()

    // Assertions on the product's name
    cy.get('.filters-bar__infos > .filters-bar__product-count').should("be.visible")
    .and("exist")
  })


  it('TC03-Price = or >200€', () => {
    // Click in "Produtos"
    cy.xpath("//button[@aria-label='Produtos']").click()

    // Click in "Telemóveis e Smartwatches"
    cy.xpath("//div[@class='nav-tab nav-tab--products nav-tab--active-products']//li[3]").click()

    // Click in "Telemóveis Recondicionados"
    cy.xpath("//a[@href='/telemoveis-e-pacotes-tv/telemoveis-recondicionados']").click()

    // Click in "Filtrar"
    cy.get('.filters-bar__filter-button').click({force: true})

    // Use price filter to see only products between 0€ and 100€
    cy.get('#input_min').type(0)

    cy.get('#input_max').type(100)

    cy.get('.price-filter__content > .button--primary').click()

    // Click in "Ver Resultados"
    cy.get('.filters__footer > .button--primary').click()

    // Assertion on the value of the product
    cy.get(':nth-child(14) > .product-card--grid-container > .product-card > .product-card__content > .product-card__text-container > .price--md > .price__container > .price__numbers--bold > .value > .integer').should("be.visible")
    .and("exist")

  })

  it('TC04-Detailed informations of the product', () => {
    // Click in "Produtos"
    cy.xpath("//button[@aria-label='Produtos']").click()

    // Click in "Telemóveis e Smartwatches"
    cy.xpath("//div[@class='nav-tab nav-tab--products nav-tab--active-products']//li[3]").click()

    // Click in "Telemóveis Recondicionados"
    cy.xpath("//a[@href='/telemoveis-e-pacotes-tv/telemoveis-recondicionados']").click()

    // Click in "Filtrar"
    cy.get('.filters-bar__filter-button').click({force: true})

    // Choose the brand "Apple"
    cy.xpath("//label[@for='brand_name_APPLE']").click()

    // Choose the model "iPhone SE"
    cy.get('#accordion__content-modelo > [data-v-84311617=""] > .facet-filter__fieldset > .h-input-hide-clear > #inputSearch').type("iphone SE")

    cy.get('#accordion__content-modelo > [data-v-84311617=""] > .facet-filter__fieldset > .facet-filter__content--scroll > :nth-child(2) > .checkbox__container > .checkbox__label').click()

    // Click in "Ver resultados"
    cy.get('.filters__footer > .button--primary').click()

    // Click in the smartphone you want to check the details
    cy.get('.produc-card__name__link').click()

    // Click in "Ler Mais"
    cy.get('.read-more-container__trigger').click()

    // Assertion on the details
    cy.get('.open > .font-m').should("be.visible")
    .and("exist")

  })


  it('TC05-Add iPhone SE to the cart', () => {
    // Click in "Produtos"
    cy.xpath("//button[@aria-label='Produtos']").click()

    // Click in "Telemóveis e Smartwatches"
    cy.xpath("//div[@class='nav-tab nav-tab--products nav-tab--active-products']//li[3]").click()

    // Click in "Telemóveis Recondicionados"
    cy.xpath("//a[@href='/telemoveis-e-pacotes-tv/telemoveis-recondicionados']").click()

    // Click in "Filtrar"
    cy.get('.filters-bar__filter-button').click({force: true})

    // Choose the brand "Apple"
    cy.xpath("//label[@for='brand_name_APPLE']").click()

    // Choose the model "iPhone SE"
    cy.get('#accordion__content-modelo > [data-v-84311617=""] > .facet-filter__fieldset > .h-input-hide-clear > #inputSearch').type("iphone SE")

    cy.get('#accordion__content-modelo > [data-v-84311617=""] > .facet-filter__fieldset > .facet-filter__content--scroll > :nth-child(2) > .checkbox__container > .checkbox__label').click()

    // Click in "Ver resultados"
    cy.get('.filters__footer > .button--primary').click()

    // Click in the smartphone you want to check the details
    cy.get('.produc-card__name__link').click()

    // Click in "Adicionar ao carrinho"
    cy.get('.add-to-cart__button--buy-box').click()
  })

  it('TC06-Resume, total value and shipping costs', () => {

    // Click in the Cart button
    cy.xpath("//a[@aria-label='Carrinho']").click()

    // Assertion on the text
    cy.get('.cart__prices').should("be.visible")
    .and("exist")
  })

  it('TC07-Estimated delivery time', () => {
    // Click in "Produtos"
    cy.xpath("//button[@aria-label='Produtos']").click()

    // Click in "Telemóveis e Smartwatches"
    cy.xpath("//div[@class='nav-tab nav-tab--products nav-tab--active-products']//li[3]").click()

    // Click in "Telemóveis Recondicionados"
    cy.xpath("//a[@href='/telemoveis-e-pacotes-tv/telemoveis-recondicionados']").click()

    // Click in "Filtrar"
    cy.get('.filters-bar__filter-button').click({force: true})

    // Choose the brand "Apple"
    cy.xpath("//label[@for='brand_name_APPLE']").click()

    // Choose the model "iPhone SE"
    cy.get('#accordion__content-modelo > [data-v-84311617=""] > .facet-filter__fieldset > .h-input-hide-clear > #inputSearch').type("iphone SE")

    cy.get('#accordion__content-modelo > [data-v-84311617=""] > .facet-filter__fieldset > .facet-filter__content--scroll > :nth-child(2) > .checkbox__container > .checkbox__label').click()

    // Click in "Ver Resultados"
    cy.get('.filters__footer > .button--primary').click()

    // Click in the product
    cy.get('.produc-card__name__link').click()

    // Assertion on the text
    cy.get('.check-info__text > .neu-11').should("be.visible")
    .and("exist")

  })

  it('TC08-The "Buy" button has to navigate to "Login Checkout', () => {

    // Click in cart button
    cy.xpath("//a[@aria-label='Carrinho']").click()

    // Click in "Comprar"
    cy.xpath('//*[@id="__nuxt"]/div/div/div[2]/div[7]/div/div/div/div[3]/div/a').click()

    // Assertion off the URL, if matches with the requested URL
    cy.url().should("eq","https://www.worten.pt/checkout/v2/billing")
  })
})