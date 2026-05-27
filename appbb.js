const boardTiles = [{
    type: 'start',
    name: 'Start Point',
    desc: '回合循環起點',
    x: 4,
    y: 4
}, {
    type: 'investment',
    name: 'Investment',
    desc: '長期健康 vs 即時滿足',
    x: 3,
    y: 4
}, {
    type: 'chance',
    name: 'Chance Card',
    desc: '獲得正向支持',
    x: 2,
    y: 4
}, {
    type: 'scenario',
    name: 'Scenario',
    desc: '檢查當前 Gold 是否足夠',
    x: 1,
    y: 4
}, {
    type: 'special',
    name: 'Special Rule',
    desc: '前進、停留或獎勵',
    x: 0,
    y: 4
}, {
    type: 'investment',
    name: 'Investment',
    desc: '建立韌性選擇',
    x: 0,
    y: 3
}, {
    type: 'scenario',
    name: 'Scenario',
    desc: '另一個壓力測試',
    x: 0,
    y: 2
}, {
    type: 'chance',
    name: 'Chance Card',
    desc: '日常恢復資源',
    x: 0,
    y: 1
}, {
    type: 'reflection',
    name: 'Reflection Corner',
    desc: '失敗後修復與整理',
    x: 0,
    y: 0
}, {
    type: 'special',
    name: 'Special Rule',
    desc: '突發規則效果',
    x: 1,
    y: 0
}, {
    type: 'investment',
    name: 'Investment',
    desc: '照顧自己一次',
    x: 2,
    y: 0
}, {
    type: 'scenario',
    name: 'Scenario',
    desc: '承接新的壓力',
    x: 3,
    y: 0
}, {
    type: 'chance',
    name: 'Chance Card',
    desc: '重新補充狀態',
    x: 4,
    y: 0
}, {
    type: 'special',
    name: 'Special Rule',
    desc: '趣味性變化',
    x: 4,
    y: 1
}, {
    type: 'investment',
    name: 'Investment',
    desc: '強化心理儲備',
    x: 4,
    y: 2
}, {
    type: 'scenario',
    name: 'Scenario',
    desc: '終盤壓力考驗',
    x: 4,
    y: 3
}];
const investments = [{
    title: '讀書一整天後，你會？',
    a: '做 10 分鐘呼吸練習',
    b: '一直 doomscrolling'
}, {
    title: '感到很煩躁時，你會？',
    a: '出去走走整理思緒',
    b: '用短影音麻痺自己'
}, {
    title: '壓力一上來時，你會？',
    a: '把問題拆成小步驟',
    b: '先逃避再說'
}];
const scenarios = [{
    title: '沒有考進理想的大學',
    text: '這讓你很失落。若 Gold 至少有 10，代表你能把焦點轉向其他可能性。',
    requirement: 10,
    success: '你慢慢把目光轉向其他院校與科系，重新建立方向感。',
    fail: '你暫時被負面情緒困住，先到 Reflection Corner 整理自己。'
}, {
    title: '朋友突然與你疏遠',
    text: '關係變化帶來不安。若 Gold 至少有 10，代表你仍能維持基本穩定。',
    requirement: 10,
    success: '你嘗試溝通，也找其他支持者陪自己度過不安。',
    fail: '你感到很受傷，先進入 Reflection Corner 回復。'
}, {
    title: '學業與工作壓力同時爆表',
    text: '長期疲累讓你快撐不住。若 Gold 至少有 15，才比較能穩住節奏。',
    requirement: 15,
    success: '你重新分配精力與優先順序，狀態逐步回穩。',
    fail: '壓力超出負荷，先到 Reflection Corner 找回平衡。'
}];
const chances = ['你和朋友聊天，重新感到被理解。', '你睡了一個好覺，身心恢復一些。', '你去做運動，壓力稍微釋放。', '你吃了一頓正常的飯，狀態穩定下來。'];
const reflections = ['你主動找學校輔導員聊聊，得到新的應對角度。', '你和帶領者討論後，發現自己不是只能一個人硬撐。', '你把壓抑的情緒說出來，內在沒有那麼混亂了。'];
const specials = [{
    title: 'Move Forward',
    text: '你突然得到一股動力，直接前進 2 格。',
    apply: () => {
        state.position = (state.position + 2) % boardTiles.length;
        addLog('Special Rule：前進 2 格。');
    }
}, {
    title: 'Bonus Gold',
    text: '你意外得到一段喘息空間，獲得 5 Gold。',
    apply: () => {
        changeGold(5);
        addLog('Special Rule：Bonus +5 Gold。');
    }
}, {
    title: 'Stress Spike',
    text: '壓力突然上升，本回合沒有額外收穫，但也沒有額外損失。',
    apply: () => {
        addLog('Special Rule：壓力突增，無額外效果。');
    }
}];
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
    boardGrid.innerHTML = '';
    boardTiles.forEach((tile, index) => {
        const cell = document.createElement('article');
        cell.className = `tile ${tile.type}` + (index === state.position ? ' current' : '');
        cell.style.gridColumn = tile.x + 1;
        cell.style.gridRow = tile.y + 1;
        cell.innerHTML = `<span class="tile-index">#${index}</span><strong class="tile-name">${tile.name}</strong><span class="tile-meta">${tile.desc}</span>`;
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

function handleReflection() {
    state.status = 'Reflection';
    updateHUD();
    const card = randomItem(reflections);
    showModal('Reflection Corner', '進入反思角', `${card} 你會獲得 5 Gold，結束後直接進入下一輪。`, [{
        label: '完成反思，+5 Gold',
        sub: 'Reflection Corner 結束後進入 next round。',
        onClick: () => {
            addLog(`Reflection Corner：${card} +5 Gold。`);
            changeGold(5);
            if (state.status !== 'Won') nextRound()
        }
    }])
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
                handleReflection()
            }
        }
    }])
}

function handleSpecial() {
    state.status = 'Special';
    updateHUD();
    const card = randomItem(specials);
    showModal('Special Rule', card.title, card.text, [{
        label: '套用效果',
        sub: '執行規則後進入下一輪。',
        onClick: () => {
            card.apply();
            updateHUD();
            nextRound()
        }
    }])
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
    diceHint.textContent = '骰子滾動中：3s';
    let countdown = 3;
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