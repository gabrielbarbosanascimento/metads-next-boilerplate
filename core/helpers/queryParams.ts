export class QueryParamsHelper {
  static getQueryParams(payload: { [key: string]: any }) {
    return (
      '?' +
      Object.keys(payload)
        .map(function (key) {
          return key + '=' + payload[key];
        })
        .join('&')
    );
  }
}
