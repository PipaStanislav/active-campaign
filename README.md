# Active campaign
* * *

This package I hope will help to work with `Active Campaign` API v3.

## Note
* * *

I created this package for my own use. \
In my project, I used not all functionality which proposes `Active Campaign`. \
So I do not know which result you can get. I tested all based on `Active Campaign` documentation \
If you find some bugs, or you want to improve something to be free to create issues or merge requests. \
I will try to be communicable.


## List of features
* * *

| Versions of API            | Implemented |   QA    |  Tests  |
| -------------------------- | ----------- | ------- | ------- |
| V3                         |   &check;   | &cross; | &cross; |

| Functionality              | Implemented |   QA    |  Tests  |
| -------------------------- | ----------- | ------- | ------- |
| ACCOUNTS                   |   &check;   | &cross; | &cross; |
| ADDRESSES                  |   &check;   | &cross; | &cross; |
| AUTOMATIONS                |   &check;   | &cross; | &cross; |
| BRANDING                   |   &check;   | &cross; | &cross; |
| CALENDAR FEEDS             |   &check;   | &cross; | &cross; |
| CAMPAIGNS                  |   &check;   | &cross; | &cross; |
| CONTACTS                   |   &check;   | &check; | &cross; |
| DEALS                      |   &check;   | &cross; | &cross; |
| DEEPDATA INTEGRATIONS      |   &check;   | &cross; | &cross; |
| FORMS                      |   &check;   | &cross; | &cross; |
| LISTS                      |   &check;   | &cross; | &cross; |
| NOTES                      |   &check;   | &cross; | &cross; |
| ORGANIZATIONS (DEPRECATED) |   &check;   | &cross; | &cross; |
| SAVED RESPONSES            |   &check;   | &cross; | &cross; |
| SCORES                     |   &check;   | &cross; | &cross; |
| SEGMENTS                   |   &check;   | &cross; | &cross; |
| SETTINGS                   |   &check;   | &cross; | &cross; |
| SITE & EVENT TRACKING      |   &check;   | &cross; | &cross; |
| TAGS                       |   &check;   | &cross; | &cross; |
| TASKS                      |   &check;   | &cross; | &cross; |
| TASK TYPES                 |   &check;   | &cross; | &cross; |
| TEMPLATES                  |   &check;   | &cross; | &cross; |
| USERS                      |   &check;   | &cross; | &cross; |
| WEBHOOKS                   |   &check;   | &cross; | &cross; |

#### &check; - it is implemented, and you can use these functions from a package. 
#### &cross; - functionality will add in close time.  

## Installing
* * *

Using npm:
    
    npm install active-campaign


Using yarn:

    yarn add active-campaign

## Example
* * *

### Configure client

```
const ActiveCampaign = require('active-campaign');

const ACTIVE_CAMPAIGN_API_URL = https://your-company-name.api-us1.com // it is example
const ACTIVE_CAMPAIGN_API_KEY = You can get this API_KEY from your active campaign account. Details [Documentation](https://developers.activecampaign.com/reference#authentication)

const ac = new ActiveCampaign({
  apiUrl: ACTIVE_CAMPAIGN_API_URL,
  apiKey: ACTIVE_CAMPAIGN_API_KEY,
});

```

```
// This method return all contacts from your active compaign
const listAllContacts = await ac.contacts.contact.listAll();

console.log(listAllContacts)
```

```
// This method create a contact in your active compaign
const contact = await ac.contacts.contact.create({
	"contact": {
		"email": "johndoe@example.com",
		"firstName": "John",
		"lastName": "Doe",
		"phone": "7223224241",
    "fieldValues":[
      {
        "field":"1",
        "value":"The Value for First Field"
      },
      {
        "field":"6",
        "value":"2008-01-20"
      }
    ]
	}
});

console.log(contact)
```

Full list of methods you can see in the section **Available resources and methods**

## Available resources and methods
***

 - accounts
   * account
     - createAccount(object)
     - updateAccount(id, object)
     - retrieveAccount(id)
     - deleteAccount(id)
     - listAllAccounts(object)
     - createAccountNote(id, object)
     - updateAccountNote(id, object)
     - bulkDeleteAccounts(id, object)
       
   * accountContactAssociation
     - createAssociation(object)
     - retrieveAssociation(id)
     - updateAssociation(id, object)
     - deleteAssociation(id)
     - listAllAssociation(object)

   * customAccountField
     - createCustomField(object)
     - retrieveCustomField(id)
     - updateCustomField(id, object)
     - deleteCustomField(id)
     - listAllCustomField(object)

   * customAccountFieldsValue
     - createCustomFieldValue(object)
     - bulkCreateCustomFieldValue(object)
     - retrieveCustomFieldValue(id)
     - updateCustomFieldValue(id, object)
     - deleteCustomFieldValue(id)
     - listAllCustomFieldValue(object)
     - bulkUpdateCustomFieldValue(object)
     
 - addresses
   * address
     - createAddress(object)
     - updateAddress(id, object)
     - retrieveAddress(id)
     - deleteAddress(id)
     - deleteAddressAssociatedWithSpecificUserGroup(id)
     - deleteAddressAssociatedWithSpecificList(id)
     - listAllAddresses(object)
    
 - automations
   * automation
     - listAllAutomations(object)
    
 - brandings
   * branding
     - retrieveBranding(id)
     - updateBranding(object)
     - listAllBrandings(object)
    
 - calendarFeeds
   * calendarFeed
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)

 - campaigns
    * campaign
     - listAll(object)
     - retrieveLinksAssociatedToCampaign(id)
     - retrieveCampaign(id)

    * message
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
   
 - contacts
   * contact
     - create(object)
     - createOrUpdate(object)
     - retrieve(id)
     - updateListStatus(object)
     - update(id, object)
     - delete(id)
     - listAll(object)
     - listAllAutomations(id)
     - retrieveContactsScoreValue(id)
     - bulkImport(object)
       
   * automation
     - addContactToAutomation(object)
     - retrieveAutomationContactIsIn(id)
     - removeContactFromAutomation(id)
     - listAllAutomationsContactIsIn(object)
       
   * customField
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
     - createRelationshipToList(object)
     - createOptions(object)

   * customFieldsValue
     - createCustomFieldValue(object)
     - retrieveCustomFieldValue(id)
     - updateCustomFieldValueForContact(id, object)
     - deleteCustomFieldValue(id)
     - listAllCustomFieldValues(object)
    
 - deals
   * deal
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
     - CreateDealNote(id, object)
     - updateDealNote(id, object)

   * customDealField
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
       
   * customDealFieldValue
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
     - bulkCreateCustomFieldValue(object)
     - bulkUploadCustomFieldValue(object)
       
   * pipeline
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)     

   * secondaryContract
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
       
   * stage
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
     - moveDealToAnotherStage(id, object)
   
 - deepdataIntegrations
   * connection
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
   
   * eCommerceCustomer
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
       
   * eCommerceOrder
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
     
   * eCommerceOrderProduct
     - listEcomOrderProducts(object)
     - listEcomOrderProductsForSpecificEcomOrder(id, object)
     - retrieveEcomOrderProduct(id, object)
   
 - forms
   * form
     - retrieve(id)
     - listAll(object)

 - lists
   * list
     - create(object)
     - retrieve(id)
     - delete(id)
     - listAll(object)
     - CreateListGroupPermission(object)
   
 - notes
   * note
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)

 - organizations
   * organization
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - deleteMultipleOrganizations(object)
     - listAll(object)
   
 - savedResponses
   * savedResponse
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
   
 - scores
   * score
     - retrieve(id)
     - listAll(object)
   
 - segments
   * segments
     - retrieve(id)
     - listAll(object)
   
 - settings
   * settings
     - update(id, object)
   
 - siteEventTrecking
   * eventTracking
     - trackEvent(object)
     - create(object)
     - retrieveStatus(id)
     - update(object)
     - delete(name)
     - listAll(object)

   * siteTracking
     - addDomainToWhitelist(object)
     - retrieveCode()
     - retrieveStatus()
     - update(object)
     - removeDomainFromWhitelist(name)
     - listAll(object)

   
 - tags
   * tags
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
   
 - tasks
   * task
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
   
 - taskTypes
   * taskType
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
     - MoveTaskToAnotherTaskType(id, object)
   
 - templates
   * template
     - retrieve(id)
   
 - users
   * user
     - create(object)
     - retrieve(id)
     - retrieveByEmail(email)
     - retrieveByUsername(username)
     - retrieveLoggedIn()
     - update(id, object)
     - delete(id)
     - listAll(object)
    
   * group
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
   
 - webhooks
   * webhook
     - create(object)
     - retrieve(id)
     - update(id, object)
     - delete(id)
     - listAll(object)
     - listAllEvents()
