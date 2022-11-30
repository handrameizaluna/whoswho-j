exports.serverErr = `serv lgi error`
exports.limitLu = (m) =>{
	return`sisa limit km : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`list ${a} dngn key ${b} dh ada di db`
	}
exports.delstik = (a, b) =>{
	return`list ${a} dengan key ${b} tdk ada di database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`📛 nm: ${username} (@${m.sender.split`@`[0]})${about ? '\n💌 Bio: ' + about : ''}
👨‍❤️‍👨 Status: ${pasangan ? `berpacaran @${pasangan.split`@`[0]}` : '-' }
#️⃣ Nomor: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Link: https://wa.me/${m.sender.split`@`[0]}
🤷‍♂️ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
🎚️ Level: ${level}
🎢 Role: ${role}
📊 Limit: ${limit}
®️ Registered: ${registered ? '✅ (' + tanggal(regTime) + ')' : '❌'}
⛽ Premium: ${premium ? `✅\n⏰ Expired Premium : msToDate(premiumDate - now)` : '❌'}
🛄 Last claim: ${lastclaim > 0 ? + tanggal(lastclaim) : '-'}`
	}

//
exports.needReg = (a, b, c) =>{
	return`🇲🇨 dftr dlu

gini : #daftar nama|umur|gender|hobi
cnth : #daftar ${a}|18|cowo|Game

🇺🇲 Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`limit km hri ini dh abis️\n\nsilahkan beli limit dngn cara ketik ${prefix}buy atau ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`nmr seri (sn) nya slh`
	}
exports.NoseriOk = () =>{
	return`brhsil btl dftr`
	}
exports.ExReg = (c) =>{
	return`pke tanda "|" for pmbatas

gini : #daftar nama|umur|gender|hobi

cnth : #daftar ${a}|18|cowo|Game



use the "|" sign as a barrier


Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`km dh terdftr`
	}
exports.UmurReg = () =>{
	return`umur hrs angka`
	}
exports.NamaReg = () =>{
	return`kepanjangan, pke nm awalan aja`
	}
exports.HobiReg = () =>{
	return`stu hobu aja jan bnyk²`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *brhasil verivikasi* 」
│\`\`\`verifikasi brhasil dngn\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`pada : ${b}\`\`\`
│\`\`\`nama : ${c}\`\`\`
│\`\`\`umur : ${d}\`\`\`
│\`\`\`gender : ${e}\`\`\`
│\`\`\`nomor : @${f}\`\`\`
│\`\`\`untuk menggunakan bot silahkan \`\`\`
│\`\`\`kirim perintah ${g}menu\`\`\`
│\`\`\`atau ${h}allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`pilih slh stu ( cewe / cowo)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`umur sgitu hrusnya mati`
	}
exports.firstChat = (a, b, c) =>{
	return`slmt ${a} ${b} , , aku ${c} aku bot whatsapp. smoga gada yg perlu aku bntu`
	}
exports.StartAbsen = () =>{
	return`mulai absn`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`brhsil nmbahin ${q} ke db ${a}\n\ncek dengan cara ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`durasi ${a} dtk, yaitu durasi maksimal ${b} yg bs bot smpen ke db`
	}
exports.Addvn = () =>{
	return`bntr, otw coba up media ini ke db`
	}
	
exports.ListStik = (a) =>{
	return`_untk mengambil ${a} silahkan kirim pesan sesuai dengan list ${a} yg ada di atas_`
	}
exports.noAbsen = () =>{
return `gda ada absn berlangsung di gc ini`
}
exports.StartAbsen = () =>{
	return`mulai absn`
	}
exports.DahAbsen = () =>{
	return`km dh absn`
	}
exports.DelAbsen = () =>{
	return`brhsil hps absen di gc ini`
	}
exports.adaAbsen = () =>{
	return`msi ada sesi absn di gc ini`
	}
exports.SAbsen = () =>{
	return`absn dimulai`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`reply stiker!!\nExample : ${prefix + command} menu\n\n\n*Note : tdk dapat disertai prefix!!*`
	}
exports.CmdApa = () =>{
	return`untuk cmd?`
	}
exports.UCmd = () =>{
	return`km gpunya izin buat ngubah perintah stiker ini`
	}
exports.HashCmd = () =>{
	return`gada hash`
	}
exports.DelCmd = () =>{
	return`sticker cmd telah di hapus`
	}
exports.LockCmd = () =>{
	return`reply pesan`
	}
exports.NoCmd = () =>{
	return`hash tdk ditmukan di db`
	}
exports.ReplyMsg = () =>{
	return`reply msg yg mau disv di db`
	}
exports.NoMsg = (prefix, command) =>{
	return`cnth : ${prefix + command} nm file`
	}
exports.AdMsg = (text) => {
    return `'${text}' dh trdftr di list pesan`
}
exports.DoneMsg = (prefix, text) => {
    return `brhsil nmbhin pesan di list pesan sebagai '${text}'
    
akses dengan ${prefix}getmsg ${text}
lihat list pesan dngn ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `example : ${prefix + command} file name\n\nliat list msg dngn ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' g trdftr di list msg`
}
exports.DelMsg = (text) => {
    return `brhasil hps '${text}' dri list pesan`
}

exports.OnBef = () => {
    return `dh aktif sblmny`
}
exports.OffYaBef = () => {
    return `dh nonaktif sblmny`
}
exports.OkOn = (command) => {
    return `${command} brhsil aktif`
}
exports.OffBef = (command) => {
    return `${command} brhasil nonaktif`
}
exports.OkMute = () => {
    return `bot dh di mute di gc Ini`
}
exports.OkUnMute = () => {
    return `bot brhsil di unmute`
}
exports.OkUnBanC = () => {
    return `bot brhsil di unban chat`
}
exports.NoMute = () => {
    return `bot blm di ban dlm gc ini`
}

exports.NoMsgBot = () => {
    return `psn itu g dikirim oleh bot!`
}
exports.ToimgErr = () => {
    return `blm support s gif`
}
exports.NoToImg = (prefix, command) => {
    return `reply sticker dngn caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `brhsil gnti ke public mode`
}
exports.BotSelf = () => {
    return `sukses gnti ke self mode\n\nuntuk mengubah ke mode public silahkan gunakan nomor bot`
}
exports.NoToStik = (prefix, command) => {
    return `kirim/reply gambar/video dengan caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}
exports.NoPpBot = (prefix, command) => {
    return `kirim/reply image dengan caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `kirim/reply video/audio yang ingin dijadikan audio dengan caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `kirim/reply video/audio yang ingin dijadikan mp3 dengan caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `reply video/audio yang ingin dijadikan vn dengan caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `pesan yang anda reply tdk mengandung reply`
}
exports.SetGcName = (prefix, command) => {
    return `kirim perintah ${prefix + command} *teks*`
}
exports.SetPpGc = (prefix, command) => {
    return `kirim/reply image dengan caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `masukkan link group!`
}
exports.MauKick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}
exports.MauAdd = () => {
    return `Kirim nomer/tag/reply target yang ingin di add !`
}
exports.NakPm= () => {
    return `Kirim nomer/tag/reply target yang ingin di promote !`
}
exports.NakDm = () => {
    return `Kirim nomer/tag/reply target yang ingin di demote !`
}
exports.Family = () => {
    return `Masih Ada Sesi Yang Belum Diselesaikan!`
}
exports.NoWm = (prefix, command) => {
    return `Kirim perintah ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Berhasil Diubah Menjadi\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*\n\ncnth : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks 1|teks 2*\n\ncnth : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `cnth: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Heroes Yg km Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `cnth: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*Style Yg km Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `cnth: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*Color Yg km Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `cnth: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `cnth: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `cnth: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `cnth: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} Yg km Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style) => {
    return `cnth penggunaan : \n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `cnth : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`cnth penggunaan : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Jawaban Salah`
}

exports.JwbTrue = (tebak) => {
return`🎮 ${tebak} 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`
}
exports.TbGam = () => {
    return `Tebak Gambar`
}
exports.TbKa = () => {
    return `Tebak Kata`
}
exports.TbBe = () => {
    return `Tebak Bendera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Susun Kata`
}
exports.TbAt = () => {
    return `Tebak Kalimat`
}
exports.TbSi = () => {
    return `Tebak Siapa`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Tebak Kabupaten`
}
exports.TbKi = () => {
    return `Tebak Kimia`
}
exports.TbLi = () => {
    return `Tebak Lirik`
}
exports.TbKan = () => {
    return `Tebak Tebakan`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Jawablah Pertanyaan Berikut :*\n${soal}\n\nTerdapat *${jawaban}* Jawaban ${find(v => v.includes(' ')) ? '(Beberapa Jawaban Terdapat Spasi)' : ''}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Telah Afk Dengan Alasan ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time) => {
    return `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${desk}\nWaktu : ${time}`
}
exports.TbGambar_ = (jawaban) => {
    return `Waktu Habis\nJawaban:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Waktu Habis\nJawaban:  ${jawaban}}\nDeskripsi : ${desk}`
}
exports.TbKata = (soal, time) => {
    return `Silahkan Jawab Pertanyaan Berikut\n\n${soal}\nWaktu : ${time}`
}
exports.TbBendera = (time) => {
    return `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : ${time}`
}
exports.TbKabupaten = (time) => {
    return `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : ${time}`
}
exports.TbKimia = (soal, time) => {
    return `Apa Arti Dari Simbol : *${soal}*?\nWaktu : ${time}`
}
exports.TbLirik = (soal, time) => {
    return `Ini Adalah Lirik Dari Lagu? : *${soal}*?\nWaktu : ${time}`
}
exports.TbSusun = (soal, tipe, time) => {
    return `*Jawablah Pertanyaan Berikut :*\nSoal : ${soal}\nTipe : ${tipe}\nWaktu : ${time}`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\ncnth penggunaan: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*Berapa hasil dari: ${soal}*?\n\nWaktu: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Kirim/Reply Foto/Sticker Dengan Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Masukkan username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply stiker gif dengan caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Kirim/Reply Media Dengan Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Mengirim Broadcast Ke ${anu} ${chat}\nWaktu Selesai ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker dengan caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Kirim/reply ${video} dengan caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `cnth :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	• cnth : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	• cnth : ${prefix + command} id halo
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key tdk boleh sama dengan fitur / command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key|response*\n\n_cnth_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List respon dengan key : *${arg}* sudah ada di group ini.`
}
exports.AddlistDone = (arg) => {
    return `Sukses set list message dengan key : *${arg}*\n\nNote : Tunggu beberapa menit jika list tdk berubah`
}
exports.Dellist = () => {
    return `Belum ada list message di database`
}
exports.Dellist_  = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key*\n\n_cnth_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List respon dengan key *${key}* tdk ada di database!`
}
exports.DellistDone = (key) => {
    return `Sukses delete list message dengan key *${key}*`
}
exports.ListUp = (key) => {
    return `Maaf, untuk key *${key}* belum terdaftar di group ini`
}
exports.UpList = (key) => {
    return `Sukses update list message dengan key : *${key}*\n\nNote : Tunggu beberapa menit jika list tdk berubah`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hai ${pushname} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}start untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
}
exports.Anon = () => {
    return `Cari Teman Chat`
}
exports.StopAnon = () => {
    return `km Sedang tdk Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner `
}
exports.AnonNew = () => {
    return `Cari Teman Baru`
}
exports.AnonDahStop = () => {
    return `✅ Berhasil memberhentikan chat`
}
exports.StopAnonByFren = () => {
    return `⚠️ Sesi chat ini telah diberhentikan oleh teman chat km`
}
exports.AnonOn = () => {
    return `⚠️ km masih dalam sesi chat dengan partner!`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = () => {
    return `🔎 Mohon tunggu sedang mencari teman chat`
}
exports.NoAnon = () => {
    return `⚠️ km belum pernah memulai chat!`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `cnth penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `⚠️ Mohon maaf nomor km telah di banned oleh owner\n\nOwner 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} dengan caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Semua fitur bot_`
}
exports.InfoMenu = () => {
    return `\n_Mencari informasi terkini melalui bot_`
}
exports.KhususOwn = () => {
    return `\n_Fitur khusus owner bot_`
}
exports.DataBor = () => {
    return `\n_Menyimpan sesuatu di database bot_`
}
exports.MenuGc = () => {
    return `\n_Menampilkan fitur khusus group_`
}
exports.MenuAni = () => {
    return `\n_Mencari random gambar anime_`
}
exports.TagMem = () => {
    return `\n_Menandai member group_`
}
exports.StalkOrk = () => {
    return `\n_Kepoin sosmed orang_`
}
exports.Hoja = () => {
    return `\n_Mencari sesuatu yang gk penting_`
}
exports.CovertWi = () => {
    return `\n_Mengkorversi sesuatu dengan bot_`
}
exports.AnuFoto = () => {
    return `\n_Mengubah gambar jadi lebih menarik_`
}
exports.HajuStik = () => {
    return `\n_Membuat stiker yang unik_`
}
exports.EloDown= () => {
    return `\n_Menampilkan fitur download_`
}
exports.StikerWibu = () => {
    return `\n_Random stiker anime_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_Untuk membuat logo menggunakan bot_`
}
exports.oterMenu = () => {
    return `\n_Menu lainnya_`
}
exports.GameBot = () => {
    return `\n_Fitur untuk bermain dengan bot_`
}
exports.RandRik = () => {
    return `\n_Random video tiktok_`
}
exports.RandCew = () => {
    return `\n_Random gambar cewe cantik_`
}
exports.RamalOi = () => {
    return `\n_Ramalan masa kini_`
}
exports.TeleStik= () => {
    return `\n_Random stiker dari telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Membuat logo keren dengan bot_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Membuat logo menarik_`
}
exports.TobatBro = () => {
    return `\n_Fitur islami_`
}
exports.MauJualan = () => {
    return `\n_Fitur untuk berjualan_`
}
exports.Maustorage = () => {
    return `\n_Fitur untuk menyimpan stiker, audio, foto dan video_`
}
exports.MauChanger = () => {
    return `\n_Fitur untuk mengubah suara audio / vn_`
}
exports.GadaChat = () => {
    return `\n_Fitur untuk melakukan chat random_`
}
exports.SumberBot = () => {
    return `\n_Sumber script bot ini_`
}
exports.Tqnya = () => {
    return `\n_Siapa aja yang berkontribusi di dalam bot ini_`
}
exports.SetAh = () => {
    return `Mau set menu ya ?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Terdeteksi*\n\nkm akan dikeluarkan dari group ${gc}`
    }
    exports.GjdKick = () => {
    return `Sepertinya km mengirimkan link group ini, km tdk akan di keluarkan`
    }
/////////

/////////
exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Mohon tunggu sebentar`
}
exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin km download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tdk terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tdk valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `user bkn seorang admin! ❎`
}

exports.adminAlready = () => {
    return `tdk dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `size file kegedaan!`
}

exports.notNum = (q) => {
    return `"${q}", bkn angka`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*slmt ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu Bot :*

「 Bot Info 」 
𐁘 .owner
𐁘 .rules
𐁘 .sc
𐁘 .ping
𐁘 .runtime
𐁘 .botstatus
𐁘 .donate


「 Owner 」 
𐁘 .setmenu [query]
𐁘 .setwm packname|author
𐁘 .broadcast [text]
𐁘 .bc [text]
𐁘 .bcgc 
𐁘 .bcimage
𐁘 .bcaudio
𐁘 .bcstiker
𐁘 .bcvn
𐁘 .bcvideo
𐁘 .banuser
𐁘 .unban
𐁘 .banned
𐁘 .listbanned
𐁘 .block
𐁘 .ublock
𐁘 .listblock
𐁘 .addpremium
𐁘 .delpremium
𐁘 .listpremium
𐁘 .nsfw [on/off]
𐁘 .mute [on/off]
𐁘 .autoblok212 [on/off]
𐁘 .banchat
𐁘 .unbanchat
𐁘 .autorespond [on/off]
𐁘 .antiviewonce [on/off]
𐁘 .autobio [on/off]
𐁘 .join [link]
𐁘 .self
𐁘 .public [only bot]
𐁘 .del [reply pesan bot]
𐁘 .pppanjang
𐁘 .setpppanjang
𐁘 .setppbot [reply image]

「 Anonymous 」
𐁘 .menfess
𐁘 .anonymous 
𐁘 .start
𐁘 .skip [daerah]
𐁘 .stop [surah|ayat]


「 Database 」 
𐁘 .setcmd [reply stiker]
𐁘 .delcmd [reply stiker]
𐁘 .listcmd
𐁘 .absen
𐁘 .cekabsen
𐁘 .deleteabsen
𐁘 .absenstart
𐁘 .addmsg [nama file]
𐁘 .getmsg [nama file]
𐁘 .listmsg
𐁘 .delmsg [nama file]

「 Rpg Games 」
𐁘 .adventure
𐁘 .weekly
𐁘 .use
𐁘 .transfer
𐁘 .slot
𐁘 .shop
𐁘 .pasar
𐁘 .profile
𐁘 .ojek
𐁘 .open
𐁘 .nguli
𐁘 .narik
𐁘 .nabung
𐁘 .monthly
𐁘 .mining
𐁘 .merampok
𐁘 .mancing
𐁘 .kolam
𐁘 .koboy
𐁘 .kerja
𐁘 .kandang
𐁘 .judi
𐁘 .inventory
𐁘 .hourly
𐁘 .fishop
𐁘 .feed
𐁘 .duel
𐁘 .daily
𐁘 .craft
𐁘 .cooldown
𐁘 .cook
𐁘 .collect
𐁘 .chop
𐁘 .casino
𐁘 .buy
𐁘 .bank 
𐁘 .bansos
𐁘 .berdagang
𐁘 .berkebon
𐁘 .build

「 Group 」 
𐁘 .register
𐁘 .unregister
𐁘 .ceksn
𐁘 .listonline
𐁘 .sider
𐁘 .wm packname|author
𐁘 .infochat
𐁘 .setdesk [text]
𐁘 .setppgrup [reply image]
𐁘 .pppanjanggc
𐁘 .setpppanjanggc
𐁘 .revoke
𐁘 .leave
𐁘 .add [62***]
𐁘 .kick @tag
𐁘 .leave
𐁘 .linkgc
𐁘 .welcome [on/off]
𐁘 .goodbye [on/off]
𐁘 .demotedetect [on/off]
𐁘 .promotedetect  [on/off]
𐁘 .setwelcome
𐁘 .updatewelcome
𐁘 .delwelcome
𐁘 .cekwelcome
𐁘 .setgoodbye
𐁘 .updategoodbye
𐁘 .delgoodbye
𐁘 .cekgoodbye
𐁘 .setpromote
𐁘 .updatepromote
𐁘 .setdemote
𐁘 .updatedemote
𐁘 .cekpromote
𐁘 .cekdemote
𐁘 .delpromote
𐁘 .deldemote
𐁘 .nsfw [on/off]
𐁘 .antilink [on/off]
𐁘 .take packname|author
𐁘 .group [open/close]
𐁘 .tagall [text]
𐁘 .hidetag [text]

「 Anime 」 
𐁘 .quotesanime
𐁘 .anime [query]
𐁘 .animeinfo
𐁘 .manga [query]
𐁘 .character [query]

「 Tag 」 
𐁘 .stickertag
𐁘 .videotag [query]
𐁘 .vntag [query]
𐁘 .imagetag [query]

「 Stalking 」 
𐁘 .igstalk [username]
𐁘 .ghstalk [username]
𐁘 .ytstalk [channel]

「 Search 」 
𐁘 .ytsearch [query]
𐁘 .wallpaper [query]
𐁘 .google [query]
𐁘 .wikimedia [query]
𐁘 .apksearch
𐁘 .findapk
𐁘 .hentai
𐁘 .wattpad [query]
𐁘 .webtoons [query]
𐁘 .drakor [query]
𐁘 .brainly [query]
𐁘 .pinterest [query]

「 Converter 」
𐁘 .emoji [😭]
𐁘 .emojimix [😭+💩]
𐁘 .toaudio [video]
𐁘 .tomp3 [video]
𐁘 .tovn [video]
𐁘 .stiker [reply image]
𐁘 .tourl [image/video/stiker]
𐁘 .togif [sticker]
𐁘 .tomp4 [sticker]
𐁘 .${prefix}toimg [reply sticker]

「 Download 」 
𐁘 .tiktok [link]
𐁘 .tiktokaudio [link]
𐁘 .ytdl [link]
𐁘 .play [query]
𐁘 .ytmp3 [link]
𐁘 .ytshortmp3 [link]
𐁘 .ytmp4 [link]
𐁘 .ytshorts [link]
𐁘 .igstory [username]
𐁘 .igdl [link]
𐁘 .igphoto [link]
𐁘 .igvideo [link]
𐁘 .igreels [link]
𐁘 .igtv [link]
𐁘 .soundcloud [link]
𐁘 .gitclone [link repo]
𐁘 .gitrepo [username repo branch]
𐁘 .mediafire [link]
𐁘 .twitter [link]

「 Primbon 」
𐁘 .nomorhoki 887435047326
𐁘 .artimimpi [query]
𐁘 .artinama [query]
𐁘 .ramaljodoh
𐁘 .ramaljodohbali
𐁘 .suamiistri
𐁘 .ramalcinta
𐁘 .cocoknama
𐁘 .pasangan
𐁘 .jadiannikah
𐁘 .rezeki
𐁘 .pekerjaan
𐁘 .nasib
𐁘 .penyakit
𐁘 .tarot
𐁘 .karakter
𐁘 .keberuntungan
𐁘 .zodiak 
𐁘 .shio [query]

「 Random Anime 」
𐁘 .loli
𐁘 .neko
𐁘 .waifu
𐁘 .shinobu
𐁘 .megumin
𐁘 .bully
𐁘 .cuddle
𐁘 .cry
𐁘 .hug
𐁘 .awoo
𐁘 .kiss
𐁘 .lick
𐁘 .pat
𐁘 .smug
𐁘 .bonk
𐁘 .yeet
𐁘 .blush
𐁘 .smile
𐁘 .wave
𐁘 .highfive
𐁘 .handhold
𐁘 .nom
𐁘 .bite
𐁘 .glomp
𐁘 .slap
𐁘 .kill
𐁘 .happy
𐁘 .wink
𐁘 .poke
𐁘 .dance
𐁘 .cringe

「 Voice Change Menu 」
𐁘 .bass
𐁘 .blown
𐁘 .deep
𐁘 .earrape
𐁘 .fast
𐁘 .fat
𐁘 .nightcore
𐁘 .reverse
𐁘 .robot
𐁘 .slow
𐁘 .smooth
𐁘 .tupai

「 Storage Menu 」
𐁘 .addvn
𐁘 .listvn
𐁘 .delvn
𐁘 .addimage
𐁘 .listimage
𐁘 .delimage
𐁘 .addvideo
𐁘 .listvideo
𐁘 .delvideo
𐁘 .addstik
𐁘 .delstik
𐁘 .liststik

「 Others 」
𐁘 .afk [reason]
𐁘 .translate kode_bahasa text
𐁘 .kalkulator [query]
𐁘 .smeme [text]
𐁘 .smeme2 [text|text]
𐁘 .memegen [text|text]
╰❒

「 Game Menu 」
𐁘 .kuismath
𐁘 .tebakgambar
𐁘 .tebakkata
𐁘 .tebakbendera
𐁘 .tebakkalimat
𐁘 .tebaksiapa
𐁘 .tebakkabupaten
𐁘 .tebakkimia
𐁘 .tebaklirik
𐁘 .tebaktebakan
𐁘 .tekateki
𐁘 .susunkata
𐁘 .caklontong

「 Telegram Sticker 」
𐁘 .awoawo
𐁘 .benedict
𐁘 .chat
𐁘 .dbfly
𐁘 .dino_kuning
𐁘 .doge
𐁘 .gojosatoru
𐁘 .hope_boy
𐁘 .jisoo
𐁘 .kr_robot
𐁘 .kucing
𐁘 .lonte
𐁘 .manusia_lidi
𐁘 .menjamet
𐁘 .meow
𐁘 .nicholas
𐁘 .patrick
𐁘 .popoci
𐁘 .sponsbob
𐁘 .kawan_sponsbob
𐁘 .tyni

「 Islamic Menu 」
𐁘 .asmaulhusna
𐁘 .kisahnabi [nabi]
𐁘 .jadwalshalat [daerah]
𐁘 .randomquran
𐁘 .randomquran2
𐁘 .listsurah
𐁘 .tafsirsurah [surah]
𐁘 .alquranaudio [surah|ayat]

「 Sound Menu 」
𐁘 .sound1
𐁘 .sound2
𐁘 .sound3
𐁘 .sound4
𐁘 .sound5
𐁘 .sound6
𐁘 .sound7
𐁘 .sound8
𐁘 .sound9
𐁘 .sound10
𐁘 .sound11
𐁘 .sound12
𐁘 .sound13
𐁘 .sound14
𐁘 .sound15
𐁘 .sound16
𐁘 .sound17
𐁘 .sound18 
𐁘 .sound19
𐁘 .sound20
𐁘 .sound21
𐁘 .sound22
𐁘 .sound23
𐁘 .sound24
𐁘 .sound25
𐁘 .sound26
𐁘 .sound27
𐁘 .sound28
𐁘 .sound29
𐁘 .sound30
𐁘 .sound31
𐁘 .sound32
𐁘 .sound33
𐁘 .sound34
𐁘 .sound35
𐁘 .sound36
𐁘 .sound37
𐁘 .sound38
𐁘 .sound39
𐁘 .sound40
𐁘 .sound41
𐁘 .sound42
𐁘 .sound43
𐁘 .sound44
𐁘 .sound45
𐁘 .sound46
𐁘 .sound47
𐁘 .sound48
𐁘 .sound49
𐁘 .sound50
𐁘 .sound51
𐁘 .sound52
𐁘 .sound53
𐁘 .sound54
𐁘 .sound55
𐁘 .sound56
𐁘 .sound57
𐁘 .sound58
𐁘 .sound59
𐁘 .sound60
𐁘 .sound61
𐁘 .sound62
𐁘 .sound63
𐁘 .sound64
𐁘 .sound65
𐁘 .sound66
𐁘 .sound67
𐁘 .sound68
𐁘 .sound69
𐁘 .sound70

「 TqTo 」 
𐁘 .my god
𐁘 .my parents
𐁘 .my self
    `
}

exports.rules = () => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. jangan spam bot.
2. jangan telepon bot
3. jangan membandingkan bot

🗯️ bot tidak atau lambat merespon ?
➡️ sbr aja

🗯️ who joestar ?
➡️ mwheheh

🗯️ boleh saya menambah ke grup?
➡️ terserah

🗯️ prefixnya apa ya?
➡️ terserah

handra ganteng. 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`g perlu intro lu gpnting
`
}
exports.leave = () =>{
	return`smoga ga balik lgi
`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

base : https://whojoestar.github.io/
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 SOSIAL MEDIA 」 -------*

hi! 

https://instagram.com/11.meejoestar/
https://twitter.com/jstrmzz/
https://whojoestar.github.io/

thanks!
    `
}

exports.info = (prefix) =>{
	return`「 Bot Info 」 
𐁘 .owner
𐁘 .rules
𐁘 .sc
𐁘 .ping
𐁘 .runtime
𐁘 .botstatus
`}

exports.ownermenu = (prefix) =>{
return`「 Owner 」 
𐁘 .setmenu [query]
𐁘 .setmenu templateLocation
𐁘 .setmenu templateTenor
𐁘 .setmenu katalog
𐁘 .setmenu katalog2
𐁘 .setmenu list
𐁘 .setwm packname|author
𐁘 .sendsesi
𐁘 .listpc
𐁘 .listgc
𐁘 .broadcast [text]
𐁘 .bc [text]
𐁘 .bcgc 
𐁘 .bcimage
𐁘 .bcaudio
𐁘 .bcstiker
𐁘 .bcvn
𐁘 .bcvideo
𐁘 .banuser
𐁘 .unban
𐁘 .banned
𐁘 .listbanned
𐁘 .block
𐁘 .ublock
𐁘 .listblock
𐁘 .addpremium
𐁘 .delpremium
𐁘 .listpremium
𐁘 .nsfw [on/off]
𐁘 .mute [on/off]
𐁘 .autoblok212 [on/off]
𐁘 .banchat
𐁘 .unbanchat
𐁘 .autorespond [on/off]
𐁘 .antiviewonce [on/off]
𐁘 .autobio [on/off]
𐁘 .join [link]
𐁘 .self
𐁘 .public [only bot]
𐁘 .del [reply pesan bot]
𐁘 .pppanjang
𐁘 .setpppanjang
𐁘 .setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`「 Database 」 
𐁘 .setcmd [reply stiker]
𐁘 .delcmd [reply stiker]
𐁘 .listcmd
𐁘 .absen
𐁘 .cekabsen
𐁘 .deleteabsen
𐁘 .absenstart
𐁘 .addmsg [nama file]
𐁘 .getmsg [nama file]
𐁘 .listmsg
𐁘 .delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`「 Group 」 
𐁘 .addsewa
𐁘 .delsewa
𐁘 .listsewa
𐁘 .ceksewa
𐁘 .delsewa
𐁘 .register
𐁘 .unregister
𐁘 .ceksn
𐁘 .listonline
𐁘 .sider
𐁘 .wm packname|author
𐁘 .infochat
𐁘 .setdesk [text]
𐁘 .setppgrup [reply image]
𐁘 .pppanjanggc
𐁘 .setpppanjanggc
𐁘 .revoke
𐁘 .leave
𐁘 .add [62***]
𐁘 .kick @tag
𐁘 .leave
𐁘 .linkgc
𐁘 .welcome [on/off]
𐁘 .goodbye [on/off]
𐁘 .demotedetect [on/off]
𐁘 .promotedetect  [on/off]
𐁘 .setwelcome
𐁘 .updatewelcome
𐁘 .delwelcome
𐁘 .cekwelcome
𐁘 .setgoodbye
𐁘 .updategoodbye
𐁘 .delgoodbye
𐁘 .cekgoodbye
𐁘 .setpromote
𐁘 .updatepromote
𐁘 .setdemote
𐁘 .updatedemote
𐁘 .cekpromote
𐁘 .cekdemote
𐁘 .delpromote
𐁘 .deldemote
𐁘 .nsfw [on/off]
𐁘 .antilink [on/off]
𐁘 .take packname|author
𐁘 .group [open/close]
𐁘 .tagall [text]
𐁘 .hidetag [text]
`}

exports.anime = (prefix) =>{
	return`「 Anime 」 
𐁘 .quotesanime
𐁘 .anime [query]
𐁘 .animeinfo
𐁘 .manga [query]
𐁘 .character [query]
`}

exports.tag = (prefix) =>{
	return`「 Tag 」 
𐁘 .stickertag
𐁘 .videotag [query]
𐁘 .vntag [query]
𐁘 .imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`「 Stalking 」 
𐁘 .igstalk [username]
𐁘 .ghstalk [username]
𐁘 .ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`「 Search 」 
𐁘 .ytsearch [query]
𐁘 .wallpaper [query]
𐁘 .google [query]
𐁘 .wikimedia [query]
𐁘 .apksearch
𐁘 .findapk
𐁘 .hentai
𐁘 .wattpad [query]
𐁘 .webtoons [query]
𐁘 .drakor [query]
𐁘 .brainly [query]
𐁘 .pinterest [query]
`}

exports.converter = (prefix) =>{
	return`「 Converter 」 
𐁘 .emoji [😭]
𐁘 .emojimix [😭+💩]
𐁘 .toaudio [video]
𐁘 .tomp3 [video]
𐁘 .tovn [video]
𐁘 .stiker [reply image]
𐁘 .tourl [image/video]
𐁘 .togif [sticker]
𐁘 .tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`「 Image Effect 」 
𐁘 .wanted [reply image/stiker]
𐁘 .utatoo [reply image/stiker]
𐁘 .unsharpen [reply image/stiker]
𐁘 .thanos [reply image/stiker]
𐁘 .sniper [reply image/stiker]
𐁘 .sharpen [reply image/stiker]
𐁘 .sepia [reply image/stiker]
𐁘 .scary [reply image/stiker]
𐁘 .rip [reply image/stiker]
𐁘 .redple [reply image/stiker]
𐁘 .rejected [reply image/stiker]
𐁘 .posterize [reply image/stiker]
𐁘 .ps4 [reply image/stiker]
𐁘 .pixelize [reply image/stiker]
𐁘 .missionpassed [reply image/stiker]
𐁘 .moustache [reply image/stiker]
𐁘 .lookwhatkarenhave [reply image/stiker]
𐁘 .jail [reply image/stiker]
𐁘 .invert [reply image/stiker]
𐁘 .instagram [reply image/stiker]
𐁘 .greyscale [reply image/stiker]
𐁘 .glitch [reply image/stiker]
𐁘 .gay [reply image/stiker]
𐁘 .frame [reply image/stiker]
𐁘 .fire [reply image/stiker]
𐁘 .distort [reply image/stiker]
𐁘 .dictator [reply image/stiker]
𐁘 .deepfry [reply image/stiker]
𐁘 .ddungeon [reply image/stiker]
𐁘 .circle [reply image/stiker]
𐁘 .challenger [reply image/stiker]
𐁘 .burn [reply image/stiker]
𐁘 .brazzers [reply image/stiker]
𐁘 .beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`「 Sticker Effect 」 
𐁘 .jail [reply image/stiker]
𐁘 .red [reply image/stiker]
𐁘 .gay [reply image/stiker]
𐁘 .bloo [reply image/stiker]
𐁘 .blue [reply image/stiker]
𐁘 .sepia [reply image/stiker]
𐁘 .green [reply image/stiker]
𐁘 .glass [reply image/stiker]
𐁘 .invert [reply image/stiker]
𐁘 .blurple [reply image/stiker]
𐁘 .blurple2 [reply image/stiker]
𐁘 .wasted [reply image/stiker]
𐁘 .passed [reply image/stiker]
𐁘 .triggered [reply image/stiker]
𐁘 .comrade [reply image/stiker]
𐁘 .greyscale [reply image/stiker]
𐁘 .threshold [reply image/stiker]
𐁘 .brightness [reply image/stiker]
𐁘 .invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`「 Download 」 
𐁘 .tiktok [link]
𐁘 .tiktoknowm [link]
𐁘 .tiktokwm [link]
𐁘 .tiktokaudio [link]
𐁘 .ytdl [link]
𐁘 .play [query]
𐁘 .ytmp3 [link]
𐁘 .ytshortmp3 [link]
𐁘 .ytmp4 [link]
𐁘 .ytshorts [link]
𐁘 .facebook [link]
𐁘 .facebooksd [link]
𐁘 .facebookhd [link]
𐁘 .fbaudio [link]
𐁘 .igstory [username]
𐁘 .igdl [link]
𐁘 .igphoto [link]
𐁘 .igvideo [link]
𐁘 .igreels [link]
𐁘 .igtv [link]
𐁘 .soundcloud [link]
𐁘 .gitclone [link repo]
𐁘 .gitrepo [username repo branch]
𐁘 .mediafire [link]
𐁘 .twitter link
`
}

exports.ranime = (prefix) =>{
	return`「 Random Anime 」
𐁘 .loli
𐁘 .neko
𐁘 .waifu
𐁘 .shinobu
𐁘 .megumin
𐁘 .bully
𐁘 .cuddle
𐁘 .cry
𐁘 .hug
𐁘 .awoo
𐁘 .kiss
𐁘 .lick
𐁘 .pat
𐁘 .smug
𐁘 .bonk
𐁘 .yeet
𐁘 .blush
𐁘 .smile
𐁘 .wave
𐁘 .highfive
𐁘 .handhold
𐁘 .nom
𐁘 .bite
𐁘 .glomp
𐁘 .slap
𐁘 .kill
𐁘 .happy
𐁘 .wink
𐁘 .poke
𐁘 .dance
𐁘 .cringe
`
}

exports.nsfw = (prefix) =>{
	return`「 Nsfw & Sfw 」
𐁘 .cuddle
𐁘 .feed
𐁘 .foxgirl
𐁘 .kemonomimi2
𐁘 .woof
𐁘 .holo2
𐁘 .hug
𐁘 .kiss
𐁘 .lizard
𐁘 .meowi
𐁘 .neko2
𐁘 .pat
𐁘 .poke
𐁘 .slap
𐁘 .tickle
𐁘 .baka
𐁘 .smug
𐁘 .neko_sfw
𐁘 .hentai
𐁘 .hentai_gif
𐁘 .spank
𐁘 .blowjob
𐁘 .cumarts
𐁘 .eroyuri
𐁘 .eroneko
𐁘 .erokemonomimi
𐁘 .erokitsune
𐁘 .ero
𐁘 .feet
𐁘 .erofeet
𐁘 .feetgif
𐁘 .femdom
𐁘 .futanari
𐁘 .hentai
𐁘 .holoero
𐁘 .holo
𐁘 .keta
𐁘 .kitsune
𐁘 .kemonomimi
𐁘 .pussyart
𐁘 .pussywankgif
𐁘 .girl_solo
𐁘 .girl_solo_gif
𐁘 .tits
𐁘 .trap
𐁘 .yuri
𐁘 .avatar2
𐁘 .anal
𐁘 .bj
𐁘 .boobs
𐁘 .classic
𐁘 .cumsluts
𐁘 .kuni
𐁘 .lesbian
𐁘 .neko
𐁘 .neko_gif
𐁘 .ahegao
𐁘 .bdsm
𐁘 .cuckold
𐁘 .cum
𐁘 .foot
𐁘 .gangbang
𐁘 .glasses
𐁘 .jahy
𐁘 .masturbation
𐁘 .nsfw_neko
𐁘 .orgy
𐁘 .panties
𐁘 .tentacles
𐁘 .thighs
𐁘 .zettai
`
}

exports.textpro = (prefix) =>{
	return`「 Textpro Menu 」
𐁘 .halloween2 text|text2
𐁘 .horror text|text2
𐁘 .game8bit text|text2
𐁘 .layered text|text2
𐁘 .glitch2 text|text2
𐁘 .coolg text|text2
𐁘 .coolwg text|text2
𐁘 .realistic text|text2
𐁘 .space3d text|text2
𐁘 .gtiktok text|text2
𐁘 .stone text|text2
𐁘 .marvel text|text2
𐁘 .marvel2 text|text2
𐁘 .pornhub text|text2
𐁘 .avengers text|text2
𐁘 .metalr text|text2
𐁘 .metalg text|text2
𐁘 .metalg2 text|text2
𐁘 .halloween2 text|text2
𐁘 .lion text|text2
𐁘 .wolf_bw text|text2
𐁘 .wolf_g text|text2
𐁘 .ninja text|text2
𐁘 .3dsteel text|text2
𐁘 .horror2 text|text2
𐁘 .lava text|text2
𐁘 .bagel text|text2
𐁘 .blackpink text
𐁘 .rainbow2 text
𐁘 .water_pipe text
𐁘 .halloween text
𐁘 .sketch text
𐁘 .sircuit text
𐁘 .discovery text
𐁘 .metallic2 text
𐁘 .fiction text
𐁘 .demon text
𐁘 .transformer text
𐁘 .berry text
𐁘 .thunder text
𐁘 .magma text
𐁘 .3dstone text
𐁘 .neon text
𐁘 .glitch text
𐁘 .harry_potter text
𐁘 .embossed text
𐁘 .broken text
𐁘 .papercut text
𐁘 .gradient text
𐁘 .glossy text
𐁘 .watercolor text
𐁘 .multicolor text
𐁘 .neon_devil text
𐁘 .underwater text
𐁘 .bear text
𐁘 .wonderfulg text
𐁘 .christmas text
𐁘 .neon_light text
𐁘 .snow text
𐁘 .cloudsky text
𐁘 .luxury2 text
𐁘 .gradient2 text
𐁘 .summer text
𐁘 .writing text
𐁘 .engraved text
𐁘 .summery text
𐁘 .3dglue text
𐁘 .metaldark text
𐁘 .neonlight text
𐁘 .oscar text
𐁘 .minion text
𐁘 .holographic text
𐁘 .purple text
𐁘 .glossyb text
𐁘 .deluxe2 text
𐁘 .glossyc text
𐁘 .fabric text
𐁘 .neonc text
𐁘 .newyear text
𐁘 .newyear2 text
𐁘 .metals text
𐁘 .xmas text
𐁘 .blood text
𐁘 .darkg text
𐁘 .joker text
𐁘 .wicker text
𐁘 .natural text
𐁘 .firework text
𐁘 .skeleton text
𐁘 .balloon text
𐁘 .balloon2 text
𐁘 .balloon3 text
𐁘 .balloon4 text
𐁘 .balloon5 text
𐁘 .balloon6 text
𐁘 .balloon7 text
𐁘 .steel text
𐁘 .gloss text
𐁘 .denim text
𐁘 .decorate text
𐁘 .decorate2 text
𐁘 .peridot text
𐁘 .rock text
𐁘 .glass text
𐁘 .glass2 text
𐁘 .glass3 text
𐁘 .glass4 text
𐁘 .glass5 text
𐁘 .glass6 text
𐁘 .glass7 text
𐁘 .glass8 text
𐁘 .captain_as2 text
𐁘 .robot text
𐁘 .equalizer text
𐁘 .toxic text
𐁘 .sparkling text
𐁘 .sparkling2 text
𐁘 .sparkling3 text
𐁘 .sparkling4 text
𐁘 .sparkling5 text
𐁘 .sparkling6 text
𐁘 .sparkling7 text
𐁘 .decorative text
𐁘 .chocolate text
𐁘 .strawberry text
𐁘 .koifish text
𐁘 .bread text
𐁘 .matrix text
𐁘 .blood2 text
𐁘 .neonligth2 text
𐁘 .thunder2 text
𐁘 .3dbox text
𐁘 .neon2 text
𐁘 .roadw text
𐁘 .bokeh text
𐁘 .gneon text
𐁘 .advanced text
𐁘 .dropwater text
𐁘 .wall text
𐁘 .chrismast text
𐁘 .honey text
𐁘 .drug text
𐁘 .marble text
𐁘 .marble2 text
𐁘 .ice text
𐁘 .juice text
𐁘 .rusty text
𐁘 .abstra text
𐁘 .biscuit text
𐁘 .wood text
𐁘 .scifi text
𐁘 .metalr text
𐁘 .purpleg text
𐁘 .shiny text 
𐁘 .jewelry text
𐁘 .jewelry2 text
𐁘 .jewelry3 text
𐁘 .jewelry4 text
𐁘 .jewelry5 text
𐁘 .jewelry6 text
𐁘 .jewelry7 text
𐁘 .jewelry8 text
𐁘 .metalh text
𐁘 .golden text
𐁘 .glitter text
𐁘 .glitter2 text
𐁘 .glitter3 text
𐁘 .glitter4 text
𐁘 .glitter5 text
𐁘 .glitter6 text
𐁘 .glitter7 text
𐁘 .metale text
𐁘 .carbon text
𐁘 .candy text
𐁘 .metalb text
𐁘 .gemb text
𐁘 .3dchrome text
𐁘 .metalb2 text
𐁘 .metalg text
𐁘 .metalg text
`
}


exports.other = (prefix) =>{
return`「 Others 」
𐁘 .ttp [text]
𐁘 .attp [text]
𐁘 .afk [reason]
𐁘 .translate kode_bahasa text
𐁘 .kalkulator [query]
𐁘 .smeme [text]
𐁘 .smeme2 [text|text]
𐁘 .memegen [text|text]
`
}
exports.game = (prefix) =>{
return`「 Game Menu 」
𐁘 .kuismath
𐁘 .tebakgambar
𐁘 .tebakkata
𐁘 .tebakbendera
𐁘 .tebakkalimat
𐁘 .tebaksiapa
𐁘 .tebakkabupaten
𐁘 .tebakkimia
𐁘 .tebaklirik
𐁘 .tebaktebakan
𐁘 .tekateki
𐁘 .susunkata
𐁘 .caklontong
`
}
exports.asupan = (prefix) =>{
return`「 Asupan Menu 」
𐁘 .chika
𐁘 .delvira
𐁘 .ayu
𐁘 .bunga
𐁘 .aura
𐁘 .nisa
𐁘 .ziva
𐁘 .yana
𐁘 .viona
𐁘 .syania
𐁘 .riri
𐁘 .syifa
𐁘 .mama_gina
𐁘 .alcakenya
𐁘 .mangayutri
𐁘 .rikagusriani
𐁘 .asupan
𐁘 .bocil
𐁘 .geayubi
𐁘 .santuy
𐁘 .ukhty
𐁘 .syifa
`
}
exports.cecan = (prefix) =>{
return`「 Random Cewe 」
𐁘 .china 
𐁘 .indonesia 
𐁘 .malaysia 
𐁘 .thailand 
𐁘 .korea 
𐁘 .japan 
𐁘 .vietnam 
𐁘 .jenni 
𐁘 .jiso 
𐁘 .lisa  
𐁘 .rose
`
}

exports.tqto = () =>{
	return`「 TqTo 」 
𐁘 .My God
𐁘 .My Parents
𐁘 .Fatih A.
𐁘 .Ferdi
𐁘 .DikaArdnt
𐁘 .Mhankbarbar
𐁘 .Nurutomo
𐁘 .Rashid
𐁘 .ZeeoneOfc
𐁘 .Penyedia Module
𐁘 .And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`「 Primbon 」
𐁘 .nomorhoki 887435047326
𐁘 .artimimpi [query]
𐁘 .artinama [query]
𐁘 .ramaljodoh
𐁘 .ramaljodohbali
𐁘 .suamiistri
𐁘 .ramalcinta
𐁘 .cocoknama
𐁘 .pasangan
𐁘 .jadiannikah
𐁘 .sifatusaha
𐁘 .rezeki
𐁘 .pekerjaan
𐁘 .nasib
𐁘 .penyakit
𐁘 .tarot
𐁘 .fengshui
𐁘 .haribaik
𐁘 .harisangar
𐁘 .harisial
𐁘 .nagahari
𐁘 .arahrezeki
𐁘 .peruntungan
𐁘 .weton
𐁘 .karakter
𐁘 .keberuntungan
𐁘 .memancing
𐁘 .masasubur
𐁘 .zodiak 
𐁘 .shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`「 Telegram Sticker 」
𐁘 .awoawo
𐁘 .benedict
𐁘 .chat
𐁘 .dbfly
𐁘 .dino_kuning
𐁘 .doge
𐁘 .gojosatoru
𐁘 .hope_boy
𐁘 .jisoo
𐁘 .kr_robot
𐁘 .kucing
𐁘 .lonte
𐁘 .manusia_lidi
𐁘 .menjamet
𐁘 .meow
𐁘 .nicholas
𐁘 .patrick
𐁘 .popoci
𐁘 .sponsbob
𐁘 .kawan_sponsbob
𐁘 .tyni
`}

exports.ephotomenu = (prefix) =>{
	return`「 Ephoto360 Menu 」
𐁘 .youtubegold text
𐁘 .youtubesilver text
𐁘 .facebookgold text
𐁘 .facebooksilver text
𐁘 .instagramgold text
𐁘 .instagramsilver text
𐁘 .twittergold text
𐁘 .twittersilver text
𐁘 .retrotext text
𐁘 .halloweenbats text
𐁘 .texthalloween text
𐁘 .cardhalloween text
𐁘 .birthdaycake text
𐁘 .thundertext text
𐁘 .icetext text
𐁘 .milkcake text
𐁘 .snowontext text
𐁘 .metalstar text
𐁘 .dragonfire text
𐁘 .zombie3d text
𐁘 .merrycard text
𐁘 .generalexam text 
𐁘 .viettel text
𐁘 .embroider text
𐁘 .graffititext text
𐁘 .graffititext2 text
𐁘 .graffititext3 text
𐁘 .covergraffiti text
𐁘 .moderngold text
𐁘 .capercut text
𐁘 .lovecard text
𐁘 .heartflashlight text
𐁘 .heartcup text
𐁘 .sunglightshadow text
𐁘 .graffiti3d text
𐁘 .moderngoldsilver text
𐁘 .moderngold2 text
𐁘 .moderngold3 text
𐁘 .fabrictext text
𐁘 .masteryavatar text
𐁘 .messagecoffee text
𐁘 .announofwin text
𐁘 .writeblood text
𐁘 .horrorletter text
𐁘 .writehorror text
𐁘 .shirtclub text
𐁘 .angelwing text
𐁘 .christmasseason text
𐁘 .projectyasuo text
𐁘 .lovelycute text
𐁘 .womansday text
𐁘 .covergamepubg text
𐁘 .nameonheart text
𐁘 .funnyhalloween text
𐁘 .lightningpubg text
𐁘 .greetingcardvideo text 
𐁘 .christmascard text 
𐁘 .galaxybat text
𐁘 .writegalaxy text
𐁘 .starsnight text
𐁘 .noeltext text
𐁘 .textcakes text
𐁘 .pubgbirthday text
𐁘 .galaxywallpaper text
𐁘 .pubgglicthvideo text 
𐁘 .pubgmascotlogo text
𐁘 .realembroidery text
𐁘 .vintagetelevision text
𐁘 .funnyanimations text
𐁘 .glowingtext text
𐁘 .textonglass text
𐁘 .cartoonstyle text
𐁘 .multicolor text
𐁘 .watercolor2 text
𐁘 .textsky text
𐁘 .summerbeach text
𐁘 .1917text text
𐁘 .puppycute text
𐁘 .rosebirthday text
𐁘 .steellettering text|text2
𐁘 .letterstext text|text2
𐁘 .barcashirt text|text2
𐁘 .premiercup text|text2
𐁘 .stylepoligon text|text2
𐁘 .lifebuoys text|text2
𐁘 .juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`「 Logo Menu 」
𐁘 .coverbannerlol text|heroes
𐁘 .pubglogomaker text|style
𐁘 .colorfulpubg text|color
𐁘 .astronotspace text|style
𐁘 .wallpaperaov text|heroes
𐁘 .maketeamlogo text|style
𐁘 .circlemarcotteam text|logo
𐁘 .wallpaperml text|heroes
𐁘 .dragonballfb text|character
𐁘 .bannerofaov text|character
𐁘 .effect3donbeach text|background
𐁘 .cutegirlgamer text|logo
𐁘 .footballteam text|logo
𐁘 .beautifulshimmering text|champion
𐁘 .pubgcutelogo text|logo
𐁘 .elegantrotation text|logo
𐁘 .logogamingassasin text|logo
𐁘 .introvideomaker text|logo
𐁘 .gaminglogo4fvs text|logo
𐁘 .blueneon text|logo
𐁘 .metalmascot text|logo
𐁘 .anonymous2 text|style
𐁘 .lolpentakill text|style
𐁘 .avatarleagueofking text|style
𐁘 .avatarff text|character
𐁘 .overwatchwallpaper text|character
𐁘 .rovwallpaperhd text|hero
𐁘 .rovwallpaper text|avatar
𐁘 .beautifulgalaxylol text|style
𐁘 .crossfirecover text|character
𐁘 .lolwallpaper text|wallpaper
𐁘 .coverdota2 text|heroes
𐁘 .coverleagueofking text|character
𐁘 .avatar3q360 text|avatar
𐁘 .coverofwarface text|character
𐁘 .newlolavatar text|avatar
𐁘 .csgocover text|background
𐁘 .coverloknew text|hero
𐁘 .coverfblol text|letters
𐁘 .overwatchcover text|hero
𐁘 .crossfirestyle text|avatar
𐁘 .avatarlolbyname text|style
𐁘 .lolcoverbyname text|avatar
𐁘 .cyberhunterfb text|character
𐁘 .coverfreefirefb text|character
𐁘 .gamingmascot text|style
𐁘 .coveronepiecefb text|character
𐁘 .bannerytcsgo text|banner
𐁘 .fbgamepubgcover text|template
𐁘 .banneroflol text|text2|banner
𐁘 .bannerofaov2 text|text2|banner
𐁘 .teamlogo text|text2|background
𐁘 .companylogo2 text|text2|background
𐁘 .companylogo text|text2|background
𐁘 .gradientlogo text|text2|background
𐁘 .pencilsketch text|text2|icon
𐁘 .gunlogogaming text|text2|background
𐁘 .banneroffreefire text|text2|background
𐁘 .letterlogos text|text2|thumb
𐁘 .bannerofoverwatch text|text2|background
𐁘 .bannerofapex text|text2|background
𐁘 .bannerofpubg text|text2|background
𐁘 .mascotstyle text|text2|thumb
𐁘 .logoaccording text|text2|thumb
𐁘 .avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`「 Islamic Menu 」
𐁘 .asmaulhusna
𐁘 .kisahnabi [nabi]
𐁘 .jadwalshalat [daerah]
𐁘 .randomquran
𐁘 .randomquran2
𐁘 .listsurah
𐁘 .tafsirsurah [surah]
𐁘 .alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`「 Anonymous 」
𐁘 .menfess
𐁘 .anonymous 
𐁘 .start
𐁘 .skip [daerah]
𐁘 .stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`「 Store Menu 」
𐁘 .list
𐁘 .addlist [key|respond]
𐁘 .dellist [key]
𐁘 .update [key|respond]
𐁘 .store
𐁘 .kali
𐁘 .bagi
𐁘 .tambah
𐁘 .kurang
𐁘 .kalkulator
𐁘 .setproses
𐁘 .updateproses
𐁘 .cekproses
𐁘 .delproses
𐁘 .setdone
𐁘 .updatedone
𐁘 .cekdone
𐁘 .deldone
𐁘 .pay
𐁘 .setcaptionpay
𐁘 .setpaysewa
𐁘 .proses
𐁘 .done
`
}

exports.voiceChange = (prefix) =>{
	return`「 Voice Change Menu 」
𐁘 .bass
𐁘 .blown
𐁘 .deep
𐁘 .earrape
𐁘 .fast
𐁘 .fat
𐁘 .nightcore
𐁘 .reverse
𐁘 .robot
𐁘 .slow
𐁘 .smooth
𐁘 .tupai
`
}
exports.storagemenu = (prefix) =>{
	return`「 Storage Menu 」
𐁘 .addvn
𐁘 .listvn
𐁘 .delvn
𐁘 .addimage
𐁘 .listimage
𐁘 .delimage
𐁘 .addvideo
𐁘 .listvideo
𐁘 .delvideo
𐁘 .addstik
𐁘 .delstik
𐁘 .liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`「 Rpg Games 」
𐁘 .adventure
𐁘 .weekly
𐁘 .use
𐁘 .transfer
𐁘 .slot
𐁘 .shop
𐁘 .profile
𐁘 .pasar
𐁘 .ojek
𐁘 .open
𐁘 .nguli
𐁘 .narik
𐁘 .nabung
𐁘 .monthly
𐁘 .mining
𐁘 .merampok
𐁘 .mancing
𐁘 .kolam
𐁘 .koboy
𐁘 .kerja
𐁘 .kandang
𐁘 .judi
𐁘 .inventory
𐁘 .hourly
𐁘 .fishop
𐁘 .feed
𐁘 .duel
𐁘 .daily
𐁘 .craft
𐁘 .cooldown
𐁘 .cook
𐁘 .collect
𐁘 .chop
𐁘 .casino
𐁘 .buy
𐁘 .bank 
𐁘 .bansos
𐁘 .berdagang
𐁘 .berkebon
𐁘 .build
`
}

exports.photooxy = (prefix)=>{
	return`「 Photooxy Menu 」
𐁘 .battlegrounds-logo
𐁘 .battlefield4
𐁘 .text-8bit
𐁘 .typography-flower 
𐁘 .under-flower 
𐁘 .bevel-text 
𐁘 .silk-text 
𐁘 .sweet-andy 
𐁘 .smoke-typography 
𐁘 .carvedwood 
𐁘 .scary-cemetery 
𐁘 .royallook 
𐁘 .coffeecup2 
𐁘 .illuminated 
𐁘 .harry-potter2 //
𐁘 .woodblack //
𐁘 .butterfly-reflection //
𐁘 .watermelon // 
𐁘 .striking // 
𐁘 .metallicglow //
𐁘 .rainbow-text 
𐁘 .birthday-cake 
𐁘 .embroidery // 
𐁘 .crisp 
𐁘 .flaming 
𐁘 .furtext 
𐁘 .nightsky 
𐁘 .glow-rainbow 
𐁘 .gradient-avatar 
𐁘 .white-cube // 
𐁘 .honey-text // 
𐁘 .vintage-style //
𐁘 .glowing-3d // 
𐁘 .army-camouflage 
𐁘 .graffiti-cover 
𐁘 .rainbow-shine 
𐁘 .smoky-neon 
𐁘 .quotes-underfall //
𐁘 .layered-leaves 
𐁘 .vector-nature 
𐁘 .yellow-rose 
𐁘 .love-text 
𐁘 .underwater-ocean 
𐁘 .nature-text 
𐁘 .wolf-metal 
𐁘 .summer-text 
𐁘 .wooden-board //
𐁘 .flower-heart
𐁘 .quote-wood 
𐁘 .love-text 
𐁘 .quotes-undergrass 
𐁘 .naruto-banner 
𐁘 .love-message 
𐁘 .textoncup2 
𐁘 .burn-paper 
𐁘 .smoke 
𐁘 .romantic-messages 
𐁘 .shadow-sky 
𐁘 .text-cup 
𐁘 .coffecup
`
}
exports.soundmenu = (prefix) =>{
return`「 Sound Menu 」
𐁘 .sound1
𐁘 .sound2
𐁘 .sound3
𐁘 .sound4
𐁘 .sound5
𐁘 .sound6
𐁘 .sound7
𐁘 .sound8
𐁘 .sound9
𐁘 .sound10
𐁘 .sound11
𐁘 .sound12
𐁘 .sound13
𐁘 .sound14
𐁘 .sound15
𐁘 .sound16
𐁘 .sound17
𐁘 .sound18 
𐁘 .sound19
𐁘 .sound20
𐁘 .sound21
𐁘 .sound22
𐁘 .sound23
𐁘 .sound24
𐁘 .sound25
𐁘 .sound26
𐁘 .sound27
𐁘 .sound28
𐁘 .sound29
𐁘 .sound30
𐁘 .sound31
𐁘 .sound32
𐁘 .sound33
𐁘 .sound34
𐁘 .sound35
𐁘 .sound36
𐁘 .sound37
𐁘 .sound38
𐁘 .sound39
𐁘 .sound40
𐁘 .sound41
𐁘 .sound42
𐁘 .sound43
𐁘 .sound44
𐁘 .sound45
𐁘 .sound46
𐁘 .sound47
𐁘 .sound48
𐁘 .sound49
𐁘 .sound50
𐁘 .sound51
𐁘 .sound52
𐁘 .sound53
𐁘 .sound54
𐁘 .sound55
𐁘 .sound56
𐁘 .sound57
𐁘 .sound58
𐁘 .sound59
𐁘 .sound60
𐁘 .sound61
𐁘 .sound62
𐁘 .sound63
𐁘 .sound64
𐁘 .sound65
𐁘 .sound66
𐁘 .sound67
𐁘 .sound68
𐁘 .sound69
𐁘 .sound70
`
}


