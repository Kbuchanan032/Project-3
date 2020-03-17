const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/localtion');

const Shelter = require('../models/shelter')
const User = require('../models/user')





const getShelterById = async (req, res, next) => {
  const shelterId = req.params.sid;

  let shelter;
  try {
    shelter = await Helter.findById(shelterId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a shelter.',
      500
    );
    return next(error);
  }

  if (!shelter) {
    const error = new HttpError(
      'Could not find shelter for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ shelter: shelter.toObject({ getters: true }) });
};

const getSheltersByUserId = async (req, res, next) => {
    const userId = req.params.uid;
  
    let shelters;
    //let userWithShelters
    try {
      shelters = await Shelter.find({creator: userId});
      //userWithShelters = await (await User.findById(userId)).populated('shelters')
    }catch(err){
      const error = new HttpError('Fetching shelters failed, please try again later.', 500);
      return next(error);
    }
    
  
    if (!shelters || shelters.length === 0) {
      //if (!userWithShelters || userWithShelters.length === 0) {
      return next(
        new HttpError('Could not find shelters for the provided user id.', 404)
      );
    }
  
    res.json({ shelters: shelters.map(shelter => shelter.toObject({getters: true})) });
    //res.json({ shelters: userWithShelters.map(shelter => shelter.toObject({getters: true})) });
  };

const createShelter = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      console.log(errors);
    next(new HttpError('Invalid inputs passed, please check your data.', 422)) ;
  }
   const  {name, address, description, phoneNumber, availableBeds, totalBeds, creator} = req.body;
   
   let coordinates;
   try {
     coordinates = await getCoordsForAddress(address);
   } catch (error) {
    console.log(error)
     return next(error);
   }
   

   const createdShelter = new Shelter ({
     name,
     address,
     description,
     phoneNumber,
     availableBeds,
     totalBeds,
     image: 'https://lh5.googleusercontent.com/p/AF1QipN09fE5Sa3Gsv38eRPWhjW6B-_BaTAIsoL8cGr0=w152-h114-p-k-no',
     location: coordinates,
     creator
   });

   let user;

   try {
     user = await User.findById(creator);
   }catch (err) {
     console.log(err)
     const error = new HttpError(
       'Creating shelter failed, please try again', 500);
       return next(error);
   }

   if (!user){
     const error = new HttpError('Could not find user for provided id', 404);
     return next(error)
   }

   try {
    await createdShelter.save();
    // const sess = await mongoose.startSession();
    // sess.startTransaction();
    // await createdShelter.save({ session: sess }); 
    // user.shelters.push(createdShelter); 
    // await user.save({ session: sess }); 
    // await sess.commitTransaction();
  } catch (err) {
    console.log(err)
    const error = new HttpError(
      'Creating shelter failed, please try again111.',
      500
    );
    return next(error);
  }
  
   res.status(201).json({shelter: createdShelter})
};

const updateShelter = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
    
  }
    const  {name, totalBeds, description} = req.body;
    const shelterId = req.params.sid;

    let shelter;
    try {
      shelter = await Shelter.findById(shelterId);
    }catch (err){
      const error = new HttpError('Something went wrong, could not update shelter', 500); 
      return next(error);
   }

    shelter.name = name;
    shelter.totalBeds = totalBeds;
    shelter.description = description;

    try {
      await shelter.save();
    }catch (err){
      const error = new HttpError('Something went wrong, could not update shelter', 500); 
      return next(error);
   }

    res.status(200).json({shelter: shelter.toObject({getters: true})})
}

const deleteShelter = async (req, res, next) => {
    const shelterId = req.params.sid;
    
    let shelter;
    try {
      shelter = await Shelter.findById(shelterId).populate('creator');
    }catch (err){
      const error = new HttpError('Something went wrong, could not delete shelter', 500); 
      return next(error);
   }

   if (!shelter) {
     const error = new HttpError('Could not find place for this id', 404); 
     return next(error);
   }

    try {
      shelter.remove();
      // const sess = await mongoosse.startSession();
      // sess.startTransaction(); 
      // await shelter.remove({session: sess});
      // shelter.creator.shelter.pull(shelter);
      // await shelter.creator.save({session: sess});
      // await sess.commitTransaction();
    } catch (err){
      console.log(err)
      const error = new HttpError('Something went wrong, could not delete shelter', 500); 
      return next(error);
   } 
   res.status(200).json({message: 'Deleted Shelter.'})
}

exports.getSheltersByUserId = getSheltersByUserId;
exports.getShelterById = getShelterById;
exports.createShelter = createShelter;
exports.updateShelter = updateShelter;
exports.deleteShelter = deleteShelter;
