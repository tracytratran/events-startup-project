export class NetworkError extends Error {
  constructor(message = "Network error") {
    super(message);
    this.name = "NetworkError";
  }
}

export class InvalidCredentials extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCredentials";
  }
}

export class UndefinedServerError extends Error {
  constructor(message = "Undefined server error") {
    super(message);
    this.name = "UndefinedServerError";
  }
}
