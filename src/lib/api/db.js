import axios from "axios";
const JSON_SERVER_HOST = "https://enchanted-tattered-surf.glitch.me";


// 불러오기
export const getExpenses = async() =>{
try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`)
return response.data;
} catch (err){
    console.log(err);

    alert("잘못댔심더")
}
};
export const getExpense = async({queryKey}) =>{
    try {
        const response = await axios.get(`${JSON_SERVER_HOST}/expenses/${queryKey[1]}`)
    return response.data;
    } catch (err){
        console.log(err);
    
        alert("잘못댔심더")
    }
    };

export const postExpense = async (newExpense) =>{
    try {
        const {data} = await axios.post(
            `${JSON_SERVER_HOST}/expenses`,
            newExpense
        );
return data;
    } catch (err) {
            console.log(err);
            alert("뭔가 잘못")
        
    }
}


export const putExpense = async (updatedExpense) => {
const {id,...rest} = updatedExpense;
try {
    const {data} = await axios.put(
        `${JSON_SERVER_HOST}/expenses/${id}`,
        rest
    );
return data;
} catch (err) {
        console.log(err);
        alert("뭔가 잘못")
    
}
}

export const deleteExpense = async (id) => {
    try {
        const {data} = await axios.delete(
            `${JSON_SERVER_HOST}/expenses/${id}`
        
        );
    return data;
    } catch (err) {
            console.log(err);
            alert("뭔가 잘못")
        
    }
    }