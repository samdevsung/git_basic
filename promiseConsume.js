wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);