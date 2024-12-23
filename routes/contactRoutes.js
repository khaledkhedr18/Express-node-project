const express = require('express');
const router = express.Router();
const {
  getContact,
  createContact,
  updateContact,
  getContactForId,
  deleteContact,
} = require('../controllers/contactController');

router.route('/').get(getContact).post(createContact);

router
  .route('/:id')
  .get(getContactForId)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
