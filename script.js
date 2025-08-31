// Jenkins Test Page JavaScript

// Global variables
let buildNumber = 1;
let testResults = [];
let isRunning = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Jenkins Test Page initialized');
    initializePage();
    setupEventListeners();
});

// Initialize page elements
function initializePage() {
    // Set initial build information
    updateBuildInfo();
    
    // Add Jenkins status indicators
    addJenkinsStatusIndicators();
    
    // Add console output area
    addConsoleOutput();
    
    // Log initialization
    logToConsole('info', 'Page initialized successfully');
    logToConsole('info', 'Repository: https://github.com/fabio71c/fabio71c.git');
    logToConsole('info', 'Branch: main');
    logToConsole('info', 'Ready for Jenkins testing');
}

// Setup event listeners
function setupEventListeners() {
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            refreshPage();
        }
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            runFullTestSuite();
        }
    });
}

// Update build information
function updateBuildInfo() {
    const buildDateElement = document.getElementById('buildDate');
    const commitHashElement = document.getElementById('commitHash');
    
    if (buildDateElement) {
        buildDateElement.textContent = new Date().toLocaleString();
    }
    
    if (commitHashElement) {
        // Get the current commit hash from the page or use default
        const currentHash = document.querySelector('meta[name="commit-hash"]')?.content || '9bc8fa2';
        commitHashElement.textContent = currentHash;
    }
}

// Add Jenkins status indicators
function addJenkinsStatusIndicators() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    const statusDiv = document.createElement('div');
    statusDiv.className = 'jenkins-status';
    statusDiv.innerHTML = `
        <div class="status-item success">
            <h4>🔧 Jenkins</h4>
            <p>Online</p>
        </div>
        <div class="status-item success">
            <h4>📦 Build</h4>
            <p>Success</p>
        </div>
        <div class="status-item success">
            <h4>🧪 Tests</h4>
            <p>Passed</p>
        </div>
        <div class="status-item success">
            <h4>🚀 Deploy</h4>
            <p>Active</p>
        </div>
    `;
    
    // Insert after the info-grid
    const infoGrid = container.querySelector('.info-grid');
    if (infoGrid) {
        infoGrid.parentNode.insertBefore(statusDiv, infoGrid.nextSibling);
    }
}

// Add console output area
function addConsoleOutput() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    const consoleDiv = document.createElement('div');
    consoleDiv.className = 'console-output';
    consoleDiv.id = 'consoleOutput';
    consoleDiv.innerHTML = '<div class="log-entry info">Console initialized...</div>';
    
    // Insert before the buttons
    const buttonsDiv = container.querySelector('div[style*="text-align: center"]');
    if (buttonsDiv) {
        buttonsDiv.parentNode.insertBefore(consoleDiv, buttonsDiv);
    }
}

// Log to console output
function logToConsole(type, message) {
    const consoleOutput = document.getElementById('consoleOutput');
    if (!consoleOutput) return;
    
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${type}`;
    logEntry.textContent = `[${timestamp}] ${message}`;
    
    consoleOutput.appendChild(logEntry);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
    
    // Also log to browser console
    console.log(`[${type.toUpperCase()}] ${message}`);
}

// Enhanced test function
function testFunction() {
    if (isRunning) {
        logToConsole('warning', 'Test already running...');
        return;
    }
    
    isRunning = true;
    logToConsole('info', 'Starting Jenkins integration tests...');
    
    // Simulate test execution
    const testSteps = [
        { name: 'Repository Check', duration: 500 },
        { name: 'Branch Validation', duration: 300 },
        { name: 'Build Process', duration: 800 },
        { name: 'Unit Tests', duration: 600 },
        { name: 'Integration Tests', duration: 700 },
        { name: 'Deployment Check', duration: 400 }
    ];
    
    let currentStep = 0;
    
    function runNextTest() {
        if (currentStep >= testSteps.length) {
            completeTests();
            return;
        }
        
        const step = testSteps[currentStep];
        logToConsole('info', `Running: ${step.name}`);
        
        setTimeout(() => {
            logToConsole('info', `Completed: ${step.name}`);
            currentStep++;
            runNextTest();
        }, step.duration);
    }
    
    runNextTest();
}

// Complete tests
function completeTests() {
    isRunning = false;
    buildNumber++;
    
    logToConsole('info', 'All tests completed successfully!');
    logToConsole('info', `Build #${buildNumber} passed`);
    
    const results = document.getElementById('testResults');
    if (results) {
        results.innerHTML = `
            <div class="status-card">
                <span class="status-indicator"></span>
                <strong>Test Results:</strong> All tests passed successfully! ✅
            </div>
            <div class="build-info">
                <strong>Build Number:</strong> #${buildNumber}<br>
                <strong>Test Suite:</strong> Jenkins Integration Tests<br>
                <strong>Status:</strong> PASSED<br>
                <strong>Duration:</strong> 3.2 seconds<br>
                <strong>Coverage:</strong> 95.2%<br>
                <strong>Tests Run:</strong> 24<br>
                <strong>Tests Passed:</strong> 24<br>
                <strong>Tests Failed:</strong> 0
            </div>
        `;
    }
}

// Run full test suite
function runFullTestSuite() {
    logToConsole('info', 'Starting full test suite...');
    
    const testSuites = [
        'Unit Tests',
        'Integration Tests',
        'End-to-End Tests',
        'Performance Tests',
        'Security Tests'
    ];
    
    testSuites.forEach((suite, index) => {
        setTimeout(() => {
            logToConsole('info', `Running ${suite}...`);
            setTimeout(() => {
                logToConsole('info', `${suite} completed successfully`);
            }, 500);
        }, index * 1000);
    });
}

// Enhanced refresh function
function refreshPage() {
    logToConsole('info', 'Refreshing page...');
    setTimeout(() => {
        location.reload();
    }, 500);
}

// Enhanced build info function
function showBuildInfo() {
    const results = document.getElementById('testResults');
    if (results) {
        results.innerHTML = `
            <div class="status-card">
                <span class="status-indicator"></span>
                <strong>Build Information:</strong>
            </div>
            <div class="build-info">
                <strong>Repository:</strong> https://github.com/fabio71c/fabio71c.git<br>
                <strong>Branch:</strong> main<br>
                <strong>Build Number:</strong> #${buildNumber}<br>
                <strong>Build Time:</strong> ${new Date().toLocaleString()}<br>
                <strong>Jenkins Job:</strong> Jenkins Test Pipeline<br>
                <strong>Status:</strong> SUCCESS<br>
                <strong>Environment:</strong> Production<br>
                <strong>Deployment:</strong> Automated via Jenkins
            </div>
        `;
    }
    
    logToConsole('info', 'Build information displayed');
}

// Add progress bar functionality
function showProgressBar(progress) {
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

// Export functions for global access
window.testFunction = testFunction;
window.refreshPage = refreshPage;
window.showBuildInfo = showBuildInfo;
window.runFullTestSuite = runFullTestSuite;
window.logToConsole = logToConsole;
