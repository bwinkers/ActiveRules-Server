/**
* Name.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    
    schema: true,

    attributes: {

        // Equivalent of English first name
        givenName: {
            type: 'string'
        },
        // Equivalent of English last name
        familyName: {
            type: 'string'
        },
        // Equivalent of English middle name
        additionalName: {
            type: 'string'
        },
        // Business name full persons name, as legally defined.
        legalName: {
            type: 'string'
        },
        // A shorter name for an organization or person when space is at a premium
        shortName: {
            type: 'string'
        },
        // A common name used for the organization or person
        commonName: {
            type: 'string'
        },
        // A URL/variable name safe lowercase hypen delineated string.
        arAlias: {
            type: 'string'
        },
    }
};

