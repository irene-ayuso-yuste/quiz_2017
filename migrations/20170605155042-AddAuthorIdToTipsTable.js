'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

	return queryInterface.addColumn(
		'Tips',
		'AuthorId',
		{type: Seguelize.INTEGER}
	);
  },

  down: function (queryInterface, Sequelize) {

	return queryInterface.removeColumn('Tips', 'AuthorId');
  }
};
