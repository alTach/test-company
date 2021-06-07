/**
 * Для получения дополнительной информации смотри [репозиторий lint-staged на github(-e)]{@link https://github.com/okonet/lint-staged}
 */

module.exports = {
  '*.{js,json,md,html}': ['prettier --write'],
  '*.ts': ['prettier --write', 'eslint --fix', 'jest --bail --passWithNoTests'],
  '*.scss': ['prettier --write', 'stylelint --fix'],
};
