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
    title: 'You wake up feeling low energy, you will…',
    options: [
      {
        label: 'do 5 minutes of gentle stretching',
        sub: '穩定投入，累積心理資本。\nA steady action that builds your mental assets.',
        image: './assets/investment-1-a.jpeg',
        reward: 5
      },
      {
        label: 'scroll phone on the bed',
        sub: '即時舒服，但沒有真正恢復狀態。\nFeels easier now, but does not truly restore your state.',
        image: './assets/investment-1-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: 'You feel overwhelmed by the deadlines, you will…',
    options: [
      {
        label: 'create a to-do list for today',
        sub: '先整理思绪，再逐步处理压力。\nOrganising the day helps reduce pressure step by step.',
        image: './assets/investment-2-a.jpeg',
        reward: 5
      },
      {
        label: 'avoid everything and doomscroll',
        sub: '短暂逃避会让焦虑继续累积。\nAvoidance feels instant, but the stress keeps building.',
        image: './assets/investment-2-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: 'You have to sleep early tonight for an important appointment tomorrow, and you feel worried. You will…',
    options: [
      {
        label: 'practice deep breathing',
        sub: '让身体先慢下来，比较容易入睡。\nCalming your body first makes rest easier.',
        image: './assets/investment-3-a.jpeg',
        reward: 5
      },
      {
        label: 'watch one more episode of drama',
        sub: '拖延睡觉会让明天更难面对。\nDelaying sleep makes tomorrow harder.',
        image: './assets/investment-3-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: 'Feeling lonely on a weekend',
    options: [
      {
        label: 'tiring but rewarding: Call your long-lost friend -> might feel awkward at first but you’re able to make a meaningful connection',
        sub: '关系需要投入，但会带来真实连结。\nA little effort can rebuild real connection.',
        image: './assets/investment-4-a.jpeg',
        reward: 5
      },
      {
        label: 'Instant: Order junk food and binge-watch a show -> comfort but lower physical agility and motivation',
        sub: '舒服是即时的，但恢复是有限的。\nComfort is instant, but the recovery is limited.',
        image: './assets/investment-4-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: 'A friend calls for emotional support but you’re drained',
    options: [
      {
        label: 'Confront her honestly telling her you are not suitable to listen to her vent right now',
        sub: '诚实设立界线，也是在保护自己。\nHonest boundaries protect both sides.',
        image: './assets/investment-5-a.jpeg',
        reward: 5
      },
      {
        label: 'Instant gratification: say you’re busy and scroll your phone -> relief now but guilt gonna drain you further',
        sub: '躲开当下压力，但内耗可能更重。\nYou avoid the pressure now, but guilt may linger.',
        image: './assets/investment-5-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: 'Your room is messy but you are tired, you will…',
    options: [
      {
        label: 'Clean a tiny corner for 10 minutes then rest',
        sub: '小行动也能重新建立掌控感。\nA small action can restore a sense of control.',
        image: './assets/investment-6-a.jpeg',
        reward: 5
      },
      {
        label: 'Ignore the mess and lie in bed',
        sub: '问题暂时没消失，环境压力会继续堆积。\nThe mess stays there and keeps adding pressure.',
        image: './assets/investment-6-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: 'When you feel stuck in a negative thought loop',
    options: [
      {
        label: 'write down your thoughts and feelings',
        sub: '写下来能帮你整理情绪。\nWriting helps organise your emotions.',
        image: './assets/investment-7-a.jpeg',
        reward: 5
      },
      {
        label: 'blame your negativity on others',
        sub: '情绪转移出去，不等于真的处理了。\nProjecting the feeling does not resolve it.',
        image: './assets/investment-7-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: 'You are too busy to eat lunch at work',
    options: [
      {
        label: 'Eat a quick and light meal',
        sub: '先补充能量，状态才撑得住。\nA quick meal helps you keep going steadily.',
        image: './assets/investment-8-a.jpeg',
        reward: 5
      },
      {
        label: 'Skip it entirely',
        sub: '省了时间，但身体会慢慢透支。\nYou save time now, but your body pays later.',
        image: './assets/investment-8-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: 'A friend wants you to help with her project but you have multiple deadlines due next week',
    options: [
      {
        label: 'Explain her your situation and encourage her to find somebody else to help',
        sub: '清楚表达限制，是成熟的选择。\nExplaining your limits is a healthy choice.',
        image: './assets/investment-9-a.jpeg',
        reward: 5
      },
      {
        label: 'Help her with her work while simultaneously finishing yours',
        sub: '看似两边都顾到，但很容易把自己压垮。\nTrying to do both may overload you.',
        image: './assets/investment-9-b.jpeg',
        reward: 0
      }
    ]
  },
  {
    title: 'You are having a huge argument with your friend, you will…',
    options: [
      {
        label: 'calm yourself down',
        sub: '先稳住自己，才有机会把话说清楚。\nRegulating yourself first makes repair possible.',
        image: './assets/investment-10-a.jpeg',
        reward: 5
      },
      {
        label: 'verbally attack her to win the argument',
        sub: '赢了当下，不代表关系没受伤。\nWinning the moment can still damage the relationship.',
        image: './assets/investment-10-b.jpeg',
        reward: 0
      }
    ]
  }
];

const scenarios = [
  {
    title: "You failed a math test you've spent a week revising for, you feel defeated and get anxious whenever you see a math question.",
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: "You restructured your thoughts by telling yourself that one failed test does not mean you're bad at math forever. It is an opportunity to learn from your mistakes. You eventually regained confidence in your mathematical ability.",
    fail: 'You deliberately avoided math due to your fear of failure. The anxiety built up until every new question felt terrifying.',
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: 'Your grades in your favourite subject, Chinese, are declining. You once thought you possessed a certain gift for language, but now, facing this reality, you begin to doubt your own ability.',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: "Your Chinese grades declined, and you doubted your gift for language. But you told yourself that a dip in grades doesn't erase your ability — it just means you need to adjust your approach. You kept working, and your confidence slowly returned.",
    fail: "Your Chinese grades declined, and you began doubting your gift for language. You avoided practicing because you feared proving you weren't talented. The doubt grew until every assignment felt like a test of your worth, not your skill.",
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: 'You cannot pass the audition for the school basketball team and think you lose your chance to enter in the future.',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: 'You failed the audition and felt crushed. But you stayed with the disappointment, kept practicing anyway, and eventually made the team the next year.',
    fail: "You failed the audition and believed you'd lost your only chance. You quit basketball entirely. Every time you saw a court, you felt the same sting of that single failure.",
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: "Your best friend is angry at you but wouldn't tell you the reason, you try to talk to her but she refuses to communicate.",
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: "You managed to calm her down with patience and honesty and she eventually told you the reason she's been distant.",
    fail: 'You kept pushing and talked only about your own feelings which then made her even angrier and more guarded.',
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: 'You feel left out of the friend group. You try to initiate a conversation but nobody listens to you.',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: 'You managed to get their attention but talking about things they enjoyed too.',
    fail: 'You tried to speak again but they ignored you and continued with their own conversation.',
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: 'You get ghosted by the same friend multiple times. You think the friend does not care about you anymore. ',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: 'You spoke to the friend and asked about what they ghosted you. They explained to you that it was because she/he was busy early on. ',
    fail: 'You ended up ghosting your friend too and eventually distanced yourself. ',
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: 'You would love to meet new friends but are anxious to do so.',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: 'You decided to go to an event, introduced yourself and eventually met a bunch of friends.',
    fail: 'You kept overthinking and avoiding conversations, leaving you more anxious than before.',
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: 'Your father is upset with your sleep schedule. You explain that you work better at night but your father insists that you should sleep earlier. (Understand his perspective and reevaluate the situation, try to strike a balance between your and your father’s pov)',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: 'You both decided to find a middle ground where together you set plans; earlier bedtime on school nights, flexible hours on days you need to work late.',
    fail: 'You refused to compromise and your father heard it as disrespect so the fight escalates instead of solving anything. ',
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: 'Your mother has recently been diagnosed with dementia, and has become increasingly clumsy and agitated but insists she lives alone.',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: "You accepted that you couldn't control her choices, but you could control your response. You visited daily, installed safety rails, and let her keep her independence while quietly preparing for the day she'd need more help.",
    fail: "You avoided the hard conversations, pretended everything was fine, and let her live alone. Months later, you got the call, she'd fallen and couldn't get up. The guilt of waiting too long became heavier than the diagnosis itself.",
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: 'Your parents keep comparing you to your sibling, saying that you are not good enough. ',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: 'You refused to carry their measuring stick. You focused on your own path, found people who valued you as you are, and let their words become background noise, not your truth.',
    fail: 'You started believing them. No matter what you achieved, you felt second-best. Years later, you still hear their voice every time you succeed, not pride, just the echo of "not enough."',
    reflection: {
      title: 'Meet school counsellor',
      text: '你主動約見學校輔導員。在引導下，你整理了失落感，也看見除了這所大學外，還有其他能幫助你達成職業目標的路徑。',
      reward: 5
    }
  },
  {
    title: 'You enter the final round of the interview and it is between you and the other candidate. The company chooses another candidate at last.',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: "You told yourself it proved you weren't good enough. You stopped applying anywhere, convinced no one would ever choose you.",
    fail: 'You sat with disappointment, then updated your resume and applied elsewhere. Three months later, you found a better fit.',
    reflection: {
      title: 'Discuss with a mentor / teacher',
      text: '你與信任的導師討論。他們分享了自己過去失敗的經驗，讓你知道犯錯是成長的一部分，幫助你放下完美主義。',
      reward: 5
    }
  },
  {
    title: 'Workplace politics have become increasingly unbearable but finding a new job would be difficult under a declining economy.',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: 'You turned the stress into a plan by constantly updating your resume and negotiating your workload so you could survive in the current environment.',
    fail: 'You burned bridges trying to confront people directly and pulled others into gossip which led to you getting fired. ',
    reflection: {
      title: 'Join a new interest group',
      text: '你暫時離開壓力源，參加了一個新的興趣小組。在新環境的互動中，你重新肯定了自己的價值，知道自己仍值得被接納。',
      reward: 5
    }
  },
  {
    title: 'Despite putting in tremendous effort in your project, you still receive tough criticism during the meeting, you doubt your ability and feel useless. (You decide that each job has its ups and down and you think of creative strategies to stay far away from workplace politics.)',
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 25，代表你有足夠心理資本調整焦點。\n\nThis makes you feel deeply defeated and question your own ability. Having at least 25 Gold means you have enough psychological capital to refocus.',
    requirement: 25,
    success: 'You reminded yourself that every job has ups and downs. You took what was useful from the feedback, left the rest, and kept going.',
    fail: 'You stopped trying as hard after that, convinced that no amount of effort would ever be enough.',
    reflection: {
      title: 'Join a new interest group',
      text: '你暫時離開壓力源，參加了一個新的興趣小組。在新環境的互動中，你重新肯定了自己的價值，知道自己仍值得被接納。',
      reward: 5
    }
  }
];
const chances = [
  '你和朋友聊天，重新感到被理解。\nYou chatted with a friend and felt understood again.',
  '你睡了一個好覺，身心恢復一些。\nYou had a good night\'s sleep and feel somewhat restored.',
  '你去做運動，壓力稍微釋放。\nYou exercised and released some stress.',
  '你吃了一頓正常的飯，狀態穩定下來。\nYou had a proper meal and your state stabilised.'
];
const generalReflections = [
  {
    title: '自我對話時間 / Self-Reflection Time',
    text: '你給自己留了一段空白時間，寫下最近的感受，整理了原本紛亂的思緒。\nYou gave yourself some quiet time, wrote down your recent feelings, and sorted through your scattered thoughts.',
    reward: 5
  },
  {
    title: '重新檢視目標 / Reassess Goals',
    text: '你和帶領者討論了目前的目標，確認它們是否仍符合你的價值觀，減輕了盲目追求的焦慮。\nYou discussed your current goals with your mentor and confirmed that they still align with your values, reducing the anxiety of pursuing blindly.',
    reward: 5
  },
  {
    title: '接納當下的情緒 / Accept Emotions',
    text: '你意識到最近有些疲憊。你允許自己不用總是保持完美，接納了此刻的脆弱。\nYou realised you were feeling tired recently. You allowed yourself to not always be perfect, and accepted this moment of fragility.',
    reward: 5
  }
];
const specials = [
  {
    title: 'Move Forward',
    text: '你突然得到一股動力，直接前進 2 格，並觸發該格子的事件。\nYou suddenly gained momentum and moved forward 2 spaces, triggering the event on that space.',
    apply: (onComplete) => {
      state.position = (state.position + 2) % boardTiles.length;
      addLog('Special Rule：前進 2 格。\n Special Rule：Move Forward 2 Spaces.');
      updateHUD();       
      setTimeout(() => {
        triggerTile();
      }, 600);
    }
  },
  {
    title: 'Bonus Gold',
    text: '你意外得到一段喘息空間，獲得 5 Gold。\nYou received 5 Gold unexpectedly.',
    apply: (onComplete) => {
      changeGold(5);
      addLog('Special Rule：Bonus +5 Gold。');
      if (onComplete) onComplete(); 
    }
  },
  {
    title: 'Stress Spike',
    text: '壓力突然上升，本回合沒有額外收穫，但也沒有額外損失。\nYou received no additional rewards or penalties.',
    apply: (onComplete) => {
      addLog('Special Rule：壓力突增，無額外效果。\n Special Rule：Stress Spike.');
      if (onComplete) onComplete();
    }
  }
];
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
    item.textContent = message;
    logList.prepend(item);
    while (logList.children.length > 8) {
        logList.removeChild(logList.lastChild)
    }
}

function updateHUD() {
    const ratio = Math.max(0, Math.min(100, state.gold / state.maxGold * 100));
    goldValue.textContent = state.gold;
    roundValue.textContent = state.round;
    positionValue.textContent = state.position;
    stateValue.textContent = state.status;
    assetPercent.textContent = `${Math.round(ratio)}%`;
    assetBar.style.width = `${ratio}%`;
    atmFill.style.width = `${ratio}%`;
    atmValue.textContent = `${state.gold} / ${state.maxGold} Gold`;

    updatePlayerToken()
}

function showModal(type, title, desc, choices = []) {
  modalType.textContent = type;       // id="modalType"（eyebrow标签）
  modalTitle.textContent = title;     // id="modalTitle"
  modalDescription.innerHTML = desc.replace(/\n/g, '<br>');  // id="modalDescription"
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
          <img src="${choice.image}" alt="${choice.label}" class="choice-card-image">
        </div>
        <div class="choice-card-body">
          <strong>${choice.label}</strong>
          ${choice.sub ? `<span>${choice.sub.replace(/\n/g, '<br>')}</span>` : ''}
        </div>
      `;
    } else {
      button.className = 'choice-btn';
      button.innerHTML = `
        <strong>${choice.label}</strong>
        ${choice.sub ? `<span>${choice.sub.replace(/\n/g, '<br>')}</span>` : ''}
      `;
    }
    button.addEventListener('click', () => {
      hideModal();
      choice.onClick();
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
    diceHint.textContent = '按下按鈕開始擲骰 / Press Roll Button to Roll Dice';
    renderDiceFace(1);
    logList.innerHTML = '';
    addLog('遊戲重設。起始 Gold = 5，目標是累積到 30 Gold。');
    updateHUD()
}

function changeGold(delta) {
    state.gold = Math.max(0, Math.min(state.maxGold, state.gold + delta));
    updateHUD();
    if (state.gold >= state.maxGold) {
        state.status = 'Won';
        updateHUD();
        showModal('Victory', 'Asset Bar 已滿', '你已累積 30 Gold，代表成功建立更穩定的心理支持與自我照顧方式。\n You have accumulated 30 Gold, which means you have successfully built a more stable mental support and self-care system.', [{
            label: '重新開始Restart',
            sub: '回到起始狀態再次體驗流程。/n Restart the game from scratch.',
            onClick: resetGame
        }])
    }
}

function handleInvestment() {
  state.status = 'Investment';
  updateHUD();

  const card = randomItem(investments);

  showModal(
    'Investment',
    card.title,
    '請選擇你的行動。\nChoose your action.',
    card.options.map((option) => ({
      label: option.label,
      sub: option.sub,
      image: option.image,
      onClick: () => {
        if (option.reward > 0) {
          addLog(`Investment：你選擇了「${option.label}」，Gold +${option.reward}。`);
          changeGold(option.reward);
          if (state.status !== 'Won') nextRound();
        } else {
          addLog(`Investment：你選擇了「${option.label}」，Gold 沒有增加。`);
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
    showModal('Chance Card', '抽到一張支援卡\n You drew a Support Card', card, [{
        label: '獲得5枚金幣 \n Get 5 Gold',
        sub: '正向資源進帳，進入下一輪。\n Positive resource account, proceed to the next round.',
        onClick: () => {
            addLog(`Chance Card：${card} +5 Gold。`);
            changeGold(5);
            if (state.status !== 'Won') nextRound()
        }
    }])
}

function handleReflection(scenarioCard = null) {
  state.status = 'Reflection';
  updateHUD();

  let reflectionContent;

  if (scenarioCard) {
    reflectionContent = scenarioCard.reflection;
  } else {
    reflectionContent = randomItem(generalReflections);
  }

  showModal(
    'Reflection Corner',
    reflectionContent.title,
    `${reflectionContent.text} \n\n你將獲得 ${reflectionContent.reward} 枚金幣，結束後進入下一輪。\nYou will receive ${reflectionContent.reward} Gold after this round ends.`,
    [
      {
        label: `完成反思，+${reflectionContent.reward} 枚金幣 \n Finish Reflection Corner, +${reflectionContent.reward} Gold`,
        sub: 'Reflection Corner 結束後進入 next round。',
        onClick: () => {
          addLog(`Reflection Corner：${reflectionContent.title} +${reflectionContent.reward} Gold。`);
          changeGold(reflectionContent.reward);
          if (state.status !== 'Won') nextRound();
        }
      }
    ]
  );
}

function handleScenario() {
    state.status = 'Scenario';
    updateHUD();
    const card = randomItem(scenarios);
    showModal('Scenario', card.title, card.text, [{
        label: `檢查 Gold（需求 ${card.requirement}）`,
        sub: '系統會判斷你是否有足夠資產承接情境。\n System will check if you have enough assets to take on the situation.',
        onClick: () => {
            if (state.gold >= card.requirement) {
                addLog(`Scenario 成功：${card.title}。`);
                showModal('Scenario Result', '你撐住了', card.success, [{
                    label: '進入下一輪\n Proceed to the next round',
                    sub: '保持目前 Gold，繼續前進。\n Keep moving forward without any special events.',
                    onClick: nextRound
                }])
            } else {
                addLog(`Scenario 失敗：${card.title}，Gold 不足，進入 Reflection Corner。\n Scenario failed: ${card.title}, Gold is not enough, proceed to Reflection Corner.`);
                handleReflection(card)
            }
        }
    }])
}

function handleSpecial() {
  state.status = 'Special';
  updateHUD();
  const card = randomItem(specials);

  showModal('Special Rule', card.title, card.text, [
    {
      label: '套用效果',
      sub: '執行規則。',
      onClick: () => {
        card.apply(() => {
          updateHUD();
          nextRound();
        });
      }
    }
  ]);
}

function triggerTile() {
  const tile = boardTiles[state.position];

  if (tile.type === 'start') {
    addLog('回到 Start Point，本回合沒有額外事件。\n Back to Start Point, no special event in this round.');
    nextRound();
    return;
  }
  
  if (tile.type === 'blank') {
    addLog(`停在 ${tile.name}！繼續保持前進，本回合無特殊事件。\n Stuck at ${tile.name}, no special event in this round.`);
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
    diceHint.textContent = '骰子滾動中：2s\n Rolling...';
    let countdown = 2;
    renderDiceFace(Math.floor(Math.random() * 6) + 1);
    const previewInterval = setInterval(() => {
        renderDiceFace(Math.floor(Math.random() * 6) + 1)
    }, 120);
    const countdownInterval = setInterval(() => {
        countdown -= 1;
        if (countdown > 0) {
            diceHint.textContent = `骰子滾動中：${countdown}s \n Rolling...`
        }
    }, 1000);
    setTimeout(() => {
        clearInterval(previewInterval);
        clearInterval(countdownInterval);
        const result = Math.floor(Math.random() * 6) + 1;
        renderDiceFace(result);
        diceCube.classList.remove('rolling');
        diceValue.textContent = result;
        diceHint.textContent = `結果已確定：${result} 點`;
        state.position = (state.position + result) % boardTiles.length;
        state.status = 'Moving';
        updateHUD();
        addLog(`Round ${state.round}：擲出 ${result} 點，移動到 #${state.position} ${boardTiles[state.position].name}。`);
        rollBtn.disabled = false;
        setTimeout(triggerTile, 420)
    }, 2000)
}
rollBtn.addEventListener('click', rollDice);
renderDiceFace(1);
addLog('遊戲開始。你有 5 枚金幣，目標是把 Asset bar 填滿到 30 枚金幣。\n Game starts. You have 5 Gold, your goal is to fill up the Asset bar to 30 Gold.');
updateHUD();