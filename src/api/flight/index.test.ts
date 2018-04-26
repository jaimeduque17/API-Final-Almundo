// process.env.NODE_CONFIG_DIR = `${__dirname}/../../env/`
// import bodyParser from 'body-parser'
// import config from 'config'
// import express from 'express'
// import request from 'supertest'
// import { Database } from '../../database/connection/'
// import { routesServer } from '../../middlewares/routes'
// const configuration = config.get('server')
// const app = express()
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// Object.keys(routesServer).forEach((key) => {
//     app[routesServer[key].verb](routesServer[key].mountPoint, routesServer[key].handle)
// })
// Database.connect(
//     (configuration as any).user,
//     (configuration as any).pwd,
//     (configuration as any).db)
// describe('Testing routes flight', () => {
//     it('It responds GET to /flight', () => {
//         return request(app).get('/flight').then((res) => {
//             expect(200).toEqual(res.status)
//             expect(Array.isArray(res.body.flights)).toBe(true)
//         })
//     })
//     it('It responds GET to /flight/:id', () => {
//         const keys = [ '_id', 'destination', 'image', 'price' ]
//         return request(app).get('/flight/5adbe5a5734d1d0b3c2d9284')
//         .expect(200).then((res) => {
//             const keysExpect = Object.keys(res.body.flight)
//             const keysEquals = [ '_id', 'destination', 'image', 'price' ]
//             const different = keysExpect.every((element) => keysEquals.includes(element))
//             expect(different).toBe(true)
//         })
//     })
// })