import {StyleSheet, View} from 'react-native';
import React, {createRef, useState} from 'react';

import sizes from '../../res/sizes';

import WebView from 'react-native-webview';
import Loading from '../../component/loading/Loading';
export default function RenderViedeo({url}: {url: string}) {
  const videoRef = createRef<any>();

  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.video}>
      <WebView
        ref={videoRef}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo
        style={{flex: 1}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        source={{
          uri: `${url}`,
          headers: {
            Referer: 'https://khoahoc.phanmemmkt.vn',
          },
        }}
        video
      />

      {loading && <Loading />}
    </View>
  );
}
const styles = StyleSheet.create({
  video: {
    height: sizes._screen_width * (9 / 12),
    width: sizes._screen_width,
    marginTop: 20,
  },
});
