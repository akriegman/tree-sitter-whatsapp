# tree-sitter-whatsapp

A tree-sitter grammar for WhatsApp conversation transcripts. I made this for use in [ChatSkiBiDi](https://chatskibidi.com). Note that WhatsApp transcripts are not meant to be parsed, so they have lots of ambiguities. In those cases we just make an opinionated choice about what's more likely. We also make the syntax more permissive in some places, eg allowing extra whitespace where WhatsApp would only ever put a single space or newline.
