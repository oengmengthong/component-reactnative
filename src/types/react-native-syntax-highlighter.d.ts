declare module 'react-native-syntax-highlighter' {
    import { Component } from 'react';
    import { TextProps } from 'react-native';
  
    interface SyntaxHighlighterProps extends TextProps {
      language: string;
      style?: object;
      highlighter?: string;
      children: string;
    }
  
    export default class SyntaxHighlighter extends Component<SyntaxHighlighterProps> {}
  }