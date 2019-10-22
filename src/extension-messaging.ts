export default function sendMessage(msg) {
  console.log('sending', msg, 'to pushpin')
  ;(chrome.runtime as any).sendNativeMessage('com.pushpin.pushpin', msg, function(response) {
    console.log('Received response', response)
  })
}
