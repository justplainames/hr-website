
import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express';
import notifications from './models/notification.js';
import profile from './models/user.js';
import leaves from './models/leave.js';
import applied from './models/applied.js'
import personal from './models/personal.js'
import { leftqueries, appliedqueries } from './utils/queries.js'
// import appliedqueries from './utils/queries.js'
const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const CONNECTION_URL = "mongodb+srv://Hrapp:Hrapp@hrapp.etwrf.mongodb.net/Hrapp?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`)))
  .catch((error) => console.log(`${error} did not connect`));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully.");
});



app.get('/notifications', async (req, res) => {

  try {
    const getNotification = await notifications.findOne({ userId: req.query.id });
    res.status(200).json(getNotification);
  } catch (error) {
    res.status(404).json(error);
  }
});


app.get('/leaves', async (req, res) => {

  try {
    const getleaves = await leaves.findOne({ userId: req.query.id });
    res.status(200).json(getleaves);
  } catch (error) {
    res.status(404).json(error);
  }
});


app.get('/applied', async (req, res) => {
  try {
    const getapplied = await applied.findOne({ userId: req.query.id });

    res.status(200).json(getapplied);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.post('/deleteApplied', async (req, res) => {

  const userId = req.body.userId
  const id = req.body.id
  const lefted = leftqueries(req.body.types)
  const appliedds = appliedqueries(req.body.types)
  const dayss = req.body.days
  const negativedays = -dayss
  applied.updateOne({ userId: userId }, { $pull: { applies: { _id: mongoose.Types.ObjectId(id) } } })
    .then(result => {
      leaves.updateOne({ userId: userId },
        { $inc: { [appliedds]: negativedays, [lefted]: dayss } }
      ).then(result => {

      })
        .catch(err => console.error(`failed to update records: ${err}`))
      res.status(200).json('updated the leave records...');
    }).catch(err => console.error(`failed to update records: ${err}`))
});


app.get('/profiles', async (req, res) => {

  try {
    const getprofiles = await profile.findOne({ userId: req.query.id });
    delete getprofiles.password

    res.status(200).json(getprofiles);
  } catch (error) {
    res.status(404).json(error);
  }
});


app.get('/allapplied', async (req, res) => {

  try {
    const getapplied = await applied.find();
    res.status(200).json(getapplied);
  } catch (error) {
    res.status(404).json(error);
  }
});






app.post("/login", async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database

    const user = await profile.findOne({ email: email })
    console.log(user)
    if (user) {
      if (password === user.password) {
        // user
        res.status(200).json(user);
      }
      else {
        res.status(200).send("Invalid Credentials");
      }
    }
    else {
      res.status(200).send("Email is not registered");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/acceptnoti", async (req, res) => {
 console.log('change noti here')
 console.log(req.body._id)
  notifications.updateOne({ "notifications._id": mongoose.Types.ObjectId(req.body._id) },
    {
       $set:
        {
         "notifications.$.status.approved": false, 'notifications.$.status.read': true, 'notifications.$.status.accepted': "Accepted" , 'notifications.$.status.isrecommended' :false     
     }
    }
  ).then(result => {
    res.status(200).json('updated the leave records...');
  })
    .catch(err => console.error(`failed to update records: ${err}`))

})


app.post("/declinenoti", async (req, res) => {
  console.log(req.body)
  notifications.updateOne({ userId: req.body.userId },
    {
      approved: false, read: true, accepted: "Declined"
    }
  ).then(result => {
    res.status(200).json('updated the leave records...');
  })
    .catch(err => console.error(`failed to update records: ${err}`))

})



app.post("/createnoti", async (req, res) => {
  console.log(req.body)
  const id = req.body.userId
  delete req.body.userId
  notifications.updateOne({ userId: id },
    { $push: { notifications: req.body } }
  ).then(result => {
    res.status(200).json('updated the leave records...');
  })
    .catch(err => console.error(`failed to update records: ${err}`))

})

app.post("/updatenoti", async (req, res) => {
  const id = req.body.id
  const notiId = req.body.notiid
  notifications.updateOne(
    {"notifications._id": mongoose.Types.ObjectId(notiId)},
    {
      '$set': {
        'notifications.$.status.read': true
      }
    }
  ).then(result => {
    res.status(200).json('updated the leave records...');
  }).catch(err => console.error(`failed to update records: ${err}`))
})



//var updateapplied = new applied(req.body);
//await updateapplied.save()

app.post("/apply", async (req, res) => {
  // Our login logic starts here
  const id = req.body.userId
  delete req.body.userId
  try {
    const left = leftqueries(req.body.types)
    const appliedd = appliedqueries(req.body.types)
    var days = req.body.days
    var negative = -days
    applied.updateOne({ userId: id },
      { $push: { applies: req.body } }
    ).then(result => {
      leaves.updateOne({ userId: id },
        { $inc: { [appliedd]: days, [left]: negative } }
      ).then(result => {
        res.status(200).json('updated the leave records...');
      })
        .catch(err => console.error(`failed to update records: ${err}`))

    }
    ).catch(err => console.log(err))
  }
  catch (err) {
    res.status(400).send(err);
  }
  // Our register logic ends here
});


app.get('/leaverequest', async (req, res) => {
  try {
    const getapplied = await applied.find({ applies: { $elemMatch: { approvedby: req.query.id, approved: false } } });
    console.log(getapplied)
    res.status(200).json(getapplied);
  } catch (error) {
    res.status(404).json(error);
  }
});


app.post("/approval", async (req, res) => {
  console.log(req.body)

  let objectIdArray = req.body.map(s => mongoose.Types.ObjectId(s))
  
 for(var i = 0 ; i<objectIdArray.length;i++ ){
  await applied.updateOne({applies: { $elemMatch: { _id:objectIdArray[i]}}},    
    {
    '$set': {
      'applies.$.approved': true
    }
  })
 }
 res.status(200).json('updated successfully');

})

app.post("/reject", async (req, res) => {


  let objectIdArray = req.body.map(s => mongoose.Types.ObjectId(s))
  
 for(var i = 0 ; i<objectIdArray.length;i++ ){
  await applied.updateOne({applies: { $elemMatch: { _id:objectIdArray[i]}}},    
    {
    '$set': {
      'applies.$.declined': true
    }
  })

 }
 res.status(200).json('updated successfully');

})


app.get('/getnoti', async (req, res) => {

  try {
    const allnoti = []
    const getrecommended = await notifications.findOne({userId: req.query.id});
      for(var i =0;i<getrecommended.notifications.length;i++)
      {
        if(getrecommended.notifications[i].status.isrecommended===true)
        {
        allnoti.push(getrecommended.notifications[i])
        }
      }
  

    const getapplied = await notifications.find({ team: req.query.id ,userId: { $ne: req.query.id}});
    getapplied.map(details=>{
      for(var i =0;i<details.notifications.length;i++)
      {
        if(details.notifications[i].status.isrecommended===false){
        allnoti.push(details.notifications[i])
        }
      }
    })
    res.status(200).json(allnoti);
  } catch (error) {
    res.status(404).json(error);
  }
});


app.post("/createreco", async (req, res) => {
  console.log(req.body)
  const id = req.body.userId
  delete req.body.userId
  notifications.updateOne({ userId: id },
    { $push: { notifications: req.body } }
  ).then(result => {
    res.status(200).json('updated the leave records...');
  })
    .catch(err => console.error(`failed to update records: ${err}`))

})