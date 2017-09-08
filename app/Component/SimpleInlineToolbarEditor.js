import React from 'react';

import Editor, {createEditorStateWithText} from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import EditorState from 'draft-js';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';

// TODO: Styles
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import editorStyles from '../../public/editorStyles.css';
//import toolbarStyle from '../../draft-js-inline-toolbar-plugin/lib-css/toolbarStyles.css';
//import toolbarStyles from '../../draft-js-inline-toolbar-plugin/src/toolbarStyles.css';
//import buttonStyles from '../../draft-js-inline-toolbar-plugin/lib-css/buttonStyles.css';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const {InlineToolbar} = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text ...';

export default class SimpleInlineToolbarEditor extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editorState: createEditorStateWithText(text)
		};

		this.onChange = (editorState) => this.setState({editorState});

		focus = () => {
			this.editor.focus();
		};
	}
	render() {
		return (
			<div className='container-fluid'>
				<div className='editor' onClick={this.focus}>
					<Editor editorState={this.state.editorState} onChange={this.onChange} plugins={plugins} ref={(element) => {
						this.editor = element;
					}}/>
					<InlineToolbar/>
				</div>
			</div>
		);
	}
};

//Shouldnt you just export the module cuz app.js is rendering?
//ReactDOM.render(<SimpleInlineToolbarEditor/>, document.getElementById('app'));
