const User = require("./user.model");
const Project = require("./project.model.js");
const Field = require("./field.model.js");
const Comment = require("./comment.model.js");
const Participation = require("./participation.model.js");

module.exports = async ( sequelize ) => {
  const UserModel = User( sequelize );
  const FieldModel = Field( sequelize );
  const ProjectModel = Project( sequelize );
  const CommentModel = Comment( sequelize );
  const ParticipationModel = Participation( sequelize );

  UserModel.belongsToMany(ProjectModel, {
    through: ParticipationModel
  });
  ProjectModel.belongsToMany(UserModel, {
    through: ParticipationModel
  });
  UserModel.belongsToMany(ProjectModel, {
    through: CommentModel
  });
  ProjectModel.belongsToMany(UserModel, {
    through: CommentModel
  });
  FieldModel.hasMany(ProjectModel);
  
  await sequelize.sync();
  return sequelize;
}