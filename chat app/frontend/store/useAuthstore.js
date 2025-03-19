import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthstore = create((set) => ({
    authUser: null,
    issigning: false,
    islogging: false,
    isupdatingprofile: false,

    ischeckingAuth: true,

    checkAuth: async() =>{
        try {
            const res = await axiosInstance.get("/auth/check")

            set({authUser:res.data})
        } catch (error) {
            set({authUser:null})
            console.log("error in checkAuth:",error);
            
        }finally{
            set({ischeckingAuth: false})
        }
    }
}));