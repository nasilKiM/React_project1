## 프로젝트 설명

    깃허브 오픈 API를 활용하여 angular 내 angular-cli 레퍼지토리의 이슈를 조회할 수 있는 반응형 웹 사이트를 제작했습니다.

## 배포 주소 or 시연 영상

    시연영상으로 대체하였습니다.

## 프로젝트 폴더 구조

    * src
        _apis
            _core.js
            _listApi.js
        _components
            _Button : 공통 Button 설정
            _Layout : 공통 Header + Footer 설정
            _Loading : 공통 Loading 설정
        _pages
            _Home : 게이트 페이지
                _Components(issues / pagination / sortIssues)
            _GoToIssue : 이슈리스트를 불러오는 페이지
            _DetailPage : 각 이슈별 상세페이지
        _reducer
            _index.js : rootReducer 설정
            _issues.js : createSlice(redux-toolkit) 설정
        _routes : 루트 설정
        _store : configureStore 설정
        _styles : 공통 스타일 설정
        * App.js
        * index.js

## 팀원

    구현서 (팀장)
    김나실
    이재훈
    이주람
    장영승

## 사용 기술 스택

    FrontEnd : HTML / JavaScript / React
    라이브러리 :
    협업도구 : Git + GitHub

## 요구 사항 구현 내역

    가. 목록페이지

| 요구사항                              | 구현여부 |
| ------------------------------------- | -------- |
| 1. 목록페이지                         | 구현여부 |
| 이슈데이터 마운트                     | O        |
| 목록은 10개 단위의 페이지네이션       | O        |
| 총 이슈의 갯수는 최근 200개           | O        |
| 현재 페이지의 숫자 포커스             | O        |
| 10페이지 단위                         | O        |
| 페이지네이션 구성방식                 | O        |
| 필터기능                              | O        |
| (페이지네이션+필터)뒤로가기 기능      | O        |
| Redux ToolKit 활용하여 전역 상태 관리 | O        |
| 데이터 받아오는 동안 로딩페이지       | O        |
| ---                                   | ---      |
| 2. 상세페이지                         | 구현여부 |
| id 값을 활용하여 api를 요청           | O        |
| 해당 issue의 상세페이지를 구현        | O        |
| 반응형으로 구성                       | O        |
| ---                                   | ---      |
| 3. 공통                               | 구현여부 |
| 각 기능마다 브랜치 + merge            | x        |
| 구현 후 serverless 환경에서 배포      | x        |

## 코드 및 깃허브 커밋 컨벤션
 - type(옵션) : subject(간단한 커밋내용)