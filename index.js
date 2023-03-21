const employee = {
  name: "fullName",
  streetAddress: "homeAddress",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return { ...obj, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(obj, key) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}
