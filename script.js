document.addEventListener('DOMContentLoaded', function() {
    // Tab Navigation
    const navLinks = document.querySelectorAll('.nav-links li');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links and tabs
            navLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding tab content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Initialize Charts
    initializeAttendanceChart();
    initializePerformanceChart();
    initializeMonthlyAttendanceChart();
    initializeSubjectPerformanceChart();
    initializeGpaTrendChart();
    
    // Notes Functionality
    const noteItems = document.querySelectorAll('.note-item');
    const addNoteBtn = document.getElementById('addNoteBtn');
    
    noteItems.forEach(item => {
        item.addEventListener('click', function() {
            noteItems.forEach(note => note.classList.remove('active'));
            this.classList.add('active');
            // In a real app, you would load the note content here
        });
    });
    
    if (addNoteBtn) {
        addNoteBtn.addEventListener('click', function() {
            // In a real app, you would create a new note here
            alert('Creating a new note...');
        });
    }
});

// Chart Initialization Functions
function initializeAttendanceChart() {
    const ctx = document.getElementById('attendanceChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Attendance %',
                data: [92, 88, 95, 89, 91, 87],
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 70,
                    max: 100
                }
            }
        }
    });
}

function initializePerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Quiz 1', 'Assignment 1', 'Mid-term', 'Quiz 2', 'Assignment 2', 'Final'],
            datasets: [{
                label: 'Score %',
                data: [85, 92, 78, 88, 90, 82],
                backgroundColor: [
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(255, 152, 0, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(76, 175, 80, 0.7)'
                ],
                borderColor: [
                    'rgba(76, 175, 80, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(255, 152, 0, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(76, 175, 80, 1)',
                    'rgba(76, 175, 80, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function initializeMonthlyAttendanceChart() {
    const ctx = document.getElementById('monthlyAttendanceChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Mathematics',
                    data: [100, 80, 100, 100],
                    borderColor: 'rgba(67, 97, 238, 1)',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    tension: 0.3
                },
                {
                    label: 'Physics',
                    data: [80, 60, 80, 60],
                    borderColor: 'rgba(244, 67, 54, 1)',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    tension: 0.3
                },
                {
                    label: 'Chemistry',
                    data: [100, 100, 80, 100],
                    borderColor: 'rgba(76, 175, 80, 1)',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Attendance %'
                    }
                }
            }
        }
    });
}

function initializeSubjectPerformanceChart() {
    const ctx = document.getElementById('subjectPerformanceChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'],
            datasets: [{
                label: 'Current Performance',
                data: [85, 78, 92, 88, 75],
                backgroundColor: 'rgba(67, 97, 238, 0.2)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(67, 97, 238, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }
        }
    });
}

function initializeGpaTrendChart() {
    const ctx = document.getElementById('gpaTrendChart');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Current'],
            datasets: [{
                label: 'GPA',
                data: [3.5, 3.6, 3.8, 3.7],
                backgroundColor: 'rgba(67, 97, 238, 0.1)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 2.0,
                    max: 4.0,
                    title: {
                        display: true,
                        text: 'GPA (4.0 Scale)'
                    }
                }
            }
        }
    });
}