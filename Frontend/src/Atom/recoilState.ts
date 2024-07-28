// recoilState.js
import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    CompanyName: "",
    date: "",
    location: [],
    roles: [],
    status: "",

    sisterName: "",
    brotherName: "",
    password: "",
  },
});

export const stepState = atom({
  key: "stepState",
  default: 1,
});
