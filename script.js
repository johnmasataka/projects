// Language content object
const languageContent = {
    en: {
        // Navigation
        home: "Home",
        // news: "News",
        work: "Work",
        about: "About",
        contact: "Contact",
        map: "Map",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        // Main content
        concept: "John Xianfeng Jiang",
        conceptDetail: "A Project Manager, An Architect, An AI Researcher, and A Backpacker.",
        profile: "PROFILE",
        project: "SELECTED PROJECTS",
        // shareProject: "Archtalk",
        // shareProjectDetail: "The project started with 'SHAREyaraicho' in Yaraicho, a residential area in Kagurazaka. Our motivation is revitalizing the invisible community in Tokyo by making a series of share houses. In our SHARE projects, every share house has very unique common space besides living room, shower room, toilet, laundry and working space.",
        // About section
        aboutTitle: "John Xianfeng Jiang",
        aboutContent: "John (君安), also known as Masataka (賢峰), is a New York / Tokyo-based architect, AI researcher, and project manager. He has over eight years of professional experience at <a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">Kengo Kuma & Associates (KKAA)</a>, where he has led teams on a wide range of projects, including luxury towers, resorts, private residences, and high-end furniture. His unique career bridges the confluence of management, technology, and design. He also worked for the <a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">Center for Spatial Research (CSR)</a> at Columbia University, and is the member of the <a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">Architectural Institute of Japan (AIJ)</a>. John holds master's degree in computation in <a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">Columbia University GSAPP</a> and architecture in <a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">Hokkaido University</a>.",
                // Resume section
        resume: "Awards<br><br>2021<br>Architectural Design Competition for European Film Center CAMERIMAGE Building (Toruń, Poland)<br>2020<br>Lighting Category Winner of Restaurant & Bar Design Awards (London, United Kingdom)<br>2017<br>Architectural Design Competition for New Taiwan Tower (Taichung)<br><br><br>Professionships<br><br>2025 -<br>Co-founder, Spatial Intelligence Association (New York, USA)<br>2024 - 2025<br>Researcher, Center for Spatial Research (CSR) at Columbia University (New York, USA)<br>2017 -<br>Project Manager, Kengo Kuma & Associates (Tokyo, Japan and Los Angeles, USA)<br>2017 -<br>Architectural Institute of Japan (AIJ)<br><br><br>Teaching<br><br>2025<br>The Hague University of Applied Sciences (The Hague, Netherlands)<br>2024 - 2025<br>Columbia University GSAPP (New York, USA)<br>2021<br>Shandong University of Art & Design (Jinan, China)<br><br><br>Exhibitions and Publications<br><br>2025<br>Autodesk University 2025 (Nashville, USA)<br>2025<br>JAPANISM (New York, USA)<br>2025<br>LLMs-Driven Full Lifecycle Architectural Design, ASCE International Conference on Computing in Civil Engineering (New Orleans, USA)<br>2025<br>SIA Annual Exhibition 2025 (New York, USA)<br>2025<br>BULT EUR 2025 (The Hague, Netherlands)<br>2025<br>AI in AEC (Helsinki, Finland)<br>2025<br>LingoBIM: From Words to Design, URBAN Magazine (New York, USA)<br>2022<br>Triennale di Milano (Milan, Italy)<br>2021<br>World House Projects 2021, GA HOUSE 175 and GA Gallery (Tokyo, Japan)<br>2017<br>National Academic Conference of the Architectural Institute of Japan (Hiroshima, Japan)",
        // Footer
        copyright: "Copyright © - All Rights Reserved."
    },
    ja: {
        // Navigation
        home: "ホーム",
        // news: "ニュース",
        work: "プロジェクト",
        about: "概要",
        contact: "お問い合わせ",
        map: "地図",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        // Main content
        concept: "ジョン・賢峰・蔣",
        conceptDetail: "プロジェクトマネージャー、建築家、AI研究者、バックパッカー",
        profile: "プロフィール",
        project: "プロジェクト",
        // shareProject: "SHAREプロジェクトとは",
        // shareProjectDetail: "神楽坂の住宅地、矢来町にある「SHAREyaraicho」からはじまったプロジェクト。シェアハウスを通して、東京の見えなくなってしまったコミュニティを再び可視化させたい思いから始動。どの家も、プライベートな部屋のほかに、リビングやシャワー、トイレ、ランドラリー、ワーキングスペースなどの様々なコモンスペースを持つのが特徴。",
        // About section
        aboutTitle: "ジョン・賢峰・蔣",
        aboutContent: "蔣（ジャン）賢峰（マサタカ）はニューヨークと東京を拠点とする建築家、AI研究者、プロジェクトマネージャー。<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建築都市設計事務所</a> (KKAA) にてマネージャーを務め、高層集合住宅、リゾート、個人住宅、高級家具など、幅広い分野のプロジェクトに携わる。キャリアの中心にあるのは、マネジメント・テクノロジー・デザインの三領域をまたぐ横断的な実践。また、コロンビア大学の<a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">空間研究センター（Center for Spatial Research）</a>に所属し、<a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">日本建築学会</a>正会員。蔣は<a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">コロンビア大学</a>でコンピューティション学科卒業、<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大学</a>で建築学科修了。",
        // Resume section
        resume: "受賞歴<br><br>2021年<br>欧州映画センター CAMERIMAGE 建築設計コンペティション（ポーランド・トルン）<br>2020年<br>Restaurant & Bar Design Awards 照明部門優勝（イギリス・ロンドン）<br>2017年<br>新台湾タワー建築設計コンペティション（台中）<br><br><br>職歴<br><br>2025年 -<br>空間知能協会（SIA）共同創設者（アメリカ・ニューヨーク）<br>2024年 - 2025年<br>コロンビア大学空間研究センター（CSR）研究員（アメリカ・ニューヨーク）<br>2017年 -<br>隈研吾建築都市設計事務所 プロジェクトマネージャー（日本・東京、アメリカ・ロサンゼルス）<br>2017年 -<br>日本建築学会（AIJ）正会員<br><br><br>教育活動<br><br>2025年<br>ハーグ応用科学大学（オランダ・ハーグ）<br>2024年 - 2025年<br>コロンビア大学（アメリカ・ニューヨーク）<br>2021年<br>山東芸術設計学院（中国・済南）<br><br><br>展示・出版<br><br>2025年<br>Autodesk University 2025（アメリカ・ナッシュビル）<br>2025年<br>JAPANISM（アメリカ・ニューヨーク）<br>2025年<br>LLMsを活用した建築設計のライフサイクル全体の自動化、ASCE International Conference on Computing in Civil Engineering（アメリカ・ニューオーリンズ）<br>2025年<br>SIA年次展示会2025（アメリカ・ニューヨーク）<br>2025年<br>BULT EUR 2025（オランダ・ハーグ）<br>2025年<br>AI in AEC（フィンランド・ヘルシンキ）<br>2025年<br>LingoBIM：言葉からデザインへ、URBAN Magazine（アメリカ・ニューヨーク）<br>2022年<br>ミラノ・トリエンナーレ（イタリア・ミラノ）<br>2021年<br>World House Projects 2021、GA HOUSE 175・GAギャラリー（日本・東京）<br>2017年<br>日本建築学会全国大会（日本・広島）",
        // Footer
        copyright: "Copyright © - All Rights Reserved."
    },
    // Spanish language content
    es: {
        // Navigation
        home: "Inicio",
        // news: "Noticias",
        work: "Proyectos",
        about: "Acerca de",
        contact: "Contacto",
        map: "Mapa",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        // Main content
        concept: "John Xianfeng Jiang",
        conceptDetail: "Arquitecto, investigador de IA, gerente de proyectos, viajero",
        profile: "PERFIL",
        project: "PROYECTOS",
        // shareProject: "¿Qué es el Proyecto SHARE?",
        // shareProjectDetail: "El proyecto comenzó con 'SHAREyaraicho' en Yaraicho, un área residencial en Kagurazaka. Nuestra motivación es revitalizar la comunidad invisible en Tokio mediante la creación de una serie de casas compartidas. En nuestros proyectos SHARE, cada casa compartida tiene un espacio común único además de sala de estar, ducha, baño, lavandería y espacio de trabajo.",
        // // About section
        aboutTitle: "John Xianfeng Jiang",
        aboutContent: "John es un arquitecto, investigador de IA y gerente de proyectos con sede en Nueva York/Tokio. Tiene más de ocho años de experiencia profesional en <a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">Kengo Kuma & Associates (KKAA)</a>, donde ha liderado equipos en una amplia gama de proyectos, incluyendo torres de lujo, resorts, residencias privadas y muebles de alta gama. Su carrera única une la gestión, la tecnología y el diseño. También trabajó para el <a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">Center for Spatial Research (CSR)</a> en la Universidad de Columbia y es miembro del <a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">Architectural Institute of Japan (AIJ)</a>. John tiene una maestría en computación en <a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">Columbia University</a> y en arquitectura en <a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">Hokkaido University</a>.",
        resume: "Awards<br><br>2021<br>Architectural Design Competition for European Film Center CAMERIMAGE Building (Toruń, Poland)<br>2020<br>Lighting Category Winner of Restaurant & Bar Design Awards (London, United Kingdom)<br>2017<br>Architectural Design Competition for New Taiwan Tower (Taichung)<br><br><br>Professionships<br><br>2025 -<br>Co-founder, Spatial Intelligence Association (New York, USA)<br>2024 - 2025<br>Researcher, Center for Spatial Research (CSR) at Columbia University (New York, USA)<br>2017 -<br>Project Manager, Kengo Kuma & Associates (Tokyo, Japan and Los Angeles, USA)<br>2017 -<br>Architectural Institute of Japan (AIJ)<br><br><br>Teaching<br><br>2025<br>The Hague University of Applied Sciences (The Hague, Netherlands)<br>2024 - 2025<br>Columbia University GSAPP (New York, USA)<br>2021<br>Shandong University of Art & Design (Jinan, China)<br><br><br>Exhibitions and Publications<br><br>2025<br>Autodesk University 2025 (Nashville, USA)<br>2025<br>JAPANISM (New York, USA)<br>2025<br>LLMs-Driven Full Lifecycle Architectural Design, ASCE International Conference on Computing in Civil Engineering (New Orleans, USA)<br>2025<br>SIA Annual Exhibition 2025 (New York, USA)<br>2025<br>BULT EUR 2025 (The Hague, Netherlands)<br>2025<br>AI in AEC (Helsinki, Finland)<br>2025<br>LingoBIM: From Words to Design, URBAN Magazine (New York, USA)<br>2022<br>Triennale di Milano (Milan, Italy)<br>2021<br>World House Projects 2021, GA HOUSE 175 and GA Gallery (Tokyo, Japan)<br>2017<br>National Academic Conference of the Architectural Institute of Japan (Hiroshima, Japan)",
        // Footer
        copyright: "Copyright © - Todos los derechos reservados."
    },
    // Korean language content
    ko: {
        // Navigation
        home: "홈",
        // news: "뉴스",
        work: "프로젝트",
        about: "소개",
        contact: "연락처",
        map: "지도",
        instagram: "Instagram",
        linkedin: "LinkedIn",
        // Main content
        concept: "존 마사타카 시안펑 장",
        conceptDetail: "프로젝트 매니저, 건축가, AI 연구원, 배낭 여행자",
        profile: "프로필",
        project: "프로젝트",
        // shareProject: "SHARE 프로젝트란?",
        // shareProjectDetail: "이 프로젝트는 카구라자카의 주거 지역인 야라이초에 있는 'SHAREyaraicho'에서 시작되었습니다. 우리의 동기는 쉐어하우스 시리즈를 만들어 도쿄의 보이지 않는 커뮤니티를 활성화하는 것입니다. SHARE 프로젝트에서는 모든 쉐어하우스가 거실, 샤워실, 화장실, 세탁실 및 작업 공간 외에도 매우 독특한 공용 공간을 가지고 있습니다.",
        // // About section
        aboutTitle: "존 마사타카 시안펑 장",
        aboutContent: "존은 뉴욕/도쿄를 기반으로 하는 건축가, AI 연구원, 프로젝트 매니저입니다. 그는 <a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">건고쿠마 앤드 어소시에이츠(KKAA)</a>에서 8년 이상의 전문 경력을 가지고 있으며, 럭셔리 타워, 리조트, 개인 주택, 하이엔드 가구 등 다양한 프로젝트에서 팀을 이끌었습니다. 그의 독특한 경력은 경영, 기술, 디자인의 융합을 연결합니다. 그는 또한 컬럼비아 대학의 <a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">공간 연구 센터(CSR)</a>에서 일했으며 <a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">일본 건축 학회(AIJ)</a>의 회원입니다. 존은 <a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">컬럼비아 대학 GSAPP</a>에서 계산학 석사, <a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">홋카이도 대학</a>에서 건축학 석사를 취득했습니다.",
        resume: "Awards<br><br>2021<br>Architectural Design Competition for European Film Center CAMERIMAGE Building (Toruń, Poland)<br>2020<br>Lighting Category Winner of Restaurant & Bar Design Awards (London, United Kingdom)<br>2017<br>Architectural Design Competition for New Taiwan Tower (Taichung)<br><br><br>Professionships<br><br>2025 -<br>Co-founder, Spatial Intelligence Association (New York, USA)<br>2024 - 2025<br>Researcher, Center for Spatial Research (CSR) at Columbia University (New York, USA)<br>2017 -<br>Project Manager, Kengo Kuma & Associates (Tokyo, Japan and Los Angeles, USA)<br>2017 -<br>Architectural Institute of Japan (AIJ)<br><br><br>Teaching<br><br>2025<br>The Hague University of Applied Sciences (The Hague, Netherlands)<br>2024 - 2025<br>Columbia University GSAPP (New York, USA)<br>2021<br>Shandong University of Art & Design (Jinan, China)<br><br><br>Exhibitions and Publications<br><br>2025<br>Autodesk University 2025 (Nashville, USA)<br>2025<br>JAPANISM (New York, USA)<br>2025<br>LLMs-Driven Full Lifecycle Architectural Design, ASCE International Conference on Computing in Civil Engineering (New Orleans, USA)<br>2025<br>SIA Annual Exhibition 2025 (New York, USA)<br>2025<br>BULT EUR 2025 (The Hague, Netherlands)<br>2025<br>AI in AEC (Helsinki, Finland)<br>2025<br>LingoBIM: From Words to Design, URBAN Magazine (New York, USA)<br>2022<br>Triennale di Milano (Milan, Italy)<br>2021<br>World House Projects 2021, GA HOUSE 175 and GA Gallery (Tokyo, Japan)<br>2017<br>National Academic Conference of the Architectural Institute of Japan (Hiroshima, Japan)",
        // Footer
        copyright: "Copyright © - All Rights Reserved."
    },
    // Simplified Chinese language content
    "zh-CN": {
        // Navigation
        home: "首页",
        // news: "新闻",
        work: "项目",
        about: "关于",
        contact: "联系",
        map: "地图",
        instagram: "INS",
        linkedin: "领英",
        // Main content
        concept: "蒋贤峰",
        conceptDetail: "项目经理 | 建筑师 | AI研究员 | 背包客",
        profile: "简介",
        project: "精选作品",
        // shareProject: "什么是SHARE项目",
        // shareProjectDetail: "该项目始于神乐坂住宅区矢来町的'SHAREyaraicho'。我们的动机是通过创建一系列共享住宅来振兴东京看不见的社区。在我们的SHARE项目中，每个共享住宅除了客厅、淋浴间、厕所、洗衣房和工作空间外，还有非常独特的公共空间。",
        // About section
        aboutTitle: "蒋贤峰",
        aboutContent: "蒋贤峰 (Xianfeng)，字君安 (John)，是一位常驻纽约和东京的建筑师、AI研究员和项目经理。他在<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建筑都市设计事务所（KKAA）</a>拥有超过八年的专业经验，曾领导团队完成各种项目，包括豪华塔楼、度假村、私人住宅和高端家具。他的职业生涯专注于管理、技术和设计。他还在<a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥伦比亚大学空间研究中心（CSR）</a>工作，并且是<a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">日本建筑学会（AIJ）</a>的成员。蒋贤峰在<a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥伦比亚大学</a>获得计算学硕士学位，在<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大学</a>获得建筑学硕士学位。",
        // Resume section for Simplified Chinese
        resume: "获奖经历<br><br>2021年<br>欧洲电影中心 CAMERIMAGE 建筑设计竞赛（波兰·托伦）<br>2020年<br>Restaurant & Bar Design Awards 照明类别冠军（英国·伦敦）<br>2017年<br>新台湾塔建筑设计竞赛（台中）<br><br><br>工作经历<br><br>2025年 -<br>空间智能协会（SIA）联合创始人（美国·纽约）<br>2024年 - 2025年<br>哥伦比亚大学空间研究中心（CSR）研究员（美国·纽约）<br>2017年 -<br>隈研吾建筑都市设计事务所 项目经理（日本·东京，美国·洛杉矶）<br>2017年 -<br>日本建筑学会（AIJ）正式会员<br><br><br>任教经历<br><br>2025年<br>海牙应用科技大学（荷兰·海牙）<br>2024年 - 2025年<br>哥伦比亚大学（美国·纽约）<br>2021年<br>山东艺术设计学院（中国·济南）<br><br><br>展览与出版<br><br>2025年<br>Autodesk University 2025（美国·纳什维尔）<br>2025年<br>JAPANISM（美国·纽约）<br>2025年<br>利用LLMs实现建筑设计全生命周期自动化，ASCE International Conference on Computing in Civil Engineering（美国·新奥尔良）<br>2025年<br>SIA年度展览2025（美国·纽约）<br>2025年<br>BULT EUR 2025（荷兰·海牙）<br>2025年<br>AI in AEC（芬兰·赫尔辛基）<br>2025年<br>LingoBIM：从语言到设计，URBAN Magazine（美国·纽约）<br>2022年<br>米兰三年展（意大利·米兰）<br>2021年<br>World House Projects 2021，GA HOUSE 175·GA画廊（日本·东京）<br>2017年<br>日本建筑学会全国大会（日本·广岛）",
        // Footer
        copyright: "版权所有 © - 保留所有权利。"
    },
    // Traditional Chinese language content
    "zh-TW": {
        // Navigation
        home: "首頁",
        // news: "新聞",
        work: "作品",
        about: "關於",
        contact: "聯繫",
        map: "地圖",
        instagram: "IG",
        linkedin: "LinkedIn",
        // Main content
        concept: "蔣賢峰",
        conceptDetail: "專案經理 | 建築師 | AI研究員 | 背包客",
        profile: "簡介",
        project: "精選作品",
        // shareProject: "什麼是SHARE項目",
        // shareProjectDetail: "該項目始於神樂坂住宅區矢來町的'SHAREyaraicho'。我們的動機是通過創建一系列共享住宅來振興東京看不見的社區。在我們的SHARE項目中，每個共享住宅除了客廳、淋浴間、廁所、洗衣房和工作空間外，還有非常獨特的公共空間。",
        // About section
        aboutTitle: "蔣賢峰",
        aboutContent: "蔣賢峰 (Masataka)，字君安（John），是一位長期居住於紐約與東京的建築師、AI 研究員以及專案經理。他在<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建築都市設計事務所（KKAA）</a>擁有超過八年的專業經驗，曾領導團隊完成多項專案，包括豪華高樓、度假村、私人住宅與高端家具設計。他的職涯專注於管理、技術與設計三大領域。他亦曾於<a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥倫比亞大學空間研究中心（CSR）</a>工作，並為<a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">日本建築學會（AIJ）</a>的成員。蔣賢峰擁有<a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥倫比亞大學</a>計算學碩士學位，以及<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大學</a>建築學碩士學位。",
        // Resume section for Traditional Chinese
        resume: "獲獎經歷<br><br>2021年<br>歐洲電影中心 CAMERIMAGE 建築設計競賽（波蘭·托倫）<br>2020年<br>Restaurant & Bar Design Awards 照明類別冠軍（英國·倫敦）<br>2017年<br>新台灣塔建築設計競賽（台中）<br><br><br>工作經歷<br><br>2025年 -<br>空間智能協會（SIA）聯合創始人（美國·紐約）<br>2024年 - 2025年<br>哥倫比亞大學空間研究中心（CSR）研究員（美國·紐約）<br>2017年 -<br>隈研吾建築都市設計事務所 專案經理（日本·東京，美國·洛杉磯）<br>2017年 -<br>日本建築學會（AIJ）正式會員<br><br><br>任教經歷<br><br>2025年<br>海牙應用科技大學（荷蘭·海牙）<br>2024年 - 2025年<br>哥倫比亞大學（美國·紐約）<br>2021年<br>山東藝術設計學院（中國·濟南）<br><br><br>展覽與出版<br><br>2025年<br>Autodesk University 2025（美國·納什維爾）<br>2025年<br>JAPANISM（美國·紐約）<br>2025年<br>利用LLMs實現建築設計全生命週期自動化，ASCE International Conference on Computing in Civil Engineering（美國·紐奧爾良）<br>2025年<br>SIA年度展覽2025（美國·紐約）<br>2025年<br>BULT EUR 2025（荷蘭·海牙）<br>2025年<br>AI in AEC（芬蘭·赫爾辛基）<br>2025年<br>LingoBIM：從語言到設計，URBAN Magazine（美國·紐約）<br>2022年<br>米蘭三年展（義大利·米蘭）<br>2021年<br>World House Projects 2021，GA HOUSE 175·GA畫廊（日本·東京）<br>2017年<br>日本建築學會全國大會（日本·廣島）",
        // Footer
        copyright: "版權所有 © - 保留所有權利。"
    }
};

// Function to update content based on selected language
function updateContent(language) {
    const content = languageContent[language];
    if (!content) return;

    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);

    // Update navigation
    document.querySelectorAll('nav a').forEach(link => {
        const key = link.getAttribute('data-key');
        if (key && content[key]) {
            link.textContent = content[key];
        }
    });

    // Update main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        // Update concept
        const concept = mainContent.querySelector('.hero h1');
        if (concept) concept.textContent = content.concept;

        const conceptDetail = mainContent.querySelector('.hero p');
        if (conceptDetail) conceptDetail.textContent = content.conceptDetail;

        // Update profile section
        const profileTitle = mainContent.querySelector('.profile h2');
        if (profileTitle) profileTitle.textContent = content.profile;

        // Update language-specific profile content
        document.querySelectorAll('.language-version').forEach(version => {
            version.style.display = version.getAttribute('data-lang') === language ? 'block' : 'none';
        });

        // Update project section
        const projectTitle = mainContent.querySelector('.project h2');
        if (projectTitle) projectTitle.innerHTML = content.project;

        // Update about section
        const aboutTitle = mainContent.querySelector('.about h1');
        if (aboutTitle) aboutTitle.textContent = content.aboutTitle;

        const aboutContent = mainContent.querySelector('.about-content p[data-key="aboutContent"]');
        if (aboutContent) aboutContent.innerHTML = content.aboutContent;

        const resume = mainContent.querySelector('.about-content p[data-key="resume"]');
        if (resume && content.resume) resume.innerHTML = content.resume;
    }

    // Update footer
    const footer = document.querySelector('footer p');
    if (footer) footer.textContent = content.copyright;
}

// Event listener for language selection
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        // Get the stored language or use browser language as default
        const storedLanguage = localStorage.getItem('selectedLanguage');
        const browserLang = navigator.language.split('-')[0];

        // Set initial language
        const initialLanguage = storedLanguage || (languageContent[browserLang] ? browserLang : 'en');
        languageSelect.value = initialLanguage;
        updateContent(initialLanguage);

        // Add change event listener
        languageSelect.addEventListener('change', (e) => {
            updateContent(e.target.value);
        });
    }

    // Project filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const archFilters = document.querySelector('.arch-filters');
    let activeFilters = new Set();

    // Function to update project visibility based on active filters
    function updateProjectVisibility() {
        projectItems.forEach(item => {
            const tags = item.getAttribute('data-tags').split(' ');
            let isVisible = true;

            // Check each active filter
            activeFilters.forEach(filter => {
                if (filter.startsWith('location-')) {
                    // Get the location button element
                    const locationButton = document.querySelector(`[data-filter="${filter}"]`);
                    const regionTags = locationButton.getAttribute('data-region-tags').split(',');
                    // Check if the item has any of the region tags
                    isVisible = isVisible && regionTags.some(regionTag => tags.includes(regionTag));
                } else if (filter.startsWith('use-')) {
                    // Get the use button element
                    const useButton = document.querySelector(`[data-filter="${filter}"]`);
                    const useTag = useButton.getAttribute('data-use-tag');
                    // Check if the item has the use tag
                    isVisible = isVisible && tags.includes(useTag);
                } else if (filter.startsWith('type-')) {
                    // Get the type button element
                    const typeButton = document.querySelector(`[data-filter="${filter}"]`);
                    const typeTag = typeButton.getAttribute('data-type-tag');
                    // Check if the item has the type tag
                    isVisible = isVisible && tags.includes(typeTag);
                } else {
                    // For non-location, non-use, and non-type filters, check if the tag exists
                    isVisible = isVisible && tags.includes(filter);
                }
            });

            item.style.display = isVisible ? 'block' : 'none';
        });
    }

    // Main filter buttons (All, Arch, Tech)
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            
            // Show/hide arch filters and reset all filter options
            if (filter === 'arch') {
                archFilters.style.display = 'flex';
                activeFilters.clear();
                activeFilters.add('arch');
                // Reset all filter options
                document.querySelectorAll('.filter-option').forEach(option => {
                    option.classList.remove('active');
                });
            } else {
                archFilters.style.display = 'none';
                activeFilters.clear();
                if (filter !== 'all') {
                    activeFilters.add(filter);
                }
            }

            updateProjectVisibility();
        });
    });

    // Filter options in dropdowns
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', () => {
            const filter = option.getAttribute('data-filter');
            const dropdown = option.closest('.dropdown-container');
            const dropdownType = dropdown.querySelector('.dropdown-btn').getAttribute('data-dropdown');

            // For location filters, deactivate other location options first
            if (filter.startsWith('location-')) {
                dropdown.querySelectorAll('.filter-option').forEach(opt => {
                    if (opt !== option) {
                        opt.classList.remove('active');
                        activeFilters.delete(opt.getAttribute('data-filter'));
                    }
                });
            }

            // For use filters, deactivate other use options first
            if (filter.startsWith('use-')) {
                dropdown.querySelectorAll('.filter-option').forEach(opt => {
                    if (opt !== option) {
                        opt.classList.remove('active');
                        activeFilters.delete(opt.getAttribute('data-filter'));
                    }
                });
            }

            // For type filters, deactivate other type options first
            if (filter.startsWith('type-')) {
                dropdown.querySelectorAll('.filter-option').forEach(opt => {
                    if (opt !== option) {
                        opt.classList.remove('active');
                        activeFilters.delete(opt.getAttribute('data-filter'));
                    }
                });
            }

            // Toggle active state
            option.classList.toggle('active');

            // Update active filters
            if (option.classList.contains('active')) {
                activeFilters.add(filter);
            } else {
                activeFilters.delete(filter);
            }

            // Always keep 'arch' in active filters when using dropdowns
            activeFilters.add('arch');

            updateProjectVisibility();
        });
    });
});

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize slideshow
function initSlideshow() {
    const slideshow = document.getElementById('heroSlideshow');
    if (!slideshow) return;

    const slides = Array.from(slideshow.children);
    let currentSlide = 0;
    
    // Shuffle the slides array
    shuffleArray(slides);
    
    // Reorder the slides in the DOM according to the shuffled array
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        slideshow.appendChild(slide);
    });
    
    // Show the first slide
    slides[0].classList.add('active');

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize slideshow when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initSlideshow();
}); 