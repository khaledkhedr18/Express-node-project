/**
 * @desc    Get all contacts
 * @route   GET /api/contacts
 * @access  Public
 */

const getContact = (req, res) => {
  res.json({ message: 'Get all contacts' });
};

/**
 * @desc    Create contact
 * @route   POST /api/contacts
 * @access  Public
 */
const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    console.log('All fields are required');
    res.status(400);
    throw new Error('All fields are required');
  } else {
    console.log('created contact successfully');
    console.log('the body of the request is', req.body);
  }
  res.json({ message: 'Contact created' });
};

/**
 * @desc    Update contact for id
 * @route   PUT /api/contacts/:id
 * @access  Public
 */
const updateContact = (req, res) => {
  res.json({ message: `Update contact for id ${req.params.id}` });
};

/**
 * @desc    Get contact for id
 * @route   GET /api/contacts/:id
 * @access  Public
 */
const getContactForId = (req, res) => {
  res.json({ message: `Get contact for id ${req.params.id}` });
};

/**
 * @desc    Delete contact for id
 * @route   DELETE /api/contacts/:id
 * @access  Public
 */
const deleteContact = (req, res) => {
  res.json({
    message: `Deleted Contact with id ${req.params.id} Successfully!`,
  });
};

module.exports = {
  getContact,
  createContact,
  updateContact,
  getContactForId,
  deleteContact,
};
