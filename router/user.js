const express = require('express');
const axios = require('axios');
const router = express.Router();
const User = require('../model/user');

router.get('/user', async (req, res) => {
  const Users = await User.find();
  res.status(200).json({
    success: true,
    Users,
  });
});

router.post('/register', async (req, res) => {
  const Users = await User.create(req.body);
  res.status(201).json({
    success: true,
    Users,
  });
});

router.get('/stock', async (req, res) => {
  let bloodStock = await getBloodStock(req.query);
  res.status(201).json({
    success: true,
    bloodStock
  });
});

async function getBloodStock(body) {
  const { stateCode, districtCode, bloodGroup } = body;
  let bloodStock = await axios.get(`https://www.eraktkosh.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=${stateCode}&districtCode=${districtCode}&bloodGroup=${bloodGroup}&bloodComponent=11&lang=0&_=1698848741450`)
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  })

  return bloodStock;
}



module.exports = router;
