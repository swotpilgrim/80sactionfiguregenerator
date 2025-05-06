// Configuration - Define all sections, categories and options
const sectionConfig = [
    {
        id: 1,
        title: "CHARACTER TYPE/BASE BODY",
        categories: [
            { id: "Human/Humanoid", label: "Human/Humanoid" },
            { id: "Alien/Monster/Mutant", label: "Alien/Monster/Mutant" },
            { id: "Robot/Cyborg", label: "Robot/Cyborg" },
            { id: "Animal/Mutant Animal", label: "Animal/Mutant Animal" },
            { id: "Hybrid", label: "Hybrid" }
        ],
        options: {
            "Human/Humanoid": [
                { id: "Standard Male Warrior", label: "Standard Male Warrior" },
                { id: "Standard Female Warrior", label: "Standard Female Warrior" },
                { id: "Muscular Barbarian", label: "Muscular Barbarian" },
                { id: "Athletic Ninja", label: "Athletic Ninja" },
                { id: "Stocky Wrestler Build", label: "Stocky Wrestler Build" },
                { id: "Tall Lanky Spy", label: "Tall Lanky Spy" },
                { id: "Cybernetically Enhanced Human", label: "Cybernetically Enhanced Human" },
                { id: "Mutated Human", label: "Mutated Human" },
                { id: "Battle-Scarred Veteran", label: "Battle-Scarred Veteran" },
                { id: "Clone Trooper Variant", label: "Clone Trooper Variant" }
            ],
            "Alien/Monster/Mutant": [
                { id: "Insectoid", label: "Insectoid (4-6 arms option)" },
                { id: "Reptilian Humanoid", label: "Reptilian Humanoid" },
                { id: "Amphibious Fish-man", label: "Amphibious Fish-man" },
                { id: "Crystalline Being", label: "Crystalline Being" },
                { id: "Slime-based Creature", label: "Slime-based Creature" },
                { id: "Skeletal Undead", label: "Skeletal Undead" },
                { id: "Energy Elemental", label: "Energy Elemental" },
                { id: "Tentacled Aberration", label: "Tentacled Aberration" },
                { id: "Lava Rock Monster", label: "Lava Rock Monster" },
                { id: "Ice Creature", label: "Ice Creature" }
            ],
            "Robot/Cyborg": [
                { id: "Sleek Android", label: "Sleek Android" },
                { id: "Boxy Military Robot", label: "Boxy Military Robot" },
                { id: "Transformable Mech Body", label: "Transformable Mech Body" },
                { id: "Cyborg", label: "Cyborg (half human/half machine)" },
                { id: "Tank-based Robot", label: "Tank-based Robot" },
                { id: "Spider/Multi-leg Robot", label: "Spider/Multi-leg Robot" },
                { id: "Combat Droid", label: "Combat Droid" },
                { id: "Stealth Infiltrator Unit", label: "Stealth Infiltrator Unit" },
                { id: "Power-armored Soldier", label: "Power-armored Soldier" },
                { id: "Bio-mechanical Hybrid", label: "Bio-mechanical Hybrid" }
            ],
            "Animal/Mutant Animal": [
                { id: "Ninja Turtle", label: "Ninja Turtle (anthropomorphic reptile)" },
                { id: "Mutant Monkey/Ape", label: "Mutant Monkey/Ape" },
                { id: "Armored Bear", label: "Armored Bear" },
                { id: "Cyber-Wolf", label: "Cyber-Wolf" },
                { id: "Battle Cat", label: "Battle Cat (big cat variant)" },
                { id: "Martial Arts Duck", label: "Martial Arts Duck" },
                { id: "Rhino Warrior", label: "Rhino Warrior" },
                { id: "Shark Soldier", label: "Shark Soldier" },
                { id: "Hawk Person", label: "Hawk Person" },
                { id: "Martial Arts Rabbit", label: "Martial Arts Rabbit" }
            ],
            "Hybrid": [
                { id: "Robot/Animal", label: "Robot/Animal (like a robo-shark)" },
                { id: "Human/Alien", label: "Human/Alien (partial features)" },
                { id: "Human/Robot", label: "Human/Robot (more cyborg than full robot)" },
                { id: "Alien/Animal", label: "Alien/Animal (extra-terrestrial beast)" },
                { id: "Monster/Machine", label: "Monster/Machine (bio-mechanical horror)" },
                { id: "Spirit/Human", label: "Spirit/Human (ghostly warrior)" },
                { id: "Plant/Human", label: "Plant/Human (vine powers)" },
                { id: "Insect/Robot", label: "Insect/Robot (mechanical bug soldier)" },
                { id: "Fish/Space Alien", label: "Fish/Space Alien (cosmic sea creature)" },
                { id: "Dragon/Human", label: "Dragon/Human (draconic warrior)" }
            ]
        }
    },
    {
        id: 2,
        title: "BODY BUILD/SCALE",
        categories: [
            { id: "Standard", label: "Standard (Normal proportions)" },
            { id: "Heroic", label: "Heroic (Muscular, G.I. Joe style)" },
            { id: "Bulky", label: "Bulky (He-Man style)" },
            { id: "Slim/Agile", label: "Slim/Agile (Ninja or sneak-attack specialist)" },
            { id: "Monster", label: "Monster (Bulbous, asymmetric)" }
        ],
        options: {
            "Standard": [
                { id: "Regular Joe", label: "Regular Joe (everyday hero build)" },
                { id: "Sleek Assassin", label: "Sleek Assassin (trim and agile)" },
                { id: "Field Scout", label: "Field Scout (lean and practical)" },
                { id: "Tech Support", label: "Tech Support (average build)" },
                { id: "Medical Officer", label: "Medical Officer (everyday physique)" },
                { id: "Communications Operator", label: "Communications Operator (standard frame)" },
                { id: "Standard Android", label: "Standard Android (balanced proportions)" },
                { id: "Regular Mutant", label: "Regular Mutant (baseline humanoid)" },
                { id: "Average Alien Warrior", label: "Average Alien Warrior (proportional to species)" },
                { id: "Common Grunt", label: "Common Grunt (regular soldier build)" }
            ],
            "Heroic": [
                { id: "Elite Commando", label: "Elite Commando (athletic muscle)" },
                { id: "Special Forces Warrior", label: "Special Forces Warrior (combat-ready physique)" },
                { id: "Navy SEAL Build", label: "Navy SEAL Build (practical strength)" },
                { id: "Ranger", label: "Ranger (agile but strong)" },
                { id: "Team Leader Physique", label: "Team Leader Physique (commanding presence)" },
                { id: "Sniper Build", label: "Sniper Build (controlled muscle)" },
                { id: "Paratrooper Body", label: "Paratrooper Body (lean power)" },
                { id: "Martial Artist", label: "Martial Artist (flexible strength)" },
                { id: "Precision Operative", label: "Precision Operative (tactical muscle)" },
                { id: "Espionage Agent", label: "Espionage Agent (athletic build)" }
            ],
            "Bulky": [
                { id: "Bodybuilder Behemoth", label: "Bodybuilder Behemoth (massive power)" },
                { id: "Barbarian Warrior", label: "Barbarian Warrior (thick muscle)" },
                { id: "Power Lifter", label: "Power Lifter (pure strength)" },
                { id: "Viking Berserker", label: "Viking Berserker (burly frame)" },
                { id: "Strong Man Champion", label: "Strong Man Champion (circus strong)" },
                { id: "Tank Commander", label: "Tank Commander (heavy-set power)" },
                { id: "Mountain Man", label: "Mountain Man (rugged bulk)" },
                { id: "Wrestling Champion", label: "Wrestling Champion (stocky power)" },
                { id: "Heavy Artillery", label: "Heavy Artillery (solid build)" },
                { id: "Combat Monster", label: "Combat Monster (thick and imposing)" }
            ],
            "Slim/Agile": [
                { id: "Shadow Ninja", label: "Shadow Ninja (ultra-thin)" },
                { id: "Stealth Operative", label: "Stealth Operative (minimal profile)" },
                { id: "Acrobat", label: "Acrobat (circus performer lean)" },
                { id: "Spider Build", label: "Spider Build (extremely agile)" },
                { id: "Thief", label: "Thief (lithe and quick)" },
                { id: "Jungle Scout", label: "Jungle Scout (camouflage slim)" },
                { id: "Urban Runner", label: "Urban Runner (parkour build)" },
                { id: "Underground Explorer", label: "Underground Explorer (tight spaces)" },
                { id: "Quick Strike Assassin", label: "Quick Strike Assassin (lightning-fast frame)" },
                { id: "Infiltrator", label: "Infiltrator (paper-thin silhouette)" }
            ],
            "Monster": [
                { id: "Blob Monster", label: "Blob Monster (amorphous mass)" },
                { id: "Hunchback Mutant", label: "Hunchback Mutant (uneven shoulders)" },
                { id: "Tumor-ridden Beast", label: "Tumor-ridden Beast (multiple growths)" },
                { id: "Swollen Experiment", label: "Swollen Experiment (distorted proportions)" },
                { id: "Asymmetric Brute", label: "Asymmetric Brute (one side larger)" },
                { id: "Mutated Powerhouse", label: "Mutated Powerhouse (random muscle growth)" },
                { id: "Toxic Waste Victim", label: "Toxic Waste Victim (bloated features)" },
                { id: "Failed Experiment", label: "Failed Experiment (malformed body)" },
                { id: "Radiation Mutant", label: "Radiation Mutant (unnatural bulk)" },
                { id: "Living Nightmare", label: "Living Nightmare (disturbing proportions)" }
            ]
        }
    },
                    {
    id: 3,
    title: "HEAD/FACE TYPE",
    categories: [
        { id: "Standard Human", label: "Standard Human" },
        { id: "Skull/Skeletal", label: "Skull/Skeletal" },
        { id: "Alien", label: "Alien" },
        { id: "Robot/Mechanical", label: "Robot/Mechanical" },
        { id: "Animal", label: "Animal" },
        { id: "Masked", label: "Masked" },
        { id: "Helmet", label: "Helmet" }
    ],
    options: {
        "Standard Human": [
            { id: "Square-jawed Hero", label: "Square-jawed Hero" },
            { id: "Chiseled Commando", label: "Chiseled Commando" },
            { id: "Battle-Scarred Face", label: "Battle-Scarred Face" },
            { id: "Youthful Rookie", label: "Youthful Rookie" },
            { id: "Grizzled Veteran", label: "Grizzled Veteran" },
            { id: "Pretty Boy Operative", label: "Pretty Boy Operative" },
            { id: "Tough-guy Mercenary", label: "Tough-guy Mercenary" },
            { id: "Distinguished Commander", label: "Distinguished Commander" },
            { id: "Rugged Explorer", label: "Rugged Explorer" },
            { id: "Clean-cut Soldier", label: "Clean-cut Soldier" }
        ],
        "Skull/Skeletal": [
            { id: "Classic Skull Face", label: "Classic Skull Face" },
            { id: "Burning Skull", label: "Burning Skull" },
            { id: "Cybernetic Skull", label: "Cybernetic Skull" },
            { id: "Exposed Brain Skull", label: "Exposed Brain Skull" },
            { id: "Alien Skull Variant", label: "Alien Skull Variant" },
            { id: "Armored Skull", label: "Armored Skull" },
            { id: "Crystalline Skull", label: "Crystalline Skull" },
            { id: "Robot Skull Head", label: "Robot Skull Head" },
            { id: "Demonic Skull", label: "Demonic Skull" },
            { id: "Space Pirate Skull", label: "Space Pirate Skull" }
        ],
        "Alien": [
            { id: "Insect Compound Eyes", label: "Insect Compound Eyes" },
            { id: "Reptilian Snake Head", label: "Reptilian Snake Head" },
            { id: "Tentacle Face", label: "Tentacle Face" },
            { id: "Multi-eyed Horror", label: "Multi-eyed Horror" },
            { id: "Crystal Shard Face", label: "Crystal Shard Face" },
            { id: "Energy Being Head", label: "Energy Being Head" },
            { id: "Aquatic Gill Face", label: "Aquatic Gill Face" },
            { id: "Beak-headed Warrior", label: "Beak-headed Warrior" },
            { id: "Mollusk Head", label: "Mollusk Head" },
            { id: "Elephant-like Alien", label: "Elephant-like Alien" }
        ],
        "Robot/Mechanical": [
            { id: "Classic R2-D2 Dome", label: "Classic R2-D2 Dome" },
            { id: "Boxy Computer Head", label: "Boxy Computer Head" },
            { id: "Sleek Android Face", label: "Sleek Android Face" },
            { id: "Multi-sensor Head", label: "Multi-sensor Head" },
            { id: "Battle Damage Robot", label: "Battle Damage Robot" },
            { id: "Scanner Eye Unit", label: "Scanner Eye Unit" },
            { id: "Communication Array Head", label: "Communication Array Head" },
            { id: "Weapon Platform Head", label: "Weapon Platform Head" },
            { id: "Radar Dish Head", label: "Radar Dish Head" },
            { id: "Modular CPU Unit", label: "Modular CPU Unit" }
        ],
        "Animal": [
            { id: "Wolf Snout", label: "Wolf Snout" },
            { id: "Bear Face", label: "Bear Face" },
            { id: "Cat Warrior", label: "Cat Warrior" },
            { id: "Crocodile Jaws", label: "Crocodile Jaws" },
            { id: "Shark Mouth", label: "Shark Mouth" },
            { id: "Raptor Beak", label: "Raptor Beak" },
            { id: "Gorilla Face", label: "Gorilla Face" },
            { id: "Serpent Head", label: "Serpent Head" },
            { id: "Bulldog Muzzle", label: "Bulldog Muzzle" },
            { id: "Tiger Striped", label: "Tiger Striped" }
        ],
        "Masked": [
            { id: "Ninja Face Wrap", label: "Ninja Face Wrap" },
            { id: "Combat Goggles Mask", label: "Combat Goggles Mask" },
            { id: "Wrestling Style Mask", label: "Wrestling Style Mask" },
            { id: "Plague Doctor Mask", label: "Plague Doctor Mask" },
            { id: "Samurai Face Guard", label: "Samurai Face Guard" },
            { id: "Hockey-style Mask", label: "Hockey-style Mask" },
            { id: "Biker Full Face", label: "Biker Full Face" },
            { id: "Commando Balaclava", label: "Commando Balaclava" },
            { id: "Arabian Face Veil", label: "Arabian Face Veil" },
            { id: "Tribal War Mask", label: "Tribal War Mask" }
        ],
        "Helmet": [
            { id: "Space Helmet", label: "Space Helmet (clear dome)" },
            { id: "Combat Infantry Helmet", label: "Combat Infantry Helmet" },
            { id: "Pilot's Flight Helmet", label: "Pilot's Flight Helmet" },
            { id: "Deep Sea Diving Bell", label: "Deep Sea Diving Bell" },
            { id: "Radiation Suit Helmet", label: "Radiation Suit Helmet" },
            { id: "Motorcycle Racing Helm", label: "Motorcycle Racing Helm" },
            { id: "Alien Containment Hood", label: "Alien Containment Hood" },
            { id: "Tactical Assault Helmet", label: "Tactical Assault Helmet" },
            { id: "Astronaut EVA Suit", label: "Astronaut EVA Suit" },
            { id: "Tank Commander Helm", label: "Tank Commander Helm" }
        ]
    }
},
{
    id: 4,
    title: "ACCESSORIES/GEAR",
    categories: [
        { id: "Weapons", label: "Weapons" },
        { id: "Shields/Defense", label: "Shields/Defense" },
        { id: "Backpack/Gear", label: "Backpack/Gear" },
        { id: "Tools", label: "Tools" },
        { id: "Vehicle Pieces", label: "Vehicle Pieces" }
    ],
    options: {
        "Weapons": [
            { id: "Laser Rifle", label: "Laser Rifle (multiple colors)" },
            { id: "Energy Sword", label: "Energy Sword" },
            { id: "Plasma Cannon", label: "Plasma Cannon" },
            { id: "Missile Launcher", label: "Missile Launcher" },
            { id: "Assault Blaster", label: "Assault Blaster" },
            { id: "Flame Thrower", label: "Flame Thrower" },
            { id: "Ice Ray Gun", label: "Ice Ray Gun" },
            { id: "Electric Staff", label: "Electric Staff" },
            { id: "Sci-fi Battle Axe", label: "Sci-fi Battle Axe" },
            { id: "Bio Weapons", label: "Bio Weapons" }
        ],
        "Shields/Defense": [
            { id: "Force Field Generator", label: "Force Field Generator" },
            { id: "Riot Shield", label: "Riot Shield" },
            { id: "Energy Barrier Disk", label: "Energy Barrier Disk" },
            { id: "Roman-style Shield", label: "Roman-style Shield" },
            { id: "Turtle Shell Defense", label: "Turtle Shell Defense" },
            { id: "Magnetic Deflector", label: "Magnetic Deflector" },
            { id: "Laser Blocking Shield", label: "Laser Blocking Shield" },
            { id: "Retractable Arm Guard", label: "Retractable Arm Guard" },
            { id: "Rotating Defense System", label: "Rotating Defense System" },
            { id: "Bubble Shield", label: "Bubble Shield" }
        ],
        "Backpack/Gear": [
            { id: "Jetpack", label: "Jetpack (classic rocket)" },
            { id: "Oxygen Tank System", label: "Oxygen Tank System" },
            { id: "Weapon Storage Pack", label: "Weapon Storage Pack" },
            { id: "Communications Array", label: "Communications Array" },
            { id: "Power Core Backpack", label: "Power Core Backpack" },
            { id: "Spy Gadget Pack", label: "Spy Gadget Pack" },
            { id: "Medical Supply Unit", label: "Medical Supply Unit" },
            { id: "Energy Battery Pack", label: "Energy Battery Pack" },
            { id: "Stealth Generator", label: "Stealth Generator" },
            { id: "Portable Computer", label: "Portable Computer" }
        ],
        "Tools": [
            { id: "Grappling Hook Gun", label: "Grappling Hook Gun" },
            { id: "Multi-function Scanner", label: "Multi-function Scanner" },
            { id: "Repair Kit Module", label: "Repair Kit Module" },
            { id: "Hacking Device", label: "Hacking Device" },
            { id: "Cutting Torch", label: "Cutting Torch" },
            { id: "Lock Pick Set", label: "Lock Pick Set" },
            { id: "Secret Camera", label: "Secret Camera" },
            { id: "Tracking Beacon", label: "Tracking Beacon" },
            { id: "Magnetic Boots", label: "Magnetic Boots" },
            { id: "Universal Translator", label: "Universal Translator" }
        ],
        "Vehicle Pieces": [
            { id: "Rocket Booster Attachment", label: "Rocket Booster Attachment" },
            { id: "Tank Tread Add-on", label: "Tank Tread Add-on" },
            { id: "Helicopter Rotor Pack", label: "Helicopter Rotor Pack" },
            { id: "Submarine Propeller", label: "Submarine Propeller" },
            { id: "Hover Disc Platform", label: "Hover Disc Platform" },
            { id: "Rail Gun Module", label: "Rail Gun Module" },
            { id: "Energy Shield Pod", label: "Energy Shield Pod" },
            { id: "Armor Plating", label: "Armor Plating" },
            { id: "Vehicle Control Panel", label: "Vehicle Control Panel" },
            { id: "Detachable Wheels", label: "Detachable Wheels" }
        ]
    }
},
{
    id: 5,
    title: "ACTION FEATURES",
    categories: [
        { id: "Spring-loaded action", label: "Spring-loaded action" },
        { id: "Light-up parts", label: "Light-up parts" },
        { id: "Water squirting", label: "Water squirting" },
        { id: "Sticky/Suction elements", label: "Sticky/Suction elements" },
        { id: "Transforming parts", label: "Transforming parts" },
        { id: "Removable body parts", label: "Removable body parts" }
    ],
    options: {
        "Spring-loaded action": [
            { id: "Spinning Backhand Punch", label: "Spinning Backhand Punch" },
            { id: "Power Kick Action", label: "Power Kick Action" },
            { id: "Missile-firing Chest", label: "Missile-firing Chest" },
            { id: "Spring-launch Punch", label: "Spring-launch Punch" },
            { id: "Head-butt Attack", label: "Head-butt Attack" },
            { id: "Waist-twist Chop", label: "Waist-twist Chop" },
            { id: "Knee-strike Action", label: "Knee-strike Action" },
            { id: "Quick-draw Weapon", label: "Quick-draw Weapon" },
            { id: "Grab & Slam Motion", label: "Grab & Slam Motion" },
            { id: "Tail Whip Action", label: "Tail Whip Action" }
        ],
        "Light-up parts": [
            { id: "Glowing Chest Symbol", label: "Glowing Chest Symbol" },
            { id: "LED Eye Beams", label: "LED Eye Beams" },
            { id: "Illuminated Weapon", label: "Illuminated Weapon" },
            { id: "Power Core Glow", label: "Power Core Glow" },
            { id: "Laser Sights", label: "Laser Sights" },
            { id: "Warning Lights", label: "Warning Lights" },
            { id: "Hologram Projector", label: "Hologram Projector" },
            { id: "Jetpack Thrusters", label: "Jetpack Thrusters" },
            { id: "Energy Field Pulse", label: "Energy Field Pulse" },
            { id: "Tracking Beacon", label: "Tracking Beacon" }
        ],
        "Water squirting": [
            { id: "Acid Spit Attack", label: "Acid Spit Attack" },
            { id: "Water Gun Blast", label: "Water Gun Blast" },
            { id: "Poison Spray", label: "Poison Spray" },
            { id: "Flame Liquid Stream", label: "Flame Liquid Stream" },
            { id: "Slime Shot", label: "Slime Shot" },
            { id: "Oil Slick Spray", label: "Oil Slick Spray" },
            { id: "Mist Cloud Release", label: "Mist Cloud Release" },
            { id: "Ink Squirt Defense", label: "Ink Squirt Defense" },
            { id: "Foam Blaster", label: "Foam Blaster" },
            { id: "Chemical Spray", label: "Chemical Spray" }
        ],
        "Sticky/Suction elements": [
            { id: "Wall-climbing Hands", label: "Wall-climbing Hands" },
            { id: "Gecko Grip Feet", label: "Gecko Grip Feet" },
            { id: "Suction Cup Pads", label: "Suction Cup Pads" },
            { id: "Spider Web Shooter", label: "Spider Web Shooter" },
            { id: "Magnetic Attachment", label: "Magnetic Attachment" },
            { id: "Sticky Goo Gun", label: "Sticky Goo Gun" },
            { id: "Vacuum Grip", label: "Vacuum Grip" },
            { id: "Velcro Tactical Strips", label: "Velcro Tactical Strips" },
            { id: "Adhesive Bomb", label: "Adhesive Bomb" },
            { id: "Gripping Tentacles", label: "Gripping Tentacles" }
        ],
        "Transforming parts": [
            { id: "Flip-change Head", label: "Flip-change Head" },
            { id: "Weapon Convert Arms", label: "Weapon Convert Arms" },
            { id: "Vehicle Mode Chest", label: "Vehicle Mode Chest" },
            { id: "Battle Damage Reveal", label: "Battle Damage Reveal" },
            { id: "Hidden Blade Pop-out", label: "Hidden Blade Pop-out" },
            { id: "Armor Flip Feature", label: "Armor Flip Feature" },
            { id: "Face-change Helmet", label: "Face-change Helmet" },
            { id: "Stealth Mode Shift", label: "Stealth Mode Shift" },
            { id: "Power-up Transform", label: "Power-up Transform" },
            { id: "Emergency Mode", label: "Emergency Mode" }
        ],
        "Removable body parts": [
            { id: "Pop-off Arm Cannon", label: "Pop-off Arm Cannon" },
            { id: "Detach Chest Plate", label: "Detach Chest Plate" },
            { id: "Remove Helmet Action", label: "Remove Helmet Action" },
            { id: "Swap Hands/Weapons", label: "Swap Hands/Weapons" },
            { id: "Change-out Legs", label: "Change-out Legs" },
            { id: "Modular Body Parts", label: "Modular Body Parts" },
            { id: "Battle Damage Pieces", label: "Battle Damage Pieces" },
            { id: "Weapon Storage Limbs", label: "Weapon Storage Limbs" },
            { id: "Costume Quick Change", label: "Costume Quick Change" },
            { id: "Accessory Mounts", label: "Accessory Mounts" }
        ]
    }
},
{
    id: 6,
    title: "COLOR SCHEMES",
    categories: [
        { id: "Primary-Bright Neon", label: "Primary Palette - Bright Neon" },
        { id: "Primary-Day-Glo", label: "Primary Palette - Day-Glo" },
        { id: "Primary-Metallic", label: "Primary Palette - Metallic" },
        { id: "Primary-Color-changing", label: "Primary Palette - Color-changing" },
        { id: "Primary-Glow-in-the-dark", label: "Primary Palette - Glow-in-the-dark" },
        { id: "Secondary-Chrome", label: "Secondary Accents - Chrome/Silver" },
        { id: "Secondary-Black", label: "Secondary Accents - Black/Dark" },
        { id: "Secondary-Gold", label: "Secondary Accents - Gold" },
        { id: "Secondary-Bright", label: "Secondary Accents - Bright contrast" }
    ],
    options: {
        "Primary-Bright Neon": [
            { id: "Electric Blue", label: "Electric Blue" },
            { id: "Hot Pink Plasma", label: "Hot Pink Plasma" },
            { id: "Laser Red", label: "Laser Red" },
            { id: "Toxic Green", label: "Toxic Green" },
            { id: "Nuclear Yellow", label: "Nuclear Yellow" },
            { id: "Cyber Purple", label: "Cyber Purple" },
            { id: "Radiation Orange", label: "Radiation Orange" },
            { id: "Alien Teal", label: "Alien Teal" },
            { id: "Mutant Magenta", label: "Mutant Magenta" },
            { id: "Plasma White", label: "Plasma White" }
        ],
        "Primary-Day-Glo": [
            { id: "Highlighter Yellow", label: "Highlighter Yellow" },
            { id: "Safety Orange", label: "Safety Orange" },
            { id: "Shocking Pink", label: "Shocking Pink" },
            { id: "Visibility Green", label: "Visibility Green" },
            { id: "Neon Lime", label: "Neon Lime" },
            { id: "UV Reactive Blue", label: "UV Reactive Blue" },
            { id: "Emergency Red", label: "Emergency Red" },
            { id: "Fluorescent Purple", label: "Fluorescent Purple" },
            { id: "Warning Yellow", label: "Warning Yellow" },
            { id: "Blacklight Green", label: "Blacklight Green" }
        ],
        "Primary-Metallic": [
            { id: "Chrome Silver", label: "Chrome Silver" },
            { id: "Battle Gold", label: "Battle Gold" },
            { id: "Gunmetal Blue", label: "Gunmetal Blue" },
            { id: "Bronze Warrior", label: "Bronze Warrior" },
            { id: "Copper Combat", label: "Copper Combat" },
            { id: "Steel Gray", label: "Steel Gray" },
            { id: "Iron Red", label: "Iron Red" },
            { id: "Titanium White", label: "Titanium White" },
            { id: "Platinum Blonde", label: "Platinum Blonde" },
            { id: "Mercury Liquid", label: "Mercury Liquid" }
        ],
        "Primary-Color-changing": [
            { id: "Cool to Warm Red", label: "Cool to Warm Red" },
            { id: "Ice to Fire Blue", label: "Ice to Fire Blue" },
            { id: "Shadow to Light Purple", label: "Shadow to Light Purple" },
            { id: "Camo to Warning Orange", label: "Camo to Warning Orange" },
            { id: "Stealth Black to Bright Yellow", label: "Stealth Black to Bright Yellow" },
            { id: "Ocean Blue to Blood Red", label: "Ocean Blue to Blood Red" },
            { id: "Forest Green to Toxic Yellow", label: "Forest Green to Toxic Yellow" },
            { id: "Space Black to Nebula Purple", label: "Space Black to Nebula Purple" },
            { id: "Desert Tan to Alert Red", label: "Desert Tan to Alert Red" },
            { id: "Arctic White to Danger Orange", label: "Arctic White to Danger Orange" }
        ],
        "Primary-Glow-in-the-dark": [
            { id: "Phantom Green", label: "Phantom Green" },
            { id: "Ghostly White", label: "Ghostly White" },
            { id: "Spectral Blue", label: "Spectral Blue" },
            { id: "Radioactive Yellow", label: "Radioactive Yellow" },
            { id: "Undead Purple", label: "Undead Purple" },
            { id: "Spirit Green", label: "Spirit Green" },
            { id: "Lunar Silver", label: "Lunar Silver" },
            { id: "Eclipse Black", label: "Eclipse Black" },
            { id: "Cosmic Blue", label: "Cosmic Blue" },
            { id: "Supernatural Orange", label: "Supernatural Orange" }
        ],
        "Secondary-Chrome": [
            { id: "Mirror Chrome", label: "Mirror Chrome" },
            { id: "Brushed Steel", label: "Brushed Steel" },
            { id: "Liquid Silver", label: "Liquid Silver" },
            { id: "Reflective Platinum", label: "Reflective Platinum" },
            { id: "Tactical Gray", label: "Tactical Gray" },
            { id: "Space Silver", label: "Space Silver" },
            { id: "Battle Chrome", label: "Battle Chrome" },
            { id: "Tech Steel", label: "Tech Steel" },
            { id: "Cyber Silver", label: "Cyber Silver" }
        ],
        "Secondary-Black": [
            { id: "Stealth Black", label: "Stealth Black" },
            { id: "Shadow Gray", label: "Shadow Gray" },
            { id: "Tactical Black", label: "Tactical Black" },
            { id: "Void Dark", label: "Void Dark" },
            { id: "Urban Gray", label: "Urban Gray" },
            { id: "Night Operation", label: "Night Operation" },
            { id: "Obsidian Black", label: "Obsidian Black" },
            { id: "Charcoal Gray", label: "Charcoal Gray" },
            { id: "Midnight Blue-Black", label: "Midnight Blue-Black" },
            { id: "Carbon Fiber", label: "Carbon Fiber" }
        ],
        "Secondary-Gold": [
            { id: "Royal Gold", label: "Royal Gold" },
            { id: "Battle Bronze", label: "Battle Bronze" },
            { id: "Champion Yellow", label: "Champion Yellow" },
            { id: "Commander Brass", label: "Commander Brass" },
            { id: "Elite Gold", label: "Elite Gold" },
            { id: "Victory Yellow", label: "Victory Yellow" },
            { id: "Trophy Gold", label: "Trophy Gold" },
            { id: "Leader Bronze", label: "Leader Bronze" },
            { id: "Hero Gold", label: "Hero Gold" },
            { id: "Glory Yellow", label: "Glory Yellow" }
        ],
        "Secondary-Bright": [
            { id: "Danger Red Stripe", label: "Danger Red Stripe" },
            { id: "Warning Yellow Band", label: "Warning Yellow Band" },
            { id: "Rank Blue Mark", label: "Rank Blue Mark" },
            { id: "Team Green Badge", label: "Team Green Badge" },
            { id: "Squad Purple ID", label: "Squad Purple ID" },
            { id: "Unit Orange Flash", label: "Unit Orange Flash" },
            { id: "Mission Red Patch", label: "Mission Red Patch" },
            { id: "Faction Blue Symbol", label: "Faction Blue Symbol" },
            { id: "Special Force Mark", label: "Special Force Mark" },
            { id: "Combat Highlight", label: "Combat Highlight" }
        ]
    }
},
{
    id: 7,
    title: "SPECIAL FEATURES/ABILITIES",
    categories: [
        { id: "Elemental Powers", label: "Elemental Powers" },
        { id: "Stealth Abilities", label: "Stealth Abilities" },
        { id: "Super Strength", label: "Super Strength" },
        { id: "Flight Capabilities", label: "Flight Capabilities" },
        { id: "Underwater Specialist", label: "Underwater Specialist" },
        { id: "Space/Zero-G", label: "Space/Zero-G" },
        { id: "Specialty Combat", label: "Specialty Combat" }
    ],
    options: {
        "Elemental Powers": [
            { id: "Fire Blaster", label: "Fire Blaster (red energy)" },
            { id: "Ice Cannon", label: "Ice Cannon (blue freeze)" },
            { id: "Lightning Generator", label: "Lightning Generator (yellow electric)" },
            { id: "Wind Vortex", label: "Wind Vortex (clear swirl)" },
            { id: "Earth Shaker", label: "Earth Shaker (brown force)" },
            { id: "Water Control", label: "Water Control (aqua power)" },
            { id: "Plasma Energy", label: "Plasma Energy (pink glow)" },
            { id: "Laser Power", label: "Laser Power (green beam)" },
            { id: "Radiation Field", label: "Radiation Field (toxic green)" },
            { id: "Shadow Energy", label: "Shadow Energy (purple dark)" }
        ],
        "Stealth Abilities": [
            { id: "Active Camouflage", label: "Active Camouflage" },
            { id: "Sound Dampening", label: "Sound Dampening" },
            { id: "Heat Signature Block", label: "Heat Signature Block" },
            { id: "Motion Sensor Jamming", label: "Motion Sensor Jamming" },
            { id: "Optical Illusion", label: "Optical Illusion" },
            { id: "Smoke Screen Deploy", label: "Smoke Screen Deploy" },
            { id: "Holographic Decoy", label: "Holographic Decoy" },
            { id: "Scent Masking", label: "Scent Masking" },
            { id: "Electronic Jamming", label: "Electronic Jamming" },
            { id: "Light Bending", label: "Light Bending" }
        ],
        "Super Strength": [
            { id: "Power Lifting", label: "Power Lifting" },
            { id: "Wall Breaker", label: "Wall Breaker" },
            { id: "Tank Thrower", label: "Tank Thrower" },
            { id: "Building Mover", label: "Building Mover" },
            { id: "Ground Pound", label: "Ground Pound" },
            { id: "Seismic Punch", label: "Seismic Punch" },
            { id: "Rail Bending", label: "Rail Bending" },
            { id: "Vehicle Crusher", label: "Vehicle Crusher" },
            { id: "Boulder Toss", label: "Boulder Toss" },
            { id: "Metal Rending", label: "Metal Rending" }
        ],
        "Flight Capabilities": [
            { id: "Rocket Boots", label: "Rocket Boots" },
            { id: "Wing Systems", label: "Wing Systems" },
            { id: "Anti-gravity Pack", label: "Anti-gravity Pack" },
            { id: "Hover Platform", label: "Hover Platform" },
            { id: "Propulsion Jets", label: "Propulsion Jets" },
            { id: "Glide System", label: "Glide System" },
            { id: "Telekinetic Lift", label: "Telekinetic Lift" },
            { id: "Magnetic Levitation", label: "Magnetic Levitation" },
            { id: "Energy Wings", label: "Energy Wings" },
            { id: "Jet Propulsion", label: "Jet Propulsion" }
        ],
        "Underwater Specialist": [
            { id: "Deep Sea Pressure Suit", label: "Deep Sea Pressure Suit" },
            { id: "Oxygen Recycler", label: "Oxygen Recycler" },
            { id: "Sonar System", label: "Sonar System" },
            { id: "Torpedo Launcher", label: "Torpedo Launcher" },
            { id: "Sub Mode Transform", label: "Sub Mode Transform" },
            { id: "Aquatic Propulsion", label: "Aquatic Propulsion" },
            { id: "Harpoon System", label: "Harpoon System" },
            { id: "Underwater Vision", label: "Underwater Vision" },
            { id: "Diving Bell Mode", label: "Diving Bell Mode" },
            { id: "Pressure Cannon", label: "Pressure Cannon" }
        ],
        "Space/Zero-G": [
            { id: "Vacuum Suit", label: "Vacuum Suit" },
            { id: "Rocket Maneuvering", label: "Rocket Maneuvering" },
            { id: "Space Walk Pack", label: "Space Walk Pack" },
            { id: "Gravity Generator", label: "Gravity Generator" },
            { id: "Oxygen System", label: "Oxygen System" },
            { id: "Radiation Shield", label: "Radiation Shield" },
            { id: "Asteroid Belt Mode", label: "Asteroid Belt Mode" },
            { id: "Solar Powered", label: "Solar Powered" },
            { id: "Space Combat Pack", label: "Space Combat Pack" },
            { id: "Zero-G Navigation", label: "Zero-G Navigation" }
        ],
        "Specialty Combat": [
            { id: "Martial Arts Master", label: "Martial Arts Master" },
            { id: "Weapon Expert", label: "Weapon Expert" },
            { id: "Sharpshooting Precision", label: "Sharpshooting Precision" },
            { id: "Hand-to-Hand Champion", label: "Hand-to-Hand Champion" },
            { id: "Sword Master", label: "Sword Master" },
            { id: "Archery Specialist", label: "Archery Specialist" },
            { id: "Explosive Expert", label: "Explosive Expert" },
            { id: "Vehicle Commander", label: "Vehicle Commander" },
            { id: "Squad Tactics", label: "Squad Tactics" },
            { id: "Siege Breaker", label: "Siege Breaker" }
        ]
    }
},
{
    id: 8,
    title: "FACTION/TEAM ALIGNMENT",
    categories: [
        { id: "Hero Team Colors", label: "Hero Team Colors" },
        { id: "Villain Army Colors", label: "Villain Army Colors" },
        { id: "Neutral/Mercenary", label: "Neutral/Mercenary" },
        { id: "Special Forces/Elite", label: "Special Forces/Elite" },
        { id: "Alien Race", label: "Alien Race" },
        { id: "Monster Squad", label: "Monster Squad" }
    ],
    options: {
        "Hero Team Colors": [
            { id: "Patriot Blue Squadron", label: "Patriot Blue Squadron" },
            { id: "Freedom Red Force", label: "Freedom Red Force" },
            { id: "Liberty White Unit", label: "Liberty White Unit" },
            { id: "Justice Rangers", label: "Justice Rangers" },
            { id: "Allied Command", label: "Allied Command" },
            { id: "International Defense", label: "International Defense" },
            { id: "Global Security Task Force", label: "Global Security Task Force" },
            { id: "United Assault Team", label: "United Assault Team" },
            { id: "Peace Keeper Corps", label: "Peace Keeper Corps" },
            { id: "World Guardian Alliance", label: "World Guardian Alliance" }
        ],
        "Villain Army Colors": [
            { id: "Dark Legion Black", label: "Dark Legion Black" },
            { id: "Doom Brigade Red", label: "Doom Brigade Red" },
            { id: "Chaos Command Purple", label: "Chaos Command Purple" },
            { id: "Evil Empire Green", label: "Evil Empire Green" },
            { id: "Shadow Force Gray", label: "Shadow Force Gray" },
            { id: "Destruction Army Yellow", label: "Destruction Army Yellow" },
            { id: "Terror Battalion Orange", label: "Terror Battalion Orange" },
            { id: "Hate Squad Pink", label: "Hate Squad Pink" },
            { id: "Corrupt Regime Silver", label: "Corrupt Regime Silver" },
            { id: "Malice Division Gold", label: "Malice Division Gold" }
        ],
        "Neutral/Mercenary": [
            { id: "Freelance Force", label: "Freelance Force" },
            { id: "Contract Warriors", label: "Contract Warriors" },
            { id: "Independent Unit", label: "Independent Unit" },
            { id: "Bounty Hunter Guild", label: "Bounty Hunter Guild" },
            { id: "Mercenary Exchange", label: "Mercenary Exchange" },
            { id: "Professional Soldiers", label: "Professional Soldiers" },
            { id: "For-Hire Squad", label: "For-Hire Squad" },
            { id: "Private Defense Force", label: "Private Defense Force" },
            { id: "Neutral Zone Patrol", label: "Neutral Zone Patrol" },
            { id: "Rogue Operations", label: "Rogue Operations" }
        ],
        "Special Forces/Elite": [
            { id: "Delta Force Elite", label: "Delta Force Elite" },
            { id: "Special Operations Black", label: "Special Operations Black" },
            { id: "SEAL Team Advanced", label: "SEAL Team Advanced" },
            { id: "Royal Guard Unit", label: "Royal Guard Unit" },
            { id: "Presidential Guard", label: "Presidential Guard" },
            { id: "Top Secret Division", label: "Top Secret Division" },
            { id: "Classified Operations", label: "Classified Operations" },
            { id: "Strike Force One", label: "Strike Force One" },
            { id: "Ghost Patrol", label: "Ghost Patrol" },
            { id: "Covert Action Team", label: "Covert Action Team" }
        ],
        "Alien Race": [
            { id: "Galactic Empire", label: "Galactic Empire" },
            { id: "Star Federation", label: "Star Federation" },
            { id: "Cosmic Alliance", label: "Cosmic Alliance" },
            { id: "Interstellar Union", label: "Interstellar Union" },
            { id: "Planet Defense Council", label: "Planet Defense Council" },
            { id: "Space Colonist Force", label: "Space Colonist Force" },
            { id: "Alien Hunter Corps", label: "Alien Hunter Corps" },
            { id: "Celestial Warriors", label: "Celestial Warriors" },
            { id: "Universal Protectors", label: "Universal Protectors" },
            { id: "Orbital Command", label: "Orbital Command" }
        ],
        "Monster Squad": [
            { id: "Creature Patrol", label: "Creature Patrol" },
            { id: "Beast Legion", label: "Beast Legion" },
            { id: "Monster Menace", label: "Monster Menace" },
            { id: "Mutant Brigade", label: "Mutant Brigade" },
            { id: "Horror Squad", label: "Horror Squad" },
            { id: "Freak Force", label: "Freak Force" },
            { id: "Undead Army", label: "Undead Army" },
            { id: "Abomination Unit", label: "Abomination Unit" },
            { id: "Nightmare Division", label: "Nightmare Division" },
            { id: "Creature Commandos", label: "Creature Commandos" }
        ]
    }
},
{
    id: 9,
    title: "COSTUME ELEMENTS",
    categories: [
        { id: "Armor Style", label: "Armor Style" },
        { id: "Jumpsuit Type", label: "Jumpsuit Type" },
        { id: "Emblems/Logos", label: "Emblems/Logos" },
        { id: "Straps/Belts", label: "Straps/Belts" },
        { id: "Boots", label: "Boots" }
    ],
    options: {
        "Armor Style": [
            { id: "Shoulder Pauldrons Only", label: "Shoulder Pauldrons Only" },
            { id: "Chest Plate & Gauntlets", label: "Chest Plate & Gauntlets" },
            { id: "Full Body Plate", label: "Full Body Plate" },
            { id: "Half Armor Left Side", label: "Half Armor Left Side" },
            { id: "Modular Tech Armor", label: "Modular Tech Armor" },
            { id: "Battle Damage Armor", label: "Battle Damage Armor" },
            { id: "Light Recon Armor", label: "Light Recon Armor" },
            { id: "Heavy Assault Plate", label: "Heavy Assault Plate" },
            { id: "Tactical Vest System", label: "Tactical Vest System" },
            { id: "Knight-style Full Suit", label: "Knight-style Full Suit" }
        ],
        "Jumpsuit Type": [
            { id: "Military One-Piece", label: "Military One-Piece" },
            { id: "Space EVA Suit", label: "Space EVA Suit" },
            { id: "Ninja Stealth Gear", label: "Ninja Stealth Gear" },
            { id: "Hazmat Containment", label: "Hazmat Containment" },
            { id: "Riot Control Outfit", label: "Riot Control Outfit" },
            { id: "Desert Combat Gear", label: "Desert Combat Gear" },
            { id: "Arctic Survival Suit", label: "Arctic Survival Suit" },
            { id: "Urban Warfare Uniform", label: "Urban Warfare Uniform" },
            { id: "Jungle Camouflage", label: "Jungle Camouflage" },
            { id: "Deep Space Exploration", label: "Deep Space Exploration" }
        ],
        "Emblems/Logos": [
            { id: "Lightning Bolt Chest", label: "Lightning Bolt Chest" },
            { id: "Skull and Crossbones", label: "Skull and Crossbones" },
            { id: "Star Command Badge", label: "Star Command Badge" },
            { id: "Dragon Symbol Patch", label: "Dragon Symbol Patch" },
            { id: "Team Number Decal", label: "Team Number Decal" },
            { id: "Rank Insignia", label: "Rank Insignia" },
            { id: "Squad Logo Shield", label: "Squad Logo Shield" },
            { id: "Operation Name Tag", label: "Operation Name Tag" },
            { id: "Unit Motto Banner", label: "Unit Motto Banner" },
            { id: "Battle Honor Ribbon", label: "Battle Honor Ribbon" }
        ],
        "Straps/Belts": [
            { id: "Ammo Bandolier", label: "Ammo Bandolier" },
            { id: "Utility Belt System", label: "Utility Belt System" },
            { id: "Tactical Thigh Straps", label: "Tactical Thigh Straps" },
            { id: "Equipment Harness", label: "Equipment Harness" },
            { id: "Weapon Carry Belt", label: "Weapon Carry Belt" },
            { id: "Tool Loop Belt", label: "Tool Loop Belt" },
            { id: "Grenade Belt", label: "Grenade Belt" },
            { id: "Communication Pack Belt", label: "Communication Pack Belt" },
            { id: "Power Cell Belt", label: "Power Cell Belt" },
            { id: "Survival Gear Strap", label: "Survival Gear Strap" }
        ],
        "Boots": [
            { id: "Combat Infantry Boots", label: "Combat Infantry Boots" },
            { id: "Rocket Thrust Boots", label: "Rocket Thrust Boots" },
            { id: "Magnetic Grip Soles", label: "Magnetic Grip Soles" },
            { id: "Spring-loaded Boots", label: "Spring-loaded Boots" },
            { id: "All-terrain Stompers", label: "All-terrain Stompers" },
            { id: "Hover Foot Pads", label: "Hover Foot Pads" },
            { id: "Defensive Kick Boots", label: "Defensive Kick Boots" },
            { id: "Stealth Soft Soles", label: "Stealth Soft Soles" },
            { id: "Desert Sand Boots", label: "Desert Sand Boots" },
            { id: "Deep Space EVA Boots", label: "Deep Space EVA Boots" }
        ]
    }
},
{
    id: 10,
    title: "CHARACTER NAME GENERATOR COMPONENTS",
    categories: [
        { id: "Rank/Title", label: "Rank/Title" },
        { id: "Power/Ability", label: "Power/Ability" },
        { id: "Action Word", label: "Action Word" },
        { id: "Animal/Object", label: "Animal/Object" },
        { id: "Environmental", label: "Environmental" }
    ],
    options: {
        "Rank/Title": [
            { id: "Commander", label: "Commander" },
            { id: "Captain", label: "Captain" },
            { id: "Major", label: "Major" },
            { id: "General", label: "General" },
            { id: "Sergeant", label: "Sergeant" },
            { id: "Colonel", label: "Colonel" },
            { id: "Marshal", label: "Marshal" },
            { id: "Lieutenant", label: "Lieutenant" },
            { id: "Chief", label: "Chief" },
            { id: "Master", label: "Master" }
        ],
        "Power/Ability": [
            { id: "Laser", label: "Laser" },
            { id: "Turbo", label: "Turbo" },
            { id: "Ultra", label: "Ultra" },
            { id: "Mega", label: "Mega" },
            { id: "Super", label: "Super" },
            { id: "Hyper", label: "Hyper" },
            { id: "Power", label: "Power" },
            { id: "Force", label: "Force" },
            { id: "Blast", label: "Blast" },
            { id: "Storm", label: "Storm" }
        ],
        "Action Word": [
            { id: "Strike", label: "Strike" },
            { id: "Slash", label: "Slash" },
            { id: "Crush", label: "Crush" },
            { id: "Blast", label: "Blast" },
            { id: "Smash", label: "Smash" },
            { id: "Charge", label: "Charge" },
            { id: "Attack", label: "Attack" },
            { id: "Assault", label: "Assault" },
            { id: "Impact", label: "Impact" },
            { id: "Surge", label: "Surge" }
        ],
        "Animal/Object": [
            { id: "Hawk", label: "Hawk" },
            { id: "Snake", label: "Snake" },
            { id: "Tiger", label: "Tiger" },
            { id: "Wolf", label: "Wolf" },
            { id: "Dragon", label: "Dragon" },
            { id: "Shark", label: "Shark" },
            { id: "Eagle", label: "Eagle" },
            { id: "Tank", label: "Tank" },
            { id: "Blade", label: "Blade" },
            { id: "Laser", label: "Laser" }
        ],
        "Environmental": [
            { id: "Ice", label: "Ice" },
            { id: "Fire", label: "Fire" },
            { id: "Storm", label: "Storm" },
            { id: "Solar", label: "Solar" },
            { id: "Lunar", label: "Lunar" },
            { id: "Desert", label: "Desert" },
            { id: "Arctic", label: "Arctic" },
            { id: "Jungle", label: "Jungle" },
            { id: "Space", label: "Space" },
            { id: "Deep", label: "Deep" }
        ]
    }
}
];
