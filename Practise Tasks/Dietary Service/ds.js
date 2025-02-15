let role;
function checkAccess(role) {
  switch(role) {
    case 'Employee':
      console.log('You have access to Dietary Services.');
      break;
    case 'Enrolled Member':
      console.log('You have access to Dietary Services and one-on-one interaction with a dietician.');
      break;
    case 'Subscriber':
      console.log('You have partial access to Dietary Services.');
      break;
    case 'Non-Subscriber':
      console.log('You need to enroll or subscribe to avail this facility.');
      break;
    default:
      console.log('Invalid role.');
  }
}