// Main application logic for Radical 80s/90s Action Figure Creator
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const characterTypeSelect = document.getElementById('characterType');
    const archetypesSelect = document.getElementById('archetypes');
    const bodyBuildSelect = document.getElementById('bodyBuild');
    const headTypeSelect = document.getElementById('headType');
    const accessoryContainer = document.getElementById('accessoryContainer');
    const featureContainer = document.getElementById('featureContainer');
    const specialContainer = document.getElementById('specialContainer');
    const costumeContainer = document.getElementById('costumeContainer');
    const primaryColorSelect = document.getElementById('primaryColor');
    const secondaryColorSelect = document.getElementById('secondaryColor');
    const accentColorSelect = document.getElementById('accentColor');
    const factionAlignmentSelect = document.getElementById('factionAlignment');
    const generateBtn = document.getElementById('generateBtn');
    const randomizeBtn = document.getElementById('randomizeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const autoColorBtn = document.getElementById('autoColorBtn');
    const characterDescription = document.getElementById('characterDescription');
    const visualElements = document.getElementById('visualElements');
    
    // Initialize form
    initializeForm();
    
    // Event listeners
    characterTypeSelect.addEventListener('change', handleCharacterTypeChange);
    archetypesSelect.addEventListener('change', handleArchetypeChange);
    generateBtn.addEventListener('click', generateActionFigure);
    randomizeBtn.addEventListener('click', randomizeAll);
    resetBtn.addEventListener('click', resetForm);
    autoColorBtn.addEventListener('click', autoPickColorScheme);
    
    // Initialize the form with default options
    function initializeForm() {
        // Populate character type select
        populateSelect(characterTypeSelect, RADICAL_CONFIG.characterTypes);
        
        // Populate body build select
        populateSelect(bodyBuildSelect, RADICAL_CONFIG.bodyBuilds);
        
        // Populate head type select
        populateSelect(headTypeSelect, RADICAL_CONFIG.headTypes);
        
        // Populate faction alignment select
        populateSelect(factionAlignmentSelect, RADICAL_CONFIG.factionAlignments);
        
        // Populate all color selects
        populateSelect(primaryColorSelect, RADICAL_CONFIG.colors.primary);
        populateSelect(secondaryColorSelect, RADICAL_CONFIG.colors.secondary);
        populateSelect(accentColorSelect, RADICAL_CONFIG.colors.accent);
        
        // Populate checkboxes
        populateCheckboxes(accessoryContainer, RADICAL_CONFIG.accessories);
        populateCheckboxes(featureContainer, RADICAL_CONFIG.actionFeatures);
        populateCheckboxes(specialContainer, RADICAL_CONFIG.specialAbilities);
        populateCheckboxes(costumeContainer, RADICAL_CONFIG.costumeElements);
        
        // Clear output areas
        characterDescription.textContent = 'Your extreme action figure description will appear here after you generate a character.';
        visualElements.innerHTML = '';
        
        // Add some decorative elements
        addRadicalElements();
    }
    
    // Handle character type change
    function handleCharacterTypeChange() {
        const characterType = characterTypeSelect.value;
        
        if (!characterType) return;
        
        // Update archetypes options
        populateArchetypes(characterType);
    }
    
    // Handle archetype selection
    function handleArchetypeChange() {
        const characterType = characterTypeSelect.value;
        const archetype = archetypesSelect.value;
        
        if (!characterType || !archetype) return;
        
        // Find selected archetype
        const archetypeList = RADICAL_CONFIG.archetypes[characterType];
        if (!archetypeList) return;
        
        const selectedArchetype = archetypeList.find(a => a.value === archetype);
        if (!selectedArchetype) return;
        
        // Apply archetype components to form
        const components = selectedArchetype.components;
        
        if (components.bodyBuild) {
            bodyBuildSelect.value = components.bodyBuild;
        }
        
        if (components.headType) {
            headTypeSelect.value = components.headType;
        }
        
        // Set primary color
        if (components.primaryColor) {
            primaryColorSelect.value = components.primaryColor;
        }
        
        // Set secondary color
        if (components.secondaryColor) {
            secondaryColorSelect.value = components.secondaryColor;
        }
        
        // Set accent color
        if (components.accentColor) {
            accentColorSelect.value = components.accentColor;
        }
        
        // Set faction alignment
        if (components.factionAlignment) {
            factionAlignmentSelect.value = components.factionAlignment;
        }
        
        // Handle checkboxes for accessories, action features, abilities, and costume elements
        handleCheckboxSelection(accessoryContainer, components.accessories);
        handleCheckboxSelection(featureContainer, components.actionFeatures);
        handleCheckboxSelection(specialContainer, components.specialAbilities);
        handleCheckboxSelection(costumeContainer, components.costumeElements);
        
        // Generate character with the archetype
        generateActionFigure();
    }
    
    // Helper function to handle checkbox selection based on archetype
    function handleCheckboxSelection(container, selectedValues) {
        if (!selectedValues || !container) return;
        
        // Uncheck all checkboxes first
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Check the ones specified in the archetype
        selectedValues.forEach(value => {
            const checkbox = Array.from(checkboxes).find(cb => cb.value === value);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }
    
    // Helper function to populate a select element with options
    function populateSelect(selectElement, options) {
        // Clear existing options except first
        while (selectElement.options.length > 1) {
            selectElement.remove(1);
        }
        
        // Add all options from config
        if (options) {
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.value;
                optionElement.textContent = option.label;
                selectElement.appendChild(optionElement);
            });
        }
    }
    
    // Helper function to populate archetypes
    function populateArchetypes(characterType) {
        // Clear existing options except first
        while (archetypesSelect.options.length > 1) {
            archetypesSelect.remove(1);
        }
        
        // Add archetypes for the selected character type
        const archetypes = RADICAL_CONFIG.archetypes[characterType];
        if (archetypes) {
            archetypes.forEach(archetype => {
                const optionElement = document.createElement('option');
                optionElement.value = archetype.value;
                optionElement.textContent = archetype.label;
                archetypesSelect.appendChild(optionElement);
            });
        }
    }
    
    // Helper function to populate checkboxes
    function populateCheckboxes(container, options) {
        // Clear existing checkboxes
        container.innerHTML = '';
        
        // Add all options as checkboxes
        if (!options) return;
        
        options.forEach(option => {
            const item = document.createElement('div');
            item.className = 'accessory-item'; // Use the same class for styling
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = option.value || option;
            checkbox.id = 'option-' + (option.value || option);
            
            const label = document.createElement('label');
            label.textContent = option.label || option;
            label.setAttribute('for', 'option-' + (option.value || option));
            
            item.appendChild(checkbox);
            item.appendChild(label);
            container.appendChild(item);
        });
    }
    
    // Generate action figure based on selected options
    function generateActionFigure() {
        // Collect all selected values
        const characterType = characterTypeSelect.value;
        const bodyBuild = bodyBuildSelect.value;
        const headType = headTypeSelect.value;
        const primaryColor = primaryColorSelect.value;
        const secondaryColor = secondaryColorSelect.value;
        const accentColor = accentColorSelect.value;
        const factionAlignment = factionAlignmentSelect.value;
        
        // Get selected accessories
        const selectedAccessories = getSelectedValues(accessoryContainer);
        
        // Get selected action features
        const selectedFeatures = getSelectedValues(featureContainer);
        
        // Get selected special abilities
        const selectedAbilities = getSelectedValues(specialContainer);
        
        // Get selected costume elements
        const selectedCostumeElements = getSelectedValues(costumeContainer);
        
        // Generate character name
        const characterName = RADICAL_DESCRIPTIONS.generateActionFigureName();
        
        // Generate description
        let description = `Introducing ${characterName}, the ultimate battle-ready action figure! `;
        
        // Add description based on character type
        if (characterType) {
            description += RADICAL_DESCRIPTIONS.characterTypes[characterType] + " ";
        }
        
        // Add body build description
        if (bodyBuild) {
            description += RADICAL_DESCRIPTIONS.bodyBuilds[bodyBuild] + " ";
        }
        
        // Add head type description
        if (headType) {
            description += `Featuring a menacing ${headType} that strikes fear into enemies! `;
        }
        
    // Add accessories description
        if (selectedAccessories.length > 0) {
            description += "Armed with ";
            selectedAccessories.forEach((accessory, index) => {
                if (index > 0) {
                    if (index === selectedAccessories.length - 1) {
                        description += " and ";
                    } else {
                        description += ", ";
                    }
                }
                description += accessory;
            });
            description += "! ";
        }
        
        // Add action features description
        if (selectedFeatures.length > 0) {
            description += "Features include ";
            selectedFeatures.forEach((feature, index) => {
                if (index > 0) {
                    if (index === selectedFeatures.length - 1) {
                        description += " and ";
                    } else {
                        description += ", ";
                    }
                }
                description += feature;
            });
            description += "! ";
        }
        
        // Add color scheme description
        if (primaryColor && secondaryColor && accentColor) {
            description += `Comes in a radical color scheme of ${getPrimaryColorName(primaryColor)} with ${getSecondaryColorName(secondaryColor)} accents and ${getAccentColorName(accentColor)} details! `;
        }
        
        // Add special abilities description
        if (selectedAbilities.length > 0) {
            description += "Special powers include ";
            selectedAbilities.forEach((ability, index) => {
                if (index > 0) {
                    if (index === selectedAbilities.length - 1) {
                        description += " and ";
                    } else {
                        description += ", ";
                    }
                }
                description += ability;
            });
            description += "! ";
        }
        
        // Add faction alignment
        if (factionAlignment) {
            description += `Aligns with the ${factionAlignment} faction! `;
        }
        
        // Add costume elements description
        if (selectedCostumeElements.length > 0) {
            description += "Outfitted with ";
            selectedCostumeElements.forEach((element, index) => {
                if (index > 0) {
                    if (index === selectedCostumeElements.length - 1) {
                        description += " and ";
                    } else {
                        description += ", ";
                    }
                }
                description += element;
            });
            description += "! ";
        }
        
        // Add exciting conclusion
        description += "COLLECT THEM ALL AND BATTLE FOR THE FATE OF THE UNIVERSE!";
        
        // Display name and description
        characterDescription.innerHTML = `<div class="character-name">${characterName}</div><p>${description}</p>`;
        
        // Create list of visual elements
        visualElements.innerHTML = '';
        
        // Helper function to add a visual element if selected
        function addVisualElement(label, value) {
            if (value) {
                const item = document.createElement('li');
                item.textContent = `${label}: ${value}`;
                visualElements.appendChild(item);
            }
        }
        
        // Check if an archetype was selected
        const archetypeValue = archetypesSelect.value;
        if (archetypeValue) {
            const archetypes = RADICAL_CONFIG.archetypes[characterType];
            if (archetypes) {
                const archetype = archetypes.find(a => a.value === archetypeValue);
                if (archetype) {
                    const archetypeItem = document.createElement('li');
                    archetypeItem.textContent = `Archetype: ${archetype.label}`;
                    visualElements.appendChild(archetypeItem);
                }
            }
        }
        
        // Add all selected elements to the list
        addVisualElement('Character Type', characterType);
        addVisualElement('Body Build', bodyBuild);
        addVisualElement('Head Type', headType);
        
        // Add colors
        addVisualElement('Primary Color', getPrimaryColorName(primaryColor));
        addVisualElement('Secondary Color', getSecondaryColorName(secondaryColor));
        addVisualElement('Accent Color', getAccentColorName(accentColor));
        
        // Add accessories if selected
        if (selectedAccessories.length > 0) {
            const accessoriesItem = document.createElement('li');
            accessoriesItem.textContent = 'Accessories: ' + selectedAccessories.join(', ');
            visualElements.appendChild(accessoriesItem);
        }
        
        // Add action features if selected
        if (selectedFeatures.length > 0) {
            const featuresItem = document.createElement('li');
            featuresItem.textContent = 'Action Features: ' + selectedFeatures.join(', ');
            visualElements.appendChild(featuresItem);
        }
        
        // Add special abilities if selected
        if (selectedAbilities.length > 0) {
            const abilitiesItem = document.createElement('li');
            abilitiesItem.textContent = 'Special Abilities: ' + selectedAbilities.join(', ');
            visualElements.appendChild(abilitiesItem);
        }
        
        // Add faction alignment
        addVisualElement('Faction Alignment', factionAlignment);
        
        // Add costume elements if selected
        if (selectedCostumeElements.length > 0) {
            const costumeItem = document.createElement('li');
            costumeItem.textContent = 'Costume Elements: ' + selectedCostumeElements.join(', ');
            visualElements.appendChild(costumeItem);
        }
        
        // Play a fun sound effect
        playGenerateSound();
    }
    
    // Helper function to get selected values from checkboxes
    function getSelectedValues(container) {
        const selectedValues = [];
        const checkboxes = container.querySelectorAll('input[type="checkbox"]:checked');
        
        checkboxes.forEach(checkbox => {
            selectedValues.push(checkbox.value);
        });
        
        return selectedValues;
    }
    
    // Helper functions to get color names from values
    function getPrimaryColorName(value) {
        const color = RADICAL_CONFIG.colors.primary.find(c => c.value === value);
        return color ? color.label : value;
    }
    
    function getSecondaryColorName(value) {
        const color = RADICAL_CONFIG.colors.secondary.find(c => c.value === value);
        return color ? color.label : value;
    }
    
    function getAccentColorName(value) {
        const color = RADICAL_CONFIG.colors.accent.find(c => c.value === value);
        return color ? color.label : value;
    }
    
    // Reset the form
    function resetForm() {
        // Reset all select elements
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.selectedIndex = 0;
        });
        
        // Reset all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Clear character display
        characterDescription.textContent = 'Your extreme action figure description will appear here after you generate a character.';
        visualElements.innerHTML = '';
        
        // Play reset sound
        playClickSound();
    }
    
    // Randomize all selections
    function randomizeAll() {
        // Select random character type
        const characterType = getRandomOption(characterTypeSelect);
        characterTypeSelect.value = characterType;
        
        // Update options based on character type first
        handleCharacterTypeChange();
        
        // Clear the archetype selection
        archetypesSelect.value = '';
        
        // Randomize all the selections
        bodyBuildSelect.value = getRandomOption(bodyBuildSelect);
        headTypeSelect.value = getRandomOption(headTypeSelect);
        factionAlignmentSelect.value = getRandomOption(factionAlignmentSelect);
        
        // Randomize colors
        primaryColorSelect.value = getRandomOption(primaryColorSelect);
        secondaryColorSelect.value = getRandomOption(secondaryColorSelect);
        accentColorSelect.value = getRandomOption(accentColorSelect);
        
        // Randomize checkboxes
        randomizeCheckboxes(accessoryContainer);
        randomizeCheckboxes(featureContainer);
        randomizeCheckboxes(specialContainer);
        randomizeCheckboxes(costumeContainer);
        
        // Generate character with random selections
        generateActionFigure();
        
        // Play randomize sound
        playClickSound();
    }
    
    // Helper function to get a random option from a select element
    function getRandomOption(selectElement) {
        // Skip the first option (assumed to be the default empty option)
        const options = Array.from(selectElement.options).slice(1);
        if (options.length === 0) return '';
        
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex].value;
    }
    
    // Helper function to randomize checkbox selections
    function randomizeCheckboxes(container) {
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        
        // Uncheck all first
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Select random number of checkboxes
        const numToSelect = Math.floor(Math.random() * (checkboxes.length + 1));
        const shuffledCheckboxes = Array.from(checkboxes).sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < numToSelect && i < shuffledCheckboxes.length; i++) {
            shuffledCheckboxes[i].checked = true;
        }
    }
    
    // Auto pick extreme color scheme
    function autoPickColorScheme() {
        // Get a random color scheme from the predefined combinations
        const randomScheme = RADICAL_CONFIG.colorSchemes[Math.floor(Math.random() * RADICAL_CONFIG.colorSchemes.length)];
        
        // Apply to select elements
        if (randomScheme.primary) {
            primaryColorSelect.value = randomScheme.primary;
        }
        
        if (randomScheme.secondary) {
            secondaryColorSelect.value = randomScheme.secondary;
        }
        
        if (randomScheme.accent) {
            accentColorSelect.value = randomScheme.accent;
        }
        
        // Play color selection sound
        playClickSound();
    }
    
    // Add radical 80s/90s decorative elements
    function addRadicalElements() {
        const container = document.querySelector('body');
        
        // Create 5 lightning bolt elements
        for (let i = 0; i < 5; i++) {
            const bolt = document.createElement('div');
            bolt.className = 'lightning-bolt';
            
            // Position randomly around the page
            bolt.style.top = `${Math.random() * 80 + 10}%`;
            bolt.style.left = `${Math.random() * 80 + 10}%`;
            bolt.style.animationDelay = `${i * 0.5}s`;
            
            container.appendChild(bolt);
        }
        
        // Create spinning radical elements
        const radicalSymbols = ['⚡', '🔥', '💥', '🌟', '🔫', '🛡️'];
        
        for (let i = 0; i < 5; i++) {
            const element = document.createElement('div');
            element.className = 'radical-element';
            element.textContent = radicalSymbols[Math.floor(Math.random() * radicalSymbols.length)];
            
            // Random positioning
            element.style.top = `${10 + (i * 20)}%`;
            element.style.left = `${Math.random() * 90 + 5}%`;
            element.style.animationDuration = `${5 + Math.random() * 5}s`;
            element.style.animationDelay = `${i * 0.5}s`;
            element.style.fontSize = `${30 + Math.random() * 20}px`;
            element.style.opacity = '0.4';
            
            container.appendChild(element);
        }
    }
    
    // Sound effects
    function playClickSound() {
        // Simple click sound (could be implemented with an actual audio file)
        try {
            const sound = new Audio('data:audio/wav;base64,UklGRl9vT19JRkZXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU' + Math.random().toString(36).substring(2, 8));
            sound.volume = 0.2;
            sound.play().catch(e => {
                // Ignore errors, as some browsers require user interaction first
            });
        } catch (e) {
            // Silent fallback if audio is not supported
        }
    }
    
    function playGenerateSound() {
        // More elaborate sound for action figure generation
        try {
            const sound = new Audio('data:audio/wav;base64,UklGRl9vT19JRkZXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU' + Math.random().toString(36).substring(2, 15));
            sound.volume = 0.3;
            sound.play().catch(e => {
                // Ignore errors, as some browsers require user interaction first
            });
        } catch (e) {
            // Silent fallback if audio is not supported
        }
    }
    
    // Add hover sound effects to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseover', function() {
            try {
                const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19JRkZXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU' + Math.random().toString(36).substring(2, 10));
                hoverSound.volume = 0.1;
                hoverSound.play().catch(e => {
                    // Ignore errors, as some browsers require user interaction first
                });
            } catch (e) {
                // Silent fallback
            }
        });
    });
});