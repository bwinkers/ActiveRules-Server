/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    
    schema: true,

    attributes: {
   
        // The ActiveRules type
        arType: {
            type: 'string',
            enum: ['person', 'organization']
        },
        
        // The string that should be displayed as the contact name.
        // The Conact may have a Name object with multiple other options.
        displayName: {
            type: 'string'
        },
        
        // Name object for more complex naming options 
        names: {
            model: 'name'
        },

        // Being Internet centric all of our contacts should have an email 
        email: {
            type: 'email'
        }
    }
};

