const platforms = [
  {
    title: 'Vim',
    icon: 'vim',
    screenshot: 'https://github.com/trevordmiller/nova-vim/blob/master/assets/screenshot.png?raw=true',
    steps: [
      'Install "trevordmiller/nova-vim" with your Vim plugin manager',
      'Add "colorscheme nova" to your ".vimrc" (after any other plugins or rules)',
      'Restart Vim',
    ],
    notes: [
      'You\'ll need True Color support (latest Vim, Neovim, or GUI Vim)',
      'For terminal Vim use, your terminal will also need True Color support',
      'Using the Nova HyperTerm or iTerm plugin is recommended',
      'For JS, install "pangloss/vim-javascript"',
      'For HTML5, install "othree/html5.vim"',
      'For CSS3, install "hail2u/vim-css3-syntax"',
      'For React/JSX, install "mxw/vim-jsx"',
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
    title: 'Atom',
    icon: 'atom',
    screenshot: 'https://github.com/trevordmiller/nova-atom-syntax/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'In Atom, open your settings',
      'Tap on the "Install" pane',
      'Tap on "Themes"',
      'Search for "Nova"',
      'Tap the "Install" button for both "nova-atom-ui" and "nova-atom-syntax"',
      'Tap on the "Themes" pane',
      'Select "Nova Atom" for both the "UI Theme" and "Syntax Theme"',
    ],
    links: [
      {
        title: 'Source code for the UI Plugin',
        url: 'https://github.com/trevordmiller/nova-atom-ui',
      },
      {
        title: 'Source code for the Syntax Plugin',
        url: 'https://github.com/trevordmiller/nova-atom-syntax',
      },
    ],
  },
  {
    title: 'HyperTerm',
    icon: 'hyperterm',
    screenshot: 'https://github.com/trevordmiller/nova-hyperterm/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Add "nova-hyperterm" to the "plugins" array in your "~/.hyperterm.js"',
      'Restart HyperTerm',
    ],
    links: [
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-hyperterm',
      },
    ],
  },
  {
    title: 'iTerm',
    icon: 'iterm',
    screenshot: 'https://github.com/trevordmiller/nova-iterm/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Download "nova.itermcolors"',
      'In iTerm, open your preferences',
      'Tap on "Profiles" > "Colors" > "Color Presets" > "Import"',
      'Select the "nova.itermcolors" you downloaded',
    ],
    links: [
      {
        title: 'nova.itermcolors',
        url: 'https://raw.githubusercontent.com/trevordmiller/nova-iterm/master/build/nova.itermcolors',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-iterm',
      },
    ],
  },
  {
    title: 'tmux',
    icon: 'tmux',
    screenshot: 'https://github.com/trevordmiller/nova-vim/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Install a Nova plugin for your terminal',
      'Use ANSI color variables in your ".tmux.conf"',
    ],
    notes: [
      'You\'ll need a version of tmux that supports True Color (tmux 2.2+)',
    ],
    links: [
      {
        title: 'Example ".tmux.conf"',
        url: 'https://github.com/trevordmiller/nova-example-dotfiles/blob/master/.tmux.conf',
      },
    ],
  },
  {
    title: 'npm',
    icon: 'npm',
    steps: [
      'npm install -S nova-colors',
      'import novaColors from "nova-colors"',
      'novaColors.{colorCategory}.{colorType}',
    ],
    notes: [
      '"normal": standard 8 ANSI colors',
      '"bright": bright variations ("black", "red", "magenta", "white")',
      '"decoration": gray variations ("dark", "medium", "light")',
    ],
    links: [
      {
        title: 'Example using nova-colors directly',
        url: 'https://github.com/trevordmiller/nova-hyperterm/blob/master/index.js',
      },
      {
        title: 'Example using nova-colors with a build step',
        url: 'https://github.com/trevordmiller/nova-vim/blob/master/src/index.js',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-colors',
      },
    ],
  },
]

export default platforms
