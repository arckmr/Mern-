const SibApiV3Sdk = require('sib-api-v3-sdk');
const helper = SibApiV3Sdk.EmailCampaignsApi;
const keys = require ('../config/keys');

class Mailer extends helper {

   constructor({subject, recipients}, content){
     super();

     this.from_email= new helper.EmailCampaignsApi('arckmr@gmail.com');
     this.subject= subject;
     this.body = new helper.Content('text/html', content);
     this.recipients = this.formatAddresses(recipients);

     this.addContent(this.body);
     this.addClickTracking();

   }

   formatAddresses (recipient) {
     return recipient.map(({ email }) =>{
       return new helper.EmailCampaignsApi(email);

     });
   }

   addClickTracking(){
     const trackingSettings = new helper.TrackingSettings();
     const clickTracking = new helper.ClickTracking(true, true);
   }
};

module.exports = Mailer;
