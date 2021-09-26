export default class ApiErrorHandler {
  public static reportUser(e: Error) {
    /* enhancement: add popup message */
    console.error('show popup to user with details', e.message);
  }

  public static reportServer(e: Error) {
    /* enhancement: send the error detail to our server */
    console.error('sending a report about API error', e.message);
  }
}
