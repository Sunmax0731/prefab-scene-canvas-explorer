using UnityEditor;
using UnityEngine;

namespace Sunmax0731.PrefabSceneCanvasExplorer
{
    public sealed class PrefabSceneCanvasExplorerWindow : EditorWindow
    {
        [MenuItem("Tools/Sunmax0731/prefab-scene-canvas-explorer")]
        public static void Open() => GetWindow<PrefabSceneCanvasExplorerWindow>("prefab-scene-canvas-explorer");

        private void OnGUI()
        {
            GUILayout.Label("Prefab・Scene・Canvas探索ビュー", EditorStyles.boldLabel);
            GUILayout.Label("Closed alpha editor package is importable.");
        }
    }
}
