const routes = require('express').Router();
const { modelNames } = require('mongoose');

// const routes = require('express').Router();
const Post1 = require('./models/Equipment');
const Post2 = require('./models/People');
const Post3 = require('./models/Loan');

routes.get('/equipment', async (req, res) => {
  const EquipmentPost = await Post1.find();

  return res.json(EquipmentPost);
});

routes.post('/equipment', async (req, res) => {
  const {
    equipmentTipping,
    equipmentTippingDate,
    equipmentBrand,
    equipmentName,
    equipmentModel,
    equipmentType,
    equipmentStatus,
  } = req.body;
  const EquipmentPost = await Post1.create({
    equipmentTipping,
    equipmentTippingDate,
    equipmentBrand,
    equipmentName,
    equipmentModel,
    equipmentType,
    equipmentStatus,
  });
  return res.json(EquipmentPost);
});

routes.get('/people', async (req, res) => {
  const PeoplePost = await Post2.find();

  return res.json(PeoplePost);
});
routes.post('/people', async (req, res) => {
  const {
    peopleName,
    peopleSurname,
    peopleBond,
    peopleCPF,
    peopleStatus,
  } = req.body;
  const PeoplePost = await Post2.create({
    peopleName,
    peopleSurname,
    peopleBond,
    peopleCPF,
    peopleStatus,
  });
  return res.json(PeoplePost);
});

routes.get('/loan', async (req, res) => {
  const LoanPost = await Post3.find();

  return res.json(LoanPost);
});
routes.post('/loan', async (req, res) => {
  const {
    loanId,
    loanDate,
    loanDateDevolutionPrevison,
    loanDateDevolution,
    loanStatus,
    loanIdUser,
    loanIdEmployee,
    loanIdEquipment,
  } = req.body;
  const LoanPost = await Post3.create({
    loanId,
    loanDate,
    loanDateDevolutionPrevison,
    loanDateDevolution,
    loanStatus,
    loanIdUser,
    loanIdEmployee,
    loanIdEquipment,
  });
  return res.json(LoanPost);
});

module.exports = routes;
