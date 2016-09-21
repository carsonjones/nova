import {colors} from './styleGuide'

const colorMeanings = [
  [
    {
      value: colors.normal.cyan,
      meaning: 'Value / State',
    },
    {
      value: colors.normal.blue,
      meaning: 'Identifier',
    },
    {
      value: colors.normal.magenta,
      meaning: 'Global',
    },
    {
      value: colors.bright.magenta,
      meaning: 'Emphasis',
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
      value: colors.normal.yellow,
      meaning: 'Statement',
    },
    {
      value: colors.normal.green,
      meaning: 'Type',
    },
  ],
  [
    {
      value: colors.decoration.dark,
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
      value: colors.normal.black,
      meaning: 'Default Back',
    },
    {
      value: colors.bright.black,
      meaning: 'Trivial',
    },
    {
      value: colors.normal.white,
      meaning: 'Default Text',
    },
    {
      value: colors.bright.white,
      meaning: 'Decoration',
    },
  ],
]

export default colorMeanings
