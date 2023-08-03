const server = require('../src/app')
const session = require('supertest')
const agent = session(server)

describe('Test de RUTAS', ()=> {
    describe('GET /rickandmorty/character/:id', ()=> {
        it('Responde con status: 200', async()=> {
            await agent.get('/rickandmorty/character/1').expect(200)
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=> {
            const response = await agent.get('/rickandmorty/character/1')
            const props = ["id", "name", "species", "gender", "status", "origin", "image"]
            props.forEach((prop)=> {
                expect(response.body).toHaveProperty(prop)
            } )
        })

        it('Si hay un error responde con status: 500', async()=> {
            await agent.get('/rickandmorty/character/900').expect(500)
        })
    })
})

describe('GET /rickandmorty/login', ()=> {
    it('Si la informacion de login es correcta', async()=> {
        const access = { access: true}

        const response = await agent.get('/rickandmorty/login?email=ale@gmail.com&password=abc1234')
        expect(response.body).toEqual(access)
    })

    it('La informacion de login es incorrecta', async()=> {
        const access = { access: false}

        const response = await agent.get('/rickandmorty/login?email=aleJ@gmail.com&password=ab1234')
        expect(response.body).toEqual(access)
    })
})


let character1
beforeEach(()=> {
    character1 = {
        id: 877, 
        name: 'Jose', 
        species: 'Human', 
        gender: 'Male', 
        status: 'Alive', 
        origin: 'Earth', 
        image: 'image.png'
    }

    return character1
})

describe('POST /rickandmorty/fav', ()=> {
    const character2 = { 
        id: 878, 
        name: 'Ansony', 
        species: 'Human', 
        gender: 'Male', 
        status: 'Alive', 
        origin: 'Earth', 
        image: 'image2.png'
    }
    it('devuelve el elemento en un array', async()=> {
        const response = await agent.post('/rickandmorty/fav').send(character1)
        expect(response.body).toContainEqual(character1)
    })

    it('Devuelve el elemento previamente creado', async()=> {
        const response = await agent.post('/rickandmorty/fav').send(character2)
        expect(response.body).toContainEqual(character1)
        expect(response.body).toContainEqual(character2)
    })
})


describe('DELETE /rickandmorty/fav/:id', ()=> {
    const character2 = { 
        id: 878, 
        name: 'Ansony', 
        species: 'Human', 
        gender: 'Male', 
        status: 'Alive', 
        origin: 'Earth', 
        image: 'image2.png'
    }
    it('Devuelve un arreglo si no se elimina ningun personaje', async()=> {
        const response = await agent.delete('/rickandmorty/fav/45')
        expect(response.body).toContainEqual(character1)
        expect(response.body).toContainEqual(character2)
    })

    it('Elimina correctamente al personaje con el ID especificado', async()=> {
        const response = await agent.delete('/rickandmorty/fav/877') // este id corresponde al character1
        expect(response.body).toContainEqual(character2)
    })
})