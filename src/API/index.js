import axios from "axios";

let validUserToken = "";
const port = 8298;

export const getOrders = () => {
    return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};
export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
};

export const userLogin = async (formValues) => {
    const loginDataJSON = {
        username: formValues.id,
        password: formValues.password,
    };
    const response = await axios.post(
        `http://localhost:${port}/authuser/v1/authenticate`,
        loginDataJSON
    );

    window.localStorage.setItem("token", response.data.token);
    window.localStorage.setItem("userDetails", JSON.stringify(response.data));
    window.localStorage.setItem("userRole", response.data.user.firstName);
    window.localStorage.setItem("userId", response.data.user.id);
    window.localStorage.setItem("closBalance", response.data.user.accountList[0].accBalance);
    window.localStorage.setItem("accNumber", response.data.user.accountList[0].accountNo);
    validUserToken = response.data.token;
    return response.data;
}

export const getAccSummary = async (id) => {
    return await fetch(`http://localhost:${port}/authuser/v1/users/${id}`).then((res) => res.json());
};

export const getAccStatement = async (accountNo, from, to) => {
    return await fetch(`http://localhost:${port}/authuser/v1/filter/${accountNo}/${from}/${to}`).then((res) => res.json());
};

export const getFdRdAccounts = async (accountNo) => {
    return await fetch(`http://localhost:${port}/authuser/v1/deposits/${accountNo}`).then((res) => res.json());
};

export const getAccWiseDetails = async (accountNo) => {
    return await fetch(`http://localhost:${port}/authuser/v1/deposits/account/${accountNo}`).then((res) => res.json());
};

export const postFdFormDetails = async (formData) => {
    const response = await axios.post(
        `http://localhost:${port}/authuser/v1/addDeposit`,
        formData
    );
    return response.data;
}
export const postRdFormDetails = async (formData) => {
    const response = await axios.post(
        `http://localhost:${port}/authuser/v1/addDeposit`,
        formData
    );
    return response.data;

}

export const sendDepositNotification = async (nData) => {
    const response = await axios.post(
        `http://localhost:${port}/authuser/v1/emailNotification`,
        nData
    );
    return response.data;
}
export const postFdConfirm = async (formData) => {
    const response = await axios.post(
        `http://localhost:${port}/authuser/v1/confirmDeposit`,
        formData
    );
    return response.data;

}
export const postRdConfirm = async (formData) => {
    const response = await axios.post(
        `http://localhost:${port}/authuser/v1/confirmRD`,
        formData
    );
    return response.data;

}

export const postBeneficiaryFormDetails = async (formData) => {
    const response = await axios.post(
        `http://localhost:${port}/authuser/v1/addBeneficiary/+919151582822`,
        formData
    );
    return response.data;
}

export const verifyBeneficiary = async (otp) => {
    const response = await axios.post(
        `http://localhost:${port}/authuser/v1/verify-otp/${otp}`
    );
    return response.data;
}

export const getBankDetails = async (ifscCode) => {
    const response = await axios.get(
        `http://localhost:${port}/authuser/v1/getbankdetails/${ifscCode}`);
    return response.data;
}
export const getBeneficicaryDetails = async () => {
    return await fetch(`http://localhost:${port}/authuser/v1/getBeneficiary`).then((res) => res.json());
};

export const getNonHdfcBeneficicaryDetails = async () => {
    return await fetch(`http://localhost:${port}/authuser/v1/getBeneficiaryNonHDFC`).then((res) => res.json());
};
export const getWithinHdfcBeneficicaryDetails = async () => {
    return await fetch(`http://localhost:${port}/authuser/v1/getBeneficiaryWithinHDFC`).then((res) => res.json());
};
export const deleteBeneficiary = async (accNumber) => {
    const response = await axios.delete(
        `http://localhost:${port}/authuser/v1/verify-otp/${accNumber}`
    );
    return response.data;
}

