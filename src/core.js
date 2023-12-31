/**
 * prism-cpp-doxygen
 * Copyright (c) 2023 Imken Luo <me@imken.moe>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Imken Luo <me@imken.moe>
 * @license MIT
 */

/** @typedef {import("prismjs")} PrismSelf */

/**
 * The plugin of prismjs.
 *
 * @param {PrismSelf} Prism
 */
export default function (Prism) {
  const doxygenInner = {
    text: {
      pattern: /[\\@](\w+)\S[\s\S]*?(?=\r\n?|\n|$)/,
      inside: {
        variable: {
          pattern: /[\\@]param\s+(\w+)/,
          inside: { tag: /[\\@]param/ },
        },
        tag: /[\\@](\w+)/,
      },
    },
  };

  const doxygenCommentInline = {
    pattern: /^\/\/[\/\!][\s\S]*?(?:\r\n?|\n|$)/,
    greedy: true,
    alias: "doxygen-comment",
    inside: doxygenInner,
  };

  const doxygenCommentBlock = {
    pattern: /\/\*[\*\!][\s\S]*?(?:\*\/|$)/,
    greedy: true,
    alias: "doxygen-comment",
    inside: doxygenInner,
  };

  Prism.languages.doxycpp = Prism.languages.extend("cpp", {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true,
        greedy: true,
        inside: {
          "doxygen-comment": doxygenCommentBlock,
        },
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true,
        inside: {
          "doxygen-comment": doxygenCommentInline,
        },
      },
    ],
  });
}
