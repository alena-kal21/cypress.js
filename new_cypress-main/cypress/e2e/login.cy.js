describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');  //Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цв.кнопки востан.пароль

         cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1');    //Ввели верный пароль
         cy.get('#loginButton').click();   //Нажать кнопку войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю,что после авто.вижу текст
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик,он виден для пользователя

      
 
     })

     it('Востановление пароля', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#forgotEmailButton').click(); //Нажали кнопку <<Забыли пароль>>

        cy.get('#mailForgot').type('alena@kalachnikova.ru'); //Ввести любой имейл
        cy.get('#restoreEmailButton').click();  

        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик,он виден для пользователя



    })


        it('Негативная авторизация логина', function () {
            cy.visit('https://login.qa.studio/');  //Зашли на сайт

            cy.get('#mail').type('german@dolnikov.ru'); //Ввести правельный логин
            cy.get('#pass').type('iLoveqastudio5'); //Ввести не правельный пароль
            cy.get('#loginButton').click();   //Нажать кнопку войти

            cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик,он виден для пользователя

           
    
     })
    

         it('Негативная авторизация пароля', function () {
            cy.visit('https://login.qa.studio/');  //Зашли на сайт

             cy.get('#mail').type('al_kala123.ru'); //Ввести правельный логин
            cy.get('#pass').type('iLoveqastudio1'); //Ввести не правельный пароль
            cy.get('#loginButton').click();   //Нажать кнопку войти


            cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик,он виден для пользователя

     })

     it('Негативная валидация', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //Ввели верный логин

        cy.get('#pass').type('iLoveqastudio1');    //Ввели верный пароль
        cy.get('#loginButton').click();   //Нажать кнопку войти

        
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик,он виден для пользователя
       
    })

    it('Проверка приведения к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');  //Зашли на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1');    //Ввели верный пароль
        cy.get('#loginButton').click();   //Нажать кнопку войти

        
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик,он виден для пользователя
       
       
       
    })
    

        
 
      
 })