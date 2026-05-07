# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 67 |
| Domain | UnityEditor |
| Idea No. | 2 |
| Repository | prefab-scene-canvas-explorer |
| 主な公開先 | GitHub Release / BOOTH |

## 背景

SceneやPrefabが増えると目的の参照やUI要素を探しにくい。

## 目的

Prefab、Scene内Object、UI Canvas階層、参照切れを横断検索する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 必須要件

- Unity explorer target を複数件まとめて検証できる。
- required fields: `id`, `title`, `assetGuid`, `scenePath`, `component`, `owner`。
- warning field: `previewNote`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
