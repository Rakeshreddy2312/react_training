const notificationPermission = async () => {
  const notification = await Notification.requestPermission();

  if (notification === 'granted') {
    return true;
  } else if (notification === 'default') {
    const reReq = await Notification.requestPermission();
    if (reReq === 'granted') {
      return true;
    }
    return false;
  } else {
    return false;
  }
};
export default notificationPermission;
