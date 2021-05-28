export class User {
  constructor(
    public email: string,

    public name: string,

    public dob: Date,

    private _token: string,

    private _tokenExpireTime: Date
  ) {}

  get token() {
    if (!this._tokenExpireTime || new Date() > this._tokenExpireTime) {
      return null;
    }

    return this._token;
  }

  get tokenExpireTime() {
    if (this._tokenExpireTime) {
      return this._tokenExpireTime;
    } else {
      return null;
    }
  }
}
