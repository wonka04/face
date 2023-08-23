var admin = require("firebase-admin");

var serviceAccount = require('../controllers/face-63a17-firebase-adminsdk-a3mcy-709cabae6e.json');
let dbfirebase;
let dbfirestone;

try {

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://face-d27e5-default-rtdb.firebaseio.com"
    });

    dbfirebase = admin.database();
    dbfirestone = admin.firestore();



} catch (error) {


}


module.exports = {
    dbfirebase,
    dbfirestone
    

}
