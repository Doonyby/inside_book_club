global.DATABASE_URL = 'mongodb://localhost/inside_book_club-test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';

const should = chai.should();
const app = server.app;
//const storage = server.storage;
//const Item = require('../models/item');

chai.use(chaiHttp);

describe('Inside Book Club Server', function() {
    it('should list items on get');
    it('should add an item on post');
    it('should edit an item on put');
    it('should delete an item on delete');
});

// describe('Shopping List', function() {
//     before(function(done) {
//         server.runServer(function() {
//             Item.create({name: 'Broad beans'},
//                         {name: 'Tomatoes'},
//                         {name: 'Peppers'}, function() {
//                 done();
//             });
//         });
//     });
//     it('should list items on GET', function(done) {
//         chai.request(app)
//             .get('/items')
//             .end(function(err, res) {
//                 res.should.have.status(200);
//                 done();
//             });
//     });
//     after(function(done) {
//         Item.remove(function() {
//             done();
//         });
//     });
// });