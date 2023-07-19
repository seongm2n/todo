# Project

> 두 가지 모드를 선택할 수 있는 To-do 리스트 애플리케이션이다. 두 버전은 "다크 모드"과 "라이트 모드"으로 나뉘며, 사용자는 할 일 목록을 작성할 수 있습니다. 이렇게 작성된 할 일 목록은 로컬 스토리지에 저장되어, 웹페이지를 새로고침하거나 브라우저를 종료해도 추가한 할 일 목록이 그대로 유지된다.

![todo](https://github.com/seongm2n/todo/assets/62044613/9d3b4d01-0e54-4c65-8661-35c83ff09f50)

---

### Stacks

<p>
<img src="https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&color=61DAFB">
<img src="https://img.shields.io/badge/Stlye-PostCSS-informational?style=flat&logo=postcss&color=DD3A0A"> 
<img src="https://img.shields.io/badge/Library-React qurey-informational?style=flat&logo=reactquery&color=FF4154">

<br>
<img src="https://img.shields.io/badge/Tool-Figma-informational?style=flat&logo=Figma&color=df4f25">
<img src="https://img.shields.io/badge/Tool-Visual Studio Code-informational?style=flat&logo=visualstudiocode&color=007ACC">
</p>

### Planning

- 다크, 라이트 두가지 모드 지원
- 할일목록을 등록했을 때 버튼을 누르지 않더라도 키보드 Enter 한번으로 동록가능
- All, Active, Done으로 나눠서 "하는 중"이라면 Active로, "완료"했다면 Done으로 필터링
- 새로고침 했을 시 지워지지 않게 localStorage에 할일 목록 저장
- 아이템 추가
- 아이템 삭제
- 체크박스 했을 시 텍스트 위 줄 긋기

### Development

- Yarn으로 CRA구성
- 다크모드 구현할 때 createContext를 통해 생성된 컨텍스트를 useContext를 통해 활용  
  → 활용한 이유 : 간편한 데이터 공유, 컴포넌트 분리와 재사용성, 상태관리, 코드 가독성과 유지보수성등
- PostCSS 사용  
  → 리액트 입문하는 입장에서 순수 CSS 사용

### Trouble Shooting

- check박스가 아닌 곳을 클릭하면 첫번째 체크박스가 표시되는 문제  
  → 해결: input과 label이 연결되어 있어가지고 어떤 label을 눌러도 리스트의 첫번째 요소 중에 id가 checkbox인것을 찾아서 체크박스가 눌리는 것  
  → 각각의 레이블과 체크박스를 연결해주기 위해서는 고유한 이름을 사용해야 함
- Header의 Nav버튼 울렁거림  
  → 해결  
   : selected됐을 때 밑줄친 선이 버튼 영역을 침범해서 울렁거렸던 것  
   : 버튼의 위치를 relative로 상대적으로 위치시켜줌  
   : position: absolute: ::after 유사 요소의 위치를 절대 위치로 설정합니다.

  ```css
  <!-- 버튼 -- > .status {
  	position: relative;
  	font-size: 1.4rem;
  	padding-top: 3rem;
  	text-transform: capitalize;
  	background-color: transparent;
  	color: var(--color-accent);
  	opacity: 0.8;
  	font-weight: bold;
  	cursor: pointer;
  }

  <!-- 버튼 선택 시 -- > .status.selected::after {
  	content: '';
  	position: absolute;
  	left: 0;
  	bottom: -0.2rem;
  	width: 100%;
  	height: 3px;
  	border-radius: 30px;
  	background-color: var(--color-light-lime);
  	transition: opacity 0.2s ease;
  }
  ```

### To improve

- active상태에서 랜더링 했을 때 처음 화면인 All상태로 돌아가지 않게 하기
- 로그인 로그아웃 기능 추가하기
- 반응형 모바일 앱으로 확인 할 수 있게 구현하기

### Deploy

[Cute to do list](https://cute-is-best-in-the-world.netlify.app/)
