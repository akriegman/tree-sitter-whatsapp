/**
 * @file Grammar for WhatsApp conversation transcripts
 * @author Aaron Kriegman <aaronkplus2@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "whatsapp",

  extras: _ => [],

  rules: {
    conversation: $ => repeat($.message),

    message: $ =>
      seq(
        $.header,
        $.content,
      ),

    header: $ =>
      token(prec(
        1,
        seq(
          "[",
          field("timestamp", /[ \u202f\d\/\-.,:]*(AM|PM)?/), // should we make this stricter?
          "]",
          /\s+/,
          field("from", /[^\n:]{1,25}/),
          ":",
          /\s+/, // custom extension, allow newline before content
        ),
      )),

    content: _ => repeat1(/.*\n/),
    // TODO:
    // - attachments
    // - edited markers
    // - polls
    // I'll add these as they come up

    // it would be nice if there was a way to exclude the trailing newline
    // from the message. also if there was a way to mark header prefixes at
    // the end of the document.
  },
});
