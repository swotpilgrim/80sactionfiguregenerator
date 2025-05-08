// Radical 80s/90s Action Figure Creator Descriptions
var RADICAL_DESCRIPTIONS = {
    // Character type descriptions
    characterTypes: {
        "Human/Humanoid": "This battle-ready human warrior is sculpted to perfection with realistic muscle definition and an expression of pure determination! Ready for action in any dimension!",
        "Alien/Monster/Mutant": "This otherworldly creature brings terrifying alien powers to the battle! With an unconventional anatomy and bizarre features, it strikes fear into enemies!",
        "Robot/Cyborg": "This technologically advanced battle unit combines cutting-edge robotics with devastating firepower! Metal meets might in this unstoppable machine warrior!",
        "Animal/Mutant Animal": "This animal-based fighter brings primal fury to combat! With enhanced abilities and human-level intelligence, it represents the perfect blend of beast and battle tactics!",
        "Hybrid": "This experimental warrior fuses multiple battle forms into one ultimate fighting machine! Neither fully one thing nor another, it harnesses the powers of both worlds!"
    },
    
    // Body build descriptions
    bodyBuilds: {
        "Standard": "With proportions optimized for battle, this warrior maintains flexibility while still packing a punch!",
        "Heroic": "Sculpted with exaggerated muscular definition, this heroic physique showcases power and perfection with every bulging bicep!",
        "Bulky": "This massive frame dominates the battlefield with overwhelming size and strength! Built like a tank with muscles on top of muscles!",
        "Slim/Agile": "This streamlined battle form sacrifices bulk for lightning-fast reflexes and unmatched agility! Speed is the ultimate weapon!",
        "Monster": "This asymmetric monstrosity defies conventional anatomy with disturbing bulges and terrifying proportions! Fear made physical!"
    },
    
    // Generate a dynamic action figure name
    generateActionFigureName: function() {
        // Name components for different parts of the name
        const prefixes = ["Ultra", "Mega", "Hyper", "Extreme", "Radical", "Power", "Battle", "Combat", "Laser", "Turbo", "Cyber", "Atomic"];
        
        const mids = ["Force", "Strike", "Warrior", "Fighter", "Commando", "Trooper", "Guardian", "Defender", "Blast", "Thunder", "Storm", "Blade"];
        
        const suffixes = ["Prime", "Alpha", "X", "Supreme", "Elite", "Master", "Champion", "Maximus", "One", "Zero", "Rex", "Omega"];
        
        // Randomly select components
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const mid = mids[Math.floor(Math.random() * mids.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        
        // Combine with a chance to add an additional animal/weapon name
        const extras = ["Hawk", "Snake", "Tiger", "Wolf", "Dragon", "Eagle", "Shark", "Sword", "Fist", "Venom", "Claw", "Fang"];
        
        // 50% chance to add an extra component
        let name = "";
        if (Math.random() > 0.5) {
            const extra = extras[Math.floor(Math.random() * extras.length)];
            name = `${prefix} ${mid} ${extra} ${suffix}`;
        } else {
            name = `${prefix} ${mid} ${suffix}`;
        }
        
        return name;
    },
    
    // Generate packaging text description
    generatePackagingText: function(name, characterType, specialAbilities) {
        let text = `${name.toUpperCase()} - THE ULTIMATE BATTLE FIGURE!\n\n`;
        
        text += "FEATURES:\n";
        text += "• EXTREME BATTLE ACTION!\n";
        text += "• WEAPONS INCLUDED!\n";
        text += "• POSEABLE FIGURE WITH SWIVEL ARMS AND LEGS!\n";
        
        if (specialAbilities && specialAbilities.length > 0) {
            specialAbilities.forEach(ability => {
                text += `• ${ability.toUpperCase()} POWER!\n`;
            });
        }
        
        text += "\nWARNING: CHOKING HAZARD - Small parts. Not for children under 3 years.\n";
        text += "COLLECT ALL FIGURES IN THE SERIES! (Each sold separately)";
        
        return text;
    }
};