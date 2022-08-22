
// // // // // // // // class General {
// // // // // // // //     header = {
// // // // // // // //         code: 0, messege: ""
// // // // // // // //     };
// // // // // // // //     body = [];
// // // // // // // //     constructor(header, body) {
// // // // // // // //         this.header = header;
// // // // // // // //         this.body = body;
// // // // // // // //     }
// // // // // // // // }

// // const { INTEGER } = require("sequelize")

// // // const { INTEGER } = require("sequelize")

// // // // const { INTEGER } = require("sequelize")

// // // // // const { INTEGER } = require("sequelize")

// // // // // // // // var a = new General({ code: 1, messege: "ok" }, [[1234], [213433, 66, 332, 9]])
// // // // // // // // console.log(new General({ code: 1, messege: "ok" }, [[1234], [213433, 66, 332, 9]]));



// // // // // // // // // "businessId":integer,"title":string,"description":string,"categoryId":integer,"price":string,"isApplyShopTaxRate":boolean,"quantity":integer,"renualOption":string,"productType":string,"customIsCustomization":boolean,"customSelection":string,"uploadDigitalFiles":string,"madeBy":string,"isIt":string,"whenMadeId":string,"tags":string,"materials":string,"productBuyType":string,"isPerHour":boolean,"isPerDay":boolean,"isDeletd":boolean,"view":integer
// // // // // // // // //  }


// // // // // // // // //  npx sequelize-cli model:generate --name WproductInformation --attributes businessId:integer,title:string,description:string,categoryId:integer,price:string,isApplyShopTaxRate:boolean,quantity:integer,renualOption:string,productType:string,customIsCustomization:boolean,customSelection:string,uploadDigitalFiles:string,madeBy:string,isIt:string,whenMadeId:string,tags:string,materials:string,productBuyType:string,isPerHour:boolean,isPerDay:boolean,isDeletd:boolean,view:integer


// // // // // // // // //  npx sequelize-cli model:generate --name WbusinessCoverage --attributes title:string,isDeleted:boolean

// // // // // // // // //  npx sequelize-cli model:generate --name WpaymentMethod --attributes userId:interger,isCreditCard:Boolean,isPayId:Boolean,isEFT:Boolean,payID:string,EFTAccountName:string,EFTAccountNumber:string,EFTBSB:string,isDeleted:Boolean



// // // // // // // // public class [dbo].[businessCategory]
// // // // // // // // {
// // // // // // // // long    id: { get; set; }
// // // // // // // // string    title:string { get; set; }
// // // // // // // // bool      isDeleted:boolean { get; set; }



// // // // // // // // }

// // // // // // // // title:string,isDeleted:boolean


// // // // // // // public class [dbo].[businessCoverage]
// // // // // // // {
// // // // // // //     public long id { get; set; }

// // // // // // //     public string title { get; set; }

// // // // // // //     public DateTime? dateCreated { get; set; }

// // // // // // //     public DateTime? dateUpdated { get; set; }

// // // // // // //     public bool? isDeleted { get; set; }

// // // // // // // }


// // // // // // public class purchaseInformation
// // // // // // {
// // // // // // userId:integer,
// // // // // // productId:integer,
// // // // // // eventId:integer,
// // // // // // isPaid:boolean,
// // // // // // type:string,
// // // // // // purchaseQuantity:string,
// // // // // // time_day:string,
// // // // // // address:string,
// // // // // // deliverytype:string,
// // // // // // date:string,
// // // // // // confirmationStatus:string,
// // // // // // isDeleted:boolean
// // // // // // }

// // // // // // npx sequelize-cli model:generate --name WguestInformation --attributes eventId:INTEGER,userName:string,emailAddress:string,mobileNumber:string,isInvited:boolean,RSVP:string,confirmVia:string,invitationLink:string,isDeleted:boolean
// // // // // // npx sequelize-cli model:generate --name WtoDo --attributes title:string, eventId:integer, isDone:boolean, isDeleted:boolean
// // // // // // npx sequelize-cli model:generate --name WitemBudget --attributes buyerId:INTEGER,eventId:INTEGER,itemName:string,price:string,isDeleted:boolean
// // // // // // npx sequelize-cli model:generate --name WbuyerCardInformation --attributes buyerId:INTEGER,purchaseId:INTEGER,paymentId:INTEGER,holderName:string,cardName:string,expDate:string,cvv:string,isCreditCard:Boolean,isPayId:Boolean,isEFT:Boolean,isDeleted:Boolean
// // // // // // npx sequelize-cli model:generate --name WuserRating --attributes userId:INTEGER,supplierId:INTEGER,purchaseId:INTEGER,rating:string,isDeletd:boolean
// // // // // // npx sequelize-cli model:generate --name WpaymentMethod --attributes userId:INTEGER,isCreditCard:BooleanisPayId:Boolean,isEFT:Boolean,payID:EFTAccountName:string,EFTAccountNumber:string,EFTBSB:string,isDeleted:Boolean
// // // // // // npx sequelize-cli model:generate --name WpaymentRequest --attributes buyerId:INTEGER,amount:float,paymentId:integer,purchaseId:integer,isReceived:boolean,isPaid:boolean,paymentStatus:string,isDeleted:boolean



// // // // // public class [dbo].[guestInformation]
// // // // // {
// // // // // title:string, eventId:integer, isDone:boolean, isDeleted:boolean



// // // // public class [dbo].[itemBudget]
// // // // {

// // // // }



// // // // public class [dbo].[paymentMethod]
// // // // {
// // // // }

// // // // "buyerId":30863,
// // // // "holderName":"sasda411",
// // // // "cardName":"4111111111111111",
// // // // "expDate":"11-02-22",
// // // // "cvv":111,
// // // // "purchaseId":20190,
// // // // "paymentId":10144,
// // // // "isCreditCard":true,
// // // // "isPayId":false,
// // // // "isEFT":false

// // // // public class [dbo].[buyerCardInformation]
// // // // {

// // // // }


// // // // public class [dbo].[userRating]
// // // // {

// // // // }




// // // // pr.id as id,
// // // // pr.supplierId as supplierId,
// // // // pr.buyerId as buyerId,
// // // // pr.amount as amount,
// // // // pr.paymentId as paymentId,
// // // // pr.purchaseId as purchaseId,
// // // // pr.isReceived as isReceived,
// // // // pr.paymentStatus as paymentStatus,
// // // // pr.isPaid as payReq,
// // // // puri.eventId as purchInformation,
// // // // puri.productId as purchInformation,
// // // // Ure.firstName as SupplierFirstName,
// // // // Ure.lastName as SupplierlastName,
// // // // Ure.emailAddress as SupplierEmailAddress,
// // // // Ure.mobileNo as SupplierMobileNo,
// // // // Ure.imageUrl as SupplierImageUrl,
// // // // Uby.firstName as BuyerfirstName,
// // // // Uby.lastName as BuyerlastName,
// // // // Uby.emailAddress as BuyerEmailAddress,
// // // // Uby.mobileNo as BuyerMobileNo,
// // // // Uby.imageUrl as BuyerImageUrl,
// // // // prdi.title as productName,
// // // // busi.id as businessId,
// // // // busi.businessName as businessName
// // // // paymentMethod


// // // // bci.id as id,
// // // // bci.buyerId as buyerId,
// // // // bci.purchaseId as purchaseId,
// // // // bci.paymentId as paymentId,
// // // // bci.holderName as holderName,
// // // // bci.cardName as cardName,
// // // // bci.expDate as expDate,
// // // // bci.cvv as cvv,
// // // // payID as payID
// // // // EFTAccountName, as EFTAccountName
// // // // EFTAccountNumber, as EFTAccountNumber
// // // // EFTBSB, as EFTBSB
// // // // bci,.isCreditCard as isCreditCard,
// // // // bci.isPayId as isPayId,
// // // // bci.isEFT as isEFT,
// // // // bci.dateCreated as dateCreated,
// // // // bci.dateUpdated as dateUpdated,
// // // // bci.isDeleted as isDeleted



// // // public class [dbo].[paymentMethod]
// // // {
// // // }

// // // getProductInformationFromBusinessId 20549
// // // // GetEventByBuyerIDandPAid 20635,1

// // // // GetPaymentRequests 1,	10205,	20635

// // // // getbuyerCardInfo


// // // public class [dbo].[paymentRequest]
// // // {
// // // }





// // https://testapi.elitepartyz.com.au/api/businessDetail/getBusiness?
// // "eventId": 20274,
// //     "searchText": "",
// //         "fromPage": 0,
// //             "toPage": 300,
// //                 "categoryId": 0



// public class [dbo].[businessDetail]
// {
// "userId":"",
// "businessName":"",
// "emailAddress":"",
// "tradingName":"",
// // "businessAddress":"",
// "businessLatitude":"",
// "businessLongitude":"",
// "ABN":"",
// "GSTRegister":"",
// "firstName":"",
// "lastName":"",
// "landlineNumber":"",
// "mobileNumber":"",
// "faxNumber":"",
// "webSiteUrl":"",
// "facebookLink":"",
// "InstagramLink":"",
// "isDeleted":"",
// "workingDay":"",
// "opeingHours":"",
// "closingHours":"",
// "businessLogo":"",
// "coverageArea":"",
// "latitude":"",
// "longitude":"",
// "radius":"",
// "category":"",
// "keyWord":"",
// "isActive":"",
// "view":""
// }

  // "scripts": {
  //   "test": "echo \"Error: no test specified\" && exit 1",
  //   "dev": "cross-env NODE_ENV=development nodemon src/server_local.js",
  //   "start": "NODE_ENV=production src/server_local.js",
  //   "dbsetup": "sequelize db:migrate --config src/config/config.json --migrations-path src/migrations --models-path src/models --seeders-path src/seeders",
  //   "dbclear": "sequelize db:migrate:undo:all --config src/config/config.json --migrations-path src/migrations --models-path src/models --seeders-path src/seeders",
  //   "local": "node scripts/local",
  //   "invoke-lambda": "cross-var aws lambda invoke --function-name $npm_package_config_functionName --region $npm_package_config_region --payload file://api-gateway-event.json lambda-invoke-response.json && cat lambda-invoke-response.json",
  //   "create-bucket": "cross-var aws s3 mb s3://$npm_package_config_s3BucketName --region $npm_package_config_region",
  //   "delete-bucket": "cross-var aws s3 rb s3://$npm_package_config_s3BucketName --region $npm_package_config_region",
  //   "package": "cross-var aws cloudformation package --template sam-template.yml --s3-bucket $npm_package_config_s3BucketName --output-template sam-template.packaged.yml --region $npm_package_config_region",
  //   "deploy": "cross-var aws cloudformation deploy --template-file sam-template.packaged.yml --stack-name $npm_package_config_cloudFormationStackName --capabilities CAPABILITY_NAMED_IAM --region $npm_package_config_region --parameter-overrides DomainName=$npm_package_config_domain Environment=$ENV",
  //   "package-deploy": "npm run build-$ENV && npm run package && npm run deploy",
  //   "delete-stack": "cross-var aws cloudformation delete-stack --stack-name $npm_package_config_cloudFormationStackName --region $npm_package_config_region",
  //   "setup": "npm install && (cross-var aws s3api get-bucket-location --bucket $npm_package_config_s3BucketName --region $npm_package_config_region || npm run create-bucket) && npm run package-deploy",
  //   "build-nonprod": "webpack-cli --config webpack.config.js",
  //   "build-prod": "webpack-cli --config webpack.prod.config.js"
  // }