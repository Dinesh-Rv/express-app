const generateCreatedBy = async (req, res, next) => {
    console.log(req.body);
  if (req.body) {
    console.log('gen created by')
    req.body.createdBy = 'Dinesh';
  }
  next();
};

const generateModifiedBy = async (req, res, next) => {
  if (req.body) {
    req.body.updatedBy = 'Dinesh';
  }
  next();
};

module.exports = {generateCreatedBy, generateModifiedBy};
