import Listing from "../model/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing)
    } catch (error) {
        next(error)
    }
}

export const deleteListing = async () => {
    const listing = await Listing.findById(req.params.id)

    if (!listing) {
        return next(errorHandler(404, 'Listing not found!'))
    }
    if (req.user.id === listing.userRef.toString() ) {
        return next(errorHandler(404, 'You only delete your own Listing !'))

    }
    try{
    await Listing.findByIdAndDelete(req.params.id) 
    res.status(200).json("Listing as been delete!")
    }catch{
next(error)
    }
}
export const updateListing = async () => {
    const listing = await Listing.findById(req.params.id);
    if(!listing){
        return next(errorHandler(404), 'Listing not found!')
    }

  if(req.user.id !== listing.userRef){
    return next(errorHandler(401, 'you can only update your own Listing'))
  }
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
        req.params.id,
        re.body,
        {new:true}
    );
      return req.status(200).json(updatedListing)
  } catch (error) {
    next(error)
  }
}