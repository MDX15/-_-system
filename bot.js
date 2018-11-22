const discord = require('discord.js');
const devs = ['389090790984515594','350408440566382592'];
var prefix = ".";
const adminprefix = "."
const db = require('quick.db');
const client = new discord.client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getyoutubeid = require('get-youtube-id'); 
const moment = require("moment");  
const { client, util } = require('discord.js');  
const userblocked = new set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripindents = require('common-tags').stripindents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new map(); 
const zalgo = require('zalgolize');   
const fetchvideoinfo = require('youtube-info');
const youtube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new youtube("aizasyadorxg7uzuo7sepv97jyodqtqvi3ll0b8");
const sql = require("sqlite");
 const dateformat = require('dateformat'); 
 const pretty = require('pretty-ms') 

,ti={}  
,spee={};

 

const superagent = require("superagent")
client.on('message' , async (message) => {
 if (message.content.startswith(prefix + 'yn')) {

let color = '0xffffff'

      const { body } = await superagent
    .get('https://yesno.wtf/api/');
    if(body.answer === 'yes') color = '0x01df01';
    if(body.answer === 'no') color = '0xff0000';
    const embed = new discord.richembed()
    .setcolor(color)
    .setimage(`${body.image}`)
    message.channel.send(`**the magic api says:** **${body.answer}**`, {embed});

}
});

client.on('message' , async (message) => {
 if (message.content.startswith(prefix + 'w')) {
  const args = message.content.substring(prefix.length).split(' ');

 message.delete();
args.shift() 
let msg = args.join(' ') 
message.channel.createwebhook(message.author.username, message.author.avatarurl) 
    .then(wb => {
        const user = new discord.webhookclient(wb.id, wb.token) 
        user.send(msg); 
        user.delete() 
    })
    .catch(console.error)
 }
});



        client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.haspermission("manage_guild")) return;
        if(.message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if(.muterole){
      try{
        muterole = await message.guild.createrole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.foreach(async (channel, id) => {
          await channel.overwritepermissions(muterole, {
            send_messages: false,
            add_reactions: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(.message.channel.guild) return message.reply('** this command only for servers**');
     message.member.addrole(muterole);
    const embed500 = new discord.richembed()
      .settitle("muted ads")
            .addfield(`**  you have been muted **` , `**reason : sharing another discord link**`)
            .setcolor("c91616")
            .setthumbnail(`${message.author.avatarurl}`)
            .setauthor(message.author.username, message.author.avatarurl)
        .setfooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})


client.on('message', async function(message) {
    	 if (.message.channel.guild) return;
let muterole1 = message.guild.roles.find("name", "muted");
     if (.muterole1) return;
  if (message.author.id == client.user.id) return;
  if(json.stringify(user).indexof(message.author.id) == -1) {
    user[message.author.id] = message.createdtimestamp;
    return;
  } else {
    if (date.now() - user[message.author.id] < 695){
              message.author.delete
      if (json.stringify(warn).indexof(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 6) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 6) {
     if (.message.channel.guild) return;
             message.author.delete

let muterole1 = message.guild.roles.find("name", "muted");
if(.muterole1) {
        muterole1 = await message.guild.createrole({
          name: "muted",
          color: "#ffffff",
          permissions:[]
        })
        message.guild.channels.foreach(async (channel, id) => {
          await channel.overwritepermissions(muterole1, {
            send_messages: false,
            add_reactions: false,
			read_messages_history:false
        });
		});
  }
     if (.muterole1) return;
    var guild = message.channel.guild;
          var currenttime = new date(),
            year = currenttime.getfullyear(),
            month = currenttime.getmonth() + 1,
            day = currenttime.getdate(),
            hours = currenttime.gethours() + 3 ,
            minutes = currenttime.getminutes()+1,
            seconds = currenttime.getseconds();

           if (.message.channel.guild) return;
     if (.muterole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addrole(muterole1);
	settimeout(function(){
		    message.guild.members.get(message.author.id).removerole(muterole1);
	},7200000);
     var msg;
        msg = parseint();
      message.channel.fetchmessages({limit: msg}).then(messages => message.channel.bulkdelete(messages)).catch(console.error);
delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new discord.richembed()
     .settitle(`mark:  | there is someone trying `)
      .setdescription(":white_check_mark:  | `there is someone trying to do spam`\n\nname:\n"+`${message.author.username}#${message.author.discriminator}`+"\nthe required procedures have been taken")      .setcolor("ff0000")
    message.channel.send(embed500)
    	const embed20 = new discord.richembed()
      .settitle(":scales: | you are punished")
      .setdescription(`**you have been muted **\n\nby:\n${client.user.tag}\n\nthe reason:\nspam chat\n\nmuted date:\n`+ year + "/" + month + "/" + day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`if the punishment by mistake continues with the administration \n\ntime of unmute : two hours after the date of the death`")
          .setfooter(message.guild.iconurl)
      .setcolor("ff0000")

     message.author.send(embed20)

  }
});

let bane = json.parse(fs.readfilesync("./bcer.json", "utf8"));
let banse = new set();
client.on('guildbanadd', function(guild) {
  guild.fetchauditlogs().then(logs => {
    const ser = logs.entries.first().executor;
    if(.bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
      bans: 2
    }
    let boner = bane[ser.id+guild.id]
banse.add(ser.id)
boner.bans = math.floor(boner.bans+1)


settimeout(() => {
  boner.bans = 2
  banse.delete(ser.id)
},8000)

if(boner.bans > 2) {
  let roles = guild.members.get(ser.id).roles.array()
guild.members.get(ser.id).removeroles(roles)
}

    })
    fs.writefile('./bcer.json', json.stringify(bane), (err) => {
if (err) console.error(err);
})

})
client.on('message',function(message) {
  if(.message.channel.guild) return;

const prefix = ".";
    if (message.content === prefix + "discrim") {
let messagearray = message.content.split(" ");
let args = messagearray.slice(1);

if (message.author.bot) return;

var discri = args[0]
let discrim
if(discri){
discrim = discri;
}else{
discrim = message.author.discriminator;
}
if(discrim.length == 1){
discrim = "000"+discrim
}
if(discrim.length == 2){
discrim = "00"+discrim
}
if(discrim.length == 3){
discrim = "0"+discrim
}

const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
return message.channel.send(`
**found ${users.length} users with the discriminator #${discrim}**
${users.join('\n')}
`);
}
});
client.on('message' , message => {
if(message.content === '.voice') {
    message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voicechannel).size}**`);
}
});


client.on('message', async message => {
	var prefix = ".";
  if(message.content.startswith(prefix + "tc")) {
      if(message.author.bot) return;
    if(.message.channel.guild) return;
    await message.channel.send("ارسل اسم الروم").then(e => {
    var filter = m => m.author.id === message.author.id
    var  name = '';
   var time = '';
    var type = '';
    var limit = '';
 
    var types = ["text", "voice", "كتابي", "صوتي"];
    var chaname = message.channel.awaitmessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()
 
 
 
e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
var chatime = message.channel.awaitmessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isnan(co.first().content)) return message.reply("الوقت بالدقائق . ارقام فقطٍ");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
  time = co.first().content
co.first().delete()
  e.edit("ارسل نوع الروم text, voice")
var chatype = message.channel.awaitmessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
var chalimit = message.channel.awaitmessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isnan(coll.first().content)) return message.reply("عدد الاعضاء يكون بالارقام فقط");
    limit = coll.first().content
coll.first().delete()
 
  e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
  message.guild.createchannel(name, type).then(c => {
    c.edit({
      userlimit: limit
    })
    settimeout(() => {
      c.delete()
      message.channel.send("تم انقضاء الوقت الكامل لا اعده التجديد اسنخدم امر .tc")
    }, math.floor(time*60000))
    var  chna = message.guild.channels.find("name", "log")
    const embed = new discord.richembed()
    chna.send({
      embed: embed.settitle("new tempchat") .setdescription(`channel type: ${type}`) .addfield("channel owner", message.author.username) .addfield("channel name", name) .addfield("channel timeout", time) .addfield("channel id", c.id)
    })
  })
  e.edit("تم انشاء الغرفه استمتع")
 
})
})
})
})
})
 
  }
})

client.on('ready', function(){
  client.user.setstatus("dnd");
    var ms = 40000 ;	
    var setgame = ['.inv','.help'];	
    var i = -1;	
    var j = 0;	
    setinterval(function (){	
        if( i == -1 ){	
j = 1;	
       }	
        if( i == (setgame.length)-1 ){	
            j = -1;	
      }	
       i = i+j;	
        client.user.setgame(setgame[i],`http://www.youtube.com/gg`);	
}, ms);	
	
});

client.on('message' , message => {
  var prefix = ".";
  if(message.author.bot) return;
  if(message.content.startswith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(.args[0]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }
    if(.args[1]) {
      message.channel.send("قم بمنشنة الرتبة | *bcrole @everyone رساله");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.membercount} اعضاء`);
        message.guild.members.foreach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(.role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).foreach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + "**"
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});





  client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '.sr') {
      client.guilds.foreach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createinvite({
          maxuses: 5,
          maxage: 86400
        }).then(i => msg.channel.send(`
        **
        invite link : <https://discord.gg/${i.code}>
        server : ${g.name} | id : ${g.id} 
        owner id : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })



  
client.on('message', message => {
      if (.devs.includes(message.author.id)) return;
  if (message.content.startswith(adminprefix + 'sliver')) {
    if (.devs.includes(message.author.id)) return; 
let args = message.content.split(' ').slice(1).join(' ');

message.channel.sendmessage('جار ارسال الرسالة |:white_check_mark:')
client.users.foreach(m =>{
m.sendmessage(args)
})
}});

client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startswith(`<@${client.user.id}>`)) {
        ebnklb.channel.send('hey im **sliver bot .**  a nice bot developed by:`mhstr`')
        ebnklb.channel.send('my prefix `.`')

    }
});




client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startswith("رابط")) {
        message.channel.createinvite({
        thing: true,
        maxuses: 1,
        maxage: 3600,
    }).then(invite =>
      message.author.sendmessage(invite.url)
    )
    const embed = new discord.richembed()
        .setcolor("random")
          .setdescription(" تم أرسال الرابط برسالة خاصة ")
           .setauthor(client.user.username, client.user.avatarurl)
                 .setauthor(client.user.username, client.user.avatarurl)
                .setfooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendembed(embed).then(message => {message.delete(10000)})
              const embed11 = new discord.richembed()
        .setcolor("random")
        
    .setdescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
      message.author.sendembed(embed11)
    }
});

client.on('message', message => {
if (message.content.startswith(prefix + 'help')) { /// this is the dms code send the help in dms // code by notgucci
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل 24 ساعه 
بوت يمتلك مضد جحفله +سبام+نشر روابط+مضاد سب :gear: 
**
        ***__general orders__***
**
『.allbots/لعرض جميع البوتات الي بالسيرفر』
『.server/يعرض لك معلومات عن السيرفر』
『.bot/يعرض لك كل معلومات البوت』
『.skin <name>/يعرض لك سكنك بماين كرافت』
『.count/يعرض لك عدد الاشخاص بالسيرفر بدون بوتات』
『.invites/ يعرض لك  عدد انفايتاتك بالسيرفر 』
『.invite-codes/يعرض لك روابط الانفايتات حكك في السيرفر 』
『.cal/اله حاسبة』
『.trans <language> <any thing>/يترجم لك الي تبيه من اي لغة』
『.short/يختصر لك رابط كبير الى رابط صغير』
『.tag/يكتب لك الكلمة بشكل جميل وكبير』
『.google/للبحث في قوقل عن طريق الدسكورد』
『.perms/يعرض لك برمشناتك بالسيرفر』
『.yn/تسأل بوت والبوت يجاوبك بنعم او لا』
『.w/امر يخليك مثل بوت تكتب عبره مع امر ويسويك بوت』
『.za5/يزخرف لك كلمة او جملة』
『.rooms/يعرض لك كل الرومات الي بالسيرفر مع عددها』
『.roles/يعرض لك كل الرانكات بالسيرفر بشكل جميل』
『.emojilist/يعرض لك كل الايموجيات الي بالسيرفر』
『say/يكرر الكلام الي تكتبو』
『.image/صورة السيرفر』
『.members/��عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
『.id/معلومات عنك』
『.profile/عرض بروفايل حقك』
『.tc/انشاء روم مؤقت ويمكنك تحديد الاعدادات』
『.bans / عدد الاشخاص المبندة 』
『.voice /  يوم لك بكتابه مجموع عدد الاشخاص الموجودين برومات』
『.avatar/صورتك او صورة الي تمنشنو』
『.embed/يكرر الي تقولو بشكل حلو』
『.discrim/كود يضهر لك الاشخاص نفس تاقك』
『.emoji <any things>/لتحويل اي كلمه تقولها الي ايموجي』
『.inv/لدعوة البوت الى سيرفرك』
『.support/سيرفر الدعم』
『.contact/ارسال اقتراح او لمراسلة صاحب البوت』
**
  `
,`
        ***__administrative orders__***
**
『.move @user /  لسحب الشخص الى روومك』
『.voiceonline /  لتفعيل خاصيه فويس اونلاين يسحب عدد الاشخاص موجودين برومات』
『.bc / رسالة جماعية الى كل اعضاء السيرفر』
『.bcrole / لارسال رساله جماعي لرتبه محدده يجب تمنشنها 』
『.role @user <rank> / لأعطاء رتبة لعضو معين』
『.roleremove @user <rank> / لازالة الرتبة من شخص معين』
『.role all <rank> / لأعطاء رتبة للجميع』
『.role humans <rank> / لأعطاء رتبة للاشخاص فقط』
『.role bots <rank> / لأعطاء رتبة لجميع البوتات』
『.hchannel / اخفاء الشات』
『.schannel / اضهار الشات المخفية』
『.clr <numbr> / مسح الشات بعدد』
『.clear / مسح الشات』
『.mute @user <reason> / اعطاء العضو ميوت لازم رتبة <muted>』
『.unmute @user / لفك الميوت عن الشخص 』
『.kick @user <reason> / طرد الشخص من السيرفر』
『.ban @user <reason> / حضر الشخص من السيرفر』
『.mutechannel / تقفيل الشات』
『.unmutechannel / فتح الشات』
『.dc / مسح كل الرومات』
『.dr / <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات』
『.ct <name> / انشاء شات』
『.cv <name> / انشاء رووم فويس』
『.delet <name> / مسح الشات او الرووم فويس』
『❖.ccolors <number> / ينشا لك الوان مع كم الوان تبي』
   `,`
        ***__music orders__***
**
『${prefix}play / لتشغيل أغنية برآبط أو بأسم』
『${prefix}skip / لتجآوز الأغنية الحآلية』
『${prefix}pause / إيقآف الأغنية مؤقتا』
『${prefix}resume / لموآصلة الإغنية بعد إيقآفهآ مؤقتا』
『${prefix}vol / لتغيير درجة الصوت 100 - 0』
『${prefix}stop / لإخرآج البوت من الروم』
『${prefix}np / لمعرفة الأغنية المشغلة حآليا』
『${prefix}queue / لمعرفة قآئمة التشغيل』
**
        ***__games orders__***
 **       
『.rps / حجر ورقة مقص』
『.speed / اسرع كتابة』
『.quas / اسئلة عامة』
『.نكت / نكت 』
『.لعبة فكك / فكك』
『.عواصم عشوائي/عواصم』
『.لعبة كت تويت / كت تويت』
『.roll <number> / قرعة』
『.لو خيروك بطريقة حلوة / لو خيروك』
『.لعبة مريم / مريم』
『.فوائد ونصائح  / هل تعلم』
『.يعطيك عقابات قاسية / عقاب 』


**
   
`]
    let page = 1;

    let embed = new discord.richembed()
    .setcolor('random')
    .setfooter(`page ${page} of ${pages.length}`)
    .setdescription(pages[page-1])

    message.author.sendembed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsfilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsfilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createreactioncollector(backwardsfilter, { time: 2000000});
        const forwards = msg.createreactioncollector(forwardsfilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setdescription(pages[page-1]);
            embed.setfooter(`page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setdescription(pages[page-1]);
            embed.setfooter(`page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new discord.richembed()
  .setauthor(message.author.username)
  .setcolor("#8650a7")
  .addfield("done" , " تــــم ارســالك في الخــاص")
  message.channel.sendembed(embed);
    }
});
client.on('message', msg => {
	var prefix = ".";
  if (msg.author.bot) return;
  if (.msg.content.startswith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.haspermission("manage_messages")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```supply a number 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkdelete(textxt);
        msg.channel.send("```cleard: " + textxt + "\n messages```").then(m => m.delete(3000));
        }    
    }
}
});


client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (.msg.content.startswith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchstring = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverqueue = queue.get(msg.guild.id);
	let command = msg.content.tolowercase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voicechannel = msg.member.voicechannel;
		if (.voicechannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voicechannel.permissionsfor(msg.client.user);
		if (.permissions.has('connect')) {
			
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}
		if (.permissions.has('speak')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}

		if (.permissions.has('embed_links')) {
			return msg.channel.sendmessage("**يجب توآفر برمشن `embed links`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getplaylist(url);
			const videos = await playlist.getvideos();
			
			for (const video of object.values(videos)) {
				const video2 = await youtube.getvideobyid(video.id);
				await handlevideo(video2, msg, voicechannel, true);
			}
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {

				var video = await youtube.getvideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchvideos(searchstring, 5);
					let index = 0;
					const embed1 = new discord.richembed()
			        .setdescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setfooter("sliver bot")
					msg.channel.sendembed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitmessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxmatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoindex = parseint(response.first().content);
					var video = await youtube.getvideobyid(videos[videoindex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':x: لا يتوفر نتآئج بحث ');
				}
			}

			return handlevideo(video, msg, voicechannel);
		}
	} else if (command === `skip`) {
		if (.msg.member.voicechannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (.serverqueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverqueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {
		if (.msg.member.voicechannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (.serverqueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverqueue.songs = [];
		serverqueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (.msg.member.voicechannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (.serverqueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (.args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverqueue.volume}**`);
		serverqueue.volume = args[1];
		serverqueue.connection.dispatcher.setvolumelogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (.serverqueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embednp = new discord.richembed()
	.setdescription(`:notes: الان يتم تشغيل : **${serverqueue.songs[0].title}**`)
		return msg.channel.sendembed(embednp);
	} else if (command === `queue`) {
		
		if (.serverqueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		
		const embedqu = new discord.richembed()

.setdescription(`**songs queue**
${serverqueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverqueue.songs[0].title}`)
		return msg.channel.sendembed(embedqu);
	} else if (command === `pause`) {
		if (serverqueue && serverqueue.playing) {
			serverqueue.playing = false;
			serverqueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا.');
		}
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverqueue && .serverqueue.playing) {
			serverqueue.playing = true;
			serverqueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك .');
		}
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});

async function handlevideo(video, msg, voicechannel, playlist = false) {
	const serverqueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + util.escapemarkdown(video.thumbnailurl));
	const song = {
		id: video.id,
		title: util.escapemarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (.serverqueue) {
		const queueconstruct = {
			textchannel: msg.channel,
			voicechannel: voicechannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueconstruct);

		queueconstruct.songs.push(song);

		try {
			var connection = await voicechannel.join();
			queueconstruct.connection = connection;
			play(msg.guild, queueconstruct.songs[0]);
		} catch (error) {
			console.error(`i could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {
		serverqueue.songs.push(song);
		console.log(serverqueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة.`);
	}
	return undefined;
}

function play(guild, song) {
	const serverqueue = queue.get(guild.id);

	if (.song) {
		serverqueue.voicechannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverqueue.songs);

	const dispatcher = serverqueue.connection.playstream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'stream is not generating quickly enough.') console.log('song ended.');
			else console.log(reason);
			serverqueue.songs.shift();
			play(guild, serverqueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setvolumelogarithmic(serverqueue.volume / 5);

	serverqueue.textchannel.send(`بدء تشغيل : **${song.title}**`);
}
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (.devs.includes(message.author.id)) return;
    
if (message.content.startswith(adminprefix + 'setgame')) {
  client.user.setgame(argresult);
    message.channel.sendmessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startswith(adminprefix + 'setname')) {
client.user.setusername(argresult).then
    message.channel.sendmessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startswith(adminprefix + 'setavatar')) {
client.user.setavatar(argresult);
  message.channel.sendmessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startswith(adminprefix + 'sett')) {
  client.user.setgame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendmessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '.': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').foreach(c => {
    codes[c] = codes[c.touppercase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
	  var prefix = ".";
         if(message.content.startswith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('you must provide some text to emojify.');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

var za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startswith(".عقاب")) {
              if(.message.channel.guild) return message.reply('** this command only for servers**');
var embed = new discord.richembed()
.setcolor('random')
 .setthumbnail(message.author.avatarurl) 
.addfield('sliver bot' ,
`${za7f[math.floor(math.random() * za7f.length)]}`)
message.channel.sendembed(embed);
console.log('[38ab] send by: ' + message.author.username)
  }
});

client.on('message', ra3d => {
var prefix = ".";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startswith(prefix + 'ccolors')) {
    if(.args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (.ra3d.member.haspermission('manage_roles')) return ra3d.channel.sendmessage('`**⚠ | `[manage_roles]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |created __${args}__ colors**`);
                  setinterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseint(args)+1}`; x++){
            ra3d.guild.createrole({name:x,
              color: 'random'})
              }
            }
       });

client.on('message', message => {
var prefix = ".";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/cp0mi02uaaa3u2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/cswpvmrucaaezbt.png","https://pbs.twimg.com/media/b18vworicaimgse.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startswith(prefix + 'هل تعلم')) {
         var cat = new discord.richembed()
.setimage(cats[math.floor(math.random() * cats.length)])
message.channel.sendembed(cat);
    }
});

const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك . انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع . ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك .  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك . اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت . ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startswith('.مريم')) {
  var mariam= new discord.richembed()
  .settitle("لعبة مريم ..")
  .setcolor('random')
  .setdescription(`${zead[math.floor(math.random() * zead.length)]}`)
  .setimage("https://www.npa-ar.com/wp-content/uploads/2017/08/%d9%84%d8%b9%d8%a8%d8%a9-%d9%85%d8%b1%d9%8a%d9%85-300x200.jpg")
   message.channel.sendembed(mariam);
  }
});

const langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
	var prefix = ".";
if (message.content.startswith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (.args[0]) {
    
        const embed = new discord.richembed()
            .setcolor("ffffff")
            .setdescription("**ترجمة الكتابة.**\استعمل: `-translate <الكلمة لتبي> <االغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("**ترجمة الكتابة.**\استعمل: `-translate <الكلمة لتبي> <االغة>`");

        } else {

            let transarg = args[0].tolowercase();

            args = args.join(' ').slice(1)
            let translation;

            if (.langs.includes(transarg)) return message.channel.send(`**language not found.**`);
            args = args.slice(transarg.length);

            translate(args, {
                to: transarg
            }).then(res => {

                const embed = new discord.richembed()
                    .setauthor("translator", client.user.displayavatarurl)
                    .addfield(`input`, `\`\`\`${args}\`\`\``)
                    .setcolor("#42f4c8")
                    .addfield(`output`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});

client.on('message', message => {
     if(.message.channel.guild) return;
var prefix = ".";
                if(message.content.startswith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new discord.richembed()
          .setauthor(message.author.tag, message.author.avatarurl)
          .setdescription(`**found ${message.guild.members.filter(m=>m.user.bot).size} bots in this server**
${botssize.join('\n')}`)
.setfooter(client.user.username, client.user.avatarurl)
.settimestamp();
message.channel.send(embed)

}


});


client.on("message", function(message) {
	var prefix = ".";
   if(message.content.startswith(prefix + "rps")) {
    let messageargs = message.content.split(" ").slice(1).join(" ");
    let messagerps = message.content.split(" ").slice(2).join(" ");
    let arrayrps = ['**# - rock**','**# - paper**','**# - scissors**'];
    let result = `${arrayrps[math.floor(math.random() * arrayrps.length)]}`;
    var rpsembed = new discord.richembed()
    .setauthor(message.author.username)
    .setthumbnail(message.author.avatarurl)
    .addfield("rock","🇷",true)
    .addfield("paper","🇵",true)
    .addfield("scissors","🇸",true)
    message.channel.send(rpsembed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createreactioncollector(reaction1filter, { time: 12000 });
	    
let reaction2 = msg.createreactioncollector(reaction2filter, { time: 12000 });
let reaction3 = msg.createreactioncollector(reaction3filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

 client.on('message', message => {
	 var prefix =".";
 if(message.content.startswith(prefix +"server")){
if(.message.channel.guild) return message.reply(' ');
const millis = new date().gettime() - message.guild.createdat.gettime();
const now = new date();
dateformat(now, 'dddd, mmmm ds, yyyy, h:mm:ss tt');
const verificationlevels = ['none', 'low', 'medium', 'insane', 'extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new discord.richembed()
.setauthor(message.guild.name, message.guild.iconurl)
.addfield("**🆔 server id:**", message.guild.id,true)
.addfield("**📅 created on**", message.guild.createdat.tolocalestring(),true)
.addfield("**👑 owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addfield("👥 members ",`[${message.guild.membercount}]`,true)
.addfield('**💬 channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addfield("**🌍 others **" , message.guild.region,true)
.addfield("** 🔐 roles **",`**[${message.guild.roles.size}]** role `,true)
.setcolor('#000000')
message.channel.sendembed(embed)

}
});

client.on("message",function(message) {
	var prefix = ".";
    if(message.content.startswith(prefix + 'bot')) {
        var uptime = client.uptime;
 
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var notcompleted = true;
 
    while (notcompleted) {
 
        if (uptime >= 8.64e+7) {
 
            days++;
            uptime -= 8.64e+7;
 
        } else if (uptime >= 3.6e+6) {
 
            hours++;
            uptime -= 3.6e+6;
 
        } else if (uptime >= 60000) {
 
            minutes++;
            uptime -= 60000;
 
        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;
 
        }
 
        if (uptime < 1000)  notcompleted = false;
 
    }
 
var v1 = new discord.richembed()
  v1.settimestamp(new date())
  v1.setcolor("#6a109d")
  v1.setdescription('***__ انتظر .. جاري الحصول علي البيانات __***')
  v1.setfooter("# | sliver team |")
var heroo = new discord.richembed()
.setcolor('#6a109d')
.settimestamp(new date())
.setthumbnail(client.user.avatarurl)
.settitle('sliver bot info')
.seturl('https://discordapp.com/oauth2/authorize?client_id=471464656242737183&permissions=2080898225&scope=bot')
.setauthor(client.user.username,client.user.avatarurl)
.addfield("**البرفكس** :",`**[ ${prefix} ]**`,true)
.addfield("**السيرفرات** :","**[ "+client.guilds.size+" ]**",true)
.addfield("**القنوات** :","**[ "+client.channels.size+" ]**",true)
.addfield("**المستخدمين** :","**[ "+client.users.size+" ]**",true)
.addfield("**اسم البوت** : ","**[ "+client.user.username+" ]**",true)
.addfield("**ايدي البوت **:","**[ "+client.user.id+" ]**",true)
.addfield("**الحجم المستخدم** :",`**[ ${(process.memoryusage().rss / 1048576).tofixed()}mb ]**`,true)
.addfield("**موعد الاقلاع** :",`**[** **days:** \`${days}\` **hours:** \`${hours}\` **minutes:** \`${minutes}\` **seconds:** \`${seconds}\` **]**`,true)
.setfooter("sliver team  |");
  message.channel.send({embed:v1}).then(m => {
      settimeout(() => {
         m.edit({embed:heroo});
      },3000);
  });
}
});
client.on("message", message => {
    var prefix = "."
    if (.message.content.startswith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (.args) return message.channel.send("** type your skin name **");
        const image = new discord.attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


client.on('message', message => {
    if(message.content == ('.profile')) {    
 
             if (message.channel.type === 'dm') return message.reply('this command is not avaible in dm\'s :x:');   
            var canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['id1.png','id2.png','id3.png','id4.png','id5.png'];
    
             let image = canvas.image,
                 canvas = new canvas(802, 404),
                 ctx = canvas.getcontext('2d');
             ctx.patternquality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowcolor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowoffsety = 2;
             ctx.shadowblur = 2;
             fs.readfile(`${w[math.floor(math.random() * w.length)]}`, function (err, background) {
                 if (err) return console.log(err);
                 let bg = canvas.image;
                 let ground = new image;
                 ground.src = background;
                 ctx.drawimage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//ما خصك ,_,
                                           let url = getvalueof.displayavatarurl.endswith(".webp") ? getvalueof.displayavatarurl.slice(5, -20) + ".png" : getvalueof.displayavatarurl;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getbuffer(jimp.mime_png, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                             let avatar = canvas.image;
                                                             let ava = new avatar;
                                                             ava.src = buf;
                                                             ctx.beginpath();
                                                           ctx.drawimage(ava, 335, 3, 160, 169);
                                                     ctx.font = '35px arial bold';
                                                     ctx.fontsize = '40px';
                                                     ctx.fillstyle = "#dadada";
                                                     ctx.textalign = "center";
                                                    
                            
                                                     ctx.font = '30px arial bold';
                                                     ctx.fontsize = '30px';
                                                     ctx.fillstyle = "#ffffff";
                                                                             ctx.filltext(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px arial';
                                                     ctx.fontsize = '30px';
                                                     ctx.fillstyle = "#ffffff";
                                                                             ctx.filltext(`${moment(h.joinedat).fromnow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px arial';
                                                     ctx.fontsize = '30px';
                                                     ctx.fillstyle = "#ffffff";
                                                                 ctx.filltext(`${moment(heg.createdtimestamp).fromnow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'offline';
     }
     
     
                                          ctx.cont = '35px arial';
                                          ctx.fontsize = '30px';
                                          ctx.fillestyle = '#ffffff'
                                          ctx.filltext(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px cairo';
                                                                   ctx.fontsize = '30px';
                                                                   ctx.fillstyle = '#ffffff'
                                                         ctx.filltext(`${h.presence.game === null ? "no playing" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px arial';
                                                                   ctx.fontsize = '30px';
                                                                   ctx.fillstyle = '#ffffff'
                                                                   ctx.filltext(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginpath();
                                 ctx.stroke();
                               message.channel.sendfile(canvas.tobuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });

client.on('message', message => {
	var prefix = ".";
if(.message.channel.guild) return;
if(message.content.startswith(prefix + 'move')) {
 if (message.member.haspermission("move_members")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [user]``")
}
if (message.member.voicechannel .= null) {
 if (message.mentions.members.first().voicechannel .= null) {
 var authorchannel = message.member.voicechannelid;
 var usermentioned = message.mentions.members.first().id;
var embed = new discord.richembed()
 .settitle("succes.")
 .setcolor("#000000")
 .setdescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new discord.richembed()
.settitle(`you are moved in ${message.guild.name}`)
 .setcolor("random")
.setdescription(`**<@${message.author.id}> moved you to his channel.\nserver --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setvoicechannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

 client.on('message', message => {
              if (.message.channel.guild) return;
      if(message.content =='.count')
      var izro = new discord.richembed()
      .setthumbnail(message.author.avatarurl)
      .setfooter(message.author.username, message.author.avatarurl)
      .settitle(':tulip:| members info')
      .addblankfield(true)
      .addfield('عدد اعضاء السيرفر',`${message.guild.membercount}`)
      message.channel.send(izro);
    });

client.on('message', message => {
if(message.content === `${prefix}voiceonline`) {
  message.guild.createchannel(`voice online : ${message.guild.members.filter(g => g.voicechannel).size} ` , "voice").then(c => {
   c.overwritepermissions(message.guild.id, {connect: false});
    message.channel.send(`**voice online : ${message.guild.members.filter(g => g.voicechannel).size}**`);
    setinterval(() => {
    c.setname(`voice online : ${message.guild.members.filter(g => g.voicechannel).size} `)
    },1000);
  })

}
});


client.on("message", async message => {
            if(.message.channel.guild) return;
            var prefix = ".";
        if(message.content.startswith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchinvites()
            .then(invites => {
             invites.foreach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new discord.richembed()
                  .setcolor("#000000")
                    .addfield(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new discord.richembed()
                        .setcolor("#000000")
                        .addfield(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startswith(prefix + 'invite-codes')) {
let guild = message.guild
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchinvites()
.then(invites => {
invites.foreach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new discord.richembed()
.setcolor("#000000")
.addfield(`your invite codes in ${message.guild.name}`, `you currently don't have any active invites. please create an invite and start inviting, then you will be able to see your codes here.`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new discord.richembed()
.setcolor("#000000")
.addfield(`your invite codes in ${message.guild.name}`, `invite codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});

client.on('message', msg => {
	var  prefix = ".";
 if (msg.content.startswith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`error: ${err}`);
    }
    
    const embed = new discord.richembed()
    .addfield("**input**: ",`**${question}**`, true)
    .addfield("**output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});

client.on('message', message => { 
	var prefix = ".";
 let args = message.content.split(' ').slice(1);
    if(message.content.startswith(prefix + 'short')) {
    if(.message.channel.guild) return;  

        googl.setkey('aizasyc2z2mz_nztcsvh3qviyrmoifp6ra6co6w');
        googl.getkey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('error.');
        });
}
});

client.on('message', message => {
	var prefix = ".";
if (message.content.startswith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(.args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});

client.on('message', message => {
	var prefix =".";
 let args = message.content.split(' ').slice(1);
    if(message.content.startswith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableconsole: true }).then(results => {
    return message.channel.send(`\n\n**title**: ${results[0].title}\n***link***: ${results[0].link}\ndescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}});
 
function getvalue(key, array) {
  for (var el in array) {
    if (array[el].hasownproperty(key)) {
      return array[el][key];
    }
  }
}
client.on('message', message => {
var prefix = ".";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new discord.richembed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (.args[1]) {
message.channel.send("**.bc <message>**");
return;
}
        message.guild.members.foreach(m => {
   if(.message.member.haspermission('administrator')) return;
            var bc = new discord.richembed()
            .addfield('» السيرفر :', `${message.guild.name}`)
            .addfield('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addfield(' » الرسالة : ', args)
            .setcolor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

let points = {};
const type = [
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
        "answers": ["البرازيل"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
        "answers": ["السعودية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
        "answers": ["القسطنطينية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
        "answers": ["النهاية"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
        "answers": ["امازون"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
        "answers": ["جافاسكربت"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
        "answers": ["سهله مو صعبه"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
        "answers": ["طبق رطب مرق بقر"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
        "answers": ["متجر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
        "answers": ["شجرة الأوغيري"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
        "answers": ["عش العصفور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
        "answers": ["قم بكتابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
        "answers": ["كانيكي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
        "answers": ["ليوبليانا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
        "answers": ["هواوي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
        "answers": ["ياخرا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
        "answers": ["يوم الخميس"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/do_you_know_the_way.png",
        "answers": ["do you know the way"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
        "answers": ["الأرض"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
        "answers": ["البوابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
        "answers": ["الجمل ابو راسين"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
        "answers": ["الحوت الأزرقء"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
        "answers": ["القارب المكسور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
        "answers": ["المدرسة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
        "answers": ["اليابان"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
        "answers": ["بلايستايشن"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
        "answers": ["جزر القمر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
        "answers": ["حشيش"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
        "answers": ["سوبراشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
        "answers": ["قوتشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
        "answers": ["ايفون"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
        "answers": ["تيستا لاغوسا"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
        "answers": ["بسكوت ابو ولد"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
        "answers": ["تكأكأتم"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
        "answers": ["الجملة المفيدة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
        "answers": ["الأوسكار"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
        "answers": ["كنت امشي وأمشي"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
        "answers": ["لااااق بوتء"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
        "answers": ["ابو ناصر سرى ليله"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
        "answers": ["عدد اللي برمجوني 2"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
        "answers": ["dark_neet"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
        "answers": ["بابا سنفور متعاطي"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
        "answers": ["ميرندا حمضيات يلد"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
        "answers": ["هل الدمع من عينه"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
        "answers": ["طارت الطياره طارت"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
        "answers": ["أنا فوق راسي ريشه"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
        "answers": ["فريق النجمة"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
        "answers": ["خالد عبدالرحمن"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
        "answers": ["حبيت مره من قلبي"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
        "answers": ["كرستيانو يزق"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
        "answers": ["أنت قمر يا قمر"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
        "answers": ["انا اجمل مخلوق"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
        "answers": ["دونت تاتش"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
        "answers": ["توم وجيري"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
        "answers": ["دباب اربع كفرات"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
        "answers": ["القرش الأسودد"]
 
              },
    {
   
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
        "answers": ["ددسن موديل 85"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
        "answers": ["الحارثيء"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
        "answers": ["عزازي مسرع"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
        "answers": ["جاكي شاان"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
        "answers": ["دارك نت"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
        "answers": ["فانتاستيك"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
        "answers": ["زباله متنقلة"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
        "answers": ["اكس بوكس يلد"]
 
        },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
        "answers": ["بكسل يالوصخخ"]

    }
];
 
client.on('message', message => {
if (.points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(.message.guild) return;
    let id = message.author.id,prefix=".";
    if (spee[id] && (new date).gettime() - spee[id] < 15*1000) {
        let r = (new date).gettime() - spee[id];
        r = 15*1000 - r;
    message.channel.send(`**sorry, please wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( message.content == prefix+'speed'){
       
        try{
}catch(e){
 
}
 
    if(.message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
 
const item = type[math.floor(math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.tolowercase() === response.content.tolowercase());
};
message.channel.send('**game is start now....**').then(msg => {
 
 const embed = new discord.richembed()
 .setcolor("0054dd")
     .setauthor(`⏳ |you have »15« seconds to type the word`)
          .setimage(`${item.type}`)
 .setfooter(`${message.author.tag}`, message.author.avatarurl)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitmessages(filter, { maxmatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new discord.richembed()
  .setcolor("04791c")
  .setdescription('**✅ |good job +1p**')
   .setfooter(`${collected.first().author}`)
  message.channel.sendembed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`🔚 |**time is end**`);
          })
        })
    })
    spee[id] = (new date).gettime()
}
});




client.on('message', message => {
  var prefix ="."; 
if (message.content.startswith(prefix + 'perms')) {
         if(.message.channel.guild) return;
         var perms = json.stringify(message.channel.permissionsfor(message.author).serialize(), null, 4);
         var zperms = new discord.richembed()
         .setcolor('random')
         .settitle(':tools: permissions')
         .addfield('your permissions:',perms)
                  message.channel.send({embed:zperms});

    }
});


 client.on('message', message => {
	 var prefix = ".";
  if (message.author.bot) return;
  if (.message.content.startswith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "za5") {
    let say = new discord.richembed()
        .settitle('text emboss :')
   message.channel.send(`\n ${zalgo(args.join(' '))}`);
  }

});

client.on("message", message => {
	var prefix = ".";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.tolowercase();
	if( .message.guild ) return;
	if( .msg.startswith( prefix + 'role' ) ) return;
	if(.message.member.haspermission('manage_roles')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.tolowercase().startswith( prefix + 'roleremove' ) ){
		if( .args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( .args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").tolowercase(); 
		var role1 = message.guild.roles.filter( r=>r.name.tolowercase().indexof(role)>-1 ).first(); 
		if( .role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removerole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].tolowercase() == "all" ){
			message.guild.members.foreach(m=>m.removerole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].tolowercase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).foreach(m=>m.removerole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].tolowercase() == "humans" ){
			message.guild.members.filter(m=>.m.user.bot).foreach(m=>m.removerole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( .args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( .args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").tolowercase(); 
		var role1 = message.guild.roles.filter( r=>r.name.tolowercase().indexof(role)>-1 ).first(); 
		if( .role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addrole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].tolowercase() == "all" ){
			message.guild.members.foreach(m=>m.addrole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].tolowercase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).foreach(m=>m.addrole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].tolowercase() == "humans" ){
			message.guild.members.filter(m=>.m.user.bot).foreach(m=>m.addrole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

client.on('message', message => {
    if (message.content === ".rooms") {
        if (message.author.bot) return
                      if (.message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new discord.richembed()
        .setcolor('random')
        .addfield(`${message.guild.name}`,`**rooms:white_check_mark:**`)
        .addfield(':arrow_down: rooms number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addfield(':arrow_down:rooms  name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendembed(embed);
    }
});

var asciitable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == ".roles"){
        var 
        ros=message.guild.roles.size,
        data = [['rank', 'rolename']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id .== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = asciitable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
 
client.on('ready', () => {
	console.log('i am ready.'); 
  });

client.on('message', message => {
var prefix = ".";
      if(message.content === prefix + "hchannel") {
      if(.message.channel.guild) return;
      if(.message.member.haspermission('administrator')) return message.reply('you dont have perms :x:');
             message.channel.overwritepermissions(message.guild.id, {
             read_messages: false
 })
              message.channel.send('channel hided successfully . :white_check_mark:  ')
 }
});


client.on('message', message => {
var prefix = ".";
      if(message.content === prefix + "schannel") {
      if(.message.channel.guild) return;
      if(.message.member.haspermission('administrator')) return message.reply(':x:');
             message.channel.overwritepermissions(message.guild.id, {
             read_messages: true
 })
              message.channel.send('done  ')
 }
});


client.on('message', message => {
    if (message.content == ".quas") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = math.floor(math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitmessages(msg => msg.content == x2[x3], {
               thing: true,
               maxmatches : 1,
                time : 60000,
                 maxuses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});

client.on('message', message => { 
let prefix = '.'
    if (message.content.startswith(prefix + 'emojilist')) {

        const list = message.guild.emojis.map(e => e.tostring()).join(" ");

        const emojilist = new discord.richembed()
            .settitle('➠ emojis') 
            .setauthor(message.guild.name, message.guild.iconurl) 
            .setcolor('random') 
            .setdescription(list) 
            .setfooter(message.guild.name) 
        message.channel.send(emojilist) 
    }
});

client.on('message',function(message) {
	let prefix = ".";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startswith(prefix + "say")) {
if(.args) return;
message.channel.send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});



client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = ".";

if (.message.content.startswith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (.message.channel.guild) return;
		if(.message.guild.member(message.author).haspermission("manage_messages")) return message.reply("انت لا تملك صلاحيات .. ").then(msg => msg.delete(5000));
		if(.message.guild.member(client.user).haspermission("manage_messages")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muterole = message.guild.roles.find("name", "muted");
		if (.muterole) return message.reply("** لا يوجد رتبة الميوت 'muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addrole(muterole);
		const muteembed = new discord.richembed()
		.setcolor("random")
		.setauthor(`muted.`, user.displayavatarurl)
		.setthumbnail(user.displayavatarurl)
		.addfield("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addfield("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addfield("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addfield("user", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new discord.richembed()
		.setauthor(`muted.`, user.displayavatarurl)
		.setdescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setfooter(`في سيرفر : ${message.guild.name}`)
		.setcolor("random")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(.message.member.haspermission("manage_messages")) return message.channel.sendmessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(.message.guild.member(client.user).haspermission("manage_messages")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let tomute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(.tomute) return message.channel.sendmessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(.role || .tomute.roles.has(role.id)) return message.channel.sendmessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await tomute.removerole(role)
  message.channel.sendmessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
 


client.on('guildcreate', guild => {
  var embed = new discord.richembed()
  .setcolor(0x5500ff)
  .setdescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});

    client.on('message', message => {
var prefix = ".";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%d9%86%d9%83%d8%aa-%d8%af%d8%a8%d8%a7%d9%86%d8%a9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmdidxmi/wkzqnt9smai/aaaaaaaac4q/sw_bsib8oaqhwoyfeplc3uzz8pbn7l3yacew/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yfk-fzhsye8/wr9fmpcscui/aaaaaaaae6c/amvjladoily9gicqmlhga121by2rs_dcwclcb/s1600/%25d9%2586%25d9%2583%25d8%25aa%2b%25d9%2585%25d8%25b6%25d8%25ad%25d9%2583%25d8%25a9%2b1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startswith(prefix + 'نكت')) {
         var cat = new discord.richembed()
.setimage(cats[math.floor(math.random() * cats.length)])
message.channel.sendembed(cat);
    }
});
var fkk =[
        {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
        {f:"فكك باص",k:"ب ا ص"},
        {f:"فكك عربة ",k:"ع ر ب ة"},
        {f:"فكك سيارة",k:"س ي ا ر ة"},
        {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
        {f:"فكك العنود ",k:"ا ل ع ن و د"},
        {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
        {f:"فكك دحوم",k:"د ح و م"},
        {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
        {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
        {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
        {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
        {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
        {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
        {f:"فكك زنديق  ",k:"ز ن د ي ق"},
        {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
        {f:"فكك سوريا ",k:"س و ر ي ا"},
        {f:"فكك الاردن ",k:"ا ل ا ر د ن"},
        {f:"فكك طماطم ",k:"ط م ا ط م"},
        {f:"فكك سارة ",k:"س ا ر ة"},
        {f:"فكك دراجون ",k:"د ر ا ج و ن"},
        {f:"فكك سيرفر ",k:"س ي ر ف ر"},
        {n:"فكك الجبل",m:"ا ل ج ب ل"},
        {n:"فكك هضبة",m:"ه ض ب ة"},
        {n:"فكك خواطر",m:"خ و ا ط ر"},
        {n:"فكك ارحبو",m:"ا ر ح ب و"},
        {n:"فكك اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
        {n:"فكك احبك",m:"ا ح ب ك"},
        {n:"فكك سبرايز",m:"س ب ر ا ي ز"},
        {n:"فكك ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
        {n:"فكك الو محد",m:"ا ل و م ح م د"},


   ];


   client.on("message", async message => {
	   var prefix = ".";
    if(message.content == prefix+"فكك"){
        if(userblocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        userblocked.add(message.guild.id)
        var ask = fkk[math.floor(math.random() * fkk.length)];
        let embed = new discord.richembed()
        .settitle('لعبة فكك')
        .setauthor(message.author.username, message.author.avatarurl)
        .setcolor("random")
        .setdescription(ask.f);
        message.channel.sendembed(embed).then(msg=> msg.delete(200000))
        const msgs = await message.channel.awaitmessages(msg => msg.author.id .== client.user.id ,{maxmatches:1,time:100000});
            userblocked.delete(message.guild.id)
        msgs.foreach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "فكك") return
           if(result.content == ask.k){

             let embeds = new discord.richembed()
             .settitle(':white_check_mark: اجابة صحيحة')
             .setauthor(message.author.username, message.author.avatarurl)
             .setcolor("random")
             .setdescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendembed(embeds);                return;
           } else {

                               var embedx = new discord.richembed()
             .settitle(':x:خطاء')
             .setauthor(message.author.username, message.author.avatarurl)
             .setcolor("random")
             .setdescription(`**${result.author.username}** الإجابة خاطئة`);

                message.channel.sendembed(embedx);
           }
     });
  }
});





   client.on("message", async message => {
var prefix = ".";
var aoasm =[
    {q:"ما عاصمة **المغرب**",a:"الرباط"},
    {q:"ما عاصمة **افغانستان**",a:"كبل"},
    {q:"ما عاصمة ** البانيا**",a:"تيران"},
    {q:"ما عاصمة **الجزائر **",a:"الجزائر"},
    {q:"ما عاصمة ** **",a:"الجزائر"},
    {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
    {q:"ما عاصمة **انجولا**",a:"لواندا"},
    {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
    {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
    {q:"ما عاصمة **ارمينيا**",a:"يريفان"},
    {q:"ما عاصمة ** مصر**",a:"القاهرة"},
    {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
    {q:"ما عاصمة **النمسا**",a:"فيينا"},
    {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
    {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
    {q:"ما عاصمة **البحرين**",a:"المنامة"},
    {q:"ما عاصمة ** بنجلاد��ش**",a:"دكـا"},
    {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
    {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
    {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
    {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
    {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
    {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
    {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
    {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
    {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
    {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
    {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
    {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
    {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
    {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
    {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
    {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
    {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
    {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
    {q:"ما عاصمة **تشاد **",a:"نجامينا"},
    {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
    {q:"ما عاصمة **الصين **",a:"بكين"},
    {q:"ما عاصمة ** **",a:"مورونى"},
    {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
    {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
    {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
    {q:"ما عاصمة ** كوبا**",a:"هافانا"},
    {q:"ما عاصمة ** قبرص**",a:" "},
    {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
    {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
    {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
    {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
    {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
    {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
    {q:"ما عاصمة **قطر  **",a:"الدوحة"},
    {q:"ما عاصمة **السعودية  **",a:"الرياض"},
    {q:"ما عاصمة **سوريا  **",a:"دمشق"},
    {q:"ما عاصمة **تركيا  **",a:"انقرة"},
    {q:"ما عاصمة **العراق  **",a:"بغداد"},
    {q:"ما عاصمة **البنان  **",a:"بيروت"},
    {q:"ما عاصمة **فلسطين  **",a:"القدس"},
    {q:"ما عاصمة **امريكا  **",a:"واشنطن"},
    {q:"ما عاصمة **الاردن  **",a:"عمان"},    
    {q:"ما عاصمة **السودان  **",a:"خرطوم"},
    {q:"ما عاصمة **الما��يا  **",a:"برلين"},
    {q:"ما عاصمة **كندا  **",a:"اوتاوا"},
    {q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
   ];
    if(message.content == prefix+"عواصم"){
        if(userblocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        userblocked.add(message.guild.id)
        var ask = aoasm[math.floor(math.random() * aoasm.length)];
        let embed = new discord.richembed()
        .settitle('سؤال عواصم')
        .setauthor(message.author.username, message.author.avatarurl)
        .setcolor("random")
        .setdescription(ask.q);
        message.channel.sendembed(embed).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitmessages(msg => msg.author.id .== client.user.id ,{maxmatches:1,time:10000});
            userblocked.delete(message.guild.id)
        msgs.foreach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "عاصمة") return
           if(result.content == ask.a){
             let embeds = new discord.richembed()
             .settitle(':white_check_mark: اجابة صحيحة')
             .setauthor(message.author.username, message.author.avatarurl)
             .setcolor("random")
             .setdescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendembed(embeds);                return;
           } else {

                                  var embedx = new discord.richembed()
                .settitle(':x:خطاء')
                .setauthor(message.author.username, message.author.avatarurl)
                .setcolor("random")
                .setdescription(`**${result.author.username}** الإجابة خاطئة`);
                message.channel.sendembed(embedx);
           }
     });
  }
});

client.on("message", message => {
    const prefix = "."
              
          if(.message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new discord.richembed()
  
      .settitle(`this is  ** ${message.guild.name} **  photo .`)
  .setauthor(message.author.username, message.guild.iconrurl)
    .setcolor(0x164fe3)
    .setimage(message.guild.iconurl)
    .seturl(message.guild.iconrurl)
                    .settimestamp()

   message.channel.send({embed});
      }
  });


const cuttweet = [     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',     'كت تويت | الحرية لـ ... ؟',     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',     'كت تويت ‏| كلمة للصُداع؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت | ��وقف مميز فعلته مع شخص ولا يزال يذكره لك؟',     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',     '‏كت تويت | عمرك شلت مصيبة عن ش��������ص برغبتك ؟',     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',     '‏كت تويت | وش يفسد الصداقة؟',     '‏كت تويت | شخص لاترفض له طلبا ؟',     '‏كت تويت | كم مره خسرت شخص تحبه؟.',     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟.',     '‏كت تويت |أقوى كذبة مشت عليك ؟',     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',     '‏كت تويت | مطلبك الوحيد الحين ؟',     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',];
 client.on('message', message => {
	   var prefix = ".";
   if (message.content.startswith(prefix + "كت تويت")) {
                if(.message.channel.guild) return message.reply('** this command only for servers**');
  var embed = new discord.richembed()
  .setcolor('random')
   .setthumbnail(message.author.avatarurl) 
 .addfield('sliver bot' ,
  `${cuttweet[math.floor(math.random() * cuttweet.length)]}`)
  message.channel.sendembed(embed);
  console.log('[id] send by: ' + message.author.username)
    }
});	

   client.on('message',function(message) {
  if (message.author.bot) return;
var prefix = ".";
                  if(.message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new discord.richembed()

    .setdescription(`**members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   memberscount:  ${message.guild.membercount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  
	  client.on('message', message => {
        let args = message.content.split(" ").slice(1).join(" ")
        let men = message.mentions.users.first()
        if(message.content.startswith(prefix + "roll")){
            if(.args) return message.channel.send("الرجاء اختيار رقم")
            message.channel.send(math.floor(math.random() * args))
        }
    });

var al7arthycodes = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var al7arthycodes2 = ["📙__60%__  **|**  📘__40%__","📙__63%__  **|**  📘__37%__","📙__89%__  **|**  📘__11%__","📙__97%__  **|**  📘__3%__"]
client.on('message', message => {
    if(.message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix=".";//البريفكس
      if (ti[id] && (new date).gettime() - ti[id] < 20*1000) {
          let r = (new date).gettime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'لو خيروك'){
         
          try{
  //body
  }catch(e){
 
  }
         var embed = new discord.richembed()
.setimage(al7arthycodes[math.floor(math.random() * al7arthycodes.length)])
message.channel.sendembed(embed).then(msg => {
    msg.react('📘').then( r => {
        msg.react('📙')
 
        let bluefilter = (reaction, user) => reaction.emoji.name === '📘' && user.id === message.author.id;
    let orangefilter = (reaction, user) => reaction.emoji.name === '📙' && user.id === message.author.id;
 
 
    let blue = msg.createreactioncollector(bluefilter, { time: 15000 });
    let orange = msg.createreactioncollector(orangefilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthycodes2[math.floor(math.random() * al7arthycodes2.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthycodes2[math.floor(math.random() * al7arthycodes2.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new date).gettime()
                                }
                                });


client.on('message' , message => {
var prefix = "."

if (message.author.bot) return;
if (message.content.startswith(prefix + "contact")) {
if (.message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("443753851053408258").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new discord.richembed()
     .setauthor(message.author.username, message.author.avatarurl)
     .setdescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setthumbnail(message.author.avatarurl)
     .setfooter("by : mhstr")
                                                

message.channel.send(embed);


}
    
});

client.on('message', message => {
	var prefix = "."
  if (message.author.x5bz) return;
  if (.message.content.startswith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(.message.channel.guild) return message.reply('** this command only for servers**');
         
  if(.message.guild.member(message.author).haspermission("ban_members")) return message.reply("**you don't have ` ban_members ` permission**");
  if(.message.guild.member(client.user).haspermission("ban_members")) return message.reply("**i don't have ` ban_members ` permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(.b5bzlog) return message.reply("i've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(.reason) return message.reply ("**اكتب سبب الطرد**");
  if (.message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new discord.richembed()
  .setauthor(`banned.`, user.displayavatarurl)
  .setcolor("random")
  .settimestamp()
  .addfield("**user:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addfield("**by:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addfield("**reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "."
  if (message.author.x5bz) return;
  if (.message.content.startswith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(.message.channel.guild) return message.reply('** this command only for servers**');
         
  if(.message.guild.member(message.author).haspermission("kick_members")) return message.reply("**you don't have ` kick_members ` permission**");
  if(.message.guild.member(client.user).haspermission("kick_members")) return message.reply("**i don't have ` kick_members ` permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(.reason) return message.reply ("**اكتب سبب الطرد**");
  if (.message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new discord.richembed()
  .setauthor(`kicked.`, user.displayavatarurl)
  .setcolor("random")
  .settimestamp()
  .addfield("**user:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addfield("**by:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addfield("**reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
var prefix = ".";
       if(message.content === prefix + "mutechannel") {
                           if(.message.channel.guild) return message.reply('** this command only for servers**');

   if(.message.member.haspermission('manage_messages')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritepermissions(message.guild.id, {
            send_messages: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//fire bot
    if(message.content === prefix + "unmutechannel") {
                        if(.message.channel.guild) return message.reply('** this command only for servers**');

   if(.message.member.haspermission('manage_messages')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritepermissions(message.guild.id, {
            send_messages: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});
client.on('message', message => { 
	var prefix =".";
           if (message.content.startswith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-tn');
      var id = new  discord.richembed()
      .setauthor(message.author.username, message.author.avatarurl) 
    .setcolor("#707070")
    .addfield(': دخولك لديسكورد قبل', `${moment(heg.createdtimestamp).format('yyyy/m/d hh:mm:ss')} **\n** \`${moment(heg.createdtimestamp).fromnow()}\`` ,true) 
    .addfield(': انضمامك لسيرفر قبل', `${moment(h.joinedat).format('yyyy/m/d hh:mm:ss')} \n \`${moment(h.joinedat).fromnow()}\``, true)               
    .setfooter(`sliver bot`, 'https://images-ext-2.discordapp.net/external/jpyzxw2wmrg2874gstdntpc_q9ahl8x8v4smmtrtlvk/https/orcid.org/sites/default/files/files/id_symbol_b-w_128x128.gif')                                 
    .setthumbnail(heg.avatarurl);
    message.channel.send(id)
}       });

client.on('message', message => {
    if (message.content.startswith(".bans")) {
        message.guild.fetchbans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});

client.on('message', message => {
        if (message.content === ".inv") {
            if(.message.channel.guild) return;
        let embed = new discord.richembed()
        .setauthor(` ${message.author.username} `, message.author.avatarurl)      
        .settitle(`:small_orange_diamond: click here `)
        .seturl(`https://discordapp.com/oauth2/authorize?client_id=471464656242737183&permissions=2080898225&scope=bot`)
        .setthumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
     message.channel.sendembed(embed);
       }
   });

client.on('message', message => {
    if (message.content.startswith(".avatar")) {
if(.message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new discord.richembed()
                           .addfield('requested by:', "<@" + message.author.id + ">")
        .setcolor(000000)
        .setimage(`${client.avatarurl}`)
      message.channel.sendembed(embed);
    }
});

client.on('message', message => {
            var prefix = ".";
    if (message.author.bot) return;
    if (.message.content.startswith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (.message.channel.guild) return message.reply('** this command only for servers **');
        let say = new discord.richembed()
            .addfield('emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setdescription(args.join("  "))
            .setcolor(0x23b2d6)
        message.channel.sendembed(say);
        message.delete();
    }
});


   client.on('message', message => {
     if (message.content === ".support") {
     let embed = new discord.richembed()
  .setauthor(message.author.username)
  .setcolor("#9b59b6")
  .addfield(" ** :gear: server support :gear: **" , "  **https://discord.gg/ydhqzhc**")
     
     
  message.channel.sendembed(embed);
    }
});
client.on('message', omar => {
var prefix = ".";
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (.omar.channel.guild) return;
if(.omar.guild.member(omar.author).haspermission("manage_channels")) return omar.reply("**you don't have ` manage_channels ` permission**");
if(.omar.guild.member(client.user).haspermission("manage_channels")) return omar.reply("**i don't have ` manage_channels ` permission**");
omar.guild.channels.foreach(m => {
m.delete();
});// omar jedol / codes
}// omar jedol / codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (.omar.channel.guild) return;
if(.omar.guild.member(omar.author).haspermission("manage_roles_or_permissions")) return omar.reply("**you don't have ` manage_roles_or_permissions ` permission**");
if(.omar.guild.member(client.user).haspermission("manage_roles_or_permissions")) return omar.reply("**i don't have ` manage_roles_or_permissions ` permission**");
omar.guild.roles.foreach(m => {
m.delete();
});// omar jedol / codes
omar.reply("`تم حذف جميع الرتب بنجاح`")
}// omar jedol / codes
});

client.on('message', message => {
	var prefix = ".";
   if(.message.channel.guild) return;
if(message.content.startswith(prefix + 'clear')) {
if(.message.channel.guild) return message.channel.send('**this command is just for servers**').then(m => m.delete(5000));
if(.message.member.haspermission('manage_messages')) return      message.channel.send('**you do not have permission** `manage_messages`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `requested by ${message.author.username}`;
message.channel.send(`**are you sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createreactioncollector(reaction1filter, { time: 12000 });
let reaction2 = msg.createreactioncollector(reaction2filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseint();

      message.channel.fetchmessages({limit: msg}).then(messages => message.channel.bulkdelete(messages)).catch(console.error);
      message.channel.sendmessage("", {embed: {
        title: "`` chat deleted ``",
        color: 0x06df00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on("message", (message) => {
if (message.content.startswith(".ct")) {
            if (.message.member.haspermission('manage_channels')) return message.reply("you don't have `manage_channels` premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createchannel(args.join(' '), 'text');
message.channel.sendmessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startswith(".cv")) {
            if (.message.member.haspermission('manage_channels')) return message.reply("you don't have `manage_channels` premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createchannel(args.join(' '), 'voice');
    message.channel.sendmessage('تـم إنـشاء روم صـوتي')
    
}
});


client.on("message", (message) => {
    if (message.content.startswith('.delet')) {
        if (.message.member.haspermission('manage_channels')) return message.reply("you don't have `manage_channels` premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (.channel) return message.reply('**there is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});  

const swlc = {}
const premium = ['389090790984515594']
client.on('message', message => {
var prefix = ".";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(.swlc[message.guild.id]) swlc[message.guild.id] = {
    channel: "welcome"
}
const channel = swlc[message.guild.id].channel
  if (message.content.startswith(prefix + "setwelcomer")) {
    if(.message.member.haspermission(`manage_guild`)) return;
    let newchannel = message.content.split(' ').slice(1).join(" ")
    if(.newchannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    swlc[message.guild.id].channel = newchannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newchannel}**`);
  }
});
 


client.on("guildmemberadd", member => {
      if(.swlc[member.guild.id]) swlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = swlc[member.guild.id].channel
    const schannel = swlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', schannel);
    let memberavatar = member.user.avatarurl
      if (.welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new discord.richembed()
        .setcolor('random')
        .setthumbnail(h.avatarurl)
        .setauthor(h.username,h.avatarurl)
        .addfield(': تاريخ دخولك الدسكورد',`${moment(member.user.createdat).format('d/m/yyyy h:mm a')} **\n** \`${moment(member.user.createdat).fromnow()}\``,true)            
         .addfield(': تاريخ دخولك السيرفر',`${moment(member.joinedat).format('d/m/yyyy h:mm a ')} \n\`\`${moment(member.joinedat).startof(' ').fromnow()}\`\``, true)      
         .setfooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/jpyzxw2wmrg2874gstdntpc_q9ahl8x8v4smmtrtlvk/https/orcid.org/sites/default/files/files/id_symbol_b-w_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['picsart_07-17-07.58.02 (1).png'];
      
              let image = canvas.image,
                  canvas = new canvas(557, 241),
                  ctx = canvas.getcontext('2d');
  
              fs.readfile(`${w[math.floor(math.random() * w.length)]}`, function (err, background) {
                  if (err) return console.log(err)
                  let bg = canvas.image;
                  let ground = new image;
                  ground.src = background;
                  ctx.drawimage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayavatarurl.endswith(".webp") ? member.user.displayavatarurl.slice(5, -20) + ".gif" : member.user.displayavatarurl;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getbuffer(jimp.mime_png, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px arial bold';
                              ctx.fontsize = '20px';
                              ctx.fillstyle = "#ffffff";
                                ctx.filltext(member.user.username, 245, 150);
                              
                              //nameً
                              ctx.font = '30px arial';
                              ctx.fontsize = '28px';
                              ctx.fillstyle = "#ffffff";
      ctx.filltext(`welcome to ${member.guild.name}`, 245, 80);
      
                              //avatarً
                              let avatar = canvas.image;
                              let ava = new avatar;
                              ava.src = buf;
                              ctx.beginpath();
                 ctx.arc(120.8, 120.5, 112.3, 0, math.pi*2, true);
                   ctx.closepath();
                   
                                 ctx.clip();

                        ctx.drawimage(ava, 7, 8, 227, 225);
                              ctx.closepath();

                            
    welcomer.sendfile(canvas.tobuffer())
      
      
      
      })
      })
      
      }
      });




//mhstr end now this is end
client.login(process.env.bot_token);
