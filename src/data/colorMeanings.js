import {colors} from './styleGuide'

const colorMeanings = [
  [
    {
      value: colors.normal.cyan,
      meaning: 'Values / User State',
    },
    {
      value: colors.normal.blue,
      meaning: 'Identifiers',
    },
    {
      value: colors.normal.yellow,
      meaning: 'Statements',
    },
    {
      value: colors.normal.green,
      meaning: 'Types',
    },
    {
      value: colors.normal.magenta,
      meaning: 'Globals',
    },
    {
      value: colors.normal.red,
      meaning: 'Action Needed',
    },
    {
      value: colors.bright.red,
      meaning: 'Special',
    },
    {
      value: colors.bright.magenta,
      meaning: 'Emphasis',
    },
  ],
  [
    {
      value: colors.bright.black,
      meaning: 'Trivial',
    },
    {
      value: colors.normal.white,
      meaning: 'Default Foreground',
    },
    {
      value: colors.normal.black,
      meaning: 'Default Background',
    },
    {
      value: colors.bright.white,
      meaning: 'Decoration',
    },
    {
      value: colors.decoration.light,
      meaning: 'Decoration',
    },
    {
      value: colors.decoration.medium,
      meaning: 'Decoration',
    },
    {
      value: colors.decoration.dark,
      meaning: 'Decoration',
    },
  ],
]

export default colorMeanings
