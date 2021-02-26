const request = require('supertest');
const config = require('../config.json')
const product_config = require('./product.config.test.json')

describe('Products test', function() {
    it('should return products', async (done) => {
        await request(config.base_url)
        .get(product_config.get)
        .expect('Content-Type', /json/)
        .expect(200)
        done()
    });
})