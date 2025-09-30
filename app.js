// 시스템 데이터
const systemData = {
  systemOverview: {
    projectName: "남양주시 AI 딥러닝 기반 침수 감지 시스템",
    completionDate: "2026년 12월",
    authority: "행정안전부 공모사업",
    accuracy: "96%",
    techFeatures: ["하드웨어+소프트웨어 이중 안전장치", "딥러닝 기반 침수 예측", "4단계 경보 시스템", "완전 자동화 대응"]
  },
  locations: [
    {
      id: 1,
      type: "지하차도",
      name: "진관 지하차도",
      status: "정상",
      waterLevel: 0.2,
      alertLevel: "관심",
      lastUpdated: "2025-09-30T11:35:00"
    },
    {
      id: 2,
      type: "지하차도", 
      name: "도농동 중촌 지하차도",
      status: "정상",
      waterLevel: 0.1,
      alertLevel: "관심",
      lastUpdated: "2025-09-30T11:35:00"
    },
    {
      id: 3,
      type: "침수위험지역",
      name: "오남교 인근",
      status: "정상",
      waterLevel: 0.3,
      alertLevel: "관심",
      lastUpdated: "2025-09-30T11:35:00"
    },
    {
      id: 4,
      type: "침수위험지역",
      name: "진건읍 세월교",
      status: "정상",
      waterLevel: 0.4,
      alertLevel: "관심",
      lastUpdated: "2025-09-30T11:35:00"
    },
    {
      id: 5,
      type: "침수위험지역",
      name: "진접읍 오두교",
      status: "정상",
      waterLevel: 0.2,
      alertLevel: "관심",
      lastUpdated: "2025-09-30T11:35:00"
    },
    {
      id: 6,
      type: "침수위험도로",
      name: "진접읍 광릉수목원길",
      status: "정상",
      waterLevel: 0.1,
      alertLevel: "관심",
      lastUpdated: "2025-09-30T11:35:00"
    }
  ],
  hardwareComponents: [
    {
      name: "수위 센서",
      status: "정상",
      count: 12,
      operational: 12,
      icon: "fas fa-tint"
    },
    {
      name: "AI 기반 CCTV",
      status: "정상",
      count: 6,
      operational: 6,
      icon: "fas fa-video"
    },
    {
      name: "차량 차단기",
      status: "정상",
      count: 4,
      operational: 4,
      icon: "fas fa-ban"
    },
    {
      name: "전광판",
      status: "정상",
      count: 6,
      operational: 6,
      icon: "fas fa-sign"
    },
    {
      name: "방송 시설",
      status: "정상",
      count: 6,
      operational: 6,
      icon: "fas fa-broadcast-tower"
    },
    {
      name: "수위표",
      status: "정상",
      count: 6,
      operational: 6,
      icon: "fas fa-ruler-vertical"
    }
  ],
  softwareModules: [
    {
      name: "딥러닝 기반 침수 예측 알고리즘",
      status: "정상",
      accuracy: "96%",
      lastUpdated: "2025-09-30T11:30:00"
    },
    {
      name: "영상 기반 수위 측정 시스템",
      status: "정상",
      processingSpeed: "실시간",
      lastUpdated: "2025-09-30T11:30:00"
    },
    {
      name: "4단계 경보 시스템",
      status: "정상",
      currentLevel: "관심",
      lastUpdated: "2025-09-30T11:30:00"
    }
  ],
  recentAlerts: [
    {
      id: 1,
      timestamp: "2025-09-29T14:30:00",
      location: "진관 지하차도",
      level: "주의",
      action: "자동 문자 발송",
      resolved: true
    },
    {
      id: 2,
      timestamp: "2025-09-28T09:15:00", 
      location: "도농동 중촌 지하차도",
      level: "관심",
      action: "모니터링 강화",
      resolved: true
    },
    {
      id: 3,
      timestamp: "2025-09-27T16:45:00",
      location: "오남교 인근",
      level: "주의",
      action: "현장 점검 실시",
      resolved: true
    }
  ],
  weatherData: {
    temperature: "22°C",
    humidity: "65%",
    rainfall: "0mm/h",
    status: "맑음"
  },
  smartCityIntegration: {
    platformConnected: true,
    dataSharing: "실시간",
    connectedAgencies: ["경찰서", "소방서", "112", "119"]
  },
  automatedResponse: [
    {
      name: "자동 문자 발송",
      status: "활성",
      description: "담당자에게 예·경보 문자 즉시 전송"
    },
    {
      name: "CCTV 실시간 모니터링",
      status: "활성",
      description: "현장 상황 영상 확인"
    },
    {
      name: "차량 차단기 작동",
      status: "대기",
      description: "위험 지역 차량 진입 자동 차단"
    },
    {
      name: "전광판 경고",
      status: "대기",
      description: "운전자 대상 위험 안내"
    },
    {
      name: "자동 안내 방송",
      status: "대기",
      description: "지하차도 내 경고 방송"
    },
    {
      name: "유관기관 연계",
      status: "활성",
      description: "112, 119 등 긴급 대응기관 자동 신고"
    }
  ]
};

let currentMonitoringLocation = 1;
let alertsChart = null;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded - initializing dashboard');
  initializeApp();
});

// 앱 초기화 (로그인 없이 바로 대시보드 표시)
function initializeApp() {
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
  
  // 대시보드 즉시 초기화
  initializeDashboard();
  
  // 실시간 데이터 업데이트 시뮬레이션
  setInterval(simulateDataUpdate, 10000);
}

// 대시보드 초기화
function initializeDashboard() {
  console.log('Initializing dashboard');
  renderOverviewTab();
  renderMonitoringTab();
  renderSystemTab();
  renderAlertsTab();
}

// 현재 시간 업데이트
function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  const timeElement = document.getElementById('currentTime');
  if (timeElement) {
    timeElement.textContent = timeString;
  }
  
  const lastUpdateElement = document.getElementById('lastUpdate');
  if (lastUpdateElement) {
    lastUpdateElement.textContent = timeString;
  }
}

// 탭 전환
function showTab(tabName) {
  console.log('Switching to tab:', tabName);
  
  // 모든 탭 비활성화
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // 선택된 탭 활성화
  const targetTab = document.getElementById(tabName + 'Tab');
  const targetBtn = document.querySelector(`[onclick*="showTab('${tabName}')"]`);
  
  if (targetTab) {
    targetTab.classList.add('active');
    console.log('Tab activated:', tabName);
  }
  
  if (targetBtn) {
    targetBtn.classList.add('active');
    console.log('Button activated for tab:', tabName);
  }
  
  // 차트가 포함된 탭이 활성화된 경우 차트 재렌더링
  if (tabName === 'alerts') {
    setTimeout(() => {
      renderAlertsChart();
    }, 100);
  }
}

// 전체 현황 탭 렌더링
function renderOverviewTab() {
  console.log('Rendering overview tab');
  renderLocationsGrid();
  renderHardwareGrid();
  renderRecentAlerts();
}

// 설치 위치 그리드 렌더링
function renderLocationsGrid() {
  const container = document.getElementById('locationsGrid');
  if (!container) return;
  
  console.log('Rendering locations grid');
  container.innerHTML = '';
  
  systemData.locations.forEach(location => {
    const locationItem = document.createElement('div');
    locationItem.className = 'location-item fade-in';
    
    const alertClass = getAlertClass(location.alertLevel);
    
    locationItem.innerHTML = `
      <div class="location-header">
        <span class="location-name">${location.name}</span>
        <span class="location-type">${location.type}</span>
      </div>
      <div class="location-stats">
        <span>수위: ${location.waterLevel}m</span>
        <span class="${alertClass}">${location.alertLevel}</span>
      </div>
      <div class="location-stats">
        <span>상태: ${location.status}</span>
        <span>${formatTime(location.lastUpdated)}</span>
      </div>
    `;
    
    container.appendChild(locationItem);
  });
}

// 하드웨어 그리드 렌더링
function renderHardwareGrid() {
  const container = document.getElementById('hardwareGrid');
  if (!container) return;
  
  console.log('Rendering hardware grid');
  container.innerHTML = '';
  
  systemData.hardwareComponents.forEach(component => {
    const hardwareItem = document.createElement('div');
    hardwareItem.className = 'hardware-item fade-in';
    
    hardwareItem.innerHTML = `
      <div class="hardware-icon">
        <i class="${component.icon}"></i>
      </div>
      <div class="hardware-name">${component.name}</div>
      <div class="hardware-status">
        <span>${component.operational}/${component.count}</span>
        <span class="status--success">${component.status}</span>
      </div>
    `;
    
    container.appendChild(hardwareItem);
  });
}

// 최근 경보 렌더링
function renderRecentAlerts() {
  const container = document.getElementById('recentAlerts');
  if (!container) return;
  
  console.log('Rendering recent alerts');
  container.innerHTML = '';
  
  systemData.recentAlerts.forEach(alert => {
    const alertItem = document.createElement('div');
    alertItem.className = 'alert-item fade-in';
    
    const levelClass = alert.level === '주의' ? 'caution' : 'attention';
    
    alertItem.innerHTML = `
      <div class="alert-info">
        <span class="alert-location">${alert.location}</span>
        <span class="alert-time">${formatTime(alert.timestamp)}</span>
      </div>
      <div class="alert-level ${levelClass}">${alert.level}</div>
    `;
    
    container.appendChild(alertItem);
  });
}

// 실시간 모니터링 탭 렌더링
function renderMonitoringTab() {
  console.log('Rendering monitoring tab');
  renderLocationTabs();
  renderMonitoringContent();
}

// 위치 탭 렌더링
function renderLocationTabs() {
  const container = document.getElementById('locationTabs');
  if (!container) return;
  
  console.log('Rendering location tabs');
  container.innerHTML = '';
  
  systemData.locations.forEach(location => {
    const tab = document.createElement('button');
    tab.className = `location-tab ${location.id === currentMonitoringLocation ? 'active' : ''}`;
    tab.onclick = () => selectMonitoringLocation(location.id);
    tab.textContent = location.name;
    
    container.appendChild(tab);
  });
}

// 모니터링 위치 선택
function selectMonitoringLocation(locationId) {
  console.log('Selecting monitoring location:', locationId);
  currentMonitoringLocation = locationId;
  renderLocationTabs();
  renderMonitoringContent();
}

// 모니터링 컨텐츠 렌더링
function renderMonitoringContent() {
  const container = document.getElementById('monitoringContent');
  if (!container) return;
  
  const location = systemData.locations.find(loc => loc.id === currentMonitoringLocation);
  if (!location) return;
  
  console.log('Rendering monitoring content for:', location.name);
  
  container.innerHTML = `
    <div class="monitoring-detail fade-in">
      <h3><i class="fas fa-tint"></i> ${location.name} - 실시간 수위</h3>
      <div class="water-level-gauge">
        <div class="gauge-value">${location.waterLevel}</div>
        <div class="gauge-unit">미터</div>
      </div>
      <div class="status status--${getStatusClass(location.alertLevel)}">
        현재 경보 단계: ${location.alertLevel}
      </div>
      <div class="cctv-simulation">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
          <i class="fas fa-video" style="font-size: 48px;"></i>
          <p>CCTV 영상 분석 중...</p>
        </div>
      </div>
    </div>
    
    <div class="monitoring-detail fade-in">
      <h3><i class="fas fa-cogs"></i> 자동 대응 시스템</h3>
      <div class="auto-response">
        <div class="response-item">
          <div class="response-icon"><i class="fas fa-sms"></i></div>
          <div>문자 발송</div>
          <div class="status--success">대기</div>
        </div>
        <div class="response-item">
          <div class="response-icon"><i class="fas fa-ban"></i></div>
          <div>차량 차단기</div>
          <div class="status--success">대기</div>
        </div>
        <div class="response-item">
          <div class="response-icon"><i class="fas fa-sign"></i></div>
          <div>전광판</div>
          <div class="status--success">정상</div>
        </div>
        <div class="response-item">
          <div class="response-icon"><i class="fas fa-broadcast-tower"></i></div>
          <div>방송 시설</div>
          <div class="status--success">정상</div>
        </div>
      </div>
      
      <div style="margin-top: 20px;">
        <h4>AI 분석 결과</h4>
        <div style="background: var(--color-bg-1); padding: 15px; border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>침수 위험도:</span>
            <span class="status--success">낮음 (5%)</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>예측 정확도:</span>
            <span class="status--success">96%</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span>다음 업데이트:</span>
            <span>30초 후</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 시스템 상태 탭 렌더링
function renderSystemTab() {
  console.log('Rendering system tab');
  renderSystemHardware();
  renderSystemSoftware();
}

// 시스템 하드웨어 렌더링
function renderSystemHardware() {
  const container = document.getElementById('systemHardware');
  if (!container) return;
  
  console.log('Rendering system hardware');
  container.innerHTML = '';
  
  systemData.hardwareComponents.forEach(component => {
    const item = document.createElement('div');
    item.className = 'component-item fade-in';
    
    item.innerHTML = `
      <div class="component-info">
        <div class="component-name">
          <i class="${component.icon}"></i> ${component.name}
        </div>
        <div class="component-details">
          운영 중: ${component.operational}/${component.count}개
        </div>
      </div>
      <div class="status status--success">${component.status}</div>
    `;
    
    container.appendChild(item);
  });
}

// 시스템 소프트웨어 렌더링
function renderSystemSoftware() {
  const container = document.getElementById('systemSoftware');
  if (!container) return;
  
  console.log('Rendering system software');
  container.innerHTML = '';
  
  systemData.softwareModules.forEach(module => {
    const item = document.createElement('div');
    item.className = 'component-item fade-in';
    
    const details = module.accuracy ? `정확도: ${module.accuracy}` : 
                   module.processingSpeed ? `처리 속도: ${module.processingSpeed}` :
                   `현재 단계: ${module.currentLevel}`;
    
    item.innerHTML = `
      <div class="component-info">
        <div class="component-name">
          <i class="fas fa-code"></i> ${module.name}
        </div>
        <div class="component-details">${details}</div>
      </div>
      <div class="status status--success">${module.status}</div>
    `;
    
    container.appendChild(item);
  });
}

// 경보 이력 탭 렌더링
function renderAlertsTab() {
  console.log('Rendering alerts tab');
  setTimeout(() => {
    renderAlertsChart();
  }, 100);
  renderAlertHistory();
}

// 경보 통계 차트 렌더링
function renderAlertsChart() {
  const canvas = document.getElementById('alertsChart');
  if (!canvas) return;
  
  console.log('Rendering alerts chart');
  const ctx = canvas.getContext('2d');
  
  if (alertsChart) {
    alertsChart.destroy();
  }
  
  alertsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
      datasets: [{
        label: '관심',
        data: [5, 3, 8, 2, 6, 4],
        backgroundColor: '#1FB8CD'
      }, {
        label: '주의',
        data: [2, 1, 3, 1, 2, 1],
        backgroundColor: '#FFC185'
      }, {
        label: '경계',
        data: [0, 0, 1, 0, 0, 0],
        backgroundColor: '#B4413C'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#f5f5f5'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#f5f5f5'
          },
          grid: {
            color: '#626c6c'
          }
        },
        y: {
          ticks: {
            color: '#f5f5f5'
          },
          grid: {
            color: '#626c6c'
          }
        }
      }
    }
  });
}

// 경보 이력 렌더링
function renderAlertHistory() {
  const container = document.getElementById('alertHistory');
  if (!container) return;
  
  console.log('Rendering alert history');
  container.innerHTML = '';
  
  // 확장된 경보 이력 데이터
  const extendedAlerts = [
    ...systemData.recentAlerts,
    {
      id: 4,
      timestamp: "2025-09-26T11:20:00",
      location: "진접읍 광릉수목원길",
      level: "관심",
      action: "모니터링 강화",
      resolved: true
    },
    {
      id: 5,
      timestamp: "2025-09-25T16:45:00",
      location: "진건읍 세월교",
      level: "주의",
      action: "전광판 경고 표시",
      resolved: true
    }
  ];
  
  extendedAlerts.forEach(alert => {
    const item = document.createElement('div');
    item.className = 'alert-history-item fade-in';
    
    const levelClass = alert.level === '주의' ? 'warning' : 
                      alert.level === '경계' ? 'error' : 'info';
    
    item.innerHTML = `
      <div>
        <div style="font-weight: 500;">${alert.location}</div>
        <div style="font-size: 12px; color: var(--color-text-secondary);">
          ${formatTime(alert.timestamp)}
        </div>
      </div>
      <div style="text-align: center;">
        <div class="status status--${levelClass}">${alert.level}</div>
      </div>
      <div style="text-align: right;">
        <div style="font-size: 12px;">${alert.action}</div>
        <div style="font-size: 10px; color: var(--color-success);">
          ${alert.resolved ? '해결됨' : '진행중'}
        </div>
      </div>
    `;
    
    container.appendChild(item);
  });
}

// 실시간 데이터 업데이트 시뮬레이션
function simulateDataUpdate() {
  // 랜덤하게 수위 데이터 업데이트
  systemData.locations.forEach(location => {
    const variation = (Math.random() - 0.5) * 0.1;
    location.waterLevel = Math.max(0, Math.min(2, location.waterLevel + variation));
    location.waterLevel = Math.round(location.waterLevel * 10) / 10;
    
    // 경보 단계 업데이트
    if (location.waterLevel < 0.3) {
      location.alertLevel = "관심";
    } else if (location.waterLevel < 0.6) {
      location.alertLevel = "주의";
    } else if (location.waterLevel < 0.9) {
      location.alertLevel = "경계";
    } else {
      location.alertLevel = "심각";
    }
    
    location.lastUpdated = new Date().toISOString();
  });
  
  // UI 업데이트
  const activeTab = document.querySelector('.tab-content.active');
  if (activeTab && activeTab.id === 'overviewTab') {
    renderLocationsGrid();
  } else if (activeTab && activeTab.id === 'monitoringTab') {
    renderMonitoringContent();
  }
  
  // 경보 발생 시뮬레이션 (낮은 확률로)
  const highRiskLocation = systemData.locations.find(loc => loc.waterLevel > 0.7);
  if (highRiskLocation && Math.random() < 0.05) {
    showAlertModal(highRiskLocation);
  }
}

// 경보 모달 표시
function showAlertModal(location) {
  const modal = document.getElementById('alertModal');
  const modalBody = document.getElementById('alertModalBody');
  
  if (!modal || !modalBody) return;
  
  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <i class="fas fa-exclamation-triangle" style="font-size: 48px; color: var(--color-error);"></i>
    </div>
    <div style="margin-bottom: 15px;">
      <strong>위치:</strong> ${location.name}
    </div>
    <div style="margin-bottom: 15px;">
      <strong>현재 수위:</strong> ${location.waterLevel}m
    </div>
    <div style="margin-bottom: 15px;">
      <strong>경보 단계:</strong> 
      <span class="status status--${getStatusClass(location.alertLevel)}">${location.alertLevel}</span>
    </div>
    <div style="margin-bottom: 20px;">
      <strong>자동 대응:</strong> 담당자 문자 발송, CCTV 모니터링 강화
    </div>
    <button class="btn btn--primary btn--full-width" onclick="closeAlertModal()">
      확인
    </button>
  `;
  
  modal.classList.remove('hidden');
}

// 경보 모달 닫기
function closeAlertModal() {
  const modal = document.getElementById('alertModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// 유틸리티 함수들
function getAlertClass(level) {
  switch(level) {
    case '관심': return 'status--info';
    case '주의': return 'status--warning';
    case '경계': return 'status--error';
    case '심각': return 'status--error';
    default: return 'status--info';
  }
}

function getStatusClass(level) {
  switch(level) {
    case '관심': return 'info';
    case '주의': return 'warning';
    case '경계': return 'error';
    case '심각': return 'error';
    default: return 'info';
  }
}

function formatTime(timeString) {
  const date = new Date(timeString);
  return date.toLocaleString('ko-KR', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}