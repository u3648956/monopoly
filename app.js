const boardTiles = [
  { type: 'start',      name: 'Start Point',       desc: '回合循環起點',       x: 0, y: 9 },
  // --- left (x=0): y=8 → y=0  #1 ~ #9 ---
  { type: 'investment', name: 'Investment',        desc: '長期健康 vs 即時滿足', x: 0, y: 8 },
  { type: 'chance',     name: 'Chance Card',       desc: '獲得正向支持',       x: 0, y: 7 },
  { type: 'investment', name: 'Investment',        desc: '建立韌性選擇',       x: 0, y: 6 },
  { type: 'scenario',   name: 'Scenario',          desc: '檢查 Gold 是否足夠', x: 0, y: 5 },
  { type: 'investment', name: 'Investment',        desc: '照顧自己一次',       x: 0, y: 4 },
  { type: 'chance',     name: 'Chance Card',       desc: '日常恢復資源',       x: 0, y: 3 },
  { type: 'investment', name: 'Investment',        desc: '調整生活節奏',       x: 0, y: 2 },
  { type: 'scenario',   name: 'Scenario',          desc: '心理韌性挑戰',       x: 0, y: 1 },
  { type: 'reflection', name: 'Reflection Corner', desc: '整理內在感受',       x: 0, y: 0 },
  // --- botoom (y=9): x=1 → x=9  #10 ~ #18 ---
  { type: 'special',    name: 'Special Rule',      desc: '前進、停留或獎勵',   x: 1, y: 9 },
  { type: 'investment', name: 'Investment',        desc: '強化心理儲備',       x: 2, y: 9 },
  { type: 'chance',     name: 'Chance Card',       desc: '重新補充狀態',       x: 3, y: 9 },
  { type: 'scenario',   name: 'Scenario',          desc: '承接新的壓力',       x: 4, y: 9 },
  { type: 'reflection', name: 'Reflection Corner', desc: '失敗後修復與整理',   x: 5, y: 9 },
  { type: 'investment', name: 'Investment',        desc: '維持正向習慣',       x: 6, y: 9 },
  { type: 'special',    name: 'Special Rule',      desc: '突發規則效果',       x: 7, y: 9 },
  { type: 'chance',     name: 'Chance Card',       desc: '重新找到方向',       x: 8, y: 9 },
  { type: 'scenario',   name: 'Scenario',          desc: '另一個壓力測試',     x: 9, y: 9 },
  // --- right (x=9): y=8 → y=0  #19 ~ #27 ---
  { type: 'special',    name: 'Special Rule',      desc: '命運的轉折',         x: 9, y: 8 },
  { type: 'investment', name: 'Investment',        desc: '找回生活步調',       x: 9, y: 7 },
  { type: 'chance',     name: 'Chance Card',       desc: '連結支持系統',       x: 9, y: 6 },
  { type: 'scenario',   name: 'Scenario',          desc: '面對不確定性',       x: 9, y: 5 },
  { type: 'reflection', name: 'Reflection Corner', desc: '重新檢視目標',       x: 9, y: 4 },
  { type: 'investment', name: 'Investment',        desc: '接納當下狀態',       x: 9, y: 3 },
  { type: 'chance',     name: 'Chance Card',       desc: '偶遇正向資源',       x: 9, y: 2 },
  { type: 'scenario',   name: 'Scenario',          desc: '自我價值考驗',       x: 9, y: 1 },
  { type: 'reflection', name: 'Reflection Corner', desc: '沉澱與自我對話',     x: 9, y: 0 },
  // --- top (y=0): x=8 → x=1  #28 ~ #35 ---
  { type: 'special',    name: 'Special Rule',      desc: '趣味性變化',         x: 8, y: 0 },
  { type: 'investment', name: 'Investment',        desc: '累積心理資本',       x: 7, y: 0 },
  { type: 'chance',     name: 'Chance Card',       desc: '小確幸的降臨',       x: 6, y: 0 },
  { type: 'scenario',   name: 'Scenario',          desc: '壓力總和測試',       x: 5, y: 0 },
  { type: 'reflection', name: 'Reflection Corner', desc: '更深層次的反思',     x: 4, y: 0 },
  { type: 'investment', name: 'Investment',        desc: '深耕心理土壤',       x: 3, y: 0 },
  { type: 'chance',     name: 'Chance Card',       desc: '機會再次降臨',       x: 2, y: 0 },
  { type: 'scenario',   name: 'Scenario',          desc: '終盤心理考驗',       x: 1, y: 0 }
];
const investments = [{
    title: 'You wake up feeling low energy, you will…',
    a: 'do 5 minutes of gentle stretching',
    b: 'scroll phone on the bed'
}, {
    title: 'You feel overwhelmed by the deadlines, you will…',
    a: 'create a to-do list for today',
    b: 'avoid everything and doomscroll'
}, {
    title: 'You have to sleep early tonight for an important appointment tomorrow, and you feel worried. You will…',
    a: 'practice deep breathing',
    b: 'watch one more episode of drama'
}, {
    title: 'Feeling lonely on a weekend',
    a: 'tiring but rewarding: Call your long-lost friend -> might feel awkward at first but you’re able to make a meaningful connection',
    b: 'Instant: Order junk food and binge-watch a show -> comfort but lower physical agility and motivation'
}, {
    title: 'A friend calls for emotional support but you’re drained',
    a: 'Confront her honestly telling her you are not suitable to listen to her vent right now',
    b: 'Instant gratification: say you’re busy and scroll your phone -> relief now but guilt gonna drain you further'
}, {
    title: 'Your room is messy but you are tired, you will…',
    a: 'Clean a tiny corner for 10 minutes then rest',
    b: 'Ignore the mess and lie in bed'
}, {
    title: 'When you feel stuck in a negative thought loop',
    a: 'write down your thoughts and feelings',
    b: 'blame your negativity on others'
}, {
    title: 'You are too busy to eat lunch at work',
    a: 'Eat a quick and light meal',
    b: 'Skip it entirely'
}, {
    title: 'A friend wants you to help with her project but you have multiple deadlines due next week',
    a: 'Explain her your situation and encourage her to find somebody else to help',
    b: 'Help her with her work while simultaneously finishing yours'
}, {
    title: 'You are having a huge argument with your friend, you will…',
    a: 'calm yourself down',
    b: 'verbally attack her to win the argument'
}];
const scenarios = [
  {
    title: "You failed a math test you've spent a week revising for, you feel defeated and get anxious whenever you see a math question.",
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '這讓你感到極度失落，質疑自己的能力。若 Gold 至少有 10，代表你有足夠心理資本調整焦點。',
    requirement: 10,
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
    text: '你擔心會被嚴厲責備或影響成績。若 Gold 至少有 10，代表你能承受這次挫折。',
    requirement: 10,
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
    text: '關係的變化帶來強烈的不安感。若 Gold 至少有 15，才足以穩住自我價值感。',
    requirement: 15,
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
    text: '關係的變化帶來強烈的不安感。若 Gold 至少有 15，才足以穩住自我價值感。',
    requirement: 15,
    success: 'You reminded yourself that every job has ups and downs. You took what was useful from the feedback, left the rest, and kept going.',
    fail: 'You stopped trying as hard after that, convinced that no amount of effort would ever be enough.',
    reflection: {
      title: 'Join a new interest group',
      text: '你暫時離開壓力源，參加了一個新的興趣小組。在新環境的互動中，你重新肯定了自己的價值，知道自己仍值得被接納。',
      reward: 5
    }
  }
];
const chances = ['你和朋友聊天，重新感到被理解。', '你睡了一個好覺，身心恢復一些。', '你去做運動，壓力稍微釋放。', '你吃了一頓正常的飯，狀態穩定下來。'];
const reflections = ['你主動找學校輔導員聊聊，得到新的應對角度。', '你和帶領者討論後，發現自己不是只能一個人硬撐。', '你把壓抑的情緒說出來，內在沒有那麼混亂了。'];
const generalReflections = [
  {
    title: '自我對話時間',
    text: '你給自己留了一段空白時間，寫下最近的感受，整理了原本紛亂的思緒。',
    reward: 5
  },
  {
    title: '重新檢視目標',
    text: '你和帶領者討論了目前的目標，確認它們是否仍符合你的價值觀，減輕了盲目追求的焦慮。',
    reward: 5
  },
  {
    title: '接納當下的情緒',
    text: '你意識到最近有些疲憊。你允許自己不用總是保持完美，接納了此刻的脆弱。',
    reward: 5
  }
];
const specials = [
  {
    title: 'Move Forward',
    text: '你突然得到一股動力，直接前進 2 格，並觸發該格子的事件。',
    apply: (onComplete) => {
      state.position = (state.position + 2) % boardTiles.length;
      addLog('Special Rule：前進 2 格。');
      updateHUD();       
      setTimeout(() => {
        triggerTile();
      }, 600);
    }
  },
  {
    title: 'Bonus Gold',
    text: '你意外得到一段喘息空間，獲得 5 Gold。',
    apply: (onComplete) => {
      changeGold(5);
      addLog('Special Rule：Bonus +5 Gold。');
      if (onComplete) onComplete(); 
    }
  },
  {
    title: 'Stress Spike',
    text: '壓力突然上升，本回合沒有額外收穫，但也沒有額外損失。',
    apply: (onComplete) => {
      addLog('Special Rule：壓力突增，無額外效果。');
      if (onComplete) onComplete();
    }
  }
];
const state = {
    gold: 5,
    maxGold: 20,
    position: 0,
    round: 1,
    status: 'Playing',
    locked: false
};
const boardGrid = document.getElementById('boardGrid');
const goldValue = document.getElementById('goldValue');
const roundValue = document.getElementById('roundValue');
const positionValue = document.getElementById('positionValue');
const stateValue = document.getElementById('stateValue');
const assetPercent = document.getElementById('assetPercent');
const assetBar = document.getElementById('assetBar');
const atmFill = document.getElementById('atmFill');
const atmValue = document.getElementById('atmValue');
const centerTitle = document.getElementById('centerTitle');
const centerText = document.getElementById('centerText');
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

function renderBoard() {
    const emojiMap = {
        start: '🏠',
        investment: '💪',
        chance: '🎴',
        scenario: '⚡',
        reflection: '🧘',
        special: '🎲'
    };
    boardGrid.innerHTML = '';
    boardTiles.forEach((tile, index) => {
        const cell = document.createElement('article');
        cell.className = `tile ${tile.type}` + (index === state.position ? ' current' : '');
        cell.style.gridColumn = tile.x + 1;
        cell.style.gridRow = tile.y + 1;
        cell.innerHTML = `<span class="tile-icon">${emojiMap[tile.type]}</span><span class="tile-index">#${index}</span><strong class="tile-name">${tile.name}</strong><span class="tile-meta">${tile.desc}</span>`;
        boardGrid.appendChild(cell)
    })
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
    if (state.gold >= state.maxGold) {
        centerTitle.textContent = '心理資產已滿格';
        centerText.textContent = '你已累積足夠的心理資源，能更穩定地回應壓力與挫折。'
    } else {
        centerTitle.textContent = '建立你的心理資產';
        centerText.textContent = 'Investment 負責日常累積，Scenario 檢查承受力，Reflection Corner 在失衡時幫助修復。'
    }
    renderBoard()
}

function showModal(type, title, description, actions) {
    modalType.textContent = type;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalChoices.innerHTML = '';
    actions.forEach(action => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.type = 'button';
        btn.innerHTML = `<strong>${action.label}</strong><span>${action.sub}</span>`;
        btn.addEventListener('click', () => {
            hideModal();
            action.onClick()
        });
        modalChoices.appendChild(btn)
    });
    modal.classList.remove('hidden')
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
    diceHint.textContent = '按下按鈕開始擲骰';
    renderDiceFace(1);
    logList.innerHTML = '';
    addLog('遊戲重設。起始 Gold = 5，目標是累積到 20 Gold。');
    updateHUD()
}

function changeGold(delta) {
    state.gold = Math.max(0, Math.min(state.maxGold, state.gold + delta));
    updateHUD();
    if (state.gold >= state.maxGold) {
        state.status = 'Won';
        updateHUD();
        showModal('Victory', 'Asset Bar 已滿', '你已累積 20 Gold，代表成功建立更穩定的心理支持與自我照顧方式。', [{
            label: '重新開始',
            sub: '回到起始狀態再次體驗流程。',
            onClick: resetGame
        }])
    }
}

function handleInvestment() {
    state.status = 'Investment';
    updateHUD();
    const card = randomItem(investments);
    showModal('Investment', card.title, '請在「長期心理健康」和「即時滿足」之間做選擇。', [{
        label: card.a,
        sub: '建立長期心理健康，+5 Gold，然後進入下一輪。',
        onClick: () => {
            addLog(`Investment：${card.a}，+5 Gold。`);
            changeGold(5);
            if (state.status !== 'Won') nextRound()
        }
    }, {
        label: card.b,
        sub: '即時滿足，Gold 不變，直接進入下一輪。',
        onClick: () => {
            addLog(`Investment：${card.b}，Gold 不變。`);
            nextRound()
        }
    }])
}

function handleInvestment() {
  state.status = 'Investment';
  updateHUD();
  const card = randomItem(investments);

  const optionA = {
    label: card.a,
    sub: '建立長期心理健康，+5 Gold，然後進入下一輪。',
    onClick: () => {
      addLog(`Investment：${card.a}，+5 Gold。`);
      changeGold(5);
      if (state.status !== 'Won') nextRound();
    }
  };

  const optionB = {
    label: card.b,
    sub: '即時滿足，Gold 不變，直接進入下一輪。',
    onClick: () => {
      addLog(`Investment：${card.b}，Gold 不變。`);
      nextRound();
    }
  };

  const shuffledOptions = [optionA, optionB].sort(() => Math.random() - 0.5);

  showModal(
    'Investment', 
    card.title, 
    '請在「長期心理健康」和「即時滿足」之間做選擇。', 
    shuffledOptions
  );
}

function handleChance() {
    state.status = 'Chance';
    updateHUD();
    const card = randomItem(chances);
    showModal('Chance Card', '抽到一張支援卡', card, [{
        label: '獲得 5 Gold',
        sub: '正向資源進帳，進入下一輪。',
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
    `${reflectionContent.text} \n\n你將獲得 ${reflectionContent.reward} Gold，結束後進入下一輪。`,
    [
      {
        label: `完成反思，+${reflectionContent.reward} Gold`,
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
        sub: '系統會判斷你是否有足夠資產承接情境。',
        onClick: () => {
            if (state.gold >= card.requirement) {
                addLog(`Scenario 成功：${card.title}。`);
                showModal('Scenario Result', '你撐住了', card.success, [{
                    label: '進入下一輪',
                    sub: '保持目前 Gold，繼續前進。',
                    onClick: nextRound
                }])
            } else {
                addLog(`Scenario 失敗：${card.title}，Gold 不足，進入 Reflection Corner。`);
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
        addLog('回到 Start Point，本回合沒有額外事件。');
        nextRound();
        return
    }
    if (tile.type === 'investment') return handleInvestment();
    if (tile.type === 'chance') return handleChance();
    if (tile.type === 'scenario') return handleScenario();
    if (tile.type === 'reflection') return handleReflection();
    if (tile.type === 'special') return handleSpecial()
}

function rollDice() {
    if (state.locked || state.status === 'Won') return;
    state.locked = true;
    state.status = 'Rolling';
    updateHUD();
    rollBtn.disabled = true;
    diceCube.classList.add('rolling');
    diceValue.textContent = '?';
    diceHint.textContent = '骰子滾動中：2s';
    let countdown = 2;
    renderDiceFace(Math.floor(Math.random() * 6) + 1);
    const previewInterval = setInterval(() => {
        renderDiceFace(Math.floor(Math.random() * 6) + 1)
    }, 120);
    const countdownInterval = setInterval(() => {
        countdown -= 1;
        if (countdown > 0) {
            diceHint.textContent = `骰子滾動中：${countdown}s`
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
addLog('遊戲開始。你有 5 Gold，目標是把 Asset bar 填滿到 20 Gold。');
updateHUD();