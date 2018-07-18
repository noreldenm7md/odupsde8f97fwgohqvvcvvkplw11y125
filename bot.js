const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "$";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
    	message.reply('pong');
  	}
});



const ms = require("ms");
var fs = require('fs');






///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////اذا جاك ايرور وقت تشغيل البوت وقالك الجيسون فيه غلط///////////////////////////
//////////////////////////////////////ولقيته فاضي////////////////////////////////////////////////////
///////////////////////////////////////حله بسيط//////////////////////////////////////////////////////
////////////////////////روح عند اي ملف جيسون موجوده و اضغط ctrl + z///////////////////////////////
////////////////////بتلقى الي كان مكتوب رجع خلاص سوي حفظ للملف ctrl + s///////////////////////////
//////////////////////غير كذا اي ايرور يصير للجيسون خليه لي انا بحله////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////iyvu

const developers = ["456641975932813345"]
const adminprefix = "!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});



client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "$";
    if(message.content.startsWith('$bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للإدارة**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية لاستعمال هاذا الأمر** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "S Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة شيئ لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من الإرسال؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
	      let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });





client.on("message",function(message) {
    if(message.content.startsWith(prefix + 'stats')) {
        var uptime = client.uptime;

    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var notCompleted = true;

    while (notCompleted) {

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

        if (uptime < 1000)  notCompleted = false;

    }

var v1 = new Discord.RichEmbed()
  v1.setTimestamp(new Date())
  v1.setColor("#6a109d")
  v1.setDescription('***__ انتظر .. جاري الحصول علي البيانات __***')
  v1.setFooter("# | S TeaM |")
var heroo = new Discord.RichEmbed()
.setColor('#6a109d')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setTitle('S Bot Info')
.setURL('https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288')
.setAuthor(client.user.username,client.user.avatarURL)
.addField("**البرفكس** :",`**[ ${prefix} ]**`,true)
.addField("**السيرفرات** :","**[ "+client.guilds.size+" ]**",true)
.addField("**القنوات** :","**[ "+client.channels.size+" ]**",true)
.addField("**المستخدمين** :","**[ "+client.users.size+" ]**",true)
.addField("**اسم البوت** : ","**[ "+client.user.username+" ]**",true)
.addField("**ايدي البوت **:","**[ "+client.user.id+" ]**",true)
.addField("**الحجم المستخدم** :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("**موعد الاقلاع** :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("S TeaM  |");
  message.channel.send({embed:v1}).then(m => {
      setTimeout(() => {
         m.edit({embed:heroo});
      },3000);
  });
}
});
//انقليزي حلو
client.on("message", message => {
var args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'args')) {
if(!args) return message.reply("please select a slice");
message.channel.send(`let args = message.content.split(" ").slice(${args}).join(" ")`);
}

    if(message.content.startsWith(prefix + "server")) {
    	var verificationLevels = ['1', '2', '3', '4', '5']
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Sorry, But you need `Manage Server` prermission for this");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("BLACK")
        .addField(":id: **Server ID**:", message.guild.id, true)

        .addField(":calendar: **Created On**", `${message.guild.createdAt.toLocaleString()} \n ${moment(message.guild.createdAt).fromNow()}`,true)

        .addField(":crown: **Owned by**:", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator} [${message.guild.owner.user.id}]`, true)

        .addField(`:speech_balloon: **Channels** [${message.guild.channels.size}]:`, ` Voice [${message.guild.channels.filter(m => m.type === 'voice').size}] | Text [${message.guild.channels.filter(m => m.type === 'text').size}] | Category [${message.guild.channels.filter(m => m.type == 'category').size}]`,true)

        .addField(`:busts_in_silhouette: **Members** [${message.guild.memberCount}]: `, `Online [${message.guild.members.filter(m => m.presence.status != 'offline').size}] | Offline [${message.guild.members.filter(m => m.presence.status === 'offline').size}]`, true)

        .addField(`:closed_lock_with_key: **Roles**: `, `[${message.guild.roles.size}]`, true)

        .addField(`:earth_africa: **Others:** `, `**Region:** ${message.guild.region} \n **Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`, true)

        message.channel.send({embed:embed})
    }
})





/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('guildCreate', guild => {
var message = "zg";
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('S Bot Link Click Here .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=465885551329804288&permissions=8&scope=bot')
  .setDescription(`**
  New Server Add S Bot ✅
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
client.channels.get("465340887279468564").sendEmbed(embed)
});

client.on('guildDelete', guild => {
var message = "zg";
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('S Bot Link Click Here .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=465885551329804288&permissions=8&scope=bot')
  .setDescription(`**
  Server Kicked S Bot :cry:
اسم السيرفر: ${guild.name}
صاحب السيرفر: ${guild.owner}**`);
client.channels.get("465340887279468564").sendEmbed(embed)
});








client.on('message', message => {
            if(!message.channel.guild) return;
var args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bcall')){
 if (message.author.id !== '456641975932813345') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '456641975932813345') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


	   client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
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
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n** ${moment(heg.createdTimestamp).fromNow()}` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });







client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
       var args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on('message',function(message) {
   if(message.content === prefix + "inv") {
       if(!message.channel.guild) return;
       var mmmmEmbed = new Discord.RichEmbed()
       .setAuthor(client.user.username)
       .setTitle(':eight_pointed_black_star: Click Here.')
       .setURL(`https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288`)
       .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL);
       message.channel.send(mmmmEmbed)
   }
});






























client.on("message", message => {
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
**
' S Bot Discord.
 بوت ديسكورت متكامل :soccer: :microphone: :earth_americas: 
يوجد داخل البوت خاصية منع التهكير مجانا وبسهوله تامة :scream: 
صيانة دورية :stopwatch: :wrench: 
 24 ساعة :point_up:
اضافات يومية :link: 
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
__General's Commands | الأوامر العامة :earth_americas:  __
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
❖ $server - لرؤية بعض المعلومات عن سيرفرك 
❖ $icon - لرؤية صوره سيرفرك
❖ $user - لرؤية بعض المعلومات عن حسابك 
❖ $avatar - لرؤية صورتك او صورة صديقك
❖ $ms7f - لفتح المصحف 
❖ $tr - للترجمة من اي لغة للغة
❖ $cal - لتشيل الألـة الحاسبة
❖ $system-sar7 - لمعرفة نظام امر صراحة
❖ $invites - لرؤية دعواتك 
❖ $tC - لعمل روم مؤقت 
❖ $skin - رؤية سكنك في لعبة ماين كرافت
❖ $roll - القرعة 
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
__Admin's Commands | أوامر الأدارة  :hammer_pick:   __
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
❖ $clear - لمسح الشات
❖ $role [mention] [rolename] - لاعطاء شخص رتبة
❖ $rerole [user] [rolename] - لازالة رتبة من شخص
❖ $move [user] - لنقل شخص من روم صوتي لرومك
❖ $move all - لنقل جميع المتواجدين بـ الرومات لرومك
❖ $mct - لقفل جميع الرومات الكتابية
❖ $umct - لفتح جميع الرومات الكتابية
❖ $mcv - لقفل جميع الرومات الصوتية
❖ $bc - لعمل رسالة جماعيةةّ
❖ $umcv - لفتح جميع الرومات الصوتية
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
للمزّيد تفضّل للّدعّم الفنيّ : https://discord.gg/5ur5Gym
لأضافّةّ البّوت : https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ **
`)


message.author.sendEmbed(embed)

}
}); 



//اشتغل 

client.on("message", message => {
 if (message.content === "$help") {
   message.channel.send('**لقدّ تمّ ارسالّ الرسالةّ بالخاصّ** :ok_hand: ')
 }
});
client.on('message',   eyad =>{
    
    var  args = eyad.content.split(" ").slice(2).join(" ")
    var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
    var  mas = eyad.author
                              if(eyad.content.startsWith(prefix + 'sar7')) {
                              if(eyad.channel.type === "dm"){
if(!args) return  eyad.channel.send("`حط بعد الايدي الرساله وانا برسلها :)`");
if(!men) return  eyad.channel.send("`حط ايدي الشخص \n او يقد يكون الشخص ليس موجود في سرفرات مشتركه بيني وبينة`");
                      var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
     var eyadandr3d = new Discord.RichEmbed()
     .setAuthor(eyad.author.username , eyad.author.avatarURL)
     .setThumbnail(men.avatarURL)
     .setDescription(`هل انت موافق لارسال الرساله \n موافق = ✅ \nرفض = ❌ \n**محتوي الرسالة : ${args}**`)
     .setTimestamp() 
     .setFooter('لديك 60 ثانية للاختيار')
     eyad.channel.send(eyadandr3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{            
    var kk = (reaction, user) => reaction.emoji.name === '✅' && user.id === eyad.author.id;    
    var nn = (reaction, user) => reaction.emoji.name === '❌' && user.id === eyad.author.id;
    var kkk = message.createReactionCollector(kk, { time: 60000 });
    var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
          const embed = new Discord.RichEmbed()
               .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
               .setColor("RANDOM")
               .addField('**●[اهلا بك]** ', `<@${men.id}>` , true)
               .addField('**●[لقد تمت مصارحتك]**' ,       ` __${args}__ ` , true)
               .addField('**●[تاريخ المصارحة]**' , Day + "-" + Month + "-" + Year , true)
          client.users.get(men.id).sendEmbed(embed)
          eyad.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`)
message.delete()
          eyad.delete();
})
nnn.on("collect", r => {
message.delete()
eyad.reply("`تم الغاء الصراحة`")
eyad.delete();
})
})
}) 
})
}
}
});


// شف دسكورد
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  var command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
   var textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحه```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server ! ✈ **  `)

}
});


//روحو سطر 26 الحييين


client.on('message', message => {
    if (message.content === "$mct") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
           }).then(() => {
               message.channel.send("تم قفل الرومات الكتابية :white_check_mark: ")
               });
             }
if (message.content === "$umct") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
           }).then(() => {
               message.channel.send("تم فتح الرومات الكتابية :white_check_mark:")
           });
             }



});

client.on("message", message => {
    if(message.content.startsWith('$system-man3')) {
      message.channel.send(`**الخطوات المطلوبة لتشغيل مانع التهكير\n1- رفع رتبه البوت تحت رتبة صاحب السيرفر مباشرا : http://prntscr.com/k5afdc \n2-اعطاء البوت صلاحية ADMINISTRATOR : http://prntscr.com/k5afpd \n وهكذا تم تفعيل مانع التهكير بنجاح وبلا اي مشاكل اذا واجهت اي مشكله توجه لسيرفر الدعم** :white_check_mark: `)
    }
  });
  
client.on('message', message => {
    if (message.content === "$mcv") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         CONNECT: false
           }).then(() => {
               message.channel.send("تم تقفيل الرومات الصوتية :white_check_mark: ")
           });
             }
if (message.content === "$umcv") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
          CONNECT: true
           }).then(() => {
               message.channel.send("تم فتح الرومات الصوتية :white_check_mark:")
           });
             }



});






 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith(prefix + "avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on("message", message => {
if (message.content === "$system-sar7") {
message.channel.send(`**الامر :  $sar7\n خاصيه صارح\nالطريقه كـ التالي :\nتروح البوت خاص : http://prntscr.com/k4kpsb \n مثال : بصارح نفسي للتجربة : http://prntscr.com/k4kq59 \n وتضغط صح 
بيصير كذا :http://prntscr.com/k4kqna \n وبس كذا اشتغل الامر ميه ميه :thumbsup: ** `)
} 
});

var roles = {}; 



 
client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if( msg.toLowerCase().startsWith( prefix + 'rerole ;' ) ){
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' ليس لديك صلاحيات');
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});
        client.on('message', async message => {
			if(message.content.includes('discord.gg')){ 
			    if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
	 message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})
	client.on('message', message => {
	if(message.content.startsWith(prefix + 'move all')) {
	 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
	   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
	if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
	 var author = message.member.voiceChannelID;
	 var m = message.guild.members.filter(m=>m.voiceChannel)
	 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
	 m.setVoiceChannel(author)
	 })
	 message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


	 }
	   });



    client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
        if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("⚠️|`انت لا تمتلك الخاصيه المطلوبة`");  
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``للأستخدام اكتب  : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`لا تستطيع سحب `"+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }
}
});



client.login(process.env.BOT_TOKEN);

    
