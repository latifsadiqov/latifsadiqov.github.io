function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.dogruCevap;
};

function shuffle(array) {
  let length = array.length;
  for (let i = length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

let sorular = [
  new Soru(
    "	Əmәk hüququnun mәnbәlәri içәrisindә әsas yeri nә tutur?",
    {
      a: "AR Respublikasının Konstitusiyası",
      b: "AR Nazirlәr Kabinetinin qәrarları",
      c: "AR Prezidentinin Fәrmanları",
      d: "AR Ali Mәhkәmәsinin Plenim qәrarları",
      e: "AR Konstitusiya Mәhkәmәsinin nәrarları",
    },
    "a"
  ),

  new Soru(
    " Vәtәndaşların sosial tәminat hüququ ilә bağlı müddәalar AR Konstitusiyasının neçәnci maddәsindә öz әksinin tapmışdır?",
    {
      a: "35-­ci maddәsindә",
      b: "36-­ci maddәsindә",
      c: "37-­ci maddәsindә",
      d: "38-ci maddәsindә",
      e: "41-­ci maddәsindә",
    },
    "d"
  ),

  new Soru(
    " Vәtәndaşların istirahәt hüququ ilә bağlı müddәalar AR Konstitusiyasının neçәnci maddәsindә öz әksinin tapmışdır?",
    {
      a: "35-­ci maddәsindә",
      b: "36-­cı maddәsindә",
      c: "37-­ci maddәsindә",
      d: "38-ci maddәsindә",
      e: "41-­ci maddәsindә",
    },
    "c"
  ),
  new Soru(
    " Vәtәndaşların tәtil hüququ ilә bağlı müddәalar AR Konstitusiyasının neçәnci maddәsindә öz әksinin tapmışdır?",
    {
      a: "35-­ci maddәsindә",
      b: "36-­cı maddәsindә",
      c: "37-­ci maddәsindә",
      d: "38-ci maddәsindә",
      e: "41-­ci maddәsindә",
    },
    "b"
  ),
  new Soru(
    " Vәtәndaşların әmәk hüquqları ilә bağlı müddәalar AR Konstitusiyasının neçәnci maddәsindә öz әksinin tapmışdır?",
    {
      a: "35-­ci maddәsindә",
      b: "36-­cı maddәsindә",
      c: "37-­ci maddәsindә",
      d: "38-ci maddәsindә",
      e: "41-­ci maddәsindә",
    },
    "a"
  ),
  new Soru(
    " İşәgötürәnin öz sәlahiyyәti çәrçivәsindә qәbul etdiyi normativ aktlar necә adlanır?",
    {
      a: "lokal normativ aktlar",
      b: "kollektiv müqavilәlәr",
      c: "müәssisәdaxili intizam qaydaları",
      d: "vahid normalar",
      e: "diferensial normalar",
    },
    "a"
  ),
  new Soru(
    " Minimum aylıq әmәk haqqının artırılması haqqında Prezidentin Fәrmanı aşağıdakı tarixlәrdәn hansına tәsәdüf edir?",
    {
      a: "31 yanvar 2011­-ci il",
      b: "05 fevral 2011­-ci il",
      c: "01 sentyabr 2013-­cu il",
      d: "02 fevral 2009-­cu il",
      e: "31 yanvar 2009-­cu il",
    },
    "c"
  ),
  new Soru(
    "İşәgötürәnlә fәrdi qaydada yazılı әmәk müqavilәsi bağlayaraq müvafiq iş yerindә haqqı ödәnilmәklә çalışan fiziki şәxs kimdir?",
    {
      a: "işçi",
      b: "işәgötürәnin razılığı ilә işә başlayan şәxs",
      c: "işәgötürәnin sәrancamı ilә işә başlayan şәxs",
      d: "әmәk kollektivinin üzvlәri",
      e: "müsabiqә yolu işә götürülәn şәxs",
    },
    "c"
  ),
  new Soru(
    "Müәssisәnin lәğv edilmәsi, işçilәrin sayının ixtisar edilmәsi, işçinin әmәk funksiyasını yerinә yetirә bilmәmәsi:",
    {
      a: "әmәk müqavilәsi işәgötürәn tәrәfindәn lәğv edilәmәsinә әsas verir",
      b: "yeni kollektiv müqavilәnin bağlanmasına әsas verir",
      c: "yeni kollektiv sazişin bağlanmasına әsas verir",
      d: "әmәk haqqının azaldılmasına әsas verir",
      e: "heç bir nәticә yaratmır",
    },
    "a"
  ),
  new Soru(
    "İş bilmәk keyfiyyәtinin aşağı olması nәyә sәbәb ola bilәr?",
    {
      a: "işә qәbul edilmәkdәn imtinaya",
      b: "az maaşlı işә qәbul edilmәyә",
      c: "sınaq müddәti ilә işә qәbul edilmәyә",
      d: "bir müddәt әmәk müqavilәsi olmadan işlәmәyә",
      e: "bütün göstәrilәnlәrә",
    },
    "a"
  ),
  new Soru(
    "Sınaq müddәti, yaşayış sahәsinin verilmәsi әmәk müqavilәsinin hansı şәrtlәrinә aiddir?",
    {
      a: "әmәk müqavilәsinin әlavә şәrtlәrinә",
      b: "әmәk müqavilәsinin zәruri şәrtlәrinә",
      c: "әmәk müqavilәsinin qanunvericiliklә müәyyәn olunmuş şәrtlәrinә",
      d: "işәgötürәn vә işçiyә aid mәlumatlara",
      e: "düzgün cavab yoxdur",
    },
    "a"
  ),
  new Soru(
    "Tәrәflәrin razılığı ilә әmәk müqavilәsindә nә dәyişdirilә bilәr ?",
    {
      a: "әmәk müqavilәsinin zәruri şәrtlәri",
      b: "әmәk müqavilәsinin qanunvericiliklә müәyyәn olunmuş şәrtlәri",
      c: "әmәk müqavilәsinin әlavә şәrtlәri",
      d: "işәgötürәn vә işçiyә aid mәlumatlar",
      e: "dәyişdirilә bilmәz",
    },
    "a"
  ),
  new Soru(
    "15 yaşından etibarәn vәtәndaş hansı müqavilәnin tәrәfi kimi çıxış edә bilәr?",
    {
      a: "әmәk müqavilәsinin",
      b: "mülki hüquqi müqavilәnin",
      c: "kollektiv müqavilәnin",
      d: "kollektiv sazişin",
      e: "alqı­satqı müqavilәsinin",
    },
    "a"
  ),
  new Soru(
    "Ailә kәndli tәsәrrüfatlarında vә ailә müәssisәlәrindә әmәk müqavilәsi hansı formada bağlanılır?",
    {
      a: "hәm yazılı, hәm dә şifahi formada",
      b: "ancaq yazılı formada",
      c: "ancaq şifahi formada",
      d: "bu müәssisәlәrdә әmәk müqavilәsinin bağlanılmasının forması nәzәrdә tutulmamışdır",
      e: "yazılı vә ya şifahi formada",
    },
    "a"
  ),
  new Soru(
    "İşçinin әsas vәzifәlәri `Əmək Məcəlləsinin` hansı maddәsindә tәsbit olunmuşdur?",
    {
      a: "10-­cu maddәsindә",
      b: "7-­ci maddәsindә",
      c: "8-­ci maddәsindә",
      d: "9-­cu maddәsindә",
      e: "11-­ci maddәsindә",
    },
    "a"
  ),
  new Soru(
    "әmәk kitabçası işçiyә nә vaxt açılır?",
    {
      a: "işçinin tәşәbbüsü ilә 1 aydan sonra",
      b: "işәgötürәnin tәşәbbüsü ilә 1 aydan sonra",
      c: "sınaq müddәti başa çatdıqdaә",
      d: "5 gündәn artıq işlәdikdә",
      e: "әmәk müqavilәsi imzalandığı andan",
    },
    "d"
  ),
  new Soru(
    "İşәgötürәnin tәşәbbüsü ilә işçi nә qәdәr müddәtә müvәqqәti olaraq başqa işә keçirilә bilәr?",
    {
      a: "1 ay müddәtinә",
      b: "2 ay müddәtinә",
      c: "3 ay müddәtinә",
      d: "5 ay müddәtinә",
      e: "6 ay müddәtinә",
    },
    "a"
  ),
  new Soru(
    "Sınaq müddәtli әmәk müqavilәsi nә qәdәr vaxta bağlana bilәr?",
    {
      a: "5 il",
      b: "5 ay",
      c: "3 ay",
      d: "3 il",
      e: "1 ay",
    },
    "c"
  ),
  new Soru(
    "Vәtәndaş neçә yaşından etibarәn әmәk müqavilәsinin tәrәfi kimi çıxış edә bilәr?",
    {
      a: "14",
      b: "15",
      c: "16",
      d: "17",
      e: "18",
    },
    "b"
  ),
  new Soru(
    "Əmәk müqavilәsi nәdir?",
    {
      a: "işәgötürәnlә әmәk kollektivi arasında yazılı formada bağlanan әmәk, sosial, iqtisadi, mәişәt vә digәr mәsәlәlәri tәnzimlәyәn müqavilәdir",
      b: "işәgötürәnlә işçi arasında fәrdi qaydada bağlanan, әmәk münasibәtlәrinin әsas şәrtlәrini, hüquq vә vәzifәlәrini әks etdirәn yazılı müqavilәdir",
      c: "işәgötürәnlә hәmkarlar ittifaqları tәşkilatı arasında bağlanan, әmәk münasibәtlәrinin әsas şәrtlәrini, hüquq vә vәzifәlәrini әks etdirәn yazılı müqavilәdir",
      d: "müәyyәn peşә, sahә işçilәri üçün әәk şәraitinin yaradılması üzrә öhdәliklәri әks etdirәn müqavilәdir",
      e: "bütün cavablar düzdür",
    },
    "b"
  ),

  // 20 -sual

  new Soru(
    "İşçi barәsindә tәtbiq edilmiş intizam tәnbehi hansı andan qüvvәdәn düşmüş hesab edilir?",
    {
      a: "intizam tәnbehinin qüvvәdә olduğu müddәt qurtardığı andan",
      b: "işçi hәr hansı hәvәslәndirmә vasitәlәri ilә mükafatlandırılarsa, mükafatlandırıldığı gündәn",
      c: "müәssisәdaxili intizam qaydalarına әmәl etdiyi gündәn",
      d: "әmәk funksiyasını yüksәk peşәkarlıqla yerinә yetirdiyi gündәn",
      e: "işәgötürәndәn asılı deyildir",
    },
    "a"
  ),

  new Soru(
    "Aşağıda qeyd olunan hallardan hansının mövcud olduğu müddәt әrzindә işçiyә intizam tәnbehi verilә bilmәz?",
    {
      a: "mәzuniyyәtdә olduqda, ezamiyyәt olduğu müddәtdә, әmәk qabiliyyәtini müvәqqәti itirdikdә",
      b: " mәzuniyyәtdә olduqda",
      c: "ezamiyyәt olduğu müddәtdә",
      d: "әmәk qabiliyyәtini müvәqqәti itirdikdә",
      e: "bütün göstәrilәnlәr",
    },
    "a"
  ),

  new Soru(
    "Müәssisәnin maliyyә­tәsәrrüfat fәaliyyәtinin auditinin (yoxlanılmasının, tәftişinin aparılmasının) nәticәlәri ilә aşkar edilmiş vәzifә hüquqpozması ilә bağlı intizam xәtalarına görә işçiyә hәmin xәtalar törәdildiyi gündәn nә qәdәr müddәt keçdikdәn sonra intizam tәnbehi verilә bilmәz?",
    {
      a: "bir il",
      b: "bir ay",
      c: "üç ay",
      d: "altı ay",
      e: "sәkkiz ay",
    },
    "a"
  ),

  new Soru(
    "әmәk vә icra intizamına әmәl edilmәsindә fәrqlәnmiş işçilәr barәsindә hәvәslәndirmә tәdbirlәri tәtbiq etmәk işәgötürәnin hüququdur, yoxsa vәzifәsi?",
    {
      a: "hüququdur",
      b: "vәzifәsidir",
      c: "hәm hüququdur, hәm dә vәzifәsi",
      d: "yuxarıda sadalananların hamısı",
      e: "hüququ deyil",
    },
    "a"
  ),

  new Soru(
    "әmәk vә icra intizamına әmәl edilmәsindә fәrqlәnmiş işçilәr barәsindә hәvәslәndirmә tәdbirlәri tәtbiq etmәk işәgötürәnin hüququdur, yoxsa vәzifәsi?",
    {
      a: "hüququdur",
      b: "vәzifәsidir",
      c: "hәm hüququdur, hәm dә vәzifәsi",
      d: "yuxarıda sadalananların hamısı",
      e: "hüququ deyil",
    },
    "a"
  ),

  new Soru(
    "Aşağıdakı hansı müәssisәlәrdә әmәk vә icra intizamı intizam nizamnamәlәri ilә tәnzim edilir?",
    {
      a: "avtomobil nәqliyyatı müәssisәlәrindә",
      b: " dәmir yolu vә rabitә müәssisәlәrindә",
      c: "hava nәqliyyatında vә onun xüsusi xidmәt müәssisәlәrindә",
      d: " hәrbi sәnaye müәssisәlәrindә",
      e: "dәniz vә çay nәqliyyatında, habelә balıqçılıq tәsәrrüfatının su nәqliyyatı donanmasında",
    },
    "a"
  ),

  new Soru(
    "İşçini mәcburi әmәyә cәlb edәn tәqsirkar şәxslәr qanunvericiliklә müәyyәn edilmiş qaydada hansı mәsuliyyәtә cәlb oluna bilәr?",
    {
      a: "inzibati vә cinayәt mәsuliyyәtinә",
      b: "yalnız intizam mәsuliyyәtinә",
      c: " yalnız maddi mәsuliyyәtә",
      d: " yalnız inzibati mәsuliyyәtә",
      e: "yalnız cinayәt mәsuliyyәtinә",
    },
    "a"
  ),

  new Soru(
    "Dövlәt әmәk Müfәttişliyinin vәzifәli şәxslәrinin qәrarlarından vә göstәrişlәrindәn şikayәt verilә bilәrmi ?",
    {
      a: "inzibati qaydada vә (vә ya) mәhkәmәyә şikayәt verilә bilәr",
      b: "verilә bilәr dә, verilmәyә dә",
      c: "verilә bilmәz",
      d: "ancaq inzibati qaydada şikayәt verilә bilәr",
      e: " ancaq mәhkәmә qaydasında şikayәt verilә bilәr",
    },
    "a"
  ),

  new Soru(
    "İntizam tәnbehinin qüvvәdә olma müddәti nә qәdәrdir?",
    {
      a: "6 ay",
      b: "3 ay",
      c: "1 il",
      d: "1 ay",
      e: "1 həftə",
    },
    "a"
  ),

  new Soru(
    "İntizam mәsuliyyәtinin subyektlәri kimlәrdir?",
    {
      a: "işçi",
      b: " işәgötürәn",
      c: "işçi vә işәgötürәn",
      d: " işәgötürәn vә hәmkalar ittifaqı",
      e: " işәgötürәn vә әmәk kollektivi",
    },
    "c"
  ),

  new Soru(
    "AR - ­nın orden vә medalları ilә tәltif etmәk, fәxri adlar vermәk hüququ kimә mәxsusdur?",
    {
      a: "AR-­nın Prezidentinә",
      b: "AR-­nın Milli Mәclisinin sәdrinә",
      c: "AR-­nın Baş Nazirinә",
      d: "AR-­nın Daxili İşlәr Nazirinә",
      e: "AR-­nın Xarici İşlәr Nazirinә",
    },
    "a"
  ),

  new Soru(
    "İşәgötürәn hәvәslәndirmә tәdbiri tәtbiq etdikdә hansı orqanın razılığını almalıdır?",
    {
      a: " heç bir orqanın razılığı tәlәb olunmur",
      b: "AR Nazirlәr Kabinetinin",
      c: "AR Maliyyә Nazirliyinin",
      d: "AR Sosial müdafiә Fondunun",
      e: "AR Hәmkarlar İttifaqı Konfederasiyasının",
    },
    "a"
  ),

  new Soru(
    "Hәvәslәndirmә tәdbirlәri işçinin әmәk kitabçasına әlavә edilirmi?",
    {
      a: "әmәk kitabçasına yazılır",
      b: " әmәk kitabçasına yazılmır",
      c: "mükafatın xarakterindәn asılı olaraq әlavә edilir",
      d: "intizam qaydalarına әmәl etmiş işçilәr mükafatlandırıldıqda әlavә edilir",
      e: "iş göstәricidәri yüksәk olan işçilәr mükafatlandırıldıqda әlavә edilir",
    },
    "b"
  ),

  new Soru(
    "Müәssisәdaxili intizam qaydaları kim tәrәfindәn tәsdiqlәnir?",
    {
      a: " işәgötürәnin әmri (sәrәncamı, qәrarı) ilә",
      b: "müәssisәnin mülkiyyәtçisinin qәrarı ilә",
      c: "müәssisә rәhbәrini әvәz edәn müavinin göstәrişi ilә",
      d: "hüquqi şәxsin filial rәhbәrinin göstәrişi ilә",
      e: "hüquqi şәxsin nümyәndәliyinin rәhbәrinin göstәrişi ilә",
    },
    "a"
  ),

  new Soru(
    "Əmәk intizamı hansı işçilәrә şamil edilir?",
    {
      a: "xüsusi kateqoiya işçilәrә",
      b: "müddәtli әmәk müqavilәsi ilә işlәyәn işçilәrә",
      c: "bütün işçilәrә",
      d: "15 gündәn üzürsüz sәbәbdәn iş yerindә olmayan işçilәrә",
      e: "sınaq müddәtindә olan işçilәrә",
    },
    "c"
  ),

  new Soru(
    "İşçi barәsindә hansı hәvәslәndirmә tәdbirlәri tәtbiq edilәrkәn hәmkarlar ittifaqı tәşkilatının razılığı tәlәb olunur?",
    {
      a: "hәmkarlar ittifaqı tәşkilatının razılığı tәlәb olunmur",
      b: "tәşәkkür",
      c: "pul mükafatı",
      d: "yalnız qiymәtli hәdiyyә",
      e: " daha yüksәk mәblәğdә fәrdi sığorta edildikdә",
    },
    "a"
  ),

  new Soru(
    "Müәyyәn peşә, sahә işçilәri üçün әmәk şәraitinin yaradılması, sosial müdafiә üzrә öhdәliklәri әks etdirәn normativ akt:",
    {
      a: " kollektiv sazişdir",
      b: " notariat qaydasında tәsdiq edilәn müqavilәnin",
      c: " fәrdi әmәk müqavilәsinin",
      d: "kollektiv müqavilәnin",
      e: "әmәk kollektivlәri ilә hәmkarlar ittifaqının bağladığı müqavilәdir",
    },
    "a"
  ),

  new Soru(
    "İşәgötürәn vә hәmkәrlar ittifaqı tәşkilatı hansı müqavilәnin tәrәflәridirlәr?",
    {
      a: " kollektiv müqavilәnin",
      b: "notariat qaydasında tәsdiq edilәn müqavilәnin",
      c: " fәrdi әmәk müqavilәsinin",
      d: "kollektiv sazişin",
      e: " әmәk kollektivlәri ilә hәmkarlar ittifaqının bağladığı müqavilәnin",
    },
    "a"
  ),

  new Soru(
    "Kollektiv müqavilә vә sazişlәr haqqında qanun nә vaxt qәbul olunmuşdur?",
    {
      a: "24 may 1996-­cı il",
      b: "30 may 1997-­ci il",
      c: "15 sentyabr 1998-­ci il",
      d: "5 oktyabr 1999-­cu il",
      e: "10 noyabr 2000-­ci il",
    },
    "a"
  ),

  new Soru(
    "Azәrbaycanda ilk kollektiv müqavilә nә vaxt vә kim tәrәfindәn bağlanmaışdır?",
    {
      a: "5 oktyabar 1918-ci il Bakı neft sәnaye fәhlәlәri ilә neft sәnayeçilәri arasında",
      b: "2 oktyabr 1917-­ci il Bakı neft sәnaye fәhlәlәri ilә neft sәnayeçilәri arasında",
      c: "2 oktyabr 1917-­ci il Bakı neft sәnaye fәhlәlәri ilә SSRİ neft sәnayeçilәri arsında",
      d: "10 aprel 1920-­ci il Bakı neft sәnayeçilәri ilә Böyük Britaniya sәnayeçilәri arasında",
      e: "30 may 1920-­ci il Bakı neft sәnayeçilәri ilә Böyük Britaniya sәnayeçilәri arasında",
    },
    "b"
  ),
  // 40 sual

  new Soru(
    "İşçi vә işәgötürәnin maddi mәsuliyyәti nә vaxt yaranır?",
    {
      a: "saxtakarlıq etdikdә",
      b: "işә vaxtında gәlmәdikdә",
      c: "әmәk müqavilәsinin şәrtlәrinә әmәl etmәdikdә",
      d: "әmәk müqavilәsi üzrә öhdәliklәri yerinә yetirәrkәn birinin digәrinә ziyan vurduğu zaman",
      e: "15 gündәn artıq işә gәlmәdikdә",
    },
    "d"
  ),

  new Soru(
    "Aşağıdakılardan hansı qәsdin formalarıdır?",
    {
      a: " düzünә qәsd",
      b: "yanakı qәsd",
      c: "düzünә vә yanakı qәsd",
      d: "ikitәrәfli qәsd",
      e: "birtәrәfliqәsd",
    },
    "a"
  ),

  new Soru(
    "İstehsalatda әmәk xәsarәti nәtcәsindә zәrәr çәkmiş işçiyә dәymiş zәrәrin әvәzi hansı qaydada ödәnilir?",
    {
      a: "aliment formasında",
      b: "pensiya formasında",
      c: " aylıq ödәnişlәr yolu ilә",
      d: "icbari sığorta formasında",
      e: "düzgün cavab yoxdur",
    },
    "c"
  ),

  new Soru(
    "Dәymiş maddi ziyanın ödәnilmәsi ilә bağlı işçi ilk olaraq hansı addımı atmalıdır?",
    {
      a: " işәgötürәnә yazılı әrizә ilә müraciәt etmәlidir",
      b: " iddia әrizәsi ilә mәhkәmәyә müraciәt etmәlidir",
      c: " hәmkarlar ittifaqına müraciәt etmәlidir",
      d: "Dövlәt Әmәk Müfәttişliyinә müraciәt etmәlidir",
      e: "mәşğulluq idarәsinә müraciәt etmәlidir",
    },
    "a"
  ),

  new Soru(
    "İşәgötürәn müvafiq әmәk şәraiti yaradaraq işçiyә öz şәxsi alәtlәrini müәssisәyә gәtirmәyә icazә vermәyibsә, lakin işçi bunun әksinә olaraq әmәk funksiyasının icrası üçün hәmin әşyaları gәtirib ondan istifadә edibsә, bu halda işçinin әmlakına ziyan vurularsa işәgötürәn bu halda maddi mәsuliyyәt daşıyırmı?",
    {
      a: " qәsdәn ziyan vurduqda müәyyәn olunmuş qaydada maddi mәsuliyyәt daşıyır",
      b: "ehtiyatsızlıqdan ziyan vurduqda mәhdud maddi mәsuliyyәt daşıya bilәr",
      c: "mәhkәmәnin vә dövlәt әmәk müfәttişliyinin qәrarından asılıdır",
      d: "Nazirlәr Kabinetindәn asılıdır",
      e: "xeyr, mәsuliyyәt daşımır",
    },
    "a"
  ),

  new Soru(
    "İşçi ona vurulmuş maddi ziyanın ödәnilmәsi barәdә işәgötürәnә әrizә ilә müraciәt etdikdә, işәgötürәn hansı müddәtdә müvafiq qәrar qәbul    edәrәk ona yazılı cavab vermәlidir?",
    {
      a: "15 gün müddәtindә",
      b: "3 gün müddәtindә",
      c: "5 gün müddәtindә",
      d: "7 gün müddәtindә",
      e: "9 gün müddәtindә",
    },
    "a"
  ),

  new Soru(
    "Tam maddi mәsuliyyәt barәdә yazılı müqavilәlәr bağlanmalı olan işçilәrin vә işlәrin (xidmәtlәrin) siyahısı kim vә ya hansı orqan tәrәfindәn müәyyәn edilir?",
    {
      a: "işәgötürәn",
      b: "hәmkarlar ittifaqı tәşkilatı",
      c: "Azәrbaycan Respublikası Nazirlәr Kabineti",
      d: "Azәrbaycan Respublikası Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi",
      e: "Mәhkәmә",
    },
    "a"
  ),

  new Soru(
    "Dәymiş ziyanın mәblәği necә müәyyәn edilir ?",
    {
      a: "faktik itkilәr üzrә",
      b: "faktik itkilәrlә yanaşı, әlavә xәrclәrlә",
      c: "yalnız әsas fonda dәyәn faktik itkilәr üzrә",
      d: "işәgötürәnin dövriyyә vasitәlәrinin faktik itkilәri üzrә",
      e: "mәhkәmә tәrәfindәn",
    },
    "a"
  ),

  new Soru(
    "İşәgötürәnә vurulan ziyanın mәblәği işçinin orta әmәk haqqından çox deyildirsә, onun tutulması necә hәyata keçirilir?",
    {
      a: "işәgötürәnin әmri (sәrәncamı, qәrarı) ilә",
      b: "mәhkәmәnin qәrarı ilә",
      c: "işçinin razılığı ilә",
      d: "işçinin vә işәgötürәnin qarşılıqlı razılığı ilә",
      e: "işәgötürәnin istәyi ilә",
    },
    "a"
  ),

  new Soru(
    "Mәhkәmә tәqsirlilik dәrәcәsini, konkret şәraiti, işçinin maddi vәziyyәtini vә iş üzrә әhәmiyyәt kәsb edәn digәr halları nәzәrә alaraq müәyyәn olunmuş ziyanın mәblәğini azalda bilәrmi?",
    {
      a: "bәli, azalda bilәr",
      b: "xeyr, azalda bilmәz",
      c: "işәgötürәnin razılığı olduğu tәqdirdә azalda bilәr",
      d: "işәgötürәnin razılığı yoxdursa, azalda bilmәz",
      e: "hәmkarlar ittifaqının razılığı olduqda",
    },
    "a"
  ),

  new Soru(
    "Bәdbәxt hadisәnin tәhqiqatı başa çatdıqdan sonra işәgötürәn tәrәfindәn neçә gündәn gec olmayaraq qanunvericiliklә müәyyәn olunmuş qaydada müvafiq akt tәrtib edilmәli vә onun bir nüsxәsi mütlәq zәrәrçәkәn işçiyә tәqdimat olunmalıdır?",
    {
      a: "bir gündәn gec olmayaraq",
      b: "iki gündәn gec olmayaraq",
      c: "üç gündәn gec olmayaraq",
      d: "dörd gündәn gec olmayaraq",
      e: "beş gündәn gec olmayaraq",
    },
    "a"
  ),

  new Soru(
    "İşçinin vә işәgötürәnin maddi mәsuliyyәti hansı andan başlayır?",
    {
      a: "birinin digәrinә ziyan vurduğu aşkar edildiyi andan",
      b: "tәrәflәrin tәqsiri olduğu halda",
      c: "tәrәflәrin әmәlindә әmәk әmlak hüquq pozuntusunun әlamәtlәri mövcud olduqda",
      d: "tәqsirkarın qanuna zidd әmәli ilә bu әmәlin nәticәsi arasında sәbәbli әlaqә olduqda",
      e: "tәqsirkarın әmәli qanuna zidd olduqda",
    },
    "a"
  ),

  new Soru(
    "İşçi hüququnun pozulması ilә bağlı hansı müddәt әrzindә mәhkәmәyә müraciәt edә bilәr?",
    {
      a: "hüququnun pozulduğunu aşkar etdiyi gündәn 1 il müddәtindә",
      b: "hüququnun pozulduğunu aşkar etdiyi gündәn 1 ay müddәtindә",
      c: "hüququnun pozulduğunu aşkar etdiyi gündәn 1 hәftә müddәtindә",
      d: "hüququnun pozulduğunu aşkar etdiyi gündәn 15 gün müddәtindә",
      e: "hüququnun pozulduğunu aşkar etdiyi gündәn 10 gün müddәtindә",
    },
    "a"
  ),

  new Soru(
    "İşәgötürәn maddi ziyanın vurlması ilә bağlı hansı müddәt әrzindә mәhkәmәyә müraciәt edә bilәr?",
    {
      a: "ziyanın vurulmasını aşkar etdiyi gündәn 1 il müddәtindә",
      b: "ziyanın vurulmasını aşkar etdiyi gündәn 1 hәftә müddәtindә",
      c: " ziyanın vurulmasını aşkar etdiyi gündәn 1 ay müddәtindә",
      d: "ziyanın vurulmasını aşkar etdiyi gündәn 15 gün müddәtindә",
      e: "ziyanın vurulmasını aşkar etdiyi gündәn 10 gün müddәtindә",
    },
    "a"
  ),

  new Soru(
    "İşәgötürәnә ziyan vurmaqda tәqsirli olan işçi cinayәt mәsuliyyәtinә cәlb edilmişә, vurduğu ziyanı ödәmәlidirmi?",
    {
      a: " cinayәt, habelә digәr mәsuliyyәtә cәlb edilmәsindәn asılı olmayaraq müәyyәn edilmiş qaydada maddi ziyanın mәblәğini ödәmәlidir",
      b: "xeyr, ödәmәmәlidir",
      c: " ödәyә dә bilәr, ödәmәyә dә",
      d: " işәgötürәnin mülahizәsindәn asılıdır",
      e: "hәmkarlar tәşkilatının razılığı ilә",
    },
    "a"
  ),

  new Soru(
    "İşәgötürәn ona vurulan ziyanı müәyyәn etmәk üçün ilk olaraq hansı addımı atmalıdır?",
    {
      a: "hәmkarlar ittifaqına müraciәt etmәlidir",
      b: "işçidәn yazılı izahat almalıdır",
      c: " işçinin әmәk müqavilәsinә xitam vermәlidir",
      d: " birbaşa mәhkәmәyә müraciәt etmәlidir",
      e: "işçi ilә söhbәt etmәlidir",
    },
    "b"
  ),

  new Soru(
    "İşәgötürәn dәymiş maddi ziyanın ödәnilmәsi ilә bağlı işçinin әrizәsinә nә qәdәr müddәtdә baxmalıdır?",
    {
      a: "1 hәftәyә",
      b: "1 ay әrzindә",
      c: "15 gün әrzindә",
      d: "5 gün әrzindә",
      e: "3 gün әrzindә",
    },
    "c"
  ),

  new Soru(
    "Əmәk hüququ hüququn aşağıdakı hansı sahәlәri ilә әlaqәdar deyildir?",
    {
      a: "cinayәt hüququ",
      b: "konstitusiya hüququ",
      c: "mülki hüquq",
      d: "inzibati hüquq",
      e: "sosial tәminat hüququ",
    },
    "a"
  ),

  new Soru(
    "Əmәk hüququqda hüquqi fakt nәyi әks etdirir?",
    {
      a: "fors­major hadisәlәri",
      b: "hadisәlәr vә hәrәkәtlәri",
      c: "әmәk hüquq münasibәtlirnin yaranmasını, dәyişdirilmәsini vә xitamını",
      d: "әmәk hüquq münasibәtәlәrdә hüquqauyğyn vә hüquqazidd hәrәkәtlәri",
      e: "nisbi hadisә vә hәrәkәtlәri",
    },
    "c"
  ),

  new Soru(
    "AR-nın Əmәk Mәcәllәsinin 12-­ci maddәsi nәyi müәyyәn edir?",
    {
      a: "işәgötürәnin vәzifәlәrini",
      b: "işçinin vәzifәlәrini",
      c: "işәgötürәnin hüquqlarını      ",
      d: "işçinin hüquqlarını",
      e: "işçinin vә işәgötürәnin әsas hüquq vә vәzifәlәrini",
    },
    "a"
  ),

  // 60 - sual

  new Soru(
    "AR-nın Əmәk Mәcәllәsinin 10-­cu maddәsi nәyi müәyyәn edir?",
    {
      a: "işәgötürәnin vәzifәlәrini",
      b: "işçinin vәzifәlәrini",
      c: "işәgötürәnin hüquqlarını",
      d: "işçinin hüquqlarını",
      e: "işçinin vә işәgötürәnin әsas hüquq vә vәzifәlәrini",
    },
    "b"
  ),

  new Soru(
    "Əmәk hüququ münasibәtinin mәzmununu nә tәşkil edir?",
    {
      a: "işәgötürәnin vәzifәlәri",
      b: "işçinin vәzifәlәri",
      c: "işçinin vә işәgötürәnin hüquq vә vәzifәlәri",
      d: "işәgötürәnin hüquqları",
      e: "işçinin hüquqları",
    },
    "c"
  ),

  new Soru(
    "İşçilәrin tәqsiri olmadan müәssisәlәrdә vә ya bilavasitә iş yerlәrindә әmәyin mühafizәsi qaydalarının pozulması nәticәsindә işin    dayandırıldığı müddәtdә işçilәr üçün hansı tәminatlar nәzәrdә tutulur?",
    {
      a: "orta әmәk haqqı saxlanılır",
      b: "heç bir tәminat nәzәrdә tutulmur",
      c: "iş yeri saxlanılır",
      d: "işçinin vәzifәsi (peşәsi)saxlanılır",
      e: "işçinin aylıq әmәk haqqı saxlanılır",
    },
    "a"
  ),

  new Soru(
    "İşәgötürәn әmәyin mühafizәsi xidmәtini yenidәn tәşkil vә ya lәğv edә bilәrmi?",
    {
      a: "Dövlәt Әmәk Müfәttişliyinin razılığı ilә yenidәn tәşkil edilә vә ya lәğv edilә bilәr",
      b: "hәmkarlar ittifaqı tәşkilatının razılığı ilә yenidәn tәşkil edilә vә ya lәğv edilә bilәr",
      c: "Azәrbaycan Respublikası Nazirlәr Kabinetinin qәrarı ilә yenidәn tәşkil edilә vә ya lәğv edilә bilәr",
      d: "Azәrbaycan Respublikası Fövqәladә Hallar Nazirliyinin razılığı ilә yenidәn tәşkil edilә vә ya lәğv edilә bilәr",
      e: "Azәrbaycan Respublikası Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyinin qәrarı ilә yenidәn tәşkil edilә vә ya lәğv edilә bilәr",
    },
    "a"
  ),

  new Soru(
    "İqtisadiyyatın bütün sahәlәrinin müәssisәlәrindә işçilәrin sayı neçә nәfәrdәn çox olduqda müәssisә rәhbәrinin (baş mühәndisin) әmәyin mühafizәsi üzrә müavini vәzifәsi tәsis edilir?",
    {
      a: "500 nәfәrdәn",
      b: "200 nәfәrdәn",
      c: "300 nәfәrdәn",
      d: "400 nәfәrdәn",
      e: "100 nәfәrdәn",
    },
    "a"
  ),

  new Soru(
    "Tәhqiqat komissiyası tәrәfindәn baş vermiş bәdbәxt hadisәnin tәhqiqi nә qәdәr müddәtә aparılır?",
    {
      a: " 5 gün müddәtindә",
      b: "10 gün müddәtindә",
      c: "15 gün müddәtindә",
      d: "20 gün müddәtindә",
      e: "1 ay müddәtindә",
    },
    "d"
  ),

  new Soru(
    "AR-­nın әmәk mәcәllәsinin 216-­cı maddәsi nәyi nәzәrdә tutur?",
    {
      a: "işçilәrin hüquqlarını",
      b: " işәgötürәnin hüquqlarını",
      c: "әmәyin müzafizәsi üzrә işçilәrin vәzifәlәrini",
      d: "әmәk müqavilәsinin bağlanması qaydalarını",
      e: "kollektiv müqavilәnin bağlanması qaydalarını",
    },
    "c"
  ),

  new Soru(
    "Soyuq vә isti hava şәraitinə görə iş dayandırıldıqda işçilәrә әmәk haqqı ödәnilirmi?",
    {
      a: "boşdayanma vaxtının haqqı işçinin tәqsiri üzündәn baş vermәyәn boşdayanma kimi, tarif maaşının üçdә iki hissәsindәn az olmayaraq ödәnilir",
      b: "xeyr, ödәnilmir",
      c: "işәgötürәnin mülahizәsindәn asılıdır",
      d: "mәhkәmә qәrarı әsasında tam ödәnilir",
      e: "boşdayanma vaxtının haqqı işçinin tәqsiri üzündәn baş vermәyәn boşdayanma kimi, tarif maaşının 50% - ­dәn az olmayaraq ödәnilir",
    },
    "a"
  ),

  new Soru(
    "İşçilәr aşağı temperatur vә şiddәtli külәk şәraitindә açıq havada, habelә ilin soyuq vaxtlarında qızdırılmayan qapalı binalarda işlәyәrkәn onlara....",
    {
      a: "qızınmaq üçün fasilәlәr verilir vә ya iş dayandırılır",
      b: "ancaq qızınmaq üçün fasilәlәr verilir",
      c: "iş dayandırıla da bilәr, dayandırılmaya da",
      d: "qızınmaq üçün fasilәlәr verilir, iş dayandırılır, iş yeri, vәzifәsi (peşәsi)vә orta әmәk haqqı saxlanılır",
      e: "işәgötürәnin mülahizәsindәn asılıdır",
    },
    "a"
  ),

  new Soru(
    "әmәyin mühafizәsi üzrә müvәkkilin öz vәzifәlәrini yerinә yetirmәsi üçün işәgötürәn ona hәr hәftә orta әmәk haqqını ödәmәklә iş vaxtında azı nә qәdәr vaxt ayırır?",
    {
      a: "azı 30 dәqiqә",
      b: "azı 2 saat",
      c: "azı 1 saat",
      d: "azı 3 saat",
      e: "azı 4 saat",
    },
    "b"
  ),

  new Soru(
    "Bütün işçilәrin әmәyinin tәşkilinә aid normalar әmәk hüququnun hansı hissәsinә daxildir?",
    {
      a: "әmәk hüququnun xüsusi hissәsinә",
      b: "әmәk hüququnun ümumi hissәsinә",
      c: "әmәk hüququnun ümumi vә xüsusi hissәsinә",
      d: "әmәk hüququnun predmetinә",
      e: "әmәk hüququnun metoduna",
    },
    "b"
  ),

  new Soru(
    "Sosial tәminat hüququ ilә hansı hüquq sahәsi arasında müәyyәn yaxınlıq var?",
    {
      a: "mülki hüquq",
      b: " inzibati hüquq",
      c: "әmәk hüququ",
      d: "mülki hüquq vә inzibati hüquq",
      e: "iqtisadi hüquq",
    },
    "c"
  ),

  new Soru(
    "İntizam tәnbeh tәdbirlәri nә vaxt tәtәbiq olunur?",
    {
      a: "әmәk vәzifәlәrinin pozulmasına görә",
      b: "mütәmadi işә gecikdikdә",
      c: "fәrdi tәtil elan etdikdә",
      d: "işә sәrxoş gәldikdә",
      e: "işdә tәhlükәli vәziyyәt yaratdıqda",
    },
    "a"
  ),

  new Soru(
    "İmperativ, dispozitiv, tövsiyyә xarakterli normalar nәyi әks etdirir?",
    {
      a: "sosial­-mәdәni hüquq normalarını",
      b: "inzibati hüquq normalarını",
      c: " әmәk hüquq normalarını",
      d: "mülki hüquq normalarını",
      e: "sosial-­iqtisadi hüquq normalarını",
    },
    "c"
  ),

  new Soru(
    "Lokal tәnzimlәnmәyә aiddir:",
    {
      a: "әmәyin tәnzimlәnmәsinin yerli icra hakimiyyәti orqanı tәrәfindәn hәyata keçirilmәsi",
      b: "әmәyin tәnzimlәnmәsinin xüsusiyyәtlәri nәzәrә alınmaqla tәşkilatın hüdudları daxilindә hәyata keçirilmәsi",
      c: "әmәyin tәnzimlәnmәsinin Milli Mәclis tәrәfindәn hәyata keçirilmәsi",
      d: "әmәyin tәnzimlәnmәsinin Nazirlәr Kabineti tәrәfindәn hәyata keçirilmәsi",
      e: " bütün cavablar düzdür",
    },
    "b"
  ),

  new Soru(
    "Əmәk Mәcәllәsi şamil edilmir:",
    {
      a: "hәrbi qulluqçulara",
      b: "Milli Mәclisin deputatlarına",
      c: "mәhkәmә hakimlәrinә",
      d: "dövlәt qulluğunda çalışanlara",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),

  new Soru(
    "Aşağıdakılardan hansı işәgötürәnlә peşә (ixtisas) almaq istәyәn şәxs arasında әmәk münasibәtlәrindәn әvvәl vә ya onu müşayiәt edәn zaman yaranan münasibәtlәrdir?",
    {
      a: "yeni peşә ixtisasının öyrәnilmәsi zamanı yaranan münasibәtlәr",
      b: "işәdüzәltmә üzrә münasibәtlәr",
      c: "әmәk mübahisәlәrinin hәlli üzrә münasibәtlәr",
      d: " işәgötürәn vә işçinin qarşılıqla maddi mәsuliyyәtini üzrә yaranan münasibәtlәr",
      e: "işçilәrin bilavasitә istehsalatda peşә hazırlığı vә ixtisasın artırılması üzrә münasibәtlәr",
    },
    "e"
  ),

  new Soru(
    "İşәgötürәnlә әmәk kollektivinin mәnafeyini tәmsil edən hәmkarlar komitәsi arasında әmәyin idarә olunması üzrә yaranan münasibәtlәrә aşağıdakılardan hansı aiddir?",
    {
      a: "işәdüzәltmә üzrә münasibәtlәr",
      b: "işçilәrin bilavasitә istehsalatda peşә hazırlığı vә ixtisasın artırılması üzrә münasibәtlәr",
      c: " işәgötürәn vә işçinin qarşılıqla maddi mәsuliyyәtini üzrә yaranan münasibәtlәr",
      d: "әmәk mübahisәlәrinin hәlli üzrә münasibәtlәr",
      e: "tәşktilati-­idarәçilik münasibәtlәri",
    },
    "e"
  ),

  // 80 - sual

  new Soru(
    "Əmәyin ödәnilmәsi, әmәk münasibәtlәrinin iştirakçılarının qarşılıqlı maddi mәsuliyyәti әmәk münasibәtlәrindә әmlak elementi kimi nәyi ifadә edir?",
    {
      a: "әmәk münasibәtlәrinin iştirakçılarının maddi mәsuliyyәtini",
      b: "әmәyin natura formasında ödәnilmәsini",
      c: "kompensasiyanın verilmәsini",
      d: "muzdlu әmәyi",
      e: "görülәn işә görә pulun ödәnilmәsini",
    },
    "d"
  ),

  new Soru(
    "Fiziki şәxsin işәgötürәnlә bağlanmış әmәk müqavilәsi üzrә işçi öz әmәk qabiliyyәtinin realizәsi ilә bağlı işin yerinә yetirilmәsi zamanı hansı münasibәtlәr yaranır?",
    {
      a: "inzibati münasibәtlәr",
      b: "әmәk vә inzibati münasibәtlәr",
      c: "sosial münasibәtlәr",
      d: "әmәk münasibәtlәri",
      e: " iqtisadi münasibәtlәr",
    },
    "d"
  ),

  new Soru(
    "Əmәk hüququnun ümumi hissәsinә hansı normalar daxildir?",
    {
      a: "bütün işçilәrin vә işәgötürәnlәrin әmәyinin tәşkilinә aid normalar",
      b: "işәgötürәnlәrin vә hәmkarlar ittifaqının әmәyinin tәşkilinә aid normalar",
      c: "әmәk kollektivlәrinin vә işәgötürәnlәrin әmәyinin tәşkilinә aid normalar",
      d: "bütün işçilәrin әmәyinin tәşkilinә aid normalar",
      e: "düzgün cavab yoxdur",
    },
    "d"
  ),

  new Soru(
    "Müsәtәqil hüquq sahәsi kimi әmәk hüququ hansı hissәlәrdәn ibarәtdir?",
    {
      a: "ümumi hissәdәn",
      b: "xüsusi hissәdәn",
      c: "ümumi vә xüsusi hissәdәn",
      d: "institutsional hissәdәn",
      e: "ümumi, xüsusi vә institutsional hissәdәn",
    },
    "c"
  ),

  new Soru(
    "Əmәk hüququ ilә hansı hüquq sahәlәri arasında müәyyәn yaxınlıq vardır?",
    {
      a: "sosial tәminat hüququ",
      b: "mülki hüquq",
      c: "inzibati hüquq",
      d: "sosial tәminat hüququ, mülki hüquq vә inzibati hüquq",
      e: "iqtisadi hüquq",
    },
    "d"
  ),

  new Soru(
    "AR-nın Əmәk Mәcәllәsi neçәnci ildә qәbul olunmuşdur?",
    {
      a: "1999­-cu ildә",
      b: "1998-­ci ildә",
      c: "1997-­ci ildә",
      d: "2000-­ci ildә",
      e: "2001-­ci ildә",
    },
    "a"
  ),

  new Soru(
    "Əmәk hüququnun predmetini hansı münasibәtlәr tәşkil edir?",
    {
      a: "bütün ictimai münasibәtlәr",
      b: "bütün әmәk münasibәtlәri",
      c: "ictimai münasibәtlәrdәn irәli gәlәn törәmә münasibәtlәr",
      d: "işçi ilә işәgötürәnin әmәk münasibәtlәri",
      e: "әmәk münasibәtlәri vә onlarla bilavasitә sıx bağlı olan münasibәtlәr vә ya әmәk münasibәtlәrindәn törәmә münasibәtlәr",
    },
    "e"
  ),

  new Soru(
    "Hüququn sahәlәrә vә institutlara ayrılmasının başlıca meyarları hansılardır?",
    {
      a: "predmeti",
      b: "metodu",
      c: "hüquqi tәnzimlәnmәsi",
      d: "predmeti vә metodu",
      e: "hüquq sistemi",
    },
    "d"
  ),

  new Soru(
    "AR-nın Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyinin Dövlәt Әmәk Müfәttişliyi nәyә nәzarәt edir?",
    {
      a: "әmәyin mühafizәsi qaydalarına әmәl edilmәsinә",
      b: "әmәyin düzgün tәşkilinә",
      c: "nizamintizam qaydalarına",
      d: "әmәyin ödәnilmәsinә",
      e: "tәtilin keçirilmәsinә",
    },
    "a"
  ),

  new Soru(
    "Әmәk müqavilәsi, iş vaxtı, istirahәt vaxtı, әmәk haqqı, әmәk intizamı vә maddi mәsuliyyәt, әmyәin mühafizәsinә aid normalar әmәk hüququnun hansı hissәsinә daxildir?",
    {
      a: "әmәk hüququnun ümumi hissәsinә",
      b: "әmәk hüququnun xüsusi hissәsinә",
      c: "әmәk hüququnun predmetinә",
      d: "әmәk hüququnun ümumi vә xüsusi hissәsinә",
      e: "әmәk hüququnun metoduna",
    },
    "b"
  ),

  new Soru(
    "AR-nın Konstitusiyasının 35-ci maddәsinә әsasәn AR-da әmәyin azadlığı necә bәyan edilir?",
    {
      a: "әmәk fәrdi vә ictimai rifahın әsasıdır",
      b: "hәr kәsin sәrәbәst surәtdә özünә fәaliyyәt növü, reşә, mәşğuliyyәt vә iş yeri seçmәk hüququ vardır",
      c: "heç kәs zorla işlәdilә bilmәz",
      d: "heç kәs әmәk müqavilәsi bağlamağa mәcbur edilә bilmәz",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),

  new Soru(
    "İş vaxtının cәmlәnmiş uçotu zamanı istirahәt günlәri necә verilir?",
    {
      a: "Hәmkarlar ittifaqı tәşkilatı ilә razılaşdırılmış növbә cәdvәlinә uyğun olaraq",
      b: "AR-­sı Nazirlәr Kabinetinin qәrarına uyğun olaraq verilir",
      c: "Hәmkarlar ittifaqı tәşkilatının qәrarı ilә növbә cәdvәlinә әsasәn",
      d: "Hәmkarlar ittifaqı tәşkilatı ilә dövlәt әmәk müfәttişliyinin razılığı ilә müәyyәn edilir",
      e: "İşәgötürәnin mülahizәsi ilә",
    },
    "a"
  ),

  new Soru(
    "Hәftәlik fasilәsiz istirahәt müddәti neçә saatdan az olmamalıdır?",
    {
      a: "bütün cavablar sәhvdir",
      b: "40 saatdan",
      c: "41 saatdan",
      d: "42 saatdan",
      e: "yuxarıda sadalananlardan heç biri düzgün deyildir",
    },
    "a"
  ),

  new Soru(
    "İstirahәt vә nahar fasilәlәrindәn işçi öz mülahizәsi ilә istәdiyi kimi istifadә edә bilәrmi?",
    {
      a: "edә bilәr",
      b: "edә bilmәz",
      c: "edә dә bilәr, etmәyә dә",
      d: "işәgötürәnin mülahizәsindәn asılıdır",
      e: "hәmkarlar ittifaqı tәşkilatının razılığından asılıdır",
    },
    "a"
  ),

  new Soru(
    "Növbәli iş vaxtı rejimindә işlәyәn işçilәrin istirahәt vaxtının müddәti nә ilә tәnzimlәnir?",
    {
      a: "әmәk müqavilәsi ilә",
      b: "kollektiv müqavilә ilә",
      c: "hәm әmәk, hәm dә kollektiv müqavilә ilә",
      d: "növbә cәdvәllәri ilә",
      e: "müәssisәdaxili intizam qaydaları ilә",
    },
    "d"
  ),

  new Soru(
    "Fasilәnin verilmәsi vaxtı vә davamiyyәti nә ilә müәyyәn edilir?",
    {
      a: "әmәk müqavilәsi ilә",
      b: "kollektiv müqavilә ilә",
      c: "müәssisәdaxili intizam qaydaları ilә",
      d: "bütün göstәrilәnlәr",
      e: "növbә cәdvәllәri ilә",
    },
    "d"
  ),

  new Soru(
    "İşçinin iş vaxtından artıq işlәrә cәlb olunması üçün aşağıdakılardan kimin vә ya hansı orqanın razılığı tәlәb olunur?",
    {
      a: "Nazirlәr Kabinetinin",
      b: "AR-­sı Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyinin",
      c: "Hәmkarlar ittifaqı tәşkilatının",
      d: "Dövlәt Әmәk Müfәttişliyinin",
      e: "sadalananlardan heç birinin",
    },
    "d"
  ),

  new Soru(
    "Gecә vaxtı işlәrinә cәlb edilmәsinә yol verilmәyәn işçilәrin dairәsini göstәrin:",
    {
      a: "hamilә qadınlar",
      b: "hamilә vә üç yaşınadәk uşağı olan qadınlar",
      c: "yaşı 18-­dәn az olan işçilәr",
      d: "әlillәr",
      e: "hamilә vә üç yaşınadәk uşağı olan qadınlar, yaşı 18­-dәn az olan işçilәr",
    },
    "e"
  ),

  new Soru(
    "İş vaxtının cәmlәnmiş uçotunun tәtbiqi qaydası nә ilә tәnzimlәnir?",
    {
      a: "kollektiv müqavilә ilә",
      b: "әmәk müqavilәsi ilә",
      c: "әmәk müqavilәsi vә müәssisәdә iş vaxtı rejimini müәyyәn edәn qaydalarla",
      d: "hәm kollektiv, hәm dә әmәk müqavilәlәri ilә",
      e: "kollektiv müqavilә, әmәk müqavilәsi vә müәssisәdә iş vaxtı rejimini müәyyәn edәn qaydalarla",
    },
    "e"
  ),

  /// 100 - sual

  new Soru(
    "Hәr dәfә qan vә ya qan komponentlәrini pulsuz (әvәzsiz) verәn donorlara hansı tәminatlar verilir?",
    {
      a: "әmәk haqqı saxlanılmaqla әlavә istirahәt günü verilir",
      b: "heç nә verilmir",
      c: "ancaq iş yeri vә vәzifәsi saxlanılır",
      d: "ancaq hәm gün üçün әmәk haqqı saxlanılmadan әlavә istirahәt günü verilir",
      e: "ancaq әmәk haqqı saxlanılır",
    },
    "a"
  ),

  new Soru(
    "İş vaxtının cәmlәnmiş uçotu zamanı gündәlik işin (növbәnin) müddәti neçә saatdan çox ola bilmәz?",
    {
      a: "8 saatdan",
      b: "6 saatdan",
      c: "7 saatdan",
      d: "12 saatdan",
      e: "10 saatdan",
    },
    "d"
  ),

  new Soru(
    "İşçilәr üçün müәyyәn olunmuş iş vaxtı rejimi müәssisәnin iş rejimi ilә üst­üstә düşmәyә bilәrmi?",
    {
      a: "bәli, üst-­üstә düşmәyә bilәr",
      b: "yox, üst­ü-stә düşmәlidir",
      c: "işәgötürәnin mülahizәsindәn asılıdır",
      d: "hәmkarlar ittifaqı tәşkilatının razılığı olduğu tәqdirdә üst-­üstә düşmәyә bilәr",
      e: "әmәk kollektivinin ümumi yığıncağının qәrarından asılıdır",
    },
    "a"
  ),

  new Soru(
    "Konkret işçi üçün fәrdi iş vaxtı müәyyәn edilә bilәrmi?",
    {
      a: "işәgötürәnin tәşәbbüsü ilә müәyyәn edilә bilәr",
      b: "edilә bilmәz",
      c: "işçinin xahişi ilә müәyyәn edilә bilәr",
      d: "әmәk müqavilәsi tәrәflәrinin razılığı ilә müәyyәn edilә bilәr",
      e: "hәmkarlar ittifaqı ilә razılaşdırıldıqdan sonra işәgötürәnin әmri (sәrәncamı, qәrarı) ilә müәyyәn edilә bilәr",
    },
    "d"
  ),

  new Soru(
    "İş vaxtının rejimi dedikdә nә başa düşülür?",
    {
      a: "iş vaxtının sutka әrzindә bölgüsü",
      b: "iş vaxtının tәqvim dövrü, rüb vә növbә әrzindә bölgüsü",
      c: "iş vaxtının növbә vә saat әrzindә bölgüsü",
      d: "iş vaxtının sutka әrzindә vә yaxud tәqvim dövrü әrzindә bölgüsü",
      e: "iş vaxtının saatlara bölgüsü",
    },
    "d"
  ),

  new Soru(
    "14 yaşına çatmamış, yaxud sağlamlıq imkanları mәhdud uşağı olan qadınlar üçün natamam iş vaxtını müәyyәn etmәk işәgötürәnin hüququdur, yoxsa vәzifәsi?",
    {
      a: "hüququdur",
      b: "hәm hüququdur, hәm dә vәzifәsi",
      c: "vәzifәsidir",
      d: "işәgötürәnin mülahizәsindәn asılıdır",
      e: "işçidәn asılıdır",
    },
    "c"
  ),

  new Soru(
    "Aşağıda göstәrilәnlәrdәn hansı iş vaxtının növü deyilir?",
    {
      a: "tam iş vaxtı",
      b: "qısaldılmış iş vaxtı",
      c: "normalaşdırılmış iş günü",
      d: "natamam iş vaxtı",
      e: "tam vә qısaldılmış iş vaxtı",
    },
    "c"
  ),

  new Soru(
    "Natamam iş vaxtı әmәk müqavilәsi bağlanarkәn, yoxsa әmәk münasibәtlәri prosesindә müәyyәn edilir?",
    {
      a: "yalnız әmәk müqavilәsi bağlanarkәn",
      b: "yalnız әmәk münasibәtlәri prosesindә",
      c: "hәm әmәk müqavilәsi bağlanarkәn, hәm dә әmәk münasibәtlәri prosesindә",
      d: "yuxarıda qeyd olunan halların heç bir",
      e: "nә әmәk müqavilәsi bağlanarkәn, nә dә әmәk münasibәtlәri prosesindә müәyyәn edilmir",
    },
    "c"
  ),

  new Soru(
    "İllәrlә, aylarla, hәftәlәrlә hesablanan müddәtlәr nә vaxt başa çatır?",
    {
      a: "ilin, ayın vә hәftәnin sonuncu günündә",
      b: "ilin, ayın vә hәftәnin birinci günündә",
      c: "ilin son hәftәsindә",
      d: "ayın son hәftәsindә",
      e: "hәftәnin son günündә",
    },
    "a"
  ),

  new Soru(
    "Tәqvim hәftәlәri vә günlәri ilә hesablanan müddәtә qeyri-­iş günlәri daxildirmi?",
    {
      a: "daxil deyildir",
      b: "işçinin vә işәgötürәnin mülahizәsindәn asılıdır",
      c: "daxildir",
      d: "işәgötürәnin razılığı ilә daxil edilә bilәr",
      e: "işçinin razılığı ilә daxil edilә bilәr",
    },
    "c"
  ),

  new Soru(
    "AR Konstitutsiyasının hansı maddәsindә vәtәndaşların istirahәt hüququ müәyyәn edilmişdir?",
    {
      a: "37-­ci maddәsindә",
      b: "35-­ci maddәsindә",
      c: "25-­ci maddәsindә",
      d: "32-­ci maddәsindә",
      e: "30-­cu maddәsindә",
    },
    "a"
  ),

  new Soru(
    "Əmәk mәzuniyyәti neçә tәqvim günü müddәtindә verilir?",
    {
      a: "30, 60",
      b: "21, 30",
      c: "21, 30, 42, 56",
      d: "30, 56",
      e: "21, 25, 30, 42",
    },
    "c"
  ),

  new Soru(
    "İş vaxtı rejimi necә müәyyәn edilib?",
    {
      a: "gündәlik 7, hәftәlik 36 saat",
      b: "gündәlik 8, hәftәlik 40 saat; gündәlik 6, hәftәlik 36 saat; gündәlik 4, hәftәlik 24 saat",
      c: "gündәlik 7, hәftәlik 36 saat; gündәlik 8, hәftәlik 40 saat",
      d: "gündәlik 12, hәftәlik 60 saat",
      e: "gündәlik 6, hәftәlik 24 saat; gündәlik 8, hәftәlik 40 saat",
    },
    "b"
  ),

  new Soru(
    "AR әmәk Mәcәllәsinә әsasәn hәftәlik normal iş vaxtının müddәti nә qәdәrdir?",
    {
      a: "36 saat",
      b: "38 saat",
      c: "40 saat",
      d: "45 saat",
      e: "42 saat",
    },
    "c"
  ),

  new Soru(
    "AR әmәk Mәcәllәsinә әsasәn gündәlik iş vaxtının müddәti nә qәdәrdir?",
    {
      a: "5 saat",
      b: "6 saat",
      c: "7 saat",
      d: "8 saat",
      e: "9 saat",
    },
    "d"
  ),

  new Soru(
    "Novruz bayramı, Qurban bayramı vә Ramazan bayramının keçirilәcәyi günlәr hansı orqan tәrәfindәn müәyyәn edilir?",
    {
      a: "AR-­sı Nazirlәr Kabineti",
      b: "AR­-sı Prezidenti",
      c: "AR-­sı Konstitusiya Mәhkәmәsi",
      d: "AR-­sı Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi",
      e: "AR­-sı Milli Mәclisi",
    },
    "a"
  ),

  new Soru(
    "Hazırlanmış vahid mәhsula vә müәyyәn әmәyin yerinә yetirlmәsinә görә işçiyә verilәn haqq necә adlanır ?",
    {
      a: "işәmuzd qiymәt",
      b: "vaxtamuzd qiymәt",
      c: "aylıq iş üzrә qiymәt",
      d: "hәftәlik iş üzrә qiymәt",
      e: "illik iş üzrә qiymәt",
    },
    "a"
  ),

  new Soru(
    "İşçinin istehsal etdiyi mәhsulun miqdarından asılı olaraq әmәyinin ödәnilmәsi hansı әmәk haqqı sisteminә aid edilir?",
    {
      a: "vaxtamuzd әmәk haqqı sisteminә",
      b: "işәmuzd әmәk haqqı sisteminә",
      c: "әlavә әmәk haqqı sisteminә",
      d: "aylıq әmәk haqqı sisteminә",
      e: "heç birinә",
    },
    "b"
  ),

  new Soru(
    "İşçinin işlәdiyi vaxtın – saatın, günün vә ayların sayı ilә әmәyinin ödәnilmәsi hansı әmәk haqqı sisteminә aid edilir?",
    {
      a: "vaxtamuzd әmәk haqqı sisteminә",
      b: "işәmuzd әmәk haqqı sisteminә",
      c: "әlavә әmәk haqqı sisteminә",
      d: "aylıq әmәk haqqı sisteminә",
      e: "heç birinә",
    },
    "a"
  ),

  new Soru(
    "İşçinin nominal әmәk haqqı müqabilindә әldә etdiyi istehlak şeylәri vә xidmәtlәrin mәcmusu necә adlanır?",
    {
      a: "real әmәk haqqı",
      b: "nominal әmәk haqqı",
      c: "işçinin natura formasında aldığı haqq",
      d: "işçinin gündәlik işә görә aldığı haqq",
      e: "işçinin hәftәlik işә görә aldığı haqq",
    },
    "a"
  ),
  // 120 - sual
  new Soru(
    "İşçinin pul formasında aldığı әmәk haqqı necә adlanır?",
    {
      a: "işçinin nominal әmәk haqqı müqabilindә әldә etdiyi istehlak şeylәri vә xidmәtlәrin mәcmusu",
      b: "işçinin natura formasında aldığı haqq",
      c: "işçinin nominal әmәk haqqı müqabilindә әldә etdiyi istehlak şeylәri",
      d: "işçinin nominal әmәk haqqı müqabilindә әldә etdiyi xidmәtlәrin mәcmusu",
      e: "nominal әmәk haqqı",
    },
    "e"
  ),

  new Soru(
    "Əgәr qadın uşağın yedizdirilmәsi üçün fasilәlәri cәmlәyәrәk iş vaxtının sonunda istifadә etmәk istәsә, onda onun iş günü müddәti qısaldılırmı?",
    {
      a: "xeyr, qısaldılmır",
      b: "işәgötürәnin mülahizәsindәn asılıdır",
      c: "hәmkarlar ittifaqından asılıdır",
      d: "iş günü әmәk haqqı ödәnilmәklә hәmin fasilәlәrin müddәti qәdәr qısaldılır",
      e: "iş günü hәmin fasilәlәrin müddәti qәdәr qısaldılır",
    },
    "e"
  ),

  new Soru(
    "Uşağın yedizdirilmәsi üçün fasilәlәrdәn qadınlar necә istifadә edә bilәr?",
    {
      a: "cәmlәnәrәk istirahәt vә nahar vaxtına birlәşdirilә, habelә iş vaxtının (növbәsinin) әvvәlindә, yaxud axırında istifadә edilә bilәr",
      b: "ancaq cәmlәnәrәk istirahәt vә nahar vaxtına birlәşdirilmәklә istifadә oluna bilәr",
      c: "ancaq cәmlәnәrәk istirahәt vә nahar vaxtına birlәşdirilmәklә iş vaxtının (növbәsinin) әvvәlindә vә ortasında istifadә edilә bilәr",
      d: "ancaq cәmlәnәrәk istirahәt vә nahar vaxtına birlәşdirilmәklә iş vaxtının (növbәsinin) ortasında vә axırında istifadә edilә bilәr",
      e: "bu mәsәlә işәgötürәnin istehsalının imkanlarından asılı olaraq hәll edilir",
    },
    "a"
  ),

  new Soru(
    "Uşağın yedizdirilmәsi ilә әlaqәdar qadınlara verilәn fasilәlәr iş vaxtına daxil edilirmi vә haqqı ödәnilirmi?",
    {
      a: "iş vaxtına daxil edilir vә orta әmәk haqqı saxlanılır",
      b: "iş vaxtına daxil edilmir vә haqqı ödәnilmir",
      c: "iş vaxtına daxil edilmir, lakin haqqı ödәnilir",
      d: "iş vaxtına daxil edilir vә әmәk haqqının ⅔ hissәsindәn az olmayaraq әmәk haqqı saxlanılır",
      e: "iş vaxtına daxil edilmir, orta әmәk haqqı saxlanılır",
    },
    "a"
  ),

  new Soru(
    "Hamilәlik vә ya uşağının yedizdirilmәsi sәbәblәrinә görә qadınların әmәk haqqının azaldılmasına yol verilirmi?",
    {
      a: "yol verilir",
      b: "qadağandır",
      c: "işәgötürәnin mülahizәsindәn asılıdır",
      d: "Dövlәt Әmәk Müfәttişliyinin qәrarından asılıdır",
      e: "hәmkarlar ittifaqının razılığı ilә",
    },
    "b"
  ),

  new Soru(
    "Büdcәdәn maliyyәlәşdirilәn müәssisәlәrdә çalışan işçilәrin әmәyinin ödәnilmәsi sistemi, növlәri vә mәblәği hansı orqan tәrәfindәn müәyyәn edilir?",
    {
      a: "Azәrbaycan Respublikasının Milli Mәclisi",
      b: "Azәrbaycan Respublikası Nazirlәr Kabineti",
      c: "Azәrbaycan Respublikası Prezidenti",
      d: "Azәrbaycan Respublikası Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi",
      e: "Dövlәt Әmәk Müfәttişliyi",
    },
    "b"
  ),

  new Soru(
    "Əmәk haqqına әlavәnin tәrifini verin:",
    {
      a: "әmәk haqqına әlavә-­әmәk şәraiti ilә әlaqәdar әvәzödәmәk mәqsәdilә işçiyә verilәn әlavә ödәncdir",
      b: "әmәk haqqına әlavә-­yalnız әmәk şәraiti ilә әlaqәdar hәvәslәndirmәk mәqsәdi ilә işçiyә verilәn әlavә ödәncdir",
      c: "әmәk haqqına әlavә-­әmәk şәraiti ilә әlaqәdar әvәzödәmәk vә ya hәvәslәndirmәk mәqsәdi ilә işçinin tarif (vәzifә) maaşına, әmәk haqqına müәyyәn edilәn әlavә ödәncdir",
      d: "әmәk haqqına әlavә-­әmәk şәraiti ilә әlaqәdar әvәzödәmәk mәqsәdilә işçiyә verilәn ödәncdir",
      e: "әmәk haqqına әlavә-­әmәk müqavilәsindә nәzәrә dә tutulan әlavә ödәncdir",
    },
    "c"
  ),

  new Soru(
    "Əmәk haqqının tәrkibinә nәlәr daxildir ?",
    {
      a: "aylıq tarif (vәzifә) maaşı",
      b: "әlavәlәr",
      c: "aylıq tarif (vәzifә) maaşı, әlavәlәr, mükafatlar",
      d: "mükafatlar",
      e: "göstәrilәnlәrin hamısı",
    },
    "c"
  ),

  new Soru(
    "Əmәyin ödәnilmәsi işin fәrdi vә kollektiv nәticәlәrinә görә aparıla bilәrmi?",
    {
      a: "yalnız fәrdi işin nәticәlәrinә görә aparıla bilәr",
      b: "yalnız kollektiv işin nәticәlәrinә görә aparıla bilәr",
      c: "bu işәgötürәn tәrәfindәn tәkbaşına müәyyәn edilir",
      d: "bәli, hәm fәrdi, hәm dә kollektiv işin nәticәlәrinә görә aparıla bilәr",
      e: "bu işәgötürәnin vә hәmkarlar ittifaqı tәşkilatının qәrarına әsasәn müәyyәn edilir",
    },
    "d"
  ),

  new Soru(
    "Əmәyin ödәnilmә dәrәcәsi aşağı salınmış işçinin әvvәlki dәrәcәsi әn az hansı müddәtdәn sonra bәrpa edilә bilәr?",
    {
      a: "әn az bir aydan sonra müsbәt nәticәlәr әldә edildiyi halda",
      b: "әn az iki aydan sonra müsbәt nәticәlәr әldә edildiyi halda",
      c: "әn az dörd aydan sonra müsbәt nәticәlәr әldә edildiyi halda",
      d: "әn az üç aydan sonra müsbәt nәticәlәr әldә edildiyi halda",
      e: "әn az beş aydan sonra müsbәt nәticәlәr әldә edildiyi halda",
    },
    "d"
  ),

  // new Soru(
  //   "Azәrbaycan Respublikasında bu gün minimum әmәk haqqının mәblәği nә qәdәrdir?",
  //   {
  //     a: "105 manat",
  //     b: "50 manat",
  //     c: "60 manat",
  //     d: "65 manat",
  //     e: "70 manat",
  //   },
  //   "a"
  // ),

  new Soru(
    "Minimum әmәk haqqının mәblәği kim vә ya hansı orqan tәrәfindәn müәyyәn edilir?",
    {
      a: "Azәrbaycan Respublikası Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi",
      b: "işçinin vә işәgötürәnin qarşılıqlı razılığı ilә müәyyәn edilir",
      c: "Azәrbaycan Respublikasının Prezidenti",
      d: "işәgötürәn",
      e: "Azәrbaycan Respublikası Nazirlәr Kabineti",
    },
    "c"
  ),

  new Soru(
    "Hansı hallarda vә hansı şәrtlәrlә birdәfәlik xarakterli normalar müәyyәn edilә bilәr?",
    {
      a: "texnologiya dәyişikliklәri, bәdbәxt hadisәlәr, qәza vә bu qәbildәn olan digәr birdәfәlik xarakterli işlәr üçün müәyyәn edilir",
      b: "texnologiya dәyişikliklәri, bәdbәxt hadisәlәr, qәza vә bu qәbildәn olan digәr birdәfәlik işlәr üçün normalar hәr bir konkret halda bu şәrtlә müәyyәn edilir ki, müvafiq işin görüldüyü vaxt әrzindә hәmin işlәr üçün müvәqqәti normalar müәyyәn edilmәmiş olsun",
      c: "texnologiya dәyişikliklәri, bәdbәxt hadisәlәr, qәza vә bu qәbildәn olan digәr birdәfәlik işlәr üçün normalar hәr bir konkret halda bu şәrtlә müәyyәn edilir ki, müvafiq işin görüldüyü vaxt әrzindә hәmin işlәr üçün müvәqqәti vә ya daimi normalar müәyyәn edilmәmiş olsun",
      d: " texnologiya dәyişikliklәri, bәdbәxt hadisәlәr, qәza vә bu qәbildәn olan digәr birdәfәlik işlәr üçün normalar hәr bir konkret halda bu şәrtlә müәyyәn edilir ki, müvafiq işin görüldüyü vaxt әrzindә hәmin işlәr üçün daimi normalar müәyyәn edilmәmiş olsun",
      e: "bu hal qanunvericilikdә nәzәrdә tutulmamışdır",
    },
    "c"
  ),

  new Soru(
    "Müvәqqәti hasilat normalarının (vaxtı normalarının) vә xidmәt normalarının qüvvәdә olması müddәti uzadıla bilәrmi?",
    {
      a: "işәgötürәn heç bir orqanın razılığını almadan müddәti uzada bilәr",
      b: "Hәmkarlar ittifaqı tәşkilatının razılığı ilә işәgötürәn tәrifindәn uzadıla bilәr",
      c: "ancaq yuxarı tәşkilatın razılığı ilә işәgötürәn tәrәfindәn uzadıla bilәr",
      d: "bu müddәti uzatmaq işәgötürәnin sәlahiyyәtinә daxil deyildir",
      e: "bu müddәti uzatmaq işçilәrdәn asılıdır",
    },
    "b"
  ),

  new Soru(
    "Gündәlik tarif (vәzifә)maaşları (saatlıq tarif maaşları) necә tapılır?",
    {
      a: "әmәyin ödәnilmәsi dәrәcәsinә uyğun olan aylıq tarif (vәzifә) maaşının aylıq iş günü (aylıq iş saatı) normasına vurmaq yolu ilә tapılır",
      b: "әmәyin ödәnilmәsi dәrәcәsinә uyğun olan aylıq tarif (vәzifә) maaşının aylıq iş günü (aylıq iş saatı) normasına cәmlәnmәsi yolu ilә tapılır",
      c: "yuxarıda göstәrilәnlәrdәn heç biri",
      d: "әmәyin ödәnilmәsi dәrәcәsinә uyğun olan aylıq tarif (vәzifә) maaşının aylıq iş hәftәsinә günü (aylıq iş saatı) normasına cәmlәnmәsi yolu ilә tapılır",
      e: "әmәyin ödәnilmәsi dәrәcәsinә uyğun olaraq aylıq tarif (vәzifә) maaşının aylıq iş günü (aylıq iş saatı) normasına bölünmәsi yolu ilә tapılır",
    },
    "e"
  ),

  new Soru(
    "Əmәk normalarının tәtbiqi, dәyişdirilmәsi vә onlara yenidәn baxılması qaydası nә ilә müәyyәn edilir?",
    {
      a: "kollektiv müqavilәlәrlә, o bağlanmadıqda isә hәmkarlar ittifaqları ilә razılaşdırma әsasında işәgötürәn tәrәfindәn müәyyәn edilir",
      b: "әmәk müqavilәsi ilә",
      c: "kollektiv müqavilәlәrlә",
      d: "kollektiv sazişlәrlә",
      e: "hәmkarlar ittifaqı tәşkilatı tәrәfindәn müәyyәn edilir",
    },
    "a"
  ),

  new Soru(
    "AR-­da әmәk haqqı hansı pul vahidi ilә ödәnilir?",
    {
      a: "manatla",
      b: "ABŞ dolları ilә",
      c: "avro ilә",
      d: "hәm avro, hәm dә manatla",
      e: "hәm ABŞ dolları, hәm dә manatla",
    },
    "a"
  ),

  new Soru(
    "Mәzuniyyәt üçün orta әmәk haqqı nә vaxt ödәnilir?",
    {
      a: "mәzuniyyәtin başlanmasına әn geci 5 gün qalmış",
      b: "mәzuniyyәtin başlanmasına әn geci 3 gün qalmış",
      c: "mәzuniyyәtin başlanmasına әn geci 10 gün qalmış",
      d: "mәzuniyyәtin başlanmasına әn geci 1 hәftә qalmış",
      e: "mәzuniyyәtin başlanmasına әn geci 1 ay qalmış",
    },
    "b"
  ),

  new Soru(
    "әmәk haqqı sistemi ilә nәzәrdә tutulan mükafatlar, әmәk haqqına әlavәlәr, artımlar, habelә iş vaxtından kәnar vaxtlarda görülәn işlәrә görә verilәn ödәmәlәr vә digәr ödәmәlәr minimum әmәk haqqının mәblәğinә daxil edilirmi?",
    {
      a: "xeyr, daxil edilmir",
      b: "bәli, daxil edilir",
      c: "Azәrbaycan Respublikası Nazirlәr Kabinetinin qәrarı ilә daxil edilir",
      d: "işәgötürәnin mülahizәsindәn asılıdır",
      e: "ancaq mәhkәmәnin qәrarı ilә daxil edilә bilәr",
    },
    "a"
  ),

  new Soru(
    "әmәk haqqının ödәnişi zamanı hansı hesablaşma qaydasından istifadә olunur??",
    {
      a: "avanslı hesablaşma qaydası",
      b: "avanssız hesablaşma qaydası",
      c: "beh hesablaşma qaydası",
      d: "faizli hesablaşma qaydası",
      e: "avanslı vә avanssız hesablaşma qaydası",
    },
    "e"
  ),

  // 140 - sual

  new Soru(
    "әmәk normalarının növlәri hansılardır?",
    {
      a: "hasilat normaları",
      b: "vaxt normaları",
      c: "xidmәt normaları",
      d: "işçilәrin say normaları",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),

  new Soru(
    "İşçi vә işәgötürәn әmәk müqavilәsinin tәlәblәrini pozduqda hansı mәsuliyyәtә cәlb olunurlar?",
    {
      a: "intizam mәsuliyyәtinә",
      b: "inzibati mәsuliyyәtә",
      c: "mülki­hüquqi mәsuliyyәtә",
      d: "cinayәt mәsuliyyәtinә",
      e: "cәrimә olunur",
    },
    "a"
  ),

  new Soru(
    "Hüququn kollektiv subyektlәri kimlәrdir?",
    {
      a: "fiziki şәxslәr",
      b: "hüquqi şәxslәr",
      c: "hәmkarlar ittifaqları",
      d: "işçilәr vә işәgötürәnlәr",
      e: "әmәk kollektivlәri",
    },
    "b"
  ),

  new Soru(
    "Hüququn fәrdi subyektlәri kimlәrdir?",
    {
      a: "fiziki şәxslәr",
      b: "hüquqi şәxslәr",
      c: "әmәk kollektivlәri",
      d: "hәmkarlar ittifaqları",
      e: "işçilәr vә işәgötürәnlәr",
    },
    "a"
  ),
  new Soru(
    "Əmәk hüquq subyektliliyi nәyi ifadә edir?",
    {
      a: "dövlәt tәrәfindәn tanınan hüquq vә vәzifәlәrә malik olmağı",
      b: "әmәk hüquq vә vәzifәlәrini şәxsәn hәyata keçirmәyi",
      c: "әmәk sahәsindә hüquq pozuntularına görә müstәqil surәtdә hüquqi mәsuliyyәt daşımaq qabiliyyәtini",
      d: "әmәk fәaliyyәt qabiliyyәtli olmağı",
      e: "bütün cavağlar düzdür",
    },
    "e"
  ),
  new Soru(
    "Sosial müdafiәyә xüsusi ehtiyacı olan vә işәdüzәlmәkdә çәtinlik çәkәn vәtәndaşların kateqoriyasına aşağıdakılar aid edilmir?",
    {
      a: "әsgәr vә zabitlәrin arvadları (әrlәri)",
      b: "pensiyaçılar",
      c: "20 yaşadәk gәnclәr",
      d: "әlillәr",
      e: "mәcburi köçkünlәr",
    },
    "a"
  ),
  new Soru(
    "İşәgötürәnlәr boş iş yeri (vakansiya) yarandığı gündәn hansı müddәt әrzindә müvafiq icra hakimiyyәti orqanına mәlumat vermәlidirlәr?",
    {
      a: "5 gün müddәtindә",
      b: "әn geci 1 gün müddәtindә",
      c: "3 gün müddәtindә",
      d: "7 gün müddәtindә",
      e: "10 gün müddәtindә",
    },
    "a"
  ),
  new Soru(
    "Mәşğulluq haqqında AR Qanunu nә vaxt qәbul olunmuşdur?",
    {
      a: "1 iyul 2000-­ci il",
      b: "5 yanvar 2001-­ci il",
      c: "2 iyul 2001-­ci il",
      d: "2 oktyabr 2002-­ci il",
      e: "3 noyabr 2002-­ci il",
    },
    "c"
  ),
  new Soru(
    "Dövlәt işsiz vәtәndaşlara hansı tәminatları verir?",
    {
      a: "ömürlük pul müavinәti tәyin olunur",
      b: "baş mәşğulluq idarәsindә qeydә alınır vә işsiz statusu verilir, işlә tәmin edilir",
      c: " işaxtaran üçün onun sәhhәtinә, peşәsinә uyğun işlә tәmin olunmasına, mәşğulluq növünün azad seçiminә, işdәn әsassız çıxarılmağa görә hüquq müdafiәsinә vә s.",
      d: "qanunvericilik ancaq işsizlәrin ayrı­ayrı kaieqoriyasına tәminatı nәzәrdә tutur",
      e: "2 illik orta әmәk haqqı miqdarında müavinәtlә tәmin edilir",
    },
    "c"
  ),
  new Soru(
    "İşzis statusu hansı müddәtә verilir?",
    {
      a: "3 illik",
      b: "ömürlük",
      c: "1 illik",
      d: "iş tapılana qәdәr",
      e: "әmәk qabiliyyәti itirilәnә qәdәr",
    },
    "d"
  ),
  new Soru(
    "әmәk stajına görә hansı pensiya yaş hәddi müәyyәn edilmişdir?",
    {
      a: "kişilәr 65 yaş 30 il әmәk stajı, qadınlar 60 yaş 25 il әmәk stajı",
      b: "kişilәr 62 yaş 32 il әmәk stajı, qadınlar 57 yaş 30 il әmәk stajı",
      c: "kişilәr 65 yaş 20 il әmәk stajı, qadınlar 51 yaş 20 il әmәk stajı",
      d: "kişilәr 65 yaş 25 il әmәk stajı, qadınlar 63 yaş 20 il әmәk stajı",
      e: "kişilәr 63 yaş 33 il әmәk stajı, qadınlar 57 yaş 15 il әmәk staj",
    },
    "d"
  ),
  new Soru(
    "Vәtәndaşların mәşğul olmamaları hansı inzibati vә digәr mәsuliyyәtә sәbәb olur?",
    {
      a: "aylıq cәrimәyә",
      b: "peşәnin itirilmәsinә",
      c: "qanunvericilikdә nәzәrdә tutulmuş hallar istisna olmaqla әmәyә mәcbur edilmәyә yol verilmir",
      d: "әmәk qabiliyyәtinin mәhdudlaşdırılmasına",
      e: "әmәk qabiliyyәtinin itirilmәsi",
    },
    "c"
  ),
  new Soru(
    "Hәmkarlar ittifaqlarının hüquqları, vәzifәlәri vә sәlahiyyәtlәri nә ilә müәyyәn edilir?",
    {
      a: "Hәmkarlar ittifaqları haqqında Azәrbaycan Respublikasının qanunu vә onların nizamnamәlәri ilә",
      b: "Azәrbaycan Respublikası Prezidentinin Fәrmanı ilә",
      c: "Azәrbaycan Respublikası Nazirlәr Kabinetinin qәrar vә sәrәncamları ilә",
      d: "Azәrbaycan Hәmkarlar İttifaqları Konfederasiyasının qәrarı ilә",
      e: "hәmkarlar ittifaqlarının nizamnamәlәri ilә",
    },
    "a"
  ),

  new Soru(
    "Kollektiv müqavilәnin layihәsi iclasda (konfransda)iştirak edәnlәrin...",
    {
      a: "asәs çoxluğu ilә tәsdiq edilir",
      b: "üçdә iki hissәsi sәs verdikdә tәsdiq edilir",
      c: "üçdә bir hissәsi sәs verdikdә tәsdiq edilir",
      d: "70 %­ sәs verdikdә tәsdiq edilir",
      e: "işәgötürәn razılıq verdikdә tәsdiq olunur",
    },
    "a"
  ),
  new Soru(
    "Hansı halda әmәk kollektivi müqavilәnin ikinci tәrәfi qismindә çıxış edir?",
    {
      a: "müәssisәdә hәmkarlar ittifaqları tәşkilatı olmadıqda",
      b: "müәssisәdә kollektiv müqavilә bağlanmadıqda",
      c: "müәssisәdә işçilәrin ictimai özünüidarә orqanları olmadıqda",
      d: "müәssisәdә ixtiraçılar vә sәmәrәlәşdiricilәr cәmiyyәtlәri olmadıqda",
      e: "müәssisәdә sәdrlәr (direktorlar)şurası olmadıqda",
    },
    "a"
  ),
  new Soru(
    "Kollektiv müqavilәnin tәrәflәrini göstәrin:",
    {
      a: "işәgötürәn vә hәmkarlar ittifaqı tәşkilatı",
      b: "işәgötürәn, hәmkarlar ittifaqı tәşkilatı vә әmәk kollektivi",
      c: "işәgötürәn vә AR Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi",
      d: "işәgötürәn vә yerli icra hakimiyyәti",
      e: "hәmkarlar ittifaqı tәşkilatı, bәlәdiyyә vә yerli icra hakimiyyәti",
    },
    "a"
  ),
  new Soru(
    "Kollektiv danışıqların iştirakçıları danışıqlar dövründә intizam mәsuliyyәtinә cәlb oluna bilәrmi?",
    {
      a: "cәlb oluna bilmәzlәr",
      b: "cәlb oluna bilәrlәr",
      c: "işәgötürәnin mülahizәsindәn asılıdır",
      d: "ancaq hәmkarlar ittifaqı tәşkilatının razılığı ilә cәlb oluna bilәr",
      e: "ancaq mәhkәmәnin qәrarı olduğu tәqdirdә cәlb etmәk olar",
    },
    "a"
  ),
  new Soru(
    "Kollektiv danışıqların aparıldığı dövrdә kollektiv danışıqların iştirakçılarının әmәk stajı saxlanılırmı?",
    {
      a: "saxlanılır",
      b: "saxlanılmır",
      c: "yalnız xüsusi әmәk stajı saxlanılır",
      d: "yalnız fasilәsiz әmәk stajı saxlanılır",
      e: "nә xüsusi, nә dә fasilәsiz әmәk stajı saxlanılmır",
    },
    "a"
  ),
  new Soru(
    "Kollektiv danışıqların aparılması üçün yaradılmış komissiyanın tәrkibi necә müәyyәnlәşdirilir?",
    {
      a: "tәrәflәrin birgә qәrarı ilә müәyyәnlәşdirilir",
      b: "yalnız işәgötürәn müәyyәnlәşdirir",
      c: "yalnız hәmkarlar ittifaqı tәşkilatı müәyyәnlәşdirir",
      d: "yalnız Dövlәt Әmәk Müfәttişliyi müәyyәnlәşdirir",
      e: "yalnız Azәrbaycan Respublikasının Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi müәyyәnlәşdirir",
    },
    "a"
  ),
  new Soru(
    "Kollektiv müqavilәnin yerinә yetirilmәsinә nәzarәti kim hәyata keçirir?",
    {
      a: "hәmkarlar ittifaqları tәşkilatları",
      b: "tәrәflәr",
      c: "müәssisәnin rәhbәrliyi",
      d: "AR Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi",
      e: "әmәk kollektivi",
    },
    "d"
  ),
  // 160 - sual

  new Soru(
    "Kollektiv müqavilәnin tәrәflәri:",
    {
      a: "işçilәr vә hәmkarlar ittifaqı tәşkilatı vә müvafiq icra hakimiyyәti orqanı",
      b: "işçilәr vә hәmkarlar ittifaqı tәşkilatı",
      c: "işәgötürәn vә hәmkәrlar ittifaqı tәşkilatı",
      d: "işәgötürәn vә әmәk kollektivi",
      e: "әmәk kollektivi vә işçilәr",
    },
    "c"
  ),
  new Soru(
    "Kollektiv müqavilә vә saziş hansı müddәtә bağlanır?",
    {
      a: "1 il",
      b: "1 ildәn 3 ilәdәk",
      c: "2 il",
      d: "1 ildәn 5 ilәdәk",
      e: "müddәtsiz",
    },
    "b"
  ),
  new Soru(
    "Kollektiv müqavilә vә sazişin quruluş vә mәzmununu kim müәyyәn edir?",
    {
      a: "tәrәflәr",
      b: "hәmkarlar ittifaqları tәşkilatları",
      c: "әmәk kollektivi",
      d: "müәssisәnin rәhbәri",
      e: "icra hakimiyyәti orqanın nümayәndәsi",
    },
    "a"
  ),
  new Soru(
    "Kollektiv müqavilәnin layihәsi kim tәrәfindәn tәsdiq edilir?",
    {
      a: "әmәk kollektivinin komissiyası tәrәfindәn",
      b: "hәmkarlar ittifaqları tәşkilatlarının işçilәrin 50%­dәn çox iştirak etdiyi ümumi konfransı tәrәfindәn",
      c: "müәssisәnin rәhbәri tәrәfindәn",
      d: "müvafiq icra hakimiyyәti orqanı tәrәfindәn",
      e: "notariat qaydasında",
    },
    "b"
  ),
  new Soru(
    "Kollektiv müqavilәdә danışıqların tәşәbbüskarı kim ola bilәr?",
    {
      a: "yalnız hәmkarlar ittifaqı tәşkilatları",
      b: "müqavilәnin istәnilәn tәrәfi",
      c: "yalnız әmәk kollektivi",
      d: "müәssisәnin rәhbәri vә dövlәt nümayәndәsi",
      e: "müvafiq icra hakimiyyәtinin nümayәndәsi",
    },
    "b"
  ),
  new Soru(
    "Kollektiv müqavilә nәdir?",
    {
      a: "әmәyin şәrtlәrini, әmәk şәraitinin tәmin edilmәsi ilә bağlı mәsәlәlәri müәyyәn edәn hüquqi aktdır",
      b: "notariat qaydasında tәsdiq edilәn sәnәddir",
      c: "әmәk hüququnun mәnbәyidir",
      d: "işәgötürәnlә әmәk kollektivi vә ya hәmkarlar ittifaqı tәşkilatı arasında yazılı formada bağlanan müqavilәdir",
      e: "әmәk kollektivlәri ilә hәmkarlar ittifaqı tәşkilatları ilә bağladığı müqavilәdir",
    },
    "d"
  ),
  new Soru(
    "İşçilәrә iş vaxtından artıq vaxt әrzindә görülәn işin hәr saatı üçün әmәk haqqı necә ödәnilir?",
    {
      a: "әmәyin vaxtamuzd ödәnilmә sistemindә saatlıq tarif (vәzifә) maaşının ikiqat mәblәğindәn aşağı olmamaqla vә әmәyin işәmuzd ödәnilmә sistemindә işәmuzd әmәk haqqı ikiqat mәblәğindә ödәnilir",
      b: "әmәyin vaxtamuzd ödәnilmә sistemindә saatlıq tarif (vәzifә)maaşının birqat mәblәğindәn aşağı olmamaqla",
      c: "әmәyin vaxtamuzd ödәnilmә sistemindә saatlıq tarif (vәzifә) maaşının ikiqat mәblәğindәn aşağı olmamaqla",
      d: "әmәyin işәmuzd ödәnilmә sistemindә işәmuzd әmәk haqqı tam ödәnilir",
      e: "әmәyin işәmuzd ödәnilmә sistemindә işәmuzd әmәk haqqı ikiqat mәblәğindә ödәnilir",
    },
    "a"
  ),
  new Soru(
    "İstirahәt, sәsvermә, iş günü hesab edilmәyәn bayram günlәri vә ümumxalq hüzn günü görülәn işә görә әmәk haqqı necә ödәnilir?",
    {
      a: "әmәyin vaxtında ödәnilmә sistemindә gündәlik tarif maaşının iki mislindәn aşağı olmamaqla, әmәyin işә muzd ödәnilmә sistemindә iki qat işә muzd qiymәtlәrindәn aşağı olmamaqla, aylıq maaş alan işçilәrә iş aylıq iş vaxtı norması çәrçivәsindә görülmüşsә, maaşdan әlavә gündәlik vәzifә maaşının iki qat mәblәğindәn aşağı olmamaqla",
      b: "әmәyin vaxtında ödәnilmә sistemindә gündәlik tarif maaşının iki mislindәn aşağı olmamaqla",
      c: "әmәyin işә muzd ödәnilmә sistemindә iki qat işә muzd qiymәtlәrindәn aşağı olmamaqla",
      d: "aylıq maaş alan işçilәrә iş aylıq iş vaxtı norması çәrçivәsindә görülmüşsә, maaşdan әlavә gündәlik vәzifә maaşının iki qat mәblәğindәn aşağı olmamaqla",
      e: "aylıq maaş alan işçilәrә iş aylıq iş vaxtı normasından artıq vaxtda görülmüşsә, maaşdan әlavә gündәlik vәzifә maaşının üç qat mәblәğindәn aşağı olmamaqla",
    },
    "a"
  ),
  new Soru(
    "İstirahәt, sәsvermә, iş günü hesab edilmәyәn bayram günlәri vә ümumxalq hüzn günü işlәmiş işçiyә onun arzusu ilә әmәk haqqı әvәzinә başqa istirahәt günü verilә bilәrmi?",
    {
      a: "bәli, verilә bilәr",
      b: "xeyr, verilә bilmәz",
      c: "verilә dә bilәr, verilmәyә dә",
      d: "hәmkarlar ittifaqı tәşkilatının vә işәgötürәnin birgә qәrarından asılıdır",
      e: "Nazirlәr Kabinetindәn asılıdır",
    },
    "a"
  ),
  new Soru(
    "Kollektiv müqavilәnin yerinә yetirilmәsinә nәzarәti kim hәyata keçirir?",
    {
      a: "hәmkarlar ittifaqları tәşkilatları",
      b: "tәrәflәr",
      c: "müәssisәnin rәhbәrliyi",
      d: "AR Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi",
      e: "әmәk kollektivi",
    },
    "d"
  ),
  new Soru(
    "Əvәz edilәn işçinin tarif (vәzifә)maaşı әvәz edәn işçinin maaşı ilә eyni vә ya ondan az olduqda müvәqqәti әvәz etmәyә görә işçiyә әmәk haqqı ödәnilirmi?",
    {
      a: "heç bir әmәk haqqı ödәnilmir",
      b: "işçinin vә işәgötürәnin qarşılıqlı razılığı ilә әmәk haqqına әlavә müәyyәn edilib ödәnilir",
      c: "işәgötürәnin mülahizәsindәn asılıdır",
      d: "işәgötürәnin vә hәmkarlar ittifaqı tәşkilatının razılığı ilә әlavә ödәnilir",
      e: "işçilәrdәn asılıdır",
    },
    "b"
  ),
  new Soru(
    "Müvәqqәti әvәz etmәyә görә işçiyә әmәk haqqı necә ödәnilir?",
    {
      a: "әvәz edilәn işçinin tarif (vәzifә) maaşı ilә әvәz edilәn işçinin maaşı arasındakı fәrq ödәnilir",
      b: "әvәz edilәni işçinin aylıq maaşının 10% miqdarında әvәz edәn işçiyә әlavә ödәnilir",
      c: "әvәz edilәn işçinin aylıq maaşının 20% miqdarında әvәz edәn işçiyә әlavә ödәnilir",
      d: "әvәz edilәn işçinin aylıq maaşının 30% miqdarında әvәz edәn işçiyә әlavә ödәnilir",
      e: "әvәz edilәn işçinin aylıq maaşının 40% miqdarında әvәz edәn işçiyә әlavә ödәnilir",
    },
    "a"
  ),
  new Soru(
    "İşçinin tәqsiri üzündәn tam zay olmuş mәhsula görә haqqı verilirmi?",
    {
      a: "xeyr, ödәnilmir",
      b: "bәli, ödәnilir",
      c: "bәli, azaldılmış qiymәtlәrlә ödәnilir",
      d: "bәli, qismәn ödәnilir",
      e: "işәgötürәnin mülahizәsindәn asılıdır",
    },
    "a"
  ),
  new Soru(
    "Kollektiv müqavilәdә, yaxud әmәk müqavilәsindә әmәk haqqının verilmәsinin başqa müddәtlәri müәyyәn edilә bilәrmi?",
    {
      a: "hәm kollektiv müqavilәdә, hәm dә әmәk müqavilәsindә müәyyәn edilә bilәr",
      b: "yalnız әmәk müqavilәsi ilә müәyyәn edilә bilәr",
      c: "yalnız kollektiv müqavilә ilә müәyyәn edilә bilәr",
      d: "yalnız Baş Kollektiv Sazişlә müәyyәn edilә bilәr",
      e: "işәgötürәn tәrәfindәn tәkbaşına müәyyәn edilir",
    },
    "a"
  ),
  new Soru(
    "İşçinin tәqsiri üzündәn qismәn zay olmuş mәhsulun haqqı ödәnilirmi?",
    {
      a: "onun yararlıq dәrәcәsindәn asılı olaraq azaldılmış qiymәtlәrlә ödәnilir",
      b: "bәli, 50% mәblәğdә ödәnilir",
      c: "bәli, 60% mәblәğdә ödәnilir",
      d: "onun yararlıq dәrәcәsindәn asılı olmayaraq ödәnilir",
      e: "onun yararlıq dәrәcәsindәn asılı olaraq 80%­dәn artıq olmayan mәblәğdә ödәnilir",
    },
    "a"
  ),
  new Soru(
    "Gecә vaxtı yerinә yetirilәn işә, habelә çox növbәli iş rejiminә görә әmәk haqqına әlavә ödәmәnin konkret mәblәği necә müәyyәn edilir?",
    {
      a: "әmәk müqavilәsi vә kollektiv müqavilә ilә",
      b: "әmәk müqavilәsi ilә",
      c: "kollektiv müqavilә ilә",
      d: "kollektiv sazişlә",
      e: "AR Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyinin tәlimatına әsasәn",
    },
    "a"
  ),
  new Soru(
    "Əmәyin ödәnilmәsi növlәri, sistemlәri, ona edilmiş әlavәlәrin, mükafatların, digәr hәvәslәndirici ödәnclәrin miqdarı necә müәyyәn edilir?",
    {
      a: "Kollektiv müqavilәlәrlә, әmәk müqavilәlәri ilә müәyyәn edilir, kollektiv müqavilә bağlanmadığı, hallarda isә әmәk müqavilәsi ilә vә ya işәgötürәnlә hәmkarlar ittifaqı tәşkilatı arasında razılaşmalarla müәyyәn edilir",
      b: "ancaq kollektiv müqavilәlәrdә müәyyәn edilir",
      c: "ancaq әmәk müqavilәlәri ilә müәyyәn edilir",
      d: "kollektiv vә әmәk müqavilәlәri ilә müәyyәn edilir",
      e: "işçinin vә işәgötürәnin qarşılıqlı razılığı ilә müәyyәn edilir",
    },
    "a"
  ),
  new Soru(
    "Əmәk haqqının әsas hissәsi necә adlanır?",
    {
      a: "tarif (vәzifә)maaşı",
      b: " әmәk haqqına әlavәlәr",
      c: "әvәzli ödәmәlәr",
      d: "tәminatlı ödәmәlәr",
      e: "tәminatlı vә әvәzli ödәmәlәr",
    },
    "a"
  ),
  new Soru(
    "İstehsalat, texnologiya intizamının pozulmasına vә mәhsulun keyfiyyәtinin pislәşmәsinә sәbәb olan ciddi pozuntulara yol verәn işçinin ixtisas dәrәcәsi aşağı salına bilәrmi?",
    {
      a: "bәli, salına bilәr, ancaq bir dәrәcә",
      b: "bәli, salına bilәr, ancaq iki dәrәcә",
      c: "bәli, salına bilәr, ancaq üç dәrәcә",
      d: "xeyr, salına bilmәz",
      e: "yalnız hәmkarlar ittifaqının vә işәgötürәnin birgә razılığı ilә salına bilәr",
    },
    "a"
  ),
  new Soru(
    "Aşağıdakı qeyd olunanlardan hansı әmәk normalarının tәrkibinә daxil deyildir?",
    {
      a: "mövsümü, müvvәqәti vә daimi normalar",
      b: "hasilat normaları",
      c: "vaxt normaları",
      d: "xidmәt normaları",
      e: "işçilәrin say normaları",
    },
    "a"
  ),
  new Soru(
    "әmәk haqqının ödәnilmәsinin hansı formaları var?",
    {
      a: "pul forması",
      b: "natura forması",
      c: "valyuta forması",
      d: "pul vә natura forması",
      e: "istehlak mәhsul forması",
    },
    "d"
  ),

  // 180 - sual
  new Soru(
    "İşçilәrin say norması dedikdә:",
    {
      a: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә görmәli olduğu işin hәcmi başa düşülür",
      b: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә istehsal etdiyi mәhsula sәrf etdiyi iş vaxtının müddәti başa düşülür",
      c: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә xidmәt göstәrmәli olduğu istehsal obyektlәrin sayı başa düşülür",
      d: " iş vaxtı әrzindә әmәk funksiyalarının vә ya işin hәcminin yerinә yetirilmәsi üçün zәruri işçilәrin sayı başa düşülür",
      e: "iş vaxtı әrzindә әmәk funksiyalarının müәyyәyn hissәsinin yerinә yetirilmәsi başa düşülür",
    },
    "d"
  ),
  new Soru(
    "Xidmәt norması dedikdә:",
    {
      a: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә görmәli olduğu işin hәcmi başa düşülür",
      b: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә istehsal etdiyi mәhsula sәrf etdiyi iş vaxtının müddәti başa düşülür",
      c: " işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә xidmәt göstәrmәli olduğu istehsal obyektlәrin sayı başa düşülür",
      d: "iş vaxtı әrzindә әmәk funksiyalarının vә ya işin hәcminin yerinә yetirilmәsi üçün zәruri işçilәrin sayı başa düşülür",
      e: "iş vaxtı әrzindә әmәk funksiyalarının müәyyәyn hissәsinin yerinә yetirilmәsi başa düşülür",
    },
    "c"
  ),
  new Soru(
    "Vaxt norması dedikdә:",
    {
      a: " işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә görmәli olduğu işin hәcmi başa düşülür",
      b: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә istehsal etdiyi mәhsula sәrf etdiyi iş vaxtının müddәti başa düşülür",
      c: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә xidmәt göstәrmәli olduğu istehsal obyektlәrin sayı başa düşülür",
      d: " iş vaxtı әrzindә әmәk funksiyalarının vә ya işin hәcminin yerinә yetirilmәsi üçün zәruri işçilәrin sayı başa düşülür",
      e: "iş vaxtı әrzindә әmәk funksiyalarının müәyyәyn hissәsinin yerinә yetirilmәsi başa düşülür",
    },
    "b"
  ),
  new Soru(
    "Hasilat norması dedikdә:",
    {
      a: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә görmәli olduğu işin hәcmi başa düşülür",
      b: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә istehsal etdiyi mәhsula sәrf etdiyi iş vaxtının müddәti başa düşülür",
      c: "işçinin müvafiq ixtisas üzrә vahid iş vaxtı әrzindә xidmәt göstәrmәli olduğu istehsal obyektlәrin sayı başa düşülür",
      d: " iş vaxtı әrzindә әmәk funksiyalarının vә ya işin hәcminin yerinә yetirilmәsi üçün zәruri işçilәrin sayı başa düşülür",
      e: "iş vaxtı әrzindә әmәk funksiyalarının müәyyәyn hissәsinin yerinә yetirilmәsi başa düşülür",
    },
    "a"
  ),
  new Soru(
    "әmәk norması dedikdә:",
    {
      a: "konkret işin miqdarı başa düşülür",
      b: "bütün әmәk hüquq normaları başa düşülür",
      c: "işçilәr üçün müәyyn edilmiş işin hәcmi başa düşülür",
      d: "işçilәr üçün saat, gün, növbә, hәftә vә ay ilә müәyyn edilmiş işin hәcmi başa düşülür",
      e: "sәrf olunmuş әmәk mәsrәflәrinin hәcmi başa düşülür",
    },
    "d"
  ),
  new Soru(
    "İşәmuzd әmәk haqqı sisteminin növlәri hansılardır?",
    {
      a: "mütәrәqqi işәmuzd sistem",
      b: "müstәqim (düzünә) vә yanakı (dolayı) işәmuzd sistem",
      c: "akkord işәmuzd sistemi",
      d: "kollektiv işәmuzd sistemi",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "Real әmәk haqqı nәdir?",
    {
      a: "işçinin pul formasında aldığı haqq",
      b: "işçinin natura formasında aldığı haqq",
      c: "işçinin nominal әmәk haqqı müqabilindә әldә etdiyi istehlak şeylәri",
      d: "işçinin nominal әmәk haqqı müqabilindә әldә etdiyi xidmәtlәrin mәcmusu",
      e: "işçinin nominal әmәk haqqı müqabilindә әldә etdiyi istehlak şeylәri vә xidmәtlәrin mәcmusu",
    },
    "e"
  ),
  new Soru(
    "Nominal әmәk haqqı nәdir?",
    {
      a: "işçinin pul formasında aldığı haqq",
      b: "işçinin natura formasında aldığı haqq",
      c: "işçinin nominal әmәk haqqı müqabilindә әldә etdiyi istehlak şeylәri",
      d: "işçinin nominal әmәk haqqı müqabilindә әldә etdiyi xidmәtlәrin mәcmusu",
      e: "işçinin nominal әmәk haqqı müqabilindә әldә etdiyi istehlak şeylәri vә xidmәtlәrin mәcmusu",
    },
    "a"
  ),
  new Soru(
    "әmәk haqqı sәviyyәsinә görә hansı növlәrә ayrılır?",
    {
      a: "nominal әmәk haqqı",
      b: "real әmәk haqqı",
      c: "nominal vә real әmәk haqqı",
      d: "konkret әmәk haqqı",
      e: "faktiki әmәk haqqı",
    },
    "c"
  ),
  new Soru(
    "Orta әmәk haqqı nәdir?",
    {
      a: "işçiyә xidmәtә görә verilәn әmәk haqqı",
      b: "işçiyә vәzifәsi (peşәsi) üzrә verilәn әmәk haqqı",
      c: "işçiyә işәgötürәn tәrәfindәn ödәnilmiş mәvacib",
      d: "әmәk haqqının tәrkibinә daxil olan ödәnişlәrin normativ aktlarda müәyyәn olunan mәblәği",
      e: "işçiyә vәzifәsi (peşәsi) üzrә işәgötürәn tәrәfindәn ödәnilmiş mәvacib vә onun tәrkibinә daxil olan ödәnc¬lәrin qanunvericiliklә vә normativ aktlarda müәyyәn olunan mәblәği",
    },
    "e"
  ),
  new Soru(
    "Minimum әmәk haqqı nәdir?",
    {
      a: " ixtisassız әmәyә görә verilәn әmәk haqqı",
      b: "ixtisassız xidmәtә görә verilәn әmәk haqqı",
      c: "әmәk haqqının әn aşağı sәviyyәsini müәyyәn edәn sosial normativdir",
      d: "qanunvericilikdә ixtisassız әmәyә vә xidmәtә görә aylıq әmәk haqqının әn aşağı sәviyyәsini müәyyәn edәn sosial normativdir",
      e: "müәyyәn vaxtda yerinә yetirilәn işә görә ödәnilәn әmәk haqqının minimum hәddi",
    },
    "d"
  ),
  new Soru(
    "İşçinin tәqsiri olmadan zay mәhsul hazırlandıqda onun hazırlanması üçün әmәk haqqı ödәnilirmi?",
    {
      a: "әmәk haqqı azaldılmış qiymәtlәrlә ödәnilir",
      b: "xeyr, әmәk haqqı ödәnilmir",
      c: "әmәk haqqı tam mәblәğdә ödәnilir",
      d: "işәgötürәnin mülahizәsindәn asılıdır",
      e: "hәmkarlar tәşkilatından asılıdır",
    },
    "a"
  ),
  new Soru(
    "Peşәlәrin (vәzifәlәrin) әvәz edilmәsinә görә әmәk haqqına әlavәnin miqdarı hansı qaydada müәyyәn edilir?",
    {
      a: "kollektiv müqavilә vә ya tәrәflәrin qarşılıqlı razılığı ilә әmәk müqavilәsindә nәzәrdә tutulan qaydada",
      b: "әmәk müqavilәsi ilә",
      c: "kollektiv müqavilә ilә",
      d: "kollektiv sazişlә",
      e: "әmәk müqavilәsi vә kollektiv müqavilә ilә",
    },
    "a"
  ),
  new Soru(
    "İşçinin әmәk haqqının miqdarına tәsir edәn amillәr aşağıdakılardır?",
    {
      a: "işçinin әmәk funksiyasının nәticәlәri, işçinin şәxsi işgüzarlığı, işçinin peşәkarlıq sәviyyәsi",
      b: "işçinin әmәk funksiyasının nәticәlәri",
      c: "işçinin şәxsi işgüzarlığı",
      d: "işçinin peşәkarlıq sәviyyәsi",
      e: "bütün göstәrilәnlәr",
    },
    "a"
  ),
  new Soru(
    "İşçinin әmәk haqqının miqdarının maksimum hәddi mәhdudlaşdırıla bilәrmi?",
    {
      a: "hәr hansı hәdlә mәhdudlaşdırıla bilmәz",
      b: "bәli, mәhdudlaşdırıla bilәr",
      c: "bәli, mәhdudlaşdırıla bilәr, ancaq әmәk haqqı 1000 manatdan çox olduqda",
      d: "işәgötürәnin mülahizәsindәn asılıdır",
      e: "Nazirlәr Kabinetindәn asılıdır",
    },
    "a"
  ),
  new Soru(
    "İşçi işdәn çıxarkәn ona düşәn bütün ödәnclәr hansı gün verilmәlidir?",
    {
      a: "tam mәblәğdә işdәn çıxdığı gün",
      b: "tam mәblәğdә işdәn çıxacağı gündәn bir gün әvvәl",
      c: "tam mәblәğdә işdәn çıxacağı gündәn bir gün sonra",
      d: "tam mәblәğdә işdәn çıxdıqdan sonra üç gün әrzindә",
      e: "tam mәblәğdә işdәn çıxdıqdan sonra әn gec beş gün әrzindә",
    },
    "a"
  ),
  new Soru(
    "Aşağıdakılardan hansı 6 ay müddәtindә qüvvәdә olur?",
    {
      a: "intizam tәnbeh",
      b: "töhmәt",
      c: "şiddәtli töhmәt",
      d: "xәbәrdarlıq",
      e: "әmәk haqqından 50% mәblәğin tutulması",
    },
    "a"
  ),
  new Soru(
    "İşçi vә işәgötürәn hansı növ hüquqi mәsuliyyәtin subyektlәridirlәr?",
    {
      a: "әmәk mәsuliyyәtinin",
      b: "mülki­hüquqi mәsuliyyәtinin",
      c: "intizam mәsuliyyәtinin",
      d: "social­tәminat hüququ üzrә mәsuliyyәtin",
      e: "heç birinin",
    },
    "c"
  ),
  new Soru(
    "İşçi barәsindә intizam tәdbiri qüvvәdә olduğu müddәtdә onun barәsindә hәvәslәndirmә tәdbiri tәtbiq olunurmu?",
    {
      a: "işçinin şәxsi keyfiyyәtlәri nәzәrә alınmaqla tәtbiq olunur",
      b: "işçinin peşәkarlıq sәviyyәsi nәzәrә alınmaqla tәtbiq olunur",
      c: "tәtbiq olunmur",
      d: "işçi iş vaxtı xәsarәt aldıqda tәtbiq olunur",
      e: "işçi peşә xәstәliyinә tutulduqda tәtbiq olunur",
    },
    "c"
  ),
  new Soru(
    "İntizam xәtası:",
    {
      a: "intizam mәsuliyyәtinin hüquqi әsasını tәşkil edir",
      b: "işçi vә işgötürәnin hüquqi mәsuliyyәtinin hüquqi әsasını tәşkil edir",
      c: "hüquqi mәsuliyyәtinin әsasını tәşkil edir",
      d: "әmәk mәsuliyyәtinin hüquqi әsasını tәşkil edir",
      e: "işçinin mәsuliyyәtinin hüquqi әsasını tәşkil edir",
    },
    "a"
  ),
  // 200 - sual
  new Soru(
    "Hansı orqanın razılığı olduqda işәgötürәn hәvәslәndirmә tәdbirlәrini tәtbiq edir?",
    {
      a: "heç bir orqanın razılığı tәlәb olunmur",
      b: "AR Nazirlәr Kabinetinin",
      c: "AR Maliyyә Nazirliyinin",
      d: "AR Sosial müdafiә Fondunun",
      e: "AR Hәmkarlar İttifaqı Konfederasiyasının",
    },
    "a"
  ),
  new Soru(
    "Aşağıdakılardan hansı әmәk kitabçasına yazılmır?",
    {
      a: "işә qәbul әmri",
      b: "hәvәslәndirmә tәdbirlәri",
      c: "işdәn azad olma әmri",
      d: "işçinin adı, soyadı vә atasının adı",
      e: "işçinin tutduğu vәzifә",
    },
    "b"
  ),
  new Soru(
    "Əmәk funksiyasının yüksәk peşәkarlıq sәviyyәsindә yerinә yetirilmәsi vә işindә fәrqlәnmiş işçilәrә işәgötürәn tәrәfindәn tәtbiq olunan tәdbirlәr sistemi necә adlanır?",
    {
      a: "işәgötürәn tәrәfindәn mükafatlandırma",
      b: "işәgötürәn tәrәfindәn birdәfәlik әlavә maaşın verilmәsi",
      c: "işçinin uğürlarının tәqdiredilmәsi",
      d: "müxtәlif fәaliyyәt sahәlәrindә istәnilәn fәrqlәndirmә vә işçinin uğürlarının tәqdir edәn sertifikatın verılmәsi",
      e: "әmәk hüququnda hәvәslәndirmә",
    },
    "e"
  ),
  new Soru(
    "Müxtәlif fәaliyyәt sahәlәrindә istәnilәn fәrqlәndirmә vә işçinin uğurlarının tәqdiretmә formaları dedikdә nә başa düşülür",
    {
      a: "әmәyin yüksәk sәviyyәdә qiymәtlәndirilmәsi başa düşülür",
      b: "müxtәlif fәaliyyәt sahәlәrindә istәnilәn fәrqlәndirmә başa düşülür",
      c: "işçinin uğürlarının tәqdiretmә formaları başa düşülür",
      d: "hәvәslәndirilmә",
      e: "müәyyәn işә görә әmәk haqqına әlavәnin verilmәi başa düşülür",
    },
    "d"
  ),
  new Soru(
    "İşәgötürәnin әmri (sәrәncamı, qәrarı) ilә",
    {
      a: "müәssisәdaxili intizam qaydaları tәsdiqlәnir",
      b: "müәssisәnin mülkiyyәtçisinin hüquq vә vәzifәlәri tәsdiqlәnir",
      c: "müәssisә rәhbәrini әvәz edәn müavinin hüquq vә vәzifәlәri tәsdiqlәnir",
      d: "hüquqi şәxsin filial rәhbәrinin hüquq vә vәzifәlәri tәsdiqlәnir",
      e: "hüquqi şәxsin nümyәndәliyinin rәhbәrinin hüquq vә vәzifәlәri tәsdiqlәnir",
    },
    "a"
  ),
  new Soru(
    "İstehsalatda qayda­qanunun bәrqәrar olması dedikdә nә başa düşülür ?",
    {
      a: "müәssisәnin tәrkibindәki qayda­qanun başa düşülür",
      b: "istehsalat intizamı başa düşülür",
      c: "işçinin tәsbit olunmuş intizam qaydasına tabeçiliyi başa düşülür",
      d: "işçinin müәssisә rәhbәrinin sәrәncamlarına tabeçiliyi başa düşülür",
      e: "işçilәrdәn tәlәb olunan davranış qaydalarının mәcmusu başa düşülür",
    },
    "b"
  ),
  new Soru(
    "Bütün işçilәrә şamil olunan әmәk sanksiyası hansıdır ?",
    {
      a: "әmәk mәsuliyyәti",
      b: "müәyyәn müddәtә işdәn uzaqlaşdırma",
      c: "әmәk intizamı",
      d: "başqa işә keçirmә",
      e: "daha az maaşlı işә keçirmә",
    },
    "c"
  ),
  new Soru(
    "İşçinin tәsbit olunmuş intizam qaydasına, müәssisә rәhbәrinin sәrәncamlarına tabeçiliyi vә işçilәrdәn tәlәb olunan davranış qaydalarının mәcmusu necә adlanәr?",
    {
      a: "müәssisәnin tәrkibindәki qayda­qanun",
      b: "әmәk intizamı",
      c: "işçinin tәsbit olunmuş intizam qaydasına tabeçiliyi",
      d: "işçinin müәssisә rәhbәrinin sәrәncamlarına tabeçiliyi",
      e: "işçilәrdәn tәlәb olunan davranış qaydalarının mәcmusu",
    },
    "b"
  ),
  new Soru(
    "İntizam xәtasının törәdildiyi gündәn neçә ay keçdikdәn sonra işçiyә intizam tәnbehi verilә bilmәz?",
    {
      a: "altı ay keçdikdәn sonra",
      b: "bir ay keçdikdәn sonra",
      c: "iki ay keçdikdәn sonra",
      d: "üç ay keçdikdәn sonra",
      e: "sәkkiz ay keçdikdәn sonra",
    },
    "a"
  ),
  new Soru(
    "İntizam tәnbehi verilmәmişdәn әvvәl işәgötürәnin işçidәn tәlәb etdiyi sәnәd necә adlanır ?",
    {
      a: "yazılı izahat",
      b: "akt",
      c: "hesabat",
      d: "şifahi izahat",
      e: "mәruzә",
    },
    "a"
  ),
  new Soru(
    "İşәgötürәn intizam tәnbehini verәrkәn nәlәri nәzәrә almalıdır?",
    {
      a: "bütün cavablar düzdür",
      b: "işçinin şәxsiyyәtini",
      c: "işçinin kollektivdәki nüfuzunu",
      d: "işçinin peşәkarlıq sәviyyәsini",
      e: "işçinin törәtdiyi xәtanın xarakterini",
    },
    "b"
  ),
  new Soru(
    "Aşağıda qeyd olunanlardan hansılar intizam tәnbehi sayılmır?",
    {
      a: "yazılı xәbәrdarlıq",
      b: "töhmәt",
      c: "sonuncu xәbәrdarlıqla şiddәtli töhmәt",
      d: "kollektiv müqavilәlәrdә nәzәrdә tutulmuşdursa aylıq әmәk haqqının ¼ -­i mәblәğindәn çox olmamaq şәrti ilә cәrimә",
      e: "işdәn azad etmə",
    },
    "a"
  ),
  new Soru(
    "Müәssisәdaxili intizam qaydaları hansı mәqsәdlәrlә qәbul edilir?",
    {
      a: "әmәk müqavilәlәri üzrә öhdәliklәrin yerinә yetirilmәsinә nәzarәtin, әmәk müqavilәlәri üzrә öhdәliklәrin yerinә yetirilmәsinә nәzarәtin vә bağlanmış kollektiv müqavilәlәr üzrә tәrәflәrin öhdәliklәrinin yerinә yetirilmәsinә nәzarәtin hәyata keçirilmәsi",
      b: "әmәk müqavilәlәri üzrә öhdәliklәrin yerinә yetirilmәsinә nәzarәtin hәyata keçirilmәsi",
      c: "bağlanmış kollektiv müqavilәlәr üzrә tәrәflәrin öhdәliklәrinin yerinә yetirilmәsinә nәzarәtin hәyata keçirilmәsi",
      d: "әmәk qanunvericiliyinin tәlәblәrinin gözlәnilmәsi",
      e: "әmәk intizamının tәmin olunması",
    },
    "a"
  ),
  new Soru(
    "İşçi müәssisәdaxili intizam qaydalarını pozduqda işәgötürәn tәrәfindәn hansı intizam tәdbirlәri tәtbiq oluna bilәr?",
    {
      a: "töhmәt vermәk",
      b: "sonuncu xәbәrdarlıqla şiddәtli töhmәt vermәk",
      c: "әmәk haqqının ¼ mәblәğindәn çox olmamaqla cәrimә etmәk",
      d: "әmәk müqavilәsini lәğv etmәk",
      e: "bütün cavablar düzdü",
    },
    "e"
  ),
  new Soru(
    "İntizam mәsuliyyәtinin hüquqi әsasını nә tәşkil edir?",
    {
      a: "intizam xәtası",
      b: "inzibati xәta",
      c: "hüquq pozuntusu",
      d: "hüquqazidd hәrәkәt",
      e: "xәbәrdarlıq",
    },
    "a"
  ),
  new Soru(
    "İşçi barәsindә nә vaxt hәvәslәndirmә tәdbiri tәtbiq olunmur?",
    {
      a: "işçi mәzuniyyәtdә olduqda",
      b: "işçi ezamiyyәtdә olduqda",
      c: "işçi barәsindә intizam tәdbiri qüvvәdә olduğu müddәtdә",
      d: "işçi xәstә olduqda",
      e: "işçi fәaliyyәtində qabiliyyәtsiz olduqda",
    },
    "c"
  ),
  new Soru(
    "Hәvәslәndirilmә dedikdә:",
    {
      a: "әmәyin yüksәk sәviyyәdә qiymәtlәndirilmәsi başa düşülür",
      b: "müxtәlif fәaliyyәt sahәlәrindә istәnilәn fәrqlәndirmә başa düşülür",
      c: "işçinin uğürlarının tәqdiretmә formaları başa düşülür",
      d: "müxtәlif fәaliyyәt sahәlәrindә istәnilәn fәrqlәndirmә vә işçinin uğürlarının tәqdiretmә formaları başa düşülür",
      e: "müәyyәn işә görә әmәk haqqına әlavәnin verilmәi başa düşülür",
    },
    "d"
  ),
  new Soru(
    "Hüquq qaydası kimi әmәk intizamı nәyi müәyyәn edir?",
    {
      a: "tәrәflәrin öhdәliklәri yerinә yetirilmәsinә nәzarәtin hәyata keçirilmәsini",
      b: "әmәk qanunvericiliyinin tәlәblәrinin gözlәnilmәsini",
      c: "әmәk intizamının tәmin olunmasını",
      d: "istehsalatda qayda­qanunun bәrqәrar olmasını",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "İstehsalat intizamı dedikdә:",
    {
      a: "müәssisәnin tәrkibindәki qayda­qanun başa düşülür",
      b: "istehsalatda qayda­qanunun bәrqәrar olması başa düşülür",
      c: "işçinin tәsbit olunmuş intizam qaydasına tabeçiliyi başa düşülür",
      d: "işçinin müәssisә rәhbәrinin sәrәncamlarına tabeçiliyi başa düşülür",
      e: "işçilәrdәn tәlәb olunan davranış qaydalarının mәcmusu başa düşülür",
    },
    "b"
  ),
  new Soru(
    "әmәk intizamı nәdir?",
    {
      a: "müәssisәnin tәrkibindәki qayda­qanun",
      b: "işçinin tәsbit olunmuş intizam qaydasına, müәssisә rәhbәrinin sәrәncamlarına tabeçiliyi vә işçilәrdәn tәlәb olunan davranış qaydalarının mәcmusu",
      c: "işçinin tәsbit olunmuş intizam qaydasına tabeçiliyi",
      d: "işçinin müәssisә rәhbәrinin sәrәncamlarına tabeçiliyi",
      e: "işçilәrdәn tәlәb olunan davranış qaydalarının mәcmusu",
    },
    "b"
  ),
  // 220 - sual
  new Soru(
    "Ayrı­seçkiliyә mәruz qalan işçi pozulmuş hüququnun bәrpa edilmәsi ilә kimә vә ya hansı orqana müraciәt edә bilәr?",
    {
      a: "mәhkәmәyә",
      b: "Azәrbaycan Respublikasının Milli Mәclisinә",
      c: "Azәrbaycan Respublikasının Prezidentinә",
      d: "Azәrbaycan Respublikasının Baş Prokurorluğuna",
      e: "Dövlәt Әmәk Müfәttişliyinә",
    },
    "a"
  ),
  new Soru(
    "әmәk qanunvericiliyinә әmәl olunmasına dövlәt nәzarәtini hәyata keçirәn müvafiq icra hakimiyyәti orqanı necә adlanır?",
    {
      a: "Dövlәt Әmәk Müfәttişliyi",
      b: "Azәrbaycan Respublikasının Milli Mәclisi",
      c: "Azәrbaycan Respublikasının Nazirlәr Kabineti",
      d: "Azәrbaycan Respublikasının Fövqәladә Hallar Nazirliyi",
      e: "Azәrbaycan Respublikasının Baş Prokurorluğu",
    },
    "a"
  ),
  new Soru(
    "әmәk münasibәtlәri sahәsindә dövlәt siyasәtini hәyata keçirәn müvafiq icra hakimiyyәti orqanı necә adlanır?",
    {
      a: "Azәrbaycan Respublikasının Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi",
      b: "Dövlәt Әmәk Müfәttişliyi",
      c: "Azәrbaycan Respublikasının Milli Mәclisi",
      d: "Azәrbaycan Respublikasının Nazirlәr Kabineti",
      e: "Azәrbaycan Hәmkarlar İttifaqları Konfederasiyası",
    },
    "a"
  ),
  new Soru(
    "İş axtaran vә işsiz vәtәndaşlar üçün haqqı ödәnilәn ictimai işlәr bir qayda olaraq hansı müddәtә tәşkil olunur?",
    {
      a: "iki ay",
      b: "bir hәftә",
      c: "iki hәftә",
      d: "üç ay",
      e: "altı ay",
    },
    "a"
  ),

  new Soru(
    "İşsizlik müavinәti maksimum hansı müddәt üçün ödәnilir?",
    {
      a: "12 aylıq dövr әrzindә 26 tәqvim hәftәsindәn çox ola bilmәz",
      b: "6 aylıq dövr әrzindә 10 tәqvim hәftәsindәn çox ola bilmәz",
      c: "12 aylıq dövr әrzindә 20 tәqvim hәftәsindәn çox ola bilmәz",
      d: "12 aylıq dövr әrzindә 32 tәqvim hәftәsindәn çox ola bilmәz",
      e: "6 aylıq dövr әrzindә 13 tәqvim hәftәsindәn çox ola bilmәz",
    },
    "a"
  ),
  new Soru(
    "İşsizlik müavinәtinin miqdarı nә qәdәrdir?",
    {
      a: "55 manat",
      b: "50 manat",
      c: "60 manat",
      d: "80 manat",
      e: "85 manat",
    },
    "a"
  ),

  new Soru(
    "Aşağıda qeyd olunanlardan kimlәr işsiz statusu almaq hüququna malik deyildirlәr?",
    {
      a: "15 yaşına çatmayanlar",
      b: "ilk dәfә iş axtaranlar",
      c: "әlillәr",
      d: "pensiya hüququ qazanmamış vәtәndaşlar",
      e: "ağır, zәrәrli vә tәhlükәli әmәk şәraitindә işlәyәnlәr",
    },
    "a"
  ),
  new Soru(
    "әlil şәxs kimlәrә deyilir?",
    {
      a: "fәaliyyәt qabiliyyәtsiz şәxslәrә",
      b: "hüquq qabiliyyәtsiz şәxslәrә",
      c: "fәaliyyәt qabiliyyti mәhdudlaşdırılmaşı şәxslәrә",
      d: "әmәk qabiliyyәtsiz şәxslәrә",
      e: "anadangәlmә, xәstәlikdәn vә ya xәsarәtdәn doğan әqli vә ya fiziki qüsurlar nәticәsindә hәyat fәaliyyәti mәhdudlaşan, sosial yardıma vә müdafiәyә ehtiyacı olan şәxslәr",
    },
    "e"
  ),
  new Soru(
    "Münasib iş nәyә deyilir ?",
    {
      a: "işaxtaran üçün onun ixisasına uyğun iş olduqda",
      b: "iş yerinә nәqliyyatla gedib­gәlmәsi mümükünlüyü nәzәrә alınmaqla tәklif edilәn iş",
      c: "işaxtaranın әvvәlki peşә üzrә tәcrübәsi nәzәrә alınmaqla tәklif edilәn iş",
      d: "işaxtaranın sәhhәti nәzәrә alınmaqla tәklif edilәn iş",
      e: "işaxtaran üçün onun ixtisası, әvvәlki peşә üzrә tәcrübәsi, sәhhәti, yeni iş yerinә nәqliyyatla gedib­gәlmәsi mümükünlüyü nәzәrә alınmaqla tәklif edilәn iş",
    },
    "e"
  ),
  new Soru(
    "İşәdüzәltmә vә onun tәşkilinә hansı dövlәt orqanı rәhbәrlik edir?",
    {
      a: "AR Sosial Müdafiә Fondu",
      b: "AR Nazirlәr Kabineti",
      c: "AR Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi vә onun yerli orqanları",
      d: "AR Maliyyә Nazirliyi",
      e: "yerli icra hakimiyyәti orqanları",
    },
    "c"
  ),
  new Soru(
    "İşsiz statusu almaq hüququ olmayan vәtәndaşlara kimlәr aiddir?",
    {
      a: "yetkinlik yaşına çatmayanlar, tәqaüdçülәr",
      b: "16 yaşına çatmayanlar, iki dәfә münasib işdәn imtina edәnlәr, ilk dәfә iş axtaranlar",
      c: "15 yaşına çatmayanlar, tәqaüdçülәr, iki münasib işdәn imtina edәnlәr, ilk dәfә iş axtaranlar, azadlıqdan mәhrumetmә cәzası çәkәnlәr",
      d: " qeydiyyata alındıqdan sonra iş axtarmaq mәqsәdilә üzürsüz sәbәbdәn müvafiq icra hakimiyyәti orqanına gәlmәyәnlәr, yetkinlik yaşına çatmayanlar, tәqaüdçülәr",
      e: " qeydiyyata alındıqdan sonra iş axtarmaq mәqsәdilә üzürsüz sәbәbdәn müvafiq icra hakimiyyәti orqanına gәlmәyәnlәr, yetkinlik yaşına çatmayanlar, tәqaüdçülәr",
    },
    "c"
  ),
  new Soru(
    "İşsiz şәxslәrә kimlәr aiddir?",
    {
      a: "15 yaşına çatmayanlar, pensiya hüququ qazanmış şәxslәr",
      b: "ilk dәfә iş axtaranlar, azadlıqdan mәhrumetmә cәzası çәkәnlәr",
      c: "işdәn çıxarılanlar",
      d: "işi vә qazancı olmayan, müvafiq icra hakimiyyәti orqanında qeydiyyatda olan әmәk qabiliyyәtli şәxslәr",
      e: "yetkinlik yaşına çatmış bütün әmәk qabiliyyәtli vәtәndaşlar",
    },
    "d"
  ),
  new Soru(
    "Mәşğulluq nә demәkdir?",
    {
      a: "yalnız AR vәtәndaşlarının respublika qanunvericiliyinә zidd olmayan fәaliyyәtidir",
      b: "baş mәşğulluq idarәsindә qeydiyyatda olan vәtәndaşların gәlir gәtirәn faliyyәtidir",
      c: "AR vәtәndaşlarının vә әcnәbilәrin respublika qanunvericiliyinә zidd olmayan qazanc gәtirәn fәaliyyәtidir",
      d: "vәtәndaşların qazanc gәtirәn hәr hansı fәaliyyәtidi",
      e: "vәtәndaşın istehsal vә yaradıcı әmәyә öz qabiliyyәtini sәrf etmәk hüququdur",
    },
    "c"
  ),
  new Soru(
    "7 iş günündәn çоx оlmаmаqla",
    {
      a: "әmәк аrbitrаjındа коllекtiv әmәк mübаhisәlәrinә bахılmаlıdır",
      b: "fәrdi әmәк mübаhisәlәrinә baxılmalıdır",
      c: "fәrdi vә kollektiv әmәк mübаhisәlәrinә baxılmalıdır",
      d: "işçi tәrәfindәn keçirilәn fәrdi tәtil dayandırılmalıdır",
      e: "işçilәr tәrәfindәn keçirilәn kollektiv tәtil dayandırılmalıdır",
    },
    "a"
  ),
  new Soru(
    "Rаzılаşdırıcı kоmissiyаdаn, vаsitәçidәn vә әmәk аrbitrаjındаn hansı hallarda isifadә olunur?",
    {
      a: "kоllекtiv әmәк mübаhisәlәrinin hәlli üçün",
      b: "fәrdi әmәк mübаhisәlәrinin hәlli üçün",
      c: "fәrdi vә kollektiv әmәк mübаhisәlәrinin hәlli üçün",
      d: "işçi tәrәfindәn fәrdi tәtil keçirildikdә",
      e: "işçilәr tәrәfindәn kollektiv tәtil keçirildikdә",
    },
    "a"
  ),
  new Soru(
    "Mübаhisә еdәn subyеktlәrә, mübаhisәnin xаrаktеrinә vә mübаhisәnin оbyеktinә görә:",
    {
      a: "әmәk mübahisәlәrinin predmeti müәyyәn olunur",
      b: "әmәk mübahisәlәrinin sәbәbi müәyyәn olunur",
      c: "bütün cavablar düzdür",
      d: "әmәк mübаhisәlәrinn әsаslаrı tәsniflәşdirilir",
      e: "әmәk mübahisәlәrinin motivi müәyyәn olunur",
    },
    "d"
  ),
  new Soru(
    "Aşağıdakılardan hansı işçinin hüquqlarının özünümüdafiә vasitәsi kimi tәtәbiq oluna bilәr?",
    {
      a: "işçinin adi әmәk vәzifәlәrinin (әmәk funksiyalarının) yerinә yetirilmәsindәn imtina etmәsi",
      b: "әmәk haqqı ödәnişinin gecikdirilmәsi ilә әlaqәdar işin dayandırılması",
      c: "yerinә yetirilәn işin bilavasitә işçinin hәyatına vә sağlamlığına tәhdid etmәsi halında işçi fәrdi müdafiә vasitәlәri ilә tәmin olunmadıqda",
      d: "işçiyә әmәk müqavilәsi ilә nәzәrdә tutulmamış iş tәklif olunduqda",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "Aşağıdakılardan hansı işçinin hüquqlarının özünümüdafiәnin әsas әlamәtidir?",
    {
      a: "işçinin adi әmәk vәzifәlәrinin (әmәk funksiyalarının) yerinә yetirilmәsindәn imtina etmәsidir",
      b: "işçilәrin kollektiv tәtil etmәsidir",
      c: "işәgötürәn tәrәfindәn lokautun elan edilmәsidir",
      d: "әmәk kollektivinin mәhkәmәyә müraciәt etmәsidir",
      e: "işçilәrin kütlәvi şәkildә mәzuniyyәtә göndәrilmәsidir",
    },
    "a"
  ),
  new Soru(
    "Aşağıdakılardan hansı işçinin әmәk hüququnun özünü-müdafә üsullarından biridir? ­",
    {
      a: "tәkbaşına tәtil",
      b: "kollektiv tәtil",
      c: "lokaut",
      d: "işçinin fәrdi şәkildә mәhmәyә müraciәt etmәsi",
      e: "işçilәrin kollektiv şәkildә mәhkәmәyә müraciәt etmәsi",
    },
    "a"
  ),
  new Soru(
    "әmәk hüququn müdafiәsi dedikdә nә başa düşülür?",
    {
      a: "subyektiv hüquqların hәyata keçirilmәsindәki maneәlәrin aradan qaldırılması",
      b: "pozulmuş hüquqların bәrpası ",
      c: "vurulmuş zәrәrin әvәzinin ödәnilmәsi",
      d: "pozulmuş hüquqların bәrpası mәqsәdilә tәtbiq edilәn mәcburedici tәdbirlәr",
      e: "bütün cavablat düzdür",
    },
    "e"
  ),
  // 240 - sual
  new Soru(
    "әmәk hüququnda müdafiә tәdbirlәri nә vaxt tәtbiq olunur?",
    {
      a: "mühafizә qarşısını alma xarakteri daşıyır vә işçinin subyektiv әmәk hüququnun pozulmasına qәdәr tәtbiq olunur",
      b: "hüquq pozuntusundan sonra, pozulmuş subyektiv hüququn bәrpası mәqsәdilә tәtbiq olunur",
      c: "insan hüquqlarının qorunmasına yönәlmiş tәdbirlәr sistemidir",
      d: "konstitiusiya ilә tәsbit olunmuş insah hüquqlarının qorunmasına yönәlmiş tәdbirlәr sistemidir",
      e: "bütün cavablar düzdür",
    },
    "b"
  ),
  new Soru(
    "әmәk hüququnda mühafizә tәdbirlәri nә vaxt tәtbiq olunur?",
    {
      a: "mühafizә qarşısını alma xarakteri daşıyır vә işçinin subyektiv әmәk hüququnun pozulmasına qәdәr tәtbiq olunur",
      b: "hüquq pozuntusundan sonra, pozulmuş subyektiv hüququn bәrpası mәqsәdilә tәtbiq olunur",
      c: "insan hüquqlarının qorunmasına yönәlmiş tәdbirlәr sistemidir",
      d: "konstitiusiya ilә tәsbit olunmuş insah hüquqlarının qorunmasına yönәlmiş tәdbirlәr sistemidir",
      e: "bütün cavablar düzdür",
    },
    "a"
  ),
  new Soru(
    "Geniş mәnada işçilәrin әmәk hüquqlarının müdafiәsi dedikdә nә başa düşülür?",
    {
      a: "әmәk hüquqlarına riayәn olunmasının tәmin edilmәsi",
      b: "әmәk hüquqlarının pozuntulardan müdafiәsi",
      c: "әmәk hüquqlarının profilaktikası",
      d: "qanunsuz pozulmuş әmәk hüquqlarının bәrpası",
      e: " dövlәt tәrәfindәn әmәk hüququnun müdafiә funksiyasının realizәsi",
    },
    "e"
  ),
  new Soru(
    "Dar mәnada işçilәrin әmәk hüquqlarının müdafiәsi dedikdә nә başa düşülür?",
    {
      a: "әmәk hüquqlarına riayәn olunmasının tәmin edilmәsi",
      b: "әmәk hüquqlarının pozuntulardan müdafiәs",
      c: "әmәk hüquqlarının profilaktikası",
      d: "qanunsuz pozulmuş әmәk hüquqlarının bәrpası",
      e: "altı ay bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "İşәgötürәn kollektiv әmәk mübahisәsinin başlanması haqqında hansı müddәtdә müvafiq icra hakimiyyәti orqanına mәlumat vermәlidir vә bu orqan necә adlanır?",
    {
      a: "3 iş günü, AR-­sı Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyinә",
      b: "1 iş günü, AR-­sı Nazirlәr Kabinetinә",
      c: "1 iş günü, AR-­sı Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyinә",
      d: "2 iş günü, Dövlәt Әmәk Müfәttişliyinә",
      e: "2 iş günü, AR-­sı Prezidentinә",
    },
    "a"
  ),
  new Soru(
    "Kollektiv әmәk mübahisәsi hansı andan başlanmış hesab olunur?",
    {
      a: "hәmkarlar ittifaqlarının, işәgötürәnlәrin birliklәri vә müvafiq icra hakimiyyәti orqanları",
      b: "hәmkarlar ittifaqları",
      c: "müvafiq icra hakimiyyәti orqanları",
      d: "әmәk kollektivlәri",
      e: "hәmkarlar ittifaqları vә işәgötürәnlәr",
    },
    "a"
  ),
  new Soru(
    "İşәgötürәn kollektiv tәlәblәrin ona tәqdim edildiyi vaxtdan hansı müddәt әrzindә öz qәrarını yazılı formada işçilәrә vә ya hәmkarlar ittifaqı tәşkilatına bildirmәlidir ?",
    {
      a: "5 iş günü müddәtindә",
      b: "1 iş günü müddәtində",
      c: "2 iş günü müddәtindә",
      d: "3 iş günü müddәtindә",
      e: "4 iş günü müddәtindә",
    },
    "a"
  ),
  new Soru(
    "Kollektiv әmәk mübahisәlәrinin tәrәflәrini göstәrin:",
    {
      a: "işәgötürәnlәr, işçilәr (әmәk kollektivi vә ya onun bir hissәsi)vә ya hәmkarlar ittifaqı",
      b: "işәgötürәnlәr",
      c: "işçilәr (әmәk kollektiv vә ya onun bir hissәsi)",
      d: "işәgötürәnlәr vә hәmkarlar ittifaqı",
      e: "işәgötürәnlәr, hüquqi vә fiziki şәxslәr",
    },
    "a"
  ),
  new Soru(
    "әmәk arbitrajında kollektiv әmәk mübahisәlәrinә baxılma müddәti nә qәdәrdir?",
    {
      a: "7 iş günündәn çox olmamalıdır",
      b: "5 iş günündәn çox olmamalıdır",
      c: "10 iş günündәn çox olmamalıdır",
      d: "15 iş günündәn çox olmamalıdır",
      e: "1 aydan çox olmamalıdır",
    },
    "a"
  ),
  new Soru(
    "Kollektiv әmәk mübahisәlәrinin hәlli üçün hansı barışdırıcı üsullardan istifadә olunur?",
    {
      a: "razılaşdırıcı komissiyadan",
      b: "vasitәçidәn",
      c: "әmәk arbitrajından",
      d: "vasitәçidәn vә әmәk arbitrajından",
      e: "razılaşdırıcı komissiyadan, vasitәçidәn vә әmәk arbitrajından",
    },
    "e"
  ),
  new Soru(
    "әmәk mübahisәlәrini hansı әsaslara görә tәsniflәşdirmәk olar?",
    {
      a: "mübahisә edәn subyektlәrә görә",
      b: "mübahisәnin xarakterinә görә",
      c: "mübahisәnin obyektinә görә",
      d: "mübahisә edәn subyektlәrә, mübahisәnin xarakterinә vә mübahisәnin obyektinә görә",
      e: "mübahisәnin motivinә görә",
    },
    "d"
  ),
  new Soru(
    "AR-­nın әmәk qanunvericiliyinә әsasәn iş yeri :",
    {
      a: "işçinin haqqı ödәnilmәklә vәzifәsi (peşәsi) üzrә әmәk müqavilәsi ilә müәyyәn edilmiş işlәri (xidmәtlәri) yerinә yetirdiyi yer",
      b: "işçinin ezamiyyәtdә olduğu yer",
      c: "işçinin mәzuniyyәtdә olduğu yer",
      d: "işçi ilә iәgötürәnin әmәk müqavilәsini bağladığı yer",
      e: "düzgün cavab yoxdur",
    },
    "a"
  ),
  new Soru(
    "AR-­nın әmәk qanunvericiliyinә әsasәn әmәk funksiyası :",
    {
      a: "әmәk müqavilәsindә nәzәzrdә tutulan bir vә ya bir neçә vәzifә (peşә) üzrә işçinin yerinә yetirmәli olduğu işlәrin (xidmәtlәrin) mәcmusu",
      b: "işçinin әsas әmәk vәzifәlәridir",
      c: "işçinin vaxtamuzd әmәk haqqı sistemi üzrә görmәli olduğu iş",
      d: "işçinin işәmuzd әmәk haqqı sistemi üzrә görmәli olduğu iş",
      e: "işçinin tam iş vaxtı üzrә yerinә yetirmәli olduğu iş",
    },
    "a"
  ),
  new Soru(
    "AR-­nın әmәk qanunvericiliyinә әsasәn müәssisә :",
    {
      a: "mülkiyyәtçinin tәşkilati­hüquqi formasından, adından vә fәaliyyәt növündәn asılı olmayaraq AR qanunvericiliyinә müvafiq olaraq yaratdığı hüquqi şәxs, onun vә xarici hüquqi şәxsin filialı, nümayәndәliyi",
      b: "әmәk qanunvericiliyinә әsasәn yaradılmış xarici hüquqi şәxsin filialı, nümayәndәliyi",
      c: "sәrәncam qaydasında yaradılmış hüquqi şәxs",
      d: "icazә qaydasında yaradılmış hüquqi şәxs",
      e: "tәqdimedici­normativ üsul qaydasında yaradılmış hüquqi şәxs",
    },
    "a"
  ),
  new Soru(
    "İşçinin vә işәgötürәnin hüquqlarının tәmin edilmәsinin tәşkilati­hüquqi vasitәlәrinin yüksәk sәviyyәsi hansı prinsiplәr әsasında hәyata keçirilir?",
    {
      a: "әmәyin azadlığı, hüquq bәrabәrliyi prinsipi",
      b: "әmәk hüquq vә azadlıqlarının tәminatlılığı vә dövlәt müdafiәsi prinsipi",
      c: "sosial tәrәfdaşlığı prinsipi",
      d: "mәcburi әmәyin qadağan edilmәsini prinsipi",
      e: "әdalәtli әmәk şәraitinin tәmin edilmәsini prinsipi",
    },
    "b"
  ),

  new Soru(
    "Tәnzimlәyici vә mühafizәedici funksiya әmәk hüququnun hansı fuksiyasına aiddir?",
    {
      a: "ümumi funksiyasına",
      b: "tәnzimlәyici funksiyasına",
      c: "mühafizәedici funksiyasına",
      d: "tәrbiyәvi (ideloji) funksiyasına",
      e: "sosial (müdafiә) funksiyasına",
    },
    "a"
  ),
  new Soru(
    "әmәk hüququnun predmetini tәşkil edәn ictimai münasibәtlәrә tәsirinin istiqamәtlәri nәyi ifadә edir?",
    {
      a: "әmәk hüququnun funksiyalarını",
      b: "әmәk hüququnun predmetini",
      c: "әmәk hüququnun metodunu",
      d: "әmәk hüququnun subyektlәrinin vәzifәlәrini",
      e: "әmәk hüququnun әhatә etdiyi obyektlәrin dairәsini",
    },
    "a"
  ),
  new Soru(
    "Lokal normativ akt nәdir?",
    {
      a: "işәgötürәnin öz sәlahiyyәti çәrçivәsindә qәbul etdiyi normativ akt",
      b: "işçinin öz sәlahiyyәti çәrçivәsindә qәbul etdiyi normativ akt",
      c: "hәmkarlar ittifaqının öz sәlahiyyәti çәrçivәsindә qәbul etdiyi normativ akt",
      d: "işәgötürәnin vә hәmkarlar ittifaqının qәbul etdiyi normativ akt",
      e: "heç biri",
    },
    "a"
  ),
  new Soru(
    "Hansı hallarda mәcburi әmәyә yol verilir?",
    {
      a: "hәrbi vә ya fövqәladә vәziyyәtlә әlaqәdar müvafiq qanunvericilik әsasında, habelә qanuni qüvvәyә minmiş mәhkәmә hökmlәrinin icrası zamanı müvafiq dövlәt orqanlarının nәzarәti altında yerinә yetirilәn işlәrdә",
      b: "yalnız hәrbi vәziyyәtlә әlaqәdar",
      c: "yalnız hәrbi vә ya fövqәladә vәziyyәtlә әlaqәdar",
      d: "yalnız qanuni qüvvәyә minmiş mәhkәmә hökmlәrinin icrası zamanı",
      e: "yalnız Azәrbaycan Respublikası Prezidentinin Fәrmanı vә Azәrbaycan Respublikası Nazirlәr Kabinetinin qәrarı ilә yol verilir",
    },
    "a"
  ),
  new Soru(
    "Qadınlara, әlillәrә, yaşı 18­dәn az olan vә sosial müdafiәyә ehtiyacı olan digәr şәxslәrә әmәk münasibәtlәrindә güzәştlәrin, imtiyazların vә әlavә tәminatların müәyyәn edilmәsi....",
    {
      a: "ayrı­seçkilik hesab edilmir",
      b: "ayrı­seçkilik hesab edilir",
      c: "ayrı­seçkilik hesab edilә dә bilәr, edilmәyә dә",
      d: "Dövlәt Әmәk Müfәttişliyinin hansı qәrar qәbul etmәsindәn asılıdır",
      e: "mәhkәmәnin hansı qәrar qәbul etmәsindәn asılıdır",
    },
    "a"
  ),
  // 260 - sual

  new Soru(
    "әcnәbilәr vә vәtәndaşlığı olmayan şәxslәr Azәrbaycan Respublikasının әrazisindә haqqı ödәnilәn işә cәlb edilә bilәrmi?",
    {
      a: "fәrdi icazә verildikdәn sonra cәlb edilә bilәr",
      b: "natamam iş günü ilә işә cәlb oluna bilәr, tam iş günü ilә cәlb edilә bilmәz",
      c: "ancaq Dövlәt Әmәk Müfәttişliyinin razılığı ilә cәlb edilә bilәr",
      d: "mәhkәmәnin qәrarı ilә cәlb edilә bilәr",
      e: "cәlb edilә bilmәz",
    },
    "a"
  ),
  new Soru(
    "Müddәt axınının başlanması tәqvim üzrә müәyyәn edilmiş vaxtın ....",
    {
      a: "birinci gündәn hesablanır",
      b: "ertәsi günündәn hesablanır",
      c: "birinci hәftәsindәn hesablanır",
      d: "sonuncu gündәn hesablanır",
      e: "işçinin vә işәgötürәnin mülahizәsindәn asılıdır",
    },
    "b"
  ),
  new Soru(
    "Kollektiv müqavilәlәrdә, sazişlәrdә, habelә әmәk müqavilәlәrindә әmәk qanunvericiliynә nisbәtәn daha geniş әlavә әmәk şәraiti, sosial,iqtisad maddi­mәişәt vә digәr münasibәtlәri әhatә edәn әmәk şәraiti .....",
    {
      a: "işәgötürәnin mülahizәsindәn asılıdır",
      b: "nәzәrdә tutula bilәr",
      c: "işçinin mülahizәsindәn asılıdır",
      d: "hәmkarlar ittifaqı tәşkilatının rәyindәn asılıdır",
      e: "nәzәrdә tutula bilmәz",
    },
    "b"
  ),
  new Soru(
    "әmәk müqavilәlәrinә işçilәrin hüquqlarını qüvvәdә olan qanunvericiliyә, kollektiv müqavilәyә vә sazişә nisbәtәn mәhdudlaşdıran şәrtlәrin daxil edilmәsinә.....",
    {
      a: "yol verilir",
      b: "yol verilә dә bilәr, yol verilmәyә dә",
      c: "yol verilmir",
      d: "işçinin vә işәgötürәnin qarşılıqlı razılığı ilә yol verilir",
      e: "yalnız işçinin razılığı ilә yol verilir",
    },
    "c"
  ),
  new Soru(
    "Azәrbaycan Respublikası әmәk Mәcәllәsi hansı ictimai münasibәtlәri tәnzimlәyir?",
    {
      a: "yalnız işçilәrlә işәgötürәnlәr arasında yaranan әmәk münasibәtlәrini",
      b: "işçilәr, işәgötürәn vә yerli icra hakimiyyәti orqanları arasında yaranan münasibәtlәr",
      c: "işçilәr, işәgötürәnlәr, yerli icra hakimiyyәti vә bәlәdiyyә orqanları arasında yaranan münasibәtlәr",
      d: "hüquqi şәxslәr arasında yaranan әmlak münasibәtlәrini",
      e: "işçilәrlә işәgötürәnlәr arasında yaranan әmәk münasibәtlәrini, habelә onlarla müvafiq dövlәt hakimiyyәti orqanları, hüquqi şәxslәr arasında hәmin münasibәtlәrdәn törәyәn digәr hüquq münasibәtlәrini",
    },
    "e"
  ),
  new Soru(
    "Azәrbaycan Respublikasının әmәk qanunvericiliyi sisteminә daxil olan normativ­hüquqi aktlara aşağıdakılardan hansı daxil deyildir:",
    {
      a: "Azәrbaycan Respublikasının Әmәk Mәcәllәsi",
      b: "Azәrbaycan Respublikasının müvafiq qanunları",
      c: "kollektiv müqavilә vә sazişlәr",
      d: "müvafiq icra hakimiyyәt orqanlarının sәlahiyyәti çәrçivәsindә qәbul etdiyi normativ­hüquqi aktlar",
      e: "әmәk, sosial­iqtisadi mәsәlәlәrlә әlaqәdar Azәrbaycan Respublikasının bağladığı vә ya tәrәfdar çıxdığı beynәlxalq müqavilәlәr",
    },
    "c"
  ),
  new Soru(
    "Sosial tәrәfdaşlıq prinsipi nәyi nәzәrdә tutur?",
    {
      a: "işçilәrin vә işәgötürәnlәrin qarşılıqlı fәaliyyәtini",
      b: "sosial tәrәfdaşlığı",
      c: "mәcburi әmәyin qadağan edilmәsini",
      d: "әdalәtli әmәk şәraitinin tәmin edilmәsiniәmәyin azadlığı, hüquq bәrabәrliyini",
      e: "әmәyin azadlığı, hüquq bәrabәrliyini",
    },
    "a"
  ),
  new Soru(
    "Normativ hüquqi aktın mәkana görә qüvvәsi nәyi müәyyәn edir?",
    {
      a: "normativ hüquqi aktın aid edildiyi әraziyә görә",
      b: "normativ hüquqi aktın nә vaxtadәk qüvvәdә olmasını",
      c: "normativ hüquqi aktın nә vaxt qüvvәdәn düşmәsini",
      d: "normativ hüquqi aktın aid edildiyi sәlahiyyәtli dövlәt orqanına görә",
      e: "normativ hüquqi aktın aid edildiyi respublika әrazisindә yerlәşәn xarici hüquqi şәxsә görә",
    },
    "a"
  ),
  new Soru(
    "Normativ hüquqi aktın zamana görә qüvvәsi nәyi müәyyәn edir?",
    {
      a: "normativ hüquqi aktın nә vaxt qәbul olunmasnı",
      b: "normativ hüquqi aktın nә vaxt qüvvәyә minmәsini",
      c: "normativ hüquqi aktın nә vaxtadәk qüvvәdә olmasını",
      d: "normativ hüquqi aktın nә vaxt qәbul olunmasnı, nә vaxt qüvvәyә minmәsini vә nә vaxtadәk qüvvәdә olmasını",
      e: "nә vaxt dәrs olunmasını",
    },
    "d"
  ),
  new Soru(
    "Normativ hüquqi aktlar nә vaxt qüvvәyә minir?",
    {
      a: "qәbul olunduğu gün",
      b: "dәrc edildiyi gün",
      c: "3­cü oxunuşdun keçdikdәn sonra",
      d: "Prezident imzaladıqdan sonra",
      e: "Milli Mәclis tәsdiq etdiyi gün",
    },
    "b"
  ),
  new Soru(
    "Hansı halda işәgötürәn işçini daha yüngül işә keçirә bilәr?",
    {
      a: "işçinin sәhhәtinә görә daha yüngül işdә işlәmәyә ehtyacı olduqda",
      b: "işçi әmәk funksiyalarını yerinә yetirmәdikdә",
      c: "işçi müvәqqәti olaraq әmәk qabiliyyәtini itirdikdә",
      d: "işçi üzürsüz sәbәbdәn 1 aydan artıq müddәtә işә gәlmәdikdә",
      e: "heç bir halda",
    },
    "a"
  ),
  new Soru(
    "әmәyin mühafizәsi normalarının, qaydalarının, habelә әmәyin mühafizәsinә dair normativ hüquqi aktların tәlәblәrinin yerinә yetirilmәsinә nәzarәti hansı dövlәt orqanı hәyata keçirir?",
    {
      a: "AR­-nın Nazirlәr Kabineti",
      b: "AR-­nın Milli Mәclisi",
      c: "yerli icra hakimiyyәti orqanları",
      d: "Dövlәt Әmәk Müfәttişliyi Xidmәti",
      e: "Dövlәt Mәşğulluq Xidmәti orqanları",
    },
    "d"
  ),
  new Soru(
    "Ayrı­seçkiliyә mәruz qalan işçi pozulmuş hüququnun bәrpa edilmәsi tәlәbi ilә hansı dövlәt orqanına müraciәt edә bilәr?",
    {
      a: "Dövlәt Әmәk Müfәttişliyi Xidmәtinә müraciәt edә bilәr",
      b: "tәkbaşına tәtil edı bilәr",
      c: "kollektiv tәtil edә bilәr",
      d: "mәhkәmәyә müraciәt edә bilәr",
      e: "mәşğulluq xidmәti orqanına müraciәt edә bilәr",
    },
    "d"
  ),
  new Soru(
    "Əmәk qanunvericiliyinә әmәl olunmasına dövlәt nәzarәtini hәyata keçirәn dövlәt orqanı kimi Dövlәt әmәk Müfәttişliyi Xidmәti vәzifәli şәxslәrin qәrarlarından vә göstәrişlәrindәn hansı qaydada şikayәt verә bilәr?",
    {
      a: "mәhkәmәyә şikayәt verә bilәr",
      b: "inzibati qaydada cәrimә edә bilәr",
      c: "intizam mәsuliyyәtinә cәlb edә bilәr",
      d: "inzibati qaydada vә mәhkәmәyә şikayәt verә bilәr",
      e: "cinayәt mәsuliyyәtinә cәlb edә bilәr",
    },
    "d"
  ),
  new Soru(
    "Əmәk qanunvericiliyinә әmәl olunmasına dövlәt nәzarәtini hansı dövlәt orqanı hәyata keçirir?",
    {
      a: "Dövlәt Әmәk Müfәttişliyi Xidmәti",
      b: "AR-­nın Nazirlәr Kabineti",
      c: "AR­-nın Milli Mәclisi",
      d: "yerli icra hakimiyyәti orqanları",
      e: "Dövlәt Mәşğulluq Xidmәti orqanları",
    },
    "a"
  ),
  new Soru(
    "әmәyin ödәnilmәsi vә әmәk münasibәtlәri, әmәyin mühafizәsi, әmәk ehtiyatlarından istifadә, әmәk miqrasiyası, әhalinin sosial müdafiәsi, әlillәrin vә 18 yaşınadәk sağlamlıq imkanları mәhdud olan işçilәrin reabilitasiyası problemlәri sahәsindә dövlәt siyasәtinin hansı dövlәt orqanı hәyata keçirir?",
    {
      a: "AR-­nın Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyi",
      b: "AR-­nın Nazirlәr Kabineti",
      c: "AR-­nın Milli Mәclisi",
      d: "yerli icra hakimiyyәti orqanları",
      e: "Dövlәt Mәşğulluq Xidmәti orqanları",
    },
    "a"
  ),
  new Soru(
    "İşçilәrdәn әmәk müqavilәsi ilә müәyyәn edilmiş şәrtlәrin, öhdәliklәrin vaxtında vә keyfiyyәtlә yerinә yetirilmәsini tәlәb etmәk işәgötürәnin әsas vәzifәsidir, yoxsa hüququdur?",
    {
      a: "әsas vәzifәsidir",
      b: "hüququdur",
      c: "bu әmәk müqavilәsi ilә müәyyәn olunur",
      d: "bu kollektiv müqavilә ilә müәyyәn olunur",
      e: "bu kollektiv sazişlә müәyyәn olunur",
    },
    "b"
  ),
  new Soru(
    "Sәrbәst surәtdә ixtisasına, sәnәtinә, peşәsinә uyğun әmәk fәaliyyәti növü vә iş yeri seçәrәk әmәk müqavilәsi bağlamaq işçinin әsas vәzifәsidir, yoxsa hüququdur?",
    {
      a: "әsas vәzifәsidir",
      b: "hüququdur",
      c: "bu әmәk müqavilәsi ilә müәyyәn olunur",
      d: "bu kollektiv müqavilә ilә müәyyәn olunur",
      e: "bu kollektiv sazişlә müәyyәn olunur",
    },
    "b"
  ),
  new Soru(
    "Aşağıdakılardan hansı işçinin hüquqi statusunun tәrkib elementinә aiddir?",
    {
      a: "işçinin hüquqa malik olma qabiliyyәti (әmәk hüquq subeyektliliyi)",
      b: "işçinin әsas hüquqları, azadlıqları vә vәzifәlәri",
      c: "işçinin qanuni mәnafelәri vә hüquqi tәminatlar sistemi",
      d: "işçinin әmәk hüquqi mәsuliyyәti",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "әmәk qanunvericiliyinin tәlәblәrini pozduqda hüquqi mәsuliyyәtin hansı növü tәtbiq olunur?",
    {
      a: "intizam mәsuliyyәt",
      b: "inzibati mәsuliyyәt",
      c: "mülki­hüquqi mәsuliyyәt",
      d: "cinayәt mәsuliyyәt",
      e: "cәrimә",
    },
    "b"
  ),
  // 280 - sual
  new Soru(
    "Sığorta olunmuş işçiyә hansı sәnәd tәqdim olunur?",
    {
      a: "qanunvericiliklә nәzәrdә tutulan qaydada tәrtib edilimiş sığorta şәhadәtnamәsi vә dövlәt sosial sığorta şәhadәtnamәsi",
      b: "sertifikat",
      c: "dövlәt sosial sığorta şәhadәtnamәsi",
      d: "sığorta haqqında qeydiyyat vәsiqәsi",
      e: "sığorta haqqında pasport",
    },
    "a"
  ),
  new Soru(
    "İşçilәrin sosial sığortası hansı formalarda hәyata keçirilir?",
    {
      a: "işçilәrin mәcburi dövlәt sığortası",
      b: "mәcburi dövlәt sığortası, işçillәrin könüllü sığortalanması, işәgötürәn tәrәfindәn aparılan әlavә sığorta forması",
      c: "işçilәrin könüllü sığortalanması",
      d: "işçilәrin işәgötürәn tәrәfindәn aparılan әlavә sığortası",
      e: "kollevtiv müqavilә әsasında işçilәrin sığortası",
    },
    "b"
  ),
  new Soru(
    "Operativ vә әmlak meyarları nәyi müәyyәn edir?",
    {
      a: "işçinin әmәk hüquq subyektliliyini",
      b: "әmәk kollektivinin әmәk hüquq subyektliliyini",
      c: "işәgötürәnin әmәk hüquq subyektliliyini",
      d: "hәmkarlar ittifaqının әmәk hüquq subyektliliyini",
      e: "istehsal­tәsәrrüfat birliklәrinin әmәk hüquq subyektliliyini",
    },
    "c"
  ),
  new Soru(
    "әmәk qanunvericiliyindә tәsbit edilmiş öhdәliklәrin yerinә yetirilmәmәsinә görә mәsuliyyәt nәyi müәyyәn edir?",
    {
      a: "işdәn azad edilmәni",
      b: "xәbәrdarlığı",
      c: "töhmәti",
      d: "işçinin neqativ mәsuliyyyәtini",
      e: "şiddәtli töhmәti",
    },
    "d"
  ),
  new Soru(
    "İşçi kimlәrә deyilir?",
    {
      a: "işәgötürәnin sәrәncamı ilә işәgötürülәnlәrә",
      b: "muzdlu çalışanlra",
      c: "әmәk müqavilәsi ilә işlәyәnlәrә",
      d: "әmәk müqavilәsinin tәrәflәrindәn birinә",
      e: " işәgötürәnlә fәrdi qaydada yazılı әmәk müqavilәsi bağlayaraq müvafiq iş yerindә haqqı dәnilmәklә çalışan fiziki şәxsә",
    },
    "e"
  ),
  new Soru(
    "Mәhsulun istehsalı vә tәdavülü, satışının pul ilә ifadә olunmuş cari mәsrәflәr necә adlanır?",
    {
      a: "bazar qiymәti",
      b: "maya dәyәri",
      c: "balans dәyәri",
      d: "uzun müddәt istifadә edilәn, bir çox silsilә әrzindә istehsalda iştirak edәn istehsal vasitәlәrinin dәyәri",
      e: "amortizasiya müddәtlәri uzun olan istehsal vasitәlәrinin dәyәri",
    },
    "b"
  ),
  new Soru(
    "Rәqabәt şәraitindә açıq bazarda özgәniklәşdirilә bilәcәk әn ehtimallı qiymәt necә adlanır?",
    {
      a: "bazar qiymәti",
      b: "maya dәyәri",
      c: "balans dәyәri",
      d: "uzun müddәt istifadә edilәn, bir çox silsilә әrzindә istehsalda iştirak edәn istehsal vasitәlәrinin dәyәri",
      e: "amortizasiya müddәtlәri uzun olan istehsal vasitәlәrinin dәyәri",
    },
    "a"
  ),
  new Soru(
    "Hansı halda işәgötürәn işçidәn yazılı izahat almalıdır?",
    {
      a: "işçilәrin peşәkarlıq sәviyyәsini yoxlamaq üçün",
      b: "ona vurulan ziyanı müәyyәn etmәk üçün",
      c: "ona vurulan maddi ziyanı müәyyәn etmәk üçün",
      d: "ona vurulan mәnәi ziyanı müәyyәn etmәk üçün",
      e: "işçi işә gec gәldikdә",
    },
    "c"
  ),
  new Soru(
    "Tәbii fәlakәtlәr normal tәsәrrüfat, istehsal texnologiya riski, son zәrurәt vә zәruri müdafiә:",
    {
      a: "işçinin maddi mәsuliyyәtini istisna edәn haldır",
      b: "işçinin mәnәvi mәsuliyyәtini istisna edәn haldır",
      c: "işçinin maddi mәsuliyyәtini istisna edәn hal deyil",
      d: "işçinin mәnәvi mәsuliyyәtini istisna edәn hal deyil",
      e: "bütün cavablar düzdür",
    },
    "a"
  ),
  new Soru(
    "Vurulmuş ziyanın mәblәğinә bәrabәr mәsuliyyәt necә adlanır?",
    {
      a: "әmәk mәsuliyyәti",
      b: "maddi mәsuliyyәt",
      c: "mәnәvi mәsuliyyәt",
      d: "tam maddi mәsuliyyәt",
      e: "heç biri",
    },
    "d"
  ),
  new Soru(
    "Hansı halda işçi ilk olaraq işәgötürәnә yazılı әrizә ilә müraciәt etmәlidir?",
    {
      a: "dәymiş maddi ziyanın ödәnilmәsi ilә bağlı",
      b: "dәymiş mәnәvi ziyanın ödәnilmәsi ilә bağlı",
      c: "işdә xәsarәt aldığı zaman",
      d: "işçi püşә xәstәliyinә tutulduğu zaman",
      e: "işçi әmәk müqavilәsini lәğv etmәk istәdikdә",
    },
    "a"
  ),
  new Soru(
    "Mәhkәmәlәr tәrәfindәn:",
    {
      a: "maddi ziyanın vurulması vә onun mәblәği müәyyn edilir",
      b: "tәrәflәrin mövqelәri müәyyәnlәşdirilir",
      c: "mәnәvi ziyanın vurulması vә onun mәblәği müәyyn edilir",
      d: "tәqsirsizlik prezumpsiyası әsas götürülür",
      e: "tәqsirlilik prezumpsiyası әsas götürülür",
    },
    "c"
  ),
  new Soru(
    "Hansı halda işәgötürәn tәrәfindәn pul formasında zәrәrin әvәzi ödәnilir?",
    {
      a: "işçiyә maddi ziyan vurulduqda",
      b: "işçiyә mәnәvi ziyan vurulduqda",
      c: "işçi iş vaxtı xәsarәt aldıqda",
      d: "işçi peşә xәstәliyinә tutulduqda",
      e: "işçi işdәn azad olduqda",
    },
    "b"
  ),
  new Soru(
    "әmәk hüquq münasibәti subyektlәrinin şәxsi qeyri­әmlak hüquqlarına vurulan ziyan necә adlanır?",
    {
      a: "maddi ziyan",
      b: "ümumi zәrәr",
      c: "şәxsi nüfuza vurulan ziyan",
      d: "mәnәvi ziyan",
      e: "işgüzar münsibәtlәrә vurulan ziyan",
    },
    "d"
  ),
  new Soru(
    "Aylıq ödәnişlәr yolu ilә hansı halda işçiyә dәymiş zәrәrin әvәzi ödәnilir?",
    {
      a: "istehsalatda әmәk xәsarәti nәtcәsindә zәrәr çәkmiş vә әlil olan işçiyә",
      b: "istehsalatda әmәk xәsarәti nәtcәsindә zәrәr çәkmiş yaşı 18­dә az olan işçiyә",
      c: "istehsalatda әmәk xәsarәti nәtcәsindә zәrәr çәkmiş işçiyә",
      d: "istehsalatda әmәk xәsarәti nәtcәsindә zәrәr çәkmiş kvota üzrә çalışan işçiyә",
      e: "düzgün cavab yoxdur",
    },
    "c"
  ),
  new Soru(
    "İşçilәrin sağlam vә tәhlükәsiz şәraitdә işlәmәk hüququ AR әM­nin hansı maddәsindә әks olunmuşdur?",
    {
      a: "205-­ci maddәsindә",
      b: "283-­ci maddәsindә",
      c: "207-­ci maddәsindә",
      d: "215-­ci maddәsindә",
      e: "70­ci maddәsindә",
    },
    "c"
  ),
  new Soru(
    "İşçinin işdәn çıxarıldığı gündәn başlayaraq işçinin әvvәlki işinә bәrpa edilәnә qәdәrki müddәt necә adlanır?",
    {
      a: "ezamiyyәt",
      b: "mәzuniyyәt",
      c: "ödәnişli mәzuniyyәt",
      d: "tәhsil mәzuniyyәti",
      e: "mәcburi işburaxma",
    },
    "e"
  ),
  new Soru(
    "Düzünә vә yanakı qәsd aşağıdakılardan hansının formalarıdır?",
    {
      a: "tәqsirin",
      b: "ehtiyatsızlığın",
      c: "qәsdin",
      d: "etinasızlığın",
      e: "heç birinin",
    },
    "c"
  ),
  new Soru(
    "İşçi hansı halda 1 aylıq orta әmәk haqqı mәbdәğindә maddi mәsuliyәti daşıyır?",
    {
      a: "ehtyatsızlıq üzündәn işәgötürәnә vurduğu ziyana görә",
      b: "qәsdәn işәgötürәnә vurduğu ziyana görә",
      c: "mәsuliyyәtsizliyi nәticәsindә işәgötürәnә vurduğu ziyana görә",
      d: "psixotrop maddәlәrdәn istifadә nәticәsindә işәgötürәnә vurduğu ziyana görә",
      e: "işә sәrxoş gәldikdә",
    },
    "a"
  ),
  new Soru(
    "Şәxsin törәtdiyi hüquqa zidd әmәlә vә onun nәticәsinә psixoloji münasibәti necә adlanır?",
    {
      a: "tәqsir",
      b: "qәsd",
      c: "ehtiyatsızlıq",
      d: "etinasızlıq",
      e: "mәsuliyyәtsizlik",
    },
    "a"
  ),

  // 300 - sual

  new Soru(
    "Ziyanın hәqiqәtәn vurulduğu aşkar olduqda, tәqsirkarın әmәli qanuna zidd olduqda, tәqsirkarın qanuna zidd әmәli ilә bu әmәlin nәticәsi arasında sәbәbli әlaqә olduqda vә әmәl qәsdәn vә ya ehtiyatsızlıqla törәdildik dә hansı mәsuliyyәt yaranır?",
    {
      a: "maddi mәsuliyyәt",
      b: "intizam mәsuliyyәti",
      c: "әmәk mәsuliyyәti",
      d: "maddi mәsuliyyәt vә әmәk mәsuliyyәti",
      e: "bütün cavablar düzdür",
    },
    "a"
  ),
  new Soru(
    "Kompensasiya xarakterli olması aşağıdakılardan hansının әsas cәhәtidir?",
    {
      a: "intizam mәsuliiyәtinin",
      b: "maddi mәsuliyyәtin",
      c: "әmәk mәsuliyyәtinin",
      d: "maddi mәsuliyyәtin vә әmәk mәsuliyyәtinin",
      e: "heç birinin",
    },
    "b"
  ),
  new Soru(
    "әmәk müqavilәsi üzrә öhdәliklәri yerinә yetirәrkәn birinin digәrinә ziyan vurduğu zaman:",
    {
      a: "işәgötürәnin maddi mәsuliyyәti yaranır",
      b: "işçinin maddi mәsuliyyәti yaranır",
      c: "әmәk kollektivinin maddi mәsuliyyәti yaranır",
      d: "işçi vә işәgötürәnin maddi mәsuliyyәti yaranır",
      e: "hәmkarlar ittifaqı orqanının maddi mәsuliyyәti yaranır",
    },
    "d"
  ),
  new Soru(
    "әmәk müqavilәlәrinә işçilәrin hüquqlarını qüvvәdә olan qanunvericiliyә, kollektiv müqavilәyә vә sazişә nisbәtәn mәhdudlaşdıran şәrtlәrin daxil edilmәsi nәticәsindә işçiyә dәyәn ziyan...",
    {
      a: "işәgötürәn tәrәfindәn tam ödәnilir",
      b: "işәgötürәn tәrәfindәn deyil, hәmkarlar ittifaqı tәşkilatı tәrәfindәn ödәnilir",
      c: "hәmkarlar ittifaqı tәşkilatının razılığı ilә işәgötürәn tәrәfindәn ödәnilir",
      d: "işәgötürәn tәrәfindәn qismәn ödәnilir",
      e: "ümumiyyәtlә, ödәnilir",
    },
    "a"
  ),
  new Soru(
    "İşәgötürәnin mürәacәti әsasında ona dәymiş ziyan hansı hallarda mәhkәmә qaydasında tutula bilәr?",
    {
      a: "ziyan işçi tәrәfindәn tam maddi mәsuliyyәt daşdığı halda vurulmuşsa",
      b: "vurulmuş ziyanın mәblәği işçinin orta aylıq әmәk haqqından çoxdursa",
      c: "ziyan qәsd vә ehtiyatsızlıq formasında vurulmuşdursa",
      d: "işçi bu ziyanı könüllü olaraq ödәmәkdәn imtina edәrsә",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "Aşağıdakılradan hansı işçinin maddi mәsuliyyәtini istisna edәn haldır?",
    {
      a: "tәbii fәlakәtlәr",
      b: "normal tәsәrrüfat, istehsal texnologiya riski",
      c: "son zәrurәt",
      d: "zәruri müdafiә",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "Tam maddi mәsuliyyәt nәdir?",
    {
      a: "dәymiş ziyanın 1 aylıq orta әmәk haqqı ilә ödәnilmәsi",
      b: "dәymiş ziyanın cari ilin bütün aylır üzrә ödәnilmәsi",
      c: "dәymiş ziyanın ödәnilmәsinin әmlak xarakterli olması",
      d: "vurulmuş ziyanın mәblәğinә bәrabәr mәsuliyyәt",
      e: "dәymiş ziyana әmәk müqavilәsinin lәğvi",
    },
    "d"
  ),
  new Soru(
    "AR Əmək məcəlləsi­nin 195­-ci maddәsi nәyәi nәzәrdә tutur",
    {
      a: "işçilәrin hüquqlarını",
      b: "işәgötürәnin işçiyә vurduğu ziyana görә maddi mәsuliyyәt daşıdığı halları",
      c: "işçilәrin sağlam vә tәhlükәsiz şәraitdә işlәmәk hüququnu",
      d: "әmәk haqqının ödәnilmәsi qaydalarını",
      e: "әmәk müqavilәsinin lәğv edilmәsi qaydalarını",
    },
    "b"
  ),
  new Soru(
    "Mәnәvi ziyanın vurulması vә onun mәblәği kim tәrәfindәn müәyyn edilir?",
    {
      a: "işәgötürәn tәrәfindәn",
      b: "hәmkalar ittifaqı tәrәfindәn",
      c: "mәhkәmәlәr tәrәfindәn",
      d: "AR Nazirlәr Kabineti tәrәfindәn",
      e: "Baş Mәşğulluq İdarәsi tәrәfindәn",
    },
    "c"
  ),
  new Soru(
    "İşçiyә vurulmuş mәnәvi ziyanın mәblәği işәgötürәn tәrәfindәn hansı formada ödәnilir?",
    {
      a: "әmlak formasında",
      b: "pul formasında",
      c: "1 aylıq әmәk haqqı formasında",
      d: "işçinin istifadә etdiyi istehlak әşyaları formasında",
      e: "müәssisәdә istehsal olunan mal formasında",
    },
    "b"
  ),
  new Soru(
    "Aşağıdakılardan hansı işçinin şәxsi qeyri­әmlak hüququna aiddir?",
    {
      a: "әmәk hüququ",
      b: "istirahәt hüququ",
      c: "minimum әmәk haqqından aşağı olmayan әmәk haqqı almaq huququ",
      d: "normal әmәk şәraitindә işlәmәk hüququ",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "Mәnәvi ziyan әmәk hüquq münasibәti subyektlәrinin hansı hüquqlarına ziyan vurur?",
    {
      a: "maddi hüquqlarına",
      b: "әxlaqi hüquqlarına",
      c: "şәxsi әmlak hüquqlarına",
      d: "şәxsi qeyri­әmlak hüquqlarına",
      e: "işgüzar münsibәtlәrinә",
    },
    "d"
  ),
  new Soru(
    "AR Əmək məcəlləsi­nin 207-­ci maddәsi nәyәi nәzәrdә tutur?",
    {
      a: "işçilәrin hüquqlarını",
      b: "işçilәrin vәzifәlәrini",
      c: "işçilәrin sağlam vә tәhlükәsiz şәraitdә işlәmәk hüququnu",
      d: "әmәk haqqının ödәnilmәsi qaydalarını",
      e: "әmәk müqavilәsinin lәğv edilmәsi qaydalarını",
    },
    "c"
  ),
  new Soru(
    "Mәcburi işburaxma müddәti nәdir?",
    {
      a: "işçinin isdәn imtina edәrәk işә çıxmadığı müddәt",
      b: "işçinin xәstә olduğu müddәt",
      c: "işçinin xәsarәt aldığı müddәt",
      d: "işçinin ezamiyyәtdә olduğu müddәt",
      e: "işçinin işdәn çıxarıldığı gündәn başlayaraq işçinin әvvәlki işinә bәrpa edilәnә qәdәrki müddәt",
    },
    "e"
  ),
  new Soru(
    "Hansı әsaslar olduqda maddi mәsuliyyәt yaranır?",
    {
      a: "ziyanın hәqiqәtәn vurulduğu aşkar olduqda",
      b: "tәqsirkarın әmәli qanuna zidd olduqda",
      c: "tәqsirkarın qanuna zidd әmәli ilә bu әmәlin nәticәsi arasında sәbәbli әlaqә olduqda",
      d: "әmәl qәsdәn vә ya ehtiyatsızlıqla törәdildikdә",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "Maddi mәsuliyyәt üçün hansı xarakterik cәhәt әsasdır?",
    {
      a: "ödәnişli olması",
      b: "kompensasiya xarakterli olması",
      c: "әvәzsiz olması",
      d: "әvәzli olması",
      e: "ödәnişsiz olması",
    },
    "b"
  ),
  new Soru(
    "Hansı halda işçi 1 il müddәtindә mәhkәmәyә müraciәt edә bilәr?",
    {
      a: "hüququnun pozulduğunu aşkar etdiyi halda",
      b: "işçinin razılığı olmadan başqa işә keçirildikdә",
      c: "daha az maaşlı işә keçirildikdә",
      d: "mәzuniyyәtdә olduğu müddәtdә işdәn azad olunduqda",
      e: "ezamiyyәtdә olduğu müddәtdә işdәn azad olunduqda",
    },
    "a"
  ),
  new Soru(
    "Hansı halda işәgötürәn ziyanın vurulmasını aşkar etdiyi gündәn 1 il müddәtindә mәhkәmәyә müraciәt edә bilәr?",
    {
      a: "maddi ziyanın vurlması ilә bağlı",
      b: "mәnәvi ziyanın vurlması ilә bağlı",
      c: "işçi mütәmadi işә gәlmәdikdә",
      d: "işçi üzürsüz sәbәbdәn 15 gündәn artıq işә gәlmәdikdә",
      e: "işçi külli miqdarda işәgötürәnә ziyan vurduqda",
    },
    "a"
  ),
  new Soru(
    "Uzun müddәt istifadә edilәn, bir çox silsilә әrzindә istehsalda iştirak edәn, amortizasiya müddәtlәri uzun olan istehsal vasitәlәrinin dәyәri necә adlanır?",
    {
      a: "bazar qiymәti",
      b: "maya dәyәri",
      c: "balans dәyәri",
      d: "әsas vәsaitlәr",
      e: "fiziki kapital",
    },
    "d"
  ),
  new Soru(
    "Müәssisәnin әsas vәsaitlәrinin onların balansına daxil edilmiş vә balans cәdvәllәrindә әks etdirilmiş dәyәri necә adlanır?",
    {
      a: "bazar qiymәti",
      b: "maya dәyәri",
      c: "balans dәyәri",
      d: "uzun müddәt istifadә edilәn, bir çox silsilә әrzindә istehsalda iştirak edәn istehsal vasitәlәrinin dәyәri",
      e: "amortizasiya müddәtlәri uzun olan istehsal vasitәlәrinin dәyәri",
    },
    "c"
  ),
  // 320 - ci sual
  new Soru(
    "Barışdırıcı komissiyadan, vasitәçidәn, әmәk arbitrajından hansı hallarda istifadә olunur?",
    {
      a: "kollektiv әmәk mübahisәlәrinin hәlli üçün",
      b: "fәrdi әmәk mübahisәlәrinin hәlli üçün",
      c: "tәtillәr başa çatdıqda",
      d: "lokaut elan edildikdә",
      e: "bütün göstәrilәn hallarda",
    },
    "a"
  ),
  new Soru(
    "әmәk müqavilәsi әmәk hüququnda nәyin әsasını tәşkil edir?",
    {
      a: "әmәk hüquq münasibәtlәrinin yaranmasının әsasını",
      b: "işçinin hüquqlarının yaranmasını",
      c: "işçinin vәzifәlәrinin yaranmasını",
      d: "işәgötürәnin hüquqlarının yaranmasını",
      e: "işәgötürәnin vәzifәlәrinin yaranmasını",
    },
    "a"
  ),
  new Soru(
    "Azәrbaycan Respublikasının әmәk Mәcәllәsi ilә әmәk hüquqlarının vә vәzifәlәrinin yaranması, dәyişdirilmәsi vә xitam edilmәsi müvafiq hallarda tәqvim vaxtı ilә hesablanan.....",
    {
      a: "bütün göstәrilәnlәrlә müәyyәn edilir",
      b: "illәrlә müәyyәn edilir",
      c: "aylarla müәyyәn edilir",
      d: "hәftәlәrlә müәyyәn edilir",
      e: "günlәrlә müәyyәn edilir",
    },
    "a"
  ),
  new Soru(
    "İşçiyә yeni peşә öyrәtmәnin vә ixtisasa yiyәlәnmәnin şәrtlәri, qaydaları, müddәti vә tәrәflәrinin öhdәliklәri әldә edilәn razılıq әsasında bağlanan müqavilә ...",
    {
      a: "müvafiq müqavilә ilә vә yaxud әmәk müqavilәsi ilә tәnzimlәnir",
      b: "müvafiq müqavilә ilә tәnzimlәnir",
      c: "әmәk müqavilәsi ilә tәnzimlәnir",
      d: "müәssisәdaxili intizam qaydaları ilә tәnzimlәnir",
      e: "mülki­hüquqi müqavilә ilә tәnzimlәnir",
    },
    "a"
  ),
  new Soru(
    "әmәk münasibәtlәrini yaradan hüquqi fakt necә adlanır?",
    {
      a: "Әmәk müqavilәsi",
      b: "Lokal akt",
      c: "Kollektiv müqavilә",
      d: "Kollektiv saziş",
      e: "Kollektiv müqavilә vә saziş",
    },
    "a"
  ),
  new Soru(
    "Azәrbaycan Respublikası әmәk Mәcәllәsi aşağıdakı şәxslәrә şamil edilmir?",
    {
      a: "bütün göstәrilәnlәrin hamısında",
      b: "Hәrbi qulluqçulara",
      c: "Mәhkәmә hakimlәrinә",
      d: "Azәrbaycan Respublikasının Milli Mәcәllәsinin deputatlarına vә bәlәdiyyәlәrә seçilmiş şәxslәrә",
      e: "Xarici ölkәlәrin hüquqi şәxsi ilә hәmin ölkәdә әmәk müqavilәsi bağlayıb әmәk funksiyasını Azәrbaycan Respublikasında fәaliyyәt göstәrәn müәssisәdә (filialda, nümayәndәlikdә) yerinә yetirәn әcnәbilәrә",
    },
    "a"
  ),
  new Soru(
    "İşsizliyә görә müavinәtin ödәniş müddәti nә qәdәrdir?",
    {
      a: "12 alıq dövr әrzindә 30 tәqvim hәftәdәn çox olmamaqla",
      b: "12 aylıq dövr әrzindә 26 tәqvim hәftәsindәn çox olmamaqla",
      c: "12 aylıq dövr әrzindә 20 tәqvim hәftәsindәn çox olmamaqla",
      d: "1 ildәn çox olmamaqla",
      e: "2 ildәn çox olmamaqla",
    },
    "b"
  ),
  new Soru(
    "әmәk hüquq münasibәtlәrinin xitamının әsası qismindә nә çıxış edir?",
    {
      a: "tәrәflәrdәn birinin tәşәbbüsü ilә",
      b: "tәrәflәrdәn asılı olmayan hallara üzrә",
      c: "qanunvericilikdә nәzәrdә tutulmuş hallar üzrә",
      d: "şәxsi xarakter daşıdığından işçinin ölümü ilә",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "әmәk hüquq münasibәtәlrindә hüquqi aktların dәyişdirilmәsinin xarakterik cәhәti hansıdır?",
    {
      a: "birtәrәfli olması",
      b: "ikitәrәfli olması",
      c: "işәgötürәn tәrәfindәn dәyişdirilmәsi",
      d: "qanunvericilikdә nәzәrdә tutulmşuş hallar üzrә dәyişdirilmәsi",
      e: "işçinin razılığı ilә dәyişdirilmәsi",
    },
    "b"
  ),
  new Soru(
    "әmәk hüquq münasibәtlәrinin yaranmasının әsasını nә tәşkil edir?",
    {
      a: "әmәk müqavilәsi",
      b: "müәssisә rәhbәrinin sәrәncamı",
      c: "normativ hüquqi aktlar",
      d: "işçinin әmәk qabiliyyәti",
      e: "görülәn kontkret iş üzrә razılaşma olduqda",
    },
    "a"
  ),
  new Soru(
    "әmәk münasibәtlәrinin yaranması işçinin üzәrinә hansı vәzifәlәri qoyur?",
    {
      a: "әmәk şәraitinin yaradılmasını",
      b: "istirahәt vaxtının verilmәsini",
      c: "iş vaxtının mәhdudlaşdırılmasını",
      d: "әmәk funksiyasının şәxsәn yerinә yetirilmәsini",
      e: "bütün cavablar düzdür",
    },
    "d"
  ),
  new Soru(
    "әmәk münasibәtlәrinin yaranması işәgötürәnin üzәrinә hansı vәzifәlәri qoyur?",
    {
      a: "әmәk şәraitinin yaradılmasını",
      b: "istirahәt vaxtının verilmәsini",
      c: "iş vaxtının mәhdudlaşdırılmasını",
      d: "әmәk haqqının vaxtında verilmәsini",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "Aşağıdakılardan hansı әmәk hüquq münasibәtini әks etdirir?",
    {
      a: "tәşkilati­idarәçilik münasibәtlәri",
      b: "işәdüzәltmә üzrә hüquq münasibәtlәrini",
      c: "әmәk mübahisәlәrinin hәlli üzrә hüquq münasibәtlәrini",
      d: "әmәk müqavilәsi әsasında yaranan vә әmәk hüquq normaları ilә tәnimlәnәn әmәk münasibәtlәrini",
      e: "әmәk münasibәtlәrindәn irәli gәlәn münasibәtlәri",
    },
    "d"
  ),
  new Soru(
    "әmәyin mühafizәsi qaydalarına әmәl edilmәsi üzәrindә nәzarәti hansı dövlәt orqanı hәyata keçirir?",
    {
      a: "AR Vergilәr Nazirliyi",
      b: "AR Maliyyә Nazirliyi",
      c: "AR Nazirlәr Kabineti",
      d: "AR Әmәk vә Әhalinin Sosial Müdafiәsi Nazirliyinin Dövlәt Әmәk Müfәttişliyi",
      e: "Milli Mәclisin Hesablaşma Palatasının auditorları",
    },
    "d"
  ),
  new Soru(
    "әmәk hüququnun xüsusi hissәsinә hansı institutsional normalar daxildir?",
    {
      a: "әmәk müqavilәsi",
      b: "iş vaxtı, istirahәt vaxtı",
      c: "әmәk haqqı, әmәk intizamı",
      d: "maddi mәsuliyyәt, әmyәin mühafizәsi",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "Aşağıdakılardan hansı әmәk hüququnun metodunu әks etdirir?",
    {
      a: "müqavilә xarakterli olmasıdır",
      b: "әmәk münasibәtlәrindә tәrәflәrin hüquq bәrabәrliyinin uzlaşması",
      c: "әmәk münasibәtlәrinin mәrkәzlәşdirilmiş lokal, dövlәt vә müqavilә yolu ilә tәnzimlәnmәsinin uzlaşması",
      d: "işçilәrin vә işәgötürәnin әmәk vә mәnafelәrinin müdafiә üsulları sisteminin mövcudluğu",
      e: "bütün cavablar düzdür",
    },
    "e"
  ),
  new Soru(
    "әmәk vәzifәlәrinin pozulmasına görә işәgötürәn tәrәfindәn hansı tәnbeh tәdbirlәri tәtbiq edilә bilәr?",
    {
      a: "intizam tәnbeh tәdbirlәri",
      b: "inzibati tәnbeh tәdbirlәri",
      c: "xәbәrdarlıq",
      d: "töhmәt vә şiddәtli töhmәt",
      e: "işdәn azad etmә",
    },
    "a"
  ),
  new Soru(
    "Aşağıdakılardan hansı әmәk hüquq normalarını әks etdirir?",
    {
      a: "imperativ xarakterli normalar",
      b: "dispozitiv xarakterli normalar",
      c: "tövsiyyә xarakterli normalar",
      d: "alternativ xarakterli normalar",
      e: "imperativ, dispozitiv, tövsiyyә xarakterli normalar",
    },
    "e"
  ),
  new Soru(
    "әmәk Mәcәllәsi şamil edilir:",
    {
      a: "fiziki vә hüquqi şәxsin tәsis etdiklәri mülkiyyәt vә tәşkilati­hüquqi formasından asılı olmayaraq Azәrbaycanda yerlәşәn bütün müәssisәlәrә",
      b: "hәrbi qulluqçulara",
      c: "Milli Mәclisin deputatlarına",
      d: "mәhkәmә hakimlәrinә",
      e: "dövlәt qulluğunda çalışanlara",
    },
    "a"
  ),
  new Soru(
    "Muzdlu әmәyin mәqsәdi nәdir?",
    {
      a: "işәgötürәn üçün mәnfәәt götürmә, әmәyin nәticәsinin satılması yolu ilә insanların tәlәbatlarının ödәnilmәsi, işçi üçün isә әmәk haqqı almaqdır",
      b: "görülәn işdәn gәlir götürülmәsi",
      c: "әmәyin nәticәsinin satılması yolu ilә insanların tәlәbatlarının ödәnilmәsi",
      d: "müәyyәn müddәtә görülәn işlәr üçün sәrf olunan әmәyin ödәnilmәsi",
      e: "yerinә yetirilәn iş üçün sәrf olunan әmәyin müәyyәn hissәsinin ödәnilmәsi",
    },
    "a"
  ),

  // 340 - cı sual

  // new Soru(
  //   "İşsizlik müavinәtinin miqdarı nә qәdәrdir?",
  //   {
  //     a: "55 manat",
  //     b: "50 manat",
  //     c: "60 manat",
  //     d: "80 manat",
  //     e: "85 manat",
  //   },
  //   "a"
  // ),
];

shuffle(sorular);

let randomQuestions = sorular.slice(0, 20);
