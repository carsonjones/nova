const platforms = [
  {
    title: 'Vim',
    icon: 'vim',
    steps: [
      'Install "trevordmiller/nova-vim" with your Vim plugin manager',
      'Add "colorscheme nova" to your .vimrc (after any other plugins or rules that alter your color scheme)',
    ],
    notes: [
      'Youll need True Color support (Latest Vim, Neovim, or GUI Vim)',
      'For terminal Vim use, youll also need a terminal with True Color support',
      'For terminal Vim use, it is highly recommended to use a Nova terminal plugin as well for consistent colors',
    ],
    links: [
      {
        title: 'Example ".vimrc"',
        url: 'https://github.com/trevordmiller/nova-example-dotfiles/blob/master/.vimrc',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-vim',
      },
    ],
  },
  {
    title: 'HyperTerm',
    icon: 'hyperterm',
    steps: [
      'Add "nova-hyperterm" to the plugins array in your "~/.hyperterm.js"',
    ],
    links: [
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-hyperterm',
      },
    ],
  },
  {
    title: 'tmux',
    icon: 'tmux',
    steps: [
      'Update your ".tmux.conf" styles as shown in the example',
    ],
    note: [
      'Youll need to have a Nova terminal plugin installed for these ANSI color variables to work',
    ],
    links: [
      {
        title: 'Example ".tmux.conf"',
        url: 'https://github.com/trevordmiller/nova-example-dotfiles/blob/master/.tmux.conf',
      },
    ],
  },
  {
    title: 'Atom',
    icon: 'atom',
    steps: [
      'COMING SOON',
    ],
    links: [
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-atom',
      },
    ],
  },
  {
    title: 'iTerm',
    icon: 'iterm',
    steps: [
      'Upload "nova.itermcolors" into your "Colors" preferences pane',
    ],
    links: [
      {
        title: 'nova.itermcolors',
        url: 'https://github.com/trevordmiller/nova-iterm/blob/master/nova.itermcolors',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-iterm',
      },
    ],
  },
  {
    title: 'npm',
    icon: 'npm',
    steps: [
      'npm install -S nova-colors',
      'import novaColors from nova-colors',
      'novaColors.{colorCategory}.{colorType}',
    ],
    notes: [
      'normal: standard 8 ANSI colors (black, red, green, yellow, blue, magenta, cyan, white)', 'bright: bright variations (black, red, magenta, white)',
      'decoration: subtle black variations (dark, medium, light)',
    ],
    links: [
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-colors',
      },
    ],
  },
]

export default platforms
