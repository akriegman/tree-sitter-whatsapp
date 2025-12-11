import XCTest
import SwiftTreeSitter
import TreeSitterWhatsapp

final class TreeSitterWhatsappTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_whatsapp())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading WhatsApp grammar")
    }
}
