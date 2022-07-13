import WebView from "react-native-webview";

export default function Trailer(props) {
  const { movie } = props;

  return (
    <WebView
      source={{
        uri: `https://www.youtube.com/embed/${movie}?playlist=${movie}&autoplay=1&loop=1&autoplay=1`,
      }}
    />
  );
}
