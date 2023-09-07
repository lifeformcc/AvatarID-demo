class AvatarID {
  constructor(options) {
    this.key = options.key;
    this.env = options.env ? options.env : 'prod';
    this.host = this.env == 'prod' ? 'https://pandora.lifeform.cc/lifeform_bsc_prod' : 'https://pandora-test.lifeform.cc/lifeform_bsc';
  }

  async getList(account, contract = '') {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.key);

    return new Promise((resolve,reject) => {
      fetch(this.host + '/api/v2/avatarId/avatarList?account=' + account + '&contract=' + contract, {
        method: 'GET', 
        headers: headers
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
    });
  }
}

export default AvatarID;