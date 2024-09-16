export interface ErrorResponse {
  response: {
    data: {
      statusCode: number;
      message: string;
      error: string;
    }
  }
}