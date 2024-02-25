// const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";
export let token;
export const setToken = (newToken) => {
    token = newToken;
};
const mainHostUrl = "https://wedev-api.sky.pro/api/kanban";
const userUrl = "https://wedev-api.sky.pro/api/user";
// Документация API "КАНБАН"
// Получить список задач
export async function getTodos({token}) {
    const response = await fetch(mainHostUrl, {
        headers: {
Authorization: `Bearer ${token}`,
        },
    });
    if (!response.status === 200) {
        throw new Error("Не удалось загрузить данные, попробуйте позже");
    }
    const data = await response.json();
    return data;
}

//Добавить задачу в список
export async function postTodo({text, token}) {
    const response = await fetch(mainHostUrl, {
        headers: {
Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
            text,
        }),
    });
    if (!response.status === 201) {
        throw new Error("Не удалось добавить задачу, попробуйте позже");
    }
    const data = await response.json();
    return data;
}

// Изменить задачу
export async function putTodo({text, id, token}) {
    const response = await fetch(mainHostUrl + `/${id}`, {
        headers: {
Authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
            text,
        }),
    });
    if (!response.status === 201) {
        throw new Error("Не удалось обновить задачу, попробуйте позже");
    }
    const data = await response.json();
    return data;
}
// Удалить задачу
export async function deleteTodo({text, id, token}) {
    const response = await fetch(mainHostUrl + `/${id}`, {
        headers: {
Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
        body: JSON.stringify({
            text,
        }),
    });
    if (!response.status === 201) {
        throw new Error("Не удалось удалить задачу, попробуйте позже");
    }
    const data = await response.json();
    return data;
}

// Документация API "ПОЛЬЗОВАТЕЛИ"
// Получить список пользователей
export async function getUsersList({token}) {
    const response = await fetch(userUrl, {
        headers: {
Authorization: `Bearer ${token}`,
        },
    });
    if (!response.status === 200) {
        throw new Error("Не удалось получить список пользователей, попробуйте позже");
    }
    const data = await response.json();
    return data;
}

//Регистрация
export async function registration({ name, login,password}) {
    return fetch(userUrl, {
        method: "POST",
        body: JSON.stringify({
            name, 
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Пользователь с таким логином уже существует");
        }
        return response.json();
    });
}

//Авторизация
export function signIn({login, password}) { // Ф-ия принимает деструктуризованный объект с 2мя ключами, которые пользователь вводит при запросе
return fetch(userUrl + "/login", {  // Возвращается наш запрос с url юзера+ логин, как в API
    method: "POST",                 // Метод Пост отправляет данные
        body: JSON.stringify({      // Данные передаются с помощью body : логин и пароль
            login,
            password,
        }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error("Введён неверный логин или пароль"); // Выбрасываем ошибку, если будут введены неверные данные
        }
        return response.json();     // Если всё нормально, то возвращаются данные из API
    });
} 
