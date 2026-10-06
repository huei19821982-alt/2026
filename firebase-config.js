// ─────────────────────────────────────────────────────────────
//  Firebase 설정값
//  Firebase 콘솔 → 프로젝트 설정(톱니바퀴) → 일반 → 내 앱 → "SDK 설정 및 구성"
//  에 나오는 firebaseConfig 내용을 아래에 그대로 붙여 넣으세요.
//
//  ※ 이 값은 공개되어도 괜찮아요. 데이터는 Firestore 보안 규칙과
//    과 접속 코드로 보호됩니다.
// ─────────────────────────────────────────────────────────────
export const firebaseConfig = {
  apiKey: "AIzaSyBeBcn0mHiZEKGWPAog_QvQ6BdqiDl-rk0",
  authDomain: "gne-2026.firebaseapp.com",
  projectId:  "gne-2026",
  storageBucket:  "gne-2026.firebasestorage.app",
  messagingSenderId: "599221984462",
  appId: "1:599221984462:web:88371ebae5edb588e0049f"
};

// 브라우저 탭에 보일 이름 (바꾸지 않아도 돼요)
export const APP_TITLE = "중등교육과 자료 취합";
