// Topics data
const topics = [
    {
        id: 1,
        title: "Khái lược về triết học và vai trò của nó trong đời sống xã hội",
        description: "Tìm hiểu khái niệm, nguồn gốc và vấn đề cơ bản của triết học",
        page: "topic1.html"
    },
    {
        id: 2,
        title: "Vật chất, vận động, không gian và thời gian",
        description: "Khám phá quan điểm về vật chất và các thuộc tính cơ bản của nó",
        page: "topic2.html"
    },
    {
        id: 3,
        title: "Ý thức: nguồn gốc, bản chất và cấu trúc",
        description: "Nghiên cứu về nguồn gốc, bản chất và các thành tố của ý thức",
        page: "topic3.html"
    },
    {
        id: 4,
        title: "Nguyên lý mối liên hệ phổ biến và phát triển",
        description: "Hiểu về mối liên hệ phổ biến, phát triển và cặp phạm trù cái chung - cái riêng",
        page: "topic4.html"
    },
    {
        id: 5,
        title: "Các cặp phạm trù: Nguyên nhân - Kết quả, Nội dung - Hình thức, Bản chất - Hiện tượng",
        description: "Phân tích các cặp phạm trù cơ bản trong triết học",
        page: "topic5.html"
    },
    {
        id: 6,
        title: "Quy luật lượng - chất",
        description: "Tìm hiểu quy luật chuyển hóa từ những thay đổi về lượng dẫn đến thay đổi về chất",
        page: "topic6.html"
    },
    {
        id: 7,
        title: "Quy luật mâu thuẫn",
        description: "Nghiên cứu quy luật thống nhất và đấu tranh giữa các mặt đối lập",
        page: "topic7.html"
    },
    {
        id: 8,
        title: "Quy luật phủ định của phủ định",
        description: "Khám phá quy luật phủ định của phủ định trong sự phát triển",
        page: "topic8.html"
    },
    {
        id: 9,
        title: "Nhận thức: bản chất và quá trình",
        description: "Tìm hiểu về bản chất và quá trình nhận thức của con người",
        page: "topic9.html"
    },
    {
        id: 10,
        title: "Thực tiễn trong triết học",
        description: "Nghiên cứu vai trò của thực tiễn trong nhận thức và hoạt động",
        page: "topic10.html"
    },
    {
        id: 11,
        title: "Xã hội và lịch sử",
        description: "Khám phá quan điểm triết học về xã hội và sự phát triển lịch sử",
        page: "topic11.html"
    },
    {
        id: 12,
        title: "Ý thức xã hội và các hình thái",
        description: "Tìm hiểu về ý thức xã hội và các hình thái ý thức xã hội khác nhau",
        page: "topic12.html"
    }
];

// Load topics on homepage
function loadTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    if (!topicsGrid) return;

    topicsGrid.innerHTML = topics.map(topic => `
        <div class="topic-card" onclick="window.location.href='${topic.page}'">
            <div class="topic-number">${topic.id}</div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
        </div>
    `).join('');
}

// Scroll to topics section
function scrollToTopics() {
    document.getElementById('topics').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Sticky header effect
function handleStickyHeader() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadTopics();
    handleStickyHeader();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});