## MZ-AR-AR Refactoring

- 경기 메타버스 해커톤 결선

- <a href="https://mzarar.kro.kr/">배포 사이트 바로가기</a>

<br/>

### 파일 구조 설명 및 FE 작업 시 지켜야 할 규칙

- **public** 폴더 : 폴더 내부에 md 문서로 각 폴더 역할 정리해두었으니 참고

- <code>src/assets</code> : 유니티 에셋 개념. 역시 폴더 내부에 md 문서로 간략히 용도 정리해둠

- <code>src/components</code>: 네비게이션 바 같이 여러 페이지에 공통으로 사용할 컴포넌트 작성하는 공간

- <code>src/pages:</code>: 페이지들 모음
  폴더 별로 구분해 놓았으니 맞춰서 jsx 파일 생성하고 작업할 것
  **그렇게 하지 아니하면 벌을 받음.**

- <code>src/styles</code>: 모든 css에 적용되는 전역 (s)css 파일들 관리하는 폴더. pages에 jsx 파일 만들어서 작업한 후 scss 파일 만들 때 common 파일과 mixin 파일을 import 해주어함. **그렇개 하지 아니하면 벌을 받음.**  
  어떻게 import하는 지는 pages에 만들어둔 예제 파일 참고할 것!

  - <code>/common.scss</code>: 프로젝트에 공통적으로 적용할 CSS를 작성하는 곳
  - <code>/mixin.scss</code>: 일종의 템플릿 개념은 mixin을 모아두는 곳. mixin은 CSS를 편리하게 쓸 수 있도록 SCSS에서 제공하는 기능
  - <code>/reset.scss</code>: 브라우저에 의해 HTML에 자동으로 적용되는 스타일 (사용자 에이전트 스타일시트) 을 무시하도록 하는 코드
  - <code>/variables.scss</code>: CSS 전역 변수 선언해주는 곳. 보통 공통적으로 쓰일 색을 변수화 할 때 이용.

- index.jsx 파일은 건드리지 말 것.

- Router는 <code>react-router-dom</code>에서 제공하는 createBrowserRouter를 사용할 것임. 사용법은 구글링을 해보거나 내 TIL 참고. 모르면 질문 가능

  - 페이지 추가할 때마다 Router에 연결해주어야 하는데, <code>Router.jsx</code>파일에만 설정해주면 됨.

  - 이건 잘못해도 처벌 대상이 아니니 부담갖지 말고 작업할 것.

<br/>
