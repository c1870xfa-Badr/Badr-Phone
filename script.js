<script>

/* =========================================================
   BADR PHONE — JAVASCRIPT
   متوافق 100% مع HTML الأخير
   عدد الهواتف: 29
========================================================= */


/* =========================================================
   بيانات الهواتف
========================================================= */

const phones=[

{id:1,brand:"Infinix",name:"Infinix Note 60 5G",image:"https://elghazawy.b-cdn.net/276540/Infinix-Note-60-%281%29.webp",ram:"8GB",storage:"256GB",category:"economic",price:"22K",screen:"6.78 بوصة — دقة 1208×2644 بكسل — شاشة بها ثقب",processor:"MediaTek Dimensity 7400 ULT — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية مزدوجة 50MP + 8MP — أمامية 13MP",battery:"6150 مللي أمبير",charging:"45W",os:"Android 16",updates:"3 سنوات تحديثات Android والأمان",pros:["أداء قوي بفضل معالج Dimensity 7400 Ultimate، خصوصًا في الألعاب، مع نظام تبريد جيد.","خامات معدنية ممتازة، فالهاتف يأتي بتصميم قريب من Infinix Note 60 Pro ولكن بدون الشاشة الخلفية.","شاشة AMOLED مسطحة كبيرة وسلسة للغاية مع معدل تحديث 144Hz.","الكاميرا الخلفية الرئيسية تقدم تجربة تصوير جيدة مع دعم المثبت البصري OIS.","بطارية كبيرة تكفي للاستخدام لفترة طويلة مع دعم الشحن السريع بقوة 45 واط، بالإضافة إلى دعم الشحن اللاسلكي.","يدعم خاصية eSIM.","سماعات خارجية من JBL بصوت ستيريو لتجربة صوتية مميزة."],cons:["ذاكرة التخزين من نوع UFS 2.2 وليست الأسرع.","معيار مقاومة الماء ليس الأفضل.","لا يدعم إمكانية زيادة مساحة التخزين باستخدام بطاقة ذاكرة خارجية."]},

{id:2,brand:"Samsung",name:"Samsung Galaxy A27",image:"https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/323872_0_klt7ADnb_.png?updatedAt=1782980812973&tr=w-1000",ram:"8GB",storage:"128GB / 256GB",category:"economic",price:"25K",screen:"6.7 بوصة — دقة 1080×2340 بكسل — شاشة بها ثقب",processor:"Qualcomm Snapdragon 6 Gen 3 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 50MP + 5MP + 2MP — أمامية 12MP",battery:"5000 مللي أمبير",charging:"25W",os:"Android 16",updates:"6 سنوات تحديثات Android والأمان",pros:["المعالج يقدم تجربة جيدة، وسيكون الهاتف الوحيد في سلسلة A الجديدة بمعالج من كوالكوم.","يأتي بأحدث نظام تشغيل Android 16 مع واجهة Samsung One UI 8.5، مع دعم 6 سنوات من تحديثات Android.","الكاميرا الخلفية الرئيسية تقدم تجربة تصوير جيدة جدًا مع دعم تصوير الفيديو بدقة 4K.","شاشة Super AMOLED بمعدل تحديث 120Hz تقدم تجربة مشاهدة مميزة."],cons:["رأس الشاحن لا تأتي مرفقة داخل علبة الهاتف.","لا يدعم السماعات الخارجية بصوت ستيريو.","حواف الشاشة ما زالت كبيرة نسبيًا، خصوصًا الحافة السفلية.","لا يدعم تصوير الفيديو بدقة 4K باستخدام الكاميرا الأمامية."]},

{id:3,brand:"realme",name:"Realme 15 5G",image:"https://elghazawy.b-cdn.net/249811/Realme-15-Pro-Dual-SIM--256GB-Memory--12GB-RAM--5G--Velvet-Green--1.webp",ram:"12GB",storage:"256GB",category:"economic",price:"23K",screen:"6.77 بوصة — دقة 1080×2392 بكسل — شاشة بها ثقب صغير",processor:"MediaTek Dimensity 7300+ — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية مزدوجة 50MP + 8MP — أمامية 50MP",battery:"6500 مللي أمبير",charging:"45W",os:"Android 15",updates:"3 سنوات تحديثات Android والأمان",pros:["مقاوم للماء والغبار بمعيار IP68/IP69.","شاشة مسطحة تمامًا بمواصفات جيدة.","بطارية كبيرة 6500 مللي أمبير.","معالج Dimensity 7300 Plus وذاكرة تخزين UFS 3.1 مع واجهة ريلمي الخفيفة فالأداء جيد جدًا.","السماعات الخارجية تأتي بصوت ستيريو لتحصل على تجربة صوتية.","يدعم مميزات ذكاء اصطناعي جديدة مثل Ai Edit Genie ليساعدك في تغيير أي شيء بالصور بكل سهولة.","كاميرا سيلفي تقدم أداء جيد جدًا."],cons:["يفتقد إلى دعمه لتركيب كارت ميموري.","لا يدعم الهاتف منفذ الـ 3.5 ملم الخاص بسماعات الأذن.","تصميم بلاستيكي.","كان من الأفضل أن يكون الشاحن أسرع من 45 واط.","لا يدعم الـ eSIM."]},

{id:4,brand:"Samsung",name:"Samsung Galaxy A57",image:"https://elghazawy.b-cdn.net/272678/Samsung-Galaxy-A57-%281%29.webp",ram:"8GB / 12GB",storage:"256GB / 512GB",category:"mid",price:"40K",screen:"6.7 بوصة — دقة 1080×2340 بكسل — ثقب صغير",processor:"Samsung Exynos 1680 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 50MP + 12MP + 5MP — أمامية 12MP",battery:"5000 مللي أمبير",charging:"45W",os:"Android 16",updates:"6 سنوات تحديثات Android والأمان",pros:["من أنحف وأخف الهواتف في فئته، مما يجعله سهل الاستخدام بيد واحدة، مع خامات ممتازة تشمل فريمًا معدنيًا وظهرًا زجاجيًا محميًا ومقاومة IP68 للماء والغبار.","أداء جيد جدًا بفضل معالج Exynos 1680 مع نظام تبريد ممتاز، مع دعم تشغيل ببجي بمعدل 90 إطارًا.","تجربة كاميرات متوازنة في الصور والفيديوهات، رغم افتقاده لعدسة التقريب Telephoto.","شاشة Super AMOLED Plus ممتازة من حيث الألوان والسطوع، مع حواف أقل بشكل واضح مقارنة بالجيل السابق.","يدعم السماعات الخارجية بصوت ستيريو لتجربة صوتية مميزة.","يأتي بأحدث نظام تشغيل Android 16 مع واجهة Samsung One UI 8.5.","يحصل على 6 سنوات من تحديثات Android."],cons:["رأس الشاحن لا تأتي مرفقة داخل علبة الهاتف.","ما زالت سامسونج تستخدم بطارية بسعة 5000 مللي أمبير دون زيادة سعتها.","لا توجد كاميرا Telephoto مخصصة للتقريب، رغم إمكانية تصوير البورتريه 2X باستخدام الكاميرا الرئيسية ومعالجة السوفت وير."]},

{id:5,brand:"Samsung",name:"Samsung Galaxy A37",image:"https://elghazawy.b-cdn.net/274733/Samsung-Galaxy-A37-%281%29.webp",ram:"8GB / 12GB",storage:"128GB / 256GB",category:"mid",price:"35K",screen:"6.7 بوصة — دقة 1080×2340 بكسل — ثقب صغير",processor:"Samsung Exynos 1480 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 50MP + 8MP + 5MP — أمامية 12MP",battery:"5000 مللي أمبير",charging:"45W",os:"Android 16",updates:"6 سنوات تحديثات Android والأمان",pros:["تجربة ممتازة في الكاميرات بفضل مستشعر أكبر للكاميرا الخلفية ومعالج Exynos المحسن في معالجة الصور والفيديوهات.","أداء جيد بفضل معالج Exynos 1480، مع نظام تبريد ممتاز.","ظهر زجاجي فاخر مع مقاومة ممتازة للماء والغبار بمعيار IP68.","يأتي بأحدث نظام تشغيل Android 16 مع واجهة Samsung One UI 8.5.","يدعم 6 سنوات من تحديثات Android.","يدعم السماعات الخارجية بصوت ستيريو لتجربة صوتية مميزة.","يدعم خاصية eSIM."],cons:["رأس الشاحن لا تأتي مرفقة داخل علبة الهاتف.","حواف الشاشة ما زالت كبيرة نسبيًا.","ما زالت سامسونج تستخدم بطارية بسعة 5000 مللي أمبير دون زيادة سعتها.","لا يدعم تركيب بطاقة ذاكرة خارجية لزيادة مساحة التخزين."]},

{id:6,brand:"Infinix",name:"Infinix GT 50 Pro",image:"https://cdn.beebom.com/mobile/infinix-gt-50-pro-5g-front-back-1.png",ram:"12GB",storage:"256GB / 512GB",category:"mid",price:"37K",screen:"6.78 بوصة — دقة 1208×2644 بكسل — شاشة بها ثقب",processor:"MediaTek Dimensity 8400 ULT — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية مزدوجة 50MP + 8MP — أمامية 13MP",battery:"6150 مللي أمبير",charging:"45W",os:"Android 16",updates:"3 سنوات تحديثات Android والأمان",pros:["يدعم إضاءة RGB خلفية مميزة، بالإضافة إلى أزرار Trigger للألعاب على إطار الهاتف تدعم الضغط والإيماءات الحركية.","أداء ممتاز في الألعاب بفضل معالج Dimensity 8400 Ultimate مع نظام تبريد سائل متطور للحفاظ على استقرار الأداء لفترات طويلة.","شاشة AMOLED كبيرة بمعدل تحديث 144Hz تقدم تجربة استخدام سلسة.","سماعات خارجية بصوت ستيريو تقدم تجربة صوتية مميزة.","بطارية جيدة جدًا مع دعم الشحن اللاسلكي، ويمكن استخدام الجراب المرفق مع مروحة التبريد والشحن اللاسلكي في الوقت نفسه للمساعدة في تقليل حرارة الهاتف أثناء الشحن والاستخدام."],cons:["لا توجد كاميرا Telephoto مخصصة للتقريب.","الكاميرات تقدم تجربة متوسطة نسبيًا، لأن الهاتف يركز بشكل أساسي على الأداء وتجربة الألعاب.","الخامات الخارجية من البلاستيك مع مقاومة ماء متواضعة نسبيًا.","مستشعر التقارب الخاص بالمكالمات يعتمد على السوفت وير.","الشحن السلكي بقوة 45 واط يعتبر بطيئًا نسبيًا مقارنة ببعض المنافسين."]},

{id:7,brand:"vivo",name:"vivo V70 FE",image:"https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1774603689294/21bf28b7cf3689e74278872a8e32672f.png",ram:"8GB / 12GB",storage:"256GB",category:"mid",price:"28K",screen:"6.83 بوصة — دقة 1260×2800 بكسل — شاشة بها ثقب",processor:"MediaTek Dimensity 7360 Turbo — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية مزدوجة 200MP + 8MP — أمامية 32MP",battery:"7000 مللي أمبير",charging:"90W",os:"Android 16",updates:"4 سنوات Android + 6 سنوات أمان",pros:["حماية ممتازة ضد الماء والأتربة مع شهادتي IP68 وIP69.","بطارية ضخمة بسعة 7000 مللي أمبير تصمد لفترة طويلة خلال اليوم.","يدعم الشحن السريع بقوة 90 واط، والشاحن يأتي مرفقًا داخل العلبة.","الكاميرات تقدم تجربة تصوير جيدة، خصوصًا الكاميرا الرئيسية بدقة 200MP مع إمكانية التصوير حتى تقريب 3X دون فقدان كبير في التفاصيل.","شاشة AMOLED بحواف قليلة ودقة 1.5K ممتازة مع سطوع مرتفع.","سماعات ستيريو ممتازة وعالية الصوت."],cons:["المعالج يقدم تجربة جيدة جدًا في الاستخدام اليومي، ولكن كان من الأفضل استخدام معالج أقوى.","تشغيل ببجي يقتصر على 60 إطارًا.","لا يوجد إعلان رسمي عن طبقة حماية الشاشة.","لا يدعم تركيب بطاقة ذاكرة خارجية.","لا يدعم الـ eSIM."]},

{id:8,brand:"HONOR",name:"HONOR 600",image:"https://elghazawy.b-cdn.net/291873/-Honor-600-5G-%281%29.webp",ram:"8GB / 12GB",storage:"256GB",category:"mid",price:"35K",screen:"6.57 بوصة — دقة 1264×2728 بكسل — شاشة بها ثقب",processor:"Qualcomm Snapdragon 7 Gen 4 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية مزدوجة 200MP + 12MP — أمامية 50MP",battery:"7000 مللي أمبير",charging:"80W",os:"Android 16",updates:"سنتان تحديثات Android والأمان",pros:["تصميم متين بهيكل معدني مع مقاومة ممتازة للماء والغبار.","شاشة مسطحة بحواف قليلة جدًا ودقة ممتازة مع سطوع مرتفع للغاية.","كاميرا أمامية وخلفية بدقة مميزة تقدم تجربة تصوير جيدة.","بطارية كبيرة تصمد لفترة طويلة خلال اليوم مع دعم الشحن السريع بقوة 80 واط.","معالج Snapdragon 7 Gen 4 يقدم أداءً جيدًا جدًا ضمن الفئة المتوسطة."],cons:["لا يدعم كاميرا Telephoto مخصصة للتقريب، ويقتصر تصوير البورتريه على تقريب 2X باستخدام الكاميرا الرئيسية.","لا يدعم تركيب بطاقة ذاكرة خارجية.","لا يوجد إعلان رسمي عن طبقة حماية الشاشة."]},

{id:9,brand:"POCO",name:"POCO X8 Pro",image:"https://ennap.com/cdn/shop/files/494ca0d69dcc7edbec68c024a42495e2.webp?v=1781531878&width=980",ram:"12GB",storage:"512GB",category:"mid",price:"35K",screen:"6.59 بوصة — دقة 1268×2756 بكسل — شاشة بها ثقب",processor:"MediaTek Dimensity 8500 Ultra — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية مزدوجة 50MP + 8MP — أمامية 20MP",battery:"6500 مللي أمبير",charging:"100W",os:"Android 16",updates:"4 سنوات تحديثات Android والأمان",pros:["ستحصل على أداء قوي بفضل معالج MediaTek Dimensity 8500 Ultra.","بطارية كبيرة بسعة 6500 مللي أمبير مع دعم شحن سريع بقوة 100 واط، والشاحن مرفق بالعلبة.","سماعات ستيريو لتحصل على تجربة صوتية مميزة من حيث الصوت.","شاشة AMOLED بدقة مميزة مع دعم معدل التحديث 120Hz وHDR10+ بمعدل تعتيم مريح للعين.","فريم معدني مع مقاومة ماء ممتازة.","الكاميرا الخلفية الرئيسية تقدم تجربة جيدة."],cons:["لا يدعم شريحة eSIM.","يفتقد إلى كاميرا الزوم Telephoto.","تصوير فيديو السيلفي يصل إلى 1080p فقط ولا يدعم 4K.","تجربة الكاميرات عمومًا جيدة، ولكنها ليست الأقوى في الفئة."]},

{id:10,brand:"Tecno",name:"Tecno Camon 50 Ultra 5G",image:"https://d13pvy8xd75yde.cloudfront.net/camon/CN7C-%E6%9D%BE%E6%9F%8F%E7%BB%BF.png",ram:"12GB",storage:"256GB",category:"mid",price:"30K",screen:"6.78 بوصة — دقة 1208×2644 بكسل — شاشة بها ثقب — 144Hz",processor:"MediaTek Dimensity 7400 ULT — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 50MP + 50MP + 8MP — أمامية 50MP",battery:"6500 مللي أمبير",charging:"45W",os:"Android 16",updates:"3 سنوات تحديثات Android والأمان",pros:["شاشة AMOLED ممتازة بدقة 1.5K+ وتدعم تقنية HDR10 ومعدل تحديث 144 هرتز، ومحمية بطبقة زجاج Gorilla Glass Victus 2.","مجموعة كاميرات خلفية جيدة تدعم التقريب البصري والرقمي حتى 60x وتقنية التثبيت البصري OIS وتصوير الفيديوهات بدقة 4K.","المعالج يقدم أداءً جيدًا جدًا ويُعتبر من بين أقوى المعالجات في الفئة المتوسطة.","الهاتف يدعم الشريحة الإلكترونية المدمجة eSIM.","دعم مقاومة الماء والغبار بمعياري IP68 وIP69K."],cons:["الجهاز لا يدعم الشحن اللاسلكي.","لا يدعم تركيب بطاقة التخزين الخارجي الميموري كارد MicroSD."]},

{id:11,brand:"realme",name:"Realme 15 Pro",image:"https://elghazawy.b-cdn.net/247726/Realme-15-Pro-Dual-SIM--256GB-Memory--12GB-RAM--5G--Flowing-Silver--1.webp",ram:"12GB",storage:"256GB",category:"mid",price:"29K",screen:"6.8 بوصة — دقة 1280×2800 بكسل — شاشة بها ثقب صغير",processor:"Qualcomm Snapdragon 7 Gen 4 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية مزدوجة 50MP + 50MP — أمامية 50MP",battery:"7000 مللي أمبير",charging:"80W",os:"Android 15",updates:"3 سنوات تحديثات Android والأمان",pros:["أكبر بطارية في الفئة المتوسطة 7000 مللي أمبير.","دعم الشحن السريع 80 واط والشاحن مرفق بالعلبة.","أعلى سطوع شاشة في فئته السعرية مع دقة 1.5K وتردد 144 هيرتز (الفعلي 120 هيرتز في معظم التطبيقات).","ستحصل على أداء جيد جدًا بفضل المعالج Snapdragon 7 Gen 4 وذاكرة التخزين الـ UFS 3.1.","يدعم تصوير الفيديوهات بجودة الـ 4K بمعدل 60 فريم في الثانية بكل العدسات.","الكاميرات تقدم تجربة جيدة في التصوير الأساسية والالترا وايد والسيلفي.","يدعم مميزات ذكاء اصطناعي جديدة مثل Ai Edit Genie ليساعدك في تغيير أي شيء بالصور بكل سهولة.","مقاوم للماء والغبار بمعيار IP68/IP69."],cons:["يفتقد إلى دعمه لتركيب كارت ميموري.","لا يدعم الهاتف منفذ الـ 3.5 ملم الخاص بسماعات الأذن.","لا يدعم كاميرا التقريب الـ Telephoto.","إطار الهاتف من البلاستيك.","لا يدعم الـ eSIM."]},

{id:12,brand:"Samsung",name:"Samsung Galaxy S26 FE",image:"https://elghazawy.b-cdn.net/292404/Samsung-Galaxy-S26-FE.webp",ram:"8GB",storage:"256GB",category:"uppermid",price:"46K",screen:"6.7 بوصة — دقة 1080×2340 بكسل — شاشة بها ثقب",processor:"Samsung Exynos 2500 — عشاري النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 50MP + 8MP + 12MP — أمامية 12MP",battery:"4900 مللي أمبير",charging:"45W",os:"Android 17",updates:"7 سنوات تحديثات Android والأمان",pros:["معالج Exynos 2500 يقدم أداءً قويًا ومميزًا أثناء الاستخدام.","يأتي بأحدث نظام تشغيل Android 17 مع دعم 7 سنوات من تحديثات Android، بالإضافة إلى دعم Samsung DeX.","يدعم مزايا الذكاء الاصطناعي الرائدة مثل My Fan Cam وPhoto Assist وHorizontal Lock لتثبيت الفيديو.","كاميرات جيدة جدًا مع دعم تصوير الفيديو بدقة 8K.","خامات ممتازة مع مقاومة الماء والغبار بمعيار IP68.","سماعات خارجية بصوت ستيريو لتجربة صوتية أفضل.","شاشة Dynamic AMOLED ممتازة من حيث الألوان مع سطوع يصل إلى 1900 شمعة."],cons:["كان من الأفضل تطوير عدسة التقريب Telephoto لتقديم أداء أقوى من دقة 8MP.","رأس الشاحن تحتاج إلى الشراء بشكل منفصل.","لم يتم تطوير سعة البطارية أو سرعات الشحن.","يتوفر بذاكرة RAM بسعة 8GB فقط ولا توجد نسخة بذاكرة 12GB."]},

{id:13,brand:"Xiaomi",name:"Xiaomi 17T",image:"https://i02.appmifile.com/866_item_au/21/05/2026/db003cab62e8ca0cce3b17f6d26bf3d8.png?thumb=1&f=webp&q=85",ram:"12GB",storage:"256GB / 512GB",category:"uppermid",price:"42K",screen:"6.59 بوصة — دقة 1268×2756 بكسل — شاشة بها ثقب",processor:"MediaTek Dimensity 8500 Ultra — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 50MP + 50MP + 12MP — أمامية 32MP",battery:"6500 مللي أمبير",charging:"67W",os:"Android 16",updates:"5 سنوات تحديثات Android والأمان",pros:["أداء قوي بفضل معالج Dimensity 8500 Ultra، خصوصًا في الألعاب.","كاميرا خلفية قوية، خصوصًا عدسة التقريب 5X، مع دعم تصوير الفيديو بصيغة LOG.","سماعات ستيريو مع نظام Haptics ممتاز ومستشعر تقارب حقيقي للمكالمات.","شاشة AMOLED بدقة ممتازة مع دعم معدل تحديث 120Hz وHDR10+ وسطوع مرتفع.","مقاوم للماء والغبار بمعيار IP68.","بطارية كبيرة بسعة 6500 مللي أمبير تصمد لفترة طويلة خلال اليوم مع شحن سريع بقوة 67 واط."],cons:["فريم الهاتف مصنوع من البلاستيك.","الكاميرا الأمامية لا تدعم التركيز التلقائي Auto Focus."]},

{id:14,brand:"OPPO",name:"OPPO Reno 16",image:"https://www.oppostore.com/_next/image?url=https%3A%2F%2Fassets-eg.oppostore.com%2Freno16whitefv-1786433037739.webp&w=1080&q=75",ram:"12GB",storage:"256GB",category:"uppermid",price:"40K",screen:"6.32 بوصة — دقة 1216×2640 بكسل — شاشة بها ثقب",processor:"Qualcomm Snapdragon 7 Gen 4 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 50MP + 50MP + 50MP — أمامية 50MP",battery:"6700 مللي أمبير",charging:"80W",os:"Android 16",updates:"5 سنوات تحديثات Android والأمان",pros:["تصميم متين بخامات ممتازة تشمل ظهرًا زجاجيًا وفريمًا معدنيًا مع مقاومة ممتازة للماء.","أداء مستقر بفضل معالج Snapdragon 7 Gen 4 مع دعم تشغيل ببجي بمعدل 90 إطارًا.","الكاميرات تقدم تجربة ممتازة، سواء الكاميرا الرئيسية أو الزوم أو Ultra Wide أو الكاميرا الأمامية، مع دعم تصوير 4K بمعدل 60 إطارًا من جميع العدسات.","بطارية ضخمة بسعة 6700 مللي أمبير مع شحن سريع بقوة 80 واط، والشاحن مرفق داخل العلبة.","سوفت وير مستقر وشبكات ممتازة كعادة هواتف OPPO المتوسطة.","سماعات خارجية بصوت ستيريو مرتفع."],cons:["ارتفاع السعر العالمي للهاتف بسبب أزمة أسعار شرائح الذاكرة.","لا توجد نسخة بمساحة تخزين 512GB.","حجم الشاشة صغير نسبيًا بالنسبة لبعض المستخدمين."]},

{id:15,brand:"vivo",name:"vivo V70",image:"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1772002554184/c5c9841a5f7097e30d9bfeeaee5dde07.png",ram:"8GB / 12GB",storage:"256GB",category:"uppermid",price:"37K",screen:"6.59 بوصة — دقة 1260×2750 بكسل — ثقب صغير",processor:"Qualcomm Snapdragon 7 Gen 4 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 50MP + 50MP + 8MP — أمامية 50MP",battery:"6500 مللي أمبير",charging:"90W",os:"Android 16",updates:"4 سنوات Android + 6 سنوات أمان",pros:["تصميم أنيق وفخم بخامات مميزة وحجم مثالي في اليد.","أول هاتف متوسط يأتي ببصمة Ultrasonic سريعة جدًا.","كاميرات ممتازة بالتعاون مع ZEISS تقدم أداءً قويًا في الفئة، مع تطور واضح في تصوير الفيديو حتى 4K بمعدل 60 إطارًا في الثانية، ولكن بدون HDR.","شاشة مسطحة تمامًا بدون أي انحناء، بحواف قليلة جدًا ودقة 1.5K وسطوع مرتفع.","بطارية كبيرة تكفي للاستخدام طوال اليوم مع شحن سريع بقوة 90 واط، ويمكن شحن البطارية بالكامل في حوالي 45 دقيقة.","معالج Snapdragon 7 Gen 4 يقدم أداءً جيدًا جدًا في الفئة المتوسطة، مع ذاكرة تخزين سريعة UFS 4.1 ودعم تشغيل ببجي بمعدل 90 إطارًا."],cons:["أداء الكاميرا Ultra Wide متواضع مقارنة بباقي الكاميرات.","السماعات الخارجية تدعم صوت ستيريو وصوتها مرتفع، لكن جودة البيس ليست الأفضل."]},

{id:16,brand:"vivo",name:"vivo V80",image:"https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1790224157106/e99e4f8459846a1c4a24eb5726ff892c.png",ram:"8GB",storage:"256GB",category:"uppermid",price:"42K",screen:"6.59 بوصة — دقة 1260×2750 بكسل — شاشة بها ثقب — 144Hz",processor:"Qualcomm Snapdragon 7 Gen 4 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 50MP + 50MP + 8MP — أمامية 50MP",battery:"7200 مللي أمبير",charging:"90W",os:"Android 17",updates:"4 سنوات Android + 6 سنوات أمان",pros:["أشيك تصميم في الفئة المتوسطة العليا بخامات فخمة مقاومة للماء.","كاميرات قوية جدًا بالتعاون مع ZEISS تقدم تجربة مميزة سواء في الصور أو الفيديوهات.","بطارية كبيرة بسعة 7200 مللي أمبير تصمد للعمل لفترة طويلة.","يدعم الشحن السريع بقوة 90 واط مع شاحن مرفق داخل العلبة.","بصمة Ultrasonic سريعة جدًا أسفل الشاشة.","شاشة AMOLED بمعدل تحديث 144Hz تكفي لمشاهدة الفيديوهات ولعب الألعاب.","المعالج Snapdragon 7 Gen 4 ما زال يقدم أداءً جيدًا جدًا في الفئة المتوسطة العليا، ولكن بدون أي تطوير عن الجيل السابق."],cons:["أداء متواضع من الكاميرا الـ Ultra Wide.","الرام أصبح 8 جيجا في كل النسخ بدلًا من 12 جيجا بسبب أزمة الرامات العالمية."]},

{id:17,brand:"realme",name:"realme 16 Pro Plus",image:"https://cdn.beebom.com/mobile/realme-16-pro-plus-front-back-356w.webp",ram:"12GB",storage:"256GB / 512GB",category:"uppermid",price:"40K",screen:"6.8 بوصة — دقة 1280×2800 بكسل — شاشة بها ثقب",processor:"Qualcomm Snapdragon 7 Gen 4 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 200MP + 50MP + 8MP — أمامية 50MP",battery:"7000 مللي أمبير",charging:"80W",os:"Android 16",updates:"3 سنوات تحديثات Android والأمان",pros:["تصميم أنيق ومختلف عن معظم الهواتف الصينية المنافسة.","مقاوم للماء والغبار بمعيار IP68/IP69K.","كاميرات قوية تقدم تجربة منافسة في الفئة المتوسطة العليا، خصوصًا الكاميرا الرئيسية وعدسة التقريب.","بطارية ممتازة تدوم لفترة طويلة مع دعم الشحن السريع بقوة 80 واط.","شاشة AMOLED منحنية كبيرة بسطوع مرتفع وألوان ممتازة ودقة جيدة جدًا.","سماعات خارجية بصوت ستيريو لتجربة صوتية مميزة.","أداء جيد ومقبول بفضل معالج Snapdragon 7 Gen 4، وهو نفس المعالج المستخدم في عدد كبير من هواتف الفئة المتوسطة العليا."],cons:["فريم الهاتف مصنوع من البلاستيك.","لا يدعم خاصية eSIM.","ارتفاع سعر الهاتف بسبب أزمة أسعار شرائح الذاكرة عالميًا."]},

{id:18,brand:"OPPO",name:"OPPO Reno 15 5G",image:"https://www.oppo.com/content/dam/oppo_com/common/mkt/v2-2/reno15-series-en/specs/reno15-f/darkblue-blue.png",ram:"12GB",storage:"256GB / 512GB",category:"uppermid",price:"37K",screen:"6.59 بوصة — دقة 1256×2760 بكسل — شاشة بها ثقب",processor:"Qualcomm Snapdragon 7 Gen 4 — ثماني النواة — تكنولوجيا 4 نانو",camera:"خلفية ثلاثية 50MP + 50MP + 8MP — أمامية 50MP",battery:"6500 مللي أمبير",charging:"80W",os:"Android 16",updates:"5 سنوات تحديثات Android والأمان",pros:["تصميم متين ظهر زجاج فريم معدن مع أعلى مقاومة للماء.","بطارية كبيرة 6500 مللي أمبير تدعم الشحن السريع 80 واط.","سخونة قليلة مع الألعاب الثقيلة بفضل استخدام معالج كوالكم الـ Snapdragon 7 Gen 4.","صوت ستيريو عالي.","شاشة اموليد مسطحة بدقة ممتازة تدعم 120Hz.","تجربة كاميرات متوازنة بشكل كبير بين الصور والفيديوهات.","سيلفي جديد بزاوية أوسع 100 درجة يقدم تجربة أفضل."],cons:["لم يتم تحسين سطوع الشاشة تحت الشمس.","أداء متواضع من الكاميرا الألترا وايد.","تم تقليل المعالج نسبيًا مقارنة مع الجيل السابق."]},

{id:19,brand:"Xiaomi",name:"Xiaomi 17T Pro",image:"https://i02.appmifile.com/54_operatorx_operatorx_xm/22/05/2026/d054829321eeca82f190b5785abd7c91.png?thumb=1&f=webp&q=85",ram:"12GB",storage:"512GB",category:"premium",price:"54K",screen:"6.83 بوصة — دقة 1280×2772 بكسل — شاشة بها ثقب",processor:"MediaTek Dimensity 9500 — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 50MP + 50MP + 12MP — أمامية 32MP",battery:"7000 مللي أمبير",charging:"100W",os:"Android 16",updates:"5 سنوات تحديثات Android والأمان",pros:["أداء قوي جدًا بفضل المعالج الرائد Dimensity 9500، وهو معالج مستخدم في هواتف رائدة لدى شركات منافسة، خصوصًا في الألعاب.","بطارية ضخمة بسعة 7000 مللي أمبير تقدم تجربة استخدام مميزة.","يدعم الشحن السلكي السريع بقوة 100 واط والشحن اللاسلكي بقوة 50 واط.","كاميرات خلفية جيدة بالتعاون مع Leica مع دعم تصوير الفيديو بدقة 8K.","تصميم بخامات جيدة مع مقاومة الماء والغبار بمعيار IP68.","شاشة ممتازة من حيث الألوان والسطوع والحواف."],cons:["الكاميرا الأمامية متوسطة من حيث الأداء، لكنها جيدة جدًا للاستخدام اليومي."]},

{id:20,brand:"vivo",name:"vivo X300 FE",image:"https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/322894_0_5R-kyeGpnB.png?updatedAt=1778140312203&tr=w-1000",ram:"12GB",storage:"256GB / 512GB",category:"premium",price:"53K",screen:"6.31 بوصة — دقة 1216×2640 بكسل — شاشة بها ثقب",processor:"Qualcomm Snapdragon 8 Gen 5 — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 50MP + 50MP + 8MP — أمامية 50MP",battery:"6500 مللي أمبير",charging:"90W",os:"Android 16",updates:"5 سنوات Android + 6 سنوات أمان",pros:["نظام كاميرات قوي مع دعم تصوير الفيديو بدقة 8K باستخدام الكاميرا الخلفية الرئيسية.","خامات ممتازة وتصميم أنيق وحجم صغير مناسب لمحبي الهواتف المدمجة.","مقاوم للماء والغبار بمعياري IP68 وIP69.","معالج قوي Snapdragon 8 Gen 5 بتقنية تصنيع 3 نانو.","بطارية كبيرة السعة تصمد لفترة طويلة خلال اليوم.","يدعم الشحن السريع بقوة 90 واط والشحن اللاسلكي بقوة 40 واط.","سماعات خارجية بصوت ستيريو تقدم تجربة صوتية مميزة.","شاشة AMOLED بسطوع مرتفع وحواف قليلة ومعدل تحديث متغير من 1 إلى 120Hz لتوفير استهلاك البطارية."],cons:["كان من الأفضل أن تأتي كاميرا Ultra Wide بدقة أعلى.","منفذ USB من نوع Type-C 2.0، وكان من الأفضل استخدام USB 3.2.","حجم الشاشة صغير نسبيًا بالنسبة لبعض المستخدمين."]},

{id:21,brand:"HONOR",name:"HONOR 600 Pro",image:"https://elghazawy.b-cdn.net/292541/Honor-600-Pro-%281%29.webp",ram:"12GB",storage:"512GB",category:"premium",price:"54K",screen:"6.57 بوصة — دقة 1264×2728 بكسل — شاشة بها ثقب",processor:"Qualcomm Snapdragon 8 Elite — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 200MP + 50MP + 12MP — أمامية 50MP",battery:"7000 مللي أمبير",charging:"80W",os:"Android 16",updates:"سنتان تحديثات Android والأمان",pros:["أداء قوي بفضل معالج Snapdragon 8 Elite، مع ملاحظة ارتفاع الحرارة عند الضغط المكثف على المعالج.","شاشة AMOLED ممتازة بحواف قليلة وسطوع مرتفع جدًا تحت أشعة الشمس.","نظام كاميرات ممتاز يقدم تجربة قوية في الصور والفيديوهات.","هيكل متين بفريم معدني مع أعلى مستويات مقاومة الماء والغبار.","بطارية كبيرة تصمد لفترة طويلة خلال اليوم.","يدعم الشحن السريع بقوة 80 واط والشحن اللاسلكي بقوة 50 واط لسرعة شحن مميزة."],cons:["لا يدعم تصوير الفيديو بدقة 8K.","لا يوجد إعلان رسمي عن طبقة حماية الشاشة.","كان من الأفضل استخدام ذاكرة تخزين أسرع مثل UFS 4.1."]},

{id:22,brand:"OPPO",name:"OPPO Find X9 Pro",image:"https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/319502_0_vTwvlkMIfT.png?updatedAt=1762260018166&tr=w-1000",ram:"16GB",storage:"512GB",category:"flagship",price:"70K",screen:"6.78 بوصة — دقة 1272×2772 بكسل — شاشة بها ثقب",processor:"MediaTek Dimensity 9500 — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 50MP + 200MP + 50MP — أمامية 50MP",battery:"7500 مللي أمبير",charging:"80W",os:"Android 16",updates:"5 سنوات تحديثات Android والأمان",pros:["بطارية ضخمة بسعة 7500 مللي أمبير، وهي من أقوى البطاريات في فئة الهواتف الرائدة.","شاحن سريع بقوة 80 واط يأتي مرفقًا داخل العلبة، مع دعم الشحن اللاسلكي بقوة 50 واط.","معالج Dimensity 9500 بتقنية 3 نانو يقدم أداءً قويًا جدًا وسريعًا.","خامات رائدة ممتازة مع مقاومة الماء والغبار بمعياري IP68 وIP69.","شاشة ممتازة مسطحة بحواف قليلة وسطوع مرتفع تحت أشعة الشمس.","الكاميرات تقدم تجربة ممتازة في الصور والفيديوهات مع دعم تصوير 4K بمعدل 120 إطارًا في الثانية.","دعم شبكات ممتاز، مع بصمة سريعة جدًا أسفل الشاشة."],cons:["لا يدعم تصوير الفيديو بدقة 8K.","ارتفاع ملحوظ في الحرارة عند الضغط الشديد على المعالج.","كان من الأفضل استخدام دقة QHD بدلًا من 1.5K.","لا يدعم طبقة مقاومة للانعكاسات على الشاشة."]},

{id:23,brand:"OPPO",name:"OPPO Find X10",image:"https://opsg-imgcdn-eu.heytapimg.com/media/202610/21/d30ed419b8a38bba65030d092db7f939.png?x-amz-process=image/format,webp/quality,Q_80",ram:"12GB",storage:"256GB",category:"flagship",price:"80K",screen:"6.59 بوصة — دقة 1272×2772 بكسل — 144Hz — شاشة بها ثقب",processor:"MediaTek Dimensity 9600M — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 200MP + 200MP + 50MP — أمامية 50MP",battery:"8000 مللي أمبير",charging:"80W",os:"Android 17",updates:"6 سنوات تحديثات Android والأمان",pros:["كاميرات قوية جدا مع دعم تصوير فيديو 8K و 4K@120FPS بالكاميرا الرئيسية والزوم.","تصميم مميز بخامات فخمة.","مقاوم للماء والغبار بمعيار IP68/IP69.","معالج قوي من نوع Dimensity 9600M بتقنية 3 نانو.","بطارية كبيرة السعة تصمد للعمل لفترة طويلة خلال اليوم.","يدعم الشحن السريع بقوة 80 واط مع شحن لاسلكي بقوة 50 واط.","شاشة أموليد بحجم جيد جدا بحواف قليلة جدا وتجربة ممتازة."],cons:["صوت الهاتف ليس الأعلى وسط الهواتف الرائدة.","كنا نتمنى سطوع أعلى للشاشة ولكن ما زال السطوع مقبول جدا."]},

{id:24,brand:"vivo",name:"vivo X300 Pro",image:"https://vivo-official.com/cdn/shop/files/X300PRO_Gold_ProductImage.png?v=1780761943&width=1000",ram:"16GB",storage:"512GB",category:"flagship",price:"70K",screen:"6.78 بوصة — دقة 1260×2800 بكسل — شاشة بها ثقب",processor:"MediaTek Dimensity 9500 — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 50MP + 200MP + 50MP — أمامية 50MP",battery:"6510 مللي أمبير",charging:"90W",os:"Android 16",updates:"5 سنوات Android + 6 سنوات أمان",pros:["تجربة كاميرات ممتازة، وقد تكون من الأفضل بين الهواتف الصينية الرائدة.","يدعم تصوير الفيديو بدقة 8K.","معالج Dimensity 9500 بتقنية 3 نانو يقدم أداءً قويًا جدًا.","يدعم الشحن السريع بقوة 90 واط، ويمكن شحن البطارية بالكامل في حوالي نصف ساعة.","شاشة AMOLED مسطحة بحواف قليلة وسطوع مرتفع تحت أشعة الشمس.","خامات رائدة ممتازة مع مقاومة الماء والغبار بمعياري IP68 وIP69.","سماعات خارجية بصوت ستيريو تقدم تجربة صوتية أفضل."],cons:["الكاميرا الخلفية بارزة بشكل ملحوظ عن ظهر الهاتف.","أداء البطارية جيد، لكنه ليس الأفضل مقارنة ببعض الهواتف الصينية الرائدة.","ارتفاع ملحوظ في الحرارة عند الضغط الشديد على المعالج، مع تبريد أفضل من OPPO Find X9 Pro.","دقة الشاشة 1.5K فقط، لكنها تقدم كثافة بكسلات ممتازة تبلغ 452 بكسل لكل بوصة.","لا توجد طبقة مقاومة للانعكاسات على الشاشة."]},

{id:25,brand:"HONOR",name:"HONOR Magic 8 Pro",image:"https://elghazawy.b-cdn.net/261045/Honor-Magic-8-Pro-Dual-SIM-Mobile%2C-512GB-Internal-Memory%2C-12GB-RAM%2C-5G%2C-Black-%281%29.webp",ram:"12GB",storage:"512GB",category:"flagship",price:"80K",screen:"6.71 بوصة — دقة 1256×2808 بكسل — ثقب مزدوج",processor:"Snapdragon 8 Elite Gen 5 — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 50MP + 200MP + 50MP — أمامية 50MP",battery:"7100 مللي أمبير",charging:"100W",os:"Android 16",updates:"7 سنوات تحديثات Android والأمان",pros:["أداء قوي ومميز بفضل معالج Snapdragon 8 Elite Gen 5.","تعد الشركة بدعم التحديثات لمدة 7 سنوات.","تجربة كاميرات ممتازة في الكاميرات الخلفية والأمامية، مع عدسة زوم جديدة وقوية.","بطارية كبيرة السعة تصمد لفترة طويلة خلال اليوم مع دعم الشحن السريع والشحن اللاسلكي بسرعات عالية.","سماعات خارجية ستيريو قوية تقدم تجربة صوتية مميزة.","مقاوم للماء والغبار بشهادات IP68 وIP69K.","مستشعر حقيقي للتعرف على الوجه حتى في الظلام التام، مع بصمة Ultrasonic سريعة جدًا."],cons:["لا يدعم تصوير الفيديو بدقة 8K.","الكاميرا الخلفية بارزة بشكل كبير عن ظهر الهاتف.","الخامات المستخدمة ليست الأفخم مقارنة ببعض المنافسين في الفئة الرائدة.","تصميم الشاشة بالثقب المزدوج قد لا يكون مفضلًا لبعض المستخدمين، كما أنها لا تدعم طبقة مقاومة للانعكاسات.","دقة الشاشة 1.5K فقط، لكنها تقدم كثافة بكسلات ممتازة تبلغ 458 بكسل لكل بوصة."]},

{id:26,brand:"vivo",name:"vivo X300 Ultra",image:"https://vivo-official.com/cdn/shop/files/X300_Ultra_Product_Image_Green.png?v=1780762118&width=1400",ram:"16GB",storage:"512GB",category:"ultra",price:"95K",screen:"6.82 بوصة — دقة 1440×3168 بكسل — شاشة بها ثقب",processor:"Snapdragon 8 Elite Gen 5 — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 200MP + 200MP + 50MP — أمامية 50MP",battery:"6600 مللي أمبير",charging:"100W",os:"Android 16",updates:"5 سنوات Android + 7 سنوات أمان",pros:["نظام كاميرات خلفية ممتاز يشمل الكاميرا الرئيسية والزوم وUltra Wide، وجميعها تدعم تصوير الفيديو بدقة 8K.","خامات قوية مع مقاومة ممتازة للماء والغبار بمعياري IP68 وIP69.","بطارية جيدة بالنسبة للهواتف الصينية الرائدة مع دعم سرعات شحن عالية.","معالج Snapdragon 8 Elite Gen 5 بتقنية 3 نانو يقدم أداءً قويًا، مع ملاحظة ارتفاع الحرارة عند الضغط المتواصل.","شاشة AMOLED كبيرة بدقة QHD+ وسطوع ممتاز تقدم تجربة مشاهدة مميزة.","كاميرات مميزة في الأمام والخلف مع دعم المثبت البصري OIS."],cons:["الكاميرا الخلفية بارزة بشكل ملحوظ عن ظهر الهاتف.","سمك الهاتف ووزنه مرتفعان نسبيًا، وقد تحتاج إلى بعض الوقت للتعود عليه.","ارتفاع ملحوظ في درجة الحرارة أثناء الاستخدام المكثف والقوي."]},

{id:27,brand:"Samsung",name:"Samsung Galaxy S26 Ultra",image:"https://elghazawy.b-cdn.net/269302/Samsung-Galaxy-S26-Ultra-%281%29.webp",ram:"12GB / 16GB",storage:"256GB / 512GB / 1TB",category:"ultra",price:"80K - 113K",screen:"6.9 بوصة — دقة 1440×3120 بكسل — شاشة بها ثقب",processor:"Snapdragon 8 Elite Gen 5 — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية رباعية 200MP + 10MP + 50MP + 50MP — أمامية 12MP",battery:"5000 مللي أمبير",charging:"60W",os:"Android 16",updates:"7 سنوات تحديثات Android والأمان",pros:["تقدم الشاشة واحدة من أفضل تجارب العرض، مع ميزة Privacy التي تمنع المتطفلين من رؤية المحتوى المعروض على الشاشة، مع زوايا رؤية أقل من الجيل السابق.","أداء قوي جدًا بفضل معالج كوالكوم الرائد Snapdragon 8 Elite Gen 5.","7 سنوات من تحديثات Android، بالإضافة إلى دعم Samsung DeX.","سرعات الشحن أصبحت 60 واط سلكيًا، ويمكن شحن 75% من البطارية خلال نصف ساعة، بينما ارتفعت سرعة الشحن اللاسلكي إلى 25 واط.","كاميرات ممتازة كعادة سلسلة Ultra من سامسونج، خصوصًا مع فتحات العدسات الأوسع التي تساعد في التصوير الليلي.","يقدم مجموعة قوية من مزايا الذكاء الاصطناعي.","ما زال يدعم قلم S Pen المدمج داخل الهاتف."],cons:["لم يتم زيادة سعة البطارية، رغم وجود تحسن ملحوظ في كفاءة الاستخدام مقارنة بالجيل السابق.","رأس الشاحن لا تأتي مرفقة داخل علبة الهاتف.","بروز الكاميرات أصبح أكبر نسبيًا، كما أصبح فريم الهاتف من الألومنيوم بدلًا من التيتانيوم.","لا يدعم الإكسسوارات المغناطيسية."]},

{id:28,brand:"Xiaomi",name:"Xiaomi 17 Ultra",image:"https://smartkoshk.com/cdn/shop/files/23694_Xiaomi-17-Ultra-Green-main.webp?v=1772887012&width=980",ram:"16GB",storage:"512GB",category:"ultra",price:"95K",screen:"6.9 بوصة — دقة 1200×2608 بكسل — شاشة بها ثقب",processor:"Snapdragon 8 Elite Gen 5 — ثماني النواة — تكنولوجيا 3 نانو",camera:"خلفية ثلاثية 50MP + 200MP + 50MP — أمامية 50MP",battery:"6000 مللي أمبير",charging:"90W",os:"Android 16",updates:"5 سنوات تحديثات Android والأمان",pros:["الكاميرات تقدم تجربة تصوير مميزة كعادة سلسلة Ultra من شاومي، خصوصًا عدسة الزوم ذات الفتحة المتغيرة والبعد البؤري المتغير، مما يجعله هاتفًا مميزًا جدًا في تصوير البورتريه.","يدعم تصوير الفيديو بدقة 8K أو 4K بمعدل 120 إطارًا في الثانية باستخدام الكاميرا الرئيسية وعدسة الزوم.","أداء قوي بفضل معالج Snapdragon 8 Elite Gen 5، مع ملاحظة ارتفاع الحرارة أثناء الألعاب.","مستشعر البصمة سريع جدًا.","سماعات خارجية ستيريو تقدم صوتًا مرتفعًا وتجربة صوتية مميزة.","بطارية جيدة تكفي ليوم كامل مع دعم الشحن السريع السلكي واللاسلكي.","أكبر شاشة في سلسلة Ultra حتى الآن، مع تجربة مشاهدة مميزة ومعدل تحديث متغير من 1 إلى 120Hz للمساعدة في توفير الطاقة."],cons:["وزن الهاتف مرتفع وسمكه كبير نسبيًا.","الكاميرا الخلفية بارزة بشكل كبير جدًا عن ظهر الهاتف.","دقة الشاشة أقل من QHD+.","ارتفاع ملحوظ في الحرارة عند الضغط على المعالج."]},

{id:29,brand:"OPPO",name:"OPPO Find X10 Pro Max",image:"https://oppo-luxembourg.store/cdn/shop/files/00-OPP_1_e8949ad9-ff3f-47d7-8228-53021f4b11a8.png?v=1791557903",ram:"12GB",storage:"512GB",category:"ultra",price:"100K",screen:"6.78 بوصة — دقة 1272×2772 بكسل — 144Hz — شاشة بها ثقب",processor:"MediaTek Dimensity 9600 Pro — ثماني النواة — تكنولوجيا 2 نانو",camera:"خلفية ثلاثية 200MP + 200MP + 200MP — أمامية 50MP",battery:"8000 مللي أمبير",charging:"80W",os:"Android 17",updates:"6 سنوات تحديثات Android والأمان",pros:["أول هاتف في العالم بـ 3 كاميرات 200 ميجا بيكسل لتجربة ممتازة في التصوير صور أو فيديوهات مع دعم تصوير فيديو 8K و 4K@120FPS بكل العدسات مع دعم تصوير LOG و Open Gate.","معالج قوي من نوع Dimensity 9600 Pro بتقنية 2 نانو يقدم اداء صاروخي.","خامات راقية وتصميم مميز.","مقاوم للماء والغبار بمعيار IP68/IP69.","بطارية كبيرة السعة تصمد للعمل لفترة طويلة خلال اليوم.","يدعم الشحن السريع بقوة 80 واط مع شحن لاسلكي بقوة 50 واط.","شاشة أموليد بحجم جيد جدا بحواف قليلة وتجربة ممتازة.","موتور فيبريشن قوي ومحترم جدا في التجربة."],cons:["كنا نتمنى أن يأتي بقدرة شحن أقوى.","تخانة و وزن ثقيل لذلك ستحتاج إلى بعض الوقت للاعتياد عليه.","صوت الهاتف ليس الأعلى وسط الهواتف الرائدة.","كنا نتمنى سطوع أعلى للشاشة ولكن ما زال السطوع مقبول جدا."]}

];


/* =========================================================
   عناصر الصفحة
========================================================= */

const phonesGrid=document.getElementById("phonesGrid");
const searchInput=document.getElementById("searchInput");
const filters=document.querySelectorAll(".filter");
const categories=document.querySelectorAll(".category");
const emptyState=document.getElementById("emptyState");
const phoneCounter=document.getElementById("phoneCounter");
const brandCounter=document.getElementById("brandCounter");
const clearSearch=document.getElementById("clearSearch");
const clearFiltersBtn=document.getElementById("clearFiltersBtn");

const compareModal=document.getElementById("compareModal");
const compareA=document.getElementById("compareA");
const compareB=document.getElementById("compareB");
const comparisonResult=document.getElementById("comparisonResult");

const scrollTop=document.getElementById("scrollTop");
const compareCount=document.getElementById("compareCount");

const phonePage=document.getElementById("phonePage");

let activeBrand="all";
let activeCategory="all";


/* =========================================================
   SEO — Meta Tags Management
========================================================= */

const SITE_URL = (window.location.origin && window.location.origin.startsWith('http'))
  ? window.location.origin
  : "https://badrphone.com";

const SITE_NAME = "Badr Phone";
const SITE_TITLE = "Badr Phone — دليل الهواتف 2026";
const SITE_DESCRIPTION = "دليلك الشامل لأفضل الهواتف الذكية لعام 2026 — مواصفات كاملة، أسعار، مميزات وعيوب، ومقارنة مباشرة بين الهواتف.";
const DEFAULT_OG_IMAGE = "https://elghazawy.b-cdn.net/276540/Infinix-Note-60-%281%29.webp";

function setMeta(attr, name, content){
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if(!el){
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function getPriceNumber(priceStr){
  if(!priceStr) return 0;
  const num = parseFloat(priceStr);
  if(isNaN(num)) return 0;
  return priceStr.includes('K') ? num * 1000 : num;
}

function updateMetaTags(phone){
  const phoneUrl = `${SITE_URL}/#phone/${phone.id}/${phoneSlug(phone.name)}`;
  const phoneDesc = `مواصفات وسعر ${phone.name} في مصر — ${phone.price} جنيه. شاشة، معالج، كاميرات، بطارية، ومميزات وعيوب كاملة على Badr Phone.`;
  const phoneTitle = `${phone.name} — ${SITE_NAME}`;

  document.title = phoneTitle;
  setMeta('name', 'title', phoneTitle);
  setMeta('name', 'description', phoneDesc);

  setMeta('property', 'og:type', 'product');
  setMeta('property', 'og:url', phoneUrl);
  setMeta('property', 'og:title', phoneTitle);
  setMeta('property', 'og:description', phoneDesc);
  setMeta('property', 'og:image', phone.image);
  setMeta('property', 'og:image:alt', phone.name);

  setMeta('name', 'twitter:title', phoneTitle);
  setMeta('name', 'twitter:description', phoneDesc);
  setMeta('name', 'twitter:image', phone.image);

  const canonical = document.querySelector('link[rel="canonical"]');
  if(canonical) canonical.href = phoneUrl;

  const productSchema = document.getElementById('productSchema');
  if(productSchema){
    productSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": phone.name,
      "brand": { "@type": "Brand", "name": phone.brand },
      "image": phone.image,
      "description": `${phone.name} — شاشة: ${phone.screen} — معالج: ${phone.processor} — كاميرات: ${phone.camera} — بطارية: ${phone.battery}`,
      "category": phone.category,
      "offers": {
        "@type": "Offer",
        "price": getPriceNumber(phone.price),
        "priceCurrency": "EGP",
        "availability": "https://schema.org/InStock",
        "url": phoneUrl
      },
      "url": phoneUrl
    });
  }
}

function resetMetaTags(){
  document.title = SITE_TITLE;
  setMeta('name', 'title', SITE_TITLE);
  setMeta('name', 'description', SITE_DESCRIPTION);

  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:url', `${SITE_URL}/`);
  setMeta('property', 'og:title', SITE_TITLE);
  setMeta('property', 'og:description', SITE_DESCRIPTION);
  setMeta('property', 'og:image', DEFAULT_OG_IMAGE);
  setMeta('property', 'og:image:alt', 'Badr Phone — دليل الهواتف 2026');

  setMeta('name', 'twitter:title', SITE_TITLE);
  setMeta('name', 'twitter:description', SITE_DESCRIPTION);
  setMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);

  const canonical = document.querySelector('link[rel="canonical"]');
  if(canonical) canonical.href = `${SITE_URL}/`;

  const productSchema = document.getElementById('productSchema');
  if(productSchema) productSchema.textContent = '';
}


/* =========================================================
   ترتيب الفئات
========================================================= */

const categoryOrder=["economic","mid","uppermid","premium","flagship","ultra"];


/* =========================================================
   أسماء الفئات
========================================================= */

function getCategoryName(category){

const names={
economic:"🟢 اقتصادية",
mid:"🔵 متوسطة",
uppermid:"🟡 متوسطة عليا",
premium:"🟠 شبه رائدة",
flagship:"🔴 رائدة",
ultra:"🟣 رائدة عليا"
};

return names[category]||"";

}

function phoneSlug(name){
if(!name) return "";
return name
.trim()
.replace(/\s+/g,"-")
.replace(/[\/\\?#&=%+]/g,"")
.replace(/-+/g,"-");
}


/* =========================================================
   صورة بديلة عند فشل التحميل + إزالة الـ Skeleton
========================================================= */

function handleImageLoad(image){
if(!image) return;
const wrapper = image.closest(".img-loading");
if(wrapper) wrapper.classList.remove("img-loading");
}

function handleImageError(image){

if(!image || image.dataset.fallback==="true") return;

image.dataset.fallback="true";

const svg=`
<svg xmlns="http://www.w3.org/2000/svg" width="500" height="700" viewBox="0 0 500 700">
<rect width="500" height="700" rx="50" fill="#141428"/>
<rect x="125" y="55" width="250" height="590" rx="35" fill="#1f1f3b" stroke="#7c5cff" stroke-width="5"/>
<circle cx="250" cy="85" r="7" fill="#7c5cff"/>
<text x="250" y="350" text-anchor="middle" fill="#a99cff" font-size="30" font-family="Arial">
Badr Phone
</text>
<text x="250" y="390" text-anchor="middle" fill="#77778e" font-size="20" font-family="Arial">
${image.alt||"Phone"}
</text>
</svg>`;

image.src="data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(svg);

const wrapper = image.closest(".img-loading");
if(wrapper) wrapper.classList.remove("img-loading");
}


/* =========================================================
   المفضلة — localStorage
========================================================= */

const FAV_KEY = "badrPhoneFavorites";
let favorites = [];

function loadFavorites(){
try{
const stored = localStorage.getItem(FAV_KEY);
favorites = stored ? JSON.parse(stored).map(Number) : [];
if(!Array.isArray(favorites)) favorites = [];
}catch(e){
favorites = [];
}
}

function saveFavorites(){
try{
localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
}catch(e){}
}

function isFavorite(id){
return favorites.includes(id);
}

function toggleFavorite(id){
if(isFavorite(id)){
favorites = favorites.filter(f => f !== id);
}else{
favorites.push(id);
}
saveFavorites();
updateFavCount();
updateAllFavoriteButtons(id);

if(activeBrand === "favorites"){
displayPhones();
}
}

function updateFavCount(){
const el = document.getElementById("favCount");
if(el) el.textContent = favorites.length;
}

function updateAllFavoriteButtons(id){
const active = isFavorite(id);

document.querySelectorAll(`.favorite-btn[data-id="${id}"]`).forEach(btn => {
btn.classList.toggle("active", active);
const heart = btn.querySelector(".heart");
if(heart) heart.textContent = active ? "❤️" : "🤍";
btn.setAttribute("aria-label", active ? "إزالة من المفضلة" : "إضافة إلى المفضلة");
});

const addFavBtn = phonePage.querySelector(`.phone-page-add-fav[data-id="${id}"]`);
if(addFavBtn){
addFavBtn.classList.toggle("active", active);
const heart = addFavBtn.querySelector(".heart");
if(heart) heart.textContent = active ? "❤️" : "🤍";
const text = addFavBtn.querySelector(".add-fav-text");
if(text) text.textContent = active ? "في المفضلة" : "أضف للمفضلة";
}
}


/* =========================================================
   إنشاء كارت هاتف
========================================================= */

function createCard(phone){

const card=document.createElement("article");
card.className="phone-card";
card.dataset.id=phone.id;

const favActive = isFavorite(phone.id);

card.innerHTML=`

<button
class="favorite-btn ${favActive ? "active" : ""}"
data-id="${phone.id}"
type="button"
title="${favActive ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}"
aria-label="${favActive ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}"
>
<span class="heart">${favActive ? "❤️" : "🤍"}</span>
</button>

<div class="category-badge">
${getCategoryName(phone.category)}
</div>

<div class="phone-image img-loading">

<img
src="${phone.image}"
alt="${phone.name}"
width="230"
height="230"
loading="lazy"
onload="handleImageLoad(this)"
onerror="handleImageError(this)"
>

</div>

<div class="phone-brand">
${phone.brand}
</div>

<h3 class="phone-name">
${phone.name}
</h3>

<div class="phone-specs">

<span class="spec-tag">
💾 ${phone.ram}
</span>

<span class="spec-tag">
📦 ${phone.storage}
</span>

</div>

<div class="phone-price">
الفئة السعرية: ${phone.price} جنيه تقريبًا
</div>

<div class="phone-actions">

<button
class="details-btn"
data-id="${phone.id}">
عرض التفاصيل 🔍
</button>

<button
class="add-compare-btn"
data-id="${phone.id}">
⚔️ مقارنة
</button>

</div>
`;

return card;

}


/* =========================================================
   ظهور تدريجي للهواتف عند التمرير
========================================================= */

let cardObserver = null;

function disconnectCardObserver(){
if(cardObserver){
cardObserver.disconnect();
cardObserver = null;
}
}

function cleanupRevealedCard(card){
card.classList.remove("reveal-card","show");
card.style.transitionDelay="";
}

function observeCards(){

const cards=phonesGrid.querySelectorAll(".phone-card.reveal-card");

if(!cards.length) return;

if(!("IntersectionObserver" in window)){

cards.forEach(card=>{
card.classList.add("show");
setTimeout(()=>cleanupRevealedCard(card),1200);
});

return;

}

if(!cardObserver){

cardObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const card=entry.target;

card.classList.add("show");

cardObserver.unobserve(card);

let cleaned=false;

const clean=()=>{
if(cleaned) return;
cleaned=true;
cleanupRevealedCard(card);
};

card.addEventListener("transitionend",event=>{
if(event.target!==card) return;
if(event.propertyName!=="opacity") return;
clean();
});

setTimeout(clean,1400);

});

},{threshold:.12,rootMargin:"0px 0px -40px 0px"});

}

cards.forEach(card=>cardObserver.observe(card));

}


/* =========================================================
   عرض الهواتف + تحديث زرار مسح الفلاتر
========================================================= */

function displayPhones(){

phonesGrid.innerHTML="";

disconnectCardObserver();

const searchValue=searchInput.value.toLowerCase().trim();

const isFiltered = searchInput.value.trim() !== '' || activeBrand !== 'all' || activeCategory !== 'all';
clearFiltersBtn.hidden = !isFiltered;

const filteredPhones=phones.filter(phone=>{

if(activeBrand === "favorites"){
if(!isFavorite(phone.id)) return false;
}else if(activeBrand !== "all"){
if(phone.brand.toLowerCase() !== activeBrand.toLowerCase()) return false;
}

if(activeCategory !== "all" && phone.category !== activeCategory) return false;

if(searchValue){
const matchName = phone.name.toLowerCase().includes(searchValue);
const matchBrand = phone.brand.toLowerCase().includes(searchValue);
if(!matchName && !matchBrand) return false;
}

return true;

});

if(filteredPhones.length===0){

emptyState.hidden=false;

if(activeBrand === "favorites"){
emptyState.querySelector("h3").textContent = "لا توجد هواتف في المفضلة";
emptyState.querySelector("p").textContent = "اضغط على أيقونة القلب ❤️ على أي هاتف لإضافته إلى قائمة المفضلة.";
}else{
emptyState.querySelector("h3").textContent = "لا توجد نتائج";
emptyState.querySelector("p").textContent = "جرب كتابة اسم هاتف آخر أو اختر علامة تجارية مختلفة.";
}

return;

}

emptyState.hidden=true;

const grouped={};
categoryOrder.forEach(cat=>grouped[cat]=[]);

filteredPhones.forEach(phone=>{
if(grouped[phone.category]){
grouped[phone.category].push(phone);
}
});

categoryOrder.forEach(cat=>{

const list=grouped[cat];
if(!list || list.length===0) return;

const groupEl=document.createElement("div");
groupEl.className="category-group";

const titleEl=document.createElement("div");
titleEl.className="category-group-title";
titleEl.innerHTML=`<span>${getCategoryName(cat)}</span>`;

groupEl.appendChild(titleEl);

const gridEl=document.createElement("div");
gridEl.className="category-group-grid";

list.forEach((phone,index)=>{

const card=createCard(phone);

card.classList.add("reveal-card");

card.style.transitionDelay=`${Math.min(index*70,420)}ms`;

gridEl.appendChild(card);

});

groupEl.appendChild(gridEl);

phonesGrid.appendChild(groupEl);

});

addCardEvents();

observeCards();

}


/* =========================================================
   أحداث الكروت
========================================================= */

function addCardEvents(){

document.querySelectorAll(".phone-card").forEach(card=>{
card.addEventListener("click",(event)=>{
if(event.target.closest("button")) return;
navigateToPhone(Number(card.dataset.id));
});
});

document.querySelectorAll(".details-btn").forEach(button=>{
button.addEventListener("click",()=>{
navigateToPhone(Number(button.dataset.id));
});
});

document.querySelectorAll(".add-compare-btn").forEach(button=>{
button.addEventListener("click",()=>{
openCompareWithPhone(Number(button.dataset.id));
});
});

document.querySelectorAll(".favorite-btn").forEach(button=>{
button.addEventListener("click",(event)=>{
event.stopPropagation();
toggleFavorite(Number(button.dataset.id));
});
});

}


/* =========================================================
   صفحة الهاتف — Routing
========================================================= */

function navigateToPhone(id){
const phone = phones.find(p => p.id === id);
if(phone){
window.location.hash = "#phone/" + id + "/" + phoneSlug(phone.name);
}else{
window.location.hash = "#phone/" + id;
}
}

function navigateHome(){
window.location.hash = "#phones";
}

function handleRoute(){

const hash=window.location.hash;

if(hash.startsWith("#phone/")){

const parts = hash.replace("#phone/","").split("/");
const id = parseInt(parts[0],10);

const phone=phones.find(p=>p.id===id);

if(phone){
showPhonePage(phone);
return;
}

}

hidePhonePage();

if(hash && hash !== "#" && hash !== "#home"){

let target=null;

try{
target=document.querySelector(hash);
}catch(e){
target=null;
}

if(target){
requestAnimationFrame(()=>{
target.scrollIntoView({behavior:"smooth"});
});
}

}else if(hash === "#home" || hash === "" || hash === "#"){

window.scrollTo({top:0,behavior:"smooth"});

}

}

function showPhonePage(phone){

document.body.classList.add("phone-page-active");

phonePage.innerHTML=renderPhonePage(phone);

phonePage.hidden=false;

bindPhonePageEvents(phone);

updateMetaTags(phone);

window.scrollTo(0,0);

}

function hidePhonePage(){

document.body.classList.remove("phone-page-active");

phonePage.hidden=true;

phonePage.innerHTML="";

resetMetaTags();

}


/* =========================================================
   رندر صفحة الهاتف
========================================================= */

function renderPhonePage(phone){

const favActive=isFavorite(phone.id);

const similarPhones=phones.filter(p=>
p.id !== phone.id && (p.brand === phone.brand || p.category === phone.category)
).slice(0,4);

return `

<div class="phone-page-top-nav">

<button class="phone-page-back" id="phonePageBack" type="button" aria-label="رجوع">
↑
</button>

<button class="phone-page-share-btn" id="phonePageShare" type="button" aria-label="مشاركة / نسخ الرابط">
🔗
</button>

</div>

<section class="phone-page-hero">

<div class="phone-page-hero-image img-loading">
<img
src="${phone.image}"
alt="${phone.name}"
width="380"
height="480"
onload="handleImageLoad(this)"
onerror="handleImageError(this)"
>
</div>

<div class="phone-page-hero-content">

<div class="phone-page-hero-brand">${phone.brand}</div>

<h1 class="phone-page-hero-title">${phone.name}</h1>

<div class="phone-page-hero-tags">
<span class="phone-page-tag">${getCategoryName(phone.category)}</span>
<span class="phone-page-tag price">💰 ${phone.price} جنيه تقريبًا</span>
</div>

<div class="phone-page-hero-actions">

<button class="phone-page-add-fav ${favActive ? 'active' : ''}" data-id="${phone.id}" type="button">
<span class="heart">${favActive ? '❤️' : '🤍'}</span>
<span class="add-fav-text">${favActive ? 'في المفضلة' : 'أضف للمفضلة'}</span>
</button>

<button class="phone-page-add-compare" type="button">
⚔️ أضف للمقارنة
</button>

</div>

</div>

</section>

<section class="phone-page-section">

<div class="phone-page-section-header">
<span class="section-kicker">FULL SPECIFICATIONS</span>
<h2>المواصفات الكاملة</h2>
</div>

<div class="details-grid">

<div class="detail-item"><span>📱 الشاشة</span><b>${phone.screen}</b></div>
<div class="detail-item"><span>⚡ المعالج</span><b>${phone.processor}</b></div>
<div class="detail-item"><span>📸 الكاميرات</span><b>${phone.camera}</b></div>
<div class="detail-item"><span>💾 الرام</span><b>${phone.ram}</b></div>
<div class="detail-item"><span>📦 التخزين</span><b>${phone.storage}</b></div>
<div class="detail-item"><span>🔋 البطارية</span><b>${phone.battery}</b></div>
<div class="detail-item"><span>⚡ قوة الشحن السريع</span><b>${phone.charging}</b></div>
<div class="detail-item"><span>🤖 نظام التشغيل</span><b>${phone.os}</b></div>
<div class="detail-item"><span>🔄 التحديثات</span><b>${phone.updates}</b></div>
<div class="detail-item"><span>💰 الفئة السعرية</span><b>${phone.price} جنيه تقريبًا</b></div>

</div>

</section>

<section class="phone-page-section">

<div class="phone-page-section-header">
<span class="section-kicker">PROS & CONS</span>
<h2>المميزات والعيوب</h2>
</div>

<div class="pros-cons">

<div class="pros">
<h3>✅ المميزات</h3>
<ul>${phone.pros.map(item=>`<li>✓ ${item}</li>`).join("")}</ul>
</div>

<div class="cons">
<h3>❌ العيوب والملاحظات</h3>
<ul>${phone.cons.map(item=>`<li>✕ ${item}</li>`).join("")}</ul>
</div>

</div>

</section>

${similarPhones.length > 0 ? `

<section class="phone-page-section">

<div class="phone-page-section-header">
<span class="section-kicker">SIMILAR PHONES</span>
<h2>هواتف مشابهة</h2>
</div>

<div class="phone-page-similar-grid">

${similarPhones.map(p=>`

<article class="phone-page-similar-card" data-id="${p.id}">

<div class="phone-page-similar-image img-loading">
<img
src="${p.image}"
alt="${p.name}"
width="230"
height="160"
loading="lazy"
onload="handleImageLoad(this)"
onerror="handleImageError(this)"
>
</div>

<div class="phone-page-similar-brand">${p.brand}</div>

<h3 class="phone-page-similar-name">${p.name}</h3>

<div class="phone-page-similar-price">${p.price} جنيه</div>

<button class="phone-page-similar-btn" type="button">عرض التفاصيل ←</button>

</article>

`).join("")}

</div>

</section>

` : ""}

<section class="phone-page-cta">

<div class="phone-page-cta-content">
<h2>عايز تعرف مين الأفضل؟</h2>
<p>قارن ${phone.name} مع أي هاتف تاني في الدليل</p>
</div>

<button class="primary-btn" id="phonePageCompareCta" type="button">
⚔️ ابدأ المقارنة
</button>

</section>

`;

}


/* =========================================================
   ربط أحداث صفحة الهاتف
========================================================= */

function bindPhonePageEvents(phone){

const backBtn=document.getElementById("phonePageBack");
if(backBtn) backBtn.addEventListener("click",navigateHome);

const shareBtn=document.getElementById("phonePageShare");
if(shareBtn) {
shareBtn.addEventListener("click", () => {
const url = window.location.href;
const shareData = {
title: phone.name + " — Badr Phone",
text: "شاهد تفاصيل " + phone.name + " على دليل Badr Phone",
url: url
};

if (navigator.share) {
navigator.share(shareData).catch((err) => {
if (err.name !== 'AbortError') {
copyLinkFallback(url);
}
});
} else {
copyLinkFallback(url);
}
});
}

function copyLinkFallback(url) {
copyToClipboard(url)
.then(() => showToast("✅ تم نسخ رابط الهاتف بنجاح", "success"))
.catch(() => showToast("❌ تعذر نسخ الرابط", "error"));
}

phonePage.querySelectorAll(`.phone-page-add-fav[data-id="${phone.id}"]`).forEach(btn=>{
btn.addEventListener("click",()=>{
toggleFavorite(phone.id);
});
});

phonePage.querySelectorAll(".phone-page-add-compare").forEach(btn=>{
btn.addEventListener("click",()=>{
openCompareFromPhone(phone.id);
});
});

const ctaBtn=document.getElementById("phonePageCompareCta");
if(ctaBtn) ctaBtn.addEventListener("click",()=>openCompareFromPhone(phone.id));

phonePage.querySelectorAll(".phone-page-similar-card").forEach(card=>{
card.addEventListener("click",()=>{
navigateToPhone(Number(card.dataset.id));
});
});

}


/* =========================================================
   فتح المقارنة من صفحة الهاتف
========================================================= */

function openCompareFromPhone(id){

openCompare();

compareA.value=String(id);

const phone=phones.find(p=>p.id===id);

if(!phone) return;

const similar=phones.find(p=>
p.id !== id && (p.brand === phone.brand || p.category === phone.category)
) || phones.find(p=>p.id !== id);

if(similar) compareB.value=String(similar.id);

updateCompareCount();

}


/* =========================================================
   الفلاتر
========================================================= */

filters.forEach(button=>{
button.addEventListener("click",()=>{
filters.forEach(btn=>btn.classList.remove("active"));
button.classList.add("active");
activeBrand=button.dataset.brand;
displayPhones();
});
});

categories.forEach(button=>{
button.addEventListener("click",()=>{
categories.forEach(btn=>btn.classList.remove("active"));
button.classList.add("active");
activeCategory=button.dataset.category;
displayPhones();
});
});


/* =========================================================
   مسح الفلاتر
========================================================= */

clearFiltersBtn.addEventListener("click", () => {
searchInput.value = "";
activeBrand = "all";
activeCategory = "all";

filters.forEach(btn => btn.classList.remove("active"));
filters[0].classList.add("active");

categories.forEach(btn => btn.classList.remove("active"));
categories[0].classList.add("active");

displayPhones();
showToast("✅ تم مسح الفلاتر");
});


/* =========================================================
   البحث
========================================================= */

searchInput.addEventListener("input",displayPhones);

clearSearch.addEventListener("click",()=>{
searchInput.value="";
displayPhones();
searchInput.focus();
});


/* =========================================================
   إغلاق المودالات
========================================================= */

function closeModal(modal){
if(modal) modal.classList.remove("active");

if(!compareModal.classList.contains("active")){
document.body.style.overflow="";
}
}

document.querySelectorAll("[data-close]").forEach(button=>{
button.addEventListener("click",()=>{
const modal=document.getElementById(button.dataset.close);
closeModal(modal);
});
});

document.addEventListener("keydown",event=>{
if(event.key==="Escape"){
closeModal(compareModal);
}
});


/* =========================================================
   فتح المقارنة
========================================================= */

function openCompare(){
compareModal.classList.add("active");
document.body.style.overflow="hidden";
updateCompareCount();
}

document.getElementById("openCompare").addEventListener("click",openCompare);
document.getElementById("heroCompare").addEventListener("click",openCompare);
document.getElementById("featuredCompare").addEventListener("click",openCompare);


function openCompareWithPhone(id){
openCompare();
compareA.value=String(id);
const secondPhone=phones.find(phone=>phone.id!==id);
if(secondPhone) compareB.value=String(secondPhone.id);
updateCompareCount();
}


function updateCompareCount(){
const a=compareA.value;
const b=compareB.value;
let count=0;
if(a)count++;
if(b)count++;
compareCount.textContent=count;
}


function populateCompareSelects(){

compareA.innerHTML=`
<option value="">اختر الهاتف الأول</option>
`;

compareB.innerHTML=`
<option value="">اختر الهاتف الثاني</option>
`;

phones.forEach(phone=>{

const optionA=document.createElement("option");
optionA.value=phone.id;
optionA.textContent=phone.name;
compareA.appendChild(optionA);

const optionB=document.createElement("option");
optionB.value=phone.id;
optionB.textContent=phone.name;
compareB.appendChild(optionB);

});

}

compareA.addEventListener("change",()=>{
updateCompareCount();
comparisonResult.innerHTML="";
});

compareB.addEventListener("change",()=>{
updateCompareCount();
comparisonResult.innerHTML="";
});


/* =========================================================
   تحويل المواصفات لأرقام
========================================================= */

function getRamNumber(ram){
const numbers=ram.match(/\d+/g);
if(!numbers)return 0;
return Math.max(...numbers.map(Number));
}

function getStorageNumber(storage){
const values=storage.match(/\d+/g);
if(!values)return 0;
return Math.max(...values.map(Number));
}

function getBatteryNumber(battery){
const value=battery.match(/\d+/);
if(!value)return 0;
return Number(value[0]);
}

function getChargingNumber(charging){
if(!charging)return 0;
const value=charging.match(/\d+/);
if(!value)return 0;
return Number(value[0]);
}

function getCameraNumber(camera){
const values=camera.match(/\d+/g);
if(!values)return 0;
return Math.max(...values.map(Number));
}

function getScreenNumber(screen){
if(!screen)return 0;
const resolution=screen.match(/(\d+)\s*[×xX]\s*(\d+)/);
if(!resolution)return 0;
const width=Number(resolution[1]);
const height=Number(resolution[2]);
if(!width || !height)return 0;
return width*height;
}

function getOSNumber(os){
if(!os)return 0;
const match=os.match(/Android\s*(\d+(?:\.\d+)?)/i);
if(!match)return 0;
return Number(match[1]);
}


const processorRanks={

"Qualcomm Snapdragon 6 Gen 3":10,
"Samsung Exynos 1480":20,
"MediaTek Dimensity 7300+":30,
"MediaTek Dimensity 7360 Turbo":32,
"MediaTek Dimensity 7400 ULT":34,
"Samsung Exynos 1680":35,
"Qualcomm Snapdragon 7 Gen 4":40,
"MediaTek Dimensity 8400 ULT":50,
"MediaTek Dimensity 8500 Ultra":55,
"Samsung Exynos 2500":60,
"Qualcomm Snapdragon 8 Gen 5":70,
"Qualcomm Snapdragon 8 Elite":80,
"MediaTek Dimensity 9500":90,
"MediaTek Dimensity 9600M":92,
"Snapdragon 8 Elite Gen 5":100,
"MediaTek Dimensity 9600 Pro":105

};

function getProcessorRank(processor){
if(!processor)return 0;
const processorName=Object.keys(processorRanks).find(name=>
processor.includes(name)
);
if(!processorName)return 0;
return processorRanks[processorName];
}

function getAndroidUpdatesNumber(updates){
if(!updates)return 0;
const combinedMatch=updates.match(
/(\d+)\s*سن(?:ة|وات)?\s*تحديثات?\s*Android\s*والأمان/i
);
if(combinedMatch) return Number(combinedMatch[1]);
const androidMatch=updates.match(
/(\d+)\s*سن(?:ة|وات)?\s*Android/i
);
if(androidMatch) return Number(androidMatch[1]);
const twoYearsMatch=updates.match(
/سنتان\s*(?:تحديثات?\s*)?Android/i
);
if(twoYearsMatch) return 2;
return 0;
}

function getSecurityUpdatesNumber(updates){
if(!updates)return 0;
const securityMatch=updates.match(
/(\d+)\s*سن(?:ة|وات)?\s*أمان/i
);
if(securityMatch) return Number(securityMatch[1]);
const combinedMatch=updates.match(
/(\d+)\s*سن(?:ة|وات)?\s*تحديثات?\s*Android\s*والأمان/i
);
if(combinedMatch) return Number(combinedMatch[1]);
const twoYearsMatch=updates.match(
/سنتان\s*(?:تحديثات?\s*)?Android\s*والأمان/i
);
if(twoYearsMatch) return 2;
return 0;
}


function compareValues(valueA,valueB){
if(valueA===0 || valueB===0) return["",""];
if(valueA>valueB) return["winner","loser"];
if(valueB>valueA) return["loser","winner"];
return["",""];
}


function createComparisonRow(title,valueA,valueB,scoreA=null,scoreB=null){

let classA="";
let classB="";

if(scoreA!==null && scoreB!==null){
const result=compareValues(scoreA,scoreB);
classA=result[0];
classB=result[1];
}

let iconA="";
let iconB="";

if(classA==="winner")iconA=" ✅";
if(classA==="loser")iconA=" ❌";
if(classB==="winner")iconB=" ✅";
if(classB==="loser")iconB=" ❌";

return `
<tr>
<th>${title}</th>
<td class="${classA}">${valueA}${iconA}</td>
<td class="${classB}">${valueB}${iconB}</td>
</tr>
`;

}


function getScoreCategories(phoneA, phoneB){
return [
{name: "⚡ المعالج", valueA: getProcessorRank(phoneA.processor), valueB: getProcessorRank(phoneB.processor)},
{name: "💾 الرام", valueA: getRamNumber(phoneA.ram), valueB: getRamNumber(phoneB.ram)},
{name: "📦 التخزين", valueA: getStorageNumber(phoneA.storage), valueB: getStorageNumber(phoneB.storage)},
{name: "🔋 البطارية", valueA: getBatteryNumber(phoneA.battery), valueB: getBatteryNumber(phoneB.battery)},
{name: "🔌 الشحن السريع", valueA: getChargingNumber(phoneA.charging), valueB: getChargingNumber(phoneB.charging)},
{name: "📱 الشاشة", valueA: getScreenNumber(phoneA.screen), valueB: getScreenNumber(phoneB.screen)},
{name: "🔄 التحديثات (Android + أمان)", valueA: getAndroidUpdatesNumber(phoneA.updates) + getSecurityUpdatesNumber(phoneA.updates), valueB: getAndroidUpdatesNumber(phoneB.updates) + getSecurityUpdatesNumber(phoneB.updates)}
];
}


function renderScoreSection(categories, phoneA, phoneB){

let scoreA = 0;
let scoreB = 0;

const shortName = (name) => {
const parts = name.split(" ");
return parts.slice(-2).join(" ");
};

const shortA = shortName(phoneA.name);
const shortB = shortName(phoneB.name);

const rows = categories.map(cat => {

const valueA = cat.valueA;
const valueB = cat.valueB;
const total = valueA + valueB;

const percentA = total > 0 ? (valueA / total) * 100 : 50;
const percentB = total > 0 ? (valueB / total) * 100 : 50;

let tag = "";

if(valueA === 0 && valueB === 0){
tag = '<span class="score-tag tie">لا تتوفر بيانات</span>';
}else if(valueA === valueB){
tag = '<span class="score-tag tie">🤝 تعادل</span>';
}else if(valueA > valueB){
scoreA++;
tag = `<span class="score-tag win">${shortA} ✓</span>`;
}else{
scoreB++;
tag = `<span class="score-tag win">${shortB} ✓</span>`;
}

return `
<div class="score-row">
<div class="score-header">
<span class="score-name">${cat.name}</span>
${tag}
</div>
<div class="score-bar">
<div class="bar-a" style="width:${percentA}%"></div>
<div class="bar-b" style="width:${percentB}%"></div>
</div>
</div>
`;

}).join("");

const totalPoints = scoreA + scoreB || 1;
const percentWinA = (scoreA / totalPoints) * 100;
const percentWinB = (scoreB / totalPoints) * 100;

let bannerClass = "tie";
let title = "تعادل تام! 🤝";

if(scoreA > scoreB){
bannerClass = "winner-a";
title = `الفائز: ${phoneA.name} 🏆`;
}else if(scoreB > scoreA){
bannerClass = "winner-b";
title = `الفائز: ${phoneB.name} 🏆`;
}

return `
<div class="winner-banner ${bannerClass}">
<div class="trophy">🏆</div>
<h3>${title}</h3>
<p>
النتيجة النهائية:
<strong>${phoneA.name}</strong>
${scoreA} — ${scoreB}
<strong>${phoneB.name}</strong>
</p>
<div class="total-score-bar">
<div class="total-a" style="width:${percentWinA}%">${scoreA}</div>
<div class="total-b" style="width:${percentWinB}%">${scoreB}</div>
</div>
</div>

<div class="score-bars">
<div class="score-bars-title">
<span>📊 تفصيل النقاط حسب الفئة</span>
<small>${categories.length} فئات • نقطة لكل فئة</small>
</div>
${rows}
</div>
`;

}


function showToast(message, type = ""){

const toast = document.getElementById("toast");

if(!toast) return;

toast.textContent = message;
toast.className = "";
if(type) toast.classList.add(type);
toast.classList.add("show");

clearTimeout(toast._timer);
toast._timer = setTimeout(() => {
toast.classList.remove("show");
}, 2800);

}


function copyToClipboard(text){

if(navigator.clipboard && window.isSecureContext){
return navigator.clipboard.writeText(text);
}

return new Promise((resolve, reject) => {
const textarea = document.createElement("textarea");
textarea.value = text;
textarea.style.position = "fixed";
textarea.style.top = "-1000px";
textarea.style.opacity = "0";
document.body.appendChild(textarea);
textarea.focus();
textarea.select();
try{
document.execCommand("copy");
resolve();
}catch(e){
reject(e);
}
document.body.removeChild(textarea);
});

}


function shareComparison(){

const a = compareA.value;
const b = compareB.value;

if(!a || !b){
showToast("⚠️ اختر هاتفين أولاً قبل المشاركة", "error");
return;
}

const baseUrl = window.location.origin + window.location.pathname;
const shareUrl = `${baseUrl}?a=${a}&b=${b}`;

copyToClipboard(shareUrl)
.then(() => showToast("✅ تم نسخ رابط المقارنة بنجاح!", "success"))
.catch(() => {
showToast("❌ تعذر النسخ — انسخ الرابط يدوياً: " + shareUrl, "error");
});

}


document.getElementById("runCompare").addEventListener("click",()=>{

const phoneA=phones.find(phone=>phone.id===Number(compareA.value));
const phoneB=phones.find(phone=>phone.id===Number(compareB.value));

if(!phoneA || !phoneB){
comparisonResult.innerHTML=`
<p style="text-align:center;color:#ff6675;padding:20px;">
من فضلك اختر هاتفين للمقارنة.
</p>
`;
updateCompareCount();
return;
}

if(phoneA.id===phoneB.id){
comparisonResult.innerHTML=`
<p style="text-align:center;color:#ff6675;padding:20px;">
اختر هاتفين مختلفين.
</p>
`;
updateCompareCount();
return;
}

const screenA=getScreenNumber(phoneA.screen);
const screenB=getScreenNumber(phoneB.screen);
const ramA=getRamNumber(phoneA.ram);
const ramB=getRamNumber(phoneB.ram);
const storageA=getStorageNumber(phoneA.storage);
const storageB=getStorageNumber(phoneB.storage);
const batteryA=getBatteryNumber(phoneA.battery);
const batteryB=getBatteryNumber(phoneB.battery);
const chargingA=getChargingNumber(phoneA.charging);
const chargingB=getChargingNumber(phoneB.charging);
const cameraA=getCameraNumber(phoneA.camera);
const cameraB=getCameraNumber(phoneB.camera);
const processorA=getProcessorRank(phoneA.processor);
const processorB=getProcessorRank(phoneB.processor);
const osA=getOSNumber(phoneA.os);
const osB=getOSNumber(phoneB.os);
const androidUpdatesA=getAndroidUpdatesNumber(phoneA.updates);
const androidUpdatesB=getAndroidUpdatesNumber(phoneB.updates);
const securityUpdatesA=getSecurityUpdatesNumber(phoneA.updates);
const securityUpdatesB=getSecurityUpdatesNumber(phoneB.updates);

const categories = getScoreCategories(phoneA, phoneB);
const scoreSectionHTML = renderScoreSection(categories, phoneA, phoneB);

comparisonResult.innerHTML=`

${scoreSectionHTML}

<div class="share-btn-row">
<button class="share-btn" id="shareComparisonBtn" type="button">
🔗 مشاركة المقارنة
</button>
</div>

<div style="overflow-x:auto;">

<table class="comparison-table">

<thead>
<tr>
<th>المواصفات</th>
<th>${phoneA.name}</th>
<th>${phoneB.name}</th>
</tr>
</thead>

<tbody>

${createComparisonRow("الفئة السعرية",phoneA.price,phoneB.price)}

${createComparisonRow("الشاشة",phoneA.screen,phoneB.screen,screenA,screenB)}

${createComparisonRow("المعالج",phoneA.processor,phoneB.processor,processorA,processorB)}

${createComparisonRow("الكاميرات",phoneA.camera,phoneB.camera,cameraA,cameraB)}

${createComparisonRow("الرام",phoneA.ram,phoneB.ram,ramA,ramB)}

${createComparisonRow("التخزين",phoneA.storage,phoneB.storage,storageA,storageB)}

${createComparisonRow("البطارية",phoneA.battery,phoneB.battery,batteryA,batteryB)}

${createComparisonRow("قوة الشحن السريع",phoneA.charging,phoneB.charging,chargingA,chargingB)}

${createComparisonRow("نظام التشغيل",phoneA.os,phoneB.os,osA,osB)}

${createComparisonRow("تحديثات Android",phoneA.updates,phoneB.updates,androidUpdatesA,androidUpdatesB)}

${createComparisonRow("تحديثات الأمان",phoneA.updates,phoneB.updates,securityUpdatesA,securityUpdatesB)}

</tbody>

</table>

</div>
`;

const shareBtn = document.getElementById("shareComparisonBtn");
if(shareBtn){
shareBtn.addEventListener("click", shareComparison);
}

updateCompareCount();

});


function handleURLComparison(){

try{

const params = new URLSearchParams(window.location.search);
const a = params.get("a");
const b = params.get("b");

if(!a || !b) return;

const phoneA = phones.find(p => p.id === Number(a));
const phoneB = phones.find(p => p.id === Number(b));

if(!phoneA || !phoneB) return;

compareA.value = String(phoneA.id);
compareB.value = String(phoneB.id);

openCompare();

setTimeout(()=>{

const runBtn = document.getElementById("runCompare");
if(runBtn) runBtn.click();

setTimeout(()=>{
comparisonResult.scrollIntoView({behavior:"smooth", block:"start"});
}, 150);

}, 100);

}catch(e){
}

}


function updateCounters(){

let currentPhoneCount=0;

const counterInterval=setInterval(()=>{
if(currentPhoneCount>=phones.length){
clearInterval(counterInterval);
return;
}
currentPhoneCount++;
phoneCounter.textContent=currentPhoneCount;
},40);

const brands=[
...new Set(
phones.map(phone=>phone.brand)
)
];

brandCounter.textContent=brands.length;

}


window.addEventListener("scroll",()=>{
if(window.scrollY>500){
scrollTop.classList.add("show");
}else{
scrollTop.classList.remove("show");
}
});

scrollTop.addEventListener("click",()=>{
window.scrollTo({top:0,behavior:"smooth"});
});


const revealElements=document.querySelectorAll(".reveal");

if("IntersectionObserver" in window){

const observer=new IntersectionObserver(
entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},
{threshold:.15}
);

revealElements.forEach(element=>{
observer.observe(element);
});

}else{

revealElements.forEach(element=>{
element.classList.add("show");
});

}


window.addEventListener("hashchange",handleRoute);

loadFavorites();

populateCompareSelects();

displayPhones();

updateCounters();

updateCompareCount();

updateFavCount();

handleRoute();

handleURLComparison();

</script>