import crossroads from 'crossroads'
import homeController from './controllers/homeController'
import contactController from './controllers/contactController'
import peopleController from './controllers/peopleController'
import localStorageController from './controllers/localStorageController'

crossroads.addRoute('#/', function () {
  $('#root').load('./partials/home.html',homeController)
})

crossroads.addRoute('#/people', function () {
  $('#root').load('./partials/people.html',peopleController) 
  console.log('People page')
})

crossroads.addRoute('#/local-storage', function () {
  $('#root').load('./partials/local-storage.html',localStorageController)
})

crossroads.addRoute('#/contact', function () {
  $('#root').load('./partials/contact.html', contactController) 
    console.log('Se cargo contacto')
  
})

// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
  crossroads.parse(window.location.hash)
})

crossroads.parse(window.location.hash)
