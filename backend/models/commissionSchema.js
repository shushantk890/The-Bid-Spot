import mongoose from "mongoose";
                                                  //this structure is used by superadmin automatation
const commissionSchema = new mongoose.Schema({   //here approved payments will come(this is only structure)
  amount: Number,
  user: mongoose.Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Commission = mongoose.model("Commission", commissionSchema);