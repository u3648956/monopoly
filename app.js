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
      zh: '當你起身覺得缺乏動力，你會......',
      en: 'You wake up feeling low energy, you will…'
    },
    options: [
      {
        label: {
          zh: '做5分鐘簡單伸展',
          en: 'do 5 minutes of gentle stretching'
        },
        sub: {
          zh: '令身心都覺得安穩、放鬆，準備好迎接新的一天',
          en: 'your mind and body feels more grounded, making you feel ready to face the day'
        },
        image: './assets/investment-1-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '睡在床上玩一會兒手機',
          en: 'scroll phone on the bed'
        },
        sub: {
          zh: '藍光會令雙眼更疲憊，然後當你決定起床，你會覺得更匆忙、動力更低',
          en: 'the blue light makes your eyes strain, and when you finally get out of bed, you feel even more rushed and unmotivated'
        },
        image: './assets/investment-1-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '當你被迫在眉睫的截止日期弄得不堪負荷，你會......',
      en: 'You feel overwhelmed by the deadlines, you will…'
    },
    options: [
      {
        label: {
          zh: '為當天建立一個待辦清單',
          en: 'create a to-do list for today'
        },
        sub: {
          zh: '有一個清晰的計劃可以建立控制感，每完成一項小任務，內心的焦慮感亦隨即舒緩',
          en: 'seeing a clear plan allows you to have a sense of control. As you tick off every small task, your anxiety eases.'
        },
        image: './assets/investment-2-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '逃避一切然後不能控制地玩手機',
          en: 'avoid everything and doomscroll'
        },
        sub: {
          zh: '你能夠短暫逃離焦慮，但你因為拖延而浪費了很多時間，然後現在因為截止日期越來越接近而覺得更加焦慮',
          en: 'you were able to temporarily escape the anxiety, but you lost a lot of time procrastinating, and now you are even more stressed as the deadline is approaching'
        },
        image: './assets/investment-2-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '當你明天有一個重要會議而需要早睡，但你感到擔心，你會......',
      en: 'You have to sleep early tonight for an important appointment tomorrow, and you feel worried. You will…'
    },
    options: [
      {
        label: {
          zh: '練習深呼吸',
          en: 'practice deep breathing'
        },
        sub: {
          zh: '可以讓心率減緩，使你逐漸進入睡眠狀態',
          en: 'your heart rate slows down, allowing you to drift to sleep'
        },
        image: './assets/investment-3-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '多觀看一集劇集',
          en: 'watch one more episode of drama'
        },
        sub: {
          zh: '導致入睡時間遠超預期，而讓你在出席重要會議時感到精疲力竭',
          en: 'you end up staying up way past your bedtime and you feel extremely exhausted for your appointment'
        },
        image: './assets/investment-3-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '當你在假日感到孤獨，你會......',
      en: 'Feeling lonely on a weekend'
    },
    options: [
      {
        label: {
          zh: '打給很久不見的朋友',
          en: "Call your long-lost friend"
        },
        sub: {
          zh: '起初或許會感到些許尷尬，但你最終能夠建立起深刻且具意義的連結',
          en: 'might feel awkward at first but you’re able to make a meaningful connection'
        },
        image: './assets/investment-4-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '購買垃圾食物並瘋狂追劇',
          en: 'Order junk food and binge-watch a show'
        },
        sub: {
          zh: '獲得了短暫的舒適感，卻沒有減少孤獨感',
          en: 'offers temporary comfort but may not help with your sense of loneliness'
        },
        image: './assets/investment-4-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '你的朋友尋求情感支持，但你已經精疲力竭，你會......',
      en: "A friend calls for emotional support but you're drained"
    },
    options: [
      {
        label: {
          zh: '坦誠地告訴她，你現在的狀態不適合聽她傾訴',
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
          zh: '說你正在忙，然後繼續玩手機',
          en: "say you’re busy and scroll your phone"
        },
        sub: {
          zh: '當下你會覺得很輕鬆，但隨之而來的愧疚感會進一步消耗你',
          en: 'temporary relief now but the guilt will drain you further'
        },
        image: './assets/investment-5-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '你的房間很亂，但你又很累，你會……',
      en: 'Your room is messy but you are tired, you will…'
    },
    options: [
      {
        label: {
          zh: '用10分鐘清理一個小角落，然後休息',
          en: 'Clean a tiny corner for 10 minutes then rest'
        },
        sub: {
          zh: '角落變得整潔，整個空間看上去沒有那麽令人心煩，讓你可以好好休息，明日亦會有動力再繼續收拾。',
          en: 'one corner space is cleaned up and you feel less anxious about the space, allowing you to have some good rest and motivation to clean again tomorrow'
        },
        image: './assets/investment-6-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '無視混亂，直接躺上床',
          en: 'Ignore the mess and lie in bed'
        },
        sub: {
          zh: '雜亂的環境會在潛意識困擾你，就算身體休息完，還是覺得很累，而且會心煩意躁。',
          en: 'The messy environment acts as a subconscious stressor, making your physical rest feel less restorative and leaving you irritated.'
        },
        image: './assets/investment-6-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '當你發覺自己不停鑽牛角尖時，你會……',
      en: 'When you feel stuck in a negative thought loop'
    },
    options: [
      {
        label: {
          zh: '將想法和感受寫下來',
          en: 'write down your thoughts and feelings'
        },
        sub: {
          zh: '透過書寫，幫自己梳理不同的情緒，最終可能會找到解決問題的方法。',
          en: 'writing your thoughts down allowed you to untangle certain feelings and eventually find a solution to solving your problems'
        },
        image: './assets/investment-7-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '將負面情緒怪罪於人',
          en: 'blame your negativity on others'
        },
        sub: {
          zh: '身邊的人會覺得受傷害、被冒犯。到最後變成孤單一個，感覺更加糟糕。',
          en: 'people around you felt hurt and offended. You end up alone and feeling even worse. '
        },
        image: './assets/investment-7-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '你工作忙得沒時間吃午餐時，你會……',
      en: 'You are too busy to eat lunch at work'
    },
    options: [
      {
        label: {
          zh: '快速吃一點輕食',
          en: 'Eat a quick and light meal'
        },
        sub: {
          zh: '你會感到更有精力，有動力繼續工作。',
          en: 'you feel more energized and ready to continue working '
        },
        image: './assets/investment-8-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '索性不吃',
          en: 'Skip it entirely'
        },
        sub: {
          zh: '因為太肚餓，而犯下粗心的錯誤，並在晚餐時過量進食。',
          en: 'you make careless mistakes because you’re too hungry and you end up overeating in dinner'
        },
        image: './assets/investment-8-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '有位朋友想請你幫忙她的項目，但自己下星期已經有好多事情要做，你會……',
      en: 'A friend wants you to help with her project but you have multiple deadlines due next week'
    },
    options: [
      {
        label: {
          zh: '向她解釋你的情況，並鼓勵她找其他人幫忙',
          en: 'Explain to her your situation and encourage her to find somebody else to help'
        },
        sub: {
          zh: '你保護了自己的時間和精力，專心做好自己的任務，同時與朋友保持坦誠、健康的關係。',
          en: 'You safeguard your time and energy to produce quality work for your own deadlines, while preserving a transparent, honest relationship with your friend.'
        },
        image: './assets/investment-9-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '一邊幫她，一邊趕自己的任務',
          en: 'Help her with her work while simultaneously finishing yours'
        },
        sub: {
          zh: '你熬夜通宵，對此漸漸產生不滿，還會埋怨朋友。',
          en: 'You stay up all night and you feel a bubbling resentment toward your friend for asking in the first place.'
        },
        image: './assets/investment-9-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: {
      zh: '你與朋友發生激烈爭執，你會……',
      en: 'You are having a huge argument with your friend, you will…'
    },
    options: [
      {
        label: {
          zh: '讓自己冷靜下來',
          en: 'calm yourself down'
        },
        sub: {
          zh: '緊張的氣氛得以緩和。大家不再互相指罵，而是針對事情來解決，最後達成共識，感情比以前更好了。',
          en: 'The tension in the room de-escalates. By addressing the issue at hand rather than trading insults, you both find a constructive resolution, strengthening your bond.'
        },
        image: './assets/investment-10-a.jpeg',
        reward: 5
      },
      {
        label: {
          zh: '言語攻擊朋友，務求要贏得這場爭吵',
          en: 'verbally attack her to win the argument'
        },
        sub: {
          zh: '一時的滿足感很快變成後悔。那些傷人的話語會在你們的關係中留下傷痕，需要很長時間才能修復。',
          en: 'The immediate satisfaction of winning quickly turns into deep regret. The harsh words leave a lasting scar on the friendship that will take a long time to heal.'
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
      zh: "你為數學測驗溫習了整整個星期，結果竟然是不合格，從此見到數學題就覺得好氣餒、好焦慮。",
      en: "You failed a math test you've spent a week revising for, you feel defeated and get anxious whenever you see a math question."
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: "你調整自己的想法，和自己講：一次測驗不合格，不代表你以後的數學成績都會不好。這次反而是一個機會，讓你可以從錯誤中學習。最後，你慢慢重拾對數學的信心。",
      en: "You restructured your thoughts by telling yourself that one failed test does not mean you’re bad at math forever. It is an opportunity to learn from your mistakes. You eventually regained confidence in your mathematical ability."
    },
    fail: {
      zh: '你因為害怕失敗，有意地不認真學習數學。焦慮越積越多，到最後每見到一條新題目都覺得好可怕。',
      en: 'You deliberately avoided math due to your fear of failure. The anxiety built up until every new question felt terrifying.'
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '你汲取了上一次數學測驗未如理想的經驗，今次終於取得理想成績，獲得很大成就感。',
        en: 'You finally received a good grade on your math test after you learned from the mistakes made in the last test that you failed, giving you a sense of achievement.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '中文是你最喜歡的科目，但最近成績開始下滑。你曾經覺得自己在中文方面有些天份，但現在面對這樣的情況，你開始懷疑自己的能力。',
      en: 'Your grades in your favourite subject, Chinese, are declining. You once thought you possessed a certain gift for language, but now, facing this reality, you begin to doubt your own ability.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: "中文成績退步，你懷疑自己是否有天賦。因為害怕證實自己真的沒有天賦，所以索性不再練習中文。疑慮越積越深，到最後每一份功課你都覺得不是在測試你的能力，而是對你整個人的否定。",
      en: "Your Chinese grades declined, and you doubted your gift for language. But you told yourself that a dip in grades doesn't erase your ability — it just means you need to adjust your approach. You kept working, and your confidence slowly returned."
    },
    fail: {
      zh: "中文成績退步，你懷疑自己是否有天賦。但你和自己說：成績下降不代表你沒有那份能力，只是代表你需要調整一下學習方法。於是你繼續努力，成績和信心也隨之而來。",
      en: "Your Chinese grades declined, and you began doubting your gift for language. You avoided practicing because you feared proving you weren't talented. The doubt grew until every assignment felt like a test of your worth, not your skill."
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '雖然你成績持續下滑，但老師特意解釋近期考試難度提升，分數退步是正常的情況，更於課堂上讚賞你的努力，令你重拾自信。',
        en: 'Although your grades have been declining, the teacher did mention that the recent exams were harder, which is why it is normal to have a decline. Your teacher then praised your efforts in class, boosting your confidence.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '你在學校籃球隊的選拔中落選，覺得自己以後再也沒有機會入隊了。',
      en: 'You cannot pass the audition for the school basketball team and think you lose your chance to enter in the future.'
    },
    text: {
      zh: '。。。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '選拔失敗之後好沮喪，但你沒有放棄，繼續練習，結果下一年成功入隊。',
      en: 'You failed the audition and felt crushed. But you stayed with the disappointment, kept practicing anyway, and eventually made the team the next year.'
    },
    fail: {
      zh: "選拔失敗之後認定自己已經失去了唯一的機會，從此不再打籃球。之後每次見到籃球場，你都會想起那次選拔失利，難過湧上心頭。",
      en: "You failed the audition and believed you'd lost your only chance. You quit basketball entirely. Every time you saw a court, you felt the same sting of that single failure."
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '你決定向籃球隊成員請教技術與心得。經過一番苦練，球技有所進步，翌年成功入選球隊。',
        en: 'You decided to ask someone from the basketball team to teach you some tricks and tips, and slowly you got better and got into the team the next year.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: "好朋友對你心生不滿，但又不肯和你說明原因。你嘗試和她主動交談，她亦拒絕溝通。",
      en: "Your best friend is angry at you but wouldn't tell you the reason, you try to talk to her but she refuses to communicate."
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: "你憑著耐心與真誠慢慢安撫對方。最後她解釋之前一直避開你的緣由。你們最後做返好朋友，之後每次有衝突，都能透過溝通同表達彼此感受去解決問題。",
      en: "You managed to calm her down with patience and honesty, and she eventually told you the reason she’s been distant. You ended up being back to good friends and solved every conflict immediately through communicating and expressing one another’s emotions."
    },
    fail: {
      zh: '你執意追問，只顧著講自己的感受，結果她更加生氣，亦對你戒心漸重。你們的關係日漸疏遠，回想起當日最後一次的對話，仍會覺得難受。',
      en: 'You kept pushing and talked only about your own feelings, which then made her even angrier and more guarded. You ended up distancing yourself from your friend, and you felt bad about that being your last conversation with her.'
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '朋友就算自己忙到不可開交，都仲特登抽時間關心你、問候你，令你感受到滿滿嘅支持。',
        en: 'A friend spent time to check in on you even while she/he was busy, making you feel supported.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '你覺得自己被朋友們排擠。你嘗試開啟話題，但沒有人聽你講。',
      en: 'You feel left out of the friend group. You try to initiate a conversation but nobody listens to you.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '你轉變話題，講大家感興趣的內容，成功吸引到大家的注意。這次交談讓你獲益良多，內心亦感到充實滿足。',
      en: 'You managed to get their attention by talking about things they enjoyed and eventually you learnt a lot of new things throughout the conversation and felt fulfilled too. '
    },
    fail: {
      zh: '你再度嘗試搭話，但大家依舊無視，繼續閒聊。你覺得被人孤立，忍不住落淚。',
      en: 'You tried to speak again, but they ignored you and continued with their own conversation. You felt left out and started crying. '
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '你投其所好、主動聊起佢哋鍾意嘅話題之後，朋友開始約埋你一齊玩，令你重新感受到同大家嘅連結。',
        en: 'Your friends included you in their activities after you initiated a conversation with them by talking about things they enjoyed, and you feel connected.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '同一個朋友已經多次已讀不回，你覺得他已經不再在乎這段友誼。',
      en: 'You get ghosted by the same friend multiple times. You think the friend does not care about you anymore. '
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '你直接問朋友為什麼經常不回覆信息。他解釋因為之前真的很忙。你發現原來只是一場誤會，最後大家和好如初。',
      en: 'You spoke to the friend and asked about why they ghosted you. They explained to you that it was because she/he was busy early on. You ended up back on good terms with them as you realised it was just miscommunication.'
    },
    fail: {
      zh: '你後來也同樣不回覆他，於是大家就慢慢疏遠了。起初你覺得這樣做沒問題，但現在卻開始掛念這位朋友。',
      en: 'You ended up ghosting your friend too and eventually distanced yourself. You felt it was a good idea at first, but now you miss your friend.'
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '你投其所好、主動聊起佢哋鍾意嘅話題之後，朋友開始約埋你一齊玩，令你重新感受到同大家嘅連結。',
        en: 'Your friends included you in their activities after you initiated a conversation with them by talking about things they enjoyed, and you feel connected.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '你好想認識新朋友，但一想到要社交就好緊張。',
      en: 'You would love to meet new friends but are anxious to do so.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '你鼓起勇氣參加活動，主動自我介紹，最後認識到一群新朋友。你們還成為了一輩子的朋友。',
      en: 'You decided to go to an event, introduced yourself and eventually met a bunch of friends. You guys ended up being friends for a lifetime.'
    },
    fail: {
      zh: '你不停胡思亂想，不敢與人交談，結果比之前更加緊張。因為你的大腦長期保持戒備狀態，你沒有感受到與人產生連結的快樂。',
      en: 'You kept overthinking and avoiding conversations, leaving you more anxious than before. Your nervous system stays on alert because your brain never learns that social situations are safe.'
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '你主動上前自我介紹之後，一班新朋友邀請你一齊聚會，令你自覺融入其中。',
        en: 'A group of new friends invited you to spend time together after you introduced yourself to them and you feel included.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '父親不滿意你的作息時間。你解釋自己在晚上做事效率更高，但父親堅持要你早睡。（嘗試理解他的立場，重新審視整件事，在雙方立場之間取得平衡）',
      en: 'Your father is upset with your sleep schedule. You explain that you work better at night but your father insists that you should sleep earlier. (Understand his perspective and reevaluate the situation, try to strike a balance between your and your father’s pov)'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '你們決定各退一步，一齊制定計劃：上學日儘量早點睡覺，需要溫習至較晚時就彈性處理。自此你每日都精神充沛，學業成績亦有所進步。',
      en: 'You both decided to find a middle ground where together you set plans; earlier bedtime on school nights, flexible hours on days you need to work late. You felt more energised everyday and got better grades at school.'
    },
    fail: {
      zh: '你拒絕讓步，父親覺得你不尊重他，爭執愈演愈烈。最後你們每晚都會因為早睡一事爭吵，而你連功課也無法完成。',
      en: 'You refused to compromise and your father heard it as disrespect so the fight escalates instead of solving anything. You ended up arguing every night with you father as he wanted you to sleep earlier and you didn’t get to finish study anything.'
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '家人在決定調整你的作息時間時，會跟你一起商量，而不是自作主張，讓你感受到被尊重。',
        en: 'Your family included you in the decision to fine-tune your sleep schedule instead of deciding it by yourself, and you feel respected.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '母親近日確診患上腦退化症，變得愈來愈行動不便、情緒焦躁，但堅持要自己一個人住。',
      en: 'Your mother has recently been diagnosed with dementia, and has become increasingly clumsy and agitated but insists she lives alone.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: "你明白自己無法控制她的選擇，但可以調節自己的心態與做法。你每日都去探望母親，在家中加裝安全扶手，一方面尊重她獨立生活的意願，同時亦默默做好準備，應對日後她需要更多照顧的情況。",
      en: "You accepted that you couldn't control her choices, but you could control your response. You visited daily, installed safety rails, and let her keep her independence while quietly preparing for the day she'd need more help."
    },
    fail: {
      zh: "你刻意迴避沉重的話題，假裝一切如常，任由她獨居。幾個月後，你收到電話，母親在家跌倒後無法自行起身。等到出事才後悔自己沒有安排好母親，這比起患病這件事更讓你難受。",
      en: "You avoided the hard conversations, pretended everything was fine, and let her live alone. Months later, you got the call, she'd fallen and couldn't get up. The guilt of waiting too long became heavier than the diagnosis itself."
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '家人尊重了你所設定的界線，讓你有一種被理解的感覺。',
        en: 'Your family respected a boundary you set, giving you a sense of being understood.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '父母不時拿你和兄弟姊妹比較，總是認為你比不上對方。',
      en: 'Your parents keep comparing you to your sibling, saying that you are not good enough.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '你選擇專心走屬於自己的路，不被他們的評價左右，也結識到欣賞真實你的人。將父母比較的話語當成耳邊風，不讓這些話定義自己。',
      en: 'You refused to carry their measuring stick. You focused on your own path, found people who valued you as you are, and let their words become background noise, not your truth.'
    },
    fail: {
      zh: '你慢慢相信了他們的話。多年過去，不論自己取得什麼成績，還是總覺得遜人一籌。',
      en: 'You started believing them. No matter what you achieved, you felt second-best. Years later, you still hear their voice every time you succeed, not pride, just the echo of "not enough."'
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '家人注意到你付出的努力，而不是盲目地將你和兄弟姊妹比較，讓你覺得被欣賞。',
        en: 'Your family noticed how hard you’ve been working instead of comparing you to your sibling, which made you feel appreciated.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '你順利晉身面試最後一輪，競爭對手只剩下另一位應徵者。最後公司卻選取了對方。',
      en: 'You enter the final round of the interview and it is between you and the other candidate. The company chooses another candidate at last.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {      
      zh: '你先平復失落的情緒，然後更新履歷表，繼續投考其他職位。三個月後，你尋找到一份更適合的工作，任職一年後更獲得晉升。',
      en: 'You sat with disappointment, then updated your resume and applied elsewhere. Three months later, you found a better fit and got a promotion after working there for a year.'
    },
    fail: {
      zh: "你認為這代表自己能力不足，從此不再申請任何職位，認定永遠不會有人選用自己。到最後你見到其他朋友找到心意工作，心生羨慕。自己留在家中無所事事，心情變得愈來愈低落。",
      en: "You told yourself it proved you weren't good enough. You stopped applying anywhere, convinced no one would ever choose you. You ended up feeling jealous of your other friends getting jobs and felt even worse about staying at home doing nothing."
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
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
      zh: '職場上的人事紛爭愈演愈烈，讓你難以忍受。但經濟環境轉差，要另覓新工作並不容易。',
      en: ' Workplace politics have become increasingly unbearable but finding a new job would be difficult under a declining economy.'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '你將壓力變成行動力，一遍更新履歷表，一遍與老闆協商工作內容，先保住現有工作。最後你考取相關資格，成功獲得到一份夢寐以求的工作。',
      en: 'You turned the stress into a plan by constantly updating your resume and negotiating your workload so you could survive in the current environment. You ended up getting a qualification to your dream job.'
    },
    fail: {
      zh: '你選擇直接與人對質，又四處閒談是非，結果與同事關係破裂，最後更被解僱。你從此與舊同事斷絕來往，而類似的人事問題，亦在新工作中再度上演。',
      en: 'You burned bridges trying to confront people directly and pulled others into gossip, which led to you getting fired. You stayed no contact with your previous colleagues and have the same problem repeat in your next job.'
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '你汲取過往的教訓並調整工作方式後，終於在工作上獲得正面評價，令你大受鼓舞。',
        en: 'You finally received positive feedback on your work after you learned from past criticisms, and you feel encouraged.'
      },
      reward: 5
    }
  },
  {
    title: {
      zh: '你為項目付出極大心力，卻在會議上遭到嚴厲批評。你開始懷疑自己的能力，覺得自己一無是處。（你明白每份工作都有順逆起伏，並構思方法遠離職場人事糾紛）',
      en: 'Despite putting in tremendous effort in your project, you still receive tough criticism during the meeting, you doubt your ability and feel useless. (You decide that each job has its ups and down and you think of creative strategies to stay far away from workplace politics.)'
    },
    text: {
      zh: '這讓你感到極度失落，質疑自己的能力。若至少有 25 枚金幣，代表你有足夠心理資本調整焦點。',
      en: 'This makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.'
    },
    requirement: 25,
    success: {
      zh: '你提醒自己每份工作總有順境與逆境，從意見中汲取有用的部分，放下負面評價，繼續努力前行。',
      en: 'You reminded yourself that every job has ups and downs. You took what was useful from the feedback, left the rest, and kept going.'
    },
    fail: {
      zh: '自始之後，你變得消極怠工，覺得無論付出多少努力，始終都無法達到別人的要求。',
      en: 'You stopped trying as hard after that, convinced that no amount of effort would ever be enough.'
    },
    reflection: {
      title: {
        zh: '反思時刻',
        en: 'Reflection Moment'
      },
      text: {
        zh: '在你不懈的努力下，上司肯定了你在項目上付出的心血，令你感到受尊重。',
        en: 'Your boss acknowledged the efforts you put in your project after you kept on trying, and you feel respected.'
      },
      reward: 5
    }
  }
];
const chances = [
  {
    zh: '家人在決定調整你的作息時間時，會跟你一起商量，而不是自作主張，讓你感受到被尊重。',
    en: 'Your family included you in the decision to fine-tune your sleep schedule instead of deciding it by yourself, and you feel respected'
  },
  {
    zh: '家人注意到你付出的努力，而不是盲目地將你和兄弟姊妹比較，讓你覺得被欣賞。',
    en: 'Your family noticed how hard you’ve been working instead of comparing you to your sibling, which made you feel appreciated.'
  },
  {
    zh: '家人尊重了你所設定的界線，讓你有一種被理解的感覺。',
    en: 'Your family respected a boundary you set, giving you a sense of being understood.'
  },
  {
    zh: '家人將你的成就和兄弟姊妹作比較，讓你感受到了家庭期望所帶來的壓力。',
    en: 'You felt pressured by family expectations as they compared your achievements to your sibling.'
  },
  {
    zh: '你和家人的爭執讓你感受到極大壓力。',
    en: 'A family disagreement left you feeling stressed.'
  },
  {
    zh: '你投其所好、主動聊起佢哋鍾意嘅話題之後，朋友開始約埋你一齊玩，令你重新感受到同大家嘅連結。',
    en: 'Your friends included you in their activities after you initiated a conversation with them by talking about things they enjoyed, and you feel connected.'
  },
  {
    zh: '朋友就算自己忙到不可開交，都仲特登抽時間關心你、問候你，令你感受到滿滿嘅支持。',
    en: 'A friend spent time to check in on you even while she/he was busy, making you feel supported.'
  },
  {
    zh: '你主動上前自我介紹之後，一班新朋友邀請你一齊聚會，令你自覺融入其中。',
    en: 'A group of new friends invited you to spend time together after you introduced yourself to them and you feel included.'
  },
  {
    zh: '朋友完全無覆你傳過去嘅訊息，令你感到好失望。',
    en: 'Your friend ignored the messages that you sent, which made you feel disappointed.'
  },
  {
    zh: '你嘗試主動搵朋友傾計，但佢哋完全不理不睬、無視你，令你感到非常沮喪同無奈。',
    en: 'Your friends ignored you after you tried to initiate a conversation with them and you feel frustrated.'
  },
  {
    zh: '你汲取過往的教訓並調整工作方式後，終於在工作上獲得正面評價，令你大受鼓舞。',
    en: 'You finally received positive feedback on your work after you learned from past criticisms, and you feel encouraged.'
  },
  {
    zh: '在你不懈的努力下，上司肯定了你在項目上付出的心血，令你感到受尊重。',
    en: 'Your boss acknowledged the efforts you put in your project after you kept on trying, and you feel respected.'
  },
  {
    zh: '即使你不斷更新履歷、投遞無數份工作，但尋找新工作依然處處碰壁，令你感到挫敗。',
    en: 'You faced difficulties finding a new job even though you keep updating your resume and applied to different jobs, causing frustration.'
  },
  {
    zh: '同事不停讓你捲入辦公室政治的漩渦，令你感到很大壓力。',
    en: 'Your colleagues kept pulling you into workplace politics, and you feel pressured.'
  },
  {
    zh: '你汲取了上一次數學測驗未如理想的經驗，今次終於取得理想成績，獲得很大成就感。',
    en: 'You finally received a good grade on your math test after you learned from the mistakes made in the last test that you failed, giving you a sense of achievement.'
  },
  {
    zh: '雖然你成績持續下滑，但老師特意解釋近期考試難度提升，分數退步是正常的情況，更於課堂上讚賞你的努力，令你重拾自信。',
    en: 'Although your grades have been declining, the teacher did mention that the recent exams were harder, which is why it is normal to have a decline. Your teacher then praised your efforts in class, boosting your confidence.'
  },
  {
    zh: '你決定向籃球隊成員請教技術與心得。經過一番苦練，球技有所進步，翌年成功入選球隊。',
    en: 'You decided to ask someone from the basketball team to teach you some tricks and tips, and slowly you got better and got into the team the next year.'
  },
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
    zh: '香港創新心理學會',
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
            showModal(
              uiText.scenarioResultType,
              {
                zh: '你未能成功應對這個情境',
                en: 'You failed to handle the scenario'
              },
              card.fail,
              [
                {
                  label: {
                    zh: '前往反思角',
                    en: 'Go to Reflection Corner'
                  },
                  sub: {
                    zh: '前往反思角並進行反思。',
                    en: 'Proceed to Reflection Corner for reflection.'
                  },
                  onClick: () => moveToReflectionAndReflect(card)
                }
              ]
            );
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
