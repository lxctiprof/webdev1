// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="db01.html"><strong aria-hidden="true">1.</strong> 데이터베이스 개념</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="db01-practice01.html"><strong aria-hidden="true">1.1.</strong> 실습형 교재</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="quiz/db01-quiz.html"><strong aria-hidden="true">1.2.</strong> 복습문제</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="db02.html"><strong aria-hidden="true">2.</strong> postgreSQL과 SQL</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="quiz/db02-quiz.html"><strong aria-hidden="true">2.1.</strong> 복습문제</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="db03.html"><strong aria-hidden="true">3.</strong> 데이터 설계</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="db03-practice01.html"><strong aria-hidden="true">3.1.</strong> 실습형 교재</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="quiz/db03-quiz.html"><strong aria-hidden="true">3.2.</strong> 복습문제</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="db04.html"><strong aria-hidden="true">4.</strong> 데이터 활용</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="db05.html"><strong aria-hidden="true">5.</strong> 관계형 데이터베이스 설계 및 활용</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="db05-practice01.html"><strong aria-hidden="true">5.1.</strong> 실습형 교재</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="quiz/db05-quiz.html"><strong aria-hidden="true">5.2.</strong> 복습문제</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-intro/index.html"><strong aria-hidden="true">6.</strong> 공간정보와 공간 데이터베이스</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-intro/gis.html"><strong aria-hidden="true">6.1.</strong> GIS와 공간데이터 이해</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-intro/crs.html"><strong aria-hidden="true">6.2.</strong> 좌표계와 SRID</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-intro/postgis.html"><strong aria-hidden="true">6.3.</strong> PostGIS와 공간 데이터베이스</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-intro/quiz.html"><strong aria-hidden="true">6.4.</strong> 확인 퀴즈</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-qgis/index.html"><strong aria-hidden="true">7.</strong> QGIS와 PostGIS 연계</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-qgis/create.html"><strong aria-hidden="true">7.1.</strong> 공간 데이터베이스 생성</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-qgis/stack.html"><strong aria-hidden="true">7.2.</strong> PostGIS로 공간데이터 적재하기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-qgis/connect.html"><strong aria-hidden="true">7.3.</strong> QGIS로 공간데이터 적재하기</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-qgis/quiz.html"><strong aria-hidden="true">7.4.</strong> 확인 퀴즈</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-functions/index.html"><strong aria-hidden="true">8.</strong> PostGIS 공간함수</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-functions/geometry.html"><strong aria-hidden="true">8.1.</strong> 기하 데이터 생성 함수</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-functions/transform.html"><strong aria-hidden="true">8.2.</strong> 좌표계 함수</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-functions/measure.html"><strong aria-hidden="true">8.3.</strong> 측정 함수</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-functions/relations.html"><strong aria-hidden="true">8.4.</strong> 공간관계 함수</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-functions/join.html"><strong aria-hidden="true">8.5.</strong> 공간 JOIN</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-functions/quiz.html"><strong aria-hidden="true">8.6.</strong> 확인 퀴즈</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-example/index.html"><strong aria-hidden="true">9.</strong> 공간질의와 실용예제</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-example/prep.html"><strong aria-hidden="true">9.1.</strong> 준비·점검</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-example/partA.html"><strong aria-hidden="true">9.2.</strong> A. 기본: 좌표계·측정</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-example/partB.html"><strong aria-hidden="true">9.3.</strong> B. 공간관계 함수 비교</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-example/partC.html"><strong aria-hidden="true">9.4.</strong> C. 복합 문제</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-example/partD.html"><strong aria-hidden="true">9.5.</strong> D. 도전 과제와 정리</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);

