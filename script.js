// 广州抑郁症检查信息网 - 主要脚本文件

// 医院数据
const hospitalData = [
    {
        id: '1',
        name: '广州医科大学附属脑科医院',
        address: '广州市荔湾区芳村明心路36号',
        district: '荔湾区',
        phone: '020-81891425',
        departments: ['精神科', '心理科', '睡眠医学科'],
        level: '三甲',
        specialties: ['抑郁症诊疗', '焦虑症治疗', '睡眠障碍'],
        description: '专业精神科医院，抑郁症诊疗经验丰富，设备先进，医生团队专业。'
    },
    {
        id: '2',
        name: '中山大学附属第三医院',
        address: '广州市天河区天河路600号',
        district: '天河区',
        phone: '020-85253333',
        departments: ['精神心理科', '神经内科'],
        level: '三甲',
        specialties: ['抑郁症', '焦虑症', '双相情感障碍'],
        description: '综合性三甲医院，设有精神心理科，擅长抑郁症、焦虑症等心理疾病诊疗。'
    },
    {
        id: '3',
        name: '广州市脑科医院',
        address: '广州市荔湾区明心路36号',
        district: '荔湾区',
        phone: '020-81891425',
        departments: ['精神科', '心理咨询科'],
        level: '三甲',
        specialties: ['抑郁症', '精神分裂症', '心理咨询'],
        description: '专业精神卫生医疗机构，提供抑郁症全程诊疗服务。'
    },
    {
        id: '4',
        name: '南方医科大学南方医院',
        address: '广州市白云区广州大道北1838号',
        district: '白云区',
        phone: '020-61641888',
        departments: ['精神心理科', '心理咨询中心'],
        level: '三甲',
        specialties: ['抑郁症', '焦虑症', '心理治疗'],
        description: '设有精神心理科和心理咨询中心，提供药物治疗和心理治疗相结合的综合服务。'
    },
    {
        id: '5',
        name: '广东省人民医院',
        address: '广州市越秀区中山二路106号',
        district: '越秀区',
        phone: '020-83827812',
        departments: ['精神科', '心理科'],
        level: '三甲',
        specialties: ['抑郁症', '焦虑症', '强迫症'],
        description: '省级三甲医院，精神科实力雄厚，诊疗设备完善。'
    },
    {
        id: '6',
        name: '广州白云心理医院',
        address: '广州市白云区白云大道北1722号',
        district: '白云区',
        phone: '020-22252201',
        departments: ['心理科', '精神科'],
        level: '专科',
        specialties: ['抑郁症', '心理咨询', '心理治疗'],
        description: '专业心理医院，专注于心理健康服务，环境舒适，治疗方法多样。'
    }
];

// 自测问卷题目
const testQuestions = [
    {
        id: 1,
        text: '在过去两周内，您是否经常感到情绪低落、沮丧或绝望？',
        options: [
            { value: 0, text: '完全没有' },
            { value: 1, text: '偶尔有' },
            { value: 2, text: '经常有' },
            { value: 3, text: '几乎每天都有' }
        ]
    },
    {
        id: 2,
        text: '在过去两周内，您是否对平时感兴趣的活动失去兴趣或乐趣？',
        options: [
            { value: 0, text: '完全没有' },
            { value: 1, text: '轻微失去兴趣' },
            { value: 2, text: '明显失去兴趣' },
            { value: 3, text: '完全失去兴趣' }
        ]
    },
    {
        id: 3,
        text: '在过去两周内，您是否有睡眠问题（难以入睡、早醒或睡眠过多）？',
        options: [
            { value: 0, text: '睡眠正常' },
            { value: 1, text: '轻微睡眠问题' },
            { value: 2, text: '明显睡眠问题' },
            { value: 3, text: '严重睡眠问题' }
        ]
    },
    {
        id: 4,
        text: '在过去两周内，您是否感到疲劳或精力不足？',
        options: [
            { value: 0, text: '精力充沛' },
            { value: 1, text: '偶尔疲劳' },
            { value: 2, text: '经常疲劳' },
            { value: 3, text: '持续疲劳' }
        ]
    },
    {
        id: 5,
        text: '在过去两周内，您的食欲是否发生变化？',
        options: [
            { value: 0, text: '食欲正常' },
            { value: 1, text: '轻微变化' },
            { value: 2, text: '明显变化' },
            { value: 3, text: '严重变化' }
        ]
    },
    {
        id: 6,
        text: '在过去两周内，您是否感到自己毫无价值或过分自责？',
        options: [
            { value: 0, text: '完全没有' },
            { value: 1, text: '偶尔有' },
            { value: 2, text: '经常有' },
            { value: 3, text: '几乎每天都有' }
        ]
    },
    {
        id: 7,
        text: '在过去两周内，您是否难以集中注意力或做决定？',
        options: [
            { value: 0, text: '注意力正常' },
            { value: 1, text: '轻微困难' },
            { value: 2, text: '明显困难' },
            { value: 3, text: '严重困难' }
        ]
    },
    {
        id: 8,
        text: '在过去两周内，您的动作或说话是否比平时缓慢？',
        options: [
            { value: 0, text: '完全正常' },
            { value: 1, text: '轻微缓慢' },
            { value: 2, text: '明显缓慢' },
            { value: 3, text: '严重缓慢' }
        ]
    },
    {
        id: 9,
        text: '在过去两周内，您是否有过伤害自己或结束生命的想法？',
        options: [
            { value: 0, text: '完全没有' },
            { value: 1, text: '偶尔想过' },
            { value: 2, text: '经常想到' },
            { value: 3, text: '有具体计划' }
        ]
    }
];

// 主应用类
class App {
    constructor() {
        this.hospitalSearch = new HospitalSearch();
        this.selfTest = new SelfTest();
        this.navigationManager = new NavigationManager();
        this.currentHospitals = [...hospitalData];
    }

    async init() {
        this.bindEventListeners();
        this.hospitalSearch.init(hospitalData);
        this.selfTest.init(testQuestions);
        this.navigationManager.init();
        
        // 默认显示医院查询页面
        this.navigationManager.switchTab('hospitals');
    }

    bindEventListeners() {
        // 全局搜索
        const globalSearch = document.getElementById('globalSearch');
        if (globalSearch) {
            globalSearch.addEventListener('input', (e) => {
                this.hospitalSearch.searchHospitals(e.target.value);
            });
        }

        // 导航链接点击
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href').substring(1);
                this.navigationManager.switchTab(target);
            });
        });

        // 首页按钮点击
        window.scrollToSection = (sectionId) => {
            this.navigationManager.switchTab(sectionId);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        };

        // 重新测试函数
        window.restartTest = () => {
            this.selfTest.restart();
        };
    }
}

// 医院搜索类
class HospitalSearch {
    constructor() {
        this.hospitals = [];
        this.filteredHospitals = [];
    }

    init(hospitalData) {
        this.hospitals = hospitalData;
        this.filteredHospitals = [...hospitalData];
        this.bindSearchEvents();
        this.renderHospitalList();
    }

    bindSearchEvents() {
        const searchInput = document.getElementById('hospitalSearch');
        const districtFilter = document.getElementById('districtFilter');
        const levelFilter = document.getElementById('levelFilter');

        if (searchInput) {
            searchInput.addEventListener('input', () => this.applyFilters());
        }
        if (districtFilter) {
            districtFilter.addEventListener('change', () => this.applyFilters());
        }
        if (levelFilter) {
            levelFilter.addEventListener('change', () => this.applyFilters());
        }
    }

    async searchHospitals(keyword) {
        if (!keyword.trim()) {
            this.filteredHospitals = [...this.hospitals];
        } else {
            this.filteredHospitals = this.hospitals.filter(hospital =>
                hospital.name.toLowerCase().includes(keyword.toLowerCase()) ||
                hospital.address.toLowerCase().includes(keyword.toLowerCase()) ||
                hospital.specialties.some(specialty => 
                    specialty.toLowerCase().includes(keyword.toLowerCase())
                )
            );
        }
        this.renderHospitalList();
        return this.filteredHospitals;
    }

    filterByDistrict(district) {
        if (!district) return this.hospitals;
        return this.hospitals.filter(hospital => hospital.district === district);
    }

    filterByLevel(level) {
        if (!level) return this.hospitals;
        return this.hospitals.filter(hospital => hospital.level === level);
    }

    applyFilters() {
        const keyword = document.getElementById('hospitalSearch')?.value || '';
        const district = document.getElementById('districtFilter')?.value || '';
        const level = document.getElementById('levelFilter')?.value || '';

        let filtered = [...this.hospitals];

        // 关键词搜索
        if (keyword.trim()) {
            filtered = filtered.filter(hospital =>
                hospital.name.toLowerCase().includes(keyword.toLowerCase()) ||
                hospital.address.toLowerCase().includes(keyword.toLowerCase()) ||
                hospital.specialties.some(specialty => 
                    specialty.toLowerCase().includes(keyword.toLowerCase())
                )
            );
        }

        // 地区筛选
        if (district) {
            filtered = filtered.filter(hospital => hospital.district === district);
        }

        // 等级筛选
        if (level) {
            filtered = filtered.filter(hospital => hospital.level === level);
        }

        this.filteredHospitals = filtered;
        this.renderHospitalList();
    }

    renderHospitalList() {
        const container = document.getElementById('hospitalList');
        if (!container) return;

        if (this.filteredHospitals.length === 0) {
            container.innerHTML = `
                <div class="col-span-full no-results">
                    <i class="fas fa-search"></i>
                    <h3 class="text-xl font-semibold mb-2">未找到匹配的医院</h3>
                    <p>请尝试调整搜索条件或筛选选项</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.filteredHospitals.map(hospital => `
            <div class="card hospital-card bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <div class="card-body">
                    <div class="flex justify-between items-start mb-3">
                        <h3 class="card-title text-lg text-primary">${hospital.name}</h3>
                        <span class="hospital-level ${hospital.level}">${hospital.level}</span>
                    </div>
                    
                    <div class="space-y-2 text-sm">
                        <div class="flex items-center text-gray-600">
                            <i class="fas fa-map-marker-alt mr-2 text-primary"></i>
                            ${hospital.address}
                        </div>
                        <div class="flex items-center text-gray-600">
                            <i class="fas fa-phone mr-2 text-primary"></i>
                            ${hospital.phone}
                        </div>
                        <div class="flex items-start text-gray-600">
                            <i class="fas fa-stethoscope mr-2 text-primary mt-1"></i>
                            <div>
                                <div class="font-semibold">科室：</div>
                                <div>${hospital.departments.join('、')}</div>
                            </div>
                        </div>
                        <div class="flex items-start text-gray-600">
                            <i class="fas fa-star mr-2 text-primary mt-1"></i>
                            <div>
                                <div class="font-semibold">专长：</div>
                                <div>${hospital.specialties.join('、')}</div>
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-sm text-gray-600 mt-3 leading-relaxed">${hospital.description}</p>
                    
                    <div class="card-actions justify-end mt-4">
                        <button class="btn btn-primary btn-sm" onclick="window.open('tel:${hospital.phone}')">
                            <i class="fas fa-phone mr-1"></i>
                            电话咨询
                        </button>
                        <button class="btn btn-outline btn-sm" onclick="window.open('https://maps.baidu.com/search/${encodeURIComponent(hospital.address)}')">
                            <i class="fas fa-map mr-1"></i>
                            查看地图
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// 自测问卷类
class SelfTest {
    constructor() {
        this.questions = [];
        this.answers = [];
        this.currentQuestion = 0;
    }

    init(questions) {
        this.questions = questions;
        this.answers = new Array(questions.length).fill(null);
        this.bindTestEvents();
        this.renderCurrentQuestion();
        this.updateProgress();
    }

    bindTestEvents() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousQuestion());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitTest());
        }
    }

    recordAnswer(questionId, value) {
        this.answers[questionId - 1] = value;
        this.updateNavigationButtons();
        this.updateProgress();
    }

    renderCurrentQuestion() {
        const container = document.getElementById('questionContainer');
        if (!container || !this.questions[this.currentQuestion]) return;

        const question = this.questions[this.currentQuestion];
        const currentAnswer = this.answers[this.currentQuestion];

        container.innerHTML = `
            <div class="question-card card bg-base-50 p-6">
                <h3 class="text-lg font-semibold mb-4 text-primary">
                    问题 ${this.currentQuestion + 1}/${this.questions.length}
                </h3>
                <p class="text-base mb-6 leading-relaxed">${question.text}</p>
                
                <div class="space-y-3">
                    ${question.options.map(option => `
                        <label class="option-label ${currentAnswer === option.value ? 'selected' : ''}">
                            <input type="radio" 
                                   name="question_${question.id}" 
                                   value="${option.value}"
                                   class="option-radio"
                                   ${currentAnswer === option.value ? 'checked' : ''}
                                   onchange="app.selfTest.recordAnswer(${question.id}, ${option.value})">
                            ${option.text}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;

        // 重新绑定选项点击事件
        container.querySelectorAll('.option-label').forEach(label => {
            label.addEventListener('click', () => {
                // 移除所有选中状态
                container.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
                // 添加当前选中状态
                label.classList.add('selected');
            });
        });
    }

    updateProgress() {
        const progress = document.getElementById('testProgress');
        const progressText = document.getElementById('progressText');
        
        const answeredCount = this.answers.filter(answer => answer !== null).length;
        
        if (progress) {
            progress.value = answeredCount;
        }
        if (progressText) {
            progressText.textContent = `${answeredCount}/${this.questions.length}`;
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) {
            prevBtn.disabled = this.currentQuestion === 0;
        }

        const isLastQuestion = this.currentQuestion === this.questions.length - 1;
        const allAnswered = this.answers.every(answer => answer !== null);

        if (nextBtn && submitBtn) {
            if (isLastQuestion) {
                nextBtn.classList.add('hidden');
                submitBtn.classList.remove('hidden');
                submitBtn.disabled = !allAnswered;
            } else {
                nextBtn.classList.remove('hidden');
                submitBtn.classList.add('hidden');
                nextBtn.disabled = this.answers[this.currentQuestion] === null;
            }
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderCurrentQuestion();
            this.updateNavigationButtons();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1 && this.answers[this.currentQuestion] !== null) {
            this.currentQuestion++;
            this.renderCurrentQuestion();
            this.updateNavigationButtons();
        }
    }

    calculateScore() {
        return this.answers.reduce((sum, answer) => sum + (answer || 0), 0);
    }

    generateResult() {
        const score = this.calculateScore();
        let level, suggestion, levelClass;

        if (score <= 4) {
            level = '正常范围';
            levelClass = 'normal';
            suggestion = '您的心理状态处于正常范围内。继续保持良好的生活习惯，注意劳逸结合，如有任何心理困扰，可随时寻求专业帮助。';
        } else if (score <= 9) {
            level = '轻度抑郁倾向';
            levelClass = 'mild';
            suggestion = '您可能存在轻度的抑郁倾向。建议您关注自己的情绪变化，适当调整生活节奏，增加运动和社交活动。如症状持续，建议咨询专业医生。';
        } else if (score <= 14) {
            level = '中度抑郁倾向';
            levelClass = 'moderate';
            suggestion = '您可能存在中度的抑郁倾向。强烈建议您尽快寻求专业医生的帮助，进行详细的心理评估和诊断。同时，保持规律作息，寻求家人朋友的支持。';
        } else {
            level = '重度抑郁倾向';
            levelClass = 'severe';
            suggestion = '您的测试结果显示可能存在较严重的抑郁倾向。请立即寻求专业医生的帮助，不要独自承受。抑郁症是可以治疗的疾病，及时的专业干预非常重要。';
        }

        return { score, level, suggestion, levelClass };
    }

    submitTest() {
        const result = this.generateResult();
        this.showResult(result);
    }

    showResult(result) {
        const modal = document.getElementById('resultModal');
        const content = document.getElementById('resultContent');
        
        if (!modal || !content) return;

        content.innerHTML = `
            <div class="text-center mb-6">
                <div class="result-score text-primary">${result.score}</div>
                <div class="result-level ${result.levelClass}">${result.level}</div>
            </div>
            
            <div class="alert alert-info mb-4">
                <i class="fas fa-lightbulb"></i>
                <div>
                    <h4 class="font-bold">建议</h4>
                    <p class="text-sm">${result.suggestion}</p>
                </div>
            </div>
            
            <div class="alert alert-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <div>
                    <h4 class="font-bold">重要提醒</h4>
                    <p class="text-sm">此测试结果仅供参考，不能替代专业医生的诊断。如果您感到困扰或症状持续，请及时寻求专业医疗帮助。</p>
                </div>
            </div>
            
            ${result.score > 4 ? `
                <div class="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 class="font-bold text-primary mb-2">推荐就医</h4>
                    <p class="text-sm mb-3">根据您的测试结果，建议您咨询以下专业医院：</p>
                    <div class="space-y-2 text-sm">
                        <div>• 广州医科大学附属脑科医院 - 020-81891425</div>
                        <div>• 中山大学附属第三医院 - 020-85253333</div>
                        <div>• 南方医科大学南方医院 - 020-61641888</div>
                    </div>
                </div>
            ` : ''}
        `;

        modal.showModal();
    }

    restart() {
        this.answers = new Array(this.questions.length).fill(null);
        this.currentQuestion = 0;
        this.renderCurrentQuestion();
        this.updateProgress();
        this.updateNavigationButtons();
        
        const modal = document.getElementById('resultModal');
        if (modal) {
            modal.close();
        }
    }
}

// 导航管理类
class NavigationManager {
    constructor() {
        this.currentTab = 'hospitals';
    }

    init() {
        this.bindTabEvents();
    }

    bindTabEvents() {
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = tab.getAttribute('data-tab');
                this.switchTab(tabName);
            });
        });
    }

    switchTab(tabName) {
        // 更新标签状态
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('tab-active');
            if (tab.getAttribute('data-tab') === tabName) {
                tab.classList.add('tab-active');
            }
        });

        // 显示对应内容
        this.showContent(tabName);
        this.currentTab = tabName;
    }

    showContent(contentId) {
        // 隐藏所有内容
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // 显示目标内容
        const targetContent = document.getElementById(contentId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }

    updateNavigation() {
        // 更新导航状态的辅助方法
        const activeTab = document.querySelector('.tab.tab-active');
        if (activeTab) {
            const tabName = activeTab.getAttribute('data-tab');
            this.showContent(tabName);
        }
    }
}

// 初始化应用
const app = new App();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// 导出到全局作用域供HTML调用
window.app = app;