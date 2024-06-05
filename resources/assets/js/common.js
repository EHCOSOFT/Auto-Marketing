$(document).ready(function () {
    $("#header").append(Header());
    $("#footer").append(Footer());

    function Header() {
        return `
        <div class="container navbar-dark">
                <a href="#" class="navbar-brand">
                    <img src="img/logo.png" alt="Auto Marketing Logo">
                    <span>시간 절약과 최적의 마케팅<br>Auto Marketing</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <nav class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">사용법</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">요금제</a>
                        </li>
                        <li class="nav-item">
                            <button>LOGIN</button>
                        </li>
                    </ul>
                </nav>
            </div>`
    };

    function Footer() {
        return `
        <div class="container">
                <div class="footer-top">
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <a href="#">
                                <img src="img/logo-b.jpg" alt="Auto Marketing Logo">
                                <span>오토마케팅</span>
                            </a>
                        </div>
                        <div class="col-12 col-lg-8">
                            <p>Auto Marketing은 소규모 사업자들을 위한 AI 기반 마케팅 서비스입니다.<br>콘텐츠 생성부터 소셜 미디어 관리까지 자동으로 처리해 시간과 비용을 절약할
                                수 있습니다.<br><br>

                                마케팅은 오토마케팅에 맡겨주세요.<br>
                                이제 사업에만 신경 쓰세요.</p>
                            <button type="button" class="btn-kakao">고객센터 (카카오톡) 문의하기</button>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <p>Copyright © 2023. 유퍼스트 주식회사. All rights reserved.</p>
                        </div>
                        <div class="col-12 col-lg-6">
                            <ul class="footer-icon">
                                <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                                <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                                <li><a href="#"><i class="bi bi-linkedin"></i></a></li>
                                <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
    };

    // accordion
    $('.accordion-header').click(function() {
        var content = $(this).next('.accordion-content');

        // 모든 아코디언 내용을 닫기
        $('.accordion-content').not(content).css('max-height', 0);

        // 클릭한 내용 토글
        if (content.css('max-height') === '0px') {
            content.css('max-height', content.prop('scrollHeight') + 'px');
        } else {
            content.css('max-height', 0);
        }
    });
});

AOS.init();