// doc: https://nhnent.github.io/tui.editor/api/latest/ToastUIEditor.html#ToastUIEditor
// const defaultOptions = {
//   minHeight: '200px',
//   previewStyle: 'vertical',
//   useCommandShortcut: true,
//   useDefaultHTMLSanitizer: true,
//   usageStatistics: false,
//   hideModeSwitch: false,
//   toolbarItems: [
//     'heading',
//     'bold',
//     'italic',
//     'strike',
//     'divider',
//     'hr',
//     'quote',
//     'divider',
//     'ul',
//     'ol',
//     'task',
//     'indent',
//     'outdent',
//     'divider',
//     'table',
//     'image',
//     'link',
//     'divider',
//     'code',
//     'codeblock'
//   ]
// }

const defaultOptions = {
  minHeight: '200px',
  language: 'en-US',
  useCommandShortcut: true,
  usageStatistics: true,
  hideModeSwitch: false,
  toolbarItems: [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr', 'quote'],
    ['ul', 'ol', 'task', 'indent', 'outdent'],
    ['table', 'image', 'link'],
    ['code', 'codeblock'],
    ['scrollSync'],
  ]
};