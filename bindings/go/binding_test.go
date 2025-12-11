package tree_sitter_whatsapp_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_whatsapp "github.com/akriegman/tree-sitter-whatsapp/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_whatsapp.Language())
	if language == nil {
		t.Errorf("Error loading WhatsApp grammar")
	}
}
