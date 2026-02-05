// Calendar Application
class PhilosophyCalendar {
    constructor() {
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        
        this.monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        this.monthNamesVi = [
            'Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu',
            'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'
        ];
        
        this.philosophers = [
            {
                name: 'Socrates',
                nameVi: 'Socrates',
                years: '470 - 399 TCN',
                image: 'images/trietgia/socrates_bust.png',
                quote: 'Tôi chỉ biết một điều là tôi không biết gì cả.',
                description: 'Triết gia cổ đại Hy Lạp, cha đẻ của triết học phương Tây',
                month: 0
            },
            {
                name: 'Plato',
                nameVi: 'Plato',
                years: '428 - 348 TCN',
                image: 'images/trietgia/plato_bust.png',
                quote: 'Sự khôn ngoan bắt đầu từ việc tự biết mình.',
                description: 'Học trò của Socrates, người sáng lập Học viện Athens',
                month: 1
            },
            {
                name: 'Confucius',
                nameVi: 'Khổng Tử',
                years: '551 - 479 TCN',
                image: 'images/trietgia/confucius_portrait.png',
                quote: 'Học mà không nghĩ thì vô ích, nghĩ mà không học thì nguy hiểm.',
                description: 'Triết gia và nhà giáo dục vĩ đại của Trung Hoa',
                month: 2
            },
            {
                name: 'Nietzsche',
                nameVi: 'Friedrich Nietzsche',
                years: '1844 - 1900',
                image: 'images/trietgia/nietzsche_portrait.png',
                quote: 'Cái gì không giết chết ta sẽ làm ta mạnh mẽ hơn.',
                description: 'Triết gia Đức, người đặt nền móng cho triết học hiện đại',
                month: 3
            },
            {
                name: 'Simone de Beauvoir',
                nameVi: 'Simone de Beauvoir',
                years: '1908 - 1986',
                image: 'images/trietgia/beauvoir_portrait.png',
                quote: 'Người ta không sinh ra là phụ nữ, mà trở thành phụ nữ.',
                description: 'Triết gia nữ quyền và nhà văn hiện sinh Pháp',
                month: 4
            },
            {
                name: 'Albert Camus',
                nameVi: 'Albert Camus',
                years: '1913 - 1960',
                image: 'images/trietgia/camus_portrait.png',
                quote: 'Trong trái tim mùa đông, tôi cuối cùng đã học được rằng trong tôi có một mùa hè bất khả chiến bại.',
                description: 'Triết gia hiện sinh và nhà văn đoạt giải Nobel',
                month: 5
            },
            {
                name: 'Michel Foucault',
                nameVi: 'Michel Foucault',
                years: '1926 - 1984',
                image: 'images/trietgia/foucault_portrait.png',
                quote: 'Quyền lực không phải là cái gì đó được sở hữu, mà là cái gì đó được thực thi.',
                description: 'Triết gia hậu cấu trúc và sử gia tư tưởng Pháp',
                month: 6
            },
            {
                name: 'Hannah Arendt',
                nameVi: 'Hannah Arendt',
                years: '1906 - 1975',
                image: 'images/trietgia/arendt_portrait.png',
                quote: 'Quyền lực tương ứng với khả năng không chỉ hành động mà còn hành động cùng nhau.',
                description: 'Triết gia chính trị và lý thuyết gia Do Thái-Mỹ',
                month: 7
            },
            {
                name: 'Karl Marx',
                nameVi: 'Karl Marx',
                years: '1818 - 1883',
                image: 'images/trietgia/socrates_bust.png', // Fallback image
                quote: 'Các triết gia chỉ giải thích thế giới theo nhiều cách khác nhau, vấn đề là thay đổi nó.',
                description: 'Triết gia, kinh tế học gia và nhà cách mạng Đức',
                month: 8
            },
            {
                name: 'Friedrich Engels',
                nameVi: 'Friedrich Engels',
                years: '1820 - 1895',
                image: 'images/trietgia/plato_bust.png', // Fallback image
                quote: 'Kiến thức là khoa học về những quy luật chung nhất của tự nhiên, xã hội và tư duy.',
                description: 'Triết gia và nhà lý thuyết cách mạng Đức',
                month: 9
            },
            {
                name: 'Vladimir Lenin',
                nameVi: 'Vladimir Lenin',
                years: '1870 - 1924',
                image: 'images/trietgia/confucius_portrait.png', // Fallback image
                quote: 'Không có lý luận cách mạng thì không có phong trào cách mạng.',
                description: 'Nhà cách mạng và lãnh tụ chính trị Nga',
                month: 10
            },
            {
                name: 'Hồ Chí Minh',
                nameVi: 'Hồ Chí Minh',
                years: '1890 - 1969',
                image: 'images/trietgia/nietzsche_portrait.png', // Fallback image
                quote: 'Không có gì quý hơn độc lập tự do.',
                description: 'Lãnh tụ cách mạng và Chủ tịch nước Việt Nam',
                month: 11
            }
        ];
        
        this.events = [
            {
                date: '2026-01-01',
                title: 'Năm Mới 2026',
                description: 'Bắt đầu năm học mới với tinh thần học tập triết học'
            },
            {
                date: '2026-02-14',
                title: 'Ngày sinh Karl Marx',
                description: 'Kỷ niệm ngày sinh của nhà tư tưởng vĩ đại'
            },
            {
                date: '2026-03-15',
                title: 'Tuần lễ triết học',
                description: 'Các hoạt động học tập và thảo luận về triết học'
            },
            {
                date: '2026-04-22',
                title: 'Ngày sinh Lenin',
                description: 'Tưởng nhớ V.I. Lenin và tư tưởng của ông'
            },
            {
                date: '2026-05-19',
                title: 'Ngày sinh Hồ Chí Minh',
                description: 'Kỷ niệm ngày sinh Chủ tịch Hồ Chí Minh'
            },
            {
                date: '2026-09-02',
                title: 'Ngày Quốc Khánh',
                description: 'Kỷ niệm Cách mạng Tháng Tám và Quốc khánh Việt Nam'
            }
        ];
        
        // Feng Shui data
        this.canChiCycle = [
            'Giáp Tý', 'Ất Sửu', 'Bính Dần', 'Đinh Mão', 'Mậu Thìn', 'Kỷ Tỵ',
            'Canh Ngọ', 'Tân Mùi', 'Nhâm Thân', 'Quý Dậu', 'Giáp Tuất', 'Ất Hợi',
            'Bính Tý', 'Đinh Sửu', 'Mậu Dần', 'Kỷ Mão', 'Canh Thìn', 'Tân Tỵ',
            'Nhâm Ngọ', 'Quý Mùi', 'Giáp Thân', 'Ất Dậu', 'Bính Tuất', 'Đinh Hợi',
            'Mậu Tý', 'Kỷ Sửu', 'Canh Dần', 'Tân Mão', 'Nhâm Thìn', 'Quý Tỵ',
            'Giáp Ngọ', 'Ất Mùi', 'Bính Thân', 'Đinh Dậu', 'Mậu Tuất', 'Kỷ Hợi',
            'Canh Tý', 'Tân Sửu', 'Nhâm Dần', 'Quý Mão', 'Giáp Thìn', 'Ất Tỵ',
            'Bính Ngọ', 'Đinh Mùi', 'Mậu Thân', 'Kỷ Dậu', 'Canh Tuất', 'Tân Hợi',
            'Nhâm Tý', 'Quý Sửu', 'Giáp Dần', 'Ất Mão', 'Bính Thìn', 'Đinh Tỵ',
            'Mậu Ngọ', 'Kỷ Mùi', 'Canh Thân', 'Tân Dậu', 'Nhâm Tuất', 'Quý Hợi'
        ];
        
        this.goodActivities = [
            ['Học tập', 'Đọc sách', 'Nghiên cứu', 'Thi cử'],
            ['Gặp gỡ bạn bè', 'Thảo luận', 'Hợp tác', 'Làm việc nhóm'],
            ['Khởi công', 'Bắt đầu dự án mới', 'Đầu tư', 'Kinh doanh'],
            ['Cầu nguyện', 'Thiền định', 'Tu tâm', 'Tĩnh tâm'],
            ['Du lịch', 'Khám phá', 'Trải nghiệm', 'Phiêu lưu'],
            ['Sáng tạo', 'Nghệ thuật', 'Viết lách', 'Âm nhạc'],
            ['Thể thao', 'Rèn luyện', 'Chăm sóc sức khỏe', 'Yoga']
        ];
        
        this.badActivities = [
            ['Cãi vã', 'Tranh luận gay gắt', 'Xung đột', 'Bất hòa'],
            ['Đầu tư rủi ro', 'Cờ bạc', 'Đầu cơ', 'Vay nợ'],
            ['Phẫu thuật', 'Điều trị lớn', 'Can thiệp y tế'],
            ['Ký hợp đồng quan trọng', 'Quyết định lớn', 'Cam kết dài hạn'],
            ['Chuyển nhà', 'Thay đổi lớn', 'Cải tạo nhà cửa'],
            ['Mua sắm đắt tiền', 'Chi tiêu lớn', 'Đầu tư bất động sản'],
            ['Làm việc quá sức', 'Căng thẳng', 'Áp lực cao']
        ];
        
        this.directions = ['Đông', 'Tây', 'Nam', 'Bắc', 'Đông Nam', 'Tây Nam', 'Đông Bắc', 'Tây Bắc'];
        
        this.colors = [
            { name: 'Đỏ', hex: '#e74c3c' },
            { name: 'Xanh lá', hex: '#27ae60' },
            { name: 'Xanh dương', hex: '#3498db' },
            { name: 'Vàng', hex: '#f1c40f' },
            { name: 'Tím', hex: '#9b59b6' },
            { name: 'Cam', hex: '#e67e22' },
            { name: 'Hồng', hex: '#e91e63' },
            { name: 'Nâu', hex: '#8d6e63' }
        ];
        
        this.advices = [
            'Hôm nay là ngày tốt để học hỏi và trau dồi kiến thức mới.',
            'Nên dành thời gian cho gia đình và những người thân yêu.',
            'Đây là thời điểm thuận lợi để bắt đầu những dự án mới.',
            'Hãy giữ tâm trạng tích cực và lạc quan trong mọi việc.',
            'Nên tập trung vào việc hoàn thiện bản thân và phát triển kỹ năng.',
            'Đây là ngày tốt để thiền định và tìm kiếm sự bình an nội tâm.',
            'Hãy chú ý đến sức khỏe và dành thời gian nghỉ ngơi hợp lý.',
            'Nên tránh những quyết định quan trọng và cần thời gian suy nghĩ.',
            'Đây là thời điểm tốt để kết nối với bạn bè và mở rộng mối quan hệ.',
            'Hãy tin tưởng vào trực giác và làm theo tiếng nói của trái tim.'
        ];
        
        this.init();
    }
    
    init() {
        this.renderCalendar();
        this.updatePhilosopher();
        this.loadEvents();
        this.bindEvents();
    }
    
    bindEvents() {
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.previousMonth();
        });
        
        document.getElementById('nextMonth').addEventListener('click', () => {
            this.nextMonth();
        });
    }
    
    previousMonth() {
        this.currentMonth--;
        if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.renderCalendar();
        this.updatePhilosopher();
        this.loadEvents();
    }
    
    nextMonth() {
        this.currentMonth++;
        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.renderCalendar();
        this.updatePhilosopher();
        this.loadEvents();
    }
    
    renderCalendar() {
        const monthElement = document.getElementById('currentMonth');
        monthElement.textContent = `${this.monthNamesVi[this.currentMonth]} ${this.currentYear}`;
        
        const daysGrid = document.getElementById('daysGrid');
        daysGrid.innerHTML = '';
        
        const firstDay = new Date(this.currentYear, this.currentMonth, 1);
        const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
        const daysInMonth = lastDay.getDate();
        
        // Get first day of week (Monday = 0)
        let startDay = firstDay.getDay() - 1;
        if (startDay < 0) startDay = 6;
        
        // Previous month days
        const prevMonth = new Date(this.currentYear, this.currentMonth, 0);
        const prevMonthDays = prevMonth.getDate();
        
        for (let i = startDay - 1; i >= 0; i--) {
            const dayElement = this.createDayElement(prevMonthDays - i, true);
            daysGrid.appendChild(dayElement);
        }
        
        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = this.createDayElement(day, false);
            daysGrid.appendChild(dayElement);
        }
        
        // Next month days
        const totalCells = daysGrid.children.length;
        const remainingCells = 42 - totalCells; // 6 rows × 7 days
        
        for (let day = 1; day <= remainingCells; day++) {
            const dayElement = this.createDayElement(day, true);
            daysGrid.appendChild(dayElement);
        }
    }
    
    createDayElement(day, isOtherMonth) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = day;
        
        if (isOtherMonth) {
            dayElement.classList.add('other-month');
        } else {
            // Check if it's today
            const today = new Date();
            if (this.currentYear === today.getFullYear() && 
                this.currentMonth === today.getMonth() && 
                day === today.getDate()) {
                dayElement.classList.add('today');
            }
            
            // Check if there's an event on this day
            const dateStr = `${this.currentYear}-${String(this.currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            if (this.hasEvent(dateStr)) {
                dayElement.classList.add('has-event');
            }
            
            // Add click event for feng shui info
            dayElement.addEventListener('click', () => {
                this.showFengShuiInfo(this.currentYear, this.currentMonth, day);
            });
        }
        
        return dayElement;
    }
    
    hasEvent(dateStr) {
        return this.events.some(event => event.date === dateStr);
    }
    
    updatePhilosopher() {
        // Get philosopher for current month or use default
        let philosopher = this.philosophers.find(p => p.month === this.currentMonth);
        if (!philosopher) {
            philosopher = this.philosophers[this.currentMonth % this.philosophers.length];
        }
        
        document.getElementById('philosopherName').textContent = philosopher.nameVi;
        document.getElementById('philosopherYears').textContent = philosopher.years;
        document.getElementById('philosopherDescription').textContent = philosopher.description;
        document.getElementById('quoteText').textContent = `"${philosopher.quote}"`;
        document.getElementById('quoteAuthor').textContent = `— ${philosopher.nameVi}`;
        
        const imageElement = document.getElementById('philosopherImage');
        imageElement.src = philosopher.image;
        imageElement.alt = philosopher.nameVi;
        
        // Add fade effect
        const philosopherSection = document.querySelector('.philosopher-section');
        philosopherSection.style.opacity = '0';
        setTimeout(() => {
            philosopherSection.style.opacity = '1';
        }, 100);
    }
    
    loadEvents() {
        const eventsList = document.getElementById('eventsList');
        
        // Filter events for current month
        const currentMonthEvents = this.events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getMonth() === this.currentMonth && 
                   eventDate.getFullYear() === this.currentYear;
        });
        
        if (currentMonthEvents.length === 0) {
            eventsList.innerHTML = '<p style="text-align: center; color: #7f8c8d;">Không có sự kiện nào trong tháng này.</p>';
            return;
        }
        
        eventsList.innerHTML = currentMonthEvents.map(event => {
            const eventDate = new Date(event.date);
            const formattedDate = `${eventDate.getDate()}/${eventDate.getMonth() + 1}/${eventDate.getFullYear()}`;
            
            return `
                <div class="event-item">
                    <div class="event-date">${formattedDate}</div>
                    <div class="event-title">${event.title}</div>
                    <div class="event-description">${event.description}</div>
                </div>
            `;
        }).join('');
    }
    
    showFengShuiInfo(year, month, day) {
        const date = new Date(year, month, day);
        const dateStr = `${day}/${month + 1}/${year}`;
        
        // Calculate feng shui info
        const fengShuiData = this.calculateFengShui(date);
        
        // Update modal content
        document.getElementById('modalDate').textContent = `Thông tin ngày ${dateStr}`;
        document.getElementById('lunarDate').textContent = fengShuiData.lunarDate;
        document.getElementById('canChi').textContent = fengShuiData.canChi;
        document.getElementById('goodHours').textContent = fengShuiData.goodHours;
        
        // Good activities
        const goodActivitiesList = document.getElementById('goodActivities');
        goodActivitiesList.innerHTML = fengShuiData.goodActivities.map(activity => 
            `<li>${activity}</li>`
        ).join('');
        
        // Bad activities
        const badActivitiesList = document.getElementById('badActivities');
        badActivitiesList.innerHTML = fengShuiData.badActivities.map(activity => 
            `<li>${activity}</li>`
        ).join('');
        
        // Good direction
        document.getElementById('goodDirection').textContent = fengShuiData.goodDirection;
        
        // Lucky colors
        const luckyColorsDiv = document.getElementById('luckyColors');
        luckyColorsDiv.innerHTML = fengShuiData.luckyColors.map(color => 
            `<div class="color-item" style="background-color: ${color.hex}" data-color="${color.name}"></div>`
        ).join('');
        
        // Daily advice
        document.getElementById('dailyAdvice').textContent = fengShuiData.advice;
        
        // Show modal
        document.getElementById('fengShuiModal').style.display = 'block';
    }
    
    calculateFengShui(date) {
        const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
        
        // Calculate Can Chi (simplified)
        const canChiIndex = dayOfYear % 60;
        const canChi = this.canChiCycle[canChiIndex];
        
        // Calculate lunar date (simplified approximation)
        const lunarDay = (dayOfYear % 30) + 1;
        const lunarMonth = Math.floor(dayOfYear / 30) % 12 + 1;
        const lunarDate = `${lunarDay}/${lunarMonth}`;
        
        // Generate good hours
        const hours = ['Tý (23-01h)', 'Sửu (01-03h)', 'Dần (03-05h)', 'Mão (05-07h)', 
                      'Thìn (07-09h)', 'Tỵ (09-11h)', 'Ngọ (11-13h)', 'Mùi (13-15h)',
                      'Thân (15-17h)', 'Dậu (17-19h)', 'Tuất (19-21h)', 'Hợi (21-23h)'];
        const goodHoursCount = 3 + (dayOfYear % 3);
        const goodHours = [];
        for (let i = 0; i < goodHoursCount; i++) {
            goodHours.push(hours[(dayOfYear + i * 3) % 12]);
        }
        
        // Select activities based on day
        const goodActivitiesIndex = dayOfYear % this.goodActivities.length;
        const badActivitiesIndex = (dayOfYear + 3) % this.badActivities.length;
        
        // Select direction
        const goodDirection = this.directions[dayOfYear % this.directions.length];
        
        // Select lucky colors (2-3 colors)
        const colorCount = 2 + (dayOfYear % 2);
        const luckyColors = [];
        for (let i = 0; i < colorCount; i++) {
            luckyColors.push(this.colors[(dayOfYear + i * 2) % this.colors.length]);
        }
        
        // Select advice
        const advice = this.advices[dayOfYear % this.advices.length];
        
        return {
            lunarDate,
            canChi,
            goodHours: goodHours.join(', '),
            goodActivities: this.goodActivities[goodActivitiesIndex],
            badActivities: this.badActivities[badActivitiesIndex],
            goodDirection,
            luckyColors,
            advice
        };
    }
}

// Global function to close modal
function closeFengShuiModal() {
    document.getElementById('fengShuiModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('fengShuiModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize calendar when page loads
document.addEventListener('DOMContentLoaded', function() {
    new PhilosophyCalendar();
});