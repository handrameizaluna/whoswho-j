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
	return`๐ nm: ${username} (@${m.sender.split`@`[0]})${about ? '\n๐ Bio: ' + about : ''}
๐จโโค๏ธโ๐จ Status: ${pasangan ? `berpacaran @${pasangan.split`@`[0]}` : '-' }
#๏ธโฃ Nomor: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
๐ Link: https://wa.me/${m.sender.split`@`[0]}
๐คทโโ๏ธ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
๐๏ธ Level: ${level}
๐ข Role: ${role}
๐ Limit: ${limit}
ยฎ๏ธ Registered: ${registered ? 'โ (' + tanggal(regTime) + ')' : 'โ'}
โฝ Premium: ${premium ? `โ\nโฐ Expired Premium : msToDate(premiumDate - now)` : 'โ'}
๐ Last claim: ${lastclaim > 0 ? + tanggal(lastclaim) : '-'}`
	}

//
exports.needReg = (a, b, c) =>{
	return`๐ฒ๐จ dftr dlu

gini : #daftar nama|umur|gender|hobi
cnth : #daftar ${a}|18|cowo|Game

๐บ๐ฒ Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`limit km hri ini dh abis๏ธ\n\nsilahkan beli limit dngn cara ketik ${prefix}buy atau ${prefix}buyall`
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
	return`stu hobu aja jan bnykยฒ`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`โญโใ *brhasil verivikasi* ใ
โ\`\`\`verifikasi brhasil dngn\`\`\` 
โ
โ\`\`\`SN: ${a}\`\`\`
โ\`\`\`pada : ${b}\`\`\`
โ\`\`\`nama : ${c}\`\`\`
โ\`\`\`umur : ${d}\`\`\`
โ\`\`\`gender : ${e}\`\`\`
โ\`\`\`nomor : @${f}\`\`\`
โ\`\`\`untuk menggunakan bot silahkan \`\`\`
โ\`\`\`kirim perintah ${g}menu\`\`\`
โ\`\`\`atau ${h}allmenu\`\`\`
โ
โ\`\`\`\Total : ${i} Users\`\`\`
โฐโโโโโโโโโโโโโโโโโโโโโ`
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
    return `โ Jawaban Salah`
}

exports.JwbTrue = (tebak) => {
return`๐ฎ ${tebak} ๐ฎ\n\nJawaban Benar ๐\n\nIngin bermain lagi? tekan button dibawah`
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
	โข cnth : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	โข cnth : ${prefix + command} id halo
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
    return `โ Berhasil memberhentikan chat`
}
exports.StopAnonByFren = () => {
    return `โ?๏ธ Sesi chat ini telah diberhentikan oleh teman chat km`
}
exports.AnonOn = () => {
    return `โ?๏ธ km masih dalam sesi chat dengan partner!`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan ๐ผ_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = () => {
    return `๐ Mohon tunggu sedang mencari teman chat`
}
exports.NoAnon = () => {
    return `โ?๏ธ km belum pernah memulai chat!`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `cnth penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `โ?๏ธ Mohon maaf nomor km telah di banned oleh owner\n\nOwner ๐\nwa.me/${a}`
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
    return `โณ Mohon tunggu sebentar`
}
exports.ok = () => {
    return `โ Done.`
}

exports.err = () => {
    return `โ?๏ธ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `โ?๏ธ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin km download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah โ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `โ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `โ Command *${cmd}* tdk terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `โ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `โ  ๏ธSudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `๐ฅ  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `๐  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tdk valid!`
}

exports.listBlock = (blockNumber) => {
    return `*โโ ใ HALL OF SHAME ใ โโ*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `user bkn seorang admin! โ`
}

exports.adminAlready = () => {
    return `tdk dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! ๐`
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
	return`Hai kak ${pushname} ๐ selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*slmt ${salam} ${pushname}*
*โTime Server : ${time}*
*๐ List-Menu Bot :*

ใ Bot Info ใ 
๐ .owner
๐ .rules
๐ .sc
๐ .ping
๐ .runtime
๐ .botstatus
๐ .donate


ใ Owner ใ 
๐ .setmenu [query]
๐ .setwm packname|author
๐ .broadcast [text]
๐ .bc [text]
๐ .bcgc 
๐ .bcimage
๐ .bcaudio
๐ .bcstiker
๐ .bcvn
๐ .bcvideo
๐ .banuser
๐ .unban
๐ .banned
๐ .listbanned
๐ .block
๐ .ublock
๐ .listblock
๐ .addpremium
๐ .delpremium
๐ .listpremium
๐ .nsfw [on/off]
๐ .mute [on/off]
๐ .autoblok212 [on/off]
๐ .banchat
๐ .unbanchat
๐ .autorespond [on/off]
๐ .antiviewonce [on/off]
๐ .autobio [on/off]
๐ .join [link]
๐ .self
๐ .public [only bot]
๐ .del [reply pesan bot]
๐ .pppanjang
๐ .setpppanjang
๐ .setppbot [reply image]

ใ Anonymous ใ
๐ .menfess
๐ .anonymous 
๐ .start
๐ .skip [daerah]
๐ .stop [surah|ayat]


ใ Database ใ 
๐ .setcmd [reply stiker]
๐ .delcmd [reply stiker]
๐ .listcmd
๐ .absen
๐ .cekabsen
๐ .deleteabsen
๐ .absenstart
๐ .addmsg [nama file]
๐ .getmsg [nama file]
๐ .listmsg
๐ .delmsg [nama file]

ใ Rpg Games ใ
๐ .adventure
๐ .weekly
๐ .use
๐ .transfer
๐ .slot
๐ .shop
๐ .pasar
๐ .profile
๐ .ojek
๐ .open
๐ .nguli
๐ .narik
๐ .nabung
๐ .monthly
๐ .mining
๐ .merampok
๐ .mancing
๐ .kolam
๐ .koboy
๐ .kerja
๐ .kandang
๐ .judi
๐ .inventory
๐ .hourly
๐ .fishop
๐ .feed
๐ .duel
๐ .daily
๐ .craft
๐ .cooldown
๐ .cook
๐ .collect
๐ .chop
๐ .casino
๐ .buy
๐ .bank 
๐ .bansos
๐ .berdagang
๐ .berkebon
๐ .build

ใ Group ใ 
๐ .register
๐ .unregister
๐ .ceksn
๐ .listonline
๐ .sider
๐ .wm packname|author
๐ .infochat
๐ .setdesk [text]
๐ .setppgrup [reply image]
๐ .pppanjanggc
๐ .setpppanjanggc
๐ .revoke
๐ .leave
๐ .add [62***]
๐ .kick @tag
๐ .leave
๐ .linkgc
๐ .welcome [on/off]
๐ .goodbye [on/off]
๐ .demotedetect [on/off]
๐ .promotedetect  [on/off]
๐ .setwelcome
๐ .updatewelcome
๐ .delwelcome
๐ .cekwelcome
๐ .setgoodbye
๐ .updategoodbye
๐ .delgoodbye
๐ .cekgoodbye
๐ .setpromote
๐ .updatepromote
๐ .setdemote
๐ .updatedemote
๐ .cekpromote
๐ .cekdemote
๐ .delpromote
๐ .deldemote
๐ .nsfw [on/off]
๐ .antilink [on/off]
๐ .take packname|author
๐ .group [open/close]
๐ .tagall [text]
๐ .hidetag [text]

ใ Anime ใ 
๐ .quotesanime
๐ .anime [query]
๐ .animeinfo
๐ .manga [query]
๐ .character [query]

ใ Tag ใ 
๐ .stickertag
๐ .videotag [query]
๐ .vntag [query]
๐ .imagetag [query]

ใ Stalking ใ 
๐ .igstalk [username]
๐ .ghstalk [username]
๐ .ytstalk [channel]

ใ Search ใ 
๐ .ytsearch [query]
๐ .wallpaper [query]
๐ .google [query]
๐ .wikimedia [query]
๐ .apksearch
๐ .findapk
๐ .hentai
๐ .wattpad [query]
๐ .webtoons [query]
๐ .drakor [query]
๐ .brainly [query]
๐ .pinterest [query]

ใ Converter ใ
๐ .emoji [๐ญ]
๐ .emojimix [๐ญ+๐ฉ]
๐ .toaudio [video]
๐ .tomp3 [video]
๐ .tovn [video]
๐ .stiker [reply image]
๐ .tourl [image/video/stiker]
๐ .togif [sticker]
๐ .tomp4 [sticker]
๐ .${prefix}toimg [reply sticker]

ใ Download ใ 
๐ .tiktok [link]
๐ .tiktokaudio [link]
๐ .ytdl [link]
๐ .play [query]
๐ .ytmp3 [link]
๐ .ytshortmp3 [link]
๐ .ytmp4 [link]
๐ .ytshorts [link]
๐ .igstory [username]
๐ .igdl [link]
๐ .igphoto [link]
๐ .igvideo [link]
๐ .igreels [link]
๐ .igtv [link]
๐ .soundcloud [link]
๐ .gitclone [link repo]
๐ .gitrepo [username repo branch]
๐ .mediafire [link]
๐ .twitter [link]

ใ Primbon ใ
๐ .nomorhoki 887435047326
๐ .artimimpi [query]
๐ .artinama [query]
๐ .ramaljodoh
๐ .ramaljodohbali
๐ .suamiistri
๐ .ramalcinta
๐ .cocoknama
๐ .pasangan
๐ .jadiannikah
๐ .rezeki
๐ .pekerjaan
๐ .nasib
๐ .penyakit
๐ .tarot
๐ .karakter
๐ .keberuntungan
๐ .zodiak 
๐ .shio [query]

ใ Random Anime ใ
๐ .loli
๐ .neko
๐ .waifu
๐ .shinobu
๐ .megumin
๐ .bully
๐ .cuddle
๐ .cry
๐ .hug
๐ .awoo
๐ .kiss
๐ .lick
๐ .pat
๐ .smug
๐ .bonk
๐ .yeet
๐ .blush
๐ .smile
๐ .wave
๐ .highfive
๐ .handhold
๐ .nom
๐ .bite
๐ .glomp
๐ .slap
๐ .kill
๐ .happy
๐ .wink
๐ .poke
๐ .dance
๐ .cringe

ใ Voice Change Menu ใ
๐ .bass
๐ .blown
๐ .deep
๐ .earrape
๐ .fast
๐ .fat
๐ .nightcore
๐ .reverse
๐ .robot
๐ .slow
๐ .smooth
๐ .tupai

ใ Storage Menu ใ
๐ .addvn
๐ .listvn
๐ .delvn
๐ .addimage
๐ .listimage
๐ .delimage
๐ .addvideo
๐ .listvideo
๐ .delvideo
๐ .addstik
๐ .delstik
๐ .liststik

ใ Others ใ
๐ .afk [reason]
๐ .translate kode_bahasa text
๐ .kalkulator [query]
๐ .smeme [text]
๐ .smeme2 [text|text]
๐ .memegen [text|text]
โฐโ

ใ Game Menu ใ
๐ .kuismath
๐ .tebakgambar
๐ .tebakkata
๐ .tebakbendera
๐ .tebakkalimat
๐ .tebaksiapa
๐ .tebakkabupaten
๐ .tebakkimia
๐ .tebaklirik
๐ .tebaktebakan
๐ .tekateki
๐ .susunkata
๐ .caklontong

ใ Telegram Sticker ใ
๐ .awoawo
๐ .benedict
๐ .chat
๐ .dbfly
๐ .dino_kuning
๐ .doge
๐ .gojosatoru
๐ .hope_boy
๐ .jisoo
๐ .kr_robot
๐ .kucing
๐ .lonte
๐ .manusia_lidi
๐ .menjamet
๐ .meow
๐ .nicholas
๐ .patrick
๐ .popoci
๐ .sponsbob
๐ .kawan_sponsbob
๐ .tyni

ใ Islamic Menu ใ
๐ .asmaulhusna
๐ .kisahnabi [nabi]
๐ .jadwalshalat [daerah]
๐ .randomquran
๐ .randomquran2
๐ .listsurah
๐ .tafsirsurah [surah]
๐ .alquranaudio [surah|ayat]

ใ Sound Menu ใ
๐ .sound1
๐ .sound2
๐ .sound3
๐ .sound4
๐ .sound5
๐ .sound6
๐ .sound7
๐ .sound8
๐ .sound9
๐ .sound10
๐ .sound11
๐ .sound12
๐ .sound13
๐ .sound14
๐ .sound15
๐ .sound16
๐ .sound17
๐ .sound18 
๐ .sound19
๐ .sound20
๐ .sound21
๐ .sound22
๐ .sound23
๐ .sound24
๐ .sound25
๐ .sound26
๐ .sound27
๐ .sound28
๐ .sound29
๐ .sound30
๐ .sound31
๐ .sound32
๐ .sound33
๐ .sound34
๐ .sound35
๐ .sound36
๐ .sound37
๐ .sound38
๐ .sound39
๐ .sound40
๐ .sound41
๐ .sound42
๐ .sound43
๐ .sound44
๐ .sound45
๐ .sound46
๐ .sound47
๐ .sound48
๐ .sound49
๐ .sound50
๐ .sound51
๐ .sound52
๐ .sound53
๐ .sound54
๐ .sound55
๐ .sound56
๐ .sound57
๐ .sound58
๐ .sound59
๐ .sound60
๐ .sound61
๐ .sound62
๐ .sound63
๐ .sound64
๐ .sound65
๐ .sound66
๐ .sound67
๐ .sound68
๐ .sound69
๐ .sound70

ใ TqTo ใ 
๐ .my god
๐ .my parents
๐ .my self
    `
}

exports.rules = () => {
    return `
*โโ ใ RULES AND FAQ ใ โโ*

1. jangan spam bot.
2. jangan telepon bot
3. jangan membandingkan bot

๐ฏ๏ธ bot tidak atau lambat merespon ?
โก๏ธ sbr aja

๐ฏ๏ธ who joestar ?
โก๏ธ mwheheh

๐ฏ๏ธ boleh saya menambah ke grup?
โก๏ธ terserah

๐ฏ๏ธ prefixnya apa ya?
โก๏ธ terserah

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
return`*------ใ SOURCE CODE ใ ------*

base : https://whojoestar.github.io/
`
}
exports.tos = (ownernomer) => {
    return `
*-------ใ SOSIAL MEDIA ใ -------*

hi! 

https://instagram.com/11.meejoestar/
https://twitter.com/jstrmzz/
https://whojoestar.github.io/

thanks!
    `
}

exports.info = (prefix) =>{
	return`ใ Bot Info ใ 
๐ .owner
๐ .rules
๐ .sc
๐ .ping
๐ .runtime
๐ .botstatus
`}

exports.ownermenu = (prefix) =>{
return`ใ Owner ใ 
๐ .setmenu [query]
๐ .setmenu templateLocation
๐ .setmenu templateTenor
๐ .setmenu katalog
๐ .setmenu katalog2
๐ .setmenu list
๐ .setwm packname|author
๐ .sendsesi
๐ .listpc
๐ .listgc
๐ .broadcast [text]
๐ .bc [text]
๐ .bcgc 
๐ .bcimage
๐ .bcaudio
๐ .bcstiker
๐ .bcvn
๐ .bcvideo
๐ .banuser
๐ .unban
๐ .banned
๐ .listbanned
๐ .block
๐ .ublock
๐ .listblock
๐ .addpremium
๐ .delpremium
๐ .listpremium
๐ .nsfw [on/off]
๐ .mute [on/off]
๐ .autoblok212 [on/off]
๐ .banchat
๐ .unbanchat
๐ .autorespond [on/off]
๐ .antiviewonce [on/off]
๐ .autobio [on/off]
๐ .join [link]
๐ .self
๐ .public [only bot]
๐ .del [reply pesan bot]
๐ .pppanjang
๐ .setpppanjang
๐ .setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`ใ Database ใ 
๐ .setcmd [reply stiker]
๐ .delcmd [reply stiker]
๐ .listcmd
๐ .absen
๐ .cekabsen
๐ .deleteabsen
๐ .absenstart
๐ .addmsg [nama file]
๐ .getmsg [nama file]
๐ .listmsg
๐ .delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`ใ Group ใ 
๐ .addsewa
๐ .delsewa
๐ .listsewa
๐ .ceksewa
๐ .delsewa
๐ .register
๐ .unregister
๐ .ceksn
๐ .listonline
๐ .sider
๐ .wm packname|author
๐ .infochat
๐ .setdesk [text]
๐ .setppgrup [reply image]
๐ .pppanjanggc
๐ .setpppanjanggc
๐ .revoke
๐ .leave
๐ .add [62***]
๐ .kick @tag
๐ .leave
๐ .linkgc
๐ .welcome [on/off]
๐ .goodbye [on/off]
๐ .demotedetect [on/off]
๐ .promotedetect  [on/off]
๐ .setwelcome
๐ .updatewelcome
๐ .delwelcome
๐ .cekwelcome
๐ .setgoodbye
๐ .updategoodbye
๐ .delgoodbye
๐ .cekgoodbye
๐ .setpromote
๐ .updatepromote
๐ .setdemote
๐ .updatedemote
๐ .cekpromote
๐ .cekdemote
๐ .delpromote
๐ .deldemote
๐ .nsfw [on/off]
๐ .antilink [on/off]
๐ .take packname|author
๐ .group [open/close]
๐ .tagall [text]
๐ .hidetag [text]
`}

exports.anime = (prefix) =>{
	return`ใ Anime ใ 
๐ .quotesanime
๐ .anime [query]
๐ .animeinfo
๐ .manga [query]
๐ .character [query]
`}

exports.tag = (prefix) =>{
	return`ใ Tag ใ 
๐ .stickertag
๐ .videotag [query]
๐ .vntag [query]
๐ .imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`ใ Stalking ใ 
๐ .igstalk [username]
๐ .ghstalk [username]
๐ .ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`ใ Search ใ 
๐ .ytsearch [query]
๐ .wallpaper [query]
๐ .google [query]
๐ .wikimedia [query]
๐ .apksearch
๐ .findapk
๐ .hentai
๐ .wattpad [query]
๐ .webtoons [query]
๐ .drakor [query]
๐ .brainly [query]
๐ .pinterest [query]
`}

exports.converter = (prefix) =>{
	return`ใ Converter ใ 
๐ .emoji [๐ญ]
๐ .emojimix [๐ญ+๐ฉ]
๐ .toaudio [video]
๐ .tomp3 [video]
๐ .tovn [video]
๐ .stiker [reply image]
๐ .tourl [image/video]
๐ .togif [sticker]
๐ .tomp4 [sticker]
โฐโ${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`ใ Image Effect ใ 
๐ .wanted [reply image/stiker]
๐ .utatoo [reply image/stiker]
๐ .unsharpen [reply image/stiker]
๐ .thanos [reply image/stiker]
๐ .sniper [reply image/stiker]
๐ .sharpen [reply image/stiker]
๐ .sepia [reply image/stiker]
๐ .scary [reply image/stiker]
๐ .rip [reply image/stiker]
๐ .redple [reply image/stiker]
๐ .rejected [reply image/stiker]
๐ .posterize [reply image/stiker]
๐ .ps4 [reply image/stiker]
๐ .pixelize [reply image/stiker]
๐ .missionpassed [reply image/stiker]
๐ .moustache [reply image/stiker]
๐ .lookwhatkarenhave [reply image/stiker]
๐ .jail [reply image/stiker]
๐ .invert [reply image/stiker]
๐ .instagram [reply image/stiker]
๐ .greyscale [reply image/stiker]
๐ .glitch [reply image/stiker]
๐ .gay [reply image/stiker]
๐ .frame [reply image/stiker]
๐ .fire [reply image/stiker]
๐ .distort [reply image/stiker]
๐ .dictator [reply image/stiker]
๐ .deepfry [reply image/stiker]
๐ .ddungeon [reply image/stiker]
๐ .circle [reply image/stiker]
๐ .challenger [reply image/stiker]
๐ .burn [reply image/stiker]
๐ .brazzers [reply image/stiker]
๐ .beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`ใ Sticker Effect ใ 
๐ .jail [reply image/stiker]
๐ .red [reply image/stiker]
๐ .gay [reply image/stiker]
๐ .bloo [reply image/stiker]
๐ .blue [reply image/stiker]
๐ .sepia [reply image/stiker]
๐ .green [reply image/stiker]
๐ .glass [reply image/stiker]
๐ .invert [reply image/stiker]
๐ .blurple [reply image/stiker]
๐ .blurple2 [reply image/stiker]
๐ .wasted [reply image/stiker]
๐ .passed [reply image/stiker]
๐ .triggered [reply image/stiker]
๐ .comrade [reply image/stiker]
๐ .greyscale [reply image/stiker]
๐ .threshold [reply image/stiker]
๐ .brightness [reply image/stiker]
๐ .invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`ใ Download ใ 
๐ .tiktok [link]
๐ .tiktoknowm [link]
๐ .tiktokwm [link]
๐ .tiktokaudio [link]
๐ .ytdl [link]
๐ .play [query]
๐ .ytmp3 [link]
๐ .ytshortmp3 [link]
๐ .ytmp4 [link]
๐ .ytshorts [link]
๐ .facebook [link]
๐ .facebooksd [link]
๐ .facebookhd [link]
๐ .fbaudio [link]
๐ .igstory [username]
๐ .igdl [link]
๐ .igphoto [link]
๐ .igvideo [link]
๐ .igreels [link]
๐ .igtv [link]
๐ .soundcloud [link]
๐ .gitclone [link repo]
๐ .gitrepo [username repo branch]
๐ .mediafire [link]
๐ .twitter link
`
}

exports.ranime = (prefix) =>{
	return`ใ Random Anime ใ
๐ .loli
๐ .neko
๐ .waifu
๐ .shinobu
๐ .megumin
๐ .bully
๐ .cuddle
๐ .cry
๐ .hug
๐ .awoo
๐ .kiss
๐ .lick
๐ .pat
๐ .smug
๐ .bonk
๐ .yeet
๐ .blush
๐ .smile
๐ .wave
๐ .highfive
๐ .handhold
๐ .nom
๐ .bite
๐ .glomp
๐ .slap
๐ .kill
๐ .happy
๐ .wink
๐ .poke
๐ .dance
๐ .cringe
`
}

exports.nsfw = (prefix) =>{
	return`ใ Nsfw & Sfw ใ
๐ .cuddle
๐ .feed
๐ .foxgirl
๐ .kemonomimi2
๐ .woof
๐ .holo2
๐ .hug
๐ .kiss
๐ .lizard
๐ .meowi
๐ .neko2
๐ .pat
๐ .poke
๐ .slap
๐ .tickle
๐ .baka
๐ .smug
๐ .neko_sfw
๐ .hentai
๐ .hentai_gif
๐ .spank
๐ .blowjob
๐ .cumarts
๐ .eroyuri
๐ .eroneko
๐ .erokemonomimi
๐ .erokitsune
๐ .ero
๐ .feet
๐ .erofeet
๐ .feetgif
๐ .femdom
๐ .futanari
๐ .hentai
๐ .holoero
๐ .holo
๐ .keta
๐ .kitsune
๐ .kemonomimi
๐ .pussyart
๐ .pussywankgif
๐ .girl_solo
๐ .girl_solo_gif
๐ .tits
๐ .trap
๐ .yuri
๐ .avatar2
๐ .anal
๐ .bj
๐ .boobs
๐ .classic
๐ .cumsluts
๐ .kuni
๐ .lesbian
๐ .neko
๐ .neko_gif
๐ .ahegao
๐ .bdsm
๐ .cuckold
๐ .cum
๐ .foot
๐ .gangbang
๐ .glasses
๐ .jahy
๐ .masturbation
๐ .nsfw_neko
๐ .orgy
๐ .panties
๐ .tentacles
๐ .thighs
๐ .zettai
`
}

exports.textpro = (prefix) =>{
	return`ใ Textpro Menu ใ
๐ .halloween2 text|text2
๐ .horror text|text2
๐ .game8bit text|text2
๐ .layered text|text2
๐ .glitch2 text|text2
๐ .coolg text|text2
๐ .coolwg text|text2
๐ .realistic text|text2
๐ .space3d text|text2
๐ .gtiktok text|text2
๐ .stone text|text2
๐ .marvel text|text2
๐ .marvel2 text|text2
๐ .pornhub text|text2
๐ .avengers text|text2
๐ .metalr text|text2
๐ .metalg text|text2
๐ .metalg2 text|text2
๐ .halloween2 text|text2
๐ .lion text|text2
๐ .wolf_bw text|text2
๐ .wolf_g text|text2
๐ .ninja text|text2
๐ .3dsteel text|text2
๐ .horror2 text|text2
๐ .lava text|text2
๐ .bagel text|text2
๐ .blackpink text
๐ .rainbow2 text
๐ .water_pipe text
๐ .halloween text
๐ .sketch text
๐ .sircuit text
๐ .discovery text
๐ .metallic2 text
๐ .fiction text
๐ .demon text
๐ .transformer text
๐ .berry text
๐ .thunder text
๐ .magma text
๐ .3dstone text
๐ .neon text
๐ .glitch text
๐ .harry_potter text
๐ .embossed text
๐ .broken text
๐ .papercut text
๐ .gradient text
๐ .glossy text
๐ .watercolor text
๐ .multicolor text
๐ .neon_devil text
๐ .underwater text
๐ .bear text
๐ .wonderfulg text
๐ .christmas text
๐ .neon_light text
๐ .snow text
๐ .cloudsky text
๐ .luxury2 text
๐ .gradient2 text
๐ .summer text
๐ .writing text
๐ .engraved text
๐ .summery text
๐ .3dglue text
๐ .metaldark text
๐ .neonlight text
๐ .oscar text
๐ .minion text
๐ .holographic text
๐ .purple text
๐ .glossyb text
๐ .deluxe2 text
๐ .glossyc text
๐ .fabric text
๐ .neonc text
๐ .newyear text
๐ .newyear2 text
๐ .metals text
๐ .xmas text
๐ .blood text
๐ .darkg text
๐ .joker text
๐ .wicker text
๐ .natural text
๐ .firework text
๐ .skeleton text
๐ .balloon text
๐ .balloon2 text
๐ .balloon3 text
๐ .balloon4 text
๐ .balloon5 text
๐ .balloon6 text
๐ .balloon7 text
๐ .steel text
๐ .gloss text
๐ .denim text
๐ .decorate text
๐ .decorate2 text
๐ .peridot text
๐ .rock text
๐ .glass text
๐ .glass2 text
๐ .glass3 text
๐ .glass4 text
๐ .glass5 text
๐ .glass6 text
๐ .glass7 text
๐ .glass8 text
๐ .captain_as2 text
๐ .robot text
๐ .equalizer text
๐ .toxic text
๐ .sparkling text
๐ .sparkling2 text
๐ .sparkling3 text
๐ .sparkling4 text
๐ .sparkling5 text
๐ .sparkling6 text
๐ .sparkling7 text
๐ .decorative text
๐ .chocolate text
๐ .strawberry text
๐ .koifish text
๐ .bread text
๐ .matrix text
๐ .blood2 text
๐ .neonligth2 text
๐ .thunder2 text
๐ .3dbox text
๐ .neon2 text
๐ .roadw text
๐ .bokeh text
๐ .gneon text
๐ .advanced text
๐ .dropwater text
๐ .wall text
๐ .chrismast text
๐ .honey text
๐ .drug text
๐ .marble text
๐ .marble2 text
๐ .ice text
๐ .juice text
๐ .rusty text
๐ .abstra text
๐ .biscuit text
๐ .wood text
๐ .scifi text
๐ .metalr text
๐ .purpleg text
๐ .shiny text 
๐ .jewelry text
๐ .jewelry2 text
๐ .jewelry3 text
๐ .jewelry4 text
๐ .jewelry5 text
๐ .jewelry6 text
๐ .jewelry7 text
๐ .jewelry8 text
๐ .metalh text
๐ .golden text
๐ .glitter text
๐ .glitter2 text
๐ .glitter3 text
๐ .glitter4 text
๐ .glitter5 text
๐ .glitter6 text
๐ .glitter7 text
๐ .metale text
๐ .carbon text
๐ .candy text
๐ .metalb text
๐ .gemb text
๐ .3dchrome text
๐ .metalb2 text
๐ .metalg text
๐ .metalg text
`
}


exports.other = (prefix) =>{
return`ใ Others ใ
๐ .ttp [text]
๐ .attp [text]
๐ .afk [reason]
๐ .translate kode_bahasa text
๐ .kalkulator [query]
๐ .smeme [text]
๐ .smeme2 [text|text]
๐ .memegen [text|text]
`
}
exports.game = (prefix) =>{
return`ใ Game Menu ใ
๐ .kuismath
๐ .tebakgambar
๐ .tebakkata
๐ .tebakbendera
๐ .tebakkalimat
๐ .tebaksiapa
๐ .tebakkabupaten
๐ .tebakkimia
๐ .tebaklirik
๐ .tebaktebakan
๐ .tekateki
๐ .susunkata
๐ .caklontong
`
}
exports.asupan = (prefix) =>{
return`ใ Asupan Menu ใ
๐ .chika
๐ .delvira
๐ .ayu
๐ .bunga
๐ .aura
๐ .nisa
๐ .ziva
๐ .yana
๐ .viona
๐ .syania
๐ .riri
๐ .syifa
๐ .mama_gina
๐ .alcakenya
๐ .mangayutri
๐ .rikagusriani
๐ .asupan
๐ .bocil
๐ .geayubi
๐ .santuy
๐ .ukhty
๐ .syifa
`
}
exports.cecan = (prefix) =>{
return`ใ Random Cewe ใ
๐ .china 
๐ .indonesia 
๐ .malaysia 
๐ .thailand 
๐ .korea 
๐ .japan 
๐ .vietnam 
๐ .jenni 
๐ .jiso 
๐ .lisa  
๐ .rose
`
}

exports.tqto = () =>{
	return`ใ TqTo ใ 
๐ .My God
๐ .My Parents
๐ .Fatih A.
๐ .Ferdi
๐ .DikaArdnt
๐ .Mhankbarbar
๐ .Nurutomo
๐ .Rashid
๐ .ZeeoneOfc
๐ .Penyedia Module
๐ .And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`ใ Primbon ใ
๐ .nomorhoki 887435047326
๐ .artimimpi [query]
๐ .artinama [query]
๐ .ramaljodoh
๐ .ramaljodohbali
๐ .suamiistri
๐ .ramalcinta
๐ .cocoknama
๐ .pasangan
๐ .jadiannikah
๐ .sifatusaha
๐ .rezeki
๐ .pekerjaan
๐ .nasib
๐ .penyakit
๐ .tarot
๐ .fengshui
๐ .haribaik
๐ .harisangar
๐ .harisial
๐ .nagahari
๐ .arahrezeki
๐ .peruntungan
๐ .weton
๐ .karakter
๐ .keberuntungan
๐ .memancing
๐ .masasubur
๐ .zodiak 
๐ .shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`ใ Telegram Sticker ใ
๐ .awoawo
๐ .benedict
๐ .chat
๐ .dbfly
๐ .dino_kuning
๐ .doge
๐ .gojosatoru
๐ .hope_boy
๐ .jisoo
๐ .kr_robot
๐ .kucing
๐ .lonte
๐ .manusia_lidi
๐ .menjamet
๐ .meow
๐ .nicholas
๐ .patrick
๐ .popoci
๐ .sponsbob
๐ .kawan_sponsbob
๐ .tyni
`}

exports.ephotomenu = (prefix) =>{
	return`ใ Ephoto360 Menu ใ
๐ .youtubegold text
๐ .youtubesilver text
๐ .facebookgold text
๐ .facebooksilver text
๐ .instagramgold text
๐ .instagramsilver text
๐ .twittergold text
๐ .twittersilver text
๐ .retrotext text
๐ .halloweenbats text
๐ .texthalloween text
๐ .cardhalloween text
๐ .birthdaycake text
๐ .thundertext text
๐ .icetext text
๐ .milkcake text
๐ .snowontext text
๐ .metalstar text
๐ .dragonfire text
๐ .zombie3d text
๐ .merrycard text
๐ .generalexam text 
๐ .viettel text
๐ .embroider text
๐ .graffititext text
๐ .graffititext2 text
๐ .graffititext3 text
๐ .covergraffiti text
๐ .moderngold text
๐ .capercut text
๐ .lovecard text
๐ .heartflashlight text
๐ .heartcup text
๐ .sunglightshadow text
๐ .graffiti3d text
๐ .moderngoldsilver text
๐ .moderngold2 text
๐ .moderngold3 text
๐ .fabrictext text
๐ .masteryavatar text
๐ .messagecoffee text
๐ .announofwin text
๐ .writeblood text
๐ .horrorletter text
๐ .writehorror text
๐ .shirtclub text
๐ .angelwing text
๐ .christmasseason text
๐ .projectyasuo text
๐ .lovelycute text
๐ .womansday text
๐ .covergamepubg text
๐ .nameonheart text
๐ .funnyhalloween text
๐ .lightningpubg text
๐ .greetingcardvideo text 
๐ .christmascard text 
๐ .galaxybat text
๐ .writegalaxy text
๐ .starsnight text
๐ .noeltext text
๐ .textcakes text
๐ .pubgbirthday text
๐ .galaxywallpaper text
๐ .pubgglicthvideo text 
๐ .pubgmascotlogo text
๐ .realembroidery text
๐ .vintagetelevision text
๐ .funnyanimations text
๐ .glowingtext text
๐ .textonglass text
๐ .cartoonstyle text
๐ .multicolor text
๐ .watercolor2 text
๐ .textsky text
๐ .summerbeach text
๐ .1917text text
๐ .puppycute text
๐ .rosebirthday text
๐ .steellettering text|text2
๐ .letterstext text|text2
๐ .barcashirt text|text2
๐ .premiercup text|text2
๐ .stylepoligon text|text2
๐ .lifebuoys text|text2
๐ .juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`ใ Logo Menu ใ
๐ .coverbannerlol text|heroes
๐ .pubglogomaker text|style
๐ .colorfulpubg text|color
๐ .astronotspace text|style
๐ .wallpaperaov text|heroes
๐ .maketeamlogo text|style
๐ .circlemarcotteam text|logo
๐ .wallpaperml text|heroes
๐ .dragonballfb text|character
๐ .bannerofaov text|character
๐ .effect3donbeach text|background
๐ .cutegirlgamer text|logo
๐ .footballteam text|logo
๐ .beautifulshimmering text|champion
๐ .pubgcutelogo text|logo
๐ .elegantrotation text|logo
๐ .logogamingassasin text|logo
๐ .introvideomaker text|logo
๐ .gaminglogo4fvs text|logo
๐ .blueneon text|logo
๐ .metalmascot text|logo
๐ .anonymous2 text|style
๐ .lolpentakill text|style
๐ .avatarleagueofking text|style
๐ .avatarff text|character
๐ .overwatchwallpaper text|character
๐ .rovwallpaperhd text|hero
๐ .rovwallpaper text|avatar
๐ .beautifulgalaxylol text|style
๐ .crossfirecover text|character
๐ .lolwallpaper text|wallpaper
๐ .coverdota2 text|heroes
๐ .coverleagueofking text|character
๐ .avatar3q360 text|avatar
๐ .coverofwarface text|character
๐ .newlolavatar text|avatar
๐ .csgocover text|background
๐ .coverloknew text|hero
๐ .coverfblol text|letters
๐ .overwatchcover text|hero
๐ .crossfirestyle text|avatar
๐ .avatarlolbyname text|style
๐ .lolcoverbyname text|avatar
๐ .cyberhunterfb text|character
๐ .coverfreefirefb text|character
๐ .gamingmascot text|style
๐ .coveronepiecefb text|character
๐ .bannerytcsgo text|banner
๐ .fbgamepubgcover text|template
๐ .banneroflol text|text2|banner
๐ .bannerofaov2 text|text2|banner
๐ .teamlogo text|text2|background
๐ .companylogo2 text|text2|background
๐ .companylogo text|text2|background
๐ .gradientlogo text|text2|background
๐ .pencilsketch text|text2|icon
๐ .gunlogogaming text|text2|background
๐ .banneroffreefire text|text2|background
๐ .letterlogos text|text2|thumb
๐ .bannerofoverwatch text|text2|background
๐ .bannerofapex text|text2|background
๐ .bannerofpubg text|text2|background
๐ .mascotstyle text|text2|thumb
๐ .logoaccording text|text2|thumb
๐ .avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`ใ Islamic Menu ใ
๐ .asmaulhusna
๐ .kisahnabi [nabi]
๐ .jadwalshalat [daerah]
๐ .randomquran
๐ .randomquran2
๐ .listsurah
๐ .tafsirsurah [surah]
๐ .alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`ใ Anonymous ใ
๐ .menfess
๐ .anonymous 
๐ .start
๐ .skip [daerah]
๐ .stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`ใ Store Menu ใ
๐ .list
๐ .addlist [key|respond]
๐ .dellist [key]
๐ .update [key|respond]
๐ .store
๐ .kali
๐ .bagi
๐ .tambah
๐ .kurang
๐ .kalkulator
๐ .setproses
๐ .updateproses
๐ .cekproses
๐ .delproses
๐ .setdone
๐ .updatedone
๐ .cekdone
๐ .deldone
๐ .pay
๐ .setcaptionpay
๐ .setpaysewa
๐ .proses
๐ .done
`
}

exports.voiceChange = (prefix) =>{
	return`ใ Voice Change Menu ใ
๐ .bass
๐ .blown
๐ .deep
๐ .earrape
๐ .fast
๐ .fat
๐ .nightcore
๐ .reverse
๐ .robot
๐ .slow
๐ .smooth
๐ .tupai
`
}
exports.storagemenu = (prefix) =>{
	return`ใ Storage Menu ใ
๐ .addvn
๐ .listvn
๐ .delvn
๐ .addimage
๐ .listimage
๐ .delimage
๐ .addvideo
๐ .listvideo
๐ .delvideo
๐ .addstik
๐ .delstik
๐ .liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`ใ Rpg Games ใ
๐ .adventure
๐ .weekly
๐ .use
๐ .transfer
๐ .slot
๐ .shop
๐ .profile
๐ .pasar
๐ .ojek
๐ .open
๐ .nguli
๐ .narik
๐ .nabung
๐ .monthly
๐ .mining
๐ .merampok
๐ .mancing
๐ .kolam
๐ .koboy
๐ .kerja
๐ .kandang
๐ .judi
๐ .inventory
๐ .hourly
๐ .fishop
๐ .feed
๐ .duel
๐ .daily
๐ .craft
๐ .cooldown
๐ .cook
๐ .collect
๐ .chop
๐ .casino
๐ .buy
๐ .bank 
๐ .bansos
๐ .berdagang
๐ .berkebon
๐ .build
`
}

exports.photooxy = (prefix)=>{
	return`ใ Photooxy Menu ใ
๐ .battlegrounds-logo
๐ .battlefield4
๐ .text-8bit
๐ .typography-flower 
๐ .under-flower 
๐ .bevel-text 
๐ .silk-text 
๐ .sweet-andy 
๐ .smoke-typography 
๐ .carvedwood 
๐ .scary-cemetery 
๐ .royallook 
๐ .coffeecup2 
๐ .illuminated 
๐ .harry-potter2 //
๐ .woodblack //
๐ .butterfly-reflection //
๐ .watermelon // 
๐ .striking // 
๐ .metallicglow //
๐ .rainbow-text 
๐ .birthday-cake 
๐ .embroidery // 
๐ .crisp 
๐ .flaming 
๐ .furtext 
๐ .nightsky 
๐ .glow-rainbow 
๐ .gradient-avatar 
๐ .white-cube // 
๐ .honey-text // 
๐ .vintage-style //
๐ .glowing-3d // 
๐ .army-camouflage 
๐ .graffiti-cover 
๐ .rainbow-shine 
๐ .smoky-neon 
๐ .quotes-underfall //
๐ .layered-leaves 
๐ .vector-nature 
๐ .yellow-rose 
๐ .love-text 
๐ .underwater-ocean 
๐ .nature-text 
๐ .wolf-metal 
๐ .summer-text 
๐ .wooden-board //
๐ .flower-heart
๐ .quote-wood 
๐ .love-text 
๐ .quotes-undergrass 
๐ .naruto-banner 
๐ .love-message 
๐ .textoncup2 
๐ .burn-paper 
๐ .smoke 
๐ .romantic-messages 
๐ .shadow-sky 
๐ .text-cup 
๐ .coffecup
`
}
exports.soundmenu = (prefix) =>{
return`ใ Sound Menu ใ
๐ .sound1
๐ .sound2
๐ .sound3
๐ .sound4
๐ .sound5
๐ .sound6
๐ .sound7
๐ .sound8
๐ .sound9
๐ .sound10
๐ .sound11
๐ .sound12
๐ .sound13
๐ .sound14
๐ .sound15
๐ .sound16
๐ .sound17
๐ .sound18 
๐ .sound19
๐ .sound20
๐ .sound21
๐ .sound22
๐ .sound23
๐ .sound24
๐ .sound25
๐ .sound26
๐ .sound27
๐ .sound28
๐ .sound29
๐ .sound30
๐ .sound31
๐ .sound32
๐ .sound33
๐ .sound34
๐ .sound35
๐ .sound36
๐ .sound37
๐ .sound38
๐ .sound39
๐ .sound40
๐ .sound41
๐ .sound42
๐ .sound43
๐ .sound44
๐ .sound45
๐ .sound46
๐ .sound47
๐ .sound48
๐ .sound49
๐ .sound50
๐ .sound51
๐ .sound52
๐ .sound53
๐ .sound54
๐ .sound55
๐ .sound56
๐ .sound57
๐ .sound58
๐ .sound59
๐ .sound60
๐ .sound61
๐ .sound62
๐ .sound63
๐ .sound64
๐ .sound65
๐ .sound66
๐ .sound67
๐ .sound68
๐ .sound69
๐ .sound70
`
}


