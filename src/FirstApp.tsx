interface AppProps {
  title: string;
}

// const getName = (): string => {
//   return 'Memo';
// }
const FirstApp: React.FC<AppProps> = ({title}) => {
  return (
    <>
      <h1> { title } </h1>
      <p>subtitle</p>
    </>
  );
}

export default FirstApp;
