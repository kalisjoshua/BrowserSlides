/*jshint laxcomma:true strict:false*/
/*globals describe it require*/
var assert = require("assert");
var lib = require("../../js/ssmd")
  , md = lib.ssmd.md
  , ssmd = lib.ssmd;

function oneline (str) {
  return str.replace(/\n/g, "");
}

describe("Links", function () {

  it("should be formatted in paragraphs", function () {
    assert.equal("<p>I am <a href=\"http://hellokitty/\">hello kitty</a></p>"
      , md("I am [hello kitty](http://hellokitty/)"));
  });

  it("should format links in lists", function () {
    assert.equal("<ul><li><a href=\"http://hellokitty/\">hello kitty</a></li></ul>"
      , oneline(md("* [hello kitty](http://hellokitty/)")));
  });

  it("should format links in parenthesis", function () {
    assert.equal("<p>Example (<a href=\"http://hellokitty/\">hello kitty</a>).</p>"
      , oneline(md("Example ([hello kitty](http://hellokitty/)).")));
  });

});

describe("Blockquotes", function () {
  
  it("should be wrapped in the proper tag with a leading element", function () {
    assert.equal("<h1>Intro</h1><blockquote><p>\"Interesting stuff.\"</p><footer><a href=\"http://hellokitty/\">hello kitty</a></footer></blockquote>"
      , oneline(md("= Intro\n    \"Interesting stuff.\" ~~ [hello kitty](http://hellokitty/)\n")));
  });

  it("should be wrapped in the proper tag when it is by itself", function () {
    assert.equal("<blockquote><p>\"Interesting stuff.\"</p><footer><a href=\"http://hellokitty/\">hello kitty</a></footer></blockquote>"
      , oneline(md("    \"Interesting stuff.\" ~~ [hello kitty](http://hellokitty/)\n")));
  });

});

describe("Code blocks", function () {

  it("should be formatted when input as a single line", function () {
    assert.equal("<pre><code><span class=\"keyword\">var</span> a = {};</code></pre>"
      , md("---\nvar a = {};\n---"));
  });

  it("should be formatted properly as multi-line input");

});

describe("Lists", function () {

  it("should be closed validly", function () {

    assert.equal("<ul><li>list item</li><li>list item</li></ul>"
      , oneline(md("* list item\n* list item")));

    assert.equal("<ol><li>list item</li><li>list item</li></ol>"
      , oneline(md("# list item\n# list item")));


    assert.equal("<ul><li>list item<ul><li>list item</li></ul></li></ul>"
      , oneline(md("* list item\n** list item")));

    assert.equal("<ol><li>list item<ol><li>list item</li></ol></li></ol>"
      , oneline(md("# list item\n## list item")));


    assert.equal("<ul><li>list item<ol><li>list item</li></ol></li></ul>"
      , oneline(md("* list item\n*# list item")));

    assert.equal("<ol><li>list item<ul><li>list item</li></ul></li></ol>"
      , oneline(md("# list item\n#* list item")));


    assert.equal("<ul><li>list item<ul><li>list item</li></ul></li><li>list item</li></ul>"
      , oneline(md("* list item\n** list item\n* list item")));

    assert.equal("<ol><li>list item<ol><li>list item</li></ol></li><li>list item</li></ol>"
      , oneline(md("# list item\n## list item\n# list item")));


    assert.equal("<ul><li>list item<ol><li>list item</li></ol></li><li>list item</li></ul>"
      , oneline(md("* list item\n*# list item\n* list item")));

    assert.equal("<ol><li>list item<ul><li>list item</li></ul></li><li>list item</li></ol>"
      , oneline(md("# list item\n#* list item\n# list item")));

  });

});

describe("Paragraphs", function () {

  it("should not be naked text", function () {

    assert.equal("<p>hello world!</p>"
      , md("hello world!"));

    assert.equal("<p>hello world!</p>\n<p>hello world!</p>"
      , md("hello world!\nhello world!"));

  });

});

describe("Titles", function () {

  it("should be formatted when passed as the only input", function() {
    assert.equal("<h1>Title</h1>", md("= Title"));
    assert.equal("<h2>Title</h2>", md("== Title"));
    assert.equal("<h3>Title</h3>", md("=== Title"));
    assert.equal("<h4>Title</h4>", md("==== Title"));
    assert.equal("<h5>Title</h5>", md("===== Title"));
    assert.equal("<h6>Title</h6>", md("====== Title"));
  });

  it("should be formatted globally", function () {
    assert.equal("<h1>Title</h1>\n<h2>Title</h2>\n<h3>Title</h3>\n<h4>Title</h4>\n<h5>Title</h5>\n<h6>Title</h6>\n"
      , md("= Title\n== Title\n=== Title\n==== Title\n===== Title\n====== Title\n"));
  });

});
