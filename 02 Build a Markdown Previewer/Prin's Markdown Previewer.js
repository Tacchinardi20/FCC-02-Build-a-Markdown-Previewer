const initialState = `
  This is a paragraph

  **This is bolded text**

  > Block Quotes!

  # Heading
  ## Heading 2

  - List Item 1
  - List Item 2
  - List Item 3

  [Visit my website](https://codepen.io/Tacchinardi/pen/yLzEYKW)

  This is a inline \`<div></div>\`
  This is a block of code:

  \`\`\`
    let x = 1;
    let y = 2;
    let z = x+y;
  \`\`\`

  ![freeCodeCamp](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

//User Story #5: When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

class App extends React.Component {
    state = {
        text: initialState
    }

    handleChange = (e) => {
        this.setState ({
            text: e.target.value
        })
    }

    render() {
        const { text } = this.state;

        const markdown = marked(text, { breaks: true });

        return (
            <div>
                <h1 className="col text-center text-dark m-4 bg-info">Markdown Previewer</h1>
                <div className="row">
                    <div className="col-6"><br/>
                        <h5 className="text-center text-muted bg-warning">Enter your markdown here :</h5>
                        <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange} />
                    </div>

                    <div className="col-6"><br/>
                        <h5 className="text-center text-muted bg-warning">See the result :</h5>
                        <div className="preview rounded" dangerouslySetInnerHTML={{ __html: markdown }} id="preview" />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));