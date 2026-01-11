// ====== SOUND SYSTEM ======
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let soundEnabled = true;

// Function to create simple tones for sound effects
function createSound(frequency, duration, type = 'sine') {
    if (!soundEnabled) return;
    
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    } catch (e) {
        console.log("Web Audio API not supported:", e);
    }
}

// Predefined sound effects using Web Audio API
const soundEffects = {
    correct: () => {
        // Happy ascending tones
        createSound(523.25, 0.3); // C5
        setTimeout(() => createSound(659.25, 0.3), 150); // E5
        setTimeout(() => createSound(783.99, 0.5), 300); // G5
    },
    
    wrong: () => {
        // Sad descending tones
        createSound(783.99, 0.2); // G5
        setTimeout(() => createSound(659.25, 0.2), 100); // E5
        setTimeout(() => createSound(523.25, 0.4), 200); // C5
    },
    
    purchase: () => {
        // Cash register-like sound
        createSound(1318.51, 0.1, 'square'); // E6
        setTimeout(() => createSound(1046.50, 0.2, 'square'), 100); // C6
        setTimeout(() => createSound(1567.98, 0.3, 'square'), 200); // G6
    },
    
    tagna: () => {
        // Magical sparkle sound
        createSound(1046.50, 0.1); // C6
        setTimeout(() => createSound(1318.51, 0.1), 50); // E6
        setTimeout(() => createSound(1567.98, 0.1), 100); // G6
        setTimeout(() => createSound(2093.00, 0.2), 150); // C7
    },
    
    click: () => {
        // Simple click
        createSound(1000, 0.05, 'sawtooth');
    },
    
    start: () => {
        // Game start fanfare
        createSound(523.25, 0.2); // C5
        setTimeout(() => createSound(659.25, 0.2), 100); // E5
        setTimeout(() => createSound(783.99, 0.2), 200); // G5
        setTimeout(() => createSound(1046.50, 0.3), 300); // C6
    },
    
    levelup: () => {
        // Level up sound
        createSound(659.25, 0.2); // E5
        setTimeout(() => createSound(783.99, 0.2), 100); // G5
        setTimeout(() => createSound(987.77, 0.2), 200); // B5
        setTimeout(() => createSound(1318.51, 0.3), 300); // E6
    },
    
    gameover: () => {
        // Game over sound
        createSound(523.25, 0.3); // C5
        setTimeout(() => createSound(493.88, 0.3), 150); // B4
        setTimeout(() => createSound(440.00, 0.5), 300); // A4
    },
    
    mystery: () => {
        // Mystery box sound
        createSound(659.25, 0.1, 'triangle'); // E5
        setTimeout(() => createSound(830.61, 0.1, 'triangle'), 50); // G#5
        setTimeout(() => createSound(987.77, 0.1, 'triangle'), 100); // B5
        setTimeout(() => createSound(1318.51, 0.2, 'triangle'), 150); // E6
    },
    
    cat: () => {
        // Cat sound effect
        createSound(261.63, 0.1); // C4
        setTimeout(() => createSound(329.63, 0.1), 50); // E4
        setTimeout(() => createSound(261.63, 0.2), 100); // C4
    },
    
    redeem: () => {
        // Redeem code sound
        createSound(1046.50, 0.1); // C6
        setTimeout(() => createSound(1318.51, 0.1), 50); // E6
        setTimeout(() => createSound(1567.98, 0.1), 100); // G6
        setTimeout(() => createSound(2093.00, 0.1), 150); // C7
        setTimeout(() => createSound(2637.02, 0.2), 200); // E7
    },
    
    phoenix: () => {
        // Phoenix resurrection sound
        createSound(261.63, 0.2); // C4
        setTimeout(() => createSound(329.63, 0.2), 100); // E4
        setTimeout(() => createSound(392.00, 0.2), 200); // G4
        setTimeout(() => createSound(523.25, 0.3), 300); // C5
        setTimeout(() => createSound(659.25, 0.4), 400); // E5
    },
    
    timeTravel: () => {
        // Time travel sound
        createSound(2093.00, 0.1, 'sawtooth'); // C7
        setTimeout(() => createSound(1567.98, 0.1, 'sawtooth'), 50); // G6
        setTimeout(() => createSound(1318.51, 0.1, 'sawtooth'), 100); // E6
        setTimeout(() => createSound(1046.50, 0.2, 'sawtooth'), 150); // C6
        setTimeout(() => createSound(783.99, 0.3, 'sawtooth'), 200); // G5
    },
    
    meowl: () => {
        // Meowl special sound
        createSound(392.00, 0.1, 'triangle'); // G4
        setTimeout(() => createSound(493.88, 0.1, 'triangle'), 50); // B4
        setTimeout(() => createSound(587.33, 0.1, 'triangle'), 100); // D5
        setTimeout(() => createSound(698.46, 0.1, 'triangle'), 150); // F5
        setTimeout(() => createSound(783.99, 0.2, 'triangle'), 200); // G5
        setTimeout(() => createSound(932.33, 0.3, 'triangle'), 250); // A#5
    },
    
    diamond: () => {
        // Diamond collect sound
        createSound(2093.00, 0.1, 'sine'); // C7
        setTimeout(() => createSound(2637.02, 0.1, 'sine'), 50); // E7
        setTimeout(() => createSound(3135.96, 0.2, 'sine'), 100); // G7
    },
    
    cosmic: () => {
        // Cosmic sound
        createSound(2093.00, 0.1, 'sine'); // C7
        setTimeout(() => createSound(2637.02, 0.1, 'sine'), 50); // E7
        setTimeout(() => createSound(3135.96, 0.1, 'sine'), 100); // G7
        setTimeout(() => createSound(4186.01, 0.2, 'sine'), 150); // C8
    },
    
    draw: () => {
        // Draw/spin sound
        createSound(523.25, 0.5, 'sawtooth'); // C5
        setTimeout(() => createSound(659.25, 0.5, 'sawtooth'), 100); // E5
        setTimeout(() => createSound(783.99, 0.5, 'sawtooth'), 200); // G5
        setTimeout(() => createSound(1046.50, 0.5, 'sawtooth'), 300); // C6
    }
};

// Function to play sound with fallback
function playSound(soundName) {
    if (!soundEnabled) return;
    
    // First try to play the Web Audio API version
    if (soundEffects[soundName]) {
        soundEffects[soundName]();
    }
}

// Function to toggle sound
function toggleSound() {
    soundEnabled = !soundEnabled;
    return soundEnabled;
}

// ====== GAME STATE ======
const gameState = {
    // Core Game State
    level: 0,
    score: 0,
    gold: 50,
    diamonds: 0,
    lives: 3,
    maxLives: 3,
    streak: 0,
    highScore: 0,
    maxLevels: 100,
    gameActive: false,
    goldPosition: -1,
    optionsCount: 2,
    revealedOptions: [],
    selectedOption: null,
    
    // Timer State
    gameTimer: 600, // 10 minutes in seconds
    timerInterval: null,
    timerActive: false,
    
    // Player Name
    playerName: '',
    
    // Power-ups
    activePowerUps: {
        goldrush: false,
        hintUsed: false,
        tagnaUsed: false
    },
    
    // Permanent Power-ups
    permanentPowerUps: {
        unlimitedHints: false,
        streakShield: false,
        levelSkipper: false
    },
    
    // Extensions
    levelExtension: false,
    megaLevelExtension: false,
    
    // Purchased Items
    purchasedItems: [],
    
    // Customization
    equippedAvatar: 'default',
    equippedFrame: 'default',
    equippedPet: 'none',
    
    // Themes
    purchasedThemes: [],
    activeTheme: 'default',
    themeBonuses: {
        earth: 1.05,
        sea: 1.10,
        sky: 1.15,
        space: 1.20,
        luckycat: 1.25,
        cosmic: 1.30
    },
    
    // Redeem Codes
    redeemedCodes: [],
    redeemCodes: {
        'EDMARKISADMIN': {
            reward: 'lucky_cat_pet',
            name: 'Lucky Cat Pet',
            description: 'Unlocks the limited edition Lucky Cat pet'
        },
        'ILOVEMEOWL': {
            reward: 'meowl_pet',
            name: 'Meowl Pet',
            description: 'Unlocks the GOD TIER Meowl pet',
            godTier: true
        },
        'IAMWINNER': {
            reward: 'cosmic_draw',
            name: 'Cosmic Pet Draw',
            description: 'Unlocks the cosmic pet draw!'
        }
    },
    
    // New Pets Special Properties
    petAbilities: {
        meowl: {
            extraAttempts: 5,
            extraAttemptsUsed: 0,
            healthRestored: false
        },
        rainbow_phoenix: {
            resurrectionUsed: false,
            resurrectionChance: 0.5 // 50%
        },
        time_travel_turtle: {
            rewindUsed: false,
            rewindAvailable: true
        },
        // Cosmic Pets
        cosming_dragon: {
            lastConversion: 0,
            lastDiamondTime: 0,
            lastGoldTime: 0,
            lastStreakTime: 0,
            levelSkipChance: 0.5,
            upgraded: false
        },
        elder_god_butterfly: {
            lastGoldTime: 0,
            streakShield: true
        },
        diamond_centipede: {
            lastMultiplier: 0
        },
        humanoid_gold_seeker: {
            goldMultiplier: 1
        },
        carlito_cocofanto: {
            optionReducer: true,
            revealChance: 0.4,
            lastGoldTime: 0
        },
        tungtung_sahur: {
            reviveChance: 0.5,
            lastDiamondTime: 0
        },
        crazy_dog: {
            lastCheckTime: 0,
            perfectStreak: 5
        },
        croco_boy: {
            meditationActive: false,
            meditationEndTime: 0,
            perfectStreak: 20
        },
        // New Shop Pets
        jester_magician: {
            lastGoldTime: 0,
            goldInterval: 15000 // 15 seconds
        },
        '3dm4rk': {
            lastDiamondTime: 0,
            infiniteOptions: 2,
            timeRewindChance: 0.5
        },
        entity: {
            shapeshiftTo: null,
            lastScoreTime: 0,
            lastDiamondTime: 0,
            lastGoldTime: 0,
            lastStreakTime: 0,
            autoPilotChance: 0.5
        }
    },
    
    // Lucky Cat
    luckyCatInterval: null,
    lastLuckyCatGoldTime: 0,
    
    // Statistics
    totalCorrect: 0,
    totalWrong: 0,
    totalGoldEarned: 0,
    totalGames: 0,
    highestStreak: 0,
    totalPets: 0,
    mysteryBoxesOpened: 0,
    
    // Sound - use our Web Audio API flag
    soundEnabled: true,
    musicEnabled: false,
    musicVolume: 0.5,
    
    // Pet streak tracking
    petStreakCounter: 0,
    
    // Game flags
    isSelecting: false,
    
    // Music state
    musicInitialized: false,
    
    // Diamond generation tracking
    lastDiamondCheckGold: 50,
    diamondCheckInterval: null,
    
    // Cosmic pet tracking
    cosmicDrawUsed: false
};

// Update the global soundEnabled flag when game state changes
Object.defineProperty(gameState, 'soundEnabled', {
    get() {
        return soundEnabled;
    },
    set(value) {
        soundEnabled = value;
    }
});

// ====== SHOP ITEMS DATABASE ======
const shopItems = {
    avatars: [
        { id: 'default', name: 'Basic', price: 0, icon: 'fas fa-user', color: '#fff', rarity: 'common' },
        { id: 'knight', name: 'Golden Knight', price: 100, icon: 'fas fa-chess-knight', color: '#FFD700', rarity: 'rare' },
        { id: 'wizard', name: 'Mystic Wizard', price: 250, icon: 'fas fa-hat-wizard', color: '#9c88ff', rarity: 'epic' },
        { id: 'robot', name: 'Gold Bot', price: 500, icon: 'fas fa-robot', color: '#4dabf7', rarity: 'legendary' }
    ],
    
    frames: [
        { id: 'default', name: 'Simple Frame', price: 0, border: '2px solid #aaa', background: null, rarity: 'common' },
        { id: 'gold', name: 'Gold Frame', price: 50, border: '3px solid #FFD700', background: null, rarity: 'rare' },
        { id: 'diamond', name: 'Diamond Frame', price: 150, border: '4px solid #4dabf7', background: 'linear-gradient(45deg, #4dabf7, #339af0)', rarity: 'epic' },
        { id: 'royal', name: 'Royal Frame', price: 300, border: '5px solid #cc5de8', background: 'linear-gradient(45deg, #cc5de8, #be4bdb)', rarity: 'legendary' }
    ],
    
    pets: [
        { 
            id: 'none', 
            name: 'No Pet', 
            price: 0, 
            icon: 'fas fa-ban', 
            color: '#999', 
            effect: 'No bonus', 
            rarity: 'common',
            bonusType: 'none',
            bonusAmount: 0,
            bonusCondition: 0
        },
        { 
            id: 'golden_hamster', 
            name: 'Golden Hamster', 
            price: 100, 
            icon: 'fas fa-paw', 
            color: '#FFD700', 
            effect: '+5 Gold every 3 streaks', 
            rarity: 'rare',
            bonusType: 'streak',
            bonusAmount: 5,
            bonusCondition: 3
        },
        { 
            id: 'lucky_rabbit', 
            name: 'Lucky Rabbit', 
            price: 200, 
            icon: 'fas fa-rabbit', 
            color: '#ff6b6b', 
            effect: '+5 Gold every 2 streaks', 
            rarity: 'epic',
            bonusType: 'streak',
            bonusAmount: 5,
            bonusCondition: 2
        },
        { 
            id: 'golden_eagle', 
            name: 'Golden Eagle', 
            price: 300, 
            icon: 'fas fa-dove', 
            color: '#8B4513', 
            effect: '+10 Gold on every correct guess', 
            rarity: 'epic',
            bonusType: 'correct',
            bonusAmount: 10,
            bonusCondition: 1
        },
        { 
            id: 'music_dragon', 
            name: 'Music Dragon', 
            price: 1250, 
            icon: 'fas fa-dragon', 
            color: '#9c88ff', 
            effect: '50% luck boost + Background music', 
            rarity: 'legendary',
            bonusType: 'luck',
            bonusAmount: 0.5,
            bonusCondition: 0
        },
        { 
            id: 'phoenix', 
            name: 'Golden Phoenix', 
            price: 3500, 
            icon: 'fas fa-fire', 
            color: '#FF4500', 
            effect: 'x100 Gold every 3 streaks', 
            rarity: 'legendary',
            bonusType: 'streak',
            bonusAmount: 100,
            bonusCondition: 3
        },
        // Lucky Cat - Limited Edition (via redeem code only)
        { 
            id: 'lucky_cat', 
            name: 'Lucky Cat', 
            price: 0, 
            icon: 'fas fa-cat', 
            color: '#ff6b9d', 
            effect: '+200 Gold every 5 seconds + Reduces options to 2', 
            rarity: 'limited',
            bonusType: 'passive',
            bonusAmount: 200,
            bonusCondition: 5,
            isRedeemOnly: true
        },
        // NEW: Meowl - God Tier Pet
        { 
            id: 'meowl', 
            name: 'Meowl', 
            price: 300000, 
            icon: 'fas fa-paw', 
            color: '#00ff00', 
            effect: 'Prediction Safeguard (5 extra attempts) + Auto health restore', 
            rarity: 'godtier',
            bonusType: 'protection',
            bonusAmount: 0,
            bonusCondition: 0,
            godTier: true
        },
        // NEW: Rainbow Phoenix - Limited Edition
        { 
            id: 'rainbow_phoenix', 
            name: 'Rainbow Phoenix', 
            price: 2, // 2 diamonds
            icon: 'fas fa-fire', 
            color: '#ff0000', 
            effect: '50% resurrection chance + 25% gold bonus', 
            rarity: 'limited',
            bonusType: 'resurrection',
            bonusAmount: 0.25, // 25% gold bonus
            bonusCondition: 0,
            priceInDiamonds: true
        },
        // NEW: Time Travel Turtle - God Tier
        { 
            id: 'time_travel_turtle', 
            name: 'Time Travel Turtle', 
            price: 25, // 25 diamonds
            icon: 'fa-solid fa-clock', 
            color: '#00ffcc', 
            effect: 'Time rewind (undo wrong guess) + 30% gold bonus', 
            rarity: 'godtier',
            bonusType: 'rewind',
            bonusAmount: 0.30, // 30% gold bonus
            bonusCondition: 0,
            priceInDiamonds: true,
            godTier: true
        },
        // NEW: Cosmic Pets (via redeem code draw)
        { 
            id: 'cosming_dragon', 
            name: 'Cosming Dragon', 
            price: 0, 
            icon: 'fas fa-dragon', 
            color: '#8a2be2', 
            effect: 'Convert gold to diamonds + 50% time rewind + cosmic effects', 
            rarity: 'cosmic',
            bonusType: 'cosmic',
            bonusAmount: 0,
            bonusCondition: 0,
            isCosmic: true,
            drawChance: 0.01 // 1%
        },
        { 
            id: 'elder_god_butterfly', 
            name: 'Elder God Butterfly', 
            price: 0, 
            icon: 'fas fa-butterfly', 
            color: '#9370db', 
            effect: '1k gold/5s + Never-fail streak shield', 
            rarity: 'cosmic',
            bonusType: 'ultra_rare',
            bonusAmount: 1000,
            bonusCondition: 5,
            isCosmic: true,
            drawChance: 0.02 // 2%
        },
        { 
            id: 'diamond_centipede', 
            name: 'Diamond Centipede', 
            price: 0, 
            icon: 'fas fa-bug', 
            color: '#1E90FF', 
            effect: 'Multiply diamonds by 10 when winning', 
            rarity: 'cosmic',
            bonusType: 'ultra_rare',
            bonusAmount: 10,
            bonusCondition: 0,
            isCosmic: true,
            drawChance: 0.02 // 2%
        },
        { 
            id: 'humanoid_gold_seeker', 
            name: 'Humanoid Gold Seeker', 
            price: 0, 
            icon: 'fas fa-user-astronaut', 
            color: '#FFD700', 
            effect: 'Gold × streak multiplier on win', 
            rarity: 'cosmic',
            bonusType: 'godly',
            bonusAmount: 1,
            bonusCondition: 0,
            isCosmic: true,
            drawChance: 0.50 // 50%
        },
        { 
            id: 'carlito_cocofanto', 
            name: 'Carlito Cocofanto', 
            price: 0, 
            icon: 'fas fa-crown', 
            color: '#ff6b9d', 
            effect: '50% 2 options + 40% reveal gold + streak×diamond gold/10s', 
            rarity: 'cosmic',
            bonusType: 'legendary',
            bonusAmount: 0.5,
            bonusCondition: 0,
            isCosmic: true,
            drawChance: 0.50 // 50%
        },
        { 
            id: 'tungtung_sahur', 
            name: 'Tungtung Sahur', 
            price: 0, 
            icon: 'fas fa-brain', 
            color: '#00ffcc', 
            effect: '50% revive + 0.1 diamond/30s', 
            rarity: 'cosmic',
            bonusType: 'brainrot',
            bonusAmount: 0.1,
            bonusCondition: 30,
            isCosmic: true,
            drawChance: 0.50 // 50%
        },
        { 
            id: 'crazy_dog', 
            name: 'Crazy Dog', 
            price: 0, 
            icon: 'fas fa-dog', 
            color: '#ff4500', 
            effect: 'Score × gold = 0.3% pet chance every 5 streak', 
            rarity: 'cosmic',
            bonusType: 'godly',
            bonusAmount: 0.003,
            bonusCondition: 5,
            isCosmic: true,
            drawChance: 0.50 // 50%
        },
        { 
            id: 'croco_boy', 
            name: 'Croco Boy', 
            price: 0, 
            icon: 'fas fa-alligator', 
            color: '#32cd32', 
            effect: 'Perfect 20 streak = streak×diamond×100 diamonds', 
            rarity: 'cosmic',
            bonusType: 'godly',
            bonusAmount: 100,
            bonusCondition: 20,
            isCosmic: true,
            drawChance: 0.50 // 50%
        },
        // NEW: Shop Pets
        { 
            id: 'jester_magician', 
            name: 'Jester Magician', 
            price: 100000, 
            icon: 'fas fa-hat-wizard', 
            color: '#9c88ff', 
            effect: '10 streak: life×diamond = gold/15s', 
            rarity: 'legendary',
            bonusType: 'magic',
            bonusAmount: 1,
            bonusCondition: 10,
            disableAutoConvert: true
        },
        { 
            id: '3dm4rk', 
            name: '3DM4RK', 
            price: 300000, 
            icon: 'fas fa-robot', 
            color: '#00ff00', 
            effect: 'Infinite 2 options + x100 gold + 50% rewind + random diamonds', 
            rarity: 'cosmic',
            bonusType: 'cosmic_shop',
            bonusAmount: 100,
            bonusCondition: 0,
            isCosmic: true
        },
        { 
            id: 'entity', 
            name: 'Entity', 
            price: 1000000, 
            icon: 'fas fa-ghost', 
            color: '#8a2be2', 
            effect: 'Shapeshift + OP bonuses + 50% auto-play', 
            rarity: 'cosmic',
            bonusType: 'entity',
            bonusAmount: 9999,
            bonusCondition: 0,
            isCosmic: true,
            priceInDiamonds: false
        }
    ],
    
    themes: [
        {
            id: 'earth',
            name: 'Earth Theme',
            price: 3500,
            icon: 'fas fa-leaf',
            color: '#228B22',
            effect: '+5% Gold bonus',
            rarity: 'rare'
        },
        {
            id: 'sea',
            name: 'Sea Theme',
            price: 4500,
            icon: 'fas fa-water',
            color: '#1E90FF',
            effect: '+10% Gold bonus',
            rarity: 'epic'
        },
        {
            id: 'sky',
            name: 'Sky Theme',
            price: 7500,
            icon: 'fas fa-cloud',
            color: '#87CEEB',
            effect: '+15% Gold bonus',
            rarity: 'epic'
        },
        {
            id: 'space',
            name: 'Space Theme',
            price: 10000,
            icon: 'fas fa-star',
            color: '#9c88ff',
            effect: '+20% Gold bonus',
            rarity: 'legendary'
        },
        {
            id: 'cosmic',
            name: 'Cosmic Theme',
            price: 50,
            icon: 'fas fa-meteor',
            color: '#8a2be2',
            effect: '+30% Gold bonus',
            rarity: 'cosmic',
            priceInDiamonds: true
        }
    ]
};

// Cosmic Pets for draw
const cosmicPets = [
    'cosming_dragon',
    'elder_god_butterfly',
    'diamond_centipede',
    'humanoid_gold_seeker',
    'carlito_cocofanto',
    'tungtung_sahur',
    'crazy_dog',
    'croco_boy'
];

// Mystery Box rewards
const mysteryBoxRewards = {
    epic: [
        { type: 'gold', amount: 50, name: '50 Gold', icon: 'fas fa-coins', color: '#FFD700' },
        { type: 'gold', amount: 100, name: '100 Gold', icon: 'fas fa-coins', color: '#FFD700' },
        { type: 'life', amount: 1, name: 'Extra Life', icon: 'fas fa-heart', color: '#ff6b6b' },
        { type: 'hint', amount: 3, name: '3 Free Hints', icon: 'fas fa-lightbulb', color: '#51cf66' },
        { type: 'streak', amount: 5, name: '+5 Streak Bonus', icon: 'fas fa-bolt', color: '#FFA500' }
    ],
    legendary: [
        { type: 'gold', amount: 500, name: '500 Gold', icon: 'fas fa-coins', color: '#FFD700' },
        { type: 'gold', amount: 1000, name: '1000 Gold', icon: 'fas fa-coins', color: '#FFD700' },
        { type: 'life', amount: 3, name: '3 Extra Lives', icon: 'fas fa-heart', color: '#ff6b6b' },
        { type: 'permanent', item: 'streakShield', name: 'Streak Shield', icon: 'fas fa-shield-alt', color: '#4dabf7' },
        { type: 'pet', petId: 'golden_hamster', name: 'Golden Hamster Pet', icon: 'fas fa-paw', color: '#FFD700' }
    ],
    cosmic: [
        { type: 'pet', petId: 'cosming_dragon', name: 'Cosming Dragon', icon: 'fas fa-dragon', color: '#8a2be2', chance: 0.003 },
        { type: 'gold', amount: 0.1, name: '0.1 Gold', icon: 'fas fa-coins', color: '#FFD700', chance: 0.2 },
        { type: 'gold', amount: 5000, name: '5000 Gold', icon: 'fas fa-coins', color: '#FFD700', chance: 0.2 },
        { type: 'deduction', amount: 'all', name: 'Cosmic Holly Stone', icon: 'fas fa-gem', color: '#ff0000', description: 'Deduction of all gold!', chance: 0.1 },
        { type: 'diamonds', amount: 5, name: '5 Diamonds', icon: 'fas fa-gem', color: '#1E90FF', chance: 0.2 },
        { type: 'pet', petId: 'elder_god_butterfly', name: 'Elder God Butterfly', icon: 'fas fa-butterfly', color: '#9370db', chance: 0.001 },
        { type: 'gold', amount: 10000, name: '10000 Gold', icon: 'fas fa-coins', color: '#FFD700', chance: 0.1 },
        { type: 'theme', themeId: 'cosmic', name: 'Cosmic Theme', icon: 'fas fa-meteor', color: '#8a2be2', chance: 0.005 }
    ]
};

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', function() {
    // Load saved game state
    loadGameState();
    
    // Check if player name is set
    if (!gameState.playerName) {
        document.getElementById('welcome-modal').style.display = 'flex';
    } else {
        document.getElementById('player-name-display').textContent = gameState.playerName;
        initGame();
    }
    
    // Setup event listeners
    setupEventListeners();
    updateMusicControls();
    
    // Initialize audio context on first user interaction
    initializeAudio();
    
    // Apply saved theme
    applyTheme(gameState.activeTheme);
    
    // Initialize shop items
    loadShopItems();
    
    // Check if Lucky Cat should be shown
    checkLuckyCatDisplay();
    
    // Start diamond generation check
    startDiamondGenerationCheck();
    
    // Update max levels display
    updateMaxLevels();
});

function initializeAudio() {
    // Create audio context on first user interaction
    const initAudio = () => {
        try {
            // Resume audio context
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            console.log("Audio context initialized");
            
            // Remove event listeners
            document.removeEventListener('click', initAudio);
            document.removeEventListener('keydown', initAudio);
            document.removeEventListener('touchstart', initAudio);
        } catch (e) {
            console.log("Audio context initialization failed:", e);
        }
    };
    
    // Add event listeners for user interaction
    document.addEventListener('click', initAudio);
    document.addEventListener('keydown', initAudio);
    document.addEventListener('touchstart', initAudio);
}

function loadGameState() {
    const savedName = localStorage.getItem('gtgPlayerName');
    if (savedName) gameState.playerName = savedName;
    
    const savedGold = localStorage.getItem('gtgGold');
    if (savedGold) gameState.gold = parseInt(savedGold);
    
    const savedDiamonds = localStorage.getItem('gtgDiamonds');
    if (savedDiamonds) gameState.diamonds = parseFloat(savedDiamonds);
    
    const savedHighScore = localStorage.getItem('gtgHighScore');
    if (savedHighScore) gameState.highScore = parseInt(savedHighScore);
    
    const savedTotalGames = localStorage.getItem('gtgTotalGames');
    if (savedTotalGames) gameState.totalGames = parseInt(savedTotalGames);
    
    const savedTotalCorrect = localStorage.getItem('gtgTotalCorrect');
    if (savedTotalCorrect) gameState.totalCorrect = parseInt(savedTotalCorrect);
    
    const savedTotalWrong = localStorage.getItem('gtgTotalWrong');
    if (savedTotalWrong) gameState.totalWrong = parseInt(savedTotalWrong);
    
    const savedTotalGold = localStorage.getItem('gtgTotalGoldEarned');
    if (savedTotalGold) gameState.totalGoldEarned = parseInt(savedTotalGold);
    
    const savedHighestStreak = localStorage.getItem('gtgHighestStreak');
    if (savedHighestStreak) gameState.highestStreak = parseInt(savedHighestStreak);
    
    const savedPurchased = localStorage.getItem('gtgPurchasedItems');
    if (savedPurchased) gameState.purchasedItems = JSON.parse(savedPurchased);
    
    const savedAvatar = localStorage.getItem('gtgEquippedAvatar');
    if (savedAvatar) gameState.equippedAvatar = savedAvatar;
    
    const savedFrame = localStorage.getItem('gtgEquippedFrame');
    if (savedFrame) gameState.equippedFrame = savedFrame;
    
    const savedPet = localStorage.getItem('gtgEquippedPet');
    if (savedPet) gameState.equippedPet = savedPet;
    
    const savedSound = localStorage.getItem('gtgSoundEnabled');
    if (savedSound !== null) soundEnabled = savedSound === 'true';
    
    const savedMusic = localStorage.getItem('gtgMusicEnabled');
    if (savedMusic !== null) gameState.musicEnabled = savedMusic === 'true';
    
    const savedMusicVolume = localStorage.getItem('gtgMusicVolume');
    if (savedMusicVolume) gameState.musicVolume = parseFloat(savedMusicVolume);
    
    const savedMysteryBoxes = localStorage.getItem('gtgMysteryBoxesOpened');
    if (savedMysteryBoxes) gameState.mysteryBoxesOpened = parseInt(savedMysteryBoxes);
    
    const savedThemes = localStorage.getItem('gtgPurchasedThemes');
    if (savedThemes) gameState.purchasedThemes = JSON.parse(savedThemes);
    
    const savedActiveTheme = localStorage.getItem('gtgActiveTheme');
    if (savedActiveTheme) gameState.activeTheme = savedActiveTheme;
    
    const savedRedeemedCodes = localStorage.getItem('gtgRedeemedCodes');
    if (savedRedeemedCodes) gameState.redeemedCodes = JSON.parse(savedRedeemedCodes);
    
    const savedCosmicDrawUsed = localStorage.getItem('gtgCosmicDrawUsed');
    if (savedCosmicDrawUsed) gameState.cosmicDrawUsed = savedCosmicDrawUsed === 'true';
    
    const savedMegaExtension = localStorage.getItem('gtgMegaLevelExtension');
    if (savedMegaExtension) gameState.megaLevelExtension = savedMegaExtension === 'true';
    
    // Calculate total pets
    gameState.totalPets = gameState.purchasedItems.filter(item => 
        shopItems.pets.some(pet => pet.id === item && pet.id !== 'none')
    ).length;
    
    // Load pet abilities state
    const savedPetAbilities = localStorage.getItem('gtgPetAbilities');
    if (savedPetAbilities) {
        const loadedAbilities = JSON.parse(savedPetAbilities);
        // Merge with existing structure
        Object.keys(loadedAbilities).forEach(petId => {
            if (gameState.petAbilities[petId]) {
                gameState.petAbilities[petId] = {...gameState.petAbilities[petId], ...loadedAbilities[petId]};
            } else {
                gameState.petAbilities[petId] = loadedAbilities[petId];
            }
        });
    }
    
    // Update last diamond check gold
    gameState.lastDiamondCheckGold = gameState.gold;
    
    // Update max levels
    updateMaxLevels();
}

function saveGameState() {
    localStorage.setItem('gtgPlayerName', gameState.playerName);
    localStorage.setItem('gtgGold', gameState.gold);
    localStorage.setItem('gtgDiamonds', gameState.diamonds);
    localStorage.setItem('gtgHighScore', gameState.highScore);
    localStorage.setItem('gtgTotalGames', gameState.totalGames);
    localStorage.setItem('gtgTotalCorrect', gameState.totalCorrect);
    localStorage.setItem('gtgTotalWrong', gameState.totalWrong);
    localStorage.setItem('gtgTotalGoldEarned', gameState.totalGoldEarned);
    localStorage.setItem('gtgHighestStreak', gameState.highestStreak);
    localStorage.setItem('gtgPurchasedItems', JSON.stringify(gameState.purchasedItems));
    localStorage.setItem('gtgEquippedAvatar', gameState.equippedAvatar);
    localStorage.setItem('gtgEquippedFrame', gameState.equippedFrame);
    localStorage.setItem('gtgEquippedPet', gameState.equippedPet);
    localStorage.setItem('gtgSoundEnabled', soundEnabled);
    localStorage.setItem('gtgMusicEnabled', gameState.musicEnabled);
    localStorage.setItem('gtgMusicVolume', gameState.musicVolume);
    localStorage.setItem('gtgMysteryBoxesOpened', gameState.mysteryBoxesOpened);
    localStorage.setItem('gtgPurchasedThemes', JSON.stringify(gameState.purchasedThemes));
    localStorage.setItem('gtgActiveTheme', gameState.activeTheme);
    localStorage.setItem('gtgRedeemedCodes', JSON.stringify(gameState.redeemedCodes));
    localStorage.setItem('gtgPetAbilities', JSON.stringify(gameState.petAbilities));
    localStorage.setItem('gtgCosmicDrawUsed', gameState.cosmicDrawUsed);
    localStorage.setItem('gtgMegaLevelExtension', gameState.megaLevelExtension);
}

// ====== TIMER SYSTEM ======
function startGameTimer() {
    // Clear existing timer
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    // Reset timer to 10 minutes
    gameState.gameTimer = 600; // 600 seconds = 10 minutes
    gameState.timerActive = true;
    
    // Show timer display
    document.getElementById('timer-display').style.display = 'block';
    updateTimerDisplay();
    
    // Start countdown
    gameState.timerInterval = setInterval(() => {
        if (gameState.gameActive && gameState.timerActive) {
            gameState.gameTimer--;
            updateTimerDisplay();
            
            // Check if timer reached 0
            if (gameState.gameTimer <= 0) {
                clearInterval(gameState.timerInterval);
                gameState.timerActive = false;
                showTimerModal();
            }
            
            // Flash timer when under 1 minute
            if (gameState.gameTimer <= 60) {
                document.getElementById('timer-display').style.animation = 'timerPulse 0.5s infinite alternate';
            }
        }
    }, 1000);
}

function stopGameTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerActive = false;
    }
    document.getElementById('timer-display').style.display = 'none';
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.gameTimer / 60);
    const seconds = gameState.gameTimer % 60;
    document.getElementById('timer-value').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function showTimerModal() {
    // Stop the game
    gameState.gameActive = false;
    gameState.isSelecting = false;
    
    // Stop all effects
    stopBackgroundMusic();
    stopLuckyCatInterval();
    
    // Show timer modal
    document.getElementById('timer-modal').style.display = 'flex';
    
    // Play game over sound
    playSound('gameover');
    
    // Save game state
    saveGameState();
}

// ====== DIAMONDS CURRENCY SYSTEM ======
function startDiamondGenerationCheck() {
    // Clear existing interval
    if (gameState.diamondCheckInterval) {
        clearInterval(gameState.diamondCheckInterval);
    }
    
    // Check for diamond generation every 5 seconds
    gameState.diamondCheckInterval = setInterval(() => {
        generateDiamondsFromGold();
        applyPetPassiveEffects();
    }, 5000);
}

function generateDiamondsFromGold() {
    const goldIncrease = gameState.gold - gameState.lastDiamondCheckGold;
    
    if (goldIncrease > 0) {
        // Calculate diamonds based on gold: 0.5 diamonds per 100,000 gold
        const diamondsToAdd = (goldIncrease / 100000) * 0.5;
        
        if (diamondsToAdd >= 0.01) { // Minimum 0.01 diamonds to add
            gameState.diamonds += diamondsToAdd;
            gameState.lastDiamondCheckGold = gameState.gold;
            
            // Update display
            updateDisplays();
            
            // Show diamond effect for significant gains
            if (diamondsToAdd >= 0.1) {
                showDiamondEffect(diamondsToAdd);
            }
            
            saveGameState();
        }
    }
    
    // Also check total gold for diamonds
    const totalDiamondsFromGold = Math.floor(gameState.gold / 200000); // 1 diamond per 200,000 gold
    const bonusDiamonds = totalDiamondsFromGold * 0.1; // 10% bonus
    
    if (bonusDiamonds > 0 && !gameState.diamondBonusGiven) {
        gameState.diamonds += bonusDiamonds;
        gameState.diamondBonusGiven = true;
        showNotification(`Gold milestone reached! +${bonusDiamonds.toFixed(2)} diamonds bonus!`, 'success');
        updateDisplays();
        saveGameState();
    }
}

function showDiamondEffect(amount) {
    const effect = document.createElement('div');
    effect.className = 'diamond-effect';
    effect.innerHTML = `<i class="fas fa-gem"></i> +${amount.toFixed(2)}`;
    effect.style.left = `${Math.random() * 80 + 10}%`;
    effect.style.top = `${Math.random() * 50 + 25}%`;
    
    document.body.appendChild(effect);
    
    // Play diamond sound
    playSound('diamond');
    
    setTimeout(() => {
        effect.remove();
    }, 2000);
}

// ====== WELCOME SYSTEM ======
function setupWelcomeSystem() {
    const saveNameBtn = document.getElementById('save-name-btn');
    const playerNameInput = document.getElementById('player-name-input');
    const welcomeModal = document.getElementById('welcome-modal');
    
    if (!saveNameBtn) return;
    
    saveNameBtn.addEventListener('click', function() {
        const name = playerNameInput.value.trim();
        if (name) {
            gameState.playerName = name;
            localStorage.setItem('gtgPlayerName', name);
            document.getElementById('player-name-display').textContent = name;
            welcomeModal.style.display = 'none';
            initGame();
        } else {
            playerNameInput.placeholder = "Please enter your name!";
            playerNameInput.style.borderColor = "var(--danger)";
            setTimeout(() => {
                playerNameInput.style.borderColor = "var(--theme-primary)";
                playerNameInput.placeholder = "Enter your name...";
            }, 1000);
        }
    });
    
    playerNameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            saveNameBtn.click();
        }
    });
}

// ====== REDEEM CODE SYSTEM ======
function setupRedeemSystem() {
    const redeemBtn = document.getElementById('redeem-btn');
    const submitRedeemBtn = document.getElementById('submit-redeem-btn');
    const redeemInput = document.getElementById('redeem-code-input');
    const closeRedeemBtn = document.getElementById('close-redeem-btn');
    const redeemModal = document.getElementById('redeem-modal');
    const closeGodTierBtn = document.getElementById('close-god-tier-btn');
    const godTierModal = document.getElementById('god-tier-modal');
    const closeCosmicDrawBtn = document.getElementById('close-cosmic-draw-btn');
    const cosmicDrawModal = document.getElementById('cosmic-draw-modal');
    const drawCosmicPetBtn = document.getElementById('draw-cosmic-pet-btn');
    
    if (!redeemBtn) return;
    
    // Open redeem modal
    redeemBtn.addEventListener('click', function() {
        playSound('click');
        redeemModal.style.display = 'flex';
        redeemInput.focus();
    });
    
    // Submit redeem code
    submitRedeemBtn.addEventListener('click', function() {
        const code = redeemInput.value.trim().toUpperCase();
        if (code) {
            processRedeemCode(code);
        } else {
            showNotification('Please enter a redeem code!', 'error');
        }
    });
    
    // Submit on Enter key
    redeemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitRedeemBtn.click();
        }
    });
    
    // Close modal
    closeRedeemBtn.addEventListener('click', function() {
        redeemModal.style.display = 'none';
        redeemInput.value = '';
    });
    
    // Close god tier modal
    if (closeGodTierBtn) {
        closeGodTierBtn.addEventListener('click', function() {
            godTierModal.style.display = 'none';
            loadShopItems(); // Refresh shop to show new pet
        });
    }
    
    // Close cosmic draw modal
    if (closeCosmicDrawBtn) {
        closeCosmicDrawBtn.addEventListener('click', function() {
            cosmicDrawModal.style.display = 'none';
            loadShopItems(); // Refresh shop
        });
    }
    
    // Draw cosmic pet
    if (drawCosmicPetBtn) {
        drawCosmicPetBtn.addEventListener('click', function() {
            drawCosmicPet();
        });
    }
    
    // Close on background click
    redeemModal.addEventListener('click', function(e) {
        if (e.target === this) {
            redeemModal.style.display = 'none';
            redeemInput.value = '';
        }
    });
    
    if (godTierModal) {
        godTierModal.addEventListener('click', function(e) {
            if (e.target === this) {
                godTierModal.style.display = 'none';
                loadShopItems(); // Refresh shop
            }
        });
    }
    
    if (cosmicDrawModal) {
        cosmicDrawModal.addEventListener('click', function(e) {
            if (e.target === this) {
                cosmicDrawModal.style.display = 'none';
                loadShopItems(); // Refresh shop
            }
        });
    }
}

function processRedeemCode(code) {
    // Check if code has already been redeemed
    if (gameState.redeemedCodes.includes(code)) {
        showNotification('This code has already been redeemed!', 'error');
        return;
    }
    
    // Check if code exists
    const redeemInfo = gameState.redeemCodes[code];
    if (!redeemInfo) {
        showNotification('Invalid redeem code!', 'error');
        document.getElementById('redeem-code-input').classList.add('shake');
        setTimeout(() => {
            document.getElementById('redeem-code-input').classList.remove('shake');
        }, 500);
        return;
    }
    
    // Process valid code
    playSound('redeem');
    gameState.redeemedCodes.push(code);
    
    // Process rewards
    switch(redeemInfo.reward) {
        case 'lucky_cat_pet':
            if (!gameState.purchasedItems.includes('lucky_cat')) {
                gameState.purchasedItems.push('lucky_cat');
                gameState.totalPets++;
                showNotification('Lucky Cat pet unlocked! Check Pets tab to claim!', 'success');
            } else {
                showNotification('You already have the Lucky Cat pet!', 'info');
            }
            break;
            
        case 'meowl_pet':
            if (!gameState.purchasedItems.includes('meowl')) {
                // Show god tier unlock modal
                document.getElementById('god-tier-modal').style.display = 'flex';
                showNotification('GOD TIER PET UNLOCKED! Check Pets tab!', 'success');
                
                // Add to redeemed codes but not purchased yet (player needs to claim)
                // The pet will be available in shop for claiming
            } else {
                showNotification('You already have the Meowl pet!', 'info');
            }
            break;
            
        case 'cosmic_draw':
            if (!gameState.cosmicDrawUsed) {
                // Show cosmic draw modal
                document.getElementById('cosmic-draw-modal').style.display = 'flex';
                showNotification('Cosmic pet draw unlocked!', 'success');
                createCosmicWheel();
            } else {
                showNotification('You have already used your cosmic draw!', 'info');
            }
            break;
    }
    
    // Close modal and update shop
    document.getElementById('redeem-modal').style.display = 'none';
    document.getElementById('redeem-code-input').value = '';
    
    // Update shop to show unlocked pets
    loadShopItems();
    
    // Save game state
    saveGameState();
    
    // Show special notification
    showGoldEffect(0, `${redeemInfo.name} Unlocked!`);
}

function createCosmicWheel() {
    const wheel = document.getElementById('cosmic-wheel');
    wheel.innerHTML = '';
    
    // Create wheel sections for each cosmic pet
    const petCount = cosmicPets.length;
    const angle = 360 / petCount;
    
    cosmicPets.forEach((petId, index) => {
        const pet = shopItems.pets.find(p => p.id === petId);
        if (!pet) return;
        
        const section = document.createElement('div');
        section.className = 'cosmic-wheel-section';
        section.style.transform = `rotate(${index * angle}deg)`;
        section.style.background = `linear-gradient(45deg, ${pet.color}22, ${pet.color}44)`;
        section.style.color = pet.color;
        section.innerHTML = `<i class="${pet.icon}"></i>`;
        section.title = pet.name;
        
        wheel.appendChild(section);
    });
    
    // Add center
    const center = document.createElement('div');
    center.className = 'cosmic-wheel-center';
    center.innerHTML = '<i class="fas fa-dice"></i>';
    wheel.appendChild(center);
}

function drawCosmicPet() {
    if (gameState.cosmicDrawUsed) {
        showNotification('You have already used your cosmic draw!', 'error');
        return;
    }
    
    // Play draw sound
    playSound('draw');
    
    // Determine which pet is won based on chances
    let random = Math.random();
    let selectedPet = null;
    let cumulativeChance = 0;
    
    // Calculate cumulative chances
    for (const petId of cosmicPets) {
        const pet = shopItems.pets.find(p => p.id === petId);
        if (pet && pet.drawChance) {
            cumulativeChance += pet.drawChance;
            if (random <= cumulativeChance) {
                selectedPet = pet;
                break;
            }
        }
    }
    
    // Fallback to random pet if no selection
    if (!selectedPet) {
        const randomIndex = Math.floor(Math.random() * cosmicPets.length);
        selectedPet = shopItems.pets.find(p => p.id === cosmicPets[randomIndex]);
    }
    
    // Mark draw as used
    gameState.cosmicDrawUsed = true;
    
    // Show cosmic effect
    const effect = document.createElement('div');
    effect.className = 'cosmic-draw-effect';
    effect.innerHTML = `<i class="${selectedPet.icon}"></i>`;
    effect.style.color = selectedPet.color;
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 2000);
    
    // Show result
    document.getElementById('cosmic-result').style.display = 'block';
    document.getElementById('cosmic-pet-name').textContent = selectedPet.name;
    document.getElementById('cosmic-pet-description').textContent = selectedPet.effect;
    
    // Add pet to inventory
    if (!gameState.purchasedItems.includes(selectedPet.id)) {
        gameState.purchasedItems.push(selectedPet.id);
        gameState.totalPets++;
        
        // Auto-equip the pet
        setTimeout(() => {
            equipItem(selectedPet.id, 'pets');
            showNotification(`You won the ${selectedPet.name}! Equipped automatically!`, 'success');
        }, 1000);
    } else {
        // If already owned, give bonus diamonds
        gameState.diamonds += 10;
        showNotification(`You already have ${selectedPet.name}! +10 diamonds instead!`, 'info');
    }
    
    // Update displays
    updateDisplays();
    loadShopItems();
    
    // Save game state
    saveGameState();
    
    // Play cosmic sound
    playSound('cosmic');
}

function checkLuckyCatDisplay() {
    // Show Lucky Cat in shop if redeemed but not purchased yet
    // (For display purposes in the shop)
}

// ====== LUCKY CAT PET SYSTEM ======
function startLuckyCatPassiveGold() {
    // Clear any existing interval
    if (gameState.luckyCatInterval) {
        clearInterval(gameState.luckyCatInterval);
    }
    
    // Start passive gold generation
    gameState.luckyCatInterval = setInterval(() => {
        if (gameState.gameActive && gameState.equippedPet === 'lucky_cat') {
            const goldAmount = 200;
            gameState.gold += goldAmount;
            gameState.totalGoldEarned += goldAmount;
            
            // Update displays
            updateDisplays();
            
            // Show gold effect
            showGoldEffect(goldAmount, "Lucky Cat Gold!");
            
            // Play cat sound
            playSound('cat');
            
            // Show notification
            showNotification(`Lucky Cat: +${goldAmount} Gold!`, 'success');
            
            // Save game state
            saveGameState();
        }
    }, 5000); // Every 5 seconds
}

function applyLuckyCatGameEffect() {
    // Lucky Cat helps by reducing options to 2 when there are more than 2 options
    if (gameState.equippedPet === 'lucky_cat' && 
        gameState.gameActive && 
        gameState.optionsCount > 2 && 
        gameState.revealedOptions.length === 0) {
        
        // Automatically eliminate wrong options to leave only 2 options
        const wrongOptions = Array.from({length: gameState.optionsCount}, (_, i) => i)
            .filter(i => i !== gameState.goldPosition);
        
        // Keep one wrong option (for 50/50 chance) and eliminate the rest
        const wrongToKeep = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
        const wrongToEliminate = wrongOptions.filter(i => i !== wrongToKeep);
        
        // Mark eliminated options as revealed
        gameState.revealedOptions.push(...wrongToEliminate);
        
        // Update instruction to show Lucky Cat is helping
        const instruction = document.getElementById('instruction');
        instruction.innerHTML = `<span style="color:#ff6b9d"><i class="fas fa-cat"></i> Lucky Cat is helping! Options reduced to 2 (50/50 chance!)</span>`;
        
        // Regenerate options to show eliminated ones
        generateOptions();
    }
}

// ====== PET PASSIVE EFFECTS ======
function applyPetPassiveEffects() {
    const currentTime = Date.now();
    
    // Apply effects based on equipped pet
    switch(gameState.equippedPet) {
        case 'elder_god_butterfly':
            // 1k gold every 5 seconds
            if (currentTime - (gameState.petAbilities.elder_god_butterfly.lastGoldTime || 0) >= 5000) {
                gameState.gold += 1000;
                gameState.totalGoldEarned += 1000;
                gameState.petAbilities.elder_god_butterfly.lastGoldTime = currentTime;
                
                showGoldEffect(1000, "Butterfly Gold!");
                showNotification('Elder God Butterfly: +1000 Gold!', 'success');
                updateDisplays();
                saveGameState();
            }
            break;
            
        case 'carlito_cocofanto':
            // streak × diamond gold every 10 seconds
            if (currentTime - (gameState.petAbilities.carlito_cocofanto.lastGoldTime || 0) >= 10000) {
                const goldAmount = Math.floor(gameState.streak * gameState.diamonds);
                if (goldAmount > 0) {
                    gameState.gold += goldAmount;
                    gameState.totalGoldEarned += goldAmount;
                    gameState.petAbilities.carlito_cocofanto.lastGoldTime = currentTime;
                    
                    showGoldEffect(goldAmount, "Cocofanto Gold!");
                    showNotification(`Carlito Cocofanto: +${goldAmount} Gold!`, 'success');
                    updateDisplays();
                    saveGameState();
                }
            }
            break;
            
        case 'tungtung_sahur':
            // 0.1 diamond every 30 seconds
            if (currentTime - (gameState.petAbilities.tungtung_sahur.lastDiamondTime || 0) >= 30000) {
                gameState.diamonds += 0.1;
                gameState.petAbilities.tungtung_sahur.lastDiamondTime = currentTime;
                
                showDiamondEffect(0.1);
                showNotification('Tungtung Sahur: +0.1 Diamonds!', 'success');
                updateDisplays();
                saveGameState();
            }
            break;
            
        case 'jester_magician':
            // Apply if 10 streak condition met
            if (gameState.streak >= 10) {
                if (currentTime - (gameState.petAbilities.jester_magician.lastGoldTime || 0) >= 15000) {
                    const goldAmount = Math.floor(gameState.lives * gameState.diamonds);
                    if (goldAmount > 0) {
                        gameState.gold += goldAmount;
                        gameState.totalGoldEarned += goldAmount;
                        gameState.petAbilities.jester_magician.lastGoldTime = currentTime;
                        
                        showGoldEffect(goldAmount, "Jester Magic!");
                        showNotification(`Jester Magician: +${goldAmount} Gold!`, 'success');
                        updateDisplays();
                        saveGameState();
                    }
                }
            }
            break;
            
        case '3dm4rk':
            // Random 1-100 diamonds every minute
            if (currentTime - (gameState.petAbilities['3dm4rk'].lastDiamondTime || 0) >= 60000) {
                const diamondAmount = Math.floor(Math.random() * 100) + 1;
                gameState.diamonds += diamondAmount;
                gameState.petAbilities['3dm4rk'].lastDiamondTime = currentTime;
                
                showDiamondEffect(diamondAmount);
                showNotification(`3DM4RK: +${diamondAmount} Diamonds!`, 'success');
                updateDisplays();
                saveGameState();
            }
            break;
            
        case 'entity':
            // 9999 score every 30s
            if (currentTime - (gameState.petAbilities.entity.lastScoreTime || 0) >= 30000) {
                gameState.score += 9999;
                gameState.petAbilities.entity.lastScoreTime = currentTime;
                showNotification('Entity: +9999 Score!', 'success');
            }
            
            // 9999 diamond every 5m
            if (currentTime - (gameState.petAbilities.entity.lastDiamondTime || 0) >= 300000) {
                gameState.diamonds += 9999;
                gameState.petAbilities.entity.lastDiamondTime = currentTime;
                showDiamondEffect(9999);
                showNotification('Entity: +9999 Diamonds!', 'success');
            }
            
            // 9999 gold every 2m
            if (currentTime - (gameState.petAbilities.entity.lastGoldTime || 0) >= 120000) {
                gameState.gold += 9999;
                gameState.totalGoldEarned += 9999;
                gameState.petAbilities.entity.lastGoldTime = currentTime;
                showGoldEffect(9999, "Entity Gold!");
                showNotification('Entity: +9999 Gold!', 'success');
            }
            
            // 9999 streak every 5m
            if (currentTime - (gameState.petAbilities.entity.lastStreakTime || 0) >= 300000) {
                gameState.streak += 9999;
                gameState.petAbilities.entity.lastStreakTime = currentTime;
                showNotification('Entity: +9999 Streak!', 'success');
            }
            
            updateDisplays();
            saveGameState();
            break;
            
        case 'cosming_dragon':
            // Convert 200k gold to 0.5 diamond
            if (gameState.gold >= 200000 && 
                currentTime - (gameState.petAbilities.cosming_dragon.lastConversion || 0) >= 30000) {
                gameState.gold -= 200000;
                gameState.diamonds += 0.5;
                gameState.petAbilities.cosming_dragon.lastConversion = currentTime;
                
                showDiamondEffect(0.5);
                showGoldEffect(-200000, "Dragon Conversion");
                showNotification('Cosming Dragon: Converted 200k gold to 0.5 diamonds!', 'success');
            }
            
            // 0.5 diamond every 30 seconds
            if (currentTime - (gameState.petAbilities.cosming_dragon.lastDiamondTime || 0) >= 30000) {
                gameState.diamonds += 0.5;
                gameState.petAbilities.cosming_dragon.lastDiamondTime = currentTime;
                
                showDiamondEffect(0.5);
                showNotification('Cosming Dragon: +0.5 Diamonds!', 'success');
            }
            
            // 100k gold every 30 seconds
            if (currentTime - (gameState.petAbilities.cosming_dragon.lastGoldTime || 0) >= 30000) {
                gameState.gold += 100000;
                gameState.totalGoldEarned += 100000;
                gameState.petAbilities.cosming_dragon.lastGoldTime = currentTime;
                
                showGoldEffect(100000, "Dragon Gold!");
                showNotification('Cosming Dragon: +100,000 Gold!', 'success');
            }
            
            // 100 streak every 30 seconds
            if (currentTime - (gameState.petAbilities.cosming_dragon.lastStreakTime || 0) >= 30000) {
                gameState.streak += 100;
                gameState.petAbilities.cosming_dragon.lastStreakTime = currentTime;
                showNotification('Cosming Dragon: +100 Streak!', 'success');
            }
            
            updateDisplays();
            saveGameState();
            break;
    }
}

function updatePetEffectDisplays() {
    const luckyCatEffect = document.getElementById('lucky-cat-effect');
    const meowlEffect = document.getElementById('meowl-effect-display');
    const phoenixEffect = document.getElementById('phoenix-effect-display');
    const turtleEffect = document.getElementById('turtle-effect-display');
    const cosmicEffect = document.getElementById('cosmic-effect-display');
    
    // Reset all
    luckyCatEffect.style.display = 'none';
    meowlEffect.style.display = 'none';
    phoenixEffect.style.display = 'none';
    turtleEffect.style.display = 'none';
    cosmicEffect.style.display = 'none';
    
    // Show based on equipped pet
    switch(gameState.equippedPet) {
        case 'lucky_cat':
            luckyCatEffect.style.display = 'block';
            break;
        case 'meowl':
            meowlEffect.style.display = 'block';
            break;
        case 'rainbow_phoenix':
            phoenixEffect.style.display = 'block';
            break;
        case 'time_travel_turtle':
            turtleEffect.style.display = 'block';
            break;
        case 'cosming_dragon':
        case 'elder_god_butterfly':
        case 'diamond_centipede':
        case 'humanoid_gold_seeker':
        case 'carlito_cocofanto':
        case 'tungtung_sahur':
        case 'crazy_dog':
        case 'croco_boy':
        case '3dm4rk':
        case 'entity':
            cosmicEffect.style.display = 'block';
            const pet = shopItems.pets.find(p => p.id === gameState.equippedPet);
            if (pet) {
                cosmicEffect.innerHTML = `<i class="${pet.icon}"></i>`;
                cosmicEffect.style.color = pet.color;
            }
            break;
    }
}

function createPetThemeEffects() {
    const effectsContainer = document.getElementById('theme-effects');
    effectsContainer.innerHTML = '';
    
    // Remove all theme classes first
    document.body.classList.remove('theme-meowl', 'theme-phoenix', 'theme-turtle', 'theme-cosmic');
    
    // Add theme based on equipped pet
    switch(gameState.equippedPet) {
        case 'meowl':
            document.body.classList.add('theme-meowl');
            createMeowlEffects();
            break;
        case 'rainbow_phoenix':
            document.body.classList.add('theme-phoenix');
            createRainbowPhoenixEffects();
            break;
        case 'time_travel_turtle':
            document.body.classList.add('theme-turtle');
            createTimeTravelTurtleEffects();
            break;
        case 'cosming_dragon':
        case 'elder_god_butterfly':
        case 'diamond_centipede':
        case 'humanoid_gold_seeker':
        case 'carlito_cocofanto':
        case 'tungtung_sahur':
        case 'crazy_dog':
        case 'croco_boy':
        case '3dm4rk':
        case 'entity':
            document.body.classList.add('theme-cosmic');
            createCosmicEffects();
            break;
    }
}

function createMeowlEffects() {
    const effectsContainer = document.getElementById('theme-effects');
    
    // Create main effect
    const effect = document.createElement('div');
    effect.className = 'theme-effect meowl-effect';
    effectsContainer.appendChild(effect);
    
    // Create green glow particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'theme-particle';
        particle.style.width = `${Math.random() * 3 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.background = `hsl(${120 + Math.random() * 40}, 100%, 50%)`;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px #00ff00`;
        particle.style.animation = `float ${Math.random() * 15 + 10}s infinite linear`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        effectsContainer.appendChild(particle);
    }
}

function createRainbowPhoenixEffects() {
    const effectsContainer = document.getElementById('theme-effects');
    
    // Create main effect
    const effect = document.createElement('div');
    effect.className = 'theme-effect phoenix-effect';
    effectsContainer.appendChild(effect);
    
    // Create rainbow particles
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'rainbow-particle';
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100 + 100}%`;
        
        // Rainbow colors
        const hue = Math.random() * 60; // Red to yellow spectrum
        particle.style.background = `hsl(${hue}, 100%, 50%)`;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px currentColor`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        
        effectsContainer.appendChild(particle);
    }
}

function createTimeTravelTurtleEffects() {
    const effectsContainer = document.getElementById('theme-effects');
    
    // Create main effect
    const effect = document.createElement('div');
    effect.className = 'theme-effect turtle-effect';
    effectsContainer.appendChild(effect);
    
    // Create time travel particles
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'time-particle';
        particle.innerHTML = '<i class="fas fa-clock"></i>';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100 + 100}%`;
        particle.style.color = `hsl(${160 + Math.random() * 40}, 100%, 60%)`;
        particle.style.animationDelay = `${Math.random() * 4}s`;
        
        effectsContainer.appendChild(particle);
    }
}

function createCosmicEffects() {
    const effectsContainer = document.getElementById('theme-effects');
    
    // Create main effect
    const effect = document.createElement('div');
    effect.className = 'theme-effect cosmic-effect-bg';
    effectsContainer.appendChild(effect);
    
    // Create cosmic particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100 + 100}%`;
        particle.style.background = `hsl(${Math.random() * 60 + 270}, 100%, 70%)`; // Purple-blue spectrum
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px currentColor`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        effectsContainer.appendChild(particle);
    }
    
    // Start cosmic music if equipped
    if (gameState.equippedPet === 'cosming_dragon' || gameState.equippedPet === '3dm4rk' || gameState.equippedPet === 'entity') {
        startCosmicMusic();
    }
}

function startCosmicMusic() {
    const cosmicMusic = document.getElementById('cosmic-music');
    if (cosmicMusic && gameState.musicEnabled) {
        cosmicMusic.volume = gameState.musicVolume * 0.7;
        cosmicMusic.play().catch(e => console.log("Cosmic music play failed:", e));
    }
}

function stopCosmicMusic() {
    const cosmicMusic = document.getElementById('cosmic-music');
    if (cosmicMusic) {
        cosmicMusic.pause();
        cosmicMusic.currentTime = 0;
    }
}

// ====== NEW PET ABILITIES ======
function applyMeowlAbilities() {
    if (gameState.equippedPet === 'meowl') {
        // Start Meowl's special music
        const meowlMusic = document.getElementById('meowl-music');
        if (meowlMusic && gameState.gameActive) {
            meowlMusic.volume = gameState.musicVolume * 0.5; // 50% volume
            meowlMusic.play().catch(e => console.log("Meowl music play failed:", e));
        }
        
        // Reset abilities for new game
        gameState.petAbilities.meowl.extraAttemptsUsed = 0;
        gameState.petAbilities.meowl.healthRestored = false;
        
        // Show Meowl protection in instruction
        const instruction = document.getElementById('instruction');
        instruction.innerHTML += ` <span style="color:#00ff00"><i class="fas fa-paw"></i> Meowl Protection Active (${gameState.petAbilities.meowl.extraAttempts} extra attempts)</span>`;
    }
}

function checkMeowlHealthRestore() {
    if (gameState.equippedPet === 'meowl' && 
        gameState.lives === 1 && 
        !gameState.petAbilities.meowl.healthRestored) {
        
        // Restore health to 3
        gameState.lives = 3;
        gameState.petAbilities.meowl.healthRestored = true;
        
        // Update display
        updateLivesDisplay();
        updateDisplays();
        
        // Show effect
        const effect = document.createElement('div');
        effect.className = 'meowl-prediction-effect';
        effect.innerHTML = '<i class="fas fa-heart"></i> Meowl Health Restore!';
        document.body.appendChild(effect);
        
        setTimeout(() => effect.remove(), 1000);
        
        // Show notification
        showNotification('Meowl restored your health to 3!', 'success');
        
        // Play Meowl sound
        playSound('meowl');
        
        saveGameState();
    }
}

function useMeowlExtraAttempt() {
    if (gameState.equippedPet === 'meowl' && 
        gameState.petAbilities.meowl.extraAttemptsUsed < gameState.petAbilities.meowl.extraAttempts) {
        
        gameState.petAbilities.meowl.extraAttemptsUsed++;
        
        // Show effect
        const effect = document.createElement('div');
        effect.className = 'meowl-prediction-effect';
        effect.innerHTML = `<i class="fas fa-paw"></i> Meowl Protection! (${gameState.petAbilities.meowl.extraAttempts - gameState.petAbilities.meowl.extraAttemptsUsed} left)`;
        document.body.appendChild(effect);
        
        setTimeout(() => effect.remove(), 1000);
        
        // Show notification
        showNotification(`Meowl protected you! ${gameState.petAbilities.meowl.extraAttempts - gameState.petAbilities.meowl.extraAttemptsUsed} extra attempts remaining.`, 'success');
        
        // Play Meowl sound
        playSound('meowl');
        
        return true;
    }
    return false;
}

function checkRainbowPhoenixResurrection() {
    if (gameState.equippedPet === 'rainbow_phoenix' && 
        !gameState.petAbilities.rainbow_phoenix.resurrectionUsed) {
        
        // 50% chance for resurrection
        if (Math.random() < gameState.petAbilities.rainbow_phoenix.resurrectionChance) {
            gameState.petAbilities.rainbow_phoenix.resurrectionUsed = true;
            
            // Show resurrection effect
            const effect = document.createElement('div');
            effect.className = 'phoenix-resurrect-effect';
            effect.innerHTML = '<i class="fas fa-fire"></i> Phoenix Resurrection!';
            document.body.appendChild(effect);
            
            setTimeout(() => effect.remove(), 1500);
            
            // Play phoenix sound
            playSound('phoenix');
            
            // Show notification
            showNotification('Rainbow Phoenix resurrected you!', 'success');
            
            return true;
        }
    }
    return false;
}

function useTimeRewind() {
    if (gameState.equippedPet === 'time_travel_turtle' && 
        gameState.petAbilities.time_travel_turtle.rewindAvailable &&
        gameState.gameActive &&
        gameState.selectedOption !== null &&
        gameState.selectedOption !== gameState.goldPosition) {
        
        // Use the rewind ability
        gameState.petAbilities.time_travel_turtle.rewindAvailable = false;
        gameState.petAbilities.time_travel_turtle.rewindUsed = true;
        
        // Remove the wrong selection from revealed options
        const wrongIndex = gameState.revealedOptions.indexOf(gameState.selectedOption);
        if (wrongIndex !== -1) {
            gameState.revealedOptions.splice(wrongIndex, 1);
        }
        
        // Reset selection state
        gameState.selectedOption = null;
        gameState.isSelecting = false;
        
        // Show time rewind effect
        const effect = document.createElement('div');
        effect.className = 'time-rewind-effect';
        document.body.appendChild(effect);
        
        setTimeout(() => effect.remove(), 1000);
        
        // Play time travel sound
        playSound('timeTravel');
        
        // Regenerate options (undoing the wrong selection)
        generateOptions();
        
        // Update instruction
        document.getElementById('instruction').innerHTML = `<span style="color:#00ffcc">Time Travel Turtle rewound time! Try again!</span>`;
        
        // Hide time rewind button
        document.getElementById('time-rewind-btn').style.display = 'none';
        
        // Show notification
        showNotification('Time rewound! Try your guess again.', 'success');
        
        saveGameState();
        
        return true;
    }
    return false;
}

// ====== COSMIC PET ABILITIES ======
function applyCosmicPetAbilities() {
    if (gameState.equippedPet === 'cosming_dragon') {
        // 50% time rewind chance on wrong guess
        if (Math.random() < 0.5) {
            // Show cosmic rewind effect
            const effect = document.createElement('div');
            effect.className = 'time-rewind-effect';
            effect.style.background = 'linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(75, 0, 130, 0.1))';
            document.body.appendChild(effect);
            
            setTimeout(() => effect.remove(), 1000);
            
            // Play cosmic sound
            playSound('cosmic');
            
            return true;
        }
    }
    
    // Elder God Butterfly - never fail streak shield
    if (gameState.equippedPet === 'elder_god_butterfly' && gameState.petAbilities.elder_god_butterfly.streakShield) {
        return true;
    }
    
    // Carlito Cocofanto - 50% chance for only 2 options
    if (gameState.equippedPet === 'carlito_cocofanto' && Math.random() < 0.5) {
        gameState.optionsCount = 2;
        return true;
    }
    
    // Carlito Cocofanto - 40% chance to reveal gold
    if (gameState.equippedPet === 'carlito_cocofanto' && Math.random() < 0.4) {
        gameState.revealedOptions.push(gameState.goldPosition);
        generateOptions();
        showNotification('Carlito Cocofanto revealed the gold!', 'success');
        return true;
    }
    
    // Tungtung Sahur - 50% chance to revive
    if (gameState.equippedPet === 'tungtung_sahur' && 
        gameState.lives === 0 && 
        Math.random() < gameState.petAbilities.tungtung_sahur.reviveChance) {
        gameState.lives = 1;
        updateLivesDisplay();
        showNotification('Tungtung Sahur revived you!', 'success');
        return true;
    }
    
    // 3DM4RK - 50% time rewind
    if (gameState.equippedPet === '3dm4rk' && 
        Math.random() < gameState.petAbilities['3dm4rk'].timeRewindChance) {
        return true;
    }
    
    // Entity - 50% auto-pilot
    if (gameState.equippedPet === 'entity' && 
        Math.random() < gameState.petAbilities.entity.autoPilotChance &&
        gameState.gameActive &&
        !gameState.isSelecting) {
        // Auto-select the correct option
        setTimeout(() => {
            if (gameState.gameActive) {
                gameState.selectedOption = gameState.goldPosition;
                gameState.revealedOptions.push(gameState.goldPosition);
                handleCorrectGuess();
                showNotification('Entity auto-piloted and found the gold!', 'success');
            }
        }, 1000);
        return true;
    }
    
    return false;
}

// ====== GAME FUNCTIONS ======
function initGame() {
    // Reset game state (but keep gold and stats)
    gameState.level = 0;
    gameState.score = 0;
    gameState.lives = gameState.maxLives;
    gameState.streak = 0;
    gameState.gameActive = false;
    gameState.goldPosition = -1;
    gameState.revealedOptions = [];
    gameState.selectedOption = null;
    gameState.activePowerUps = {
        goldrush: false,
        hintUsed: false,
        tagnaUsed: false
    };
    gameState.petStreakCounter = 0;
    gameState.isSelecting = false;
    
    // Reset pet abilities for new game
    if (gameState.petAbilities.rainbow_phoenix) {
        gameState.petAbilities.rainbow_phoenix.resurrectionUsed = false;
    }
    if (gameState.petAbilities.time_travel_turtle) {
        gameState.petAbilities.time_travel_turtle.rewindAvailable = true;
        gameState.petAbilities.time_travel_turtle.rewindUsed = false;
    }
    
    // Stop timer
    stopGameTimer();
    
    // Stop any playing music
    stopBackgroundMusic();
    stopCosmicMusic();
    
    // Stop Meowl music
    const meowlMusic = document.getElementById('meowl-music');
    if (meowlMusic) {
        meowlMusic.pause();
        meowlMusic.currentTime = 0;
    }
    
    // Stop Lucky Cat interval
    if (gameState.luckyCatInterval) {
        clearInterval(gameState.luckyCatInterval);
        gameState.luckyCatInterval = null;
    }
    
    // Update displays
    updateDisplays();
    updateLivesDisplay();
    updatePowerUpButtons();
    loadShopItems();
    updateAvatarDisplay();
    updateSoundButton();
    updateMusicControls();
    updatePetEffectDisplays();
    
    // Reset UI
    document.getElementById('instruction').textContent = "Click 'Start Game' to begin your treasure hunt!";
    document.getElementById('difficulty-info').textContent = "Difficulty: Easy (2 options)";
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('time-rewind-btn').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('level-progress-bar').style.width = '0%';
    document.getElementById('start-btn').disabled = false;
    
    // Generate empty options
    generateEmptyOptions();
    
    // Hide loading overlay
    hideLoading();
    
    // Update pet effects
    updatePetEffects();
    
    // Apply theme effects
    applyTheme(gameState.activeTheme);
    createPetThemeEffects();
    
    saveGameState();
}

function generateEmptyOptions() {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    for (let i = 0; i < 2; i++) {
        const option = document.createElement('div');
        option.className = 'option';
        option.innerHTML = '<i class="fas fa-question"></i>';
        option.style.pointerEvents = 'none';
        option.style.opacity = '0.5';
        container.appendChild(option);
    }
}

function startGame() {
    console.log("Start Game button clicked");
    if (gameState.gameActive) return;
    
    gameState.gameActive = true;
    gameState.isSelecting = false;
    document.getElementById('start-btn').disabled = true;
    gameState.totalGames++;
    
    // Start game timer
    startGameTimer();
    
    // Play start sound
    playSound('start');
    
    // Apply pet effects
    updatePetEffects();
    
    // Apply Meowl abilities
    applyMeowlAbilities();
    
    // Start Lucky Cat passive gold if equipped
    if (gameState.equippedPet === 'lucky_cat') {
        startLuckyCatPassiveGold();
    }
    
    // Start background music if music dragon is equipped
    if (gameState.equippedPet === 'music_dragon') {
        gameState.musicEnabled = true;
        updateMusicControls();
        startBackgroundMusic();
    }
    
    nextLevel();
}

function startBackgroundMusic() {
    const bgMusic = document.getElementById('background-music');
    if (!bgMusic) return;
    
    // Set volume
    bgMusic.volume = gameState.musicVolume;
    
    // Check if already playing
    if (!bgMusic.paused) return;
    
    // Play with promise
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Background music started");
            updateMusicButton(true);
        }).catch(error => {
            console.log("Music play failed, will use Web Audio API:", error);
            // If external music fails, use Web Audio API for background tones
            startWebAudioBackgroundMusic();
        });
    }
}

function startWebAudioBackgroundMusic() {
    // Create a simple background music using Web Audio API
    console.log("Starting Web Audio background music");
    
    // Create oscillator for background music
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 261.63; // C4
    
    gainNode.gain.value = 0.05; // Very quiet background
    
    // Create a simple melody pattern
    let currentTime = audioContext.currentTime;
    
    // Play a simple 4-note pattern
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    
    notes.forEach((freq, index) => {
        oscillator.frequency.setValueAtTime(freq, currentTime + index * 0.5);
    });
    
    oscillator.start();
    
    // Store reference to stop later
    gameState.backgroundOscillator = oscillator;
    gameState.backgroundGainNode = gainNode;
    
    updateMusicButton(true);
}

function stopBackgroundMusic() {
    const bgMusic = document.getElementById('background-music');
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
    
    // Also stop Web Audio API background music if playing
    if (gameState.backgroundOscillator) {
        gameState.backgroundOscillator.stop();
        gameState.backgroundOscillator = null;
    }
    
    // Stop Meowl music
    const meowlMusic = document.getElementById('meowl-music');
    if (meowlMusic) {
        meowlMusic.pause();
        meowlMusic.currentTime = 0;
    }
    
    // Stop cosmic music
    stopCosmicMusic();
    
    updateMusicButton(false);
}

function updateMusicButton(isPlaying) {
    const musicIcon = document.querySelector('#music-toggle i');
    const musicBtn = document.getElementById('music-toggle');
    
    if (!musicIcon || !musicBtn) return;
    
    if (isPlaying) {
        musicIcon.className = 'fas fa-volume-up';
        musicBtn.classList.add('music-playing');
    } else {
        musicIcon.className = 'fas fa-volume-mute';
        musicBtn.classList.remove('music-playing');
    }
}

function nextLevel() {
    if (gameState.isSelecting) return;
    
    gameState.level++;
    gameState.revealedOptions = [];
    gameState.selectedOption = null;
    gameState.isSelecting = false;
    gameState.activePowerUps.tagnaUsed = false;
    
    // Reset time rewind ability for new level
    if (gameState.petAbilities.time_travel_turtle) {
        gameState.petAbilities.time_travel_turtle.rewindAvailable = true;
    }
    
    // Calculate difficulty
    gameState.optionsCount = Math.min(2 + Math.floor(gameState.level / 5), 10);
    
    // Apply pet effects that reduce options
    applyPetOptionEffects();
    
    // Generate gold position (apply pet effects)
    gameState.goldPosition = Math.floor(Math.random() * gameState.optionsCount);
    
    // Apply pet luck effects
    applyPetLuckEffects();
    
    // Apply Lucky Cat game effect
    applyLuckyCatGameEffect();
    
    // Apply cosmic pet effects
    applyCosmicPetAbilities();
    
    // Update UI
    updateLevelUI();
    generateOptions();
    
    // Hide next button
    document.getElementById('next-btn').style.display = 'none';
    
    // Show time rewind button if turtle is equipped and ability is available
    if (gameState.equippedPet === 'time_travel_turtle' && 
        gameState.petAbilities.time_travel_turtle.rewindAvailable) {
        document.getElementById('time-rewind-btn').style.display = 'inline-flex';
    } else {
        document.getElementById('time-rewind-btn').style.display = 'none';
    }
    
    // Reset hint usage
    gameState.activePowerUps.hintUsed = false;
    
    // Update power-up buttons
    updatePowerUpButtons();
    
    saveGameState();
}

function applyPetOptionEffects() {
    // 3DM4RK - infinite 2 options
    if (gameState.equippedPet === '3dm4rk') {
        gameState.optionsCount = 2;
        return;
    }
    
    // Carlito Cocofanto - 50% chance for 2 options
    if (gameState.equippedPet === 'carlito_cocofanto' && Math.random() < 0.5) {
        gameState.optionsCount = 2;
        return;
    }
}

function applyPetLuckEffects() {
    // Apply luck boost from Music Dragon
    if (gameState.equippedPet === 'music_dragon' && Math.random() < 0.5) {
        // 50% chance to reveal one wrong option at start
        const wrongOptions = Array.from({length: gameState.optionsCount}, (_, i) => i)
            .filter(i => i !== gameState.goldPosition);
        
        if (wrongOptions.length > 0) {
            const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
            gameState.revealedOptions.push(randomWrong);
        }
    }
    
    // Cosming Dragon - 50% chance to skip levels
    if (gameState.equippedPet === 'cosming_dragon' && 
        Math.random() < gameState.petAbilities.cosming_dragon.levelSkipChance) {
        const skipAmount = Math.floor(Math.random() * 14) + 2; // 2-15 levels
        gameState.level += skipAmount;
        showNotification(`Cosming Dragon skipped ${skipAmount} levels!`, 'success');
    }
}

function updateLevelUI() {
    const difficulty = gameState.level < 10 ? 'Easy' : gameState.level < 30 ? 'Medium' : gameState.level < 60 ? 'Hard' : 'Extreme';
    document.getElementById('difficulty-info').textContent = `Difficulty: ${difficulty} (${gameState.optionsCount} options)`;
    
    // Add pet effect info if pet is equipped
    let instruction = `Level ${gameState.level}: Find the gold!`;
    const pet = shopItems.pets.find(p => p.id === gameState.equippedPet);
    if (pet && pet.id !== 'none') {
        instruction += ` <span style="color:${pet.color};font-size:0.9em">(Pet: ${pet.name} - ${pet.effect})</span>`;
        
        // Special messages for pets
        if (pet.id === 'music_dragon' && gameState.musicEnabled) {
            instruction += ` <span style="color:#9c88ff"><i class="fas fa-music"></i></span>`;
        }
        if (pet.id === 'lucky_cat') {
            instruction += ` <span style="color:#ff6b9d"><i class="fas fa-cat"></i></span>`;
        }
        if (pet.id === 'meowl') {
            instruction += ` <span style="color:#00ff00"><i class="fas fa-paw"></i> ${gameState.petAbilities.meowl.extraAttempts} extra attempts</span>`;
        }
        if (pet.id === 'rainbow_phoenix' && !gameState.petAbilities.rainbow_phoenix.resurrectionUsed) {
            instruction += ` <span style="color:#ff0000"><i class="fas fa-fire"></i> 50% resurrection chance</span>`;
        }
        if (pet.id === 'time_travel_turtle' && gameState.petAbilities.time_travel_turtle.rewindAvailable) {
            instruction += ` <span style="color:#00ffcc"><i class="fa-solid fa-clock"></i> Time rewind available</span>`;
        }
        if (pet.isCosmic) {
            instruction += ` <span style="color:#8a2be2"><i class="fas fa-star"></i> COSMIC PET</span>`;
        }
    }
    document.getElementById('instruction').innerHTML = instruction;
}

function generateOptions() {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    for (let i = 0; i < gameState.optionsCount; i++) {
        const option = document.createElement('div');
        option.className = 'option';
        option.dataset.index = i;
        
        // Check if this option has been revealed
        if (gameState.revealedOptions.includes(i)) {
            // If it's the gold position, show gold
            if (i === gameState.goldPosition) {
                option.className = 'option gold';
                option.innerHTML = '<i class="fas fa-gem"></i>';
                option.style.pointerEvents = 'none';
            } else {
                // Otherwise show empty
                option.className = 'option empty';
                option.innerHTML = '<i class="fas fa-times"></i>';
                option.style.pointerEvents = 'none';
            }
        } else {
            // Not revealed yet - show question mark and make clickable
            option.innerHTML = '<i class="fas fa-question"></i>';
            option.addEventListener('click', () => selectOption(i));
        }
        
        container.appendChild(option);
    }
}

function selectOption(index) {
    if (!gameState.gameActive || gameState.isSelecting || gameState.selectedOption !== null) return;
    
    gameState.isSelecting = true;
    gameState.selectedOption = index;
    gameState.revealedOptions.push(index);
    
    const isCorrect = index === gameState.goldPosition;
    
    if (isCorrect) {
        handleCorrectGuess();
    } else {
        handleWrongGuess();
    }
}

function handleCorrectGuess() {
    gameState.streak++;
    gameState.petStreakCounter++;
    gameState.totalCorrect++;
    
    // Update highest streak
    if (gameState.streak > gameState.highestStreak) {
        gameState.highestStreak = gameState.streak;
    }
    
    // Calculate base gold earned
    let goldEarned = 10 + Math.floor(gameState.level / 2) + (gameState.streak * 2);
    
    // Apply pet-specific multipliers
    applyPetGoldMultipliers(goldEarned);
    
    // Apply gold rush multiplier
    if (gameState.activePowerUps.goldrush) {
        goldEarned *= 2;
        gameState.activePowerUps.goldrush = false;
    }
    
    // Apply theme bonus
    if (gameState.activeTheme !== 'default') {
        goldEarned = Math.round(goldEarned * gameState.themeBonuses[gameState.activeTheme]);
    }
    
    // Apply pet bonuses
    const pet = shopItems.pets.find(p => p.id === gameState.equippedPet);
    let petBonus = 0;
    let petMessage = '';
    
    if (pet && pet.id !== 'none') {
        // Apply pet-specific gold bonuses
        petBonus = applyPetGoldBonus(pet, goldEarned);
        if (petBonus > 0) {
            goldEarned += petBonus;
            petMessage = ` +${petBonus} from ${pet.name}`;
        }
        
        // Special pet abilities on correct guess
        applySpecialPetAbilitiesOnCorrect();
    }
    
    // Update game state
    gameState.gold += goldEarned;
    gameState.totalGoldEarned += goldEarned;
    gameState.score += 100 * gameState.streak;
    
    // Update the display first
    generateOptions();
    
    // Update displays
    updateDisplays();
    updatePowerUpButtons();
    
    // Show success message with pet effect
    let message = `<span style="color:#51cf66">✓ Correct! Gold found! +${goldEarned} Gold${petMessage}</span>`;
    if (pet && pet.id !== 'none') {
        message += ` <span style="color:${pet.color}"><i class="${pet.icon}"></i></span>`;
    }
    document.getElementById('instruction').innerHTML = message;
    
    // Play correct sound
    playSound('correct');
    
    // Add gold effect
    showGoldEffect(goldEarned, "Gold Earned!");
    
    // Show notification
    showNotification(`Correct! +${goldEarned} Gold`, 'success');
    
    // Play level up sound
    playSound('levelup');
    
    // Check for perfect streak bonuses
    checkPerfectStreakBonuses();
    
    // Auto-proceed to next level after delay
    setTimeout(() => {
        gameState.isSelecting = false;
        nextLevel();
    }, 2000);
    
    saveGameState();
}

function applyPetGoldMultipliers(baseGold) {
    // 3DM4RK - x100 gold
    if (gameState.equippedPet === '3dm4rk') {
        return baseGold * 100;
    }
    
    return baseGold;
}

function applyPetGoldBonus(pet, baseGold) {
    let bonus = 0;
    
    switch(pet.bonusType) {
        case 'correct':
            // Golden Eagle: +10 gold on every correct guess
            bonus = pet.bonusAmount;
            break;
            
        case 'streak':
            // Check streak condition for pets
            if (gameState.petStreakCounter >= pet.bonusCondition) {
                if (pet.id === 'phoenix') {
                    // Phoenix: x100 gold every 3 streaks
                    bonus = baseGold * (pet.bonusAmount - 1);
                } else {
                    // Other streak pets: fixed amount
                    bonus = pet.bonusAmount;
                }
                gameState.petStreakCounter = 0;
            }
            break;
            
        case 'passive':
            // Lucky Cat: Already gives passive gold, but add bonus for correct guess
            if (pet.id === 'lucky_cat') {
                bonus = 50; // Extra bonus for correct guess
            }
            break;
            
        case 'resurrection':
            // Rainbow Phoenix: 25% gold bonus
            if (pet.id === 'rainbow_phoenix') {
                bonus = Math.round(baseGold * pet.bonusAmount);
            }
            break;
            
        case 'rewind':
            // Time Travel Turtle: 30% gold bonus
            if (pet.id === 'time_travel_turtle') {
                bonus = Math.round(baseGold * pet.bonusAmount);
            }
            break;
            
        case 'ultra_rare':
            // Diamond Centipede: multiply diamonds by 10
            if (pet.id === 'diamond_centipede') {
                bonus = gameState.diamonds * pet.bonusAmount;
                gameState.diamonds += bonus;
                showDiamondEffect(bonus);
            }
            // Elder God Butterfly: fixed amount
            else if (pet.id === 'elder_god_butterfly') {
                bonus = pet.bonusAmount;
            }
            break;
            
        case 'godly':
            // Humanoid Gold Seeker: gold × streak
            if (pet.id === 'humanoid_gold_seeker') {
                bonus = gameState.gold * gameState.streak;
            }
            break;
            
        case 'cosmic':
            // Cosming Dragon: various bonuses already applied in passive
            break;
            
        case 'cosmic_shop':
            // 3DM4RK: x100 gold already applied in multiplier
            break;
    }
    
    return Math.round(bonus);
}

function applySpecialPetAbilitiesOnCorrect() {
    // Crazy Dog - 0.3% chance to obtain pet every 5 streak
    if (gameState.equippedPet === 'crazy_dog' && 
        gameState.streak % gameState.petAbilities.crazy_dog.perfectStreak === 0) {
        const chance = gameState.score * gameState.gold * gameState.petAbilities.crazy_dog.bonusAmount;
        if (Math.random() < chance) {
            // Player obtains the Crazy Dog pet (already has it, so give bonus)
            gameState.diamonds += 100;
            showNotification('Crazy Dog special: +100 Diamonds!', 'success');
            showDiamondEffect(100);
        }
    }
}

function checkPerfectStreakBonuses() {
    // Croco Boy - perfect 20 streak bonus
    if (gameState.equippedPet === 'croco_boy' && 
        gameState.streak >= gameState.petAbilities.croco_boy.perfectStreak &&
        !gameState.petAbilities.croco_boy.meditationActive) {
        
        gameState.petAbilities.croco_boy.meditationActive = true;
        gameState.petAbilities.croco_boy.meditationEndTime = Date.now() + 30000; // 30 seconds
        
        showNotification('Croco Boy started meditation! Result in 30 seconds...', 'info');
        
        // Start meditation countdown
        setTimeout(() => {
            if (gameState.petAbilities.croco_boy.meditationActive) {
                const diamondBonus = gameState.streak * gameState.diamonds * gameState.petAbilities.croco_boy.bonusAmount;
                gameState.diamonds += diamondBonus;
                gameState.petAbilities.croco_boy.meditationActive = false;
                
                showDiamondEffect(diamondBonus);
                showNotification(`Croco Boy meditation complete: +${diamondBonus} Diamonds!`, 'success');
                updateDisplays();
                saveGameState();
            }
        }, 30000);
    }
}

function handleWrongGuess() {
    let shouldLoseLife = true;
    
    // Check for cosmic pet abilities first
    const cosmicProtected = applyCosmicPetAbilities();
    if (cosmicProtected && 
        (gameState.equippedPet === 'elder_god_butterfly' || 
         gameState.equippedPet === 'cosming_dragon' ||
         gameState.equippedPet === '3dm4rk')) {
        shouldLoseLife = false;
        gameState.isSelecting = false;
        gameState.selectedOption = null;
        
        // Regenerate options to re-enable clicking
        setTimeout(() => {
            generateOptions();
        }, 1000);
        
        return; // Exit early, no life lost
    }
    
    // Check for Meowl protection
    if (gameState.equippedPet === 'meowl') {
        const meowlProtected = useMeowlExtraAttempt();
        if (meowlProtected) {
            shouldLoseLife = false;
            gameState.isSelecting = false;
            gameState.selectedOption = null;
            
            // Regenerate options to re-enable clicking
            setTimeout(() => {
                generateOptions();
            }, 1000);
            
            return; // Exit early, no life lost
        }
    }
    
    // Check for Rainbow Phoenix resurrection
    if (shouldLoseLife && gameState.equippedPet === 'rainbow_phoenix') {
        const phoenixResurrected = checkRainbowPhoenixResurrection();
        if (phoenixResurrected) {
            shouldLoseLife = false;
        }
    }
    
    // Check for Meowl health restore
    if (shouldLoseLife) {
        checkMeowlHealthRestore();
    }
    
    // Check for Tungtung Sahur revive
    if (shouldLoseLife && gameState.equippedPet === 'tungtung_sahur') {
        if (Math.random() < gameState.petAbilities.tungtung_sahur.reviveChance) {
            shouldLoseLife = false;
            showNotification('Tungtung Sahur prevented life loss!', 'success');
        }
    }
    
    // Stop background music if streak is broken and Music Dragon is equipped
    if (gameState.equippedPet === 'music_dragon' && !gameState.permanentPowerUps.streakShield) {
        const bgMusic = document.getElementById('background-music');
        if (bgMusic) {
            bgMusic.pause();
            updateMusicButton(false);
        }
    }
    
    // Reset streak and pet streak counter
    if (!gameState.permanentPowerUps.streakShield && shouldLoseLife) {
        gameState.streak = 0;
        gameState.petStreakCounter = 0;
    }
    
    if (shouldLoseLife) {
        gameState.lives--;
        gameState.totalWrong++;
    }
    
    // Update the display
    generateOptions();
    
    // Update displays
    updateLivesDisplay();
    updateDisplays();
    updatePowerUpButtons();
    
    // Show failure message
    let message = `<span style="color:#ff6b6b">✗ Wrong! That was empty!</span>`;
    if (gameState.equippedPet === 'music_dragon' && !gameState.permanentPowerUps.streakShield) {
        message = `<span style="color:#ff6b6b">✗ Wrong! Music stopped!</span>`;
    }
    
    // Show time rewind button if turtle is equipped and ability is available
    if (gameState.equippedPet === 'time_travel_turtle' && 
        gameState.petAbilities.time_travel_turtle.rewindAvailable &&
        shouldLoseLife) {
        message += ` <span style="color:#00ffcc"><i class="fa-solid fa-clock"></i> Use Time Rewind to undo!</span>`;
        document.getElementById('time-rewind-btn').style.display = 'inline-flex';
    }
    
    document.getElementById('instruction').innerHTML = message;
    
    // Play wrong sound
    playSound('wrong');
    
    // Show notification
    if (shouldLoseLife) {
        showNotification('Wrong guess!', 'error');
    }
    
    // Check if game over
    if (gameState.lives <= 0 && shouldLoseLife) {
        setTimeout(() => {
            gameOver();
            gameState.isSelecting = false;
        }, 1000);
    } else {
        // Allow selecting again after delay
        setTimeout(() => {
            if (!gameState.petAbilities.time_travel_turtle?.rewindAvailable || 
                gameState.equippedPet !== 'time_travel_turtle') {
                gameState.isSelecting = false;
                gameState.selectedOption = null;
                // Regenerate options to re-enable clicking
                generateOptions();
            }
        }, 1000);
    }
    
    saveGameState();
}

function gameOver() {
    gameState.gameActive = false;
    gameState.isSelecting = false;
    
    // Stop timer
    stopGameTimer();
    
    // Stop background music
    stopBackgroundMusic();
    stopCosmicMusic();
    
    // Stop Lucky Cat interval
    if (gameState.luckyCatInterval) {
        clearInterval(gameState.luckyCatInterval);
        gameState.luckyCatInterval = null;
    }
    
    // Update high score
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
    }
    
    // Update final stats
    document.getElementById('final-level').textContent = gameState.level;
    document.getElementById('final-gold').textContent = gameState.gold;
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('final-high-score').textContent = gameState.highScore;
    
    // Show game over modal
    document.getElementById('game-over').style.display = 'flex';
    
    // Play game over sound
    playSound('gameover');
    
    // Update power-up buttons
    updatePowerUpButtons();
    
    saveGameState();
}

function updateDisplays() {
    document.getElementById('level-display').textContent = `${gameState.level}/${gameState.maxLevels}`;
    document.getElementById('score-display').textContent = gameState.score;
    document.getElementById('gold-display').textContent = gameState.gold;
    document.getElementById('shop-gold-display').textContent = gameState.gold;
    document.getElementById('diamonds-display').textContent = gameState.diamonds.toFixed(2);
    document.getElementById('shop-diamonds-display').textContent = gameState.diamonds.toFixed(2);
    document.getElementById('streak-display').textContent = gameState.streak;
    document.getElementById('lives-display').textContent = gameState.lives;
    document.getElementById('high-score-display').textContent = gameState.highScore;
    
    // Update progress bar
    const progress = (gameState.level / gameState.maxLevels) * 100;
    document.getElementById('level-progress-bar').style.width = `${progress}%`;
}

function updateLivesDisplay() {
    const livesContainer = document.getElementById('lives-icons');
    livesContainer.innerHTML = '';
    
    for (let i = 0; i < gameState.maxLives; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart life';
        heart.style.color = i < gameState.lives ? '#ff6b6b' : '#555';
        heart.style.margin = '0 2px';
        livesContainer.appendChild(heart);
    }
}

function updateMaxLevels() {
    if (gameState.megaLevelExtension) {
        gameState.maxLevels = 999;
    } else if (gameState.levelExtension) {
        gameState.maxLevels = 100;
    } else {
        gameState.maxLevels = 50;
    }
    updateDisplays();
}

// ====== SHOP SYSTEM ======
function loadShopItems() {
    loadShopCategory('avatars', shopItems.avatars, 'avatar-items');
    loadShopCategory('frames', shopItems.frames, 'frame-items');
    loadShopCategory('pets', shopItems.pets, 'pet-items');
    loadPremiumPets();
}

function loadPremiumPets() {
    const container = document.getElementById('premium-pet-items');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Filter premium pets (jester_magician, 3dm4rk, entity)
    const premiumPets = shopItems.pets.filter(pet => 
        ['jester_magician', '3dm4rk', 'entity'].includes(pet.id)
    );
    
    loadShopCategoryItems(premiumPets, container, 'pets');
}

function loadShopCategory(category, items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    loadShopCategoryItems(items, container, category);
}

function loadShopCategoryItems(items, container, category) {
    container.innerHTML = '';
    
    items.forEach(item => {
        // For Lucky Cat, check if it's been redeemed
        if (item.id === 'lucky_cat' && !gameState.redeemedCodes.includes('EDMARKISADMIN')) {
            // Don't show Lucky Cat if code hasn't been redeemed
            return;
        }
        
        // For Meowl, check if it's been redeemed
        if (item.id === 'meowl' && !gameState.redeemedCodes.includes('ILOVEMEOWL')) {
            // Don't show Meowl if code hasn't been redeemed
            return;
        }
        
        // For cosmic pets from draw, only show if owned
        if (item.isCosmic && item.price === 0 && !gameState.purchasedItems.includes(item.id)) {
            return;
        }
        
        const isPurchased = gameState.purchasedItems.includes(item.id);
        const isEquipped = 
            (category === 'avatars' && gameState.equippedAvatar === item.id) ||
            (category === 'frames' && gameState.equippedFrame === item.id) ||
            (category === 'pets' && gameState.equippedPet === item.id);
        
        // Special handling for redeem-only items
        let canPurchase = true;
        let purchaseText = 'Buy';
        let priceDisplay = `<i class="fas fa-coins"></i> ${item.price} Gold`;
        
        // Check if price is in diamonds
        if (item.priceInDiamonds) {
            priceDisplay = `<i class="fas fa-gem diamond-currency"></i> ${item.price} Diamonds`;
            canPurchase = gameState.diamonds >= item.price;
        } else if (item.price === 0) {
            purchaseText = 'Free';
        }
        
        if (item.id === 'lucky_cat' || item.id === 'meowl') {
            if (isPurchased) {
                purchaseText = isEquipped ? 'Equipped' : 'Equip';
            } else {
                purchaseText = 'Claim Pet';
                canPurchase = true; // Can claim if redeemed
            }
        }
        
        const itemElement = document.createElement('div');
        itemElement.className = `shop-item ${isPurchased ? 'purchased' : ''} ${isEquipped ? 'equipped' : ''} ${item.rarity ? 'rarity-' + item.rarity : ''}`;
        
        // Add special classes for premium pets
        if (item.godTier) {
            itemElement.classList.add('godtier');
        } else if (item.rarity === 'limited') {
            itemElement.classList.add('limited');
            if (item.id === 'rainbow_phoenix') {
                itemElement.classList.add('rainbow');
            }
        } else if (item.isCosmic) {
            itemElement.classList.add('cosmic');
        }
        
        // Add rarity class for styling
        if (item.rarity) {
            itemElement.classList.add(item.rarity);
        }
        
        let actionButton = '';
        
        if (!isPurchased) {
            if (item.id === 'lucky_cat' || item.id === 'meowl') {
                // Redeem-only pets claim button
                actionButton = `<button class="shop-item-action claim" onclick="claimRedeemPet('${item.id}')">
                        ${purchaseText}
                    </button>`;
            } else {
                // Regular purchase button
                actionButton = `<button class="shop-item-action" onclick="buyItem('${item.id}', '${category}', ${item.price}, ${item.priceInDiamonds || false})" ${canPurchase ? '' : 'disabled'}>
                        ${purchaseText}
                    </button>`;
            }
        } else {
            if (isEquipped) {
                actionButton = `<button class="shop-item-action equipped" disabled>
                        Equipped
                    </button>`;
            } else {
                actionButton = `<button class="shop-item-action equip" onclick="equipItem('${item.id}', '${category}')">
                        Equip
                    </button>`;
            }
        }
        
        itemElement.innerHTML = `
            ${item.rarity && item.rarity !== 'common' ? 
                `<div class="rarity-badge rarity-${item.rarity}">${item.rarity.toUpperCase()}${item.rarity === 'limited' ? ' EDITION' : ''}${item.isCosmic ? ' COSMIC' : ''}</div>` : ''
            }
            <div class="shop-item-icon" style="color:${item.color || '#FFD700'}">
                <i class="${item.icon || 'fas fa-question'}"></i>
            </div>
            <div class="shop-item-title">${item.name}</div>
            ${item.effect ? `<div class="shop-item-description" style="font-size:0.7rem; color:#aaa; margin-bottom:5px; text-align:center;">${item.effect}</div>` : ''}
            ${item.id !== 'lucky_cat' && item.id !== 'meowl' ? `<div class="shop-item-price">
                ${priceDisplay}
            </div>` : '<div class="shop-item-price" style="color:#ff6b9d"><i class="fas fa-gift"></i> Redeem Code Only</div>'}
            ${actionButton}
        `;
        container.appendChild(itemElement);
    });
}

function claimRedeemPet(petId) {
    // Check if code has been redeemed
    let codeRedeemed = false;
    if (petId === 'lucky_cat') {
        codeRedeemed = gameState.redeemedCodes.includes('EDMARKISADMIN');
    } else if (petId === 'meowl') {
        codeRedeemed = gameState.redeemedCodes.includes('ILOVEMEOWL');
    }
    
    if (!codeRedeemed) {
        showNotification(`Redeem code required first!`, 'error');
        return;
    }
    
    // Check if already purchased
    if (gameState.purchasedItems.includes(petId)) {
        showNotification(`You already have this pet!`, 'info');
        return;
    }
    
    // Add pet to purchased items
    gameState.purchasedItems.push(petId);
    gameState.totalPets++;
    
    // Auto-equip the pet
    equipItem(petId, 'pets');
    
    updateDisplays();
    loadShopItems();
    saveGameState();
    
    showGoldEffect(0, `${petId === 'meowl' ? 'GOD TIER ' : ''}Pet Claimed!`);
    playSound('purchase');
    
    if (petId === 'meowl') {
        playSound('meowl');
        showNotification('GOD TIER Meowl claimed and equipped!', 'success');
    } else {
        playSound('cat');
        showNotification('Lucky Cat claimed and equipped!', 'success');
    }
}

function buyItem(itemId, category, price, priceInDiamonds = false) {
    let canAfford = false;
    
    if (priceInDiamonds) {
        canAfford = gameState.diamonds >= price;
    } else {
        canAfford = gameState.gold >= price;
    }
    
    if (canAfford) {
        if (priceInDiamonds) {
            gameState.diamonds -= price;
        } else {
            gameState.gold -= price;
        }
        
        gameState.purchasedItems.push(itemId);
        
        // Auto-equip the item
        equipItem(itemId, category);
        
        // Update pet count
        if (category === 'pets' && itemId !== 'none') {
            gameState.totalPets++;
        }
        
        updateDisplays();
        loadShopItems();
        saveGameState();
        
        if (priceInDiamonds) {
            showDiamondEffect(-price);
        } else {
            showGoldEffect(-price, "Purchased!");
        }
        
        playSound('purchase');
        
        // Show special message for pets
        if (category === 'pets' && itemId !== 'none') {
            const pet = shopItems.pets.find(p => p.id === itemId);
            if (pet) {
                setTimeout(() => {
                    showGoldEffect(0, `${pet.name} equipped!`);
                }, 500);
                
                // Special handling for different pets
                if (pet.id === 'music_dragon') {
                    document.getElementById('music-controls').style.display = 'flex';
                    if (!gameState.musicEnabled) {
                        gameState.musicEnabled = true;
                        updateMusicControls();
                        if (gameState.gameActive) {
                            startBackgroundMusic();
                        }
                    }
                } else if (pet.id === 'lucky_cat') {
                    updatePetEffectDisplays();
                    if (gameState.gameActive) {
                        startLuckyCatPassiveGold();
                    }
                } else if (pet.id === 'rainbow_phoenix') {
                    updatePetEffectDisplays();
                    createPetThemeEffects();
                    showNotification('Rainbow Phoenix equipped! 50% resurrection chance activated!', 'success');
                } else if (pet.id === 'time_travel_turtle') {
                    updatePetEffectDisplays();
                    createPetThemeEffects();
                    showNotification('Time Travel Turtle equipped! Time rewind ability available!', 'success');
                } else if (pet.id === 'meowl') {
                    updatePetEffectDisplays();
                    createPetThemeEffects();
                    showNotification('GOD TIER Meowl equipped! Prediction safeguard activated!', 'success');
                } else if (pet.isCosmic) {
                    updatePetEffectDisplays();
                    createPetThemeEffects();
                    showNotification(`${pet.name} equipped! Cosmic powers activated!`, 'success');
                }
            }
        }
        
        showNotification(`Purchased ${itemId}!`, 'success');
    } else {
        if (priceInDiamonds) {
            showNotification(`Not enough diamonds! Need ${price}`, 'error');
        } else {
            showNotification(`Not enough gold! Need ${price}`, 'error');
        }
    }
}

function equipItem(itemId, category) {
    switch(category) {
        case 'avatars':
            gameState.equippedAvatar = itemId;
            break;
        case 'frames':
            gameState.equippedFrame = itemId;
            break;
        case 'pets':
            gameState.equippedPet = itemId;
            // Reset pet streak counter when changing pets
            gameState.petStreakCounter = 0;
            
            // Handle pet-specific actions
            handlePetEquip(itemId);
            break;
    }
    
    updateAvatarDisplay();
    loadShopItems();
    saveGameState();
    
    showNotification(`${itemId} equipped!`, 'success');
}

function handlePetEquip(petId) {
    switch(petId) {
        case 'music_dragon':
            document.getElementById('music-controls').style.display = 'flex';
            if (gameState.musicEnabled && gameState.gameActive) {
                startBackgroundMusic();
            }
            stopOtherPetEffects('music_dragon');
            break;
            
        case 'lucky_cat':
            updatePetEffectDisplays();
            if (gameState.gameActive) {
                startLuckyCatPassiveGold();
            }
            stopOtherPetEffects('lucky_cat');
            break;
            
        case 'meowl':
            updatePetEffectDisplays();
            createPetThemeEffects();
            stopOtherPetEffects('meowl');
            break;
            
        case 'rainbow_phoenix':
            updatePetEffectDisplays();
            createPetThemeEffects();
            stopOtherPetEffects('rainbow_phoenix');
            break;
            
        case 'time_travel_turtle':
            updatePetEffectDisplays();
            createPetThemeEffects();
            stopOtherPetEffects('time_travel_turtle');
            break;
            
        case 'cosming_dragon':
        case 'elder_god_butterfly':
        case 'diamond_centipede':
        case 'humanoid_gold_seeker':
        case 'carlito_cocofanto':
        case 'tungtung_sahur':
        case 'crazy_dog':
        case 'croco_boy':
        case '3dm4rk':
        case 'entity':
            updatePetEffectDisplays();
            createPetThemeEffects();
            stopOtherPetEffects(petId);
            break;
            
        default:
            stopOtherPetEffects('none');
            break;
    }
    
    // Update pet effects
    updatePetEffects();
}

function stopOtherPetEffects(currentPetId) {
    // Stop Lucky Cat interval
    if (currentPetId !== 'lucky_cat' && gameState.luckyCatInterval) {
        clearInterval(gameState.luckyCatInterval);
        gameState.luckyCatInterval = null;
    }
    
    // Stop background music if not music dragon
    if (currentPetId !== 'music_dragon') {
        stopBackgroundMusic();
    }
    
    // Stop Meowl music
    if (currentPetId !== 'meowl') {
        const meowlMusic = document.getElementById('meowl-music');
        if (meowlMusic) {
            meowlMusic.pause();
            meowlMusic.currentTime = 0;
        }
    }
    
    // Stop cosmic music if not a cosmic pet
    if (!['cosming_dragon', '3dm4rk', 'entity'].includes(currentPetId)) {
        stopCosmicMusic();
    }
    
    // Reset pet abilities for unequipped pets
    Object.keys(gameState.petAbilities).forEach(petId => {
        if (petId !== currentPetId) {
            if (gameState.petAbilities[petId]) {
                // Reset common abilities
                gameState.petAbilities[petId].extraAttemptsUsed = 0;
                gameState.petAbilities[petId].healthRestored = false;
                gameState.petAbilities[petId].resurrectionUsed = false;
                gameState.petAbilities[petId].rewindUsed = false;
                gameState.petAbilities[petId].rewindAvailable = true;
                
                // Reset cosmic pet specific abilities
                if (gameState.petAbilities[petId].meditationActive !== undefined) {
                    gameState.petAbilities[petId].meditationActive = false;
                }
            }
        }
    });
}

function updateAvatarDisplay() {
    const avatar = shopItems.avatars.find(a => a.id === gameState.equippedAvatar) || shopItems.avatars[0];
    const frame = shopItems.frames.find(f => f.id === gameState.equippedFrame) || shopItems.frames[0];
    const pet = shopItems.pets.find(p => p.id === gameState.equippedPet) || shopItems.pets[0];
    
    document.getElementById('avatar-icon-display').className = avatar.icon;
    document.getElementById('avatar-icon-display').style.color = avatar.color;
    
    const frameDisplay = document.getElementById('avatar-frame-display');
    frameDisplay.style.border = frame.border;
    frameDisplay.style.background = frame.background || 'rgba(0, 0, 0, 0.3)';
    
    // Update pet display
    const petDisplay = document.getElementById('avatar-pet-display');
    if (pet.id !== 'none') {
        petDisplay.innerHTML = `<i class="${pet.icon}"></i>`;
        petDisplay.style.color = pet.color;
        petDisplay.style.display = 'block';
    } else {
        petDisplay.innerHTML = '';
        petDisplay.style.display = 'none';
    }
    
    document.getElementById('player-name-display').textContent = gameState.playerName || 'Player';
}

// ====== THEME SYSTEM ======
function buyTheme(themeId) {
    const theme = shopItems.themes.find(t => t.id === themeId);
    if (!theme) return;
    
    let canAfford = false;
    
    if (theme.priceInDiamonds) {
        canAfford = gameState.diamonds >= theme.price;
    } else {
        canAfford = gameState.gold >= theme.price;
    }
    
    if (canAfford) {
        if (theme.priceInDiamonds) {
            gameState.diamonds -= theme.price;
        } else {
            gameState.gold -= theme.price;
        }
        gameState.purchasedThemes.push(themeId);
        applyTheme(themeId);
        
        updateDisplays();
        saveGameState();
        
        if (theme.priceInDiamonds) {
            showDiamondEffect(-theme.price);
        } else {
            showGoldEffect(-theme.price, "Theme Purchased!");
        }
        playSound('purchase');
        showNotification(`${theme.name} purchased and applied!`, 'success');
    } else {
        if (theme.priceInDiamonds) {
            showNotification(`Not enough diamonds! Need ${theme.price}`, 'error');
        } else {
            showNotification(`Not enough gold! Need ${theme.price}`, 'error');
        }
    }
}

function applyTheme(themeId) {
    // Remove all theme classes except pet themes
    document.body.classList.remove('theme-earth', 'theme-sea', 'theme-sky', 'theme-space', 'theme-luckycat', 'theme-cosmic');
    
    // Add new theme class
    if (themeId !== 'default') {
        document.body.classList.add(`theme-${themeId}`);
        gameState.activeTheme = themeId;
        
        // Create theme effects (but don't override pet effects)
        if (!gameState.equippedPet || 
            !['meowl', 'rainbow_phoenix', 'time_travel_turtle', 'cosming_dragon', 'elder_god_butterfly', 'diamond_centipede', 'humanoid_gold_seeker', 'carlito_cocofanto', 'tungtung_sahur', 'crazy_dog', 'croco_boy', '3dm4rk', 'entity'].includes(gameState.equippedPet)) {
            createThemeEffects(themeId);
        }
    } else {
        gameState.activeTheme = 'default';
        if (!gameState.equippedPet || 
            !['meowl', 'rainbow_phoenix', 'time_travel_turtle', 'cosming_dragon', 'elder_god_butterfly', 'diamond_centipede', 'humanoid_gold_seeker', 'carlito_cocofanto', 'tungtung_sahur', 'crazy_dog', 'croco_boy', '3dm4rk', 'entity'].includes(gameState.equippedPet)) {
            clearThemeEffects();
        }
    }
    
    // If Lucky Cat is equipped, ensure its theme is also applied
    if (gameState.equippedPet === 'lucky_cat' && themeId !== 'luckycat') {
        document.body.classList.add('theme-luckycat');
        createLuckyCatEffects();
    }
    
    saveGameState();
}

function createThemeEffects(themeId) {
    const effectsContainer = document.getElementById('theme-effects');
    effectsContainer.innerHTML = '';
    
    // Create main effect
    const effect = document.createElement('div');
    effect.className = `theme-effect ${themeId}-effect`;
    effectsContainer.appendChild(effect);
    
    // Create particles for space theme
    if (themeId === 'space') {
        createSpaceParticles();
    }
    // Create particles for Lucky Cat theme
    if (themeId === 'luckycat' || gameState.equippedPet === 'lucky_cat') {
        createCatParticles();
    }
    // Create particles for cosmic theme
    if (themeId === 'cosmic') {
        createCosmicEffects();
    }
}

function clearThemeEffects() {
    const effectsContainer = document.getElementById('theme-effects');
    effectsContainer.innerHTML = '';
}

function createSpaceParticles() {
    const effectsContainer = document.getElementById('theme-effects');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'theme-particle';
        particle.style.width = `${Math.random() * 4 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px currentColor`;
        particle.style.animation = `float ${Math.random() * 20 + 10}s infinite linear`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        effectsContainer.appendChild(particle);
    }
}

function createCatParticles() {
    const effectsContainer = document.getElementById('theme-effects');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'theme-particle';
        particle.innerHTML = '<i class="fas fa-paw" style="font-size: 0.8rem;"></i>';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.color = '#ff6b9d';
        particle.style.opacity = '0.7';
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite linear`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        effectsContainer.appendChild(particle);
    }
}

// ====== MYSTERY BOX SYSTEM ======
function buyMysteryBox(type) {
    const prices = {
        epic: 250,
        legendary: 1000,
        cosmic: 50000
    };
    
    const price = prices[type];
    
    if (gameState.gold >= price) {
        gameState.gold -= price;
        gameState.mysteryBoxesOpened++;
        
        // Get random rewards
        const rewards = getMysteryBoxRewards(type);
        
        // Show mystery box modal
        showMysteryBoxModal(rewards, type);
        
        updateDisplays();
        saveGameState();
        
        showGoldEffect(-price, "Mystery Box!");
        playSound('purchase');
        playSound('mystery');
        
        showNotification(`Opened ${type} Mystery Box!`, 'success');
    } else {
        showNotification(`Not enough gold! Need ${price}`, 'error');
    }
}

function getMysteryBoxRewards(type) {
    const rewardPool = mysteryBoxRewards[type];
    const rewards = [];
    
    // Get 1-3 random rewards
    const numRewards = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < numRewards; i++) {
        // For cosmic box, use chance-based selection
        if (type === 'cosmic') {
            const random = Math.random();
            let cumulativeChance = 0;
            
            for (const reward of rewardPool) {
                cumulativeChance += reward.chance || 0.2; // Default 20% chance if not specified
                if (random <= cumulativeChance) {
                    rewards.push({...reward});
                    break;
                }
            }
        } else {
            const randomReward = rewardPool[Math.floor(Math.random() * rewardPool.length)];
            rewards.push({...randomReward});
        }
    }
    
    return rewards;
}

function showMysteryBoxModal(rewards, boxType) {
    const container = document.getElementById('mystery-rewards-container');
    container.innerHTML = '';
    
    let totalGold = 0;
    let totalLives = 0;
    let deductionAmount = 0;
    
    rewards.forEach(reward => {
        const rewardItem = document.createElement('div');
        rewardItem.className = 'mystery-reward-item';
        
        let description = '';
        
        switch(reward.type) {
            case 'gold':
                if (reward.amount === 'all') {
                    deductionAmount = gameState.gold;
                    gameState.gold = 0;
                    description = `Lost all ${deductionAmount} gold!`;
                } else {
                    totalGold += reward.amount;
                    description = `+${reward.amount} Gold`;
                }
                break;
            case 'life':
                totalLives += reward.amount;
                description = `+${reward.amount} Extra Life`;
                break;
            case 'hint':
                // Add free hints
                description = `${reward.amount} Free Hints`;
                break;
            case 'streak':
                gameState.streak += reward.amount;
                description = `+${reward.amount} Streak Bonus`;
                break;
            case 'permanent':
                gameState.permanentPowerUps[reward.item] = true;
                gameState.purchasedItems.push(reward.item);
                description = `${reward.name} Unlocked!`;
                break;
            case 'pet':
                if (!gameState.purchasedItems.includes(reward.petId)) {
                    gameState.purchasedItems.push(reward.petId);
                    gameState.totalPets++;
                    description = `${reward.name} Unlocked!`;
                } else {
                    // If already owned, give gold instead
                    totalGold += 200;
                    description = `Pet Already Owned (Converted to 200 gold)`;
                }
                break;
            case 'diamonds':
                gameState.diamonds += reward.amount;
                description = `+${reward.amount} Diamonds`;
                break;
            case 'deduction':
                deductionAmount = gameState.gold;
                gameState.gold = 0;
                description = `${reward.description || 'Lost all gold!'}`;
                break;
            case 'theme':
                if (!gameState.purchasedThemes.includes(reward.themeId)) {
                    gameState.purchasedThemes.push(reward.themeId);
                    applyTheme(reward.themeId);
                    description = `${reward.name} Unlocked!`;
                } else {
                    totalGold += 5000;
                    description = `Theme Already Owned (Converted to 5000 gold)`;
                }
                break;
        }
        
        rewardItem.innerHTML = `
            <div class="mystery-reward-icon">
                <i class="${reward.icon}" style="color:${reward.color}"></i>
            </div>
            <div class="mystery-reward-info">
                <div class="mystery-reward-title">${reward.name}</div>
                <div class="mystery-reward-description">${description}</div>
            </div>
        `;
        container.appendChild(rewardItem);
    });
    
    // Apply bulk rewards
    if (totalGold > 0) {
        gameState.gold += totalGold;
        gameState.totalGoldEarned += totalGold;
    }
    if (totalLives > 0) {
        gameState.lives = Math.min(gameState.maxLives, gameState.lives + totalLives);
        updateLivesDisplay();
    }
    
    // Update displays
    updateDisplays();
    updatePowerUpButtons();
    
    // Show the modal
    document.getElementById('mystery-modal').style.display = 'flex';
}

// ====== POWER-UPS & EXTENSIONS ======
function buyPermanentPowerUp(type) {
    const prices = {
        unlimitedHints: 1000,
        streakShield: 500,
        levelSkipper: 2000
    };
    
    const price = prices[type];
    
    if (gameState.gold >= price) {
        gameState.gold -= price;
        gameState.permanentPowerUps[type] = true;
        gameState.purchasedItems.push(type);
        
        updateDisplays();
        updatePowerUpButtons();
        saveGameState();
        
        showGoldEffect(-price, `${type} unlocked!`);
        playSound('purchase');
        
        showNotification(`${type.replace(/([A-Z])/g, ' $1')} unlocked!`, 'success');
    } else {
        showNotification(`Not enough gold! Need ${price}`, 'error');
    }
}

function buyExtension(extension) {
    const prices = {
        levelExtension: 5000,
        megaLevelExtension: 50000
    };
    
    const price = prices[extension];
    
    if (gameState.gold >= price) {
        gameState.gold -= price;
        gameState[extension] = true;
        
        if (extension === 'megaLevelExtension') {
            gameState.maxLevels = 999;
        } else if (extension === 'levelExtension') {
            gameState.maxLevels = 100;
        }
        
        updateDisplays();
        saveGameState();
        
        showGoldEffect(-price, `${extension} unlocked!`);
        playSound('purchase');
        
        showNotification("Levels extension unlocked!", 'success');
    } else {
        showNotification(`Not enough gold! Need ${price}`, 'error');
    }
}

function updatePowerUpButtons() {
    const hintBtn = document.getElementById('hint-btn');
    const lifeBtn = document.getElementById('life-btn');
    const tagnaBtn = document.getElementById('tagna-btn');
    const goldrushBtn = document.getElementById('goldrush-btn');
    
    if (!hintBtn || !lifeBtn || !tagnaBtn || !goldrushBtn) return;
    
    // Update hint button - FIXED: Don't deduct gold if unlimited hints
    if (gameState.permanentPowerUps.unlimitedHints) {
        hintBtn.disabled = !gameState.gameActive;
    } else {
        hintBtn.disabled = gameState.gold < 2 || gameState.activePowerUps.hintUsed || !gameState.gameActive;
    }
    
    // Update other buttons
    lifeBtn.disabled = gameState.gold < 50 || gameState.lives >= gameState.maxLives || !gameState.gameActive;
    tagnaBtn.disabled = gameState.gold < 15 || gameState.activePowerUps.tagnaUsed || !gameState.gameActive;
    goldrushBtn.disabled = gameState.gold < 100 || gameState.activePowerUps.goldrush || !gameState.gameActive;
}

function usePowerUp(type) {
    const costs = {
        hint: 2,
        extralife: 50,
        tagna: 15,
        goldrush: 100
    };
    
    const cost = costs[type];
    
    // FIXED: Don't deduct gold for hint if unlimited hints is purchased
    if (type === 'hint' && gameState.permanentPowerUps.unlimitedHints) {
        // Use hint without deducting gold
        useHintPowerUp();
        return;
    }
    
    if (gameState.gold >= cost) {
        gameState.gold -= cost;
        
        switch(type) {
            case 'hint':
                if (!gameState.permanentPowerUps.unlimitedHints) {
                    gameState.activePowerUps.hintUsed = true;
                }
                useHintPowerUp();
                break;
                
            case 'extralife':
                if (gameState.lives < gameState.maxLives) {
                    gameState.lives++;
                    updateLivesDisplay();
                    showNotification('Extra life purchased!', 'success');
                }
                break;
                
            case 'tagna':
                gameState.activePowerUps.tagnaUsed = true;
                useTagnaPowerUp();
                break;
                
            case 'goldrush':
                gameState.activePowerUps.goldrush = true;
                showNotification('Gold Rush activated! Next gold x2!', 'success');
                break;
        }
        
        updateDisplays();
        updatePowerUpButtons();
        showGoldEffect(-cost, `${type} activated!`);
        playSound('purchase');
        
        saveGameState();
    } else {
        showNotification(`Not enough gold! Need ${cost}`, 'error');
    }
}

function useHintPowerUp() {
    // Reveal one wrong option
    const wrongOptions = Array.from({length: gameState.optionsCount}, (_, i) => i)
        .filter(i => i !== gameState.goldPosition && !gameState.revealedOptions.includes(i));
    
    if (wrongOptions.length > 0) {
        const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
        gameState.revealedOptions.push(randomWrong);
        generateOptions();
        showNotification('Hint used! One wrong option revealed.', 'info');
    } else {
        showNotification('No wrong options left to reveal!', 'info');
    }
}

function useTagnaPowerUp() {
    // NEW IMPROVED Tagna: Remove all but 2 options (including the gold)
    // This gives you a 50/50 chance to find the gold!
    
    // First, find all unrevealed options
    const allOptions = Array.from({length: gameState.optionsCount}, (_, i) => i);
    const unrevealedOptions = allOptions.filter(i => !gameState.revealedOptions.includes(i));
    
    // We need to keep exactly 2 options: the gold and one wrong option
    const optionsToKeep = [gameState.goldPosition];
    
    // Add one random wrong option to keep
    const wrongOptions = unrevealedOptions.filter(i => i !== gameState.goldPosition);
    if (wrongOptions.length > 0) {
        const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
        optionsToKeep.push(randomWrong);
    } else {
        // If no wrong options, just keep the gold
        // Add any other option
        const otherOptions = allOptions.filter(i => i !== gameState.goldPosition);
        if (otherOptions.length > 0) {
            optionsToKeep.push(otherOptions[0]);
        }
    }
    
    // Mark all other options as eliminated
    const optionsToEliminate = allOptions.filter(i => !optionsToKeep.includes(i));
    
    // Play Tagna sound
    playSound('tagna');
    
    // Animate elimination of options
    animateTagnaElimination(optionsToEliminate, optionsToKeep);
    
    showNotification('Tagna activated! Eliminating options...', 'info');
}

function animateTagnaElimination(optionsToEliminate, optionsToKeep) {
    // Get all option elements
    const optionElements = document.querySelectorAll('.option');
    
    // Add eliminating animation to options to eliminate
    optionsToEliminate.forEach(index => {
        const optionElement = optionElements[index];
        if (optionElement) {
            // Add animation class
            optionElement.classList.add('tagna-eliminating');
            
            // After animation completes, mark as eliminated
            setTimeout(() => {
                optionElement.classList.remove('tagna-eliminating');
                optionElement.classList.add('eliminated');
                optionElement.innerHTML = '<i class="fas fa-times"></i>';
                optionElement.style.pointerEvents = 'none';
                optionElement.style.cursor = 'not-allowed';
                
                // Add to revealed options
                if (!gameState.revealedOptions.includes(index)) {
                    gameState.revealedOptions.push(index);
                }
            }, 500);
        }
    });
    
    // Highlight the remaining options
    setTimeout(() => {
        optionsToKeep.forEach(index => {
            const optionElement = optionElements[index];
            if (optionElement) {
                // Add pulse animation to remaining options
                optionElement.classList.add('pulse');
                
                // If it's the gold, show special effect
                if (index === gameState.goldPosition) {
                    optionElement.style.boxShadow = '0 0 20px #51cf66';
                } else {
                    optionElement.style.boxShadow = '0 0 20px #ff6b6b';
                }
            }
        });
        
        // Show message
        const instruction = document.getElementById('instruction');
        instruction.innerHTML = `<span style="color:#cc5de8">Tagna activated! Only 2 options remain. 50/50 chance to find the gold!</span>`;
        
        // Update power-up button
        updatePowerUpButtons();
        
    }, 600);
}

// ====== PETS GALLERY ======
function showPetsGallery() {
    const container = document.getElementById('pets-gallery-container');
    container.innerHTML = '';
    
    // Add all pets to gallery
    shopItems.pets.forEach(pet => {
        // Skip "none" pet
        if (pet.id === 'none') return;
        
        // Skip cosmic pets that aren't owned and are draw-only
        if (pet.isCosmic && pet.price === 0 && !gameState.purchasedItems.includes(pet.id)) {
            return;
        }
        
        const isOwned = gameState.purchasedItems.includes(pet.id);
        const isEquipped = gameState.equippedPet === pet.id;
        
        const petElement = document.createElement('div');
        petElement.className = `pet-gallery-item ${isOwned ? 'owned' : 'not-owned'}`;
        if (isEquipped) {
            petElement.style.borderColor = '#4dabf7';
            petElement.style.boxShadow = '0 0 10px #4dabf7';
        }
        
        petElement.innerHTML = `
            <div class="pet-gallery-icon" style="color:${pet.color}">
                <i class="${pet.icon}"></i>
            </div>
            <div class="pet-gallery-name">${pet.name}</div>
            <div class="pet-gallery-rarity rarity-${pet.rarity}">
                ${pet.rarity.toUpperCase()}${pet.isCosmic ? ' COSMIC' : ''}
            </div>
            <div style="font-size:0.7rem; color:#aaa; text-align:center;">
                ${pet.effect}
            </div>
            ${isOwned ? 
                `<div style="font-size:0.7rem; color:#51cf66; margin-top:5px;">
                    <i class="fas fa-check"></i> Owned${isEquipped ? ' & Equipped' : ''}
                </div>` : 
                `<div style="font-size:0.7rem; color:#ff6b6b; margin-top:5px;">
                    <i class="fas fa-times"></i> Not Owned
                </div>`
            }
        `;
        
        container.appendChild(petElement);
    });
    
    // Show the modal
    document.getElementById('pets-gallery-modal').style.display = 'flex';
}

// ====== STATS SYSTEM ======
function showStatsModal() {
    const totalGuesses = gameState.totalCorrect + gameState.totalWrong;
    const accuracy = totalGuesses > 0 ? Math.round((gameState.totalCorrect / totalGuesses) * 100) : 0;
    
    document.getElementById('stats-total-games').textContent = gameState.totalGames;
    document.getElementById('stats-total-gold').textContent = gameState.totalGoldEarned;
    document.getElementById('stats-correct-guesses').textContent = gameState.totalCorrect;
    document.getElementById('stats-wrong-guesses').textContent = gameState.totalWrong;
    document.getElementById('stats-accuracy').textContent = `${accuracy}%`;
    document.getElementById('stats-highest-streak').textContent = gameState.highestStreak;
    document.getElementById('stats-pets').textContent = gameState.totalPets;
    document.getElementById('stats-mystery-boxes').textContent = gameState.mysteryBoxesOpened;
    
    document.getElementById('stats-modal').style.display = 'flex';
}

// ====== HELPER FUNCTIONS ======
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    
    // Set color based on type
    switch(type) {
        case 'success':
            notification.style.borderLeftColor = '#51cf66';
            notification.style.background = 'rgba(81, 207, 102, 0.1)';
            break;
        case 'error':
            notification.style.borderLeftColor = '#ff6b6b';
            notification.style.background = 'rgba(255, 107, 107, 0.1)';
            break;
        case 'info':
            notification.style.borderLeftColor = '#4dabf7';
            notification.style.background = 'rgba(77, 171, 247, 0.1)';
            break;
    }
    
    notification.style.display = 'block';
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

function showLoading() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

function showGoldEffect(amount, message) {
    const effect = document.createElement('div');
    effect.className = 'gold-collect';
    effect.textContent = `${amount > 0 ? '+' : ''}${amount} ${message}`;
    effect.style.left = `${Math.random() * 80 + 10}%`;
    effect.style.top = `${Math.random() * 50 + 25}%`;
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        effect.remove();
    }, 1500);
}

function updateSoundButton() {
    const icon = document.querySelector('#sound-toggle i');
    if (!icon) return;
    
    if (soundEnabled) {
        icon.className = 'fas fa-volume-up';
    } else {
        icon.className = 'fas fa-volume-mute';
    }
}

function updateMusicControls() {
    const musicToggle = document.getElementById('music-toggle');
    const musicSlider = document.getElementById('music-volume');
    const musicControls = document.getElementById('music-controls');
    
    if (!musicToggle || !musicSlider || !musicControls) return;
    
    // Update slider value
    musicSlider.value = gameState.musicVolume * 100;
    
    // Update toggle button state
    const musicIcon = musicToggle.querySelector('i');
    if (gameState.musicEnabled) {
        musicIcon.className = 'fas fa-volume-up';
        musicToggle.classList.add('music-playing');
    } else {
        musicIcon.className = 'fas fa-volume-mute';
        musicToggle.classList.remove('music-playing');
    }
    
    // Apply volume to all music
    const bgMusic = document.getElementById('background-music');
    if (bgMusic) {
        bgMusic.volume = gameState.musicVolume;
    }
    
    const meowlMusic = document.getElementById('meowl-music');
    if (meowlMusic) {
        meowlMusic.volume = gameState.musicVolume * 0.5;
    }
    
    const cosmicMusic = document.getElementById('cosmic-music');
    if (cosmicMusic) {
        cosmicMusic.volume = gameState.musicVolume * 0.7;
    }
    
    // Show/hide music controls based on pet
    if (gameState.equippedPet === 'music_dragon') {
        musicControls.style.display = 'flex';
    } else {
        musicControls.style.display = 'none';
    }
}

function setupEventListeners() {
    // Welcome system
    setupWelcomeSystem();
    
    // Redeem system
    setupRedeemSystem();
    
    // Game controls
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('next-btn').addEventListener('click', () => {
        gameState.isSelecting = false;
        nextLevel();
    });
    document.getElementById('restart-btn').addEventListener('click', initGame);
    document.getElementById('shop-btn').addEventListener('click', () => {
        updateDisplays();
        loadShopItems();
    });
    document.getElementById('stats-btn').addEventListener('click', showStatsModal);
    document.getElementById('gallery-btn').addEventListener('click', showPetsGallery);
    
    // Timer modal close
    document.getElementById('close-timer-btn').addEventListener('click', function() {
        document.getElementById('timer-modal').style.display = 'none';
        initGame();
    });
    
    // Pets gallery close
    document.getElementById('close-gallery-btn').addEventListener('click', function() {
        document.getElementById('pets-gallery-modal').style.display = 'none';
    });
    
    // Shop tabs
    const shopTabs = document.querySelectorAll('.shop-tab');
    shopTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Play button sound
            playSound('click');
            
            // Update active tab
            shopTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            document.querySelectorAll('.shop-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Modal close buttons
    document.getElementById('close-reward-btn').addEventListener('click', function() {
        document.getElementById('reward-modal').style.display = 'none';
        gameState.isSelecting = false;
        nextLevel();
    });
    
    document.getElementById('close-mystery-btn').addEventListener('click', function() {
        document.getElementById('mystery-modal').style.display = 'none';
        loadShopItems(); // Refresh shop to show new items
    });
    
    document.getElementById('close-stats-btn').addEventListener('click', function() {
        document.getElementById('stats-modal').style.display = 'none';
    });
    
    // Sound controls
    document.getElementById('sound-toggle').addEventListener('click', function() {
        soundEnabled = toggleSound();
        updateSoundButton();
        saveGameState();
        showNotification(`Sound ${soundEnabled ? 'enabled' : 'disabled'}`, 'info');
    });
    
    // Music controls
    document.getElementById('music-toggle').addEventListener('click', function() {
        gameState.musicEnabled = !gameState.musicEnabled;
        
        if (gameState.musicEnabled) {
            if (gameState.equippedPet === 'music_dragon') {
                if (gameState.gameActive) {
                    startBackgroundMusic();
                }
            } else if (gameState.equippedPet === 'meowl') {
                // Meowl has its own music
                const meowlMusic = document.getElementById('meowl-music');
                if (meowlMusic && gameState.gameActive) {
                    meowlMusic.play().catch(e => console.log("Meowl music play failed:", e));
                }
            } else if (['cosming_dragon', '3dm4rk', 'entity'].includes(gameState.equippedPet)) {
                // Cosmic pets have cosmic music
                const cosmicMusic = document.getElementById('cosmic-music');
                if (cosmicMusic && gameState.gameActive) {
                    cosmicMusic.play().catch(e => console.log("Cosmic music play failed:", e));
                }
            } else {
                showNotification('Special pet required for background music!', 'error');
                gameState.musicEnabled = false;
            }
        } else {
            stopBackgroundMusic();
            stopCosmicMusic();
        }
        
        updateMusicControls();
        saveGameState();
        showNotification(`Music ${gameState.musicEnabled ? 'enabled' : 'disabled'}`, 'info');
    });
    
    document.getElementById('music-volume').addEventListener('input', function() {
        gameState.musicVolume = this.value / 100;
        
        // Update all music volumes
        const bgMusic = document.getElementById('background-music');
        if (bgMusic) {
            bgMusic.volume = gameState.musicVolume;
        }
        
        const meowlMusic = document.getElementById('meowl-music');
        if (meowlMusic) {
            meowlMusic.volume = gameState.musicVolume * 0.5;
        }
        
        const cosmicMusic = document.getElementById('cosmic-music');
        if (cosmicMusic) {
            cosmicMusic.volume = gameState.musicVolume * 0.7;
        }
        
        saveGameState();
    });
    
    // Close modals when clicking outside
    const modals = ['reward-modal', 'game-over', 'mystery-modal', 'stats-modal', 'welcome-modal', 'redeem-modal', 'god-tier-modal', 'cosmic-draw-modal', 'pets-gallery-modal', 'timer-modal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.style.display = 'none';
                    // Clear redeem input if closing redeem modal
                    if (modalId === 'redeem-modal') {
                        document.getElementById('redeem-code-input').value = '';
                    }
                    // Refresh shop if closing god tier or cosmic modal
                    if (modalId === 'god-tier-modal' || modalId === 'cosmic-draw-modal') {
                        loadShopItems();
                    }
                }
            });
        }
    });
    
    // Add click sounds to buttons
    const buttons = document.querySelectorAll('button:not(.sound-btn):not(.music-btn)');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            playSound('click');
        });
    });
}

// ====== PET EFFECTS ======
function updatePetEffects() {
    applyMusicDragonEffects();
    updatePetEffectDisplays();
    createPetThemeEffects();
}

function applyMusicDragonEffects() {
    if (gameState.equippedPet === 'music_dragon') {
        // Show music controls
        document.getElementById('music-controls').style.display = 'flex';
        
        // Add visual effect for Music Dragon
        let dragonEffect = document.getElementById('dragon-effect');
        if (!dragonEffect) {
            dragonEffect = document.createElement('div');
            dragonEffect.id = 'dragon-effect';
            dragonEffect.style.position = 'fixed';
            dragonEffect.style.top = '0';
            dragonEffect.style.left = '0';
            dragonEffect.style.width = '100%';
            dragonEffect.style.height = '100%';
            dragonEffect.style.pointerEvents = 'none';
            dragonEffect.style.zIndex = '-1';
            dragonEffect.style.background = 'radial-gradient(circle at 50% 50%, rgba(156, 136, 255, 0.1) 0%, transparent 50%)';
            dragonEffect.style.animation = 'float 15s infinite ease-in-out';
            document.body.appendChild(dragonEffect);
        }
    } else {
        // Remove dragon effect if not equipped
        const dragonEffect = document.getElementById('dragon-effect');
        if (dragonEffect) {
            dragonEffect.remove();
        }
    }
}

// ====== GOLD MULTIPLIERS FROM PETS ======
function calculateGoldMultiplier() {
    let multiplier = 1;
    
    // Apply theme bonus
    if (gameState.activeTheme !== 'default') {
        multiplier *= gameState.themeBonuses[gameState.activeTheme];
    }
    
    // Apply pet bonuses
    if (gameState.equippedPet !== 'none') {
        const pet = shopItems.pets.find(p => p.id === gameState.equippedPet);
        
        if (pet) {
            switch(pet.id) {
                case 'rainbow_phoenix':
                    multiplier *= 1.25; // 25% gold bonus
                    break;
                case 'time_travel_turtle':
                    multiplier *= 1.30; // 30% gold bonus
                    break;
                case 'cosmic':
                case 'entity':
                    multiplier *= 1.50; // 50% gold bonus
                    break;
                // Other pets can add specific multipliers here
            }
        }
    }
    
    return multiplier;
}

// ====== ACHIEVEMENT SYSTEM ======
function checkAchievements() {
    const achievements = [];
    
    // Gold milestones
    if (gameState.gold >= 1000) achievements.push('Thousandaire: Reach 1,000 gold');
    if (gameState.gold >= 10000) achievements.push('Ten Thousandaire: Reach 10,000 gold');
    if (gameState.gold >= 100000) achievements.push('Hundred Thousandaire: Reach 100,000 gold');
    if (gameState.gold >= 1000000) achievements.push('Millionaire: Reach 1,000,000 gold');
    
    // Diamond milestones
    if (gameState.diamonds >= 10) achievements.push('Diamond Collector: Collect 10 diamonds');
    if (gameState.diamonds >= 100) achievements.push('Diamond Hoarder: Collect 100 diamonds');
    
    // Streak achievements
    if (gameState.highestStreak >= 10) achievements.push('Hot Streak: Achieve a 10+ streak');
    if (gameState.highestStreak >= 50) achievements.push('Unstoppable: Achieve a 50+ streak');
    if (gameState.highestStreak >= 100) achievements.push('Legendary Streak: Achieve a 100+ streak');
    
    // Level achievements
    if (gameState.level >= 50) achievements.push('Halfway There: Reach level 50');
    if (gameState.level >= 100) achievements.push('Centurion: Reach level 100');
    if (gameState.level >= 500) achievements.push('Master Explorer: Reach level 500');
    
    // Pet achievements
    if (gameState.totalPets >= 5) achievements.push('Pet Collector: Own 5 pets');
    if (gameState.totalPets >= 10) achievements.push('Pet Master: Own 10 pets');
    if (gameState.totalPets >= 15) achievements.push('Pet Legend: Own 15 pets');
    
    // Mystery box achievements
    if (gameState.mysteryBoxesOpened >= 10) achievements.push('Mystery Enthusiast: Open 10 mystery boxes');
    if (gameState.mysteryBoxesOpened >= 50) achievements.push('Mystery Master: Open 50 mystery boxes');
    
    // Cosmic pet achievement
    const cosmicPetsOwned = cosmicPets.filter(petId => 
        gameState.purchasedItems.includes(petId)
    ).length;
    if (cosmicPetsOwned >= 1) achievements.push('Cosmic Explorer: Own a cosmic pet');
    if (cosmicPetsOwned >= 3) achievements.push('Cosmic Collector: Own 3 cosmic pets');
    if (cosmicPetsOwned >= 5) achievements.push('Cosmic Master: Own 5 cosmic pets');
    
    return achievements;
}

// ====== AUTO-SAVE SYSTEM ======
function startAutoSave() {
    // Auto-save every 30 seconds
    setInterval(() => {
        if (gameState.gameActive) {
            saveGameState();
            console.log("Game auto-saved");
        }
    }, 30000);
}

// ====== BACKUP/RESTORE SYSTEM ======
function exportGameData() {
    const gameData = {
        playerName: gameState.playerName,
        gold: gameState.gold,
        diamonds: gameState.diamonds,
        purchasedItems: gameState.purchasedItems,
        equippedAvatar: gameState.equippedAvatar,
        equippedFrame: gameState.equippedFrame,
        equippedPet: gameState.equippedPet,
        purchasedThemes: gameState.purchasedThemes,
        activeTheme: gameState.activeTheme,
        redeemedCodes: gameState.redeemedCodes,
        petAbilities: gameState.petAbilities,
        highScore: gameState.highScore,
        totalGoldEarned: gameState.totalGoldEarned,
        totalGames: gameState.totalGames,
        totalCorrect: gameState.totalCorrect,
        totalWrong: gameState.totalWrong,
        highestStreak: gameState.highestStreak,
        totalPets: gameState.totalPets,
        mysteryBoxesOpened: gameState.mysteryBoxesOpened,
        cosmicDrawUsed: gameState.cosmicDrawUsed,
        megaLevelExtension: gameState.megaLevelExtension
    };
    
    const dataStr = JSON.stringify(gameData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `gtg-save-${new Date().toISOString().slice(0,10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('Game data exported successfully!', 'success');
}

function importGameData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(event) {
            try {
                const importedData = JSON.parse(event.target.result);
                
                // Validate imported data
                if (!importedData.playerName || !importedData.gold) {
                    throw new Error('Invalid save file');
                }
                
                // Update game state with imported data
                Object.keys(importedData).forEach(key => {
                    if (gameState[key] !== undefined) {
                        gameState[key] = importedData[key];
                    }
                });
                
                // Update global soundEnabled flag
                if (importedData.soundEnabled !== undefined) {
                    soundEnabled = importedData.soundEnabled;
                }
                
                // Update displays
                initGame();
                loadShopItems();
                applyTheme(gameState.activeTheme);
                
                showNotification('Game data imported successfully!', 'success');
                
            } catch (error) {
                showNotification('Error importing save file: ' + error.message, 'error');
                console.error('Import error:', error);
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

// ====== KEYBOARD SHORTCUTS ======
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Don't trigger shortcuts if user is typing in an input field
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key.toLowerCase()) {
            case ' ':
            case 'enter':
                // Space or Enter to start/next
                if (!gameState.gameActive) {
                    document.getElementById('start-btn').click();
                } else if (gameState.isSelecting) {
                    // Can't skip selection
                } else {
                    // If next button is visible, click it
                    const nextBtn = document.getElementById('next-btn');
                    if (nextBtn && nextBtn.style.display !== 'none') {
                        nextBtn.click();
                    }
                }
                break;
                
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                // Number keys to select options (1-0 for options 1-10)
                const num = parseInt(e.key === '0' ? 10 : e.key) - 1;
                if (gameState.gameActive && 
                    !gameState.isSelecting && 
                    num < gameState.optionsCount && 
                    !gameState.revealedOptions.includes(num)) {
                    
                    const options = document.querySelectorAll('.option');
                    if (options[num] && !options[num].classList.contains('eliminated')) {
                        options[num].click();
                    }
                }
                break;
                
            case 'h':
                // H for hint
                const hintBtn = document.getElementById('hint-btn');
                if (hintBtn && !hintBtn.disabled) {
                    hintBtn.click();
                }
                break;
                
            case 't':
                // T for Tagna
                const tagnaBtn = document.getElementById('tagna-btn');
                if (tagnaBtn && !tagnaBtn.disabled) {
                    tagnaBtn.click();
                }
                break;
                
            case 'g':
                // G for Gold Rush
                const goldrushBtn = document.getElementById('goldrush-btn');
                if (goldrushBtn && !goldrushBtn.disabled) {
                    goldrushBtn.click();
                }
                break;
                
            case 'l':
                // L for extra life
                const lifeBtn = document.getElementById('life-btn');
                if (lifeBtn && !lifeBtn.disabled) {
                    lifeBtn.click();
                }
                break;
                
            case 'r':
                // R for redeem
                document.getElementById('redeem-btn').click();
                break;
                
            case 's':
                // S for shop
                document.getElementById('shop-btn').click();
                break;
                
            case 'm':
                // M for stats
                document.getElementById('stats-btn').click();
                break;
                
            case 'p':
                // P for pets gallery
                document.getElementById('gallery-btn').click();
                break;
                
            case 'escape':
                // Escape to close modals
                const openModals = document.querySelectorAll('.welcome-modal, .reward-modal, .game-over, .mystery-modal, .stats-modal, .redeem-modal, .god-tier-modal, .cosmic-draw-modal, .pets-gallery-modal, .timer-modal');
                for (const modal of openModals) {
                    if (modal.style.display === 'flex') {
                        modal.style.display = 'none';
                        
                        // Clear redeem input if closing redeem modal
                        if (modal.id === 'redeem-modal') {
                            document.getElementById('redeem-code-input').value = '';
                        }
                        
                        // Refresh shop if closing god tier or cosmic modal
                        if (modal.id === 'god-tier-modal' || modal.id === 'cosmic-draw-modal') {
                            loadShopItems();
                        }
                        
                        break;
                    }
                }
                break;
        }
    });
}

// ====== TOOLTIPS ======
function setupTooltips() {
    // Add tooltips to all buttons and interactive elements
    const tooltipElements = document.querySelectorAll('[title], .option, .shop-item, .power-up-item, .btn, .shop-tab');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            // Show custom tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'custom-tooltip';
            tooltip.textContent = this.title || this.dataset.tooltip || '';
            
            if (tooltip.textContent) {
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
                
                // Remove tooltip after 3 seconds
                setTimeout(() => {
                    if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, 3000);
            }
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.custom-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Add custom tooltip CSS
const tooltipCSS = `
.custom-tooltip {
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 0.9rem;
    z-index: 10000;
    pointer-events: none;
    animation: fadeIn 0.2s ease;
    border: 1px solid var(--theme-primary);
    max-width: 300px;
    text-align: center;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = tooltipCSS;
document.head.appendChild(styleSheet);

// ====== SESSION STATS ======
function getSessionStats() {
    const sessionStartTime = localStorage.getItem('gtgSessionStartTime');
    const now = Date.now();
    
    if (!sessionStartTime) {
        localStorage.setItem('gtgSessionStartTime', now);
        return {
            sessionDuration: 0,
            goldEarned: 0,
            levelsCompleted: 0,
            correctGuesses: 0
        };
    }
    
    const sessionDuration = Math.floor((now - parseInt(sessionStartTime)) / 1000); // in seconds
    
    // Get session stats from saved state
    const sessionStats = {
        sessionDuration: sessionDuration,
        goldEarned: gameState.totalGoldEarned - (parseInt(localStorage.getItem('gtgSessionStartGold')) || 0),
        levelsCompleted: gameState.level - (parseInt(localStorage.getItem('gtgSessionStartLevel')) || 0),
        correctGuesses: gameState.totalCorrect - (parseInt(localStorage.getItem('gtgSessionStartCorrect')) || 0)
    };
    
    return sessionStats;
}

function updateSessionStats() {
    if (!localStorage.getItem('gtgSessionStartTime')) {
        localStorage.setItem('gtgSessionStartTime', Date.now());
        localStorage.setItem('gtgSessionStartGold', gameState.totalGoldEarned);
        localStorage.setItem('gtgSessionStartLevel', gameState.level);
        localStorage.setItem('gtgSessionStartCorrect', gameState.totalCorrect);
    }
}

// ====== DAILY REWARDS ======
function checkDailyReward() {
    const lastRewardDate = localStorage.getItem('gtgLastRewardDate');
    const today = new Date().toDateString();
    
    if (lastRewardDate !== today) {
        // Give daily reward
        const rewardAmount = 100 + Math.floor(Math.random() * 400); // 100-500 gold
        gameState.gold += rewardAmount;
        gameState.totalGoldEarned += rewardAmount;
        
        localStorage.setItem('gtgLastRewardDate', today);
        saveGameState();
        
        showNotification(`Daily Reward: +${rewardAmount} Gold! Come back tomorrow for more!`, 'success');
        showGoldEffect(rewardAmount, "Daily Reward!");
        
        return true;
    }
    
    return false;
}

// ====== PERFORMANCE OPTIMIZATIONS ======
function optimizePerformance() {
    // Limit particle effects based on performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Reduce effects on mobile
        const particles = document.querySelectorAll('.theme-particle, .rainbow-particle, .time-particle, .cosmic-particle');
        if (particles.length > 20) {
            for (let i = 20; i < particles.length; i++) {
                particles[i].remove();
            }
        }
    }
    
    // Use requestAnimationFrame for smoother animations
    let lastTime = 0;
    function animate(time) {
        const deltaTime = time - lastTime;
        lastTime = time;
        
        // Update any time-based animations here if needed
        
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
}

// ====== ERROR HANDLING ======
function setupErrorHandling() {
    // Global error handler
    window.addEventListener('error', function(e) {
        console.error('Game error:', e.error);
        showNotification('An error occurred. Game state saved.', 'error');
        saveGameState();
    });
    
    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        showNotification('A game error occurred. Please refresh.', 'error');
    });
}

// ====== INITIALIZE ALL SYSTEMS ======
function initializeAllSystems() {
    setupKeyboardShortcuts();
    setupTooltips();
    setupErrorHandling();
    startAutoSave();
    updateSessionStats();
    optimizePerformance();
    
    // Check for daily reward on game start
    setTimeout(() => {
        checkDailyReward();
    }, 2000);
}

// ====== FINAL INITIALIZATION ======
// Call this at the end of DOMContentLoaded
function finalInitialization() {
    // Start all systems
    initializeAllSystems();
    
    // Show welcome message if returning player
    if (gameState.playerName && gameState.totalGames > 0) {
        setTimeout(() => {
            const sessionStats = getSessionStats();
            showNotification(`Welcome back, ${gameState.playerName}! You've played ${gameState.totalGames} games.`, 'info');
        }, 1000);
    }
    
    // Check achievements
    const achievements = checkAchievements();
    if (achievements.length > 0) {
        setTimeout(() => {
            showNotification(`You have ${achievements.length} achievements unlocked!`, 'success');
        }, 1500);
    }
}

// ====== EXPORT GLOBAL FUNCTIONS ======
// Make sure all needed functions are available globally
window.usePowerUp = usePowerUp;
window.useTimeRewind = useTimeRewind;
window.buyMysteryBox = buyMysteryBox;
window.buyPermanentPowerUp = buyPermanentPowerUp;
window.buyExtension = buyExtension;
window.buyTheme = buyTheme;
window.claimRedeemPet = claimRedeemPet;
window.buyItem = buyItem;
window.equipItem = equipItem;
window.showPetsGallery = showPetsGallery;
window.exportGameData = exportGameData;
window.importGameData = importGameData;

// ====== START THE GAME ======
// Update the DOMContentLoaded event to include final initialization
document.addEventListener('DOMContentLoaded', function() {
    // ... existing initialization code ...
    
    // At the end, call:
    finalInitialization();
});
