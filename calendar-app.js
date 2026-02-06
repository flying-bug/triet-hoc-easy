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
                image: 'images/trietgia/cac-mac.jpg',
                quote: 'Các triết gia chỉ giải thích thế giới theo nhiều cách khác nhau, vấn đề là thay đổi nó.',
                description: 'Triết gia, kinh tế học gia và nhà cách mạng Đức',
                month: 8
            },
            {
                name: 'Friedrich Engels',
                nameVi: 'Friedrich Engels',
                years: '1820 - 1895',
                image: 'images/trietgia/engel.jpg',
                quote: 'Kiến thức là khoa học về những quy luật chung nhất của tự nhiên, xã hội và tư duy.',
                description: 'Triết gia và nhà lý thuyết cách mạng Đức',
                month: 9
            },
            {
                name: 'Vladimir Lenin',
                nameVi: 'Vladimir Lenin',
                years: '1870 - 1924',
                image: 'images/trietgia/le-nin.webp',
                quote: 'Không có lý luận cách mạng thì không có phong trào cách mạng.',
                description: 'Nhà cách mạng và lãnh tụ chính trị Nga',
                month: 10
            },
            {
                name: 'Hồ Chí Minh',
                nameVi: 'Hồ Chí Minh',
                years: '1890 - 1969',
                image: 'images/trietgia/h0-chi-minh.jfif',
                quote: 'Không có gì quý hơn độc lập tự do.',
                description: 'Lãnh tụ cách mạng và Chủ tịch nước Việt Nam',
                month: 11
            }
        ];
        
        this.events = [
            // Tháng 1
            { date: '2026-01-01', title: 'Tết Dương lịch', description: 'Năm mới 2026 🎉' },
            { date: '2026-01-09', title: 'Ngày Học sinh – Sinh viên Việt Nam', description: 'Kỷ niệm ngày truyền thống học sinh sinh viên' },
            
            // Tháng 2
            { date: '2026-02-14', title: 'Valentine', description: 'Ngày lễ tình nhân 💕' },
            { date: '2026-02-17', title: 'Tết Nguyên Đán (Bính Ngọ)', description: 'Tết Âm lịch 2026 🧧🐎' },
            { date: '2026-02-18', title: 'Mùng 2 Tết', description: 'Nghỉ Tết Nguyên Đán' },
            { date: '2026-02-19', title: 'Mùng 3 Tết', description: 'Nghỉ Tết Nguyên Đán' },
            { date: '2026-02-20', title: 'Mùng 4 Tết', description: 'Nghỉ Tết Nguyên Đán' },
            { date: '2026-02-21', title: 'Mùng 5 Tết', description: 'Nghỉ Tết Nguyên Đán' },
            { date: '2026-02-27', title: 'Ngày Thầy thuốc Việt Nam', description: 'Tôn vinh ngành y tế Việt Nam' },
            
            // Tháng 3
            { date: '2026-03-08', title: 'Ngày Quốc tế Phụ nữ', description: 'Tôn vinh phụ nữ trên toàn thế giới 🌷' },
            { date: '2026-03-20', title: 'Ngày Quốc tế Hạnh phúc', description: 'International Day of Happiness' },
            { date: '2026-03-26', title: 'Ngày thành lập Đoàn TNCS Hồ Chí Minh', description: 'Kỷ niệm thành lập Đoàn thanh niên' },
            
            // Tháng 4
            { date: '2026-04-07', title: 'Giỗ Tổ Hùng Vương', description: 'Ngày 10/3 Âm lịch - Tưởng nhớ công đức Tổ tiên' },
            { date: '2026-04-22', title: 'Ngày Trái Đất', description: 'Ngày Quốc tế Trái Đất 🌍' },
            { date: '2026-04-30', title: 'Ngày Giải phóng miền Nam', description: 'Thống nhất đất nước 30/4/1975 🇻🇳' },
            
            // Tháng 5
            { date: '2026-05-01', title: 'Quốc tế Lao động', description: 'Ngày Quốc tế Lao động 1/5' },
            { date: '2026-05-07', title: 'Chiến thắng Điện Biên Phủ', description: 'Kỷ niệm chiến thắng lịch sử 7/5/1954' },
            { date: '2026-05-19', title: 'Sinh nhật Chủ tịch Hồ Chí Minh', description: 'Kỷ niệm ngày sinh Bác Hồ (19/5/1890)' },
            
            // Tháng 6
            { date: '2026-06-01', title: 'Ngày Quốc tế Thiếu nhi', description: 'Ngày hội của các em thiếu nhi 🎈' },
            { date: '2026-06-05', title: 'Ngày Môi trường Thế giới', description: 'Bảo vệ môi trường sống 🌱' },
            { date: '2026-06-21', title: 'Ngày Báo chí Cách mạng Việt Nam', description: 'Kỷ niệm ngày truyền thống báo chí' },
            
            // Tháng 7
            { date: '2026-07-27', title: 'Ngày Thương binh – Liệt sĩ', description: 'Tưởng nhớ các anh hùng liệt sĩ' },
            
            // Tháng 8
            { date: '2026-08-19', title: 'Cách mạng Tháng Tám', description: 'Kỷ niệm Cách mạng Tháng Tám 1945' },
            
            // Tháng 9
            { date: '2026-09-02', title: 'Quốc khánh Việt Nam', description: 'Ngày Quốc khánh nước CHXHCN Việt Nam ⭐🇻🇳' },
            
            // Tháng 10
            { date: '2026-10-01', title: 'Ngày Quốc tế Người cao tuổi', description: 'Tôn vinh người cao tuổi' },
            { date: '2026-10-10', title: 'Giải phóng Thủ đô', description: 'Kỷ niệm ngày giải phóng Hà Nội 10/10/1954' },
            { date: '2026-10-20', title: 'Ngày Phụ nữ Việt Nam', description: 'Ngày truyền thống phụ nữ Việt Nam 20/10' },
            { date: '2026-10-31', title: 'Halloween', description: 'Lễ hội Halloween 🎃' },
            
            // Tháng 11
            { date: '2026-11-20', title: 'Ngày Nhà giáo Việt Nam', description: 'Tôn vinh các thầy cô giáo 20/11 🌹' },
            
            // Tháng 12
            { date: '2026-12-22', title: 'Ngày Quân đội Nhân dân Việt Nam', description: 'Kỷ niệm ngày thành lập QĐND Việt Nam' },
            { date: '2026-12-24', title: 'Giáng sinh (Noel)', description: 'Đêm Giáng sinh 🎄' },
            { date: '2026-12-25', title: 'Giáng sinh', description: 'Lễ Giáng sinh 🎅🎄' }
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
        
        // Ẩn ảnh nếu không có
        if (philosopher.image && philosopher.image.trim() !== '') {
            imageElement.src = philosopher.image;
            imageElement.alt = philosopher.nameVi;
            imageElement.style.display = 'block';
        } else {
            imageElement.style.display = 'none';
        }
        
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
            eventsList.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 40px;">Không có sự kiện nào trong tháng này.</p>';
            return;
        }
        
        // Sort events by date
        currentMonthEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        eventsList.innerHTML = currentMonthEvents.map((event, index) => {
            const eventDate = new Date(event.date);
            const day = eventDate.getDate();
            const formattedDate = `${day}/${eventDate.getMonth() + 1}`;
            
            return `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${formattedDate}</div>
                        <div class="timeline-title">${event.title}</div>
                        <div class="timeline-description">${event.description}</div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    async showFengShuiInfo(year, month, day) {
        const date = new Date(year, month, day);
        const dateStr = `${day}/${month + 1}/${year}`;
        
        // Update modal title
        document.getElementById('modalDate').textContent = `Thông tin ngày ${dateStr}`;
        
        // Show modal with loading state
        document.getElementById('fengShuiModal').style.display = 'block';
        this.showModalLoading();
        
        try {
            // Call API to get real feng shui data
            const fengShuiData = await this.fetchFengShuiData(year, month + 1, day);
            this.displayModalResults(fengShuiData);
        } catch (error) {
            console.error('Error fetching feng shui data:', error);
            this.showModalError('Không thể tải thông tin lịch vạn sự. Vui lòng thử lại.');
        }
    }
    
    async fetchFengShuiData(year, month, day) {
        const API_URL = 'https://tuvi.vienaoc.vn/api/v0/lichvansu';
        
        const requestData = {
            gio_duong: 6,
            phut_duong: 0,
            giay_duong: 0,
            ingay_duong: day,
            ithang_duong: month,
            inam_duong: year,
            timezone: 7
        };
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(requestData),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    }
    
    showModalLoading() {
        const modalBody = document.querySelector('#fengShuiModal .modal-body');
        modalBody.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #6c757d;">
                <i class="fas fa-spinner" style="font-size: 2rem; margin-bottom: 15px; animation: spin 1s linear infinite;"></i>
                <p>Đang tra cứu thông tin lịch vạn sự...</p>
            </div>
        `;
    }
    
    showModalError(message) {
        const modalBody = document.querySelector('#fengShuiModal .modal-body');
        modalBody.innerHTML = `
            <div style="background: #f8d7da; color: #721c24; padding: 20px; border-radius: 10px; border-left: 5px solid #dc3545;">
                <strong>Lỗi:</strong> ${message}
            </div>
        `;
    }
    
    displayModalResults(data) {
        const modalBody = document.querySelector('#fengShuiModal .modal-body');
        
        // Parse data
        const amLich = data.am_lich || {};
        const lunarDate = amLich.ngay && amLich.thang ? `${amLich.ngay}/${amLich.thang}` : '--';
        const canChiNgay = this.extractCanChi(data.sao_gio_can_chi_display) || '--';
        const gioHoangDao = this.parseGioHoangDao(data.gio_hoang_dao) || '--';
        const goodDirection = data.huong_xuat_hanh ? data.huong_xuat_hanh.replace(/;/g, ', ') : '--';
        const conflictAge = this.cleanHtmlTags(data.tuoi_xung) || '--';
        const season = data.tiet_khi_truoc || '--';
        const dayStatus = this.cleanHtmlTags(data.hoang_dao) || this.cleanHtmlTags(data.luc_nham_don) || '--';
        
        // Get stars text
        const goodStars = this.formatStarsText(data.sao_tot) || 'Không có thông tin';
        const badStars = this.formatStarsText(data.sao_xau) || 'Không có thông tin';
        
        // Build modal HTML
        modalBody.innerHTML = `
            <div class="feng-shui-info">
                <div class="lunar-info">
                    <h4>📅 Thông tin âm lịch</h4>
                    <p><strong>Ngày âm lịch:</strong> <span>${lunarDate}</span></p>
                    <p><strong>Can Chi ngày:</strong> <span>${canChiNgay}</span></p>
                    <p><strong>Trạng thái:</strong> <span style="color: #ff6b6b; font-weight: 700;">${dayStatus}</span></p>
                    <p><strong>Giờ hoàng đạo:</strong> <span>${gioHoangDao}</span></p>
                </div>
                
                <div class="feng-shui-details">
                    <h4>🔮 Phong thủy trong ngày</h4>
                    <div class="good-bad-section">
                        <div class="good-section">
                            <h5>⭐ Sao Tốt:</h5>
                            <div class="stars-content">${goodStars}</div>
                        </div>
                        <div class="bad-section">
                            <h5>💫 Sao Xấu:</h5>
                            <div class="stars-content">${badStars}</div>
                        </div>
                    </div>
                    
                    <div class="direction-info">
                        <h5>🧭 Hướng xuất hành tốt:</h5>
                        <p>${goodDirection}</p>
                    </div>
                    
                    <div class="direction-info">
                        <h5>🚫 Tuổi xung:</h5>
                        <p>${conflictAge}</p>
                    </div>
                    
                    <div class="direction-info">
                        <h5>🌸 Tiết khí:</h5>
                        <p>${season}</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    formatStarsText(text) {
        if (!text) return '';
        
        // Convert HTML tags to proper formatting
        let formatted = text
            .replace(/<b>/g, '<strong>')
            .replace(/<\/b>/g, '</strong>')
            .replace(/<i>/g, '<em>')
            .replace(/<\/i>/g, '</em>')
            .replace(/<\/br>/g, '<br>')
            .replace(/\n/g, '<br>');
        
        return formatted;
    }
    
    cleanHtmlTags(text) {
        if (!text) return '';
        return text.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
    }
    
    extractCanChi(gioData) {
        if (!gioData) return null;
        const firstKey = Object.keys(gioData)[0];
        return firstKey ? this.cleanHtmlTags(gioData[firstKey]) : null;
    }
    
    parseGioHoangDao(gioText) {
        if (!gioText) return '';
        const cleanText = this.cleanHtmlTags(gioText);
        const hours = cleanText.split(',').map(h => h.trim()).filter(h => h);
        return hours.join(', ');
    }
    
    parseActivitiesFromStars(saoTot, saoXau) {
        const goodActivities = [];
        const badActivities = [];
        
        if (saoTot) {
            const cleanSaoTot = this.cleanHtmlTags(saoTot);
            
            if (cleanSaoTot.includes('Tốt mọi việc')) {
                goodActivities.push('Mọi việc đều thuận lợi');
            }
            if (cleanSaoTot.includes('cầu phúc') || cleanSaoTot.includes('tế tự')) {
                goodActivities.push('Cầu nguyện, thờ cúng, lễ bái');
            }
            if (cleanSaoTot.includes('Hoàng Đạo')) {
                goodActivities.push('Các việc quan trọng, khởi sự');
            }
            if (cleanSaoTot.includes('Thiên Đức') || cleanSaoTot.includes('Nguyệt Đức')) {
                goodActivities.push('Cưới hỏi, ăn hỏi');
                goodActivities.push('Khởi công xây dựng');
            }
            if (cleanSaoTot.includes('Thiên Ân')) {
                goodActivities.push('Khai trương, kinh doanh');
                goodActivities.push('Ký hợp đồng');
            }
            if (cleanSaoTot.includes('Thanh Long')) {
                goodActivities.push('Du lịch, xuất hành');
                goodActivities.push('Học tập, thi cử');
            }
        }
        
        if (saoXau) {
            const cleanSaoXau = this.cleanHtmlTags(saoXau);
            
            if (cleanSaoXau.includes('Xấu mọi việc')) {
                badActivities.push('Tránh các việc quan trọng');
            }
            if (cleanSaoXau.includes('Kị xây dựng') || cleanSaoXau.includes('Địa phá')) {
                badActivities.push('Khởi công xây dựng, động thổ');
            }
            if (cleanSaoXau.includes('Kị xuất hành') || cleanSaoXau.includes('Ngũ Quỷ')) {
                badActivities.push('Du lịch, xuất hành xa');
            }
            if (cleanSaoXau.includes('Kị giá thú') || cleanSaoXau.includes('Ly sàng') || cleanSaoXau.includes('Không phòng')) {
                badActivities.push('Cưới hỏi, ăn hỏi, lễ thành hôn');
            }
            if (cleanSaoXau.includes('Kị khởi tạo') || cleanSaoXau.includes('Ngũ hư')) {
                badActivities.push('Bắt đầu việc mới, khai trương');
            }
            if (cleanSaoXau.includes('Kị an táng') || cleanSaoXau.includes('mai táng xấu')) {
                badActivities.push('Tang lễ, an táng');
            }
        }
        
        return {
            good: goodActivities.length > 0 ? goodActivities : null,
            bad: badActivities.length > 0 ? badActivities : null
        };
    }
    
    parseNhiThapBatTu(nhiThapBatTu, luanNhiThapBatTu) {
        const goodActivities = [];
        const badActivities = [];
        
        if (nhiThapBatTu) {
            const text = this.cleanHtmlTags(nhiThapBatTu);
            
            if (text.includes('Tốt')) {
                if (text.includes('mai táng xấu')) {
                    goodActivities.push('Các việc tốt (trừ tang lễ)');
                    badActivities.push('Tang lễ, mai táng');
                } else {
                    goodActivities.push('Các việc theo 28 sao tú đều tốt');
                }
            }
            
            if (text.includes('Xấu') || text.includes('Hung')) {
                badActivities.push('Tránh các việc quan trọng theo 28 sao tú');
            }
        }
        
        if (luanNhiThapBatTu && luanNhiThapBatTu.title) {
            const title = this.cleanHtmlTags(luanNhiThapBatTu.title);
            
            if (title.includes('Tốt')) {
                if (title.includes('mai táng xấu') || title.includes('tang xấu')) {
                    goodActivities.push('Mọi việc tốt (trừ tang lễ)');
                    badActivities.push('Tang lễ, mai táng, việc tang');
                } else {
                    goodActivities.push('Mọi việc đều thuận lợi');
                }
            }
            
            if (title.includes('Xấu') || title.includes('Hung')) {
                badActivities.push('Tránh mọi việc quan trọng');
            }
        }
        
        return {
            good: goodActivities.length > 0 ? [...new Set(goodActivities)] : null,
            bad: badActivities.length > 0 ? [...new Set(badActivities)] : null
        };
    }
    
    generateAdvice(data) {
        let advice = '';
        
        const hoangDao = this.cleanHtmlTags(data.hoang_dao || '');
        const lucNhamDon = this.cleanHtmlTags(data.luc_nham_don || '');
        const thoiTiet = this.cleanHtmlTags(data.thoi_tiet || '');
        
        if (hoangDao.includes('Hoàng Đạo')) {
            advice += 'Hôm nay là ngày Hoàng Đạo, rất tốt cho các việc quan trọng. ';
        }
        
        if (lucNhamDon.includes('Cát')) {
            advice += 'Ngày có nhiều may mắn và thuận lợi. ';
        }
        
        if (thoiTiet) {
            advice += `Thời tiết hôm nay: ${thoiTiet.replace('Mùa Đông', 'mùa đông')}. `;
        }
        
        advice += 'Hãy tận dụng những giờ hoàng đạo để làm việc và tránh những việc không phù hợp trong ngày.';
        
        return advice || 'Hãy giữ tâm trạng tích cực và làm việc có kế hoạch trong ngày hôm nay.';
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