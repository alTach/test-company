/**
 * Для получения дополнительной информации см [репозиторий Husky]{@link https://www.npmjs.com/package/husky}
 */

/**
 * @param {Array<string>} arr - массив комманд взятых их package.json
 */
let tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': 'lint-staged --relative --allow-empty', // tasks(['lint-staged']),
  },
};
