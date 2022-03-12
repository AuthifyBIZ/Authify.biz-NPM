const axios = require('axios').default;

class Authify {

    loginUser(username, password, program_key, api_key) {
        
        const params = `login&username=${username}&password=${password}&program_key=${program_key}&api_key=${api_key}`;

        return new Promise((resolve, reject) => {

            this.apiRequest(params).then(res => {

                resolve(true);

            }).catch (err => {

                reject (err);
            })
        })

    }

    registerUser(username, email, password, token, program_key, api_key) {

        const params = `register&username=${username}&email=${email}&password=${password}&token=${token}&program_key=${program_key}&api_key=${api_key}`;

        return new Promise((resolve, reject) => {
                
                this.apiRequest(params).then(res => {
    
                    resolve(true);
    
                }).catch (err => {
    
                    reject (err);
                })
            })
    }


    activate(username, password, token, program_key, api_key) {

        const params = `activate&username=${username}&password=${password}&token=${token}&program_key=${program_key}&api_key=${api_key}`;

        return new Promise((resolve, reject) => {

            this.apiRequest(params).then(res => {

                resolve(true);

            }).catch (err => {

                reject (err);
            })
        })
    }


    log(username, message, program_key, api_key) {

        const params = `log&username=${username}&message=${message}&program_key=${program_key}&api_key=${api_key}`;

        return new Promise((resolve, reject) => {
    
                this.apiRequest(params).then(res => {
    
                    resolve(true);
    
                }).catch (err => {
    
                    reject (err);
                })
            })
    }

    async apiRequest(data) {
        return await new Promise((resolve, reject) => {

            axios({
                method: 'get',
                url: 'https://authify.biz/api/v1/universal/?type=' + data,
                headers: {
                    'User-Agent': 'Mozilla Authify',

                }
            })
        });
    }

}

axios.interceptors.response.use(response => {
	if (response.data.status === 'failed') {
		const responseError = new Error(response.data.info);
		return Promise.reject(responseError);
	}
	return response;
});

module.exports = Authify;
