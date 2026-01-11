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
    
    if (soundEffects[soundName]) {
        soundEffects[soundName]();
    }
}

// Function to toggle sound
function toggleSound() {
    soundEnabled = !soundEnabled;
    updateSoundButton();
    saveGameState();
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
    
    // Avatar Bonuses
    avatarBonuses: {
        default: { blessing: 0, aura: false },
        knight: { blessing: 0.05, aura: false },
        wizard: { blessing: 0.10, aura: false },
        robot: { blessing: 0.15, aura: false },
        celestial_king: { blessing: 0.50, aura: false, streakBonus: 3 },
        divine_avatar: { blessing: 0.65, aura: true, streakBonus: 1 },
        eternal_guardian: { blessing: 0.75, aura: true, streakBonus: 2 },
        cosmic_emperor: { blessing: 1.00, aura: true, streakBonus: 5 }
    },
    
    // Themes
    purchasedThemes: [],
    activeTheme: 'default',
    themeBonuses: {
        earth: 1.05,
        sea: 1.10,
        sky: 1.15,
        space: 1.20,
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
    cosmicDrawUsed: false,
    
    // Avatar streak tracking
    avatarStreakCounter: 0,
    
    // Aura effects
    auraActive: false,
    
    // ROCK PAPER SCISSORS BOSS BATTLE
    rockPaperScissorsUnlocked: false,
    rockPaperScissorsExtensionPrice: 1000000,
    bossBattleActive: false,
    currentBoss: null,
    playerRPSChoice: null,
    bossRPSChoice: null,
    rpsTimer: 5,
    rpsTimerInterval: null,
    rpsLives: 3,
    rpsGameActive: false,
    bossConsecutiveWins: 0
};

// Update the global soundEnabled flag when game state changes
Object.defineProperty(gameState, 'soundEnabled', {
    get() {
        return soundEnabled;
    },
    set(value) {
        soundEnabled = value;
        updateSoundButton();
    }
});

// ====== SHOP ITEMS DATABASE ======
const shopItems = {
    avatars: [
        { 
            id: 'default', 
            name: 'Basic', 
            price: 0, 
            icon: 'fas fa-user', 
            color: '#fff', 
            rarity: 'common',
            effect: 'No special effects',
            attributes: {
                blessing: 0,
                aura: false,
                description: 'Basic avatar with no bonuses'
            }
        },
        { 
            id: 'knight', 
            name: 'Golden Knight', 
            price: 100, 
            icon: 'fas fa-chess-knight', 
            color: '#FFD700', 
            rarity: 'rare',
            effect: '+5% Gold blessing every streak',
            attributes: {
                blessing: 0.05,
                aura: false,
                description: '5% gold bonus on correct guesses'
            }
        },
        { 
            id: 'wizard', 
            name: 'Mystic Wizard', 
            price: 250, 
            icon: 'fas fa-hat-wizard', 
            color: '#9c88ff', 
            rarity: 'epic',
            effect: '+10% Gold blessing every streak',
            attributes: {
                blessing: 0.10,
                aura: false,
                description: '10% gold bonus on correct guesses'
            }
        },
        { 
            id: 'robot', 
            name: 'Gold Bot', 
            price: 500, 
            icon: 'fas fa-robot', 
            color: '#4dabf7', 
            rarity: 'legendary',
            effect: '+15% Gold blessing every streak',
            attributes: {
                blessing: 0.15,
                aura: false,
                description: '15% gold bonus on correct guesses'
            }
        },
        // NEW: Divine Rarity Avatars
        { 
            id: 'celestial_king', 
            name: 'Celestial King', 
            price: 100000, 
            icon: 'fas fa-crown', 
            color: '#FFD700', 
            rarity: 'divine',
            effect: '50% Gold blessing every 3 streaks + Divine Aura',
            attributes: {
                blessing: 0.50,
                aura: false,
                streakBonus: 3,
                description: '50% gold bonus every 3 streaks'
            }
        },
        { 
            id: 'divine_avatar', 
            name: 'Divine Avatar', 
            price: 15, 
            icon: 'fas fa-user-circle', 
            color: '#00ffcc', 
            rarity: 'divine',
            effect: '65% Ungodly blessings + Blue Flame Aura',
            attributes: {
                blessing: 0.65,
                aura: true,
                auraColor: '#00ffcc',
                auraType: 'flame',
                description: '65% gold bonus + Blue flame aura on options'
            },
            priceInDiamonds: true
        },
        { 
            id: 'eternal_guardian', 
            name: 'Eternal Guardian', 
            price: 500000, 
            icon: 'fas fa-shield-alt', 
            color: '#8a2be2', 
            rarity: 'cosmic',
            effect: '75% Blessings + Cosmic Aura + Streak Shield',
            attributes: {
                blessing: 0.75,
                aura: true,
                auraColor: '#8a2be2',
                auraType: 'cosmic',
                streakBonus: 2,
                description: '75% gold bonus + Cosmic aura + Every 2 streaks bonus'
            }
        },
        { 
            id: 'cosmic_emperor', 
            name: 'Cosmic Emperor', 
            price: 1000000, 
            icon: 'fas fa-gem', 
            color: '#ff00ff', 
            rarity: 'cosmic',
            effect: '100% Ultimate blessings + Rainbow Aura + 5x Streak Multiplier',
            attributes: {
                blessing: 1.00,
                aura: true,
                auraColor: 'rainbow',
                auraType: 'rainbow',
                streakBonus: 5,
                description: 'DOUBLE gold on correct guesses + Rainbow aura + 5x streak bonus'
            }
        }
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
        },
        // RPS Boss Pet (if earned)
        { 
            id: 'cosmic_god_pet', 
            name: 'Cosmic God', 
            price: 0, 
            icon: 'fas fa-crown', 
            color: '#8a2be2', 
            effect: 'Ultimate cosmic powers + 99% win chance in RPS', 
            rarity: 'cosmic',
            bonusType: 'godly',
            bonusAmount: 99,
            bonusCondition: 0,
            isCosmic: true,
            isRedeemOnly: true
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

// ====== BOSS DEFINITIONS ======
const bossTypes = [
    {
        id: 'cosmic_god',
        name: 'Cosmic God',
        chance: 0.10, // 10%
        rarity: 'cosmic',
        ability: 'Steal all diamonds and gold, reset stats if lost',
        abilityEffect: function() {
            if (gameState.currentBoss && gameState.currentBoss.id === 'cosmic_god' && !gameState.rpsGameActive) {
                // Boss steals everything if player loses
                const stolenGold = gameState.gold;
                const stolenDiamonds = gameState.diamonds;
                gameState.gold = 0;
                gameState.diamonds = 0;
                return { 
                    message: `Cosmic God stole ${stolenGold} gold and ${stolenDiamonds.toFixed(2)} diamonds!`,
                    resetStats: true 
                };
            }
            return { message: null, resetStats: false };
        },
        reward: {
            type: 'pet',
            petId: 'cosmic_god_pet',
            name: 'Cosmic God Pet',
            description: 'Cosmic God as your pet - ultimate power!'
        },
        winChance: 0.99 // 99% chance boss wins
    },
    {
        id: 'space_robot',
        name: 'Space Robot',
        chance: 0.50, // 50%
        rarity: 'rare',
        ability: 'Divide your diamonds and gold by 5',
        abilityEffect: function() {
            gameState.gold = Math.floor(gameState.gold / 5);
            gameState.diamonds = Math.floor(gameState.diamonds / 5);
            return { 
                message: `Space Robot divided your resources by 5!`,
                resetStats: false 
            };
        },
        reward: {
            type: 'diamonds',
            amount: 5,
            name: '5 Diamonds'
        }
    },
    {
        id: 'space_ghost',
        name: 'Space Ghost',
        chance: 0.50, // 50%
        rarity: 'rare',
        ability: '50% chance for critical hit (instant lose 1 life)',
        abilityEffect: function() {
            if (Math.random() < 0.5) {
                gameState.rpsLives--;
                return { 
                    message: `Space Ghost critical hit! Lost 1 life!`,
                    resetStats: false 
                };
            }
            return { message: null, resetStats: false };
        },
        reward: {
            type: 'gold',
            amount: 150000,
            name: '150,000 Gold'
        }
    },
    {
        id: 'underworld_entity',
        name: 'Underworld Entity',
        chance: 0.50, // 50%
        rarity: 'rare',
        ability: '50% chance to silence (cannot choose RPS, auto lose)',
        abilityEffect: function() {
            if (Math.random() < 0.5) {
                gameState.rpsLives--;
                return { 
                    message: `Underworld Entity silenced you! Auto lose 1 life!`,
                    resetStats: false,
                    silenced: true 
                };
            }
            return { message: null, resetStats: false, silenced: false };
        },
        reward: {
            type: 'random',
            items: [
                { type: 'gold', amount: 50000, chance: 0.5 },
                { type: 'diamonds', amount: 2, chance: 0.3 },
                { type: 'life', amount: 1, chance: 0.2 }
            ],
            name: 'Random Reward'
        }
    },
    {
        id: 'skeleton_nigga',
        name: 'Skeleton Warrior',
        chance: 0.50, // 50%
        rarity: 'common',
        ability: 'If boss wins 2 in a row, instant game over',
        abilityEffect: function(winsInRow) {
            if (winsInRow >= 2) {
                gameState.rpsLives = 0;
                return { 
                    message: `Skeleton Warrior combo! Instant defeat!`,
                    resetStats: false 
                };
            }
            return { message: null, resetStats: false };
        },
        reward: {
            type: 'gold',
            amount: () => Math.floor(Math.random() * 101) + 500, // 500-600 gold
            name: 'Random Gold'
        }
    },
    {
        id: 'otensahorse',
        name: 'Oten Sahorse',
        chance: 0.50, // 50%
        rarity: 'rare',
        ability: 'If boss wins once, reduce lives to 1',
        abilityEffect: function() {
            gameState.rpsLives = 1;
            return { 
                message: `Oten Sahorse weakened you! Only 1 life left!`,
                resetStats: false 
            };
        },
        reward: {
            type: 'diamonds',
            amount: 1,
            name: '1 Diamond'
        }
    }
];

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
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Initialize all systems
    initializeAllSystems();
    
    // Check for daily reward
    setTimeout(() => {
        checkDailyReward();
    }, 1000);
    
    // Initialize RPS system
    initializeRPSSystem();
});

function initializeAudio() {
    const initAudio = () => {
        try {
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            document.removeEventListener('click', initAudio);
            document.removeEventListener('keydown', initAudio);
            document.removeEventListener('touchstart', initAudio);
        } catch (e) {
            console.log("Audio context initialization failed:", e);
        }
    };
    
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
    
    // RPS State
    const savedRPSUnlocked = localStorage.getItem('gtgRPSUnlocked');
    if (savedRPSUnlocked) gameState.rockPaperScissorsUnlocked = savedRPSUnlocked === 'true';
    
    // Calculate total pets
    gameState.totalPets = gameState.purchasedItems.filter(item => 
        shopItems.pets.some(pet => pet.id === item && pet.id !== 'none')
    ).length;
    
    // Load pet abilities state
    const savedPetAbilities = localStorage.getItem('gtgPetAbilities');
    if (savedPetAbilities) {
        const loadedAbilities = JSON.parse(savedPetAbilities);
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
    localStorage.setItem('gtgRPSUnlocked', gameState.rockPaperScissorsUnlocked);
}

// ====== TIMER SYSTEM ======
function startGameTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.gameTimer = 600;
    gameState.timerActive = true;
    
    document.getElementById('timer-display').style.display = 'flex';
    updateTimerDisplay();
    
    gameState.timerInterval = setInterval(() => {
        if (gameState.gameActive && gameState.timerActive) {
            gameState.gameTimer--;
            updateTimerDisplay();
            
            if (gameState.gameTimer <= 0) {
                clearInterval(gameState.timerInterval);
                gameState.timerActive = false;
                showTimerModal();
            }
            
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
    gameState.gameActive = false;
    gameState.isSelecting = false;
    
    stopBackgroundMusic();
    stopLuckyCatInterval();
    
    document.getElementById('timer-modal').style.display = 'flex';
    playSound('gameover');
    saveGameState();
}

// ====== DIAMONDS CURRENCY SYSTEM ======
function startDiamondGenerationCheck() {
    if (gameState.diamondCheckInterval) {
        clearInterval(gameState.diamondCheckInterval);
    }
    
    gameState.diamondCheckInterval = setInterval(() => {
        generateDiamondsFromGold();
        applyPetPassiveEffects();
    }, 5000);
}

function generateDiamondsFromGold() {
    const goldIncrease = gameState.gold - gameState.lastDiamondCheckGold;
    
    if (goldIncrease > 0) {
        const diamondsToAdd = (goldIncrease / 100000) * 0.5;
        
        if (diamondsToAdd >= 0.01) {
            gameState.diamonds += diamondsToAdd;
            gameState.lastDiamondCheckGold = gameState.gold;
            
            updateDisplays();
            
            if (diamondsToAdd >= 0.1) {
                showDiamondEffect(diamondsToAdd);
            }
            
            saveGameState();
        }
    }
}

function showDiamondEffect(amount) {
    const effect = document.createElement('div');
    effect.className = 'diamond-effect';
    effect.innerHTML = `<i class="fas fa-gem"></i> +${amount.toFixed(2)}`;
    effect.style.left = `${Math.random() * 80 + 10}%`;
    effect.style.top = `${Math.random() * 50 + 25}%`;
    
    document.body.appendChild(effect);
    
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

// ====== MOBILE MENU ======
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        playSound('click');
    });
    
    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
    
    // Setup mobile menu buttons
    document.getElementById('mobile-shop-btn').addEventListener('click', () => {
        document.getElementById('shop-btn').click();
        mobileMenu.classList.remove('active');
    });
    
    document.getElementById('mobile-stats-btn').addEventListener('click', () => {
        document.getElementById('stats-btn').click();
        mobileMenu.classList.remove('active');
    });
    
    document.getElementById('mobile-gallery-btn').addEventListener('click', () => {
        document.getElementById('gallery-btn').click();
        mobileMenu.classList.remove('active');
    });
    
    document.getElementById('mobile-redeem-btn').addEventListener('click', () => {
        document.getElementById('redeem-btn').click();
        mobileMenu.classList.remove('active');
    });
    
    document.getElementById('mobile-save-btn').addEventListener('click', () => {
        saveGameState();
        showNotification('Game saved successfully!', 'success');
        mobileMenu.classList.remove('active');
    });
    
    document.getElementById('mobile-help-btn').addEventListener('click', () => {
        document.getElementById('help-modal').style.display = 'flex';
        mobileMenu.classList.remove('active');
    });
    
    // Close help modal
    document.getElementById('close-help-btn').addEventListener('click', () => {
        document.getElementById('help-modal').style.display = 'none';
    });
    
    // RPS mobile button
    const mobileRpsBtn = document.getElementById('mobile-rps-btn');
    if (mobileRpsBtn) {
        mobileRpsBtn.addEventListener('click', () => {
            startBossBattleChallenge();
            mobileMenu.classList.remove('active');
        });
    }
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
    
    redeemBtn.addEventListener('click', function() {
        playSound('click');
        redeemModal.style.display = 'flex';
        redeemInput.focus();
    });
    
    submitRedeemBtn.addEventListener('click', function() {
        const code = redeemInput.value.trim().toUpperCase();
        if (code) {
            processRedeemCode(code);
        } else {
            showNotification('Please enter a redeem code!', 'error');
        }
    });
    
    redeemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitRedeemBtn.click();
        }
    });
    
    closeRedeemBtn.addEventListener('click', function() {
        redeemModal.style.display = 'none';
        redeemInput.value = '';
    });
    
    if (closeGodTierBtn) {
        closeGodTierBtn.addEventListener('click', function() {
            godTierModal.style.display = 'none';
            loadShopItems();
        });
    }
    
    if (closeCosmicDrawBtn) {
        closeCosmicDrawBtn.addEventListener('click', function() {
            cosmicDrawModal.style.display = 'none';
            loadShopItems();
        });
    }
    
    if (drawCosmicPetBtn) {
        drawCosmicPetBtn.addEventListener('click', function() {
            drawCosmicPet();
        });
    }
    
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
                loadShopItems();
            }
        });
    }
    
    if (cosmicDrawModal) {
        cosmicDrawModal.addEventListener('click', function(e) {
            if (e.target === this) {
                cosmicDrawModal.style.display = 'none';
                loadShopItems();
            }
        });
    }
}

function processRedeemCode(code) {
    if (gameState.redeemedCodes.includes(code)) {
        showNotification('This code has already been redeemed!', 'error');
        return;
    }
    
    const redeemInfo = gameState.redeemCodes[code];
    if (!redeemInfo) {
        showNotification('Invalid redeem code!', 'error');
        document.getElementById('redeem-code-input').classList.add('shake');
        setTimeout(() => {
            document.getElementById('redeem-code-input').classList.remove('shake');
        }, 500);
        return;
    }
    
    playSound('redeem');
    gameState.redeemedCodes.push(code);
    
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
                document.getElementById('god-tier-modal').style.display = 'flex';
                showNotification('GOD TIER PET UNLOCKED! Check Pets tab!', 'success');
            } else {
                showNotification('You already have the Meowl pet!', 'info');
            }
            break;
            
        case 'cosmic_draw':
            if (!gameState.cosmicDrawUsed) {
                document.getElementById('cosmic-draw-modal').style.display = 'flex';
                showNotification('Cosmic pet draw unlocked!', 'success');
                createCosmicWheel();
            } else {
                showNotification('You have already used your cosmic draw!', 'info');
            }
            break;
    }
    
    document.getElementById('redeem-modal').style.display = 'none';
    document.getElementById('redeem-code-input').value = '';
    loadShopItems();
    saveGameState();
    showGoldEffect(0, `${redeemInfo.name} Unlocked!`);
}

function createCosmicWheel() {
    const wheel = document.getElementById('cosmic-wheel');
    wheel.innerHTML = '';
    
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
    
    playSound('draw');
    
    let random = Math.random();
    let selectedPet = null;
    let cumulativeChance = 0;
    
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
    
    if (!selectedPet) {
        const randomIndex = Math.floor(Math.random() * cosmicPets.length);
        selectedPet = shopItems.pets.find(p => p.id === cosmicPets[randomIndex]);
    }
    
    gameState.cosmicDrawUsed = true;
    
    const effect = document.createElement('div');
    effect.className = 'cosmic-draw-effect';
    effect.innerHTML = `<i class="${selectedPet.icon}"></i>`;
    effect.style.color = selectedPet.color;
    document.body.appendChild(effect);
    
    setTimeout(() => effect.remove(), 2000);
    
    document.getElementById('cosmic-result').style.display = 'block';
    document.getElementById('cosmic-pet-name').textContent = selectedPet.name;
    document.getElementById('cosmic-pet-description').textContent = selectedPet.effect;
    
    if (!gameState.purchasedItems.includes(selectedPet.id)) {
        gameState.purchasedItems.push(selectedPet.id);
        gameState.totalPets++;
        
        setTimeout(() => {
            equipItem(selectedPet.id, 'pets');
            showNotification(`You won the ${selectedPet.name}! Equipped automatically!`, 'success');
        }, 1000);
    } else {
        gameState.diamonds += 10;
        showNotification(`You already have ${selectedPet.name}! +10 diamonds instead!`, 'info');
    }
    
    updateDisplays();
    loadShopItems();
    saveGameState();
    playSound('cosmic');
}

// ====== LUCKY CAT PET SYSTEM ======
function startLuckyCatPassiveGold() {
    if (gameState.luckyCatInterval) {
        clearInterval(gameState.luckyCatInterval);
    }
    
    gameState.luckyCatInterval = setInterval(() => {
        if (gameState.gameActive && gameState.equippedPet === 'lucky_cat') {
            const goldAmount = 200;
            gameState.gold += goldAmount;
            gameState.totalGoldEarned += goldAmount;
            
            updateDisplays();
            showGoldEffect(goldAmount, "Lucky Cat Gold!");
            playSound('cat');
            showNotification(`Lucky Cat: +${goldAmount} Gold!`, 'success');
            saveGameState();
        }
    }, 5000);
}

function applyLuckyCatGameEffect() {
    if (gameState.equippedPet === 'lucky_cat' && 
        gameState.gameActive && 
        gameState.optionsCount > 2 && 
        gameState.revealedOptions.length === 0) {
        
        const wrongOptions = Array.from({length: gameState.optionsCount}, (_, i) => i)
            .filter(i => i !== gameState.goldPosition);
        
        const wrongToKeep = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
        const wrongToEliminate = wrongOptions.filter(i => i !== wrongToKeep);
        
        gameState.revealedOptions.push(...wrongToEliminate);
        
        const instruction = document.getElementById('instruction');
        instruction.innerHTML = `<span style="color:#ff6b9d"><i class="fas fa-cat"></i> Lucky Cat is helping! Options reduced to 2 (50/50 chance!)</span>`;
        
        generateOptions();
    }
}

function stopLuckyCatInterval() {
    if (gameState.luckyCatInterval) {
        clearInterval(gameState.luckyCatInterval);
        gameState.luckyCatInterval = null;
    }
}

// ====== PET PASSIVE EFFECTS ======
function applyPetPassiveEffects() {
    const currentTime = Date.now();
    
    switch(gameState.equippedPet) {
        case 'elder_god_butterfly':
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
            if (currentTime - (gameState.petAbilities.entity.lastScoreTime || 0) >= 30000) {
                gameState.score += 9999;
                gameState.petAbilities.entity.lastScoreTime = currentTime;
                showNotification('Entity: +9999 Score!', 'success');
            }
            
            if (currentTime - (gameState.petAbilities.entity.lastDiamondTime || 0) >= 300000) {
                gameState.diamonds += 9999;
                gameState.petAbilities.entity.lastDiamondTime = currentTime;
                showDiamondEffect(9999);
                showNotification('Entity: +9999 Diamonds!', 'success');
            }
            
            if (currentTime - (gameState.petAbilities.entity.lastGoldTime || 0) >= 120000) {
                gameState.gold += 9999;
                gameState.totalGoldEarned += 9999;
                gameState.petAbilities.entity.lastGoldTime = currentTime;
                showGoldEffect(9999, "Entity Gold!");
                showNotification('Entity: +9999 Gold!', 'success');
            }
            
            if (currentTime - (gameState.petAbilities.entity.lastStreakTime || 0) >= 300000) {
                gameState.streak += 9999;
                gameState.petAbilities.entity.lastStreakTime = currentTime;
                showNotification('Entity: +9999 Streak!', 'success');
            }
            
            updateDisplays();
            saveGameState();
            break;
            
        case 'cosming_dragon':
            if (gameState.gold >= 200000 && 
                currentTime - (gameState.petAbilities.cosming_dragon.lastConversion || 0) >= 30000) {
                gameState.gold -= 200000;
                gameState.diamonds += 0.5;
                gameState.petAbilities.cosming_dragon.lastConversion = currentTime;
                
                showDiamondEffect(0.5);
                showGoldEffect(-200000, "Dragon Conversion");
                showNotification('Cosming Dragon: Converted 200k gold to 0.5 diamonds!', 'success');
            }
            
            if (currentTime - (gameState.petAbilities.cosming_dragon.lastDiamondTime || 0) >= 30000) {
                gameState.diamonds += 0.5;
                gameState.petAbilities.cosming_dragon.lastDiamondTime = currentTime;
                
                showDiamondEffect(0.5);
                showNotification('Cosming Dragon: +0.5 Diamonds!', 'success');
            }
            
            if (currentTime - (gameState.petAbilities.cosming_dragon.lastGoldTime || 0) >= 30000) {
                gameState.gold += 100000;
                gameState.totalGoldEarned += 100000;
                gameState.petAbilities.cosming_dragon.lastGoldTime = currentTime;
                
                showGoldEffect(100000, "Dragon Gold!");
                showNotification('Cosming Dragon: +100,000 Gold!', 'success');
            }
            
            if (currentTime - (gameState.petAbilities.cosming_dragon.lastStreakTime || 0) >= 30000) {
                gameState.streak += 100;
                gameState.petAbilities.cosming_dragon.lastStreakTime = currentTime;
                showNotification('Cosmic Dragon: +100 Streak!', 'success');
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
    
    luckyCatEffect.style.display = 'none';
    meowlEffect.style.display = 'none';
    phoenixEffect.style.display = 'none';
    turtleEffect.style.display = 'none';
    cosmicEffect.style.display = 'none';
    
    switch(gameState.equippedPet) {
        case 'lucky_cat':
            luckyCatEffect.style.display = 'flex';
            break;
        case 'meowl':
            meowlEffect.style.display = 'flex';
            break;
        case 'rainbow_phoenix':
            phoenixEffect.style.display = 'flex';
            break;
        case 'time_travel_turtle':
            turtleEffect.style.display = 'flex';
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
        case 'cosmic_god_pet':
            cosmicEffect.style.display = 'flex';
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
    
    document.body.classList.remove('theme-meowl', 'theme-phoenix', 'theme-turtle', 'theme-cosmic');
    
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
        case 'cosmic_god_pet':
            document.body.classList.add('theme-cosmic');
            createCosmicEffects();
            break;
    }
}

function createMeowlEffects() {
    const effectsContainer = document.getElementById('theme-effects');
    
    const effect = document.createElement('div');
    effect.className = 'theme-effect meowl-effect';
    effectsContainer.appendChild(effect);
    
    for (let i = 0; i < 15; i++) {
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
    
    const effect = document.createElement('div');
    effect.className = 'theme-effect phoenix-effect';
    effectsContainer.appendChild(effect);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'rainbow-particle';
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100 + 100}%`;
        
        const hue = Math.random() * 60;
        particle.style.background = `hsl(${hue}, 100%, 50%)`;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px currentColor`;
        particle.style.animationDelay = `${Math.random() * 3}s`;
        
        effectsContainer.appendChild(particle);
    }
}

function createTimeTravelTurtleEffects() {
    const effectsContainer = document.getElementById('theme-effects');
    
    const effect = document.createElement('div');
    effect.className = 'theme-effect turtle-effect';
    effectsContainer.appendChild(effect);
    
    for (let i = 0; i < 15; i++) {
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
    
    const effect = document.createElement('div');
    effect.className = 'theme-effect cosmic-effect-bg';
    effectsContainer.appendChild(effect);
    
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100 + 100}%`;
        particle.style.background = `hsl(${Math.random() * 60 + 270}, 100%, 70%)`;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px currentColor`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        effectsContainer.appendChild(particle);
    }
    
    if (gameState.equippedPet === 'cosming_dragon' || gameState.equippedPet === '3dm4rk' || gameState.equippedPet === 'entity' || gameState.equippedPet === 'cosmic_god_pet') {
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
        const meowlMusic = document.getElementById('meowl-music');
        if (meowlMusic && gameState.gameActive && gameState.musicEnabled) {
            meowlMusic.volume = gameState.musicVolume * 0.5;
            meowlMusic.play().catch(e => console.log("Meowl music play failed:", e));
        }
        
        gameState.petAbilities.meowl.extraAttemptsUsed = 0;
        gameState.petAbilities.meowl.healthRestored = false;
        
        const instruction = document.getElementById('instruction');
        instruction.innerHTML += ` <span style="color:#00ff00"><i class="fas fa-paw"></i> Meowl Protection Active (${gameState.petAbilities.meowl.extraAttempts} extra attempts)</span>`;
    }
}

function checkMeowlHealthRestore() {
    if (gameState.equippedPet === 'meowl' && 
        gameState.lives === 1 && 
        !gameState.petAbilities.meowl.healthRestored) {
        
        gameState.lives = 3;
        gameState.petAbilities.meowl.healthRestored = true;
        
        updateLivesDisplay();
        updateDisplays();
        
        const effect = document.createElement('div');
        effect.className = 'meowl-prediction-effect';
        effect.innerHTML = '<i class="fas fa-heart"></i> Meowl Health Restore!';
        document.body.appendChild(effect);
        
        setTimeout(() => effect.remove(), 1000);
        showNotification('Meowl restored your health to 3!', 'success');
        playSound('meowl');
        saveGameState();
    }
}

function useMeowlExtraAttempt() {
    if (gameState.equippedPet === 'meowl' && 
        gameState.petAbilities.meowl.extraAttemptsUsed < gameState.petAbilities.meowl.extraAttempts) {
        
        gameState.petAbilities.meowl.extraAttemptsUsed++;
        
        const effect = document.createElement('div');
        effect.className = 'meowl-prediction-effect';
        effect.innerHTML = `<i class="fas fa-paw"></i> Meowl Protection! (${gameState.petAbilities.meowl.extraAttempts - gameState.petAbilities.meowl.extraAttemptsUsed} left)`;
        document.body.appendChild(effect);
        
        setTimeout(() => effect.remove(), 1000);
        showNotification(`Meowl protected you! ${gameState.petAbilities.meowl.extraAttempts - gameState.petAbilities.meowl.extraAttemptsUsed} extra attempts remaining.`, 'success');
        playSound('meowl');
        
        return true;
    }
    return false;
}

function checkRainbowPhoenixResurrection() {
    if (gameState.equippedPet === 'rainbow_phoenix' && 
        !gameState.petAbilities.rainbow_phoenix.resurrectionUsed) {
        
        if (Math.random() < gameState.petAbilities.rainbow_phoenix.resurrectionChance) {
            gameState.petAbilities.rainbow_phoenix.resurrectionUsed = true;
            
            const effect = document.createElement('div');
            effect.className = 'phoenix-resurrect-effect';
            effect.innerHTML = '<i class="fas fa-fire"></i> Phoenix Resurrection!';
            document.body.appendChild(effect);
            
            setTimeout(() => effect.remove(), 1500);
            playSound('phoenix');
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
        
        gameState.petAbilities.time_travel_turtle.rewindAvailable = false;
        gameState.petAbilities.time_travel_turtle.rewindUsed = true;
        
        const wrongIndex = gameState.revealedOptions.indexOf(gameState.selectedOption);
        if (wrongIndex !== -1) {
            gameState.revealedOptions.splice(wrongIndex, 1);
        }
        
        gameState.selectedOption = null;
        gameState.isSelecting = false;
        
        const effect = document.createElement('div');
        effect.className = 'time-rewind-effect';
        document.body.appendChild(effect);
        
        setTimeout(() => effect.remove(), 1000);
        playSound('timeTravel');
        generateOptions();
        
        document.getElementById('instruction').innerHTML = `<span style="color:#00ffcc">Time Travel Turtle rewound time! Try again!</span>`;
        document.getElementById('time-rewind-btn').style.display = 'none';
        showNotification('Time rewound! Try your guess again.', 'success');
        saveGameState();
        
        return true;
    }
    return false;
}

// ====== COSMIC PET ABILITIES ======
function applyCosmicPetAbilities() {
    if (gameState.equippedPet === 'cosming_dragon') {
        if (Math.random() < 0.5) {
            const effect = document.createElement('div');
            effect.className = 'time-rewind-effect';
            effect.style.background = 'linear-gradient(45deg, rgba(138, 43, 226, 0.1), rgba(75, 0, 130, 0.1))';
            document.body.appendChild(effect);
            
            setTimeout(() => effect.remove(), 1000);
            playSound('cosmic');
            
            return true;
        }
    }
    
    if (gameState.equippedPet === 'elder_god_butterfly' && gameState.petAbilities.elder_god_butterfly.streakShield) {
        return true;
    }
    
    if (gameState.equippedPet === 'carlito_cocofanto' && Math.random() < 0.5) {
        gameState.optionsCount = 2;
        return true;
    }
    
    if (gameState.equippedPet === 'carlito_cocofanto' && Math.random() < 0.4) {
        gameState.revealedOptions.push(gameState.goldPosition);
        generateOptions();
        showNotification('Carlito Cocofanto revealed the gold!', 'success');
        return true;
    }
    
    if (gameState.equippedPet === 'tungtung_sahur' && 
        gameState.lives === 0 && 
        Math.random() < gameState.petAbilities.tungtung_sahur.reviveChance) {
        gameState.lives = 1;
        updateLivesDisplay();
        showNotification('Tungtung Sahur revived you!', 'success');
        return true;
    }
    
    if (gameState.equippedPet === '3dm4rk' && 
        Math.random() < gameState.petAbilities['3dm4rk'].timeRewindChance) {
        return true;
    }
    
    if (gameState.equippedPet === 'entity' && 
        Math.random() < gameState.petAbilities.entity.autoPilotChance &&
        gameState.gameActive &&
        !gameState.isSelecting) {
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

// ====== AVATAR AURA SYSTEM ======
function applyAvatarAuraEffects() {
    const avatar = shopItems.avatars.find(a => a.id === gameState.equippedAvatar);
    if (!avatar || !avatar.attributes || !avatar.attributes.aura) return;
    
    // Apply aura to avatar display
    const avatarDisplay = document.getElementById('avatar-frame-display');
    if (avatarDisplay) {
        switch(avatar.attributes.auraType) {
            case 'flame':
                avatarDisplay.style.boxShadow = `0 0 20px ${avatar.attributes.auraColor}, 0 0 40px ${avatar.attributes.auraColor}`;
                avatarDisplay.style.animation = 'flameAura 1.5s infinite alternate';
                break;
            case 'cosmic':
                avatarDisplay.style.boxShadow = `0 0 20px ${avatar.attributes.auraColor}, 0 0 40px ${avatar.attributes.auraColor}, 0 0 60px ${avatar.attributes.auraColor}80`;
                avatarDisplay.style.animation = 'cosmicAura 2s infinite alternate';
                break;
            case 'rainbow':
                avatarDisplay.style.animation = 'rainbowAura 3s infinite alternate';
                break;
            default:
                avatarDisplay.style.boxShadow = `0 0 15px ${avatar.attributes.auraColor || '#00ffcc'}`;
                break;
        }
    }
    
    // Apply aura to options if game is active
    if (gameState.gameActive) {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            if (!option.classList.contains('revealed') && !option.classList.contains('eliminated')) {
                switch(avatar.attributes.auraType) {
                    case 'flame':
                        option.style.boxShadow = `0 0 10px ${avatar.attributes.auraColor}, 0 0 20px ${avatar.attributes.auraColor}80`;
                        option.style.animation = 'optionFlame 2s infinite alternate';
                        break;
                    case 'cosmic':
                        option.style.boxShadow = `0 0 15px ${avatar.attributes.auraColor}, 0 0 30px ${avatar.attributes.auraColor}80`;
                        option.style.animation = 'cosmicPulse 2s infinite';
                        break;
                    case 'rainbow':
                        option.style.animation = 'rainbowGlow 4s infinite';
                        break;
                    default:
                        option.style.boxShadow = `0 0 10px ${avatar.attributes.auraColor || '#00ffcc'}`;
                        break;
                }
            }
        });
    }
}

function removeAvatarAuraEffects() {
    const avatarDisplay = document.getElementById('avatar-frame-display');
    if (avatarDisplay) {
        avatarDisplay.style.boxShadow = '';
        avatarDisplay.style.animation = '';
    }
    
    if (gameState.gameActive) {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            if (!option.classList.contains('gold') && !option.classList.contains('empty')) {
                option.style.boxShadow = '';
                option.style.animation = '';
            }
        });
    }
}

function applyAvatarBlessings(goldEarned) {
    const avatar = shopItems.avatars.find(a => a.id === gameState.equippedAvatar);
    if (!avatar || !avatar.attributes || avatar.attributes.blessing === 0) return goldEarned;
    
    let bonus = 0;
    
    // Check for streak-based bonuses
    if (avatar.attributes.streakBonus) {
        gameState.avatarStreakCounter++;
        if (gameState.avatarStreakCounter >= avatar.attributes.streakBonus) {
            bonus += Math.round(goldEarned * avatar.attributes.blessing);
            gameState.avatarStreakCounter = 0;
            showNotification(`${avatar.name} blessing activated! +${bonus} gold!`, 'success');
        }
    } else {
        // Apply blessing on every correct guess
        bonus += Math.round(goldEarned * avatar.attributes.blessing);
    }
    
    return bonus;
}

// ====== GAME FUNCTIONS ======
function initGame() {
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
    gameState.avatarStreakCounter = 0;
    gameState.bossBattleActive = false;
    gameState.rpsGameActive = false;
    gameState.rpsLives = 3;
    gameState.bossConsecutiveWins = 0;
    
    if (gameState.petAbilities.rainbow_phoenix) {
        gameState.petAbilities.rainbow_phoenix.resurrectionUsed = false;
    }
    if (gameState.petAbilities.time_travel_turtle) {
        gameState.petAbilities.time_travel_turtle.rewindAvailable = true;
        gameState.petAbilities.time_travel_turtle.rewindUsed = false;
    }
    
    stopGameTimer();
    stopBackgroundMusic();
    stopCosmicMusic();
    
    const meowlMusic = document.getElementById('meowl-music');
    if (meowlMusic) {
        meowlMusic.pause();
        meowlMusic.currentTime = 0;
    }
    
    stopLuckyCatInterval();
    
    updateDisplays();
    updateLivesDisplay();
    updatePowerUpButtons();
    loadShopItems();
    updateAvatarDisplay();
    updateSoundButton();
    updateMusicControls();
    updatePetEffectDisplays();
    
    document.getElementById('instruction').textContent = "Click 'Start Game' to begin your treasure hunt!";
    document.getElementById('difficulty-info').textContent = "Difficulty: Easy (2 options)";
    document.getElementById('options-container').innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('time-rewind-btn').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('level-progress-bar').style.width = '0%';
    document.getElementById('start-btn').disabled = false;
    
    // Show RPS button if unlocked
    if (gameState.rockPaperScissorsUnlocked) {
        const rpsBtn = document.getElementById('rps-btn');
        const mobileRpsBtn = document.getElementById('mobile-rps-btn');
        if (rpsBtn) rpsBtn.style.display = 'inline-flex';
        if (mobileRpsBtn) mobileRpsBtn.style.display = 'flex';
    }
    
    generateEmptyOptions();
    hideLoading();
    updatePetEffects();
    applyTheme(gameState.activeTheme);
    createPetThemeEffects();
    applyAvatarAuraEffects();
    
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
    if (gameState.gameActive) return;
    
    gameState.gameActive = true;
    gameState.isSelecting = false;
    document.getElementById('start-btn').disabled = true;
    gameState.totalGames++;
    
    startGameTimer();
    playSound('start');
    updatePetEffects();
    applyMeowlAbilities();
    applyAvatarAuraEffects();
    
    if (gameState.equippedPet === 'lucky_cat') {
        startLuckyCatPassiveGold();
    }
    
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
    
    bgMusic.volume = gameState.musicVolume;
    
    if (!bgMusic.paused) return;
    
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Background music started");
            updateMusicButton(true);
        }).catch(error => {
            console.log("Music play failed:", error);
        });
    }
}

function stopBackgroundMusic() {
    const bgMusic = document.getElementById('background-music');
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
    
    if (gameState.backgroundOscillator) {
        gameState.backgroundOscillator.stop();
        gameState.backgroundOscillator = null;
    }
    
    const meowlMusic = document.getElementById('meowl-music');
    if (meowlMusic) {
        meowlMusic.pause();
        meowlMusic.currentTime = 0;
    }
    
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
    
    if (gameState.petAbilities.time_travel_turtle) {
        gameState.petAbilities.time_travel_turtle.rewindAvailable = true;
    }
    
    gameState.optionsCount = Math.min(2 + Math.floor(gameState.level / 5), 10);
    
    applyPetOptionEffects();
    gameState.goldPosition = Math.floor(Math.random() * gameState.optionsCount);
    
    applyPetLuckEffects();
    applyLuckyCatGameEffect();
    applyCosmicPetAbilities();
    
    updateLevelUI();
    generateOptions();
    
    document.getElementById('next-btn').style.display = 'none';
    
    if (gameState.equippedPet === 'time_travel_turtle' && 
        gameState.petAbilities.time_travel_turtle.rewindAvailable) {
        document.getElementById('time-rewind-btn').style.display = 'inline-flex';
    } else {
        document.getElementById('time-rewind-btn').style.display = 'none';
    }
    
    gameState.activePowerUps.hintUsed = false;
    updatePowerUpButtons();
    
    saveGameState();
}

function applyPetOptionEffects() {
    if (gameState.equippedPet === '3dm4rk') {
        gameState.optionsCount = 2;
        return;
    }
    
    if (gameState.equippedPet === 'carlito_cocofanto' && Math.random() < 0.5) {
        gameState.optionsCount = 2;
        return;
    }
}

function applyPetLuckEffects() {
    if (gameState.equippedPet === 'music_dragon' && Math.random() < 0.5) {
        const wrongOptions = Array.from({length: gameState.optionsCount}, (_, i) => i)
            .filter(i => i !== gameState.goldPosition);
        
        if (wrongOptions.length > 0) {
            const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
            gameState.revealedOptions.push(randomWrong);
        }
    }
    
    if (gameState.equippedPet === 'cosming_dragon' && 
        Math.random() < gameState.petAbilities.cosming_dragon.levelSkipChance) {
        const skipAmount = Math.floor(Math.random() * 14) + 2;
        gameState.level += skipAmount;
        showNotification(`Cosming Dragon skipped ${skipAmount} levels!`, 'success');
    }
}

function updateLevelUI() {
    const difficulty = gameState.level < 10 ? 'Easy' : gameState.level < 30 ? 'Medium' : gameState.level < 60 ? 'Hard' : 'Extreme';
    document.getElementById('difficulty-info').textContent = `Difficulty: ${difficulty} (${gameState.optionsCount} options)`;
    
    let instruction = `Level ${gameState.level}: Find the gold!`;
    const pet = shopItems.pets.find(p => p.id === gameState.equippedPet);
    const avatar = shopItems.avatars.find(a => a.id === gameState.equippedAvatar);
    
    if (pet && pet.id !== 'none') {
        instruction += ` <span style="color:${pet.color};font-size:0.9em">(Pet: ${pet.name} - ${pet.effect})</span>`;
        
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
    
    if (avatar && avatar.attributes && avatar.attributes.blessing > 0) {
        if (avatar.attributes.streakBonus) {
            instruction += ` <span style="color:${avatar.color}"><i class="${avatar.icon}"></i> ${avatar.name}: ${(avatar.attributes.blessing * 100)}% bonus every ${avatar.attributes.streakBonus} streaks (${avatar.attributes.streakBonus - gameState.avatarStreakCounter} left)</span>`;
        } else {
            instruction += ` <span style="color:${avatar.color}"><i class="${avatar.icon}"></i> ${avatar.name}: ${(avatar.attributes.blessing * 100)}% blessing active</span>`;
        }
        if (avatar.attributes.aura) {
            instruction += ` <span style="color:${avatar.attributes.auraColor || avatar.color}"><i class="fas fa-magic"></i> Aura Active</span>`;
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
        
        if (gameState.revealedOptions.includes(i)) {
            if (i === gameState.goldPosition) {
                option.className = 'option gold';
                option.innerHTML = '<i class="fas fa-gem"></i>';
                option.style.pointerEvents = 'none';
            } else {
                option.className = 'option empty';
                option.innerHTML = '<i class="fas fa-times"></i>';
                option.style.pointerEvents = 'none';
            }
        } else {
            option.innerHTML = '<i class="fas fa-question"></i>';
            option.addEventListener('click', () => selectOption(i));
        }
        
        container.appendChild(option);
    }
    
    // Apply aura effects to new options
    applyAvatarAuraEffects();
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
    
    if (gameState.streak > gameState.highestStreak) {
        gameState.highestStreak = gameState.streak;
    }
    
    let goldEarned = 10 + Math.floor(gameState.level / 2) + (gameState.streak * 2);
    
    applyPetGoldMultipliers(goldEarned);
    
    if (gameState.activePowerUps.goldrush) {
        goldEarned *= 2;
        gameState.activePowerUps.goldrush = false;
    }
    
    if (gameState.activeTheme !== 'default') {
        goldEarned = Math.round(goldEarned * gameState.themeBonuses[gameState.activeTheme]);
    }
    
    const pet = shopItems.pets.find(p => p.id === gameState.equippedPet);
    let petBonus = 0;
    let petMessage = '';
    
    if (pet && pet.id !== 'none') {
        petBonus = applyPetGoldBonus(pet, goldEarned);
        if (petBonus > 0) {
            goldEarned += petBonus;
            petMessage = ` +${petBonus} from ${pet.name}`;
        }
        
        applySpecialPetAbilitiesOnCorrect();
    }
    
    // Apply avatar blessings
    const avatarBonus = applyAvatarBlessings(goldEarned);
    if (avatarBonus > 0) {
        goldEarned += avatarBonus;
        petMessage += ` +${avatarBonus} from avatar blessing`;
    }
    
    gameState.gold += goldEarned;
    gameState.totalGoldEarned += goldEarned;
    gameState.score += 100 * gameState.streak;
    
    generateOptions();
    updateDisplays();
    updatePowerUpButtons();
    
    let message = `<span style="color:#51cf66">✓ Correct! Gold found! +${goldEarned} Gold${petMessage}</span>`;
    if (pet && pet.id !== 'none') {
        message += ` <span style="color:${pet.color}"><i class="${pet.icon}"></i></span>`;
    }
    
    const avatar = shopItems.avatars.find(a => a.id === gameState.equippedAvatar);
    if (avatar && avatar.attributes && avatar.attributes.blessing > 0) {
        message += ` <span style="color:${avatar.color}"><i class="${avatar.icon}"></i></span>`;
    }
    
    document.getElementById('instruction').innerHTML = message;
    
    playSound('correct');
    showGoldEffect(goldEarned, "Gold Earned!");
    showNotification(`Correct! +${goldEarned} Gold`, 'success');
    playSound('levelup');
    checkPerfectStreakBonuses();
    
    setTimeout(() => {
        gameState.isSelecting = false;
        nextLevel();
    }, 2000);
    
    saveGameState();
}

function applyPetGoldMultipliers(baseGold) {
    if (gameState.equippedPet === '3dm4rk') {
        return baseGold * 100;
    }
    
    return baseGold;
}

function applyPetGoldBonus(pet, baseGold) {
    let bonus = 0;
    
    switch(pet.bonusType) {
        case 'correct':
            bonus = pet.bonusAmount;
            break;
            
        case 'streak':
            if (gameState.petStreakCounter >= pet.bonusCondition) {
                if (pet.id === 'phoenix') {
                    bonus = baseGold * (pet.bonusAmount - 1);
                } else {
                    bonus = pet.bonusAmount;
                }
                gameState.petStreakCounter = 0;
            }
            break;
            
        case 'passive':
            if (pet.id === 'lucky_cat') {
                bonus = 50;
            }
            break;
            
        case 'resurrection':
            if (pet.id === 'rainbow_phoenix') {
                bonus = Math.round(baseGold * pet.bonusAmount);
            }
            break;
            
        case 'rewind':
            if (pet.id === 'time_travel_turtle') {
                bonus = Math.round(baseGold * pet.bonusAmount);
            }
            break;
            
        case 'ultra_rare':
            if (pet.id === 'diamond_centipede') {
                bonus = gameState.diamonds * pet.bonusAmount;
                gameState.diamonds += bonus;
                showDiamondEffect(bonus);
            } else if (pet.id === 'elder_god_butterfly') {
                bonus = pet.bonusAmount;
            }
            break;
            
        case 'godly':
            if (pet.id === 'humanoid_gold_seeker') {
                bonus = gameState.gold * gameState.streak;
            }
            break;
    }
    
    return Math.round(bonus);
}

function applySpecialPetAbilitiesOnCorrect() {
    if (gameState.equippedPet === 'crazy_dog' && 
        gameState.streak % gameState.petAbilities.crazy_dog.perfectStreak === 0) {
        const chance = gameState.score * gameState.gold * gameState.petAbilities.crazy_dog.bonusAmount;
        if (Math.random() < chance) {
            gameState.diamonds += 100;
            showNotification('Crazy Dog special: +100 Diamonds!', 'success');
            showDiamondEffect(100);
        }
    }
}

function checkPerfectStreakBonuses() {
    if (gameState.equippedPet === 'croco_boy' && 
        gameState.streak >= gameState.petAbilities.croco_boy.perfectStreak &&
        !gameState.petAbilities.croco_boy.meditationActive) {
        
        gameState.petAbilities.croco_boy.meditationActive = true;
        gameState.petAbilities.croco_boy.meditationEndTime = Date.now() + 30000;
        
        showNotification('Croco Boy started meditation! Result in 30 seconds...', 'info');
        
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
    
    const cosmicProtected = applyCosmicPetAbilities();
    if (cosmicProtected && 
        (gameState.equippedPet === 'elder_god_butterfly' || 
         gameState.equippedPet === 'cosming_dragon' ||
         gameState.equippedPet === '3dm4rk')) {
        shouldLoseLife = false;
        gameState.isSelecting = false;
        gameState.selectedOption = null;
        
        setTimeout(() => {
            generateOptions();
        }, 1000);
        
        return;
    }
    
    if (gameState.equippedPet === 'meowl') {
        const meowlProtected = useMeowlExtraAttempt();
        if (meowlProtected) {
            shouldLoseLife = false;
            gameState.isSelecting = false;
            gameState.selectedOption = null;
            
            setTimeout(() => {
                generateOptions();
            }, 1000);
            
            return;
        }
    }
    
    if (shouldLoseLife && gameState.equippedPet === 'rainbow_phoenix') {
        const phoenixResurrected = checkRainbowPhoenixResurrection();
        if (phoenixResurrected) {
            shouldLoseLife = false;
        }
    }
    
    if (shouldLoseLife) {
        checkMeowlHealthRestore();
    }
    
    if (shouldLoseLife && gameState.equippedPet === 'tungtung_sahur') {
        if (Math.random() < gameState.petAbilities.tungtung_sahur.reviveChance) {
            shouldLoseLife = false;
            showNotification('Tungtung Sahur prevented life loss!', 'success');
        }
    }
    
    if (gameState.equippedPet === 'music_dragon' && !gameState.permanentPowerUps.streakShield) {
        const bgMusic = document.getElementById('background-music');
        if (bgMusic) {
            bgMusic.pause();
            updateMusicButton(false);
        }
    }
    
    if (!gameState.permanentPowerUps.streakShield && shouldLoseLife) {
        gameState.streak = 0;
        gameState.petStreakCounter = 0;
        gameState.avatarStreakCounter = 0; // Reset avatar streak counter on wrong guess
    }
    
    if (shouldLoseLife) {
        gameState.lives--;
        gameState.totalWrong++;
    }
    
    generateOptions();
    updateLivesDisplay();
    updateDisplays();
    updatePowerUpButtons();
    
    let message = `<span style="color:#ff6b6b">✗ Wrong! That was empty!</span>`;
    if (gameState.equippedPet === 'music_dragon' && !gameState.permanentPowerUps.streakShield) {
        message = `<span style="color:#ff6b6b">✗ Wrong! Music stopped!</span>`;
    }
    
    if (gameState.equippedPet === 'time_travel_turtle' && 
        gameState.petAbilities.time_travel_turtle.rewindAvailable &&
        shouldLoseLife) {
        message += ` <span style="color:#00ffcc"><i class="fa-solid fa-clock"></i> Use Time Rewind to undo!</span>`;
        document.getElementById('time-rewind-btn').style.display = 'inline-flex';
    }
    
    document.getElementById('instruction').innerHTML = message;
    playSound('wrong');
    
    if (shouldLoseLife) {
        showNotification('Wrong guess!', 'error');
    }
    
    if (gameState.lives <= 0 && shouldLoseLife) {
        setTimeout(() => {
            gameOver();
            gameState.isSelecting = false;
        }, 1000);
    } else {
        setTimeout(() => {
            if (!gameState.petAbilities.time_travel_turtle?.rewindAvailable || 
                gameState.equippedPet !== 'time_travel_turtle') {
                gameState.isSelecting = false;
                gameState.selectedOption = null;
                generateOptions();
            }
        }, 1000);
    }
    
    saveGameState();
}

function gameOver() {
    gameState.gameActive = false;
    gameState.isSelecting = false;
    
    stopGameTimer();
    stopBackgroundMusic();
    stopCosmicMusic();
    stopLuckyCatInterval();
    
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
    }
    
    document.getElementById('final-level').textContent = gameState.level;
    document.getElementById('final-gold').textContent = gameState.gold;
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('final-high-score').textContent = gameState.highScore;
    
    document.getElementById('game-over').style.display = 'flex';
    playSound('gameover');
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
    
    const progress = (gameState.level / gameState.maxLevels) * 100;
    document.getElementById('level-progress-bar').style.width = `${Math.min(progress, 100)}%`;
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
        if (item.id === 'lucky_cat' && !gameState.redeemedCodes.includes('EDMARKISADMIN')) {
            return;
        }
        
        if (item.id === 'meowl' && !gameState.redeemedCodes.includes('ILOVEMEOWL')) {
            return;
        }
        
        if (item.isCosmic && item.price === 0 && !gameState.purchasedItems.includes(item.id)) {
            return;
        }
        
        const isPurchased = gameState.purchasedItems.includes(item.id);
        const isEquipped = 
            (category === 'avatars' && gameState.equippedAvatar === item.id) ||
            (category === 'frames' && gameState.equippedFrame === item.id) ||
            (category === 'pets' && gameState.equippedPet === item.id);
        
        let canPurchase = true;
        let purchaseText = 'Buy';
        let priceDisplay = `<i class="fas fa-coins"></i> ${item.price} Gold`;
        
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
                canPurchase = true;
            }
        }
        
        const itemElement = document.createElement('div');
        itemElement.className = `shop-item ${isPurchased ? 'purchased' : ''} ${isEquipped ? 'equipped' : ''} ${item.rarity ? 'rarity-' + item.rarity : ''}`;
        
        if (item.godTier) {
            itemElement.classList.add('godtier');
        } else if (item.rarity === 'limited') {
            itemElement.classList.add('limited');
            if (item.id === 'rainbow_phoenix') {
                itemElement.classList.add('rainbow');
            }
        } else if (item.isCosmic) {
            itemElement.classList.add('cosmic');
        } else if (item.rarity === 'divine' || item.rarity === 'cosmic') {
            itemElement.classList.add('divine');
        }
        
        if (item.rarity) {
            itemElement.classList.add(item.rarity);
        }
        
        let actionButton = '';
        
        if (!isPurchased) {
            if (item.id === 'lucky_cat' || item.id === 'meowl') {
                actionButton = `<button class="shop-item-action claim" onclick="claimRedeemPet('${item.id}')">
                        ${purchaseText}
                    </button>`;
            } else {
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
        
        let description = item.effect || '';
        if (item.attributes && item.attributes.description) {
            description = item.attributes.description;
        }
        
        itemElement.innerHTML = `
            ${item.rarity && item.rarity !== 'common' ? 
                `<div class="rarity-badge rarity-${item.rarity}">${item.rarity.toUpperCase()}${item.rarity === 'limited' ? ' EDITION' : ''}${item.isCosmic ? ' COSMIC' : ''}</div>` : ''
            }
            <div class="shop-item-icon" style="color:${item.color || '#FFD700'}">
                <i class="${item.icon || 'fas fa-question'}"></i>
            </div>
            <div class="shop-item-title">${item.name}</div>
            ${description ? `<div class="shop-item-description">${description}</div>` : ''}
            ${item.id !== 'lucky_cat' && item.id !== 'meowl' ? `<div class="shop-item-price">
                ${priceDisplay}
            </div>` : '<div class="shop-item-price" style="color:#ff6b9d"><i class="fas fa-gift"></i> Redeem Code Only</div>'}
            ${actionButton}
        `;
        container.appendChild(itemElement);
    });
}

function claimRedeemPet(petId) {
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
    
    if (gameState.purchasedItems.includes(petId)) {
        showNotification(`You already have this pet!`, 'info');
        return;
    }
    
    gameState.purchasedItems.push(petId);
    gameState.totalPets++;
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
        equipItem(itemId, category);
        
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
        
        if (category === 'pets' && itemId !== 'none') {
            const pet = shopItems.pets.find(p => p.id === itemId);
            if (pet) {
                setTimeout(() => {
                    showGoldEffect(0, `${pet.name} equipped!`);
                }, 500);
                
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
        
        if (category === 'avatars') {
            const avatar = shopItems.avatars.find(a => a.id === itemId);
            if (avatar) {
                applyAvatarAuraEffects();
                showNotification(`${avatar.name} equipped! ${avatar.effect}`, 'success');
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
            removeAvatarAuraEffects();
            applyAvatarAuraEffects();
            break;
        case 'frames':
            gameState.equippedFrame = itemId;
            break;
        case 'pets':
            gameState.equippedPet = itemId;
            gameState.petStreakCounter = 0;
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
        case 'cosmic_god_pet':
            updatePetEffectDisplays();
            createPetThemeEffects();
            stopOtherPetEffects(petId);
            break;
            
        default:
            stopOtherPetEffects('none');
            break;
    }
    
    updatePetEffects();
}

function stopOtherPetEffects(currentPetId) {
    if (currentPetId !== 'lucky_cat') {
        stopLuckyCatInterval();
    }
    
    if (currentPetId !== 'music_dragon') {
        stopBackgroundMusic();
    }
    
    if (currentPetId !== 'meowl') {
        const meowlMusic = document.getElementById('meowl-music');
        if (meowlMusic) {
            meowlMusic.pause();
            meowlMusic.currentTime = 0;
        }
    }
    
    if (!['cosming_dragon', '3dm4rk', 'entity', 'cosmic_god_pet'].includes(currentPetId)) {
        stopCosmicMusic();
    }
    
    Object.keys(gameState.petAbilities).forEach(petId => {
        if (petId !== currentPetId) {
            if (gameState.petAbilities[petId]) {
                gameState.petAbilities[petId].extraAttemptsUsed = 0;
                gameState.petAbilities[petId].healthRestored = false;
                gameState.petAbilities[petId].resurrectionUsed = false;
                gameState.petAbilities[petId].rewindUsed = false;
                gameState.petAbilities[petId].rewindAvailable = true;
                
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

// ====== PETS GALLERY - ENHANCED VERSION ======
function showPetsGallery() {
    const container = document.getElementById('pets-gallery-container');
    container.innerHTML = '';
    
    // Sort pets by rarity for better display
    const rarityOrder = {
        'common': 1,
        'rare': 2,
        'epic': 3,
        'legendary': 4,
        'limited': 5,
        'godtier': 6,
        'cosmic': 7
    };
    
    const sortedPets = [...shopItems.pets].sort((a, b) => {
        const aOrder = rarityOrder[a.rarity] || 0;
        const bOrder = rarityOrder[b.rarity] || 0;
        if (aOrder !== bOrder) return bOrder - aOrder;
        return a.name.localeCompare(b.name);
    });
    
    sortedPets.forEach(pet => {
        if (pet.id === 'none') return;
        
        const isOwned = gameState.purchasedItems.includes(pet.id) || 
                       (pet.isRedeemOnly && gameState.redeemedCodes.includes(pet.id === 'lucky_cat' ? 'EDMARKISADMIN' : 'ILOVEMEOWL')) ||
                       (pet.isCosmic && pet.price === 0 && gameState.purchasedItems.includes(pet.id));
        const isEquipped = gameState.equippedPet === pet.id;
        const isRedeemOnly = pet.isRedeemOnly || (pet.id === 'meowl' && !gameState.purchasedItems.includes('meowl'));
        const isCosmicHidden = pet.isCosmic && pet.price === 0 && !gameState.purchasedItems.includes(pet.id);
        
        if (isCosmicHidden) return; // Don't show hidden cosmic pets
        
        const petElement = document.createElement('div');
        petElement.className = `pet-gallery-item ${isOwned ? 'owned' : 'not-owned'} ${pet.rarity}`;
        if (isEquipped) {
            petElement.style.borderColor = '#4dabf7';
            petElement.style.boxShadow = '0 0 10px #4dabf7';
        }
        
        if (pet.godTier) {
            petElement.classList.add('godtier');
            petElement.style.animation = 'godTierGlow 2s infinite alternate';
        }
        
        if (pet.isCosmic) {
            petElement.classList.add('cosmic');
            petElement.style.animation = 'cosmicPulse 3s infinite alternate';
        }
        
        if (pet.rarity === 'limited') {
            petElement.classList.add('limited');
            if (pet.id === 'rainbow_phoenix') {
                petElement.style.animation = 'rainbowPulse 3s infinite alternate';
            }
        }
        
        let acquisitionInfo = '';
        if (isRedeemOnly) {
            if (pet.id === 'lucky_cat') {
                acquisitionInfo = gameState.redeemedCodes.includes('EDMARKISADMIN') ? 
                    '<div class="pet-acquisition unlocked"><i class="fas fa-check-circle"></i> Redeem Code: EDMARKISADMIN</div>' :
                    '<div class="pet-acquisition locked"><i class="fas fa-lock"></i> Redeem Code: EDMARKISADMIN</div>';
            } else if (pet.id === 'meowl') {
                acquisitionInfo = gameState.redeemedCodes.includes('ILOVEMEOWL') ? 
                    '<div class="pet-acquisition unlocked"><i class="fas fa-check-circle"></i> Redeem Code: ILOVEMEOWL</div>' :
                    '<div class="pet-acquisition locked"><i class="fas fa-lock"></i> Redeem Code: ILOVEMEOWL</div>';
            }
        } else if (pet.isCosmic && pet.price === 0) {
            acquisitionInfo = '<div class="pet-acquisition cosmic"><i class="fas fa-star"></i> Cosmic Pet Draw</div>';
        } else if (pet.priceInDiamonds) {
            acquisitionInfo = `<div class="pet-acquisition diamond"><i class="fas fa-gem"></i> ${pet.price} Diamonds</div>`;
        } else {
            acquisitionInfo = `<div class="pet-acquisition gold"><i class="fas fa-coins"></i> ${pet.price} Gold</div>`;
        }
        
        petElement.innerHTML = `
            <div class="pet-gallery-header">
                <div class="pet-gallery-icon" style="color:${pet.color}">
                    <i class="${pet.icon}"></i>
                </div>
                <div class="pet-gallery-name">${pet.name}</div>
                <div class="pet-gallery-rarity rarity-${pet.rarity}">
                    ${pet.rarity.toUpperCase()}${pet.isCosmic ? ' COSMIC' : ''}${pet.godTier ? ' GOD TIER' : ''}
                </div>
            </div>
            <div class="pet-gallery-body">
                <div class="pet-gallery-effect">
                    <strong>Abilities:</strong> ${pet.effect}
                </div>
                ${pet.bonusType && pet.bonusType !== 'none' ? `
                <div class="pet-gallery-stats">
                    <div class="pet-stat">
                        <span class="stat-label">Type:</span>
                        <span class="stat-value">${pet.bonusType}</span>
                    </div>
                    ${pet.bonusAmount > 0 ? `
                    <div class="pet-stat">
                        <span class="stat-label">Bonus:</span>
                        <span class="stat-value">${pet.bonusAmount}</span>
                    </div>
                    ` : ''}
                    ${pet.bonusCondition > 0 ? `
                    <div class="pet-stat">
                        <span class="stat-label">Condition:</span>
                        <span class="stat-value">Every ${pet.bonusCondition} streaks</span>
                    </div>
                    ` : ''}
                </div>
                ` : ''}
                ${acquisitionInfo}
            </div>
            <div class="pet-gallery-footer">
                ${isOwned ? 
                    `<div class="pet-gallery-status owned">
                        <i class="fas fa-check"></i> ${isEquipped ? 'EQUIPPED' : 'OWNED'}
                    </div>` : 
                    `<div class="pet-gallery-status not-owned">
                        <i class="fas fa-times"></i> NOT OWNED
                    </div>`
                }
            </div>
        `;
        
        container.appendChild(petElement);
    });
    
    document.getElementById('pets-gallery-modal').style.display = 'flex';
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
    document.body.classList.remove('theme-earth', 'theme-sea', 'theme-sky', 'theme-space', 'theme-luckycat', 'theme-cosmic');
    
    if (themeId !== 'default') {
        document.body.classList.add(`theme-${themeId}`);
        gameState.activeTheme = themeId;
        
        if (!gameState.equippedPet || 
            !['meowl', 'rainbow_phoenix', 'time_travel_turtle', 'cosming_dragon', 'elder_god_butterfly', 'diamond_centipede', 'humanoid_gold_seeker', 'carlito_cocofanto', 'tungtung_sahur', 'crazy_dog', 'croco_boy', '3dm4rk', 'entity', 'cosmic_god_pet'].includes(gameState.equippedPet)) {
            createThemeEffects(themeId);
        }
    } else {
        gameState.activeTheme = 'default';
        if (!gameState.equippedPet || 
            !['meowl', 'rainbow_phoenix', 'time_travel_turtle', 'cosming_dragon', 'elder_god_butterfly', 'diamond_centipede', 'humanoid_gold_seeker', 'carlito_cocofanto', 'tungtung_sahur', 'crazy_dog', 'croco_boy', '3dm4rk', 'entity', 'cosmic_god_pet'].includes(gameState.equippedPet)) {
            clearThemeEffects();
        }
    }
    
    if (gameState.equippedPet === 'lucky_cat' && themeId !== 'luckycat') {
        document.body.classList.add('theme-luckycat');
        createLuckyCatEffects();
    }
    
    saveGameState();
}

function createThemeEffects(themeId) {
    const effectsContainer = document.getElementById('theme-effects');
    effectsContainer.innerHTML = '';
    
    const effect = document.createElement('div');
    effect.className = `theme-effect ${themeId}-effect`;
    effectsContainer.appendChild(effect);
    
    if (themeId === 'space') {
        createSpaceParticles();
    }
    if (themeId === 'luckycat' || gameState.equippedPet === 'lucky_cat') {
        createCatParticles();
    }
    if (themeId === 'cosmic') {
        createCosmicEffects();
    }
}

function clearThemeEffects() {
    const effectsContainer = document.getElementById('theme-effects');
    effectsContainer.innerHTML = '';
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
        
        const rewards = getMysteryBoxRewards(type);
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
    
    const numRewards = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < numRewards; i++) {
        if (type === 'cosmic') {
            const random = Math.random();
            let cumulativeChance = 0;
            
            for (const reward of rewardPool) {
                cumulativeChance += reward.chance || 0.2;
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
    
    if (totalGold > 0) {
        gameState.gold += totalGold;
        gameState.totalGoldEarned += totalGold;
    }
    if (totalLives > 0) {
        gameState.lives = Math.min(gameState.maxLives, gameState.lives + totalLives);
        updateLivesDisplay();
    }
    
    updateDisplays();
    updatePowerUpButtons();
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
    
    if (gameState.permanentPowerUps.unlimitedHints) {
        hintBtn.disabled = !gameState.gameActive;
    } else {
        hintBtn.disabled = gameState.gold < 2 || gameState.activePowerUps.hintUsed || !gameState.gameActive;
    }
    
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
    
    if (type === 'hint' && gameState.permanentPowerUps.unlimitedHints) {
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
    const allOptions = Array.from({length: gameState.optionsCount}, (_, i) => i);
    const unrevealedOptions = allOptions.filter(i => !gameState.revealedOptions.includes(i));
    
    const optionsToKeep = [gameState.goldPosition];
    
    const wrongOptions = unrevealedOptions.filter(i => i !== gameState.goldPosition);
    if (wrongOptions.length > 0) {
        const randomWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
        optionsToKeep.push(randomWrong);
    } else {
        const otherOptions = allOptions.filter(i => i !== gameState.goldPosition);
        if (otherOptions.length > 0) {
            optionsToKeep.push(otherOptions[0]);
        }
    }
    
    const optionsToEliminate = allOptions.filter(i => !optionsToKeep.includes(i));
    
    playSound('tagna');
    animateTagnaElimination(optionsToEliminate, optionsToKeep);
    
    showNotification('Tagna activated! Eliminating options...', 'info');
}

function animateTagnaElimination(optionsToEliminate, optionsToKeep) {
    const optionElements = document.querySelectorAll('.option');
    
    optionsToEliminate.forEach(index => {
        const optionElement = optionElements[index];
        if (optionElement) {
            optionElement.classList.add('tagna-eliminating');
            
            setTimeout(() => {
                optionElement.classList.remove('tagna-eliminating');
                optionElement.classList.add('eliminated');
                optionElement.innerHTML = '<i class="fas fa-times"></i>';
                optionElement.style.pointerEvents = 'none';
                optionElement.style.cursor = 'not-allowed';
                
                if (!gameState.revealedOptions.includes(index)) {
                    gameState.revealedOptions.push(index);
                }
            }, 500);
        }
    });
    
    setTimeout(() => {
        optionsToKeep.forEach(index => {
            const optionElement = optionElements[index];
            if (optionElement) {
                optionElement.classList.add('pulse');
                
                if (index === gameState.goldPosition) {
                    optionElement.style.boxShadow = '0 0 20px #51cf66';
                } else {
                    optionElement.style.boxShadow = '0 0 20px #ff6b6b';
                }
            }
        });
        
        const instruction = document.getElementById('instruction');
        instruction.innerHTML = `<span style="color:#cc5de8">Tagna activated! Only 2 options remain. 50/50 chance to find the gold!</span>`;
        updatePowerUpButtons();
    }, 600);
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
    
    musicSlider.value = gameState.musicVolume * 100;
    
    const musicIcon = musicToggle.querySelector('i');
    if (gameState.musicEnabled) {
        musicIcon.className = 'fas fa-volume-up';
        musicToggle.classList.add('music-playing');
    } else {
        musicIcon.className = 'fas fa-volume-mute';
        musicToggle.classList.remove('music-playing');
    }
    
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
    
    if (gameState.equippedPet === 'music_dragon') {
        musicControls.style.display = 'flex';
    } else {
        musicControls.style.display = 'none';
    }
}

function setupEventListeners() {
    setupWelcomeSystem();
    setupRedeemSystem();
    setupMobileMenu();
    
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
    
    // RPS Button
    const rpsBtn = document.getElementById('rps-btn');
    if (rpsBtn) {
        rpsBtn.addEventListener('click', startBossBattleChallenge);
    }
    
    document.getElementById('close-timer-btn').addEventListener('click', function() {
        document.getElementById('timer-modal').style.display = 'none';
        initGame();
    });
    
    document.getElementById('close-gallery-btn').addEventListener('click', function() {
        document.getElementById('pets-gallery-modal').style.display = 'none';
    });
    
    const shopTabs = document.querySelectorAll('.shop-tab');
    shopTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            playSound('click');
            
            shopTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.shop-tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    document.getElementById('close-reward-btn').addEventListener('click', function() {
        document.getElementById('reward-modal').style.display = 'none';
        gameState.isSelecting = false;
        nextLevel();
    });
    
    document.getElementById('close-mystery-btn').addEventListener('click', function() {
        document.getElementById('mystery-modal').style.display = 'none';
        loadShopItems();
    });
    
    document.getElementById('close-stats-btn').addEventListener('click', function() {
        document.getElementById('stats-modal').style.display = 'none';
    });
    
    document.getElementById('sound-toggle').addEventListener('click', function() {
        soundEnabled = toggleSound();
        updateSoundButton();
        saveGameState();
        showNotification(`Sound ${soundEnabled ? 'enabled' : 'disabled'}`, 'info');
    });
    
    document.getElementById('music-toggle').addEventListener('click', function() {
        gameState.musicEnabled = !gameState.musicEnabled;
        
        if (gameState.musicEnabled) {
            if (gameState.equippedPet === 'music_dragon') {
                if (gameState.gameActive) {
                    startBackgroundMusic();
                }
            } else if (gameState.equippedPet === 'meowl') {
                const meowlMusic = document.getElementById('meowl-music');
                if (meowlMusic && gameState.gameActive) {
                    meowlMusic.play().catch(e => console.log("Meowl music play failed:", e));
                }
            } else if (['cosming_dragon', '3dm4rk', 'entity', 'cosmic_god_pet'].includes(gameState.equippedPet)) {
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
    
    const modals = ['reward-modal', 'game-over', 'mystery-modal', 'stats-modal', 'welcome-modal', 'redeem-modal', 'god-tier-modal', 'cosmic-draw-modal', 'pets-gallery-modal', 'timer-modal', 'help-modal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.style.display = 'none';
                    if (modalId === 'redeem-modal') {
                        document.getElementById('redeem-code-input').value = '';
                    }
                    if (modalId === 'god-tier-modal' || modalId === 'cosmic-draw-modal') {
                        loadShopItems();
                    }
                }
            });
        }
    });
    
    const buttons = document.querySelectorAll('button:not(.sound-btn):not(.music-btn):not(.mobile-menu-btn):not(.mobile-menu-close):not(.mobile-menu-item)');
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
        document.getElementById('music-controls').style.display = 'flex';
        
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
        const dragonEffect = document.getElementById('dragon-effect');
        if (dragonEffect) {
            dragonEffect.remove();
        }
    }
}

// ====== ACHIEVEMENT SYSTEM ======
function checkAchievements() {
    const achievements = [];
    
    if (gameState.gold >= 1000) achievements.push('Thousandaire: Reach 1,000 gold');
    if (gameState.gold >= 10000) achievements.push('Ten Thousandaire: Reach 10,000 gold');
    if (gameState.gold >= 100000) achievements.push('Hundred Thousandaire: Reach 100,000 gold');
    if (gameState.gold >= 1000000) achievements.push('Millionaire: Reach 1,000,000 gold');
    
    if (gameState.diamonds >= 10) achievements.push('Diamond Collector: Collect 10 diamonds');
    if (gameState.diamonds >= 100) achievements.push('Diamond Hoarder: Collect 100 diamonds');
    
    if (gameState.highestStreak >= 10) achievements.push('Hot Streak: Achieve a 10+ streak');
    if (gameState.highestStreak >= 50) achievements.push('Unstoppable: Achieve a 50+ streak');
    if (gameState.highestStreak >= 100) achievements.push('Legendary Streak: Achieve a 100+ streak');
    
    if (gameState.level >= 50) achievements.push('Halfway There: Reach level 50');
    if (gameState.level >= 100) achievements.push('Centurion: Reach level 100');
    if (gameState.level >= 500) achievements.push('Master Explorer: Reach level 500');
    
    if (gameState.totalPets >= 5) achievements.push('Pet Collector: Own 5 pets');
    if (gameState.totalPets >= 10) achievements.push('Pet Master: Own 10 pets');
    if (gameState.totalPets >= 15) achievements.push('Pet Legend: Own 15 pets');
    
    if (gameState.mysteryBoxesOpened >= 10) achievements.push('Mystery Enthusiast: Open 10 mystery boxes');
    if (gameState.mysteryBoxesOpened >= 50) achievements.push('Mystery Master: Open 50 mystery boxes');
    
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
    setInterval(() => {
        if (gameState.gameActive) {
            saveGameState();
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
        megaLevelExtension: gameState.megaLevelExtension,
        rockPaperScissorsUnlocked: gameState.rockPaperScissorsUnlocked
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
                
                if (!importedData.playerName || !importedData.gold) {
                    throw new Error('Invalid save file');
                }
                
                Object.keys(importedData).forEach(key => {
                    if (gameState[key] !== undefined) {
                        gameState[key] = importedData[key];
                    }
                });
                
                if (importedData.soundEnabled !== undefined) {
                    soundEnabled = importedData.soundEnabled;
                }
                
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

function resetGame() {
    if (confirm('Are you sure you want to reset the game? This will delete all your progress!')) {
        localStorage.clear();
        location.reload();
    }
}

// ====== KEYBOARD SHORTCUTS ======
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key.toLowerCase()) {
            case ' ':
            case 'enter':
                if (!gameState.gameActive) {
                    document.getElementById('start-btn').click();
                } else if (gameState.isSelecting) {
                } else {
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
                const hintBtn = document.getElementById('hint-btn');
                if (hintBtn && !hintBtn.disabled) {
                    hintBtn.click();
                }
                break;
                
            case 't':
                const tagnaBtn = document.getElementById('tagna-btn');
                if (tagnaBtn && !tagnaBtn.disabled) {
                    tagnaBtn.click();
                }
                break;
                
            case 'g':
                const goldrushBtn = document.getElementById('goldrush-btn');
                if (goldrushBtn && !goldrushBtn.disabled) {
                    goldrushBtn.click();
                }
                break;
                
            case 'l':
                const lifeBtn = document.getElementById('life-btn');
                if (lifeBtn && !lifeBtn.disabled) {
                    lifeBtn.click();
                }
                break;
                
            case 'r':
                document.getElementById('redeem-btn').click();
                break;
                
            case 's':
                document.getElementById('shop-btn').click();
                break;
                
            case 'm':
                document.getElementById('stats-btn').click();
                break;
                
            case 'p':
                document.getElementById('gallery-btn').click();
                break;
                
            case 'b':
                if (gameState.rockPaperScissorsUnlocked) {
                    startBossBattleChallenge();
                }
                break;
                
            case 'escape':
                const openModals = document.querySelectorAll('.welcome-modal, .reward-modal, .game-over, .mystery-modal, .stats-modal, .redeem-modal, .god-tier-modal, .cosmic-draw-modal, .pets-gallery-modal, .timer-modal, .help-modal');
                for (const modal of openModals) {
                    if (modal.style.display === 'flex') {
                        modal.style.display = 'none';
                        
                        if (modal.id === 'redeem-modal') {
                            document.getElementById('redeem-code-input').value = '';
                        }
                        
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

// ====== DAILY REWARDS ======
function checkDailyReward() {
    const lastRewardDate = localStorage.getItem('gtgLastRewardDate');
    const today = new Date().toDateString();
    
    if (lastRewardDate !== today) {
        const rewardAmount = 100 + Math.floor(Math.random() * 400);
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
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        const particles = document.querySelectorAll('.theme-particle, .rainbow-particle, .time-particle, .cosmic-particle');
        if (particles.length > 20) {
            for (let i = 20; i < particles.length; i++) {
                particles[i].remove();
            }
        }
    }
}

// ====== ERROR HANDLING ======
function setupErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('Game error:', e.error);
        showNotification('An error occurred. Game state saved.', 'error');
        saveGameState();
    });
    
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        showNotification('A game error occurred. Please refresh.', 'error');
    });
}



// ====== ROCK PAPER SCISSORS BOSS BATTLE FUNCTIONS ======
function unlockRockPaperScissors() {
    if (gameState.gold >= gameState.rockPaperScissorsExtensionPrice && !gameState.rockPaperScissorsUnlocked) {
        gameState.gold -= gameState.rockPaperScissorsExtensionPrice;
        gameState.rockPaperScissorsUnlocked = true;
        gameState.purchasedItems.push('rock_paper_scissors');
        
        updateDisplays();
        saveGameState();
        
        showNotification('Rock Paper Scissors Battle unlocked!', 'success');
        showGoldEffect(-gameState.rockPaperScissorsExtensionPrice, "RPS Unlocked!");
        playSound('purchase');
        
        // Add RPS button to UI
        addRPSButton();
        
        // Update shop item
        updateRPSShopItem();
    } else {
        showNotification(`Not enough gold! Need ${gameState.rockPaperScissorsExtensionPrice} gold to unlock RPS Battle.`, 'error');
    }
}

function addRPSButton() {
    const rpsBtn = document.getElementById('rps-btn');
    const mobileRpsBtn = document.getElementById('mobile-rps-btn');
    
    if (rpsBtn) rpsBtn.style.display = 'inline-flex';
    if (mobileRpsBtn) mobileRpsBtn.style.display = 'flex';
}

function updateRPSShopItem() {
    const rpsItem = document.getElementById('rps-extension-item');
    if (rpsItem) {
        rpsItem.innerHTML = `
            <div class="shop-item-icon">
                <i class="fas fa-fist-raised"></i>
            </div>
            <div class="shop-item-title">Rock Paper Scissors Battle</div>
            <div class="shop-item-description">
                Already Unlocked! Challenge powerful bosses!
            </div>
            <button class="shop-item-action equip" onclick="startBossBattleChallenge()">
                Play Now
            </button>
        `;
    }
}

function initializeRPSSystem() {
    if (gameState.rockPaperScissorsUnlocked) {
        addRPSButton();
        updateRPSShopItem();
    }
}

function startBossBattleChallenge() {
    if (!gameState.rockPaperScissorsUnlocked) {
        showNotification('You need to unlock Rock Paper Scissors Battle first!', 'error');
        return;
    }
    
    if (gameState.bossBattleActive) {
        showNotification('Boss battle is already active!', 'info');
        return;
    }
    
    gameState.bossBattleActive = true;
    gameState.rpsGameActive = false;
    gameState.rpsLives = 3;
    gameState.bossConsecutiveWins = 0;
    
    // Select a random boss
    const randomBoss = getRandomBoss();
    gameState.currentBoss = randomBoss;
    
    showBossChallengeModal(randomBoss);
    playSound('click');
}

function getRandomBoss() {
    const totalChance = bossTypes.reduce((sum, boss) => sum + boss.chance, 0);
    let random = Math.random() * totalChance;
    
    for (const boss of bossTypes) {
        if (random < boss.chance) {
            return boss;
        }
        random -= boss.chance;
    }
    
    return bossTypes[0];
}

function showBossChallengeModal(boss) {
    const modal = document.createElement('div');
    modal.className = 'hint-modal';
    modal.id = 'boss-challenge-modal';
    modal.style.display = 'flex';
    
    const bossColor = getBossColor(boss.rarity);
    
    modal.innerHTML = `
        <div class="hint-content">
            <h3 style="color: ${bossColor};">⚔️ BOSS CHALLENGE ⚔️</h3>
            <div class="boss-info" style="text-align: center; margin: 20px 0;">
                <div style="font-size: 4rem; color: ${bossColor}; margin-bottom: 10px;">
                    ${getBossIcon(boss.id)}
                </div>
                <h4 style="color: ${bossColor};">${boss.name}</h4>
                <p style="color: var(--text-muted); margin: 10px 0;">
                    <strong>Rarity:</strong> ${boss.rarity.toUpperCase()}
                </p>
                <p style="color: var(--text-muted); margin: 10px 0;">
                    <strong>Ability:</strong> ${boss.ability}
                </p>
                <p style="color: var(--text-muted); margin: 10px 0;">
                    <strong>Reward:</strong> ${boss.reward.name}
                </p>
                <div class="rps-lives-display" style="margin: 20px auto; display: inline-flex;">
                    <i class="fas fa-heart"></i> Lives: <span id="boss-challenge-lives">${gameState.rpsLives}</span>
                </div>
            </div>
            <p style="color: var(--text-muted); text-align: center; margin: 20px 0;">
                Defeat the boss in Rock Paper Scissors! You have 3 lives. Each round lasts 5 seconds.
            </p>
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                <button class="welcome-btn" id="accept-boss-challenge-btn" style="background: linear-gradient(to right, #51cf66, #40c057);">
                    <i class="fas fa-check"></i> Accept Challenge
                </button>
                <button class="welcome-btn" id="decline-boss-challenge-btn" style="background: linear-gradient(to right, #555, #666);">
                    <i class="fas fa-times"></i> Decline
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('accept-boss-challenge-btn').addEventListener('click', function() {
        modal.remove();
        startRPSGame();
    });
    
    document.getElementById('decline-boss-challenge-btn').addEventListener('click', function() {
        modal.remove();
        gameState.bossBattleActive = false;
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            modal.remove();
            gameState.bossBattleActive = false;
        }
    });
}

function getBossColor(rarity) {
    switch(rarity) {
        case 'cosmic': return '#8a2be2';
        case 'legendary': return '#FFD700';
        case 'epic': return '#cc5de8';
        case 'rare': return '#4dabf7';
        default: return '#495057';
    }
}

function getBossIcon(bossId) {
    switch(bossId) {
        case 'cosmic_god': return '👑';
        case 'space_robot': return '🤖';
        case 'space_ghost': return '👻';
        case 'underworld_entity': return '👹';
        case 'skeleton_nigga': return '💀';
        case 'otensahorse': return '🐴';
        default: return '👾';
    }
}

function startRPSGame() {
    gameState.rpsGameActive = true;
    gameState.playerRPSChoice = null;
    gameState.bossRPSChoice = null;
    gameState.rpsTimer = 5;
    
    const modal = document.createElement('div');
    modal.className = 'hint-modal';
    modal.id = 'rps-game-modal';
    modal.style.display = 'flex';
    
    const boss = gameState.currentBoss;
    const bossColor = getBossColor(boss.rarity);
    
    modal.innerHTML = `
        <div class="hint-content">
            <div class="boss-info" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="text-align: left;">
                    <div style="font-size: 2.5rem; color: ${bossColor};">${getBossIcon(boss.id)}</div>
                    <h4 style="color: ${bossColor}; margin: 5px 0;">${boss.name}</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">${boss.rarity.toUpperCase()}</p>
                </div>
                <div class="rps-lives-display">
                    <i class="fas fa-heart"></i> Lives: <span id="rps-lives-display">${gameState.rpsLives}</span>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 2.5rem;">🤵</div>
                    <h4 style="color: var(--theme-primary); margin: 5px 0;">${gameState.playerName || 'Player'}</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">${getEquippedPetIcon()}</p>
                </div>
            </div>
            
            <div style="text-align: center; margin: 20px 0;">
                <div style="font-size: 3rem; color: var(--theme-primary);" id="rps-timer-display">${gameState.rpsTimer}</div>
                <p style="color: var(--text-muted); margin-top: 10px;">Choose within 5 seconds!</p>
            </div>
            
            <div style="display: flex; justify-content: center; gap: 15px; margin: 20px 0;" id="rps-choices-container">
                <button class="rps-choice-btn" onclick="selectRPSChoice('rock')" style="background: linear-gradient(to right, #ff6b6b, #ff8787);">
                    <div class="rps-emoji">✊</div>
                    <div>Rock</div>
                </button>
                <button class="rps-choice-btn" onclick="selectRPSChoice('paper')" style="background: linear-gradient(to right, #4dabf7, #74c0fc);">
                    <div class="rps-emoji">✋</div>
                    <div>Paper</div>
                </button>
                <button class="rps-choice-btn" onclick="selectRPSChoice('scissors')" style="background: linear-gradient(to right, #51cf66, #69db7c);">
                    <div class="rps-emoji">✌️</div>
                    <div>Scissors</div>
                </button>
            </div>
            
            <div id="rps-result" style="display: none; text-align: center; margin: 20px 0;">
                <div style="display: flex; justify-content: center; gap: 30px; margin: 20px 0;">
                    <div>
                        <div style="font-size: 3rem;" id="player-choice-emoji"></div>
                        <p style="color: var(--theme-primary);">You</p>
                    </div>
                    <div style="font-size: 3rem; display: flex; align-items: center;">VS</div>
                    <div>
                        <div style="font-size: 3rem;" id="boss-choice-emoji"></div>
                        <p style="color: ${bossColor};">${boss.name}</p>
                    </div>
                </div>
                <h3 id="rps-result-text" style="margin: 10px 0;"></h3>
                <p id="rps-result-message" style="color: var(--text-muted);"></p>
            </div>
            
            <div style="display: flex; justify-content: center; gap: 10px; margin-top: 20px;">
                <button class="welcome-btn" id="next-rps-round-btn" style="display: none; background: linear-gradient(to right, #4dabf7, #339af0);">
                    <i class="fas fa-forward"></i> Next Round
                </button>
                <button class="welcome-btn" id="exit-rps-game-btn" style="background: linear-gradient(to right, #555, #666);">
                    <i class="fas fa-times"></i> Exit Battle
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Start timer
    gameState.rpsTimerInterval = setInterval(updateRPSTimer, 1000);
    
    // Setup event listeners
    document.getElementById('next-rps-round-btn').addEventListener('click', nextRPSRound);
    document.getElementById('exit-rps-game-btn').addEventListener('click', function() {
        clearInterval(gameState.rpsTimerInterval);
        modal.remove();
        gameState.rpsGameActive = false;
        gameState.bossBattleActive = false;
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            clearInterval(gameState.rpsTimerInterval);
            modal.remove();
            gameState.rpsGameActive = false;
            gameState.bossBattleActive = false;
        }
    });
}

function updateRPSTimer() {
    if (!gameState.rpsGameActive) return;
    
    gameState.rpsTimer--;
    const timerDisplay = document.getElementById('rps-timer-display');
    
    if (timerDisplay) {
        timerDisplay.textContent = gameState.rpsTimer;
        
        if (gameState.rpsTimer <= 0) {
            clearInterval(gameState.rpsTimerInterval);
            handleRPSTimeout();
        } else if (gameState.rpsTimer <= 3) {
            timerDisplay.style.color = '#ff6b6b';
            timerDisplay.style.animation = 'rpsTimerPulse 0.5s infinite';
        }
    }
}

function handleRPSTimeout() {
    if (!gameState.playerRPSChoice) {
        // Player didn't choose in time
        gameState.rpsLives--;
        gameState.bossConsecutiveWins++;
        
        updateRPSLivesDisplay();
        
        const resultContainer = document.getElementById('rps-result');
        const choicesContainer = document.getElementById('rps-choices-container');
        
        if (resultContainer && choicesContainer) {
            choicesContainer.style.display = 'none';
            resultContainer.style.display = 'block';
            
            document.getElementById('player-choice-emoji').textContent = '⏰';
            document.getElementById('boss-choice-emoji').textContent = getBossIcon(gameState.currentBoss.id);
            document.getElementById('rps-result-text').textContent = 'TIME OUT!';
            document.getElementById('rps-result-text').style.color = '#ff6b6b';
            document.getElementById('rps-result-message').textContent = 'You took too long to choose! Boss wins by default.';
            
            // Apply boss ability effect
            applyBossAbility();
            
            // Check if game over
            if (gameState.rpsLives <= 0) {
                showRPSGameOver(false);
            } else {
                document.getElementById('next-rps-round-btn').style.display = 'inline-flex';
            }
        }
    }
}

function selectRPSChoice(choice) {
    if (!gameState.rpsGameActive || gameState.playerRPSChoice) return;
    
    gameState.playerRPSChoice = choice;
    clearInterval(gameState.rpsTimerInterval);
    
    // Update button styles
    const buttons = document.querySelectorAll('.rps-choice-btn');
    buttons.forEach(btn => {
        btn.style.opacity = '0.5';
        btn.disabled = true;
    });
    
    const selectedBtn = document.querySelector(`.rps-choice-btn[onclick*="${choice}"]`);
    if (selectedBtn) {
        selectedBtn.style.boxShadow = '0 0 20px currentColor';
        selectedBtn.style.transform = 'scale(1.1)';
    }
    
    // Generate boss choice
    generateBossRPSChoice();
}

function generateBossRPSChoice() {
    const boss = gameState.currentBoss;
    const choices = ['rock', 'paper', 'scissors'];
    
    // Boss has advantage based on rarity
    let bossWinChance = 0.5; // Default 50%
    
    if (boss.winChance) {
        bossWinChance = boss.winChance;
    } else {
        switch(boss.rarity) {
            case 'cosmic': bossWinChance = 0.7; break;
            case 'legendary': bossWinChance = 0.6; break;
            case 'epic': bossWinChance = 0.55; break;
            case 'rare': bossWinChance = 0.5; break;
            default: bossWinChance = 0.5;
        }
    }
    
    // Check if player has cosmic god pet for advantage
    if (gameState.equippedPet === 'cosmic_god_pet') {
        bossWinChance = 0.01; // 99% player win chance with cosmic god pet
    }
    
    // Calculate boss choice
    if (Math.random() < bossWinChance) {
        // Boss tries to win
        gameState.bossRPSChoice = getWinningChoiceAgainst(gameState.playerRPSChoice);
    } else {
        // Boss chooses randomly
        gameState.bossRPSChoice = choices[Math.floor(Math.random() * 3)];
    }
    
    setTimeout(showRPSResult, 1000);
}

function getWinningChoiceAgainst(choice) {
    switch(choice) {
        case 'rock': return 'paper';
        case 'paper': return 'scissors';
        case 'scissors': return 'rock';
        default: return 'rock';
    }
}

function showRPSResult() {
    const resultContainer = document.getElementById('rps-result');
    const choicesContainer = document.getElementById('rps-choices-container');
    
    if (!resultContainer || !choicesContainer) return;
    
    choicesContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const playerChoice = gameState.playerRPSChoice;
    const bossChoice = gameState.bossRPSChoice;
    
    // Update emojis
    document.getElementById('player-choice-emoji').textContent = getRPSChoiceEmoji(playerChoice);
    document.getElementById('boss-choice-emoji').textContent = getRPSChoiceEmoji(bossChoice);
    
    // Determine winner
    const result = determineRPSWinner(playerChoice, bossChoice);
    
    const resultText = document.getElementById('rps-result-text');
    const resultMessage = document.getElementById('rps-result-message');
    
    if (result === 'win') {
        resultText.textContent = 'VICTORY!';
        resultText.style.color = '#51cf66';
        resultMessage.textContent = `You defeated ${gameState.currentBoss.name}!`;
        
        gameState.bossConsecutiveWins = 0;
        giveRPSReward();
        
    } else if (result === 'lose') {
        resultText.textContent = 'DEFEAT!';
        resultText.style.color = '#ff6b6b';
        resultMessage.textContent = `${gameState.currentBoss.name} defeated you!`;
        
        gameState.rpsLives--;
        gameState.bossConsecutiveWins++;
        
        // Apply boss ability effect
        applyBossAbility();
        
    } else {
        resultText.textContent = 'DRAW!';
        resultText.style.color = '#ffd43b';
        resultMessage.textContent = 'It\'s a tie! No one wins this round.';
    }
    
    updateRPSLivesDisplay();
    
    // Check if game over
    if (gameState.rpsLives <= 0) {
        showRPSGameOver(false);
    } else if (result === 'win') {
        showRPSGameOver(true); // Player won the battle
    } else {
        document.getElementById('next-rps-round-btn').style.display = 'inline-flex';
    }
}

function getRPSChoiceEmoji(choice) {
    switch(choice) {
        case 'rock': return '✊';
        case 'paper': return '✋';
        case 'scissors': return '✌️';
        default: return '❓';
    }
}

function determineRPSWinner(player, boss) {
    if (player === boss) return 'draw';
    
    if (
        (player === 'rock' && boss === 'scissors') ||
        (player === 'paper' && boss === 'rock') ||
        (player === 'scissors' && boss === 'paper')
    ) {
        return 'win';
    }
    
    return 'lose';
}

function applyBossAbility() {
    const boss = gameState.currentBoss;
    
    if (boss.abilityEffect) {
        const effect = boss.abilityEffect(gameState.bossConsecutiveWins);
        
        if (effect.message) {
            showNotification(effect.message, 'error');
        }
        
        if (effect.resetStats) {
            resetRPSStats();
        }
        
        // Special handling for cosmic god
        if (boss.id === 'cosmic_god' && gameState.rpsLives <= 0) {
            const stolenGold = gameState.gold;
            const stolenDiamonds = gameState.diamonds;
            gameState.gold = 0;
            gameState.diamonds = 0;
            
            showNotification(`Cosmic God stole ${stolenGold} gold and ${stolenDiamonds.toFixed(2)} diamonds!`, 'error');
            updateDisplays();
            saveGameState();
        }
    }
}

function resetRPSStats() {
    // Reset some game stats on cosmic god defeat
    gameState.score = 0;
    gameState.streak = 0;
    gameState.level = 1;
    updateDisplays();
    showNotification('Cosmic God reset your stats!', 'error');
}

function updateRPSLivesDisplay() {
    const livesDisplay = document.getElementById('rps-lives-display');
    const bossLivesDisplay = document.getElementById('boss-challenge-lives');
    
    if (livesDisplay) livesDisplay.textContent = gameState.rpsLives;
    if (bossLivesDisplay) bossLivesDisplay.textContent = gameState.rpsLives;
}

function nextRPSRound() {
    gameState.playerRPSChoice = null;
    gameState.bossRPSChoice = null;
    gameState.rpsTimer = 5;
    
    const resultContainer = document.getElementById('rps-result');
    const choicesContainer = document.getElementById('rps-choices-container');
    const nextRoundBtn = document.getElementById('next-rps-round-btn');
    const timerDisplay = document.getElementById('rps-timer-display');
    
    if (resultContainer && choicesContainer && nextRoundBtn && timerDisplay) {
        resultContainer.style.display = 'none';
        choicesContainer.style.display = 'flex';
        nextRoundBtn.style.display = 'none';
        timerDisplay.textContent = gameState.rpsTimer;
        timerDisplay.style.color = 'var(--theme-primary)';
        timerDisplay.style.animation = '';
        
        // Reset button styles
        const buttons = document.querySelectorAll('.rps-choice-btn');
        buttons.forEach(btn => {
            btn.style.opacity = '1';
            btn.disabled = false;
            btn.style.boxShadow = '';
            btn.style.transform = '';
        });
    }
    
    // Restart timer
    clearInterval(gameState.rpsTimerInterval);
    gameState.rpsTimerInterval = setInterval(updateRPSTimer, 1000);
}

function giveRPSReward() {
    const boss = gameState.currentBoss;
    
    if (boss.reward) {
        switch(boss.reward.type) {
            case 'gold':
                let goldAmount = boss.reward.amount;
                if (typeof goldAmount === 'function') {
                    goldAmount = goldAmount();
                }
                gameState.gold += goldAmount;
                gameState.totalGoldEarned += goldAmount;
                showGoldEffect(goldAmount, "Boss Reward!");
                showNotification(`Victory Reward: +${goldAmount} Gold!`, 'success');
                break;
                
            case 'diamonds':
                gameState.diamonds += boss.reward.amount;
                showDiamondEffect(boss.reward.amount);
                showNotification(`Victory Reward: +${boss.reward.amount} Diamonds!`, 'success');
                break;
                
            case 'pet':
                if (!gameState.purchasedItems.includes(boss.reward.petId)) {
                    gameState.purchasedItems.push(boss.reward.petId);
                    gameState.totalPets++;
                    showNotification(`Victory Reward: ${boss.reward.name} unlocked!`, 'success');
                } else {
                    gameState.gold += 100000;
                    showGoldEffect(100000, "Duplicate Pet!");
                    showNotification(`Already have ${boss.reward.name}! Converted to 100,000 gold!`, 'info');
                }
                break;
                
            case 'random':
                if (boss.reward.items && boss.reward.items.length > 0) {
                    const randomItem = boss.reward.items[Math.floor(Math.random() * boss.reward.items.length)];
                    switch(randomItem.type) {
                        case 'gold':
                            gameState.gold += randomItem.amount;
                            showGoldEffect(randomItem.amount, "Random Reward!");
                            showNotification(`Victory Reward: +${randomItem.amount} Gold!`, 'success');
                            break;
                        case 'diamonds':
                            gameState.diamonds += randomItem.amount;
                            showDiamondEffect(randomItem.amount);
                            showNotification(`Victory Reward: +${randomItem.amount} Diamonds!`, 'success');
                            break;
                        case 'life':
                            gameState.rpsLives = Math.min(3, gameState.rpsLives + randomItem.amount);
                            updateRPSLivesDisplay();
                            showNotification(`Victory Reward: +${randomItem.amount} Life!`, 'success');
                            break;
                    }
                }
                break;
        }
        
        updateDisplays();
        saveGameState();
    }
}

function showRPSGameOver(isVictory) {
    clearInterval(gameState.rpsTimerInterval);
    
    const modal = document.createElement('div');
    modal.className = `hint-modal ${isVictory ? 'rps-victory-screen' : 'rps-loss-screen'}`;
    modal.id = 'rps-game-over-modal';
    modal.style.display = 'flex';
    
    const boss = gameState.currentBoss;
    const bossColor = getBossColor(boss.rarity);
    
    modal.innerHTML = `
        <div class="hint-content">
            <h3 style="color: ${isVictory ? '#51cf66' : '#ff6b6b'};">
                ${isVictory ? '🎉 VICTORY! 🎉' : '💀 DEFEAT! 💀'}
            </h3>
            
            <div style="text-align: center; margin: 20px 0;">
                <div style="font-size: 5rem; color: ${isVictory ? '#51cf66' : '#ff6b6b'};">
                    ${isVictory ? '🏆' : '💀'}
                </div>
                <h4 style="color: ${bossColor}; margin: 10px 0;">${boss.name}</h4>
                <p style="color: var(--text-muted); margin: 10px 0;">
                    ${isVictory ? 'You have defeated the boss!' : 'The boss has defeated you!'}
                </p>
            </div>
            
            ${isVictory ? `
            <div style="background: rgba(81, 207, 102, 0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                <p style="color: #51cf66; margin: 5px 0;"><strong>Reward:</strong> ${boss.reward.name}</p>
                <p style="color: var(--text-muted); margin: 5px 0; font-size: 0.9rem;">${boss.reward.description || 'Claim your reward!'}</p>
            </div>
            ` : ''}
            
            <div style="display: flex; justify-content: center; gap: 10px; margin-top: 20px;">
                <button class="welcome-btn" id="rps-play-again-btn" style="background: linear-gradient(to right, ${isVictory ? '#51cf66' : '#4dabf7'}, ${isVictory ? '#40c057' : '#339af0'});">
                    <i class="fas fa-redo"></i> ${isVictory ? 'Challenge Another Boss' : 'Try Again'}
                </button>
                <button class="welcome-btn" id="rps-exit-btn" style="background: linear-gradient(to right, #555, #666);">
                    <i class="fas fa-home"></i> Return to Game
                </button>
            </div>
        </div>
    `;
    
    // Remove existing modals
    const existingModal = document.getElementById('rps-game-modal');
    if (existingModal) existingModal.remove();
    
    document.body.appendChild(modal);
    
    document.getElementById('rps-play-again-btn').addEventListener('click', function() {
        modal.remove();
        gameState.rpsGameActive = false;
        gameState.bossBattleActive = false;
        setTimeout(startBossBattleChallenge, 500);
    });
    
    document.getElementById('rps-exit-btn').addEventListener('click', function() {
        modal.remove();
        gameState.rpsGameActive = false;
        gameState.bossBattleActive = false;
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            modal.remove();
            gameState.rpsGameActive = false;
            gameState.bossBattleActive = false;
        }
    });
    
    if (isVictory) {
        playSound('levelup');
    } else {
        playSound('gameover');
    }
}

function getEquippedPetIcon() {
    const pet = shopItems.pets.find(p => p.id === gameState.equippedPet);
    return pet && pet.id !== 'none' ? pet.name : 'No Pet';
}

// ====== GAME INITIALIZATION COMPLETION ======
function initializeAllSystems() {
    setupKeyboardShortcuts();
    setupErrorHandling();
    startAutoSave();
    optimizePerformance();
}

// ====== FINAL INITIALIZATION ======
// Call this at the end of DOMContentLoaded
function completeInitialization() {
    // Apply pet effects on load
    if (gameState.equippedPet === 'music_dragon' && gameState.musicEnabled) {
        startBackgroundMusic();
    }
    
    if (gameState.equippedPet === 'lucky_cat' && gameState.gameActive) {
        startLuckyCatPassiveGold();
    }
    
    updatePetEffectDisplays();
    createPetThemeEffects();
    applyAvatarAuraEffects();
    
    // Initialize achievements
    const achievements = checkAchievements();
    if (achievements.length > 0) {
        console.log('Unlocked achievements:', achievements);
    }
}

// Add this to the end of your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... existing initialization code ...
    
    // Add this line at the end
    setTimeout(completeInitialization, 100);
});

// ====== EXPORT/IMPORT BUTTONS ======
// Make sure these buttons are accessible in your HTML
document.getElementById('export-btn')?.addEventListener('click', exportGameData);
document.getElementById('import-btn')?.addEventListener('click', importGameData);
document.getElementById('reset-btn')?.addEventListener('click', resetGame);
