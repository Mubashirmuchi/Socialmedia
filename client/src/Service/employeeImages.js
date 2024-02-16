import { API } from "../Config/api";
import { service } from "../Utils/service";

// const UserService = {
//     timeline: async (params) => {
//         console.log(params, "fdgfd");
//         try {
//             const res = await service.get(`${API.TIMELINEPOST}/${params}`);
//             return res;
//         } catch (error) {
//             return error;
//         }
//     },
// };

// export default UserService;
const UserService = {
    timeline: async (params) => {
        const delayedPromise = new Promise((resolve) => {
            setTimeout(async () => {
                try {
                    const res = await service.get(`${API.TIMELINEPOST}/${params}`);
                    resolve(res);
                } catch (error) {
                    resolve(error);
                }
            }, 2000);
        });

        return delayedPromise;
    },
};

export default UserService;
