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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347010559960";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_02_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcyLFxuICAgICAgICA0MixcbiAgICAgICAgMTI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU5LFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlmNFBSZ1hxMXpEbjFXQklKQ2xUOGNIQWFDRWdCeDQzdW5Fc1daOWQxcVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxMDU1OTk2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E3RDhFNkJFMDYzNEU5NTEyREFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4Njg2OTQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAxMDU1OTk2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5MDE2RURGMUMwQkVBMzg2NzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4Njg2OTQ0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlY1bm5aTFRZUjgtTjJUT1p0ck1iVVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDQwOWViYmQtZGNjNC00NzY2LTk1MjctOWJjOGJkY2I3NDVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgNzcsXG4gICAgICAxNTcsXG4gICAgICA0MSxcbiAgICAgIDM3LFxuICAgICAgNzQsXG4gICAgICAzMSxcbiAgICAgIDIwMixcbiAgICAgIDEyNyxcbiAgICAgIDEzMCxcbiAgICAgIDcsXG4gICAgICA1MSxcbiAgICAgIDExNixcbiAgICAgIDEzMixcbiAgICAgIDExNixcbiAgICAgIDMyLFxuICAgICAgNzgsXG4gICAgICA4NSxcbiAgICAgIDE4OSxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMTYyLFxuICAgICAgMjM0LFxuICAgICAgMjE1LFxuICAgICAgNjAsXG4gICAgICAyMyxcbiAgICAgIDI0MyxcbiAgICAgIDE2MixcbiAgICAgIDEyOCxcbiAgICAgIDE1OSxcbiAgICAgIDE4MyxcbiAgICAgIDE4MCxcbiAgICAgIDIzNSxcbiAgICAgIDc4LFxuICAgICAgMjksXG4gICAgICAyLFxuICAgICAgMTQ3LFxuICAgICAgODIsXG4gICAgICAxMzMsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkoyOFZLTFE2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDEwNTU5OTYwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MzI0MDk0NTc2NjUyNzoxNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJIYWRleXN0YXJyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2ErMUxZSUVOV3B4TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzTlBTREJlamlEaE5USlQzaEE4S3FlQjhFbXdRVjNHWlNSUHk2SkIrc1E0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJDanpCS0VSUWdxZGZyMUh6WkhBMmJmSm44UEV6ZC9MOHZmRzFlSTQ5a21PQUdsUXRvV0tCNE1oOUlLT1ZxdDQxYVFzaG5CSkJrUEp3cXZqbWFHTWdBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlgzRTk0TG1kUFMzL0ZJL1Bzd3FJZ0cvK2lCQ1RqWTdycGthdU9OVW9iSEptbDFHcTVzaFBWaFhnN0dmL1V1QTZPYjMwOSs1N3BTWWl2bkZCWkdjemh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMTA1NTk5NjA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Njg2OTM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzhCXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDOEIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrQkE5TXh3Sk9yeC9FRUxyMmV4S084YTNFZGw5SFZEWk5NSUozNEJQQUJrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyNjIxMTQwODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODY4NjkzODExNVwifSIKfQ=="  // PUT your SESSION_ID 


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
