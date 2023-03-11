import express from 'express'
import { google } from 'googleapis'
import dotenv from 'dotenv';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import dayjs from 'dayjs';
dotenv.config();

const calendar = google.calendar({
    version:"v3",
    auth:process.env.API_KEY,
})

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.NODE_ENV || 8000;

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
)

const scopes = ["https://www.googleapis.com/auth/calendar"]
app.get('/google',(req,res)=>{
     const url = oauth2Client.generateAuthUrl({
        access_type:'offline',
        scope:scopes
     })
     res.redirect(url);
});

app.get('/google/redirect',async(req,res)=>{
    const code = req.query.code;
    const {tokens} = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens);
    res.redirect('/shedule_event');
});
  let data,event;
app.post('/user_inf',(req,res)=>{
      data = req.body;
      event = {
        'summary': 'video Constlance',
        'description': data.username+' booked oppointement on '+ data.Date+' for '+data.description,
        'start': {
            'dateTime': dayjs(data.Date).add(1,"day").add(1,"hour").toISOString(),
          'timeZone': 'Asia/Kolkata',
        },
        'end': {
            'dateTime': dayjs(data.Date).add(1,"day").add(2,"hour").toISOString(),
          'timeZone': 'Asia/Kolkata',
        },
        'conferenceData':{
            'createRequest':{
                'requestId':uuid(),
            }
        },
        'attendees': [
          {'email': data.email
        },
        ],
      };
      res.redirect('/google');
})

app.get('/shedule_event',async(req,res)=>{
    console.log(data);
    await calendar.events.insert({
        calendarId: 'primary',
        auth: oauth2Client,
        conferenceDataVersion:1,
        resource: event,
    })
    res.redirect('http://localhost:3000/home2');
})
app.listen(PORT,()=>{
    console.log("server started on port", PORT);
});