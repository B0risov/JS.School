const localDB = dataFetch('http://localhost:3004')

const jsonbinAPI = dataFetch('https://api.jsonbin.io/v3/b')

let load_items = async () => {
    return await localDB('items')
}

let post_item = async (item) => {
    return await localDB('items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
}

let delete_item = async (id) => {
    return await localDB('items/' + id, {
        method: 'DELETE'
    })
}

let update_item = async (id, item) => {
    return await localDB('items/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
}