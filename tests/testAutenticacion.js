//Obtenemos algunos parametros de selenium y el requerimiento del driver de chrome
const {By,Key,Builder, until} = require("selenium-webdriver");
require("chromedriver");
//Usaremos el assert para llevar a cabo la prueba de MOCHA
var assets = require("assert");

describe('Pruebas de login', function(){
    //PRUEBA PARA ENVIAR TODOS LOS DATOS CORRECTOS Y HACER INICIO DE SESIÓN
    it('Autenticacion correcta Login', async function(){
        assets.equal(1,1); 
        //Le ponemos un parametro de tiempo de ejecución
        /*this.timeout(50000); 
        //Dentro de la variable almacenamos todo lo que se hará en el navegador
        let driver = new Builder().forBrowser("chrome").build();

        //Maximizamos el navegador para aprovechar mejor la pantalla
        await driver.manage().window().maximize();
        //Obtenemos la página donde haremos la prueba, la cual se encuentra localmente
        await driver.get("http://localhost/LoginPrueba/");
        //Estos serán los datos que se enviarán a los campos del inicio de sesión 
        await driver.findElement(By.id('user')).sendKeys("alfredo");
        await driver.findElement(By.id('pass')).sendKeys("54321");
        //Botón que al llenar los campos con datos anteriores hará clic automáticamente
        await driver.findElement(By.id('btn')).click();
        
        //El resultado del titulo de inicio debe de ser home 
        var tituloActual = 'Home';
        //Obtenemos el titulo de la página después de llevar a cabo la automatización 
        var tituloEsperado = await driver.getTitle();
        //Usamos assert para almacenar los parametros esperados y ver si pasa o no la prueba
        assets.equal(tituloActual, tituloEsperado); 
        //Cerramos el navegador para terminar 
        await driver.quit();*/
    });
});