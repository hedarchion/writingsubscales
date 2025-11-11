// Data structure containing all assessment criteria
const assessmentData = {
    "A2": {
        "5": { "content": "All content is relevant to the task. Target reader is fully informed.", "communicativeAchievement": "", "organisation": "Text is connected and coherent, using basic linking words and a limited number of cohesive devices.", "language": "Uses everyday vocabulary generally appropriately, while occasionally overusing certain lexis. Uses simple grammatical forms with a good degree of control. While errors are noticeable, meaning can still be determined." },
        "4": { "content": "Performance shares features of Bands 3 and 5.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "3": { "content": "Minor irrelevances and/or omissions may be present. Target reader is on the whole informed.", "communicativeAchievement": "", "organisation": "Text is connected using basic, high-frequency linking words.", "language": "Uses basic vocabulary reasonably appropriately. Uses simple grammatical forms with some degree of control. Errors may impede meaning at times." },
        "2": { "content": "Performance shares features of Bands 1 and 3.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "1": { "content": "Irrelevances and misinterpretation of task may be present. Target reader is minimally informed.", "communicativeAchievement": "", "organisation": "Production unlikely to be connected, though punctuation and simple connectors (i.e. ‘and’) may on occasion be used.", "language": "Produces basic vocabulary of isolated words and phrases. Produces few simple grammatical forms with only limited control." },
        "0": { "content": "Content is totally irrelevant. Target reader is not informed.", "communicativeAchievement": "", "organisation": "", "language": "Performance below Band 1." }
    },
    "B1": {
        "5": { "content": "All content is relevant to the task. Target reader is fully informed.", "communicativeAchievement": "Uses the conventions of the communicative task to hold the target reader’s attention and communicate straightforward ideas.", "organisation": "Text is generally well organised and coherent, using a variety of linking words and cohesive devices.", "language": "Uses a range of everyday vocabulary appropriately, with occasional inappropriate use of less common lexis. Uses a range of simple and some complex grammatical forms with a good degree of control. Errors do not impede communication." },
        "4": { "content": "Performance shares features of Bands 3 and 5.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "3": { "content": "Minor irrelevances and/or omissions may be present. Target reader is on the whole informed.", "communicativeAchievement": "Uses the conventions of the communicative task in generally appropriate ways to communicate straightforward ideas.", "organisation": "Text is connected and coherent, using basic linking words and a limited number of cohesive devices.", "language": "Uses everyday vocabulary generally appropriately, while occasionally overusing certain lexis. Uses simple grammatical forms with a good degree of control. While errors are noticeable, meaning can still be determined." },
        "2": { "content": "Performance shares features of Bands 1 and 3.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "1": { "content": "Irrelevances and misinterpretation of task may be present. Target reader is minimally informed.", "communicativeAchievement": "Produces text that communicates simple ideas in simple ways.", "organisation": "Text is connected using basic, high-frequency linking words.", "language": "Uses basic vocabulary reasonably appropriately. Uses simple grammatical forms with some degree of control. Errors may impede meaning at times." },
        "0": { "content": "Content is totally irrelevant. Target reader is not informed.", "communicativeAchievement": "", "organisation": "", "language": "Performance below Band 1." }
    },
    "B2": {
        "5": { "content": "All content is relevant to the task. Target reader is fully informed.", "communicativeAchievement": "Uses the conventions of the communicative task effectively to hold the target reader’s attention and communicate straightforward and complex ideas, as appropriate.", "organisation": "Text is well organised and coherent, using a variety of cohesive devices and organisational patterns to generally good effect.", "language": "Uses a range of vocabulary, including less common lexis, appropriately. Uses a range of simple and complex grammatical forms with control and flexibility. Occasional errors may be present but do not impede communication." },
        "4": { "content": "Performance shares features of Bands 3 and 5.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "3": { "content": "Minor irrelevances and/or omissions may be present. Target reader is on the whole informed.", "communicativeAchievement": "Uses the conventions of the communicative task to hold the target reader’s attention and communicate straightforward ideas.", "organisation": "Text is generally well organised and coherent, using a variety of linking words and cohesive devices.", "language": "Uses a range of everyday vocabulary appropriately, with occasional inappropriate use of less common lexis. Uses a range of simple and some complex grammatical forms with a good degree of control. Errors do not impede communication." },
        "2": { "content": "Performance shares features of Bands 1 and 3.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "1": { "content": "Irrelevances and misinterpretation of task may be present. Target reader is minimally informed.", "communicativeAchievement": "Uses the conventions of the communicative task in generally appropriate ways to communicate straightforward ideas.", "organisation": "Text is connected and coherent, using basic linking words and a limited number of cohesive devices.", "language": "Uses everyday vocabulary generally appropriately, while occasionally overusing certain lexis. Uses simple grammatical forms with a good degree of control. While errors are noticeable, meaning can still be determined." },
        "0": { "content": "Content is totally irrelevant. Target reader is not informed.", "communicativeAchievement": "", "organisation": "", "language": "Performance below Band 1." }
    },
    "C1": {
        "5": { "content": "All content is relevant to the task. Target reader is fully informed.", "communicativeAchievement": "Uses the conventions of the communicative task with sufficient flexibility to communicate complex ideas in an effective way, holding the target reader’s attention with ease, fulfilling all communicative purposes.", "organisation": "Text is a well-organised, coherent whole, using a variety of cohesive devices and organisational patterns with flexibility.", "language": "Uses a range of vocabulary, including less common lexis, effectively and precisely. Uses a wide range of simple and complex grammatical forms with full control, flexibility and sophistication. Errors, if present, are related to less common words and structures, or occur as slips." },
        "4": { "content": "Performance shares features of Bands 3 and 5.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "3": { "content": "Minor irrelevances and/or omissions may be present. Target reader is on the whole informed.", "communicativeAchievement": "Uses the conventions of the communicative task effectively to hold the target reader’s attention and communicate straightforward and complex ideas, as appropriate.", "organisation": "Text is well organised and coherent, using a variety of cohesive devices and organisational patterns to generally good effect.", "language": "Uses a range of vocabulary, including less common lexis, appropriately. Uses a range of simple and complex grammatical forms with control and flexibility. Occasional errors may be present but do not impede communication." },
        "2": { "content": "Performance shares features of Bands 1 and 3.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "1": { "content": "Irrelevances and misinterpretation of task may be present. Target reader is minimally informed.", "communicativeAchievement": "Uses the conventions of the communicative task to hold the target reader’s attention and communicate straightforward ideas.", "organisation": "Text is generally well organised and coherent, using a variety of linking words and cohesive devices.", "language": "Uses a range of everyday vocabulary appropriately, with occasional inappropriate use of less common lexis. Uses a range of simple and some complex grammatical forms with a good degree of control. Errors do not impede communication." },
        "0": { "content": "Content is totally irrelevant. Target reader is not informed.", "communicativeAchievement": "", "organisation": "", "language": "Performance below Band 1." }
    },
    "C2": {
        "5": { "content": "All content is relevant to the task. Target reader is fully informed.", "communicativeAchievement": "Demonstrates complete command of the conventions of the communicative task. Communicates complex ideas in an effective and convincing way, holding the target reader’s attention with ease, fulfilling all communicative purposes.", "organisation": "Text is organised impressively and coherently using a wide range of cohesive devices and organisational patterns with complete flexibility.", "language": "Uses a wide range of vocabulary, including less common lexis, with fluency, precision, sophistication and style. Use of grammar is sophisticated, fully controlled and completely natural. Any inaccuracies occur only as slips." },
        "4": { "content": "Performance shares features of Bands 3 and 5.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "3": { "content": "Minor irrelevances and/or omissions may be present. Target reader is on the whole informed.", "communicativeAchievement": "Uses the conventions of the communicative task with sufficient flexibility to communicate complex ideas in an effective way, holding the target reader’s attention with ease, fulfilling all communicative purposes.", "organisation": "Text is a well-organised, coherent whole, using a variety of cohesive devices and organisational patterns with flexibility.", "language": "Uses a range of vocabulary, including less common lexis, effectively and precisely. Uses a wide range of simple and complex grammatical forms with full control, flexibility and sophistication. Errors, if present, are related to less common words and structures, or occur as slips." },
        "2": { "content": "Performance shares features of Bands 1 and 3.", "communicativeAchievement": "", "organisation": "", "language": "" },
        "1": { "content": "Irrelevances and misinterpretation of task may be present. Target reader is minimally informed.", "communicativeAchievement": "Uses the conventions of the communicative task effectively to hold the target reader’s attention and communicate straightforward and complex ideas, as appropriate.", "organisation": "Text is well organised and coherent, using a variety of cohesive devices and organisational patterns to generally good effect.", "language": "Uses a range of vocabulary, including less common lexis, appropriately. Uses a range of simple and complex grammatical forms with control and flexibility. Occasional errors may be present but do not impede communication." },
        "0": { "content": "Content is totally irrelevant. Target reader is not informed.", "communicativeAchievement": "", "organisation": "", "language": "Performance below Band 1." }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element Selectors ---
    const singleLevelSelect = document.getElementById('single-level-select');
    const multiLevelCheckboxesContainer = document.getElementById('multi-level-checkboxes');
    const subscaleSelect = document.getElementById('subscale-select');
    const compareButton = document.getElementById('compare-button');
    const resultsContainer = document.getElementById('results-container');

    const levels = Object.keys(assessmentData);
    const subscales = Object.keys(assessmentData.B1['5']); // Use B1 as a template for subscales

    // --- Initialization ---
    function initialize() {
        populateControls();
        setupEventListeners();
    }

    // --- Control Population ---
    function populateControls() {
        // Populate single level dropdown
        levels.forEach(level => {
            const option = document.createElement('option');
            option.value = level;
            option.textContent = level;
            singleLevelSelect.appendChild(option);
        });

        // Populate multi-level checkboxes
        levels.forEach(level => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = level;
            checkbox.id = `check-${level}`;
            label.htmlFor = `check-${level}`;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(level));
            multiLevelCheckboxesContainer.appendChild(label);
        });

        // Populate subscale dropdown
        subscales.forEach(subscale => {
            const option = document.createElement('option');
            option.value = subscale;
            // Format name for display (e.g., communicativeAchievement -> Communicative Achievement)
            const displayName = subscale.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            option.textContent = displayName;
            subscaleSelect.appendChild(option);
        });
    }
    
    // --- Event Listeners ---
    function setupEventListeners() {
        singleLevelSelect.addEventListener('change', handleSingleLevelSelect);
        compareButton.addEventListener('click', renderMultiLevelComparison);
    }
    
    function handleSingleLevelSelect(event) {
        const selectedLevel = event.target.value;
        if (selectedLevel) {
            renderSingleLevelView(selectedLevel);
        } else {
            resultsContainer.innerHTML = `<p class="placeholder">Your results will be displayed here.</p>`;
        }
    }

    // --- Rendering Functions ---

    /**
     * Renders a full table for a single selected CEFR level.
     */
    function renderSingleLevelView(level) {
        const levelData = assessmentData[level];
        const subscaleHeaders = subscales.map(subscale => `<th>${subscale.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</th>`).join('');

        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th class="th-${level.toLowerCase()}">Band</th>
                        ${subscaleHeaders}
                    </tr>
                </thead>
                <tbody>
        `;

        // Iterate backwards through bands 5, 4, 3, 2, 1, 0
        for (let i = 5; i >= 0; i--) {
            const band = i.toString();
            const bandData = levelData[band];
            
            if (bandData.content.includes("Performance shares features")) {
                tableHTML += `<tr><td colspan="${subscales.length + 1}">${bandData.content}</td></tr>`;
            } else if (bandData.language && bandData.language.includes("Performance below Band")) {
                 tableHTML += `<tr><td colspan="${subscales.length + 1}">${bandData.language}</td></tr>`;
            } else {
                tableHTML += `<tr><td><strong>${band}</strong></td>`;
                subscales.forEach(subscale => {
                    tableHTML += `<td>${bandData[subscale] || ''}</td>`;
                });
                tableHTML += `</tr>`;
            }
        }
        tableHTML += `</tbody></table>`;
        resultsContainer.innerHTML = tableHTML;
    }

    /**
     * Renders a comparison table for selected levels and a single subscale.
     */
    function renderMultiLevelComparison() {
        const selectedLevels = Array.from(multiLevelCheckboxesContainer.querySelectorAll('input:checked')).map(cb => cb.value);
        const selectedSubscale = subscaleSelect.value;
        
        if (selectedLevels.length === 0) {
            resultsContainer.innerHTML = `<p class="placeholder">Please select at least one level to compare.</p>`;
            return;
        }

        const levelHeaders = selectedLevels.map(level => `<th class="th-${level.toLowerCase()}">${level}</th>`).join('');
        
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Band</th>
                        ${levelHeaders}
                    </tr>
                </thead>
                <tbody>
        `;
        
        for (let i = 5; i >= 0; i--) {
            const band = i.toString();
            const firstLevelData = assessmentData[selectedLevels[0]][band]; // Check for colspan text

             if (firstLevelData.content.includes("Performance shares features")) {
                tableHTML += `<tr><td colspan="${selectedLevels.length + 1}">${firstLevelData.content}</td></tr>`;
            } else if (firstLevelData.language && firstLevelData.language.includes("Performance below Band")) {
                 tableHTML += `<tr><td colspan="${selectedLevels.length + 1}">${firstLevelData.language}</td></tr>`;
            } else {
                tableHTML += `<tr><td><strong>${band}</strong></td>`;
                selectedLevels.forEach(level => {
                    const cellData = assessmentData[level][band][selectedSubscale] || '';
                    tableHTML += `<td>${cellData}</td>`;
                });
                tableHTML += `</tr>`;
            }
        }

        tableHTML += `</tbody></table>`;
        resultsContainer.innerHTML = tableHTML;
    }

    // --- Start the application ---
    initialize();
});
