const User = require("./user.model");
const Project = require("./project.model.js");
const Field = require("./field.model.js");
const Comment = require("./comment.model.js");
const Country = require("./country.model.js");
const ProjectTopic = require("./project-topic.model.js");
const Reaction = require("./reaction.model.js");
const Team = require("./team.model.js");
const Topic = require("./topic.model.js");
const TeamParticipation = require("./user-team.model.js");

module.exports = async ( sequelize ) => {
  const UserModel = User( sequelize );
  const FieldModel = Field( sequelize );
  const ProjectModel = Project( sequelize );
  const CommentModel = Comment( sequelize );
  const CountryModel = Country( sequelize );
  const ProjectTopicModel = ProjectTopic( sequelize );
  const ParticipationModel = TeamParticipation( sequelize );
  const ReactionModel = Reaction( sequelize );
  const TeamModel = Team( sequelize );
  const TopicModel = Topic( sequelize );

  UserModel.belongsToMany(TeamModel, {
    through: ParticipationModel,
    foreignKey: "idUser",
    otherKey: "idTeam"
  });
  TeamModel.belongsToMany(UserModel, {
    through: ParticipationModel,
    foreignKey: "idTeam",
    otherKey: "idUser"
  }); // Teams and Users many to many relationship

  UserModel.hasMany( CommentModel, {
    foreignKey: "idUser"
  }   ); // User comment one to many relationship

  CountryModel.hasMany( UserModel, {
    foreignKey: "idCountry"
  }   ); // Country user one to many relationship

  TeamModel.hasMany( ProjectModel, {
    foreignKey: "idTeam"
  }  ); // Team project one to many relationship

  ProjectModel.belongsToMany( TopicModel,{
    through: ProjectTopicModel,
    foreignKey: "idProject",
    otherKey: "idTopic"
  });
  
  TopicModel.belongsToMany( ProjectModel,{
    through: ProjectTopicModel,
    foreignKey: "idTopic",
    otherKey: "idProject"
  }); // Project Topic many to many relationship

  FieldModel.hasMany( TopicModel, {
    foreignKey: "idField"
  }  ); // Field Topic one to many relationship

  UserModel.hasMany( CommentModel, {
    foreignKey: "idUser"
  }  ); // User Comment one to many relationship

  ProjectModel.hasMany( CommentModel, {
    foreignKey: "idProject"
  }  ); // Project Comment one to many relationship

  CommentModel.hasOne( CommentModel, {
    foreignKey: {
      name: "idRepliedComment",
      allowNull: true
    }
  }); 
  // Comment Comment one to many relationships (note a comment doesnt require to be a reply to another one)

  CommentModel.hasMany( ReactionModel, {
    foreignKey: "idComment"
  } ); // Comment Reaction one to many relationship
  UserModel.hasMany( ReactionModel, {
    foreignKey: "idAuthor"
  }  ); // User Reaction one to many relationship

  await sequelize.sync();
  return sequelize;
}