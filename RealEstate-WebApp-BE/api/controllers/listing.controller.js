import Listing from "../model/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing)
    } catch (error) {
        next(error)
    };
};

export const deleteListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id)

    if (!listing) {
        return next(errorHandler(404, 'Listing not found!'))
    }
    if (req.user.id !== listing.userRef.toString()) {
        return next(errorHandler(404, 'You only delete your own Listing !'))

    };

    try {
        await Listing.findByIdAndDelete(req.params.id)
        res.status(200).json("Listing as been delete!")
    } catch {
        next(error);
    };

};

export const updateListing = async (req, res, next) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(errorHandler(404), 'Listing not found!');
    }

    if (req.user.id !== listing.userRef) {
        return next(errorHandler(401, 'you can only update your own Listing'))
    };
    try {
        const updatedListing = await Listing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json(updatedListing)
    } catch (error) {
        next(error);
    };
};

export const getListing = async (req, res, next) => {

    try {
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return next(errorHandler(404, 'Listing not found'));
        };
        res.status(200).json(listing);
    } catch (error) {
        next(error);

    };
};



// export const getListings = async (req, res, next) => {
//     try {
//         const limit = parseInt(req.query.limit) || 9;
//         const startIndex = parseInt(req.query.startIndex) || 0
//         let offer = req.query.offer;


//         if (offer === undefined || offer === 'false') {
//             offer = { $in: [false, true] };
//         }

//         let furnished = req.query.furnished;

//         if (furnished === undefined || furnished == 'false') {
//             furnished = { $in: [false, true] };
//         }

//         let parking = req.query.parking;

//         if (parking === undefined || parking == 'false') {
//             parking = { $in: [false, true] };
//         }

//         let type = req.query.type;

//         if (type === undefined || type == 'all') {
//             type = { $in: ['sale', 'rent'] };
//         }

//         const searchTerm = req.query.searchTerm || '';

//         const sort = req.query.sort || 'createdAt';

//         const order = req.query.order || 'desc';

//         const listings = await Listing.find({
//             name: { $regex: searchTerm, $options: 'i' },
//             offer,
//             furnished,
//             parking,
//             type,
//         })
//             .sort({[sort]: order})
//             .limit(limit)
//             .skip(startIndex);

//         return res.status(200).json(listings);
//     } catch (error) {
//         next(error);
//     }

// }


// export const getListings = async (req, res, next) => {
//     try {
//         const limit = parseInt(req.query.limit) || 9;
//         const startIndex = parseInt(req.query.startIndex) || 0;
//         let offer = req.query.offer;

//         if (offer === undefined || offer === 'true') {
//             offer = { $in: [false, true] };
//         }
//         // console.log(offer);

//         let furnished = req.query.furnished;

//         if (furnished === undefined || furnished === 'false') {
//             furnished = { $in: [false, true] };
//         }

//         let parking = req.query.parking;

//         if (parking === undefined || parking === 'false') {
//             parking = { $in: [false, true] };
//         }

//         let type = req.query.type;

//         if (type === undefined || type === 'all') {
//             type = { $in: ['sale', 'rent'] };
//         }

//         const searchTerm = req.query.searchTerm || '';

//         const sort = req.query.sort || 'createdAt';

//         const order = req.query.order || 'desc';

//         const listings = await Listing.find({
//             name: { $regex: searchTerm, $options: 'i' },
//             offer,
//             furnished,
//             parking,
//             type,
//         })
//             .sort({ [sort]: order })
//             .limit(limit)
//             .skip(startIndex);

//         return res.status(200).json(listings);
//     } catch (error) {
//         next(error);
//     }
// };

// import Listing from './models/Listing'; // Ensure the correct path to the Listing model

// // export const getListings = async (req, res, next) => {
//     try {
//         const limit = parseInt(req.query.limit) || 12;
//         const startIndex = parseInt(req.query.startIndex) || 0;
//         const searchTerm = req.query.searchTerm || '';
//         const sortField = req.query.sort || 'createdAt';
//         const order = req.query.order === 'asc' ? 1 : -1; // Default to descending order

//         const query = {
//             name: { $regex: searchTerm, $options: 'ii' },
//         };

//         if (req.query.offer !== undefined) {
//             query.offer = req.query.offer === 'true';
//         }

//         if (req.query.furnished !== undefined) {
//             query.furnished = req.query.furnished === 'true';
//         }

//         if (req.query.parking !== undefined) {
//             query.parking = req.query.parking === 'true';
//         }

//         if (req.query.type !== undefined && req.query.type !== 'all') {
//             query.type = req.query.type;
//         }

//         const listings = await Listing.find(query)
//             .sort({ [sortField]: order })
//             .limit(limit)
//             .skip(startIndex);

//         return res.status(200).json(listings);
//     } catch (error) {
//         next(error);
//     }
// };

export const getListings = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 12;
        const startIndex = parseInt(req.query.startIndex) || 0;
        const searchTerm = req.query.searchTerm || '';
        const sortField = req.query.sort || 'createdAt';
        const order = req.query.order === 'asc' ? 1 : -1; // Default to descending order

        const query = {
            name: { $regex: searchTerm, $options: 'i' }, // Corrected the $options parameter
        };

        if (req.query.offer !== undefined) {
            query.offer = req.query.offer === 'true';
        }

        if (req.query.furnished !== undefined) {
            query.furnished = req.query.furnished === 'true';
        }

        if (req.query.parking !== undefined) {
            query.parking = req.query.parking === 'true';
        }

        if (req.query.type !== undefined && req.query.type !== 'all') {
            query.type = req.query.type;
        }

        const listings = await Listing.find(query)
            .sort({ [sortField]: order })
            .limit(limit)
            .skip(startIndex);

        return res.status(200).json(listings);
    } catch (error) {
        next(error);
    }
};




// chatgpt

// export const getListings = async (req, res, next) => {
//     try {
//         const limit = parseInt(req.query.limit, 10) || 9;
//         const startIndex = parseInt(req.query.startIndex, 10) || 0;
//         let { offer, furnished, parking, type, searchTerm = '', sort = 'createdAt', order = 'desc' } = req.query;

//         if (offer === undefined || offer === 'false') {
//             offer = { $in: [false, true] };
//         } else {
//             offer = { $eq: offer === 'true' };
//         }

//         if (furnished === undefined || furnished === 'false') {
//             furnished = { $in: [false, true] };
//         } else {
//             furnished = { $eq: furnished === 'true' };
//         }

//         if (parking === undefined || parking === 'false') {
//             parking = { $in: [false, true] };
//         } else {
//             parking = { $eq: parking === 'true' };
//         }

//         if (type === undefined || type === 'all') {
//             type = { $in: ['sale', 'rent'] };
//         } else {
//             type = { $eq: type };
//         }

//         const listings = await Listing.find({
//             name: { $regex: searchTerm, $options: 'i' },
//             offer,
//             furnished,
//             parking,
//             type,
//         })
//             .sort({ [sort]: order === 'desc' ? -1 : 1 })
//             .limit(limit)
//             .skip(startIndex);

//         return res.status(200).json(listings);
//     } catch (error) {
//         next(error);
//     }
// };

// export const getListings = async (req, res, next) => {
//     try {
//         const limit = parseInt(req.query.limit, 10) || 9;
//         const startIndex = parseInt(req.query.startIndex, 10) || 0;
//         let { offer, furnished, parking, type, searchTerm = '', sort = 'createdAt', order = 'desc' } = req.query;

//         if (offer === undefined || offer === 'false') {
//             offer = { $in: [false, true] };
//         } else {
//             offer = { $eq: offer === 'true' };
//         }

//         if (furnished === undefined || furnished === 'false') {
//             furnished = { $in: [false, true] };
//         } else {
//             furnished = { $eq: furnished === 'true' };
//         }

//         if (parking === undefined || parking === 'false') {
//             parking = { $in: [false, true] };
//         } else {
//             parking = { $eq: parking === 'true' };
//         }

//         if (type === undefined || type === 'all') {
//             type = { $in: ['sale', 'rent'] };
//         } else {
//             type = { $eq: type };
//         }

//         // Log the constructed query
//         console.log('Query:', {
//             name: { $regex: searchTerm, $options: 'i' },
//             offer,
//             furnished,
//             parking,
//             type,
//         });

//         const listings = await Listing.find({
//             name: { $regex: searchTerm, $options: 'i' },
//             offer,
//             furnished,
//             parking,
//             type,
//         })
//             .sort({ [sort]: order === 'desc' ? -1 : 1 })
//             .limit(limit)
//             .skip(startIndex);

//         // Log the results
//         console.log('Listings:', listings);

//         return res.status(200).json(listings);
//     } catch (error) {
//         next(error);
//     }
// };


// export const getListings = async (req, res, next) => {
//     try {
//         const limit = parseInt(req.query.limit, 10) || 9;
//         const startIndex = parseInt(req.query.startIndex, 10) || 0;

//         let offer = req.query.offer;
//         if (offer === undefined || offer === 'false') {
//             offer = { $in: [false, true] };
//         } else {
//             offer = offer === 'true';
//         }

//         let furnished = req.query.furnished;
//         if (furnished === undefined || furnished === 'false') {
//             furnished = { $in: [false, true] };
//         } else {
//             furnished = furnished === 'true';
//         }

//         let parking = req.query.parking;
//         if (parking === undefined || parking === 'false') {
//             parking = { $in: [false, true] };
//         } else {
//             parking = parking === 'true';
//         }

//         let type = req.query.type;
//         if (type === undefined || type === 'all') {
//             type = { $in: ['sale', 'rent'] };
//         } else {
//             type = type === 'sale' ? 'sale' : 'rent';
//         }

//         const searchTerm = req.query.searchTerm || '';

//         const sort = req.query.sort || 'createdAt';
//         const order = req.query.order === 'asc' ? 1 : -1;

//         const listings = await Listing.find({
//             name: { $regex: searchTerm, $options:`1` },
//             offer,
//             furnished,
//             parking,
//             type,
//         })
//             .sort({ [sort]: order })
//             .limit(limit)
//             .skip(startIndex);

//         return res.status(200).json(listings);
//     } catch (error) {
//         next(error);
//     }
// };