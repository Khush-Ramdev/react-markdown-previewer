import React from 'react';
import marked from 'marked';
import './App.scss';

class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: DefaultInput,
        }
    };
    componentDidMount() {
        this.onPreviewChange();
    }
    onPreviewChange = () => {
        this.setState(() => ({ preview:marked(this.state.input) }))
    }
    onInputChange = (event) => {
        const input = event.target.value
        this.setState(() => ({
            input
        }));
    }
    resetInput=() => {
        this.setState(() => ({input:``}));
    }
    createMarkup = () => {
        return { __html: marked(this.state.input,{breaks:true})};
    };
    render() {
        return (
            <div className="container">
                <div id="heading" >Markdown Previewer</div>
                <div id="editor-head">
                    <div >Editor</div>
                    <button id="button" onClick={this.resetInput}>clear</button>
                </div>
                <textarea
                    id="editor"
                    value={this.state.input}
                    onChange={this.onInputChange}
                ></textarea>
                <div id="preview-head">Preview</div>
                <div
                    id="preview"
                    dangerouslySetInnerHTML={this.createMarkup()}
                />
            </div>
        )
    };
};

const DefaultInput = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample

(firstLine, lastLine) {
  if (firstLine == '\`\`\`'
   && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvmHZiV3w3vmAVuBTVg6vcT8W1YuMqvl5vQQ&usqp=CAU)
`


export default MarkdownPreviewer;