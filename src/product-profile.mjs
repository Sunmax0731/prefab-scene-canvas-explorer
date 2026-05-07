export const productProfile = {
  "repository": "prefab-scene-canvas-explorer",
  "title": "Prefab・Scene・Canvas探索ビュー",
  "domain": "UnityEditor",
  "hostApp": null,
  "rank": 67,
  "tier": "P2",
  "ideaNo": 2,
  "overview": "Prefab、Scene内Object、UI Canvas階層、参照切れを横断検索する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "SceneやPrefabが増えると目的の参照やUI要素を探しにくい。",
  "differentiation": "サムネイル、階層、検索条件を同じ画面で扱う。",
  "publish": "GitHub Release / BOOTH",
  "surface": "UnityEditor product spec + CLI validation core",
  "entity": "Unity explorer target",
  "requiredFields": [
    "id",
    "title",
    "assetGuid",
    "scenePath",
    "component",
    "owner"
  ],
  "warningField": "previewNote",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
