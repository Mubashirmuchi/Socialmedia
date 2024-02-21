import { service } from "../Utils/service";
import { API } from "../Config/api";

const AuthService = {
    login: async (params) => {
        try {
            const res = await service.post(API.LOGIN, { email: params.email, password: params.password });
            if (res?.data) {
                return res;
            }
        } catch (error) {
            return error;
        }
    },

    register: async (params = {}) => {
        try {
            const res = await service.post(API.REGISTER, params);
            console.log("reg", res);
            if (res) {
                return res;
            } else {
                throw new Error("something went wrong");
            }
        } catch (error) {
            return error;
        }
    },
    logout: async () => {
        try {
            const res = await service.post(API.LOGOUT);
            if (res?.data) {
                return res.data;
            } else {
                throw new Error("something went wrong");
            }
        } catch (error) {
            return error;
        }
    },

    getProfile: async () => {
        try {
            const res = await service.get(API.PROFILE);
            if (res?.data) {
                return res.data;
            } else {
                throw new Error("Something went wrong");
            }
        } catch (error) {
            return error;
        }
    },
};

export default AuthService;
