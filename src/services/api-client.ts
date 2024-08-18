import axios from "axios";

export default axios.create({
	baseURL: 'https://api.rawg.io/api/',
	params: {
		key: 'b9278cbae519492f8843f69bd2385b31'
	}
})