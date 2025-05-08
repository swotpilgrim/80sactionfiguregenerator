// Configuration for the Radical 80s/90s Action Figure Creator
const RADICAL_CONFIG = {
    // Character types from the original config
    characterTypes: [
        { value: "Human/Humanoid", label: "Human/Humanoid" },
        { value: "Alien/Monster/Mutant", label: "Alien/Monster/Mutant" },
        { value: "Robot/Cyborg", label: "Robot/Cyborg" },
        { value: "Animal/Mutant Animal", label: "Animal/Mutant Animal" },
        { value: "Hybrid", label: "Hybrid" }
    ],
    
    // Character options for each type
    characterOptions: {
        "Human/Humanoid": [
            { value: "Standard Male Warrior", label: "Standard Male Warrior" },
            { value: "Standard Female Warrior", label: "Standard Female Warrior" },
            { value: "Muscular Barbarian", label: "Muscular Barbarian" },
            { value: "Athletic Ninja", label: "Athletic Ninja" },
            { value: "Stocky Wrestler Build", label: "Stocky Wrestler Build" },
            { value: "Tall Lanky Spy", label: "Tall Lanky Spy" },
            { value: "Cybernetically Enhanced Human", label: "Cybernetically Enhanced Human" },
            { value: "Mutated Human", label: "Mutated Human" },
            { value: "Battle-Scarred Veteran", label: "Battle-Scarred Veteran" },
            { value: "Clone Trooper Variant", label: "Clone Trooper Variant" }
        ],
        "Alien/Monster/Mutant": [
            { value: "Insectoid", label: "Insectoid (4-6 arms option)" },
            { value: "Reptilian Humanoid", label: "Reptilian Humanoid" },
            { value: "Amphibious Fish-man", label: "Amphibious Fish-man" },
            { value: "Crystalline Being", label: "Crystalline Being" },
            { value: "Slime-based Creature", label: "Slime-based Creature" },
            { value: "Skeletal Undead", label: "Skeletal Undead" },
            { value: "Energy Elemental", label: "Energy Elemental" },
            { value: "Tentacled Aberration", label: "Tentacled Aberration" },
            { value: "Lava Rock Monster", label: "Lava Rock Monster" },
            { value: "Ice Creature", label: "Ice Creature" }
        ],
        "Robot/Cyborg": [
            { value: "Sleek Android", label: "Sleek Android" },
            { value: "Boxy Military Robot", label: "Boxy Military Robot" },
            { value: "Transformable Mech Body", label: "Transformable Mech Body" },
            { value: "Cyborg", label: "Cyborg (half human/half machine)" },
            { value: "Tank-based Robot", label: "Tank-based Robot" },
            { value: "Spider/Multi-leg Robot", label: "Spider/Multi-leg Robot" },
            { value: "Combat Droid", label: "Combat Droid" },
            { value: "Stealth Infiltrator Unit", label: "Stealth Infiltrator Unit" },
            { value: "Power-armored Soldier", label: "Power-armored Soldier" },
            { value: "Bio-mechanical Hybrid", label: "Bio-mechanical Hybrid" }
        ],
        "Animal/Mutant Animal": [
            { value: "Ninja Turtle", label: "Ninja Turtle (anthropomorphic reptile)" },
            { value: "Mutant Monkey/Ape", label: "Mutant Monkey/Ape" },
            { value: "Armored Bear", label: "Armored Bear" },
            { value: "Cyber-Wolf", label: "Cyber-Wolf" },
            { value: "Battle Cat", label: "Battle Cat (big cat variant)" },
            { value: "Martial Arts Duck", label: "Martial Arts Duck" },
            { value: "Rhino Warrior", label: "Rhino Warrior" },
            { value: "Shark Soldier", label: "Shark Soldier" },
            { value: "Hawk Person", label: "Hawk Person" },
            { value: "Martial Arts Rabbit", label: "Martial Arts Rabbit" }
        ],
        "Hybrid": [
            { value: "Robot/Animal", label: "Robot/Animal (like a robo-shark)" },
            { value: "Human/Alien", label: "Human/Alien (partial features)" },
            { value: "Human/Robot", label: "Human/Robot (more cyborg than full robot)" },
            { value: "Alien/Animal", label: "Alien/Animal (extra-terrestrial beast)" },
            { value: "Monster/Machine", label: "Monster/Machine (bio-mechanical horror)" },
            { value: "Spirit/Human", label: "Spirit/Human (ghostly warrior)" },
            { value: "Plant/Human", label: "Plant/Human (vine powers)" },
            { value: "Insect/Robot", label: "Insect/Robot (mechanical bug soldier)" },
            { value: "Fish/Space Alien", label: "Fish/Space Alien (cosmic sea creature)" },
            { value: "Dragon/Human", label: "Dragon/Human (draconic warrior)" }
        ]
    },
    
    // Body builds
    bodyBuilds: [
        { value: "Standard", label: "Standard (Normal proportions)" },
        { value: "Heroic", label: "Heroic (Muscular, G.I. Joe style)" },
        { value: "Bulky", label: "Bulky (He-Man style)" },
        { value: "Slim/Agile", label: "Slim/Agile (Ninja or sneak-attack specialist)" },
        { value: "Monster", label: "Monster (Bulbous, asymmetric)" }
    ],
    
    // Head types
    headTypes: [
        { value: "Square-jawed Hero", label: "Square-jawed Hero" },
        { value: "Chiseled Commando", label: "Chiseled Commando" },
        { value: "Skull Face", label: "Classic Skull Face" },
        { value: "Reptilian Snake Head", label: "Reptilian Snake Head" },
        { value: "Tentacle Face", label: "Tentacle Face" },
        { value: "Robot Dome", label: "Classic Robot Dome" },
        { value: "Boxy Computer Head", label: "Boxy Computer Head" },
        { value: "Wolf Snout", label: "Wolf Snout" },
        { value: "Ninja Mask", label: "Ninja Face Wrap" },
        { value: "Combat Helmet", label: "Combat Infantry Helmet" },
        { value: "Exposed Brain Skull", label: "Exposed Brain Skull" },
        { value: "Multi-eyed Horror", label: "Multi-eyed Horror" },
        { value: "Crystal Shard Face", label: "Crystal Shard Face" },
        { value: "Hockey Mask", label: "Hockey-style Mask" },
        { value: "Space Helmet", label: "Space Helmet (clear dome)" }
    ],
    
    // Accessories
    accessories: [
        { value: "Laser Rifle", label: "Laser Rifle (multiple colors)" },
        { value: "Energy Sword", label: "Energy Sword" },
        { value: "Plasma Cannon", label: "Plasma Cannon" },
        { value: "Missile Launcher", label: "Missile Launcher" },
        { value: "Assault Blaster", label: "Assault Blaster" },
        { value: "Flame Thrower", label: "Flame Thrower" },
        { value: "Ice Ray Gun", label: "Ice Ray Gun" },
        { value: "Electric Staff", label: "Electric Staff" },
        { value: "Sci-fi Battle Axe", label: "Sci-fi Battle Axe" },
        { value: "Bio Weapons", label: "Bio Weapons" },
        { value: "Force Field Generator", label: "Force Field Generator" },
        { value: "Riot Shield", label: "Riot Shield" },
        { value: "Jetpack", label: "Jetpack (classic rocket)" },
        { value: "Grappling Hook Gun", label: "Grappling Hook Gun" },
        { value: "Stealth Generator", label: "Stealth Generator" }
    ],
    
    // Action features
    actionFeatures: [
        { value: "Spinning Backhand Punch", label: "Spinning Backhand Punch" },
        { value: "Power Kick Action", label: "Power Kick Action" },
        { value: "Missile-firing Chest", label: "Missile-firing Chest" },
        { value: "Spring-launch Punch", label: "Spring-launch Punch" },
        { value: "Waist-twist Chop", label: "Waist-twist Chop" },
        { value: "Quick-draw Weapon", label: "Quick-draw Weapon" },
        { value: "Glowing Chest Symbol", label: "Glowing Chest Symbol" },
        { value: "LED Eye Beams", label: "LED Eye Beams" },
        { value: "Illuminated Weapon", label: "Illuminated Weapon" },
        { value: "Power Core Glow", label: "Power Core Glow" },
        { value: "Acid Spit Attack", label: "Acid Spit Attack" },
        { value: "Water Gun Blast", label: "Water Gun Blast" },
        { value: "Slime Shot", label: "Slime Shot" },
        { value: "Wall-climbing Hands", label: "Wall-climbing Hands" },
        { value: "Spider Web Shooter", label: "Spider Web Shooter" }
    ],
    
    // Colors with improved selection
colors: {
        primary: [
            { value: "electric-blue", label: "Electric Blue" },
            { value: "hot-pink", label: "Hot Pink Plasma" },
            { value: "laser-red", label: "Laser Red" },
            { value: "toxic-green", label: "Toxic Green" },
            { value: "nuclear-yellow", label: "Nuclear Yellow" },
            { value: "cyber-purple", label: "Cyber Purple" },
            { value: "radiation-orange", label: "Radiation Orange" },
            { value: "alien-teal", label: "Alien Teal" },
            { value: "mutant-magenta", label: "Mutant Magenta" },
            { value: "plasma-white", label: "Plasma White" },
            { value: "highlighter-yellow", label: "Highlighter Yellow" },
            { value: "safety-orange", label: "Safety Orange" },
            { value: "shocking-pink", label: "Shocking Pink" },
            { value: "chrome-silver", label: "Chrome Silver" },
            { value: "battle-gold", label: "Battle Gold" }
        ],
        secondary: [
            { value: "mirror-chrome", label: "Mirror Chrome" },
            { value: "stealth-black", label: "Stealth Black" },
            { value: "royal-gold", label: "Royal Gold" },
            { value: "danger-red", label: "Danger Red Stripe" },
            { value: "warning-yellow", label: "Warning Yellow Band" },
            { value: "brushed-steel", label: "Brushed Steel" },
            { value: "tactical-black", label: "Tactical Black" },
            { value: "void-dark", label: "Void Dark" },
            { value: "battle-bronze", label: "Battle Bronze" },
            { value: "rank-blue", label: "Rank Blue Mark" }
        ],
        accent: [
            { value: "neon-green", label: "Neon Green Highlights" },
            { value: "lightning-yellow", label: "Lightning Yellow Details" },
            { value: "energy-blue", label: "Energy Blue Accents" },
            { value: "plasma-pink", label: "Plasma Pink Trim" },
            { value: "cyber-orange", label: "Cyber Orange Graphics" },
            { value: "toxic-glow", label: "Toxic Glow Edges" },
            { value: "laser-red-trim", label: "Laser Red Trim" },
            { value: "chrome-detail", label: "Chrome Details" },
            { value: "gold-edging", label: "Gold Edging" },
            { value: "battle-scarred", label: "Battle-Scarred Metal" }
        ]
    },
    
    // Color scheme combinations for auto-selection
    colorSchemes: [
        { primary: "electric-blue", secondary: "stealth-black", accent: "neon-green" },
        { primary: "laser-red", secondary: "mirror-chrome", accent: "lightning-yellow" },
        { primary: "toxic-green", secondary: "void-dark", accent: "energy-blue" },
        { primary: "hot-pink", secondary: "royal-gold", accent: "plasma-pink" },
        { primary: "nuclear-yellow", secondary: "tactical-black", accent: "cyber-orange" },
        { primary: "cyber-purple", secondary: "mirror-chrome", accent: "lightning-yellow" },
        { primary: "chrome-silver", secondary: "danger-red", accent: "laser-red-trim" },
        { primary: "battle-gold", secondary: "void-dark", accent: "gold-edging" },
        { primary: "radiation-orange", secondary: "stealth-black", accent: "toxic-glow" },
        { primary: "mutant-magenta", secondary: "mirror-chrome", accent: "battle-scarred" }
    ],
    
    // Special abilities
    specialAbilities: [
        { value: "Elemental Powers", label: "Elemental Powers" },
        { value: "Stealth Abilities", label: "Stealth Abilities" },
        { value: "Super Strength", label: "Super Strength" },
        { value: "Flight Capabilities", label: "Flight Capabilities" },
        { value: "Underwater Specialist", label: "Underwater Specialist" },
        { value: "Space/Zero-G", label: "Space/Zero-G" },
        { value: "Specialty Combat", label: "Specialty Combat" },
        { value: "Laser Vision", label: "Laser Vision" },
        { value: "Transforming Power", label: "Transforming Power" },
        { value: "Sonic Attack", label: "Sonic Attack" },
        { value: "Mind Control", label: "Mind Control" },
        { value: "Energy Absorption", label: "Energy Absorption" },
        { value: "Teleportation", label: "Teleportation" },
        { value: "Force Field", label: "Force Field" },
        { value: "Toxic Immunity", label: "Toxic Immunity" }
    ],
    
    // Faction alignments
    factionAlignments: [
        { value: "Hero Team Colors", label: "Hero Team Colors" },
        { value: "Villain Army Colors", label: "Villain Army Colors" },
        { value: "Neutral/Mercenary", label: "Neutral/Mercenary" },
        { value: "Special Forces/Elite", label: "Special Forces/Elite" },
        { value: "Alien Race", label: "Alien Race" },
        { value: "Monster Squad", label: "Monster Squad" },
        { value: "Covert Ops Division", label: "Covert Ops Division" },
        { value: "Galactic Patrol", label: "Galactic Patrol" },
        { value: "Rogue Agents", label: "Rogue Agents" },
        { value: "Mutant Resistance", label: "Mutant Resistance" }
    ],
    
    // Costume elements
    costumeElements: [
        { value: "Shoulder Pauldrons Only", label: "Shoulder Pauldrons Only" },
        { value: "Chest Plate & Gauntlets", label: "Chest Plate & Gauntlets" },
        { value: "Full Body Plate", label: "Full Body Plate" },
        { value: "Half Armor Left Side", label: "Half Armor Left Side" },
        { value: "Modular Tech Armor", label: "Modular Tech Armor" },
        { value: "Battle Damage Armor", label: "Battle Damage Armor" },
        { value: "Light Recon Armor", label: "Light Recon Armor" },
        { value: "Heavy Assault Plate", label: "Heavy Assault Plate" },
        { value: "Utility Belt System", label: "Utility Belt System" },
        { value: "Tactical Thigh Straps", label: "Tactical Thigh Straps" },
        { value: "Combat Infantry Boots", label: "Combat Infantry Boots" },
        { value: "Rocket Thrust Boots", label: "Rocket Thrust Boots" },
        { value: "Ammo Bandolier", label: "Ammo Bandolier" },
        { value: "Rank Insignia", label: "Rank Insignia" },
        { value: "Team Number Decal", label: "Team Number Decal" }
    ],
    
    // Name components for generator
    nameComponents: [
        "Commander", "Captain", "Major", "Sergeant", "Ultra", "Mega", "Hyper", "Power",
        "Laser", "Turbo", "Cyber", "Force", "Storm", "Death", "Battle", "Strike",
        "Slash", "Crush", "Blast", "Smash", "Charge", "Thunder", "Lightning", "Venom",
        "Hawk", "Snake", "Tiger", "Wolf", "Dragon", "Scorpion", "Eagle", "Shark",
        "Blade", "Claw", "Fang", "Talon", "Fist", "Hammer", "Cannon", "Sword",
        "Alpha", "Prime", "Elite", "Omega", "X", "Z", "Max", "Supreme"
    ],
    
    // Archetypes - predefined combinations
    archetypes: {
        "Human/Humanoid": [
            { 
                value: "commandoElite", 
                label: "Elite Commando Warrior",
                components: {
                    characterOption: "Standard Male Warrior",
                    bodyBuild: "Heroic",
                    headType: "Combat Helmet",
                    accessories: ["Assault Blaster", "Tactical Thigh Straps", "Grappling Hook Gun"],
                    actionFeatures: ["Spring-launch Punch", "Waist-twist Chop"],
                    primaryColor: "electric-blue",
                    secondaryColor: "tactical-black",
                    accentColor: "neon-green",
                    specialAbilities: ["Stealth Abilities", "Specialty Combat"],
                    factionAlignment: "Special Forces/Elite",
                    costumeElements: ["Light Recon Armor", "Combat Infantry Boots", "Rank Insignia"]
                }
            },
            { 
                value: "cyborgWarrior", 
                label: "Cybernetic Warfare Unit",
                components: {
                    characterOption: "Cybernetically Enhanced Human",
                    bodyBuild: "Heroic",
                    headType: "Exposed Brain Skull",
                    accessories: ["Plasma Cannon", "Force Field Generator", "Jetpack"],
                    actionFeatures: ["Power Core Glow", "LED Eye Beams"],
                    primaryColor: "chrome-silver",
                    secondaryColor: "stealth-black",
                    accentColor: "laser-red-trim",
                    specialAbilities: ["Super Strength", "Flight Capabilities"],
                    factionAlignment: "Hero Team Colors",
                    costumeElements: ["Modular Tech Armor", "Rocket Thrust Boots", "Utility Belt System"]
                }
            },
            { 
                value: "ninjaAssassin", 
                label: "Shadow Ninja Assassin",
                components: {
                    characterOption: "Athletic Ninja",
                    bodyBuild: "Slim/Agile",
                    headType: "Ninja Mask",
                    accessories: ["Energy Sword", "Grappling Hook Gun", "Stealth Generator"],
                    actionFeatures: ["Quick-draw Weapon", "Spinning Backhand Punch"],
                    primaryColor: "stealth-black",
                    secondaryColor: "mirror-chrome",
                    accentColor: "energy-blue",
                    specialAbilities: ["Stealth Abilities", "Specialty Combat"],
                    factionAlignment: "Neutral/Mercenary",
                    costumeElements: ["Light Recon Armor", "Combat Infantry Boots", "Utility Belt System"]
                }
            }
        ],
        "Alien/Monster/Mutant": [
            { 
                value: "toxicMutant", 
                label: "Toxic Waste Mutant",
                components: {
                    characterOption: "Slime-based Creature",
                    bodyBuild: "Monster",
                    headType: "Multi-eyed Horror",
                    accessories: ["Bio Weapons", "Force Field Generator"],
                    actionFeatures: ["Water Gun Blast", "Slime Shot"],
                    primaryColor: "toxic-green",
                    secondaryColor: "void-dark",
                    accentColor: "toxic-glow",
                    specialAbilities: ["Elemental Powers", "Toxic Immunity"],
                    factionAlignment: "Monster Squad",
                    costumeElements: ["Battle Damage Armor", "Team Number Decal"]
                }
            },
            { 
                value: "alienCommander", 
                label: "Alien Fleet Commander",
                components: {
                    characterOption: "Reptilian Humanoid",
                    bodyBuild: "Heroic",
                    headType: "Reptilian Snake Head",
                    accessories: ["Plasma Cannon", "Force Field Generator"],
                    actionFeatures: ["LED Eye Beams", "Glowing Chest Symbol"],
                    primaryColor: "alien-teal",
                    secondaryColor: "royal-gold",
                    accentColor: "plasma-pink",
                    specialAbilities: ["Space/Zero-G", "Mind Control"],
                    factionAlignment: "Alien Race",
                    costumeElements: ["Full Body Plate", "Rank Insignia", "Rocket Thrust Boots"]
                }
            }
        ],
        "Robot/Cyborg": [
            { 
                value: "battleDroid", 
                label: "Heavy Combat Battle Droid",
                components: {
                    characterOption: "Boxy Military Robot",
                    bodyBuild: "Bulky",
                    headType: "Boxy Computer Head",
                    accessories: ["Missile Launcher", "Force Field Generator"],
                    actionFeatures: ["Missile-firing Chest", "Power Core Glow"],
                    primaryColor: "battle-gold",
                    secondaryColor: "tactical-black",
                    accentColor: "laser-red-trim",
                    specialAbilities: ["Super Strength", "Energy Absorption"],
                    factionAlignment: "Special Forces/Elite",
                    costumeElements: ["Heavy Assault Plate", "Tactical Thigh Straps", "Rank Insignia"]
                }
            },
            { 
                value: "stealthBot", 
                label: "Stealth Infiltration Unit",
                components: {
                    characterOption: "Sleek Android",
                    bodyBuild: "Slim/Agile",
                    headType: "Robot Dome",
                    accessories: ["Laser Rifle", "Stealth Generator"],
                    actionFeatures: ["LED Eye Beams", "Quick-draw Weapon"],
                    primaryColor: "cyber-purple",
                    secondaryColor: "void-dark",
                    accentColor: "energy-blue",
                    specialAbilities: ["Stealth Abilities", "Laser Vision"],
                    factionAlignment: "Covert Ops Division",
                    costumeElements: ["Light Recon Armor", "Combat Infantry Boots", "Utility Belt System"]
                }
            }
        ],
        "Animal/Mutant Animal": [
            { 
                value: "turtleNinja", 
                label: "Radical Shell Kicker",
                components: {
                    characterOption: "Ninja Turtle",
                    bodyBuild: "Heroic",
                    headType: "Reptilian Snake Head",
                    accessories: ["Energy Sword", "Grappling Hook Gun"],
                    actionFeatures: ["Spinning Backhand Punch", "Waist-twist Chop"],
                    primaryColor: "toxic-green",
                    secondaryColor: "brushed-steel",
                    accentColor: "plasma-pink",
                    specialAbilities: ["Specialty Combat", "Underwater Specialist"],
                    factionAlignment: "Hero Team Colors",
                    costumeElements: ["Shoulder Pauldrons Only", "Combat Infantry Boots", "Team Number Decal"]
                }
            },
            { 
                value: "wolfCommando", 
                label: "Howling Commando Canine",
                components: {
                    characterOption: "Cyber-Wolf",
                    bodyBuild: "Heroic",
                    headType: "Wolf Snout",
                    accessories: ["Assault Blaster", "Jetpack"],
                    actionFeatures: ["Spring-launch Punch", "LED Eye Beams"],
                    primaryColor: "battle-gold",
                    secondaryColor: "tactical-black",
                    accentColor: "laser-red-trim",
                    specialAbilities: ["Super Strength", "Specialty Combat"],
                    factionAlignment: "Special Forces/Elite",
                    costumeElements: ["Tactical Thigh Straps", "Combat Infantry Boots", "Rank Insignia"]
                }
            }
        ],
        "Hybrid": [
            { 
                value: "cyberDragon", 
                label: "Cyber-Dragon Hybrid",
                components: {
                    characterOption: "Dragon/Human",
                    bodyBuild: "Bulky",
                    headType: "Reptilian Snake Head",
                    accessories: ["Flame Thrower", "Missile Launcher"],
                    actionFeatures: ["LED Eye Beams", "Water Gun Blast"],
                    primaryColor: "laser-red",
                    secondaryColor: "mirror-chrome",
                    accentColor: "battle-scarred",
                    specialAbilities: ["Flight Capabilities", "Elemental Powers"],
                    factionAlignment: "Monster Squad",
                    costumeElements: ["Modular Tech Armor", "Rocket Thrust Boots", "Tactical Thigh Straps"]
                }
            },
            { 
                value: "plantMonster", 
                label: "Bio-Organic Plant Mutant",
                components: {
                    characterOption: "Plant/Human",
                    bodyBuild: "Monster",
                    headType: "Tentacle Face",
                    accessories: ["Bio Weapons", "Force Field Generator"],
                    actionFeatures: ["Water Gun Blast", "Slime Shot"],
                    primaryColor: "toxic-green",
                    secondaryColor: "stealth-black",
                    accentColor: "toxic-glow",
                    specialAbilities: ["Elemental Powers", "Toxic Immunity"],
                    factionAlignment: "Monster Squad",
                    costumeElements: ["Battle Damage Armor", "Team Number Decal"]
                }
            }
        ]
    }
};