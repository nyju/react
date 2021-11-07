# react 기초 학습

[tistory_blog 정리내용 보기](https://anjuna.tistory.com/67?category=973919)

##  node.js

* body-parser 및 postman을 이용한 회원가입
* Bcrypt로 비밀번호 암호화
  * https://www.npmjs.com/package/bcrypt
* JWT 를 이용한 로그인
  * 사용자 정보를 JSON에 담아 암호화하고 해싱작업을 하여 토큰을 생성하는 기술
  * https://www.npmjs.com/package/jsonwebtoken
* Authentication 유저 인증 기능
  * 페이지 이동시 로그인 여부 및 관리자 여부 등을 체크 
  
## react

* react-router-dom 이란
  * react는 spa(single page application) 이다.
  * spa특성상 페이지를 새로고침하지 않으면서 화면을 전환.
  * 이 때 화면 전환을 위해 react-router가 필요하며 별도의 패키지를 설치필요
  * https://reacttraining.com/react-router/web/example/basic
  
* Axios
  * 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
  * 백엔드 및 프론트엔드에서 통신을 쉽게하기 위해 Ajax와 함께 사용
  * https://axios-http.com/docs/intro
  
* Concurrently
  * 여러개의 commands를 동시에 작동 시킬수 있게 해주는 Tool.프론트 및 서버를 한번에 start 할 수 있는 라이브러리
  * https://www.npmjs.com/package/concurrently
  
  
* Redux란
  * React 프로젝트의 규모가 커질때마다 자식으로 넘겨주어야 하는 props가 점점 복잡헤짐
  * 따라서, 원하는대로 state를 사용할 수 있는 라이브러리 Redux가 나오게 됨. 즉, 상태를 관리해 주는 라이브러리
  * https://react-redux.js.org/
  * Props 
    * 부모 컴포넌트가 자식 컴포넌트한테 전달하는 데이터(읽기전용)
    * 부모 컴포넌트에서 설정 (자식 컴포넌트에서 수정 불가)
  * State
    * 상태에 따라 변화하는 데이터(쓰기전용)
    * 자식 컴포넌트에서 직접 변경 가능
    * 컴포넌트 안에서 데이터를 교환하거나 전달할 때 사용
    * state가 변경되는 컴포넌트 랜더링 필요
  * action : 상태를 알려줌
  * reducer : 변경된 값을 알려줌. 이전의 State와 Action 객체를 받은 후에 바뀐 State를 리턴해줌.
  * store : 어플리케이션의 state 을 감싸주는 역할. 수많은 메소드들로 State를 관리함
 
 
* Redux 사용하기
  * redux
  * react-redux : redux를 더 편하기 사용하기 위함
  * redux-promis : 프로미스 기반의 비동기 작업을 조금 더 편하게 해주는 미들웨어
  * redux-thunk : 비동기 작업을 처리 할 때 가장 많이 사용하는 미들웨어. 액션 객체가 아닌 함수를 디스패치 할 수 있음
  
* React Hooks
  * Hooks 는 리액트 v16.8 에 새로 도입된 기능
  * 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능등을 제공
  * 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줌
  * https://ko.reactjs.org/docs/hooks-overview.html
  * useState : 가장 기본적인 Hook 으로서, 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 해줌
  * useEffect : 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook
  
* React HOC(Higher Oder Component) Auth 인증체크
  * 리액트 페이지에서 회원만 진입할 수 있는 페이지, 또는 관리자 페이지 등 사용자 인증에 따라 접근하지 못하도록 할때 HOC을 사용
  
  
> 인프런 따라하며 배우는 노드, 리액트 시리즈 강의를 듣고 실습 및 정리한 내용입니다.
