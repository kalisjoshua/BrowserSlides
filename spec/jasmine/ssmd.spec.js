/*jshint laxcomma:true strict:false*/
/*globals describe expect it require */
var lib = require("../../js/ssmd")
  , md = lib.ssmd.md
  , ssmd = lib.ssmd;

function oneline (str) {
  return str.replace(/\n/g, "");
}

describe("Simple Slides MarkDown library", function() {

  describe("Links", function () {

    it("should format links in a paragraph", function () {
      expect("<p><a href=\"http://hellokitty/\">hello kitty</a></p>")
        .toBe(md("[hello kitty](http://hellokitty/)"));
    });

    it("should format links in a list", function () {
      expect("<ul><li><a href=\"http://hellokitty/\">hello kitty</a></li></ul>")
        .toBe(oneline(md("* [hello kitty](http://hellokitty/)")));
    });

    it("should format links in parenthesis", function () {
      expect("<p>Example (<a href=\"http://hellokitty/\">hello kitty</a>).</p>")
        .toBe(oneline(md("Example ([hello kitty](http://hellokitty/)).")));
    });

  });

  it("should format a blockquote", function () {
    expect("<h1>Intro</h1><blockquote><p>\"Interesting stuff.\"</p><footer><a href=\"http://hellokitty/\">hello kitty</a></footer></blockquote>")
      .toBe(oneline(md("= Intro\n    \"Interesting stuff.\" ~~ [hello kitty](http://hellokitty/)\n")));
  });

  it("should format code blocks", function () {
    expect("<pre><code>var a = {};</code></pre>").toBe(md("---\nvar a = {};\n---"));
  });

  it("should format titles as h tags", function() {
    expect("<h1>Title</h1>").toBe(md("= Title"));
    expect("<h2>Title</h2>").toBe(md("== Title"));
    expect("<h3>Title</h3>").toBe(md("=== Title"));
    expect("<h4>Title</h4>").toBe(md("==== Title"));
    expect("<h5>Title</h5>").toBe(md("===== Title"));
    expect("<h6>Title</h6>").toBe(md("====== Title"));
  });

  it("should format lists", function () {
    expect("<ul><li>list item</li><li>list item</li></ul>").toBe(oneline(md("* list item\n* list item")));
    expect("<ol><li>list item</li><li>list item</li></ol>").toBe(oneline(md("# list item\n# list item")));

    expect("<ul><li>list item<ul><li>list item</li></ul></li></ul>").toBe(oneline(md("* list item\n** list item")));
    expect("<ol><li>list item<ol><li>list item</li></ol></li></ol>").toBe(oneline(md("# list item\n## list item")));

    expect("<ul><li>list item<ol><li>list item</li></ol></li></ul>").toBe(oneline(md("* list item\n*# list item")));
    expect("<ol><li>list item<ul><li>list item</li></ul></li></ol>").toBe(oneline(md("# list item\n#* list item")));

    expect("<ul><li>list item<ul><li>list item</li></ul></li><li>list item</li></ul>").toBe(oneline(md("* list item\n** list item\n* list item")));
    expect("<ol><li>list item<ol><li>list item</li></ol></li><li>list item</li></ol>").toBe(oneline(md("# list item\n## list item\n# list item")));

    expect("<ul><li>list item<ol><li>list item</li></ol></li><li>list item</li></ul>").toBe(oneline(md("* list item\n*# list item\n* list item")));
    expect("<ol><li>list item<ul><li>list item</li></ul></li><li>list item</li></ol>").toBe(oneline(md("# list item\n#* list item\n# list item")));
  });

  it("should format paragraphs", function () {
    expect("<p>hello world!</p>").toBe(md("hello world!"));
    expect("<p>hello world!</p>\n<p>hello world!</p>").toBe(md("hello world!\nhello world!"));
  });

});
