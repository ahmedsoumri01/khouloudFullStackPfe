const Worker = require("../models/Worker");

exports.completeWorkerProfile = async (req, res) => {
  try {
    console.log("Received Data:", req.body); // Log request body
    const { skills, experience, specialization, availability } = req.body;

    let worker = await Worker.findOne({ user: req.user._id });

    if (!worker) {
      worker = new Worker({
        user: req.user._id,
        skills,
        experience,
        specialization,
        availability,
      });
    } else {
      // Log existing worker details before update
      console.log("Before Update:", worker);

      worker.skills = skills || worker.skills;
      worker.experience = experience || worker.experience;
      worker.specialization = specialization || worker.specialization;
      worker.availability =
        availability !== undefined ? availability : worker.availability;

      console.log("After Update:", worker);
    }

    await worker.save();
    res
      .status(200)
      .json({ message: "Worker profile updated successfully", worker });
  } catch (error) {
    console.error("Error updating worker profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// 🔹 Get all workers
exports.getAllWorkers = async (req, res) => {
  try {
    const workers = await Worker.find().populate(
      "user",
      "firstName lastName email phone role status"
    );
    res.status(200).json({ workers });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
