const { mobile } = require("../models");

// Create mobile
const createMobile = async (reqBody) => {
    return mobile.create(reqBody);
};

// get mobile list
const getMobileList = async (req, res) => {
    return mobile.find();
};

// delete mobile
const deleteMobile = async (mobileId) => {
    return mobile.findByIdAndDelete(mobileId);
};

// Get mobile details by id
const getMobileById = async (mobileId) => {
    return mobile.findById(mobileId);
};

// update mobile details by id
const updateMobile = async (mobileId, updateBody) => {
    return mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

// update mobile status by
const manageMobileStatus = async (mobileId) => {
    const mobileExists = await getMobileById(mobileId);
    if (!mobileExists) {
      throw new Error("mobile not found!");
    }

    return mobile.findOneAndUpdate(
      { _id: mobileId },
      {
        $set: {
          is_active: !mobileExists.is_active,
        },
      },
      { new: true }
    );
  };

module.exports = {
    createMobile,
    getMobileList,
    deleteMobile,
    getMobileById,
    updateMobile,
    manageMobileStatus
}