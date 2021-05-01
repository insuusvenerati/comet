import { Node, mergeAttributes } from '@tiptap/core'
import Suggestion, { SuggestionOptions } from '@tiptap/suggestion'

export type MentionOptions = {
  HTMLAttributes: Record<string, any>
  suggestion: Omit<SuggestionOptions, 'editor'>
}

export const Mention = Node.create<MentionOptions>({
  name: 'mention',

  defaultOptions: {
    HTMLAttributes: {},
    suggestion: {
      char: '@',
      command: ({ editor, range, props }) => {
        editor
          .chain()
          .focus()
          .replaceRange(range, 'mention', props)
          .insertContent(' ')
          .run()
      },
      allow: ({ editor, range }) => {
        return editor.can().replaceRange(range, 'mention')
      }
    }
  },

  group: 'inline',

  inline: true,

  selectable: false,

  atom: true,

  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: element => {
          return {
            id: element.getAttribute('data-mention')
          }
        },
        renderHTML: attributes => {
          if (!attributes.id) {
            return {}
          }

          return {
            'data-mention': attributes.id
          }
        }
      },
      name: {
        default: null,
        parseHTML: element => {
          return {
            name: element.getAttribute('data-mention')
          }
        },
        renderHTML: () => ({})
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-mention]'
      }
    ]
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      'span',
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      `@${node.attrs.name}`
    ]
  },

  renderText({ node }) {
    return `@${node.attrs.name}`
  },

  addKeyboardShortcuts() {
    return {
      Backspace: () =>
        this.editor.commands.command(({ tr, state }) => {
          let isMention = false
          const { selection } = state
          const { empty, anchor } = selection

          if (!empty) {
            return false
          }

          state.doc.nodesBetween(anchor - 1, anchor, (node, pos) => {
            if (node.type.name === 'mention') {
              isMention = true
              tr.insertText(
                this.options.suggestion.char || '',
                pos,
                pos + node.nodeSize
              )

              return false
            }
          })

          return isMention
        })
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion
      })
    ]
  }
})
