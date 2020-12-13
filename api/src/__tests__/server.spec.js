const request = require("supertest")
const {app} = require("../server")

describe("API", () => {

    test('GET /', async () => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })

    test('Get /healthcheck', async () => {
        const response = await request(app).get('/healthcheck')
        expect(response.statusCode).toBe(200)
    })

    test('GET /stats', async () => {
        const response = await request(app).get('/stats')
        expect(response.statusCode).toBe(200)
    })

    test('POST /echo', async () => {
        const response = await request(app)
            .post('/echo')
            .send({message: "Hello World"})
            .set('Accept', 'application/json')

        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe("Hello World")
    })

})