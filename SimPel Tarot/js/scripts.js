//Constructor of the Tarot
function Card(id, image, fortune) {
  this.id = id;
  this.image = image;
  this.fortune = fortune;
}

// boş kart destesi
var deck = [];

//dinamik olarak yeni kart oluşturma
for (var i = 1; i < 23; i++) {
  deck.push(new Card(i, "img#" + i, "fortune#" + i));
}

//kartların yorumları ve fotoğrafları
deck[0].image = "img/death.png";
deck[0].fortune = `Ölüm kartı çok daha değerli ve önemli bir şeyin ortaya çıkma olasılığını Sembolize eder. Ölüm kartı, büyük bir kişisel değişime girdiğinizi gösterir. Bu kart, diğerlerini şaşırtacak ve hayran bırakacak bir değişimin işaretidir. Artık her yönden değişiyorsunuz. Siz zaten sürekli değişmek istediniz ve farkında olmadan yavaş yavaş değiştiniz.
Kendi kusurlarınızı bilerek ne yapmanız gerektiği konusunda sürekli düşündünüz. Belki Fark etmediniz ama büyük değişimler yaşadınız.
İnsanın kendini bilmesi zaten bir değişimin alametidir. Kendinizi sürekli sorguladınız. Hem fiziksel hem ruhsal yönden eksiklerinizi biliyorsunuz. Belki de tam olarak amacınıza ulaşamamış olabilirsiniz ama bunun farkında olmak da büyük bir değişimin habercisidir.
Ölüm Kartı, önemli bir değişimi ve geçişi sembolize ediyor. Bu büyük arkana kartı, kendinizi değiştirmeniz ve yenilikler için geçmişi tamamen unutmanız anlamına gelir.  Ölüm kartında ani  beklenmedik ve irademiz dışında gerçekleşecek olan değişim vardır. Bu değişim evrenin bize vereceği bir armağan da olabilir, bir bela da olabilir.
Geçmişte ne ektiysek onu biçeriz. Bu nedenle, Ölüm kartı irademiz dışında evrenin bize vereceği kesin bir değişimi sembolize ediyor. Bu büyük değişiklik, beraberinde sizin için yeni fırsatlar ve avantajlar yaratan bir dizi beklenmedik sürprizler getirecek.
Son olarak bu kart, geçmişteki bazı kötü alışkanlıklarınızı bırakmanızı öneren bir karttır. Hayatınızda her zaman sorunlara sebep olan bazı alışkanlıklarınız varsa onları artık azaltarak bırakmalısınız.`;

deck[1].image = "img/judgement.png";
deck[1].fortune = `Mahkeme kartı sizi daha yüksek bir bilinç seviyesine ulaşmaya çağırıyor. Ruhsal bir uyanış deneyimliyorsunuz. Eski benliğinizi unutarak, gerçekte kim olduğunuzun farkına varacaksınız.
Mahkeme kartı hayatınızı değiştirecek bir karar vermeniz gerektiğini belirtir, ancak Adalet kartı'ndan farklı olarak, bu karar sezgisel ve mantıksal olacaktır.
Bir dönüm noktasındasınız ve yapacağınız herhangi bir seçimin uzun vadede etkili olacağını unutmayın! Sezgilerinize ve mantığınıza güvenin ve doğru yolda olduğunuzu bilin. İçinde bulunduğunuz durum hakkında bir netliğe ihtiyacınız varsa, size rehberlik etmesi için geçmiş tecrübelerinizi hatırlayın.
Mahkeme kartı, önemli bir karar aşamasında olduğunuzun habercisidir. Geçmiş deneyimlerinizi gözden geçirerek değerlendirdiniz ve çok şey öğrendiniz. Tüm belirsiz parçalar sonunda birleşti ve her şey belirgin olmaya başladı..
Bu birleşme derin yaralarınızı iyileştirdi ve şimdi geçmişi unutabilirsiniz. Pişmanlık , suçluluk duygusu ve üzüntülerin sona erdiğini göreceksiniz.
Bu dönemden sonra yeni zorluklar gelecektir, fakat geçmiş tecrübeleriniz bu zorlukların üstesinden gelmenizde size rehber olacaktır. Bu dönemde sizinkine benzer sıkıntılar yaşamış kişilerle karşılaşacaksınız. Size yol göstermelerine ve size yardım etmelerine izin verin, aynı zamanda siz de onlara yardım edin.`;

deck[2].image = "img/justice.png";
deck[2].fortune = `Adalet kartı; gerçeğin, adaletin ve hukukun sembolüdür.Adalet  kartı adil kararlar verileceğini işaret eder. Şimdi vereceğiniz kararlar hem kendiniz hem de diğerleri için uzun vadeli etkiye sahiptir. Geçmişte verdiğiniz kararlar ilerde dikkatlice tartılacaktır. Duygularınız ruh durumunuza bağlı olarak değişkenlik gösterebilir. 
Adalet Tarot kartı, tüm işlerinizde adil olmanız gerektiğini hatırlatır.
Adalet kartının diğer anlamı, dikkatin gerekliliğidir. Dikkat etmeniz gereken hususlar, kariyeriniz veya alacağınız önemli bir kararla ilgili olabilir. `;

deck[3].image = "img/strength.png";
deck[3].fortune = `Güç kartı, kararlılığı ve gücü temsil eder. Bununla birlikte insan ruhunun herhangi bir engeli aşma yeteneğini anlatır.
Güç tarot kartı, hayattaki engellere dayanabileceğinizi hatırlatır. Altta yatan büyük bir sabrınız ve büyük bir dayanma gücünüz var. Yapmanız gerekenler konusunda kararlısınız ve bu durumu soğukkanlılıkla koruyorsunuz.
Tarot güç kartı, iç güç, kişisel güç, irade ve kararlılıkla beslendiğinizi söylüyor. Başkalarını kontrol etmek için hükmetmek yerine, onları sessizce etkiliyor ve ikna ediyorsunuz. Gücünüz  korku, zorluk veya şüphelerin üstesinden gelmek için size güven veriyor.
Zor bir zaman geçirdiyseniz veya stresliyseniz, Güç kartı sizi devam etmek için içinizdeki gücü kullanmaya teşvik ediyor. Siz sadık bir arkadaş ve sağlam bir destekçisiniz, başkaları size ihtiyaç duyduğunda ortaya çıkmaya hazırsınız ve desteğinize ihtiyaç duyanlara yardım etmek için kendinizi mecbur hissedebilirsiniz.
Bazen bu kart, sizi  hayvani içgüdülerinizi ve ham duygularınızı evcilleştirmeye çağırır. Bazı durumlarda öfke, üzüntü, suçluluk veya utanç gibi duyguların ortaya çıkması normaldir. Ancak, Şimdi içgüdüsel dürtülerinizin farkına varmanız ve onları daha iyimser şekilde dengelemeniz gereken bir zamandasınız. Artık öfke ya da nefretle hareket etme zamanı değil. Affederek, sevgi ve şefkatle hareket edin.`;

deck[4].image = "img/temperance.png";
deck[4].fortune = `Denge kartı, elde etmek istediğiniz şeyler hakkında net ve uzun vadeli bir vizyona sahip olmanız gerektiğini gösterir. Bir şeyleri elde etmek için acele etmemelisiniz; bunun yerine, en iyisini yaptığınızdan emin oluncaya kadar çalışmalısınız.
Denge Kartı öğrenme hevesinizi de yansıtır. Şu anda yaptığınız her neyse muhtemelen bu konu hakkında en iyi olanları örnek alarak, yüksek rekabet ortamına kafa tutmalısınız. Her an yeni şeyler öğrenerek bu bilgileri harmanlamalısınız. İç sesiniz sizi en doğru sonuca yönlendiriyor. Olayları sabırla dinlemeli, izlemeli ve takip etmelsiniz.`;

deck[5].image = "img/theChariot.png";
deck[5].fortune = `Savaş Arabası kartı, çatışmaların üstesinden gelme ve olumlu yönde ilerleme hakkında bir karttır.Savaş arabası  fetih, zafer ve muhalefetin üstesinden gelmeyi temsil eder. Yolunuzdaki herhangi bir engel veya zorluğun üstesinden gelmek için irade gücünüzü kullanmanız gerekecektir. 
Bu zamanda sizi çevreleyen herhangi bir karşıt güçten yararlanarak, bunları kendi lehinize nasıl çevirebileceğinizi görebilirsiniz. Kararlı, disiplinli ve çalışkan olmalısınız. Eğer öyleyseniz  bazı engellerle karşılaşacaksınız. Bu mücadele sizi daha da güçlendirecek.
Hedeflerinizi kararlılık ve güven içinde tuttuğunuz sürece başarılı olacaksınız.  Tamamen elinizdeki göreve odaklanın, yarışa girin ve kazanın. Zorluklara dayanma yeteneğinizi geliştirmelisiniz. Aslında, hedefinize ulaşmaya çalışmak, onu başarmak kadar tatmin edici olabilir.
Bir projeye devam edip etmemeniz hakkında karamsarlığa kapılabilirsiniz. Ancak bu ikilem çözülecektir.
Kendinizi kanıtlamak için cesur olmalısınız. Şu anda ihtiyaçlarınızı ve isteklerinizi ifade etmek için kendinize güvenmeniz gerekiyor. Aksi takdirde yolunuzu bulamazsınız. 
Kendinize güvenmeniz ve temel olarak kim olduğunuzu ve neyi beklediğinizi bilmeniz gerekir.
Savaş arabası saldırgan dürtülerinizi yola getirmenizi ister. Saldırganlık, doğuştan gelen mekanizmaların bir parçası olarak insan doğasının bir parçasıdır. Kolayca bastırılamaz,  çok yıkıcı olabilir ama aynı zamanda yaratıcı ve güçlü bir enerjidir.  Ancak bu kart, duygularınızın efendisi olmanız ve herhangi bir dürtü veya öfkeyi kontrol altına almanız gerektiğini söylüyor.`;

deck[6].image = "img/theDevil.png";
deck[6].fortune = `Şeytan kartı, obsesif bozukluk veya gizli dürtüsel davranışı da gösterebilir. Kontrolden çıkmış olduğunuzu gösteren bir işaret olabilir. Bu kart aynı zamanda materyalizmin bir göstergesidir.Şeytan Tarot kartı depresyon veya bağımlılığı ifade edebilir. Ayrıca Sıkışmış veya kısıtlanmış hissettiğinizin işareti olabilir. Kontrolünüz dışındaki dış etkiler veya kuvvetlerden etkileniyor, kendinizi güçsüz ve mağdur hissediyor olabilirsiniz.. Bu hisler Şeytan kartının yarattığı bir illüzyondur.Şeytan Kendi kaderinizi kontrol ettiğinizin, kendi tutum ve davranışlarınıza bağlı olduğunuzun işaretidir. Vazgeçmeyin! Hiç kimsenin eleştirisine, manipülasyonuna veya istismarına müsamaha göstermeyin.
Her zaman bazı seçenekler vardır ve yüzeyde ne kadar umutsuz gibi görünse de, durumunuzu iyileştirmek için yapabileceğiniz bir şeyler her zaman bulunur. Aynı şekilde, başkalarına nasıl davrandığınıza da dikkat edin ve hayatınızdaki insanları manipüle etmeye veya kontrol etmeye çalışmadığınızdan emin olun.`;

deck[7].image = "img/theEmpress.png";
deck[7].fortune = `İmparatoriçe geleneksel olarak anne etkisi ile ilişkilendirilir. Hayatın, romantizmin, sanatın veya yeni işin yaratılmasını temsil edebilir. İmparatoriçe, annenin enerjisini tasvir eden Büyük Arkana kartıdır. O gücün kaynağıdır. Bu kart Kadınlık, doğurganlık, ifade, yaratıcılık ve diğer birçok yönün yanı sıra, beslenmeyle ilişkilendirilebilir. 
imparatoriçe sizi güzellikle bağlantı kurmaya ve hayatınıza mutluluk getirmeye çağırıyor. Mutluluğu ve neşeyi çağırmak için kendinizi anlayın ve duygusallığınızla temasa geçin. Bu kart Kendinize iyi bakmanız için bir işarettir.`;

deck[8].image = "img/theFool.png";
deck[8].fortune = `Deli kartı, yeni başlangıçları, geleceğe inancı, deneyimsizliği, ne bekleyeceğini bilememeyi, acemi şansını ve evrene inanmayı temsil eder.Deli Tarot kartı, rahatlamanız, oynamanız ve eğlenmeniz için davetiyedir. Hayatın büyük bir deney olduğunu düşünün ve her şeyi akışına bırakın.. Bu kart, sizi çevreleyen ve içinizden akan enerjiye izin vermenizi isteyen bir karttır. Merak ederek ve entrikalara adım atarak tam potansiyelinize ulaşın. Bir kez daha çocukmuş gibi yaşayın. Daha fazla gülün, dans edin ve kalbinizi serbest bırakın.
Korku, endişe veya şüphe ile mücadele ediyorsanız, meditasyon/ibadet yapmak için mükemmel bir zaman. Deli tarot kartı, cesur ve kaygısız biri olarak rehberinizdir. O, gerçekte kim olduğunuzun somutlaşmış halidir - özgür ruhunuz, içsel çocuğunuz ve oynak ruhunuz. Korkuyu her deneyimlediğinizde, Deli'nin özünü hatırlayın! Geleceğin ne olduğunu asla bilemezsiniz, ama tıpkı bir deli gibi Evrenin size yol boyunca size eşlik edeceğine güvenerek bilinmeyene adım atmalısınız. Şansınızı deneyin ve ne olduğunu görün. `;

deck[9].image = "img/theHangedMan.png";
deck[9].fortune = `Asılan Adam kartı, nihai teslimiyet, fedakarlık veya zamanda askıya alınmayı öneren karttır.Asılan Adam, bir sonraki adıma geçmeden önce biraz beklememiz gerektiğini hatırlatır ya da evren bunu sizin adınıza yapar.
Asılan Adam, artık size hizmet etmeyen kalıplaşmış fikir ve davranışlarınızı serbest bırakmaya çağırıyor, böylece dünyanıza yeni bir pencereden bakabilir ve yeni fırsatlar yakalayabilirsiniz. Eğer bu kart  yıkılan kule ile geldiyse, şu andaki pozisyonunuzu daha ciddi anlamda sorgulamanız gerekecek.`;

deck[10].image = "img/theHermit.png";
deck[10].fortune = `Ermiş Tarot kartı, ruhsal aydınlanma döneminde olduğunuzun işaretidir. Manevi benliğinizi keşfetmek, varlığınızı ve yaşamdaki amacınızı sorgulamak için harika bir zaman. 
Ermiş, zor bir durumdan kurtulmak için izole olduğunuzu ve kendi kabuğunuzda yaşadığınızın işaretidir. Bu Büyük Arkana Kartı, insanlardan kaçmak için anti sosyal bir yaşam tarzı seçtiğinizi gösteriyor olabilir.Her şeye yeniden başlamaya, geçmişi örtmeye ve yeni planlar yaparak hayatınıza yeni bir yön vermeye istekli olabilirsiniz. Şu zamanlar, kendinize odaklanma ve kendi ihtiyaçlarınızı karşılama zamanıdır. Bu kart aradığınız cevapları ruhunuzun derinliklerinde bulmak için günlük yaşamdan uzaklaştığınızı gösterir.
Gerçeklerin dış dünyada değil, kendi içinizde olduğunun farkındasınız.
Ermiş kartı sizi derin bir inzivaya ve iç gözleme davet ediyor. İçsel ışığınıza izin verdiğinizde, ihtiyacınız olan cevapları bulacaksınız. Huzurun kilometrelerce ötede değil, bir sonraki adımda olduğunu göreceksiniz.
`;

deck[11].image = "img/theLovers.png";
deck[11].fortune = `Aşıklar kartı, ilişkileri ve seçimleri temsil eder. Kendinizi yiyebildiğiniz kadar yiyebileceğiniz bir büfenin önünde hayal edin ama her şeyi bir anda yiyemezsiniz. Birden fazla öğün yiyebilirsin ama bu, pek çok bitmeyen konuşmayı içerecektir. Aşıklar kartı, mevcut bir ilişki, kalbin cazibesi veya potansiyel ortak seçimi hakkında bazı kararları gösterir. Çoğu zaman, bir ilişki kazanmak için hayatınızın bir yönünden fedakarlık etmek zorunda kalacaksınız (ya da tam tersi) ya da potansiyel bir eş seçilirken bir başkası reddedilebilir. Seçim ne olursa olsun, sonuçları kalıcı olacağından, hafifçe yapılmamalıdır.`;

deck[12].image = "img/theMagician.png";
deck[12].fortune = `Büyücü Kartı, hayallerinizi gerçekleştirmek için ihtiyacınız olan araçları, kaynakları ve enerjiyi getirir. Cidden, şu anda ihtiyacınız olan her şey parmaklarınızın ucunda. Arzularınızı tezahür ettirmek için ruhsal (ateş), fiziksel (toprak), zihinsel (hava) ve duygusal (su) kaynaklarına  sahipsiniz. Ve onları manevi ve dünyevi alemlerin enerjisiyle birleştirdiğinizde, güç merkezi olacaksınız! Anahtar, bu araçları sinerjik olarak bir araya getirmektir, böylece yarattığınız şeyin etkisi daha güçlü olur. 
Şimdi, yakın zamanda tasarladığınız bir fikir üzerinde ilerlemek için mükemmel bir zaman. Tohum filizlendi ve harekete geçmeye ve niyetinizi meyve vermeye çağırıyorsunuz. Yaşam yolunuz boyunca topladığınız beceri, bilgi ve yetenekler sizi şu anda bulunduğunuz yere götürdü ve bunu bilseniz de bilmeseniz de fikirlerinizi gerçeğe dönüştürmeye hazırsınız.
Harekete geçmeden önce ne yaratacağınıza dair net bir vizyon oluşturmalısınız. Ego tarafından motive olmak yeterli değildir (para, statü veya şöhret) - hedefleriniz ve niyetleriniz arasında bir ruh bağlantınız olması gerekir. Güçlü, yaratıcı bir varlıksınız ve bu, Yüksek Benliğinizi en çok istediğiniz geleceği yaratmak için günlük eylemlerinizle uyumlu hale getirme fırsatınızdır.`;

deck[13].image = "img/theMoon.png";
deck[13].fortune = `Ay kartı, her şeyin göründüğü gibi olmadığını hatırlatır. Bu Büyük Arkana Kartı sezgileri temsil eder. Hayatınızdaki bazı olayların veya kişilerin göründüğü gibi olmadığını, gerçekleri anlamak için sezgilerinize güvenmeniz gerektiğini hatırlatır. 
Ay kartı, gizli veya tehlikeli anlaşmazlıkları, insanın gizli ve karanlık taraflarını, sırları ve bazen yasa dışı olayları temsil edebilir. 
Bu kart ayrıca bakış açınızdan ötürü istikrarsızlık ve güvensizlikten muzdarip olduğunuzu, ruh halinizin sürekli değiştiğini ve bu durumun sizde kaygı ve bazı korkular yarattığı anlamına gelebilir.
Bir şey hakkında sonuç bekliyorsanız, bu kart sonucun erteleneceğini ya da belirsiz olacağını söylüyor. `;

deck[14].image = "img/thePope.png";
deck[14].fortune = `Aziz kartı, Kendi inanç sistemlerinizi keşfetmeden ve kendi seçimlerinizi yapmadan önce, temel ilkeleri güvenilir bir kaynaktan öğrenmenizi ister. 
Aziz kartı, gelenekleri kucaklamaktır, çünkü kalıplaşmış bir inancı takip etmek için belirli bir isteğiniz olduğunu gösterir. Aziz kartı ayrıca, mezhepsel bir yaklaşım olarak kabul edilebilecek bazı geleneksel sınırlar içinde kalmak istediğinizi de gösterir. Dolayısıyla, yenilikçi olmak yerine, halihazırda uygulanmış ve var olan belirli inançlara, adet ve sistemlere adapte olacaksınız. Eğer bu kart ile birlikte, yıkılan kule geldiyse, şu andaki pozisyonunuzu ciddi anlamda düşünmeniz sorgulamanız gerekecektir. 
Aziz kartı, kendi geleneklerine(adetlere) sahip olan sosyal yapıları takip etmenin daha iyi bir yol olduğunu öne sürüyor. Örneğin, bazı yanlış tarikatlara, törenlere, ritüellere veya diğer dini tuzaklara karışmış olabilirsiniz. Bu özel kart, en çok kurumları ve temel değerleri temsil eder. Aziz, zaten var olan kurallara ve durumlara uymanız gerektiğini gösteren bir işarettir. `;

deck[15].image = "img/thePopess.png";
deck[15].fortune = `Azize kartı sağduyu, sezgi, gizem ve duygusallık kartıdır. Bu kart İçgüdülerinize ve hislerinize güvenmeniz gerektiğini hatırlatan Büyük arkana Kartıdır. Evrenin size gönderdiği işaret ve simgelere dikkat edin.
Etrafınızdaki şeyler bu durumda göründüğü gibi değildir.`;

deck[16].image = "img/theStar.png";
deck[16].fortune = `Yıldız kartı, Aşk ve romantizmde umut vaad ediyor. Umut ve iyimserlik duygularınız size karizmatik bir görüntü ve çekicilik veriyor.  İş söz konusu olduğunda, hırslarınızın boşa gitmeyeceğinden emin olun ve işinize sadık kalın.  Yeni bir iş arıyorsanız, bu kart umudunuzu yitirmemeniz için bir hatırlatmadır.Yıldız kartı, para söz konusu olduğunda, inanç ve azminiz sayesinde kısa süre sonra hedeflerinize ulaşacağınızı söylüyor.  Mali geleceğinize yönelik çalışmalara devam ederken, sahip olduğunuz şeylere şükrettiğinizden emin olun, çünkü bu sizi daha güzel yerlere getirecektir.`;

deck[17].image = "img/theSun.png";
deck[17].fortune = `Güneş kartı, pozitiflik, iyimserlik, özgürlük ve eğlencenin kartıdır.Güneş kartı, aynı zamanda gerçekliğin kartıdır, geçmişinizde yalanların veya aldatmanın kurbanı olduysanız, bu kart yalanı ve gerçeği ayıracak, hilekarlığa ortaya çıkaracak ve size ışık tutacaktır. Bu kart iyi şans, mutluluk, neşe ve uyumu temsil eder. Evrenin bir araya gelip yolunuza katılmasını ve daha büyük bir şeye doğru ilerlemeye yardımcı olmasını temsil eder.`;

deck[18].image = "img/theTower.png";
deck[18].fortune = `Kule genellikle tehlike, kriz, yıkım ve kurtuluş olarak yorumlanır. Ani öngörülemeyen değişim ile ilişkilidir.Tarotta yıkılan kule anlamı, beklenmedik büyük değişiklik, kargaşa, yıkım ve kaos anlamına gelir. Boşanma, sevilen birinin ölümü, maddi kayıp, sağlık sorunları, doğal afet, iş kaybı ya da sizi yıpratabilecek herhangi bir olay olabilir. Kaçış yok. Değişim kendiliğinden gelecek, ama üzülmeyin. Her zaman bir şans ve açık kapı mutlaka bulunur.`;

deck[19].image = "img/theWorld.png";
deck[19].fortune = `Dünya kartı, bir yaşam döngüsünün sonunu, deli kartıyla başlayan bir sonraki büyük döngüden önceki yaşamdaki bir duraklamayı temsil eder.Dünya tarot kartı ile şans yanınızda; Bu nedenle size sunulan fırsatları kaçırmamalısınız. Dünya kartı, bir üniversite ya da proje gibi zor olan bir şeyi tamamladığınızı da temsil edebilir ya da kendi işinizi kurmak, evlenmek ya da çocuk sahibi olmak gibi bazı şeylere istekli olabilirsiniz.
Başarılarınızla mutlu olabileceğiniz bir noktaya ulaştınız. Fakat bu başarı, yepyeni birtakım zorluklar veya endişeler getirebilir, bu nedenle dünyanın ağırlığını omuzlarınızda hissedebilirsiniz.`;

deck[20].image = "img/wheelOfFortune.png";
deck[20].fortune = `Kader Çarkı kartı, genellikle şans ve kaderin bir göstergesidir ve bu Büyük arkana kartı değişimi temsil eder.Kader çarkı aynı zamanda sürekli değişen döngüleri temsil eder. Bu süreç bizi zaman zaman rahatsız etse de, yaşamın bir parçası olduğunu anlamalıyız.  Bu kart aynı zamanda karma bir karttır, bu yüzden yükselirken insanlara karşı nazik olmayı unutmayın, çünkü alçalırken onlara tekrar işiniz düşebilir. `;

deck[21].image = "img/theEmperor.png";
deck[21].fortune = `Tarot kartlarının baba figürü olarak İmparator, bu babalık rolünü (erkek ya da kadın olmanıza bakılmaksızın) benimsediğinizi, ailenizi ve sevdiklerinizi koruyup savunduğunuzu gösterir.İmparator, kurallara ve düzene bağlı bir sistemi yansıtır. Belirli durumlarda ilkeler veya yönergeler uygulayarak yasa ve düzen yaratırsınız. Herhangi bir sorunu parçalarına ayırarak ve ardından çözmek için yapmanız gereken eylemleri planlayarak içinde bulunduğunuz kaostan bir huzur yaratın. Yaklaşımınızda sistematik, stratejik ve son derece organize olun ve sonuna kadar planınıza bağlı kalın.`;

var pickCards = []; //karıştırılmış desteden kart almak
var pastPosition;
var presentPosition;
var futurePosition;

//kartları karıştırmak için fonksiyon
function shuffle(deck) {
  var i = 0,
    j = 0,
    temp = null;
  for (i = deck.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  //karıştırılmış desteden 3 kart seçmek için
  pickCards = deck.slice(0, 3);
  pastPosition = pickCards[0];
  presentPosition = pickCards[1];
  futurePosition = pickCards[2];
}

var height = "350px";
$(document).ready(function () {
  shuffle(deck);

  // div içine resim ekleme
  $("#imgReading1").html(
    "<img src=" + pastPosition.image + " height=" + height + ">"
  );
  $("#imgReading2").html(
    "<img src=" + presentPosition.image + " height=" + height + ">"
  );
  $("#imgReading3").html(
    "<img src=" + futurePosition.image + " height=" + height + ">"
  );

  // kartı çevirip rastgele resim ve açıklamasının gelmesi için
  $("#toggle-fading1").click(function () {
    $(this).find("#img1").fadeOut(5);
    $("#imgReading1").show();
    $("#fortune1").text(pastPosition.fortune);
    console.log(deck[0].fortune);
  });
  $("#toggle-fading2").click(function () {
    $(this).find("#img2").fadeOut(5);
    $("#imgReading2").show();
    $("#fortune2").text(presentPosition.fortune);
  });
  $("#toggle-fading3").click(function () {
    $(this).find("#img3").fadeOut(5);
    $("#imgReading3").show();
    $("#fortune3").text(futurePosition.fortune);
  });
});
