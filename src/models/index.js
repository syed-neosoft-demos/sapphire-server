import Employee from "./employeeModel.js";
import Designation from "./designationModel.js";

import Location from "./locationModel.js";
import Claim from "./claimModel.js";

Employee.belongsTo(Designation, {
  foreignKey: "designation_id",
});

Claim.belongsTo(Location, {
  foreignKey: "expense_location_id",
});

export { Employee, Designation, Location, Claim };
