import React from 'react'

export default [
  {
    key: 'undo',
    title: '撤销',
    text: <i className="icon-undo"></i>,
    type: 'editor-state-method',
    command: 'undo'
  }, {
    key: 'redo',
    title: '重做',
    text: <i className="icon-redo"></i>,
    type: 'editor-state-method',
    command: 'redo'
  }, {
    key: 'bold',
    title: '加粗',
    text: <i className="icon-bold"></i>,
    type: 'inline-style',
    command: 'bold'
  }, {
    key: 'italic',
    title: '斜体',
    text: <i className="icon-italic"></i>,
    type: 'inline-style',
    command: 'italic'
  }, {
    key: 'underline',
    title: '下划线',
    text: <i className="icon-underlined"></i>,
    type: 'inline-style',
    command: 'underline'
  }, {
    key: 'strike-through',
    title: '删除线',
    text: <i className="icon-strikethrough"></i>,
    type: 'inline-style',
    command: 'strikethrough',
  }, {
    key: 'superscript',
    title: '上标',
    text: <i className="icon-superscript"></i>,
    type: 'inline-style',
    command: 'superscript'
  }, {
    key: 'subscript',
    title: '下标',
    text: <i className="icon-subscript"></i>,
    type: 'inline-style',
    command: 'subscript'
  }, {
    key: 'headings',
    title: '标题',
    type: 'headings',
  }, {
    key: 'blockquote',
    title: '引用',
    text: <i className="icon-quote"></i>,
    type: 'block-type',
    command: 'blockquote',
  }, {
    key: 'code',
    title: '代码块',
    text: <i className="icon-code"></i>,
    type: 'block-type',
    command: 'code-block'
  }, {
    key: 'list_ul',
    title: '无序列表',
    text: <i className="icon-list"></i>,
    type: 'block-type',
    command: 'unordered-list-item'
  }, {
    key: 'list_ol',
    title: '有序列表',
    text: <i className="icon-list-numbered"></i>,
    type: 'block-type',
    command: 'ordered-list-item'
  }, {
    key: 'link',
    title: '超链接',
    type: 'link'
  }, {
    key: 'text-color',
    title: '颜色',
    type: 'text-color'
  }, {
    key: 'font-size',
    title: '字号',
    type: 'font-size'
  }, {
    key: 'font-family',
    title: '字体',
    type: 'font-family'
  }, {
    key: 'text-align',
    title: '文本对齐',
    type: 'text-align'
  }, {
    key: 'media',
    title: '图像',
    text: <i className="icon-media"></i>,
    type: 'media'
  }
]