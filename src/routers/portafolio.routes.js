const{Router} = require('express')

const router = Router()

const { renderAllPortafolios,
        renderPortafolio,
        renderPortafolioForm,
        createNewPortafolio,
        renderEditPortafolioForm,
        updatePortafolio,
        deletePortafolio
    } = require('../controllers/portafoliocontrollers')

// Crear rutas y llamar a mis metodos del controlador
router.get('/portafolio/add', renderPortafolioForm)
router.post('/portafolio/add', createNewPortafolio)

router.get('/portafolios', renderAllPortafolios)
router.get('/portafolio/:id', renderPortafolio)

router.get('/portafolio/edit/:id', renderEditPortafolioForm)
router.put('/portafolio/edit/:id', updatePortafolio)

router.delete('/portafolio/delete/:id', deletePortafolio)



module.exports = router