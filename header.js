// Common Header Component
function createHeader(activePage = '') {
    return `
        <header>
            <nav class="navbar">
                <div class="nav-container">
                    <h1 class="nav-title">Triết Học</h1>
                    <ul class="nav-menu">
                        <li><a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>Trang Chủ</a></li>
                        <li><a href="calendar.html" ${activePage === 'calendar' ? 'class="active"' : ''}>Lịch</a></li>
                        <li><a href="index.html#topics" ${activePage === 'topics' ? 'class="active"' : ''}>Chủ Đề</a></li>
                        <li><a href="quiz.html" ${activePage === 'quiz' ? 'class="active"' : ''}>Ôn Thi</a></li>
                        
                        <li><a href="index.html#about" ${activePage === 'about' ? 'class="active"' : ''}>Giới Thiệu</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    `;
}

// Load header when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        const activePage = headerContainer.getAttribute('data-active') || '';
        headerContainer.innerHTML = createHeader(activePage);
    }
});