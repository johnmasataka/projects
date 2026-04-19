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
        aboutContent: `John (君安), also known as Masataka (賢峰), is a New York / Tokyo-based architectural consultant specializing in high-end retail, hospitality, and resort projects, with experience across Asia, Europe, and North America.<br><br>

His work focuses on translating brand and development ambitions into spatial outcomes, engaging with projects from early-stage positioning through design coordination and delivery. He is particularly interested in how architecture can create a sense of place through careful integration of owner brand, user perception, landscape, local culture, and built form. His project experience includes collaborations with Aman, Hyatt, West Bank, Lippo, CMP, Waketokuyama, Camper, Haidilao, Luckin, etc.<br><br>

At <a href="https://kkaa.co.jp/en/" target="_blank" style="color: inherit;">Kengo Kuma and Associates (KKAA)</a>, he led a range of retail, resort, and hotel projects, contributing to concept development, project management, and the articulation of design identity. His experience includes working with international teams and stakeholders to develop projects from early design stages through to delivery. He later joined <a href="https://www.kpf.com/" target="_blank" style="color: inherit;">Kohn Pedersen Fox (KPF)</a> in New York, where he continued to work on large-scale international projects, expanding his experience in navigating complex project structures and integrating design with technical and delivery requirements.<br><br>

John holds a master’s degree in design technology, real estate in <a href="https://www.columbia.edu/" target="_blank" style="color: inherit;">Columbia University</a>, and a master’s degree in architecture from <a href="https://www.global.hokudai.ac.jp/" target="_blank" style="color: inherit;">Hokkaido University</a>.`,

// aboutContent: "John (君安), also known as Masataka (賢峰), is a New York / Tokyo-based architect, AI researcher, and project manager. He has over eight years of professional experience at <a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">Kengo Kuma & Associates (KKAA)</a> and <a href=\"https://www.kpf.com/\" target=\"_blank\" style=\"color: inherit;\">Kohn Pedersen Fox (KPF)</a>, where he has led teams on a wide range of projects, including luxury towers, resorts, private residences, and high-end furniture. His unique career bridges the confluence of management, technology, and design. He is the member of the <a href=\"https://www.aia.org/\" target=\"_blank\" style=\"color: inherit;\">American Institute of Architects (AIA)</a> and <a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">Architectural Institute of Japan (AIJ)</a>. John holds master's degree in computation in <a href=\"https://www.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">Columbia University</a> and architecture in <a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">Hokkaido University</a>.",
                // Resume section
        resume: "Work<br><br>a2025 - Present&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design Technology Specialist, Kohn Pedersen Fox (KPF), New York, USA<br>2025 - Present&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Co-founder, Spatial Intelligence Association (SIA), New York, USA<br>2024 - 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;Researcher, Center for Spatial Research (CSR) at Columbia University, New York, USA<br>2017 - 2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;Project Manager, Kengo Kuma & Associates (KKAA), Tokyo, Japan and Los Angeles, USA<br><br><br>Accreditations<br><br>2025 - Present&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;American Institute of Architects (AIA)<br>2017 - Present&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architectural Institute of Japan (AIJ)<br><br><br>Invited Lectures<br><br>2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Conversational BIM: From Prompts to Projects, Autodesk University (AU 2025) (Nashville, USA)<br>2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BILT EUR 2025, The Hague University of Applied Sciences (The Hague, Netherlands)<br>2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Leveraging Large Language Models for Automated BIM Generation, AI in AEC (Helsinki, Finland)<br>2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lecture on work experience in Japan & the USA, Cornell University (Remote: New York and Ithaca, USA)<br>2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bawa and His Architecture of Houses, Archifocus (Remote: New York, USA & Shanghai, China)<br>2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kuma's Practice, Archifocus (Tokyo, Japan)<br>2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bawa and Aman Resort, Amangalla (Galle, Sri Lanka)<br>2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explorations and Practice of KKAA, Shandong University of Art & Design (Remote: Tokyo, Japan & Jinan, China)<br><br><br>Awards<br><br>2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architectural Design Competition for European Film Center CAMERIMAGE Building (Toruń, Poland)<br>2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lighting Category Winner of Restaurant & Bar Design Awards (London, United Kingdom)<br>2017&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architectural Design Competition for New Taiwan Tower (Taichung)<br><br><br>Publications<br><br>2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LLMs-Driven Full Lifecycle Architectural Design, ASCE International Conference on Computing in Civil Engineering (New Orleans, USA)<br>2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LingoBIM: From Words to Design, URBAN Magazine (New York, USA)<br>2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;World House Projects 2021, GA HOUSE 175 (Tokyo, Japan)<br>2017&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;National Academic Conference of the Architectural Institute of Japan (Hiroshima, Japan)<br><br><br>Exhibitions<br><br>2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fujilism, JAPANISM (New York, USA)<br>2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Archtalk, SIA Annual Exhibition 2025 (New York, USA)<br>2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Italia B&B Furniture Design, Triennale di Milano (Milan, Italy)<br>2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LA Brooktree House, GA Gallery (Tokyo, Japan)",
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
        concept: "蔣　賢峰ジョン",
        conceptDetail: "プロジェクトマネージャー、建築家、AI研究者、バックパッカー",
        profile: "プロフィール",
        project: "プロジェクト",
        // shareProject: "SHAREプロジェクトとは",
        // shareProjectDetail: "神楽坂の住宅地、矢来町にある「SHAREyaraicho」からはじまったプロジェクト。シェアハウスを通して、東京の見えなくなってしまったコミュニティを再び可視化させたい思いから始動。どの家も、プライベートな部屋のほかに、リビングやシャワー、トイレ、ランドラリー、ワーキングスペースなどの様々なコモンスペースを持つのが特徴。",
        // About section
        aboutTitle: "蔣　賢峰ジョン",
        aboutContent: `蔣（ジャン）賢峰（マサタカ）は、ニューヨークと東京を拠点とする建築コンサルタントで、高級リテール・ホテル・リゾートプロジェクトに特化した実績を持ち、アジア、ヨーロッパ、北米を中心に活動しています。<br><br>

彼の仕事は、ブランドと不動産開発を空間的成果に変換することに焦点を当てており、プロジェクトの初期段階から設計調整、最終納品まで、様々な段階で関与しています。彼は、オーナーブランド、ユーザーの認識、景観、地域文化、建築形態を慎重に統合することで、独特の場所感を生み出す建築がどのように機能するかに特に関心を持っています。彼のプロジェクト経験には、アマン、ハイアット、West Bank、リッポ、勤美、分とく山、Camper などとのコラボレーションが含まれています。<br><br>

<a href="https://kkaa.co.jp/en/" target="_blank" style="color: inherit;">隈研吾建築都市設計事務所（KKAA）</a>では、さまざまなレジャー・ホスピタリティプロジェクトをリードし、コンセプト開発、プロジェクト管理、設計アイデンティティの確立に貢献しています。国際的なチームと関係者との連携を通じて、プロジェクトの初期開発段階から設計・引渡しまでを成功させる経験を重ねています。その後、ニューヨークの<a href="https://www.kpf.com/" target="_blank" style="color: inherit;">コーン・ペダーセン・フォックス（KPF）</a>に移籍し、大規模な国際プロジェクトに携わり、複雑なプロジェクト構造のマネジメントや、設計・技術・納品要件の調整を通じて経験をさらに深めています。<br><br>

蔣賢峰は、<a href="https://www.columbia.edu/" target="_blank" style="color: inherit;">コロンビア大学</a>で設計技術・不動産の修士号を取得し、<a href="https://www.global.hokudai.ac.jp/" target="_blank" style="color: inherit;">北海道大学</a>で建築学の修士号を取得しました。`,
        // aboutContent: "蔣（ジャン）賢峰（マサタカ）はニューヨークと東京を拠点とする建築家、AI研究者、プロジェクトマネージャー。<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建築都市設計事務所</a> (KKAA) および <a href=\"https://www.kpf.com/\" target=\"_blank\" style=\"color: inherit;\">コーン・ペダーセン・フォックス (KPF)</a> にてマネージャーを務め、高層集合住宅、リゾート、個人住宅、高級家具など、幅広い分野のプロジェクトに携わる。キャリアの中心にあるのは、マネジメント・テクノロジー・デザインの三領域をまたぐ横断的な実践。また、コロンビア大学の<a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">空間研究センター（Center for Spatial Research）</a>に所属し、<a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">日本建築学会</a>　および <a href=\"https://www.aia.org/\" target=\"_blank\" style=\"color: inherit;\">アメリカ建築家協会</a>正会員。蔣は<a href=\"https://www.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">コロンビア大学</a>でコンピューティション学科卒業、<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大学</a>で建築学科修了。",

        // Resume section
        resume: "受賞歴<br><br>2021年<br>欧州映画センター CAMERIMAGE 建築設計コンペティション（ポーランド・トルン）<br>2020年<br>Restaurant & Bar Design Awards 照明部門優勝（イギリス・ロンドン）<br>2017年<br>新台湾タワー建築設計コンペティション（台中）<br><br><br>職歴<br><br>2025年 -<br>空間知能協会（SIA）共同創設者（アメリカ・ニューヨーク）<br>2024年 - 2025年<br>コロンビア大学空間研究センター（CSR）研究員（アメリカ・ニューヨーク）<br>2017年 -<br>隈研吾建築都市設計事務所 プロジェクトマネージャー（日本・東京、アメリカ・ロサンゼルス）<br>2017年 -<br>日本建築学会（AIJ）正会員<br><br><br>展示・出版<br><br>2025年<br>Autodesk University 2025（アメリカ・ナッシュビル）<br>2025年<br>JAPANISM（アメリカ・ニューヨーク）<br>2025年<br>「大規模言語モデルを活用した建築設計のライフサイクル全体の自動化」　ASCE International Conference on Computing in Civil Engineering（アメリカ・ニューオーリンズ）<br>2025年<br>SIA年次展示会2025（アメリカ・ニューヨーク）<br>2025年<br>BULT EUR 2025（オランダ・ハーグ）<br>2025年<br>AI in AEC（フィンランド・ヘルシンキ）<br>2025年<br>「LingoBIM：言葉からデザインへ」　URBAN Magazine（アメリカ・ニューヨーク）<br>2022年<br>ミラノ・トリエンナーレ（イタリア・ミラノ）<br>2021年<br>World House Projects 2021、GA HOUSE 175・GAギャラリー（日本・東京）<br>2017年<br>日本建築学会全国大会（日本・広島）",
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
        aboutContent: "<p>蒋贤峰是一位常驻纽约与东京的建筑顾问，专注于高端零售、酒店及度假村项目，执业经验横跨亚洲、欧洲及北美。</p>" +
        "<p>他的工作核心在于将品牌的愿景与项目开发者的目标转化为具体的空间成果。从项目早期的定位规划，到设计协调与最终交付，他均深度参与。他尤为关注空间如何通过业主品牌、用户感知、景观、本土文化与建筑形态的细致整合，从而塑造出独特的场所感。他曾合作过的客户包括安缦（Aman）、凯悦（Hyatt）、西岸置业（West Bank）、力宝（Lippo）、勤美、分得山（Waketokuyama）、Camper、海底捞、瑞幸等。</p>" +
        "<p>蒋贤峰毕业于<a href=\"https://www.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥伦比亚大学</a>以及<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大学</a>，获得设计技术、开发、建筑学硕士学位。在<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建筑都市设计事务所（KKAA）</a>任职期间，他主导了一系列零售、度假村及酒店项目，在方案构思、项目管理以及设计识别的表达上做出了核心贡献。他拥有领导和协调国际团队及利益相关方的丰富经验，确保项目从初步设计平稳过渡至落成交付。此后，他加入纽约 <a href=\"https://www.kpf.com\" target=\"_blank\" style=\"color: inherit;\">Kohn Pedersen Fox（KPF）</a>建筑事务所，继续参与大型国际项目，在处理复杂项目架构、平衡设计创意与技术交付需求方面进一步积累了深厚资历。</p>",
        // aboutContent: "蒋贤峰 (Xianfeng)，字君安 (John)，是一位常驻纽约和东京的建筑师、AI研究员和项目经理。他在<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建筑都市设计事务所（KKAA）</a> 以及 <a href=\"https://www.kpf.com\" target=\"_blank\" style=\"color: inherit;\"> 科恩·佩德森·福克斯（KPF） </a>拥有超过八年的专业经验，曾领导团队完成各种项目，包括豪华塔楼、度假村、私人住宅和高端家具。他的职业生涯专注于管理、技术和设计。他曾还在<a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥伦比亚大学空间研究中心（CSR）</a>工作，并且是<a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">美国建筑师学会（AIA）</a> 以及 <a href=\"https://www.aia.org/\" target=\"_blank\" style=\"color: inherit;\">日本建筑学会（AIJ）</a>的成员。蒋贤峰在<a href=\"https://www.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥伦比亚大学</a>获得计算学硕士学位，在<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大学</a>获得建筑学硕士学位。",
        // Resume section for Simplified Chinese
        resume: "获奖经历<br><br>2021年<br>欧洲电影中心 CAMERIMAGE 建筑设计竞赛（波兰·托伦）<br>2020年<br>Restaurant & Bar Design Awards 照明类别冠军（英国·伦敦）<br>2017年<br>新台湾塔建筑设计竞赛（台中）<br><br><br>职业经历<br><br>2025年 -<br>空间智能协会（SIA）联合创始人（美国·纽约）<br>2024年 - 2025年<br>哥伦比亚大学空间研究中心（CSR）研究员（美国·纽约）<br>2017年 -<br>隈研吾建筑都市设计事务所 项目经理（日本·东京，美国·洛杉矶）<br>2017年 -<br>日本建筑学会（AIJ）正式会员<br><br><br>展览与出版<br><br>2025年<br>Autodesk University 2025（美国·纳什维尔）<br>2025年<br>JAPANISM（美国·纽约）<br>2025年<br>利用大语言模型实现建筑设计全生命周期自动化，ASCE International Conference on Computing in Civil Engineering（美国·新奥尔良）<br>2025年<br>SIA年度展览2025（美国·纽约）<br>2025年<br>BULT EUR 2025（荷兰·海牙）<br>2025年<br>AI in AEC（芬兰·赫尔辛基）<br>2025年<br>LingoBIM：从语言到设计，URBAN Magazine（美国·纽约）<br>2022年<br>米兰三年展（意大利·米兰）<br>2021年<br>World House Projects 2021，GA HOUSE 175·GA画廊（日本·东京）<br>2017年<br>日本建筑学会全国大会（日本·广岛）",
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
        aboutContent: "<p>蔣賢峰是一位常駐紐約與東京的建築顧問，專注於頂級零售、飯店及度假村項目，執業經驗橫跨亞洲、歐洲及北美。</p>" +
                      "<p>他的工作核心在於將品牌的願景與開發商的目標轉化為具體的空間成果。從專案早期的定位規劃，到設計協調與最終交付，他均深度參與。他尤為關注空間如何通過業主品牌、用戶感知、景觀、本土文化與建築形態的細致整合，從而塑造出獨特的場所感。他曾合作過的客戶包括安缦（Aman）、凱悅（Hyatt）、西岸置業（West Bank）、力寶（Lippo）、勤美、分得山（Waketokuyama）、Camper、海底撈、瑞幸等。</p>" +
                      "<p>蔣賢峰畢業於<a href=\"https://www.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥倫比亞大學</a>以及<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大學</a>，獲得設計技術、開發、建築設計碩士學位。在<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建築都市設計事務所（KKAA）</a>任職期間，他主導了一系列零售、度假村及酒店項目，在方案構思、專案管理以及設計識別的表達上做出了核心貢獻。他擁有領導和協調國際團隊及利益相關方的豐富經驗，確保項目從初步設計平穩過渡至落成交付。此後，他加入紐約 <a href=\"https://www.kpf.com\" target=\"_blank\" style=\"color: inherit;\">Kohn Pedersen Fox（KPF）</a>建築事務所，繼續參與大型國際項目，在處理複雜項目架構、平衡設計創意與技術交付需求方面進一步累積了深厚資歷。</p>",
        // aboutContent: "蔣賢峰 (Masataka)，字君安（John），是一位長期居住於紐約與東京的建築師、AI 研究員以及專案經理。他在<a href=\"https://kkaa.co.jp/en/\" target=\"_blank\" style=\"color: inherit;\">隈研吾建築都市設計事務所（KKAA）</a> 以及 <a href=\"https://www.kpf.com\" target=\"_blank\" style=\"color: inherit;\"> 科恩·佩德森·福克斯（KPF） </a>擁有超過八年的專業經驗，曾領導團隊完成多項專案，包括豪華大樓、渡假村、私人住宅與高端家具設計。他的職業生涯專注於管理、技術與設計三大領域。他也曾在<a href=\"https://c4sr.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥倫比亞大學空間研究中心（CSR）</a>工作，並且是<a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">美國建築師學會（AIA）</a> 和 <a href=\"https://www.aij.or.jp/aijhome.htm\" target=\"_blank\" style=\"color: inherit;\">日本建築學會（AIJ）</a>的成員。蔣賢峰擁有<a href=\"https://www.columbia.edu/\" target=\"_blank\" style=\"color: inherit;\">哥倫比亞大學</a>計算學碩士學位，以及<a href=\"https://www.global.hokudai.ac.jp/\" target=\"_blank\" style=\"color: inherit;\">北海道大學</a>建築學碩士學位。",
        // Resume section for Traditional Chinese
        resume: "獲獎經歷<br><br>2021年<br>歐洲電影中心 CAMERIMAGE 建築設計競賽（波蘭·托倫）<br>2020年<br>Restaurant & Bar Design Awards 照明類別冠軍（英國·倫敦）<br>2017年<br>新臺灣塔建築設計競賽（臺中）<br><br><br>職業經歷<br><br>2025年 -<br>空間智慧協會（SIA）共同創辦人（美國·紐約）<br>2024年 - 2025年<br>哥倫比亞大學空間研究中心（CSR）研究員（美國·紐約）<br>2017年 -<br>隈研吾建築都市設計事務所 專案經理（日本·東京，美國·洛杉磯）<br>2017年 -<br>日本建築學會（AIJ）正式會員<br><br><br>展覽與出版<br><br>2025年<br>Autodesk University 2025（美國·納許維爾）<br>2025年<br>JAPANISM（美國·紐約）<br>2025年<br>運用大型語言模型實現建築設計全生命週期自動化，ASCE International Conference on Computing in Civil Engineering（美國·紐奧良）<br>2025年<br>SIA年度展覽2025（美國·紐約）<br>2025年<br>BULT EUR 2025（荷蘭·海牙）<br>2025年<br>AI in AEC（芬蘭·赫爾辛基）<br>2025年<br>LingoBIM：從語言到設計，URBAN Magazine（美國·紐約）<br>2022年<br>米蘭三年展（義大利·米蘭）<br>2021年<br>World House Projects 2021，GA HOUSE 175·GA藝廊（日本·東京）<br>2017年<br>日本建築學會全國大會（日本·廣島）",
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
        // const concept = mainContent.querySelector('.hero h1');
        // if (concept) concept.textContent = content.concept;

        // const conceptDetail = mainContent.querySelector('.hero p');
        // if (conceptDetail) conceptDetail.textContent = content.conceptDetail;

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

        // const resume = mainContent.querySelector('.about-content p[data-key="resume"]');
        // if (resume && content.resume) resume.innerHTML = content.resume;
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