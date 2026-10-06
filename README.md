# 중등교육과 자료 취합

경상남도교육청 중등교육과 업무용 자료(파일·의견) 취합 웹앱입니다.
화면은 GitHub Pages, 데이터는 Firebase(Firestore 무료 요금제)를 사용합니다.

| 파일 | 설명 |
|---|---|
| `index.html` | 웹앱 화면 |
| `firebase-config.js` | Firebase 설정값 (프로젝트 만든 뒤 직접 채워 넣기) |
| `test.html` | 교육청 네트워크 연결 시험 페이지 |
| `firestore.rules` | Firestore 보안 규칙 (Firebase 콘솔에 붙여 넣기) |

- 접속 코드·관리자 코드는 Firestore의 `config/secret` 문서에서 관리합니다.
- 저장 공간(1GiB)을 아끼려면 취합이 끝난 건은 ZIP으로 받은 뒤 삭제해 주세요.
