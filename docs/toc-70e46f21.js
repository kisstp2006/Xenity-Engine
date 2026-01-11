// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="presentation.html"><strong aria-hidden="true">1.</strong> Presentation</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="limitations.html"><strong aria-hidden="true">1.1.</strong> Limitations</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="installation/installation.html"><strong aria-hidden="true">2.</strong> Installation</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="installation/game_console_installation.html"><strong aria-hidden="true">2.1.</strong> Game console support</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="game_project_samples/game_project_samples.html"><strong aria-hidden="true">3.</strong> Game project samples</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/manual.html"><strong aria-hidden="true">4.</strong> Manual</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/editor_ui.html"><strong aria-hidden="true">4.1.</strong> The editor UI</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/project_manager.html"><strong aria-hidden="true">4.1.1.</strong> Project Manager</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/hierarchy.html"><strong aria-hidden="true">4.1.2.</strong> The hierarchy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/inspector.html"><strong aria-hidden="true">4.1.3.</strong> The inspector</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/file_explorer.html"><strong aria-hidden="true">4.1.4.</strong> The file explorer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/game_tab.html"><strong aria-hidden="true">4.1.5.</strong> Game tab</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/scene_tab.html"><strong aria-hidden="true">4.1.6.</strong> Scene tab</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/console.html"><strong aria-hidden="true">4.1.7.</strong> The console</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/profiler.html"><strong aria-hidden="true">4.1.8.</strong> The profiler</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/project_settings.html"><strong aria-hidden="true">4.1.9.</strong> Project settings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/engine_settings.html"><strong aria-hidden="true">4.1.10.</strong> Engine settings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/lighting_settigs.html"><strong aria-hidden="true">4.1.11.</strong> Lighting settings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/docker_configuration.html"><strong aria-hidden="true">4.1.12.</strong> Docker configuration</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/build_settings.html"><strong aria-hidden="true">4.1.13.</strong> Build settings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/editor_ui/dev_kit_control.html"><strong aria-hidden="true">4.1.14.</strong> Dev kit control</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/usage.html"><strong aria-hidden="true">4.2.</strong> Usage</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/create_project.html"><strong aria-hidden="true">4.2.1.</strong> How to create a project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/add_existing_project.html"><strong aria-hidden="true">4.2.2.</strong> How to add an existing project</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/scene_system.html"><strong aria-hidden="true">4.2.3.</strong> How a scene works</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/import_files.html"><strong aria-hidden="true">4.2.4.</strong> How to import files</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/add_object_in_scene.html"><strong aria-hidden="true">4.2.5.</strong> Add your first object in the scene</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/create_component.html"><strong aria-hidden="true">4.2.6.</strong> How to create a component</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/play_game_in_editor.html"><strong aria-hidden="true">4.2.7.</strong> How to play your game in the editor</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/play_game_on_console.html"><strong aria-hidden="true">4.2.8.</strong> How to play your game on game console</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/performances_tips.html"><strong aria-hidden="true">4.2.9.</strong> Performances tips</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/common_issues.html"><strong aria-hidden="true">4.2.10.</strong> Common issues</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/usage/get_help.html"><strong aria-hidden="true">4.2.11.</strong> Where to get help</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="manual/compatible_asset_formats.html"><strong aria-hidden="true">4.3.</strong> Compatible asset formats</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/scripting_api_reference.html"><strong aria-hidden="true">5.</strong> Scripting API reference</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/preprocessors.html"><strong aria-hidden="true">5.1.</strong> Preprocessors</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/editor/editor.html"><strong aria-hidden="true">5.2.</strong> Editor</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/editor/gizmo.html"><strong aria-hidden="true">5.2.1.</strong> Gizmo</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/editor/editor_icons/editor_icons.html"><strong aria-hidden="true">5.2.2.</strong> EditorIcons</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/editor/editor_icons/icon_name.html"><strong aria-hidden="true">5.2.2.1.</strong> IconName Enum</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/engine.html"><strong aria-hidden="true">5.3.</strong> Engine</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/application/application.html"><strong aria-hidden="true">5.3.1.</strong> Application</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/assets.html"><strong aria-hidden="true">5.3.2.</strong> Assets</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/audio_clip.html"><strong aria-hidden="true">5.3.2.1.</strong> AudioClip</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/font.html"><strong aria-hidden="true">5.3.2.2.</strong> Font</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/icon.html"><strong aria-hidden="true">5.3.2.3.</strong> Icon</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/material.html"><strong aria-hidden="true">5.3.2.4.</strong> Material</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/material_rendering_mode_enum.html"><strong aria-hidden="true">5.3.2.4.1.</strong> MaterialRenderingMode Enum</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/mesh_data.html"><strong aria-hidden="true">5.3.2.5.</strong> MeshData</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/sub_mesh.html"><strong aria-hidden="true">5.3.2.5.1.</strong> SubMesh</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/prefab.html"><strong aria-hidden="true">5.3.2.6.</strong> Prefab</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/scene.html"><strong aria-hidden="true">5.3.2.7.</strong> Scene</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/shader.html"><strong aria-hidden="true">5.3.2.8.</strong> Shader</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/skybox.html"><strong aria-hidden="true">5.3.2.9.</strong> SkyBox</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/texture.html"><strong aria-hidden="true">5.3.2.10.</strong> Texture</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/filter_enum.html"><strong aria-hidden="true">5.3.2.10.1.</strong> Filter Enum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/texture_resolution_enum.html"><strong aria-hidden="true">5.3.2.10.2.</strong> TextureResolution Enum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/wrap_mode_enum.html"><strong aria-hidden="true">5.3.2.10.3.</strong> WrapMode Enum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/psp_texture_type_enum.html"><strong aria-hidden="true">5.3.2.10.4.</strong> PSPTextureType Enum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/assets/ps3_texture_type_enum.html"><strong aria-hidden="true">5.3.2.10.5.</strong> PS3TextureType Enum</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/color/color.html"><strong aria-hidden="true">5.3.3.</strong> Color</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/color/rgba.html"><strong aria-hidden="true">5.3.3.1.</strong> RGBA</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/components.html"><strong aria-hidden="true">5.3.4.</strong> Components</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/component.html"><strong aria-hidden="true">5.3.4.1.</strong> Component</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/audio_source.html"><strong aria-hidden="true">5.3.4.2.</strong> AudioSource</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/billboard_renderer.html"><strong aria-hidden="true">5.3.4.3.</strong> BillboardRenderer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/box_collider.html"><strong aria-hidden="true">5.3.4.4.</strong> BoxCollider</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/button.html"><strong aria-hidden="true">5.3.4.5.</strong> Button</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/camera.html"><strong aria-hidden="true">5.3.4.6.</strong> Camera</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/projection_type_enum.html"><strong aria-hidden="true">5.3.4.6.1.</strong> ProjectionType Enum</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/canvas.html"><strong aria-hidden="true">5.3.4.7.</strong> Canvas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/fps_counter.html"><strong aria-hidden="true">5.3.4.8.</strong> FpsCounter</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/image_renderer.html"><strong aria-hidden="true">5.3.4.9.</strong> ImageRenderer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/light.html"><strong aria-hidden="true">5.3.4.10.</strong> Light</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/lod.html"><strong aria-hidden="true">5.3.4.11.</strong> Lod</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/mesh_renderer.html"><strong aria-hidden="true">5.3.4.12.</strong> MeshRenderer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/missing_script.html"><strong aria-hidden="true">5.3.4.13.</strong> MissingScript</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/particle_system.html"><strong aria-hidden="true">5.3.4.14.</strong> ParticleSystem</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/rect_transform.html"><strong aria-hidden="true">5.3.4.15.</strong> RectTransform</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/rigidbody.html"><strong aria-hidden="true">5.3.4.16.</strong> RigidBody</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/sphere_collider.html"><strong aria-hidden="true">5.3.4.17.</strong> SphereCollider</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/sprite_renderer.html"><strong aria-hidden="true">5.3.4.18.</strong> SpriteRenderer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/text_mesh.html"><strong aria-hidden="true">5.3.4.19.</strong> TextMesh</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/components/text_renderer.html"><strong aria-hidden="true">5.3.4.20.</strong> TextRenderer</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/date_time/date_time.html"><strong aria-hidden="true">5.3.5.</strong> DateTime</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/debug/debug.html"><strong aria-hidden="true">5.3.6.</strong> Debug</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/enumerations/enumerations.html"><strong aria-hidden="true">5.3.7.</strong> Enumerations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/event/event.html"><strong aria-hidden="true">5.3.8.</strong> Event</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/file_system/file_system.html"><strong aria-hidden="true">5.3.9.</strong> FileSystem</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/file_system/file.html"><strong aria-hidden="true">5.3.9.1.</strong> File</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/file_system/file_mode_enum.html"><strong aria-hidden="true">5.3.9.1.1.</strong> FileMode Enum</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/file_system/directory.html"><strong aria-hidden="true">5.3.9.2.</strong> Directory</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/file_system/copy_file_result_enum.html"><strong aria-hidden="true">5.3.9.3.</strong> CopyFileResult Enum</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/gameobject/gameobject.html"><strong aria-hidden="true">5.3.10.</strong> GameObject</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/inputs/inputs.html"><strong aria-hidden="true">5.3.11.</strong> Inputs</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/inputs/input_system.html"><strong aria-hidden="true">5.3.11.1.</strong> InputSystem</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/inputs/touch.html"><strong aria-hidden="true">5.3.11.2.</strong> Touch</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/inputs/key_code_enum.html"><strong aria-hidden="true">5.3.11.3.</strong> KeyCode Enum</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/math/math.html"><strong aria-hidden="true">5.3.12.</strong> Math</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/math/quaternion.html"><strong aria-hidden="true">5.3.12.1.</strong> Quaternion</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/math/vector2.html"><strong aria-hidden="true">5.3.12.2.</strong> Vector2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/math/vector2_int.html"><strong aria-hidden="true">5.3.12.3.</strong> Vector2Int</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/math/vector3.html"><strong aria-hidden="true">5.3.12.4.</strong> Vector3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/math/vector4.html"><strong aria-hidden="true">5.3.12.5.</strong> Vector4</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/network/network.html"><strong aria-hidden="true">5.3.13.</strong> Network</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/network/network_manager.html"><strong aria-hidden="true">5.3.13.1.</strong> NetworkManager</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/network/socket.html"><strong aria-hidden="true">5.3.13.2.</strong> Socket</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/noise/noise.html"><strong aria-hidden="true">5.3.14.</strong> Noise</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/object_management/object_management.html"><strong aria-hidden="true">5.3.15.</strong> Object management</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/physics/physics.html"><strong aria-hidden="true">5.3.16.</strong> Physics</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/physics/collider.html"><strong aria-hidden="true">5.3.16.1.</strong> Collider</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/physics/collision_event.html"><strong aria-hidden="true">5.3.16.2.</strong> CollisionEvent</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/physics/raycast/raycast.html"><strong aria-hidden="true">5.3.16.3.</strong> Raycast</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/physics/raycast/raycast_hit.html"><strong aria-hidden="true">5.3.16.3.1.</strong> RaycastHit</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/profiler/profiler.html"><strong aria-hidden="true">5.3.17.</strong> Profiler</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/reflection/reflective.html"><strong aria-hidden="true">5.3.18.</strong> Reflective</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/scene_manager/scene_manager.html"><strong aria-hidden="true">5.3.19.</strong> SceneManager</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/screen/screen.html"><strong aria-hidden="true">5.3.20.</strong> Screen</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/time/time.html"><strong aria-hidden="true">5.3.21.</strong> Time</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/transform/transform.html"><strong aria-hidden="true">5.3.22.</strong> Transform</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/ui_rendering/ui_rendering.html"><strong aria-hidden="true">5.3.23.</strong> UI Rendering</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/ui_rendering/horizontal_alignment_enum.html"><strong aria-hidden="true">5.3.23.1.</strong> HorizontalAlignment Enum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/ui_rendering/vertical_alignment_enum.html"><strong aria-hidden="true">5.3.23.2.</strong> VerticalAlignment Enum</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/utils/utils.html"><strong aria-hidden="true">5.3.24.</strong> Utils</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/utils/endian_utils/endian_utils.html"><strong aria-hidden="true">5.3.24.1.</strong> EndianUtils</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/vertex_descriptor/vertex_descriptor.html"><strong aria-hidden="true">5.3.25.</strong> VertexDescriptor</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="script_api_reference/engine/vertex_descriptor/vertex_element.html"><strong aria-hidden="true">5.3.25.1.</strong> VertexElement</a></span></li></ol></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="how_to_compile_editor.html"><strong aria-hidden="true">6.</strong> How to compile the editor</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="credits.html"><strong aria-hidden="true">7.</strong> Credits</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

