const {mobileService} = require("../services");

/* Create mobile */
const createMobile = async (req, res) => {
    try {
        const reqBody = req.body;

        const mobile = await mobileService.createMobile(reqBody);
        if (!mobile) {
            throw new Error("Something went wrong, please try again or later..");
        }

        res.status(200).json({
            success: true,
            message: "mobile created successfully..",
            data: mobile
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* get mobile list*/
const getMobileList = async (req, res) => {
    try {
        const getList = await mobileService.getMobileList(req, res);

        res.status(200).json({
            success: true,
            message: "Get mobile list successfully..",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* delete mobile */
const deleteMobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        if (!mobileId) {
            throw new Error("mobile not found");
        }

        await mobileService.deleteMobile(mobileId);
        res.status(200).json({
            success: true,
            message: "mobile deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/** Get mobile details by id */
const getMobileById = async (req, res) => {
    try {
        const getDetails = await mobileService.getMobileById(req.params.mobileId);
        if (!getDetails) {
            throw new Error("mobile not found!");
        }

        res.status(200).json({
            success: true,
            message: "mobile details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** mobile details update by id */
const updateMobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const mobileExists = await mobileService.getMobileById(mobileId);
        if (!mobileExists) {
            throw new Error("mobile not found!");
        }

        await mobileService.updateMobile(mobileId, req.body);

        res.status(200).json({
            success: true,
            message: "mobile details updated successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/** Manage Mobile status */
const manageMobileStatus = async (req, res) => {
    try {
      const manageStatus = await mobileService.manageMobileStatus(
        req.params.mobileId
      );
      let resMessage = manageStatus.is_active
        ? "mobile can enable to sale."
        : "mobile can not enable to sale";
      res.status(200).json({
        success: true,
        message: resMessage,
        data: manageStatus,
      });
    } catch (error) {
      res.status(error?.statusCode || 400).json({
        success: false,
        message:
          error?.message || "Something went wrong, please try again or later!",
      });
    }
  };


module.exports = {
    createMobile,
    getMobileList,
    deleteMobile,
    getMobileById,
    updateMobile,
    manageMobileStatus
}