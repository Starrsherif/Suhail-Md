const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347033468205";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_29_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICA1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI5LFxuICAgICAgICA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibWRNMkI1Um41VzhOc1FUUGdYMk10b0pqZ0UvZ3JNWTdIbGhuNStyVmc2UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDMzNDY4MjA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxOEFFODIyMTg2RDRBMUQwOUUyODA1REU4MEYzMzQ2MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwODQ1NjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDMzNDY4MjA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDREEwNTEyQ0UzOEIzMEU5MTI0QkYxOEExNDJCMUY4N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwODQ1NjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXNvcndDcEVRX3VVaWJTWTl5SXZMUVwiLFxuICBcInBob25lSWRcIjogXCI4ZWRmZGQxZS02MDQ2LTQ4NzktOTBjZi1hNDQ1NmMwZGFiMTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTgyLFxuICAgICAgNTgsXG4gICAgICAxMjEsXG4gICAgICAxNzcsXG4gICAgICAyMSxcbiAgICAgIDE3NCxcbiAgICAgIDc2LFxuICAgICAgMTA2LFxuICAgICAgNjIsXG4gICAgICAxMTMsXG4gICAgICA2NCxcbiAgICAgIDExMSxcbiAgICAgIDExNSxcbiAgICAgIDIxNCxcbiAgICAgIDE3OSxcbiAgICAgIDE1OCxcbiAgICAgIDExNSxcbiAgICAgIDEwOSxcbiAgICAgIDc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgOSxcbiAgICAgIDExNCxcbiAgICAgIDEzMCxcbiAgICAgIDE1MyxcbiAgICAgIDE0MyxcbiAgICAgIDkzLFxuICAgICAgMTM4LFxuICAgICAgMjQzLFxuICAgICAgMyxcbiAgICAgIDI2LFxuICAgICAgMTc3LFxuICAgICAgMjM0LFxuICAgICAgOTQsXG4gICAgICA4MSxcbiAgICAgIDE1MSxcbiAgICAgIDE1MyxcbiAgICAgIDExNCxcbiAgICAgIDIyNyxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJEWTgyWTlBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMzNDY4MjA1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGcmVkZXJpY2tcIixcbiAgICBcImxpZFwiOiBcIjE4MTAzMzM0MTMxMzAyODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tlYit0c0ZFSXZNM0xNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGUxWmxsMjZqazY5L1JaZ1VMMW9aTWM0ODRKbk42Y2N1VEdEM2hidTlYWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUN0RpaW16ZnMrQkdYQkc1cWxTMTFXVXYwWitWcjdCemN1WEJIbURhMitnajRlcWRlem9HcTZ4clNONndQazdGZms2d1FsaHZlQjlXTGhjNjVBejRDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJITVBpMGR5OFAxdHpkOTd1cTh4eDN3QW1PWXRBYll3cVJFR0Q2amtKdFV5ejZzTlgzekhpN0FSTFJtTUJSR3VGR2FYQVRjQVRxcGxWb2ZDTWVuMXhpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDMzNDY4MjA1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkwODQ1NTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFK3NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUUrcy5qc29uIjogIntcImtleURhdGFcIjpcImxzMXZnZFZTQmlyZlE5REhCZWRDeUF3dkZKajlKcndHV1Nza0NPQUloS289XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzNTAyMDQ1NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MDg0NTU5NTI3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
