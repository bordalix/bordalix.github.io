/* register service worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    if (registrations.length) {
      for(let registration of registrations) {
        registration.unregister().then(function (boolean) {
          console.log((boolean ? 'Successfully unregistered' : 'Failed to unregister'));
        })
      }
    }
  })
}
