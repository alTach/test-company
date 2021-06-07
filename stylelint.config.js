/**
 * Для получения дополнительной информации смотри [репозиторий stylelint на github(-e)]{@link https://stylelint.io}
 */

/**
 * This pattern should mach {@link https://regex101.com/r/pH8CMO/1}, like decision find in git issue {@link https://github.com/simonsmith/stylelint-selector-bem-pattern/issues/23#issuecomment-279216443}
 * @type {string}
 */
const bemSelectorPattern =
  '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$';

module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-prettier/recommended'],
  plugins: [],
  rules: {
    'max-nesting-depth': 2,
    'selector-max-class': 4,
    'no-duplicate-selectors': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    'selector-class-pattern': [
      bemSelectorPattern,
      {
        message: 'Class names should match the SUIT CSS naming convention',
      },
    ],
  },
};
