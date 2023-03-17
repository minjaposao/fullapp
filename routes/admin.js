const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
  res.send('Admin Page Radi');
});

module.exports = router;
