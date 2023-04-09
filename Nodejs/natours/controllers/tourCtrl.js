const Tour = require("../models/tourModel");
// Before refactoring
exports.getAllTours = async (req, res) => {
  try {
    // BUILD QUERY
    // SIMPLE FILTERING
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // ADVANCED FILTERING
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    let query = Tour.find(JSON.parse(queryStr));

    // SORTING
    if (req.query.sort) {
      // query = query.sort(req.query.sort);
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // FIELDS LIMITING
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // PAGINATION
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numbTours = await Tour.countDocuments();
      if (skip >= numbTours) throw new Error("This page does not exists");
    }

    // EXECUTE QUERY
    const tours = await query;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Resources Not Found",
    });
  }
  // const query =  Tour.find({ difficulty: "easy", duration: "5" });
  // const query =  Tour.find()
  //   .where("difficulty")
  //   .equals("easy")
  //   .where("duration")
  //   .equals(5);
};
