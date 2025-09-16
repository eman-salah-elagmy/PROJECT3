import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string|undefined;
}

const FileSyntax = ({ content }: IProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomOneDark} customStyle={
      {
        background:"transparent",
        width:"100%",
        maxHeight:"100vh",
        overflowX:"auto",
        fontSize:"1.5rem"
      }
    }
    showLineNumbers>
      {String(content)}
    </SyntaxHighlighter>
  );
};

export default FileSyntax;

