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
                name: 'Karl Marx',
                nameVi: 'Karl Marx',
                years: '1818 - 1883',
                image: 'images/marx.jpg',
                quote: 'Các triết gia chỉ giải thích thế giới theo nhiều cách khác nhau, vấn đề là thay đổi nó.',
                month: 4 // May - birth month
            },
            {
                name: 'Friedrich Engels',
                nameVi: 'Friedrich Engels', 
                years: '1820 - 1895',
                image: 'images/engels.jpg',
                quote: 'Kiến thức là khoa học về những quy luật chung nhất của tự nhiên, xã hội và tư duy.',
                month: 10 // November - birth month
            },
            {
                name: 'Vladimir Lenin',
                nameVi: 'Vladimir Lenin',
                years: '1870 - 1924', 
                image: 'images/lenin.jpg',
                quote: 'Không có lý luận cách mạng thì không có phong trào cách mạng.',
                month: 3 // April - birth month
            },
            {
                name: 'Hồ Chí Minh',
                nameVi: 'Hồ Chí Minh',
                years: '1890 - 1969',
                image: 'images/hochiminh.jpg', 
                quote: 'Không có gì quý hơn độc lập tự do.',
                month: 4 // May - birth month
            },
            {
                name: 'Georg Hegel',
                nameVi: 'Georg Hegel',
                years: '1770 - 1831',
                image: 'images/hegel.jpg',
                quote: 'Cái thực tế là cái hợp lý, và cái hợp lý là cái thực tế.',
                month: 7 // August - birth month
            },
            {
                name: 'Ludwig Feuerbach',
                nameVi: 'Ludwig Feuerbach', 
                years: '1804 - 1872',
                image: 'images/feuerbach.jpg',
                quote: 'Con người là cái mà con người ăn.',
                month: 6 // July - birth month
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
    }
    
    nextMonth() {
        this.currentMonth++;
        if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.renderCalendar();
        this.updatePhilosopher();
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
        document.getElementById('quoteText').textContent = philosopher.quote;
        document.getElementById('quoteAuthor').textContent = `— ${philosopher.nameVi}`;
        
        const imageElement = document.getElementById('philosopherImage');
        imageElement.src = philosopher.image;
        imageElement.alt = philosopher.nameVi;
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
}

// Initialize calendar when page loads
document.addEventListener('DOMContentLoaded', function() {
    new PhilosophyCalendar();
});