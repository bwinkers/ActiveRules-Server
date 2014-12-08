/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    
  'home': function (req, res) {
    // Render the `pages/login.ejs` view
    res.view({ 
      title: res.i18n('page.home.title') 
    });
  }
	
};

