const boardTiles = [
  // --- 左下角 1格 (起點) ---
  { type: 'start', name: 'Start Point', left: '5%', top: '95%' }, // Index 0

  // --- 左側邊緣 8格 (從下往上走) ---
  { type: 'investment', name: 'Investment', left: '5%', top: '85%' }, // 1
  { type: 'chance', name: 'Chance Card', left: '5%', top: '75%' }, // 2
  { type: 'investment', name: 'Investment', left: '5%', top: '65%' }, // 3
  { type: 'chance', name: 'Chance Card', left: '5%', top: '55%' }, // 4
  { type: 'investment', name: 'Investment', left: '5%', top: '45%' }, // 5
  { type: 'scenario', name: 'Scenario', left: '5%', top: '35%' }, // 6
  { type: 'investment', name: 'Investment', left: '5%', top: '25%' }, // 7
  { type: 'scenario', name: 'Scenario', left: '5%', top: '15%' }, // 8

  // --- 左上角 1格 (反思角) ---
  { type: 'blank', name: 'Keep Going', left: '5%', top: '5%' }, // 9

  // --- 頂部邊緣 8格 (從左往右走) ---
  { type: 'chance', name: 'Chance Card', left: '15%', top: '5%' }, // 10
  { type: 'investment', name: 'Investment', left: '25%', top: '5%' }, // 11
  { type: 'scenario', name: 'Scenario', left: '35%', top: '5%' }, // 12
  { type: 'scenario', name: 'Scenario', left: '45%', top: '5%' }, // 13
  { type: 'chance', name: 'Chance Card', left: '55%', top: '5%' }, // 14
  { type: 'investment', name: 'Investment', left: '65%', top: '5%' }, // 15
  { type: 'special', name: 'Special Rule', left: '75%', top: '5%' }, // 16
  { type: 'chance', name: 'Chance Card', left: '85%', top: '5%' }, // 17

  // --- 右上角 1格 (無意義格子 Keep Going) ---
  { type: 'reflection', name: 'Reflection Corner', left: '95%', top: '5%' }, // 18

  // --- 右側邊緣 8格 (從上往下走) ---
  { type: 'investment', name: 'Investment', left: '95%', top: '15%' }, // 19
  { type: 'scenario', name: 'Scenario', left: '95%', top: '25%' }, // 20
  { type: 'special', name: 'Special Rule', left: '95%', top: '35%' }, // 21
  { type: 'chance', name: 'Chance Card', left: '95%', top: '45%' }, // 22
  { type: 'scenario', name: 'Scenario', left: '95%', top: '55%' }, // 23
  { type: 'investment', name: 'Investment', left: '95%', top: '65%' }, // 24
  { type: 'chance', name: 'Chance Card', left: '95%', top: '75%' }, // 25
  { type: 'scenario', name: 'Scenario', left: '95%', top: '85%' }, // 26

  // --- 右下角 1格 (同樣是無意義格子 Keep Going) ---
  { type: 'blank', name: 'Keep Going', left: '95%', top: '95%' }, // 27

  // --- 底部邊緣 8格 (從右往左走) ---
  { type: 'special', name: 'Special Rule', left: '85%', top: '95%' }, // 28
  { type: 'investment', name: 'Investment', left: '75%', top: '95%' }, // 29
  { type: 'chance', name: 'Chance Card', left: '65%', top: '95%' }, // 30
  { type: 'scenario', name: 'Scenario', left: '55%', top: '95%' }, // 31
  { type: 'investment', name: 'Investment', left: '45%', top: '95%' }, // 32
  { type: 'special', name: 'Special Rule', left: '35%', top: '95%' }, // 33
  { type: 'scenario', name: 'Scenario', left: '25%', top: '95%' }, // 34
  { type: 'scenario', name: 'Scenario', left: '15%', top: '95%' }  // 35
];

const investments = [
  {
    title: {
      zh: '你睡醒後精神不振，你會…',
      en: 'You wake up feeling low energy, you will…'
    },
    options: [
      {
        label: {
          zh: '進行五分鐘溫和伸展運動',
          en: 'do 5 minutes of gentle stretching'
        },
        sub: {
          zh: '穩定投入，累積心理資本。',
          en: 'A steady action that builds your mental assets.'
        },
        image: './assets/investment-1-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '躺臥床上滑手機',
          en: 'scroll phone on the bed'
        },
        sub: {
          zh: '即時舒服，但沒有真正恢復狀態。',
          en: 'Feels easier now, but does not truly restore your state.'
        },
        image: './assets/investment-1-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '眾多限期任務令你備受壓迫，你會…',
      en: 'You feel overwhelmed by the deadlines, you will…'
    },
    options: [
      {
        label: {
          zh: '制定今天的待辦事項',
          en: 'create a to-do list for today'
        },
        sub: {
          zh: '先整理思绪，再逐步处理压力。',
          en: 'A steady action that builds your mental assets.'
        },
        image: './assets/investment-2-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '逃避一切事務，自暴自棄',
          en: 'avoid everything and doomscroll'
        },
        sub: {
          zh: '短暂逃避会让焦虑继续累积。',
          en: 'Avoidance feels instant, but the stress keeps building.'
        },
        image: './assets/investment-2-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '翌日有重要約務須提早就寢，但你內心忐忑不安，你會…',
      en: 'You have to sleep early tonight for an important appointment tomorrow, and you feel worried. You will…'
    },
    options: [
      {
        label: {
          zh: '練習深呼吸',
          en: 'practice deep breathing'
        },
        sub: {
          zh: '讓身體先慢下來，比較容易入睡。',
          en: 'Calming your body first makes rest easier.'
        },
        image: './assets/investment-3-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '追看多一集劇集',
          en: 'watch one more episode of drama'
        },
        sub: {
          zh: '拖延睡觉会让明天更难面对。',
          en: 'Delaying sleep makes tomorrow harder.'
        },
        image: './assets/investment-3-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '週日獨處感到孤單',
      en: 'Feeling lonely on a weekend'
    },
    options: [
      {
        label: {
          zh: '致電久未聯絡的好友，初時或會略顯尷尬，卻能建立真摯的人際連繫',
          en: "tiring but rewarding: Call your long-lost friend -> might feel awkward at first but you're able to make a meaningful connection"
        },
        sub: {
          zh: '关系需要投入，但会带来真实连结。',
          en: 'A little effort can rebuild real connection.'
        },
        image: './assets/investment-4-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '訂製垃圾食品、連續追劇，雖可短暫紓緩情緒，但會降低身體機能與行事動力',
          en: 'Instant: Order junk food and binge-watch a show -> comfort but lower physical agility and motivation'
        },
        sub: {
          zh: '舒服是即时的，但恢复是有限的。',
          en: 'Comfort is instant, but the recovery is limited.'
        },
        image: './assets/investment-4-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '朋友致電尋求情緒支援，但你自身已心力透支',
      en: "A friend calls for emotional support but you're drained"
    },
    options: [
      {
        label: {
          zh: '坦誠告知對方當下無暇聆聽傾訴',
          en: 'Confront her honestly telling her you are not suitable to listen to her vent right now'
        },
        sub: {
          zh: '诚实设立界线，也是在保护自己。',
          en: 'Honest boundaries protect both sides.'
        },
        image: './assets/investment-5-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '託詞忙碌並繼續刷手機，眼前得以解脫，後續卻會因內疚加重精神負擔',
          en: "Instant gratification: say you're busy and scroll your phone -> relief now but guilt gonna drain you further"
        },
        sub: {
          zh: '躲开当下压力，但内耗可能更重。',
          en: 'You avoid the pressure now, but guilt may linger.'
        },
        image: './assets/investment-5-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '房間雜亂但身心疲累，你會…',
      en: 'Your room is messy but you are tired, you will…'
    },
    options: [
      {
        label: {
          zh: '花十分鐘收拾一小角空間後休息',
          en: 'Clean a tiny corner for 10 minutes then rest'
        },
        sub: {
          zh: '小行动也能重新建立掌控感。',
          en: 'A small action can restore a sense of control.'
        },
        image: './assets/investment-6-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '置之不理，直接躺臥休息',
          en: 'Ignore the mess and lie in bed'
        },
        sub: {
          zh: '问题暂时没消失，环境压力会继续堆积。',
          en: 'The mess stays there and keeps adding pressure.'
        },
        image: './assets/investment-6-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '陷入負面思維迴圈之際',
      en: 'When you feel stuck in a negative thought loop'
    },
    options: [
      {
        label: {
          zh: '寫下自身思緒與感受',
          en: 'write down your thoughts and feelings'
        },
        sub: {
          zh: '写下来能帮你整理情绪。',
          en: 'Writing helps organise your emotions.'
        },
        image: './assets/investment-7-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '將負面情緒歸咎於身邊其他人',
          en: 'blame your negativity on others'
        },
        sub: {
          zh: '情绪转移出去，不等于真的处理了。',
          en: 'Projecting the feeling does not resolve it.'
        },
        image: './assets/investment-7-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '日程繁忙而無法抽空享用午膳',
      en: 'You are too busy to eat lunch at work'
    },
    options: [
      {
        label: {
          zh: '簡單進食輕便餐點',
          en: 'Eat a quick and light meal'
        },
        sub: {
          zh: '先补充能量，状态才撑得住。',
          en: 'A quick meal helps you keep going steadily.'
        },
        image: './assets/investment-8-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '直接省略正餐',
          en: 'Skip it entirely'
        },
        sub: {
          zh: '省了时间，但身体会慢慢透支。',
          en: 'You save time now, but your body pays later.'
        },
        image: './assets/investment-8-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '好友邀請你協助處理課業，但你本身亦有多項限期作業待辦',
      en: 'A friend wants you to help with her project but you have multiple deadlines due next week'
    },
    options: [
      {
        label: {
          zh: '講明自身狀況，建議對方另覓他人幫忙',
          en: 'Explain your situation to her and encourage her to find somebody else to help'
        },
        sub: {
          zh: '清楚表达限制，是成熟的选择。',
          en: 'Explaining your limits is a healthy choice.'
        },
        image: './assets/investment-9-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '一邊協助友人，一邊趕製自身工作',
          en: 'Help her with her work while simultaneously finishing yours'
        },
        sub: {
          zh: '看似两边都顾到，但很容易把自己压垮。',
          en: 'Trying to do both may overload you.'
        },
        image: './assets/investment-9-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '與好友發生激烈爭執，你會…',
      en: 'You are having a huge argument with your friend, you will…'
    },
    options: [
      {
        label: {
          zh: '先行冷靜調整情緒',
          en: 'calm yourself down'
        },
        sub: {
          zh: '先稳住自己，才有机会把话说清楚。',
          en: 'Regulating yourself first makes repair possible.'
        },
        image: './assets/investment-10-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '出言指責務求在爭執中取勝',
          en: 'verbally attack her to win the argument'
        },
        sub: {
          zh: '赢了当下，不代表关系没受伤。',
          en: 'Winning the moment can still damage the relationship.'
        },
        image: './assets/investment-10-b.jpeg',
        reward: 0
      }
    ]
  }
];

const scenarios = [
  {
    title: {
      zh: "耗費一週溫習仍於數學測驗失利，自此看見數學題便心生挫敗與焦慮",
      en: "You failed a math test you've spent a week revising for, you feel defeated and get anxious whenever you see a math question."
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: "重整自身觀念，明白單一次考試失利不代表數學能力欠佳，視失敗為汲取經驗的機會，慢慢重拾學習信心。",
      en: "You restructured your thoughts by telling yourself that one failed test does not mean you're bad at math forever. It is an opportunity to learn from your mistakes. You eventually regained confidence in your mathematical ability."
    },
    fail: {
      zh: '因懼怕再次失敗刻意迴避數學，焦慮日漸累積，日後面對數學題目均倍感惶恐。',
      en: 'You deliberately avoided math due to your fear of failure. The anxiety built up until every new question felt terrifying.'
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '向來擅長的中文科成績下滑，從前自認具備語言天賦，此刻開始懷疑自身能力。',
      en: 'Your grades in your favourite subject, Chinese, are declining. You once thought you possessed a certain gift for language, but now, facing this reality, you begin to doubt your own ability.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: "接納成績短暫回落的事實，明白分數退步不等於天賦消失，只需調整學習方法，持續練習後信心逐步回復。",
      en: "Your Chinese grades declined, and you doubted your gift for language. But you told yourself that a dip in grades doesn't erase your ability — it just means you need to adjust your approach. You kept working, and your confidence slowly returned."
    },
    fail: {
      zh: "深陷自我懷疑，因害怕證實自己毫無天分而放棄操練，懷疑感不斷加深，每份功課都變成自我價值的考核。",
      en: "Your Chinese grades declined, and you began doubting your gift for language. You avoided practicing because you feared proving you weren't talented. The doubt grew until every assignment felt like a test of your worth, not your skill."
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '籃球隊選拔落選，自覺從此再無入隊機會。',
      en: 'You cannot pass the audition for the school basketball team and think you lose your chance to enter in the future.'
    },
    text: {
      zh: '。。。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '坦然承受落選的失落感，堅持恆常練習，翌年成功通過選拔入隊。',
      en: 'You failed the audition and felt crushed. But you stayed with the disappointment, kept practicing anyway, and eventually made the team the next year.'
    },
    fail: {
      zh: "認定錯失唯一機會而徹底放棄籃球，每當看見籃球場，便再次觸發落選的挫敗感受。",
      en: "You failed the audition and believed you'd lost your only chance. You quit basketball entirely. Every time you saw a court, you felt the same sting of that single failure."
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: "摯友心生不滿卻不說明緣由，你主動開啟對話亦被對方拒絕溝通。",
      en: "Your best friend is angry at you but wouldn't tell you the reason, you try to talk to her but she refuses to communicate."
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: "以耐心與真誠慢慢安撫對方，最後得悉對方疏遠的原因。",
      en: "You managed to calm her down with patience and honesty and she eventually told you the reason she's been distant."
    },
    fail: {
      zh: '執意不斷追問、只顧傾訴自身感受，令對方更為惱怒、封閉內心。',
      en: 'You kept pushing and talked only about your own feelings which then made her even angrier and more guarded.'
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '身處小圈子卻備受冷落，嘗試開啟話題卻無人理會。',
      en: 'You feel left out of the friend group. You try to initiate a conversation but nobody listens to you.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '主動了解眾人興趣，投其所好順利融入對話。',
      en: 'You managed to get their attention but talking about things they enjoyed too.'
    },
    fail: {
      zh: '再度嘗試發言仍被無視，只能獨自旁觀其他人交談。',
      en: 'You tried to speak again but they ignored you and continued with their own conversation.'
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '同一位好友多次已讀不回、刻意疏遠，你認定對方不再看重這段友情。 ',
      en: 'You get ghosted by the same friend multiple times. You think the friend does not care about you anymore. '
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '主動約談詢問緣由，得知對方早前只因事務繁忙才疏於回覆。 ',
      en: 'You spoke to the friend and asked about what they ghosted you. They explained to you that it was because she/he was busy early on. '
    },
    fail: {
      zh: '以同樣冷處理的方式回應，雙方關係日漸疏離。',
      en: 'You ended up ghosting your friend too and eventually distanced yourself. '
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '渴望結識新朋友，但怯於主動交際。',
      en: 'You would love to meet new friends but are anxious to do so.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '報名參加活動、主動自我介紹，成功結識一眾新夥伴。',
      en: 'You decided to go to an event, introduced yourself and eventually met a bunch of friends.'
    },
    fail: {
      zh: '過度鑽牛角尖而迴避交談，焦慮感隨之加劇。',
      en: 'You kept overthinking and avoiding conversations, leaving you more anxious than before.'
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '父親不認同你的作息，你解釋自身較適合夜間工作，但父親堅持你需要早睡（體諒雙方立場、尋求折中方案）',
      en: 'Your father is upset with your sleep schedule. You explain that you work better at night but your father insists that you should sleep earlier. (Understand his perspective and reevaluate the situation, try to strike a balance between your and your father’s pov)'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '雙方協調訂立規劃，上學日提早就寢，需要趕工的日子彈性調整作息。',
      en: 'You both decided to find a middle ground where together you set plans; earlier bedtime on school nights, flexible hours on days you need to work late.'
    },
    fail: {
      zh: '拒絕作出任何妥協，令父親覺得你態度不敬，爭執不斷升級。 ',
      en: 'You refused to compromise and your father heard it as disrespect so the fight escalates instead of solving anything. '
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '母親確診腦退化症，變得動作笨拙、情緒焦躁，卻堅持獨自居住。',
      en: 'Your mother has recently been diagnosed with dementia, and has become increasingly clumsy and agitated but insists she lives alone.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: "明白無法左右母親的抉擇，但可調整自身應對方式，每日探訪、安裝家居安全設備，在保留對方獨立生活的前提下，暗中籌備日後的照顧安排。",
      en: "You accepted that you couldn't control her choices, but you could control your response. You visited daily, installed safety rails, and let her keep her independence while quietly preparing for the day she'd need more help."
    },
    fail: {
      zh: "刻意迴避敏感話題、假裝一切如常，任由母親獨居，數月後接獲意外跌倒的通知，延誤處理帶來的內疚長年揮之不去。",
      en: "You avoided the hard conversations, pretended everything was fine, and let her live alone. Months later, you got the call, she'd fallen and couldn't get up. The guilt of waiting too long became heavier than the diagnosis itself."
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '父母時常拿你與手足比較，直言你各方面有所不足。 ',
      en: 'Your parents keep comparing you to your sibling, saying that you are not good enough. '
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '不被旁人的評價束縛，專注走屬於自己的路，結交懂得欣賞自己的人，將負面說話當成耳邊風。',
      en: 'You refused to carry their measuring stick. You focused on your own path, found people who valued you as you are, and let their words become background noise, not your truth.'
    },
    fail: {
      zh: '慢慢認同父母的評價，不論取得何等成果都自覺遜人一等，日後取得成就時，腦海仍浮現「做得不夠好」的質疑。',
      en: 'You started believing them. No matter what you achieved, you felt second-best. Years later, you still hear their voice every time you succeed, not pride, just the echo of "not enough."'
    },
    reflection: {
      title: {
        zh: '见学校辅导员',
        en: 'Meet school counsellor'
      },
      text: {
        zh: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
        en: 'You took the initiative to meet with the school counselor. Under guidance, you sorted out your sense of loss and also saw that apart from this university, there are other paths that can help you achieve your career goals.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '面試晉身最後一輪，最終聘用另一名競爭者而落選。',
      en: 'You enter the final round of the interview and it is between you and the other candidate. The company chooses another candidate at last.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {      
      zh: '消化失落情緒後更新履歷繼續應徵，三個月後覓得更契合的工作崗位。',
      en: 'You sat with disappointment, then updated your resume and applied elsewhere. Three months later, you found a better fit.'
    },
    fail: {
      zh: "誤將落選等同自身能力不足，從此放棄所有求職申請。",
      en: "You told yourself it proved you weren't good enough. You stopped applying anywhere, convinced no one would ever choose you."
    },
    reflection: {
      title: {
        zh: '与导师/老师讨论',
        en: 'Discuss with a mentor / teacher'
      },
      text: {
        zh: '你與信任的導師討論。他們分享了自己過去失敗的經驗，讓你知道犯錯是成長的一部分，幫助你放下完美主義。',
        en: 'You discuss with a trusted mentor. They share their past experiences of failure, helping you understand that making mistakes is part of growth, and assist you in letting go of perfectionism.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '職場人際矛盾日益難以忍受，惟大環境經濟下行，另覓新職不易。',
      en: 'Workplace politics have become increasingly unbearable but finding a new job would be difficult under a declining economy.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '把壓力轉化為行動，持續更新履歷、協調日常工作量，穩守現有崗位並謀劃出路。',
      en: 'You turned the stress into a plan by constantly updating your resume and negotiating your workload so you could survive in the current environment.'
    },
    fail: {
      zh: '直接與人正面衝突、捲入辦公室流言蜚語，最終遭僱主解僱。',
      en: 'You burned bridges trying to confront people directly and pulled others into gossip which led to you getting fired. '
    },
    reflection: {
      title: {
        zh: '加入一个新的兴趣小组',
        en: 'Join a new interest group'
      },
      text: {
        zh: '你暫時離開壓力源，參加了一個新的興趣小組。在新環境的互動中，你重新肯定了自己的價值，知道自己仍值得被接納。',
        en: 'You temporarily left the pressure source and joined a new interest group. In the new environment, you re-confirmed your value and knew you were still worth being accepted.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '投放極多心力處理項目，會議上卻收到嚴厲批評，頓時懷疑個人價值（明白每份工作皆有順逆，訂立方法遠離無謂職場紛爭）',
      en: 'Despite putting in tremendous effort in your project, you still receive tough criticism during the meeting, you doubt your ability and feel useless. (You decide that each job has its ups and down and you think of creative strategies to stay far away from workplace politics.)'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '提醒自己職場起落在所難免，汲取批評當中的有用建議，捨棄無謂的負面評價繼續努力。',
      en: 'You reminded yourself that every job has ups and downs. You took what was useful from the feedback, left the rest, and kept going.'
    },
    fail: {
      zh: '自此消極敷衍工作，認定無論如何付出也難以獲得認可。',
      en: 'You stopped trying as hard after that, convinced that no amount of effort would ever be enough.'
    },
    reflection: {
      title: {
        zh: '加入一个新的兴趣小组',
        en: 'Join a new interest group'
      },
      text: {
        zh: '你暫時離開壓力源，參加了一個新的興趣小組。在新環境的互動中，你重新肯定了自己的價值，知道自己仍值得被接納。',
        en: 'You temporarily left the pressure source and joined a new interest group. In the new environment, you re-confirmed your value and knew you were still worth being accepted.'
      },
      reward: 5
    }
  }
];
const chances = [
  {
    zh: '你和朋友聊天，重新感到被理解。',
    en: 'You chatted with a friend and felt understood again.'
  },
  {
    zh: '你睡了一個好覺，身心恢復一些。',
    en: "You had a good night's sleep and feel somewhat restored."
  },
  {
    zh: '你去做運動，壓力稍微釋放。',
    en: 'You exercised and released some stress.'
  },
  {
    zh: '你吃了一頓正常的飯，狀態穩定下來。',
    en: 'You had a proper meal and your state stabilised.'
  }
];
const generalReflections = [
  {
    title: {
      zh: '自我對話時間',
      en: 'Self-Reflection Time'
    },
    text: {
      zh: '你給自己留了一段空白時間，寫下最近的感受，整理了原本紛亂的思緒。',
      en: 'You gave yourself some quiet time, wrote down your recent feelings, and sorted through your scattered thoughts.'
    },
    reward: 5
  },
  {
    title: {
      zh: '重新檢視目標',
      en: 'Reassess Goals'
    },
    text: {
      zh: '你和帶領者討論了目前的目標，確認它們是否仍符合你的價值觀，減輕了盲目追求的焦慮。',
      en: 'You discussed your current goals with your mentor and confirmed that they still align with your values, reducing the anxiety of pursuing blindly.'
    },
    reward: 5
  },
  {
    title: {
      zh: '接納當下的情緒',
      en: 'Accept Emotions'
    },
    text: {
      zh: '你意識到最近有些疲憊。你允許自己不用總是保持完美，接納了此刻的脆弱。',
      en: 'You realised you were feeling tired recently. You allowed yourself to not always be perfect, and accepted this moment of fragility.'
    },
    reward: 5
  }
];
const specials = [
  {
    title: {
      zh: '前進 2 格',
      en: 'Move Forward'
    },
    text: {
      zh: '你突然得到一股動力，直接前進 2 格，並觸發該格子的事件。',
      en: 'You suddenly gained momentum and moved forward 2 spaces, triggering the event on that space.'
    },
    apply: (onComplete) => {
      state.position = (state.position + 2) % boardTiles.length;
      addLog({
        zh: 'Special Rule：前進 2 格。',
        en: 'Special Rule: Move Forward 2 Spaces.'
      });
      updateHUD();
      setTimeout(() => {
        triggerTile();
      }, 600);
    }
  },
  {
    title: {
      zh: '額外金幣',
      en: 'Bonus Gold'
    },
    text: {
      zh: '你意外得到一段喘息空間，獲得 5 枚金幣。',
      en: 'You received 5 Gold unexpectedly.'
    },
    apply: (onComplete) => {
      changeGold(5);
      addLog({
        zh: 'Special Rule：獲得 5 枚金幣。',
        en: 'Special Rule: Bonus +5 Gold.'
      });
      if (onComplete) onComplete(); 
    }
  },
  {
    title: {
      zh: '壓力突增',
      en: 'Stress Spike'
    },
    text: {
      zh: '壓力突然上升，本回合沒有額外收穫，但也沒有額外損失。',
      en: 'Stress suddenly increases, and this round brings no additional rewards or penalties.'
    },
    apply: (onComplete) => {
      addLog({
        zh: 'Special Rule：壓力突增，無額外效果。',
        en: 'Special Rule: Stress Spike, no additional effects.'
      });
      if (onComplete) onComplete();
    }
  }
];

let currentLang = localStorage.getItem('lang') || 'zh';

function t(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[currentLang] ?? value.zh ?? value.en ?? '';
}

const uiText = {
  orgName: {
    zh: '香港心理創新協會',
    en: 'the Hong Kong Society of Psychological Innovation'
  },
  gameTitle: {
    zh: '心理資產棋盤',
    en: 'Mind Asset Board'
  },
  gameSubtitle: {
    zh: '累積 30 枚金幣即可達成目標。',
    en: 'Reach 30 Gold to complete the goal.'
  },
  atmTitle: {
    zh: '心理資產 ATM',
    en: 'Mental Asset ATM'
  },
  sidebarTitle: {
    zh: '遊戲說明',
    en: 'Game Guide'
  },
  sidebarDesc: {
    zh: '每張正向卡固定獲得 5 枚金幣，完成關卡後進入下一回合。',
    en: 'Each positive card grants a fixed reward of 5 Gold. The next round begins after completing the Level.'
  },
  currentGold: {
    zh: '目前金幣數目',
    en: 'Current Gold'
  },
  round: {
    zh: '回合',
    en: 'Round'
  },
  position: {
    zh: '位置',
    en: 'Position'
  },
  state: {
    zh: '狀態',
    en: 'State'
  },
  assetBar: {
    zh: '資產條',
    en: 'Asset Bar'
  },
  target30: {
    zh: '目標 30 Gold',
    en: 'Target 30 Gold'
  },
  diceResult: {
    zh: '骰子結果',
    en: 'Dice Result'
  },
  rollDice: {
    zh: '擲骰子',
    en: 'Roll Dice'
  },
  eventLog: {
    zh: '事件紀錄',
    en: 'Event Log'
  },
  diceHintIdle: {
    zh: '按下按鈕以擲骰子',
    en: 'Press the button to roll the dice'
  },
  diceHintRolling: {
    zh: '秒後停止...',
    en: 's remaining...'
  },
  statusPlaying: {
    zh: '進行中',
    en: 'Playing'
  },
  statusRolling: {
    zh: '擲骰中',
    en: 'Rolling'
  },
  statusMoving: {
    zh: '移動中',
    en: 'Moving'
  },
  statusInvestment: {
    zh: '投資事件',
    en: 'Investment'
  },
  statusChance: {
    zh: '機會卡',
    en: 'Chance'
  },
  statusScenario: {
    zh: '情境事件',
    en: 'Scenario'
  },
  statusReflection: {
    zh: '反思角',
    en: 'Reflection'
  },
  statusSpecial: {
    zh: '特殊規則',
    en: 'Special'
  },
  statusWon: {
    zh: '已達成',
    en: 'Won'
  },
  event: {
    zh: '事件',
    en: 'Event'
  },
  investmentType: {
    zh: '投資事件',
    en: 'Investment'
  },
  chanceType: {
    zh: '機會卡',
    en: 'Chance Card'
  },
  scenarioType: {
    zh: '情境事件',
    en: 'Scenario'
  },
  scenarioResultType: {
    zh: '情境結果',
    en: 'Scenario Result'
  },
  reflectionType: {
    zh: '反思角',
    en: 'Reflection Corner'
  },
  specialType: {
    zh: '特殊規則',
    en: 'Special Rule'
  },
  victoryType: {
    zh: '達成目標',
    en: 'Victory'
  },
  chooseAction: {
    zh: '請選擇你的行動。',
    en: 'Choose your action.'
  },
  supportCardDrawn: {
    zh: '你抽到了一張支持卡。',
    en: 'You drew a Support Card.'
  },
  gain5Gold: {
    zh: '獲得 5 枚金幣',
    en: 'Get 5 Gold'
  },
  chanceRewardSub: {
    zh: '獲得正向資源，進入下一回合。',
    en: 'Gain a positive resource and proceed to the next round.'
  },
  scenarioCheck: {
    zh: '系統會檢查你是否有足夠資產應對這個情境。',
    en: 'The system will check if you have enough assets to take on the situation.'
  },
  proceedNextRound: {
    zh: '進入下一回合',
    en: 'Proceed to the next round'
  },
  proceedNextRoundSub: {
    zh: '不觸發額外事件，繼續前進。',
    en: 'Keep moving forward without any special events.'
  },
  restart: {
    zh: '重新開始',
    en: 'Restart'
  },
  restartSub: {
    zh: '從頭開始遊戲。',
    en: 'Restart the game from scratch.'
  },
  reflectionFinish: {
    zh: '完成反思',
    en: 'Finish Reflection'
  },
  victoryTitle: {
    zh: '資產條已達 30 枚金幣',
    en: 'Asset Bar Reached 30 Gold'
  },
  victoryDesc: {
    zh: '你已累積 30 枚金幣，代表你逐步建立了更穩定的心理支持與自我照顧系統。',
    en: 'You have accumulated 30 Gold, which means you have successfully built a more stable mental support and self-care system.'
  }
};

function getStatusText(status) {
  const map = {
    Playing: uiText.statusPlaying,
    Rolling: uiText.statusRolling,
    Moving: uiText.statusMoving,
    Investment: uiText.statusInvestment,
    Chance: uiText.statusChance,
    Scenario: uiText.statusScenario,
    Reflection: uiText.statusReflection,
    Special: uiText.statusSpecial,
    Won: uiText.statusWon
  };
  return t(map[status] || { zh: status, en: status });
}

const state = {
    gold: 5,
    maxGold: 30,
    position: 0,
    round: 1,
    status: 'Playing',
    locked: false
};
const playerToken = document.getElementById('playerToken');
const goldValue = document.getElementById('goldValue');
const roundValue = document.getElementById('roundValue');
const positionValue = document.getElementById('positionValue');
const stateValue = document.getElementById('stateValue');
const assetPercent = document.getElementById('assetPercent');
const assetBar = document.getElementById('assetBar');
const atmFill = document.getElementById('atmFill');
const atmValue = document.getElementById('atmValue');
const diceCube = document.getElementById('diceCube');
const diceValue = document.getElementById('diceValue');
const diceHint = document.getElementById('diceHint');
const logList = document.getElementById('logList');
const modal = document.getElementById('modal');
const modalType = document.getElementById('modalType');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalChoices = document.getElementById('modalChoices');
const rollBtn = document.getElementById('rollBtn');
const langZhBtn = document.getElementById('langZh');
const langEnBtn = document.getElementById('langEn');

function renderStaticText() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (uiText[key]) {
      el.textContent = t(uiText[key]);
    }
  });

  document.documentElement.lang = currentLang === 'zh' ? 'zh-Hant' : 'en';

  if (langZhBtn) langZhBtn.classList.toggle('active', currentLang === 'zh');
  if (langEnBtn) langEnBtn.classList.toggle('active', currentLang === 'en');

  if (diceValue.textContent === '-' || diceValue.textContent === '') {
    diceHint.textContent = t(uiText.diceHintIdle);
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  renderStaticText();
  updateHUD();
}

langZhBtn?.addEventListener('click', () => setLanguage('zh'));
langEnBtn?.addEventListener('click', () => setLanguage('en'));

function randomItem(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function updatePlayerToken() {
  const currentTile = boardTiles[state.position];
  if (!currentTile) return;

  playerToken.style.left = currentTile.left;
  playerToken.style.top = currentTile.top;
}

function renderDiceFace(value) {
    const faceMap = {
        1: [5],
        2: [1, 9],
        3: [1, 5, 9],
        4: [1, 3, 7, 9],
        5: [1, 3, 5, 7, 9],
        6: [1, 3, 4, 6, 7, 9]
    };
    diceCube.querySelectorAll('.pip').forEach((pip, idx) => {
        pip.classList.toggle('show', faceMap[value].includes(idx + 1))
    })
}

function addLog(message) {
  const item = document.createElement('li');
  item.textContent = t(message);
  logList.prepend(item);
  while (logList.children.length > 8) {
    logList.removeChild(logList.lastChild);
  }
}

function updateHUD() {
  const ratio = Math.max(0, Math.min(100, (state.gold / state.maxGold) * 100));

  goldValue.textContent = state.gold;
  roundValue.textContent = state.round;
  positionValue.textContent = state.position;
  stateValue.textContent = getStatusText(state.status);
  assetPercent.textContent = `${Math.round(ratio)}%`;
  assetBar.style.width = `${ratio}%`;
  atmFill.style.width = `${ratio}%`;
  atmValue.textContent = currentLang === 'zh'
    ? `${state.gold} / ${state.maxGold} Gold`
    : `${state.gold} / ${state.maxGold} Gold`;

  updatePlayerToken();
}

function showModal(type, title, desc, choices = []) {
  modalType.textContent = t(type);
  modalTitle.textContent = t(title);
  modalDescription.innerHTML = t(desc).replace(/\n/g, '<br>');

  modalChoices.innerHTML = '';

  const hasCardImage = choices.some(choice => choice.image);
  if (hasCardImage) {
    modalChoices.classList.add('choices--cards');
  } else {
    modalChoices.classList.remove('choices--cards');
  }

  choices.forEach((choice) => {
    const button = document.createElement('button');
    button.type = 'button';

    if (choice.image) {
      button.className = 'choice-card';
      button.innerHTML = `
        <div class="choice-card-media">
          <img src="${choice.image}" alt="${t(choice.label)}" class="choice-card-image">
        </div>
        <div class="choice-card-body">
          <strong>${t(choice.label)}</strong>
          ${choice.sub ? `<span>${t(choice.sub).replace(/\n/g, '<br>')}</span>` : ''}
        </div>
      `;
    } else {
      button.className = 'choice-btn';
      button.innerHTML = `
        <strong>${t(choice.label)}</strong>
        ${choice.sub ? `<span>${t(choice.sub).replace(/\n/g, '<br>')}</span>` : ''}
      `;
    }

    button.addEventListener('click', () => {
      hideModal();
      if (choice.onClick) choice.onClick();
    });

    modalChoices.appendChild(button);
  });

  modal.classList.remove('hidden');
}


function hideModal() {
    modal.classList.add('hidden')
}

function nextRound() {
    state.round += 1;
    state.status = 'Playing';
    state.locked = false;
    updateHUD()
}

function resetGame() {
  state.gold = 5;
  state.position = 0;
  state.round = 1;
  state.status = 'Playing';
  state.locked = false;

  diceValue.textContent = '-';
  diceHint.textContent = t(uiText.diceHintIdle);
  renderDiceFace(1);

  logList.innerHTML = '';
  addLog({
    zh: '遊戲開始。你有 5 枚金幣，目標是把資產條累積到 30 枚金幣。',
    en: 'Game starts. You have 5 Gold, and your goal is to fill the Asset Bar to 30 Gold.'
  });

  updateHUD();
}

function changeGold(delta) {
  state.gold = Math.max(0, Math.min(state.maxGold, state.gold + delta));
  updateHUD();

  if (state.gold >= state.maxGold) {
    state.status = 'Won';
    updateHUD();

    showModal(
      uiText.victoryType,
      uiText.victoryTitle,
      uiText.victoryDesc,
      [
        {
          label: uiText.restart,
          sub: uiText.restartSub,
          onClick: resetGame
        }
      ]
    );
  }
}

function handleInvestment() {
  state.status = 'Investment';
  updateHUD();

  const card = randomItem(investments);

  showModal(
    uiText.investmentType,
    card.title,
    uiText.chooseAction,
    card.options.map(option => ({
      label: option.label,
      sub: option.sub,
      image: option.image,
      onClick: () => {
        if (option.reward > 0) {
          addLog({
            zh: `投資事件：${t(option.label)}，獲得 ${option.reward} 枚金幣。`,
            en: `Investment: ${t(option.label)}, gained ${option.reward} Gold.`
          });
          changeGold(option.reward);
          if (state.status !== 'Won') nextRound();
        } else {
          addLog({
            zh: `投資事件：${t(option.label)}，沒有獲得金幣。`,
            en: `Investment: ${t(option.label)}, no Gold gained.`
          });
          nextRound();
        }
      }
    }))
  );
}

function handleChance() {
  state.status = 'Chance';
  updateHUD();

  const card = randomItem(chances);

  showModal(
    uiText.chanceType,
    uiText.supportCardDrawn,
    card,
    [
      {
        label: uiText.gain5Gold,
        sub: uiText.chanceRewardSub,
        onClick: () => {
          addLog({
            zh: `機會卡：${t(card)}，獲得 5 枚金幣。`,
            en: `Chance Card: ${t(card)}, gained 5 Gold.`
          });
          changeGold(5);
          if (state.status !== 'Won') nextRound();
        }
      }
    ]
  );
}

function handleReflection(scenarioCard = null) {
  state.status = 'Reflection';
  updateHUD();

  const reflectionContent = scenarioCard
    ? scenarioCard.reflection
    : randomItem(generalReflections);

  showModal(
    uiText.reflectionType,
    reflectionContent.title,
    reflectionContent.text,
    [
      {
        label: {
          zh: `${t(uiText.reflectionFinish)}（+${reflectionContent.reward} 枚金幣）`,
          en: `${t(uiText.reflectionFinish)} (+${reflectionContent.reward} Gold)`
        },
        sub: {
          zh: '完成反思後進入下一回合。',
          en: 'Proceed to the next round after reflection.'
        },
        onClick: () => {
          addLog({
            zh: `反思角：${t(reflectionContent.title)}，獲得 ${reflectionContent.reward} 枚金幣。`,
            en: `Reflection Corner: ${t(reflectionContent.title)}, gained ${reflectionContent.reward} Gold.`
          });
          changeGold(reflectionContent.reward);
          if (state.status !== 'Won') nextRound();
        }
      }
    ]
  );
}

const REFLECTION_TILE_INDEX = boardTiles.findIndex(tile => tile.type === 'reflection');

function moveToReflectionAndReflect(card) {
  if (REFLECTION_TILE_INDEX === -1) {
    addLog({
      zh: '找不到 反思角 格子。',
      en: 'Reflection Corner tile not found.'
    });
    handleReflection(card);
    return;
  }

  state.position = REFLECTION_TILE_INDEX;
  state.status = 'Reflection';
  updateHUD();

  addLog({
    zh: `情境失敗：${t(card.title)}，移動到 反思角。`,
    en: `Scenario failed: ${t(card.title)}, moved to Reflection Corner.`
  });

  setTimeout(() => handleReflection(card), 500);
}

function handleScenario() {
  state.status = 'Scenario';
  updateHUD();

  const card = randomItem(scenarios);

  showModal(
    uiText.scenarioType,
    card.title,
    card.text,
    [
      {
        label: {
          zh: `需求 Gold：${card.requirement}`,
          en: `Required Gold: ${card.requirement}`
        },
        sub: uiText.scenarioCheck,
        onClick: () => {
          if (state.gold >= card.requirement) {
            addLog({
              zh: `情境成功：${t(card.title)}。`,
              en: `Scenario success: ${t(card.title)}.`
            });

            showModal(
              uiText.scenarioResultType,
              {
                zh: '你成功應對了這個情境',
                en: 'You handled the scenario successfully'
              },
              card.success,
              [
                {
                  label: uiText.proceedNextRound,
                  sub: uiText.proceedNextRoundSub,
                  onClick: nextRound
                }
              ]
            );
          } else {
            addLog({
              zh: `情境失敗：${t(card.title)}，金幣不足，前往 反思角。`,
              en: `Scenario failed: ${t(card.title)}, not enough Gold, proceeding to Reflection Corner.`
            });
            moveToReflectionAndReflect(card);
          }
        }
      }
    ]
  );
}

function handleSpecial() {
  state.status = 'Special';
  updateHUD();

  const card = randomItem(specials);

  showModal(
    uiText.specialType,
    card.title,
    card.text,
    [
      {
        label: {
          zh: '確認',
          en: 'Confirm'
        },
        sub: {
          zh: '套用這張特殊規則。',
          en: 'Apply this special rule.'
        },
        onClick: () => {
          card.apply(() => {
            updateHUD();
            nextRound();
          });
        }
      }
    ]
  );
}

function triggerTile() {
  const tile = boardTiles[state.position];

  if (tile.type === 'start') {
    addLog({
      zh: '回到起點，本回合沒有特殊事件。',
      en: 'Back to Start Point. No special event this round.'
    });
    nextRound();
    return;
  }

  if (tile.type === 'blank') {
    addLog({
      zh: `停留在 ${t(tile.name)}，本回合沒有特殊事件。`,
      en: `Stayed at ${t(tile.name)}. No special event this round.`
    });
    nextRound();
    return;
  }

  if (tile.type === 'investment') return handleInvestment();
  if (tile.type === 'chance') return handleChance();
  if (tile.type === 'scenario') return handleScenario();
  if (tile.type === 'reflection') return handleReflection();
  if (tile.type === 'special') return handleSpecial();
}

function rollDice() {
  if (state.locked || state.status === 'Won') return;

  state.locked = true;
  state.status = 'Rolling';
  updateHUD();

  rollBtn.disabled = true;
  diceCube.classList.add('rolling');
  diceValue.textContent = '?';

  let countdown = 2;
  diceHint.textContent = currentLang === 'zh'
    ? `${countdown} 秒後停止...`
    : `${countdown}s remaining...`;

  renderDiceFace(Math.floor(Math.random() * 6) + 1);

  const previewInterval = setInterval(() => {
    renderDiceFace(Math.floor(Math.random() * 6) + 1);
  }, 120);

  const countdownInterval = setInterval(() => {
    countdown -= 1;
    if (countdown >= 0) {
      diceHint.textContent = currentLang === 'zh'
        ? `${countdown} 秒後停止...`
        : `${countdown}s remaining...`;
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(previewInterval);
    clearInterval(countdownInterval);

    const result = Math.floor(Math.random() * 6) + 1;
    renderDiceFace(result);
    diceCube.classList.remove('rolling');
    diceValue.textContent = result;

    state.position = (state.position + result) % boardTiles.length;
    state.status = 'Moving';
    updateHUD();

    diceHint.textContent = currentLang === 'zh'
      ? `前進 ${result} 格`
      : `Move ${result} spaces`;

    addLog({
      zh: `第 ${state.round} 回合：擲出 ${result}，移動到 ${t(boardTiles[state.position].name)}。`,
      en: `Round ${state.round}: rolled ${result}, moved to ${t(boardTiles[state.position].name)}.`
    });

    rollBtn.disabled = false;
    setTimeout(triggerTile, 420);
  }, 2000);
}
rollBtn.addEventListener('click', rollDice);

renderStaticText();
renderDiceFace(1);
resetGame();