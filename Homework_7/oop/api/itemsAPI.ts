import {dataFetch} from "./api";
import {Item} from "../types/item";
import {JSONbinResponse} from "../types/JSONbinResponse";

const localDB = dataFetch('http://localhost:3004')

const jsonbinAPI = dataFetch('https://api.jsonbin.io/v3/b')

export const load_items = async (): Promise<Item[]> => {
    return await localDB<Item[]>('items');
}

export let post_item = async (item: Item): Promise<Item> => {
    return await localDB<Item>('items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
}

export let delete_item = async (id: number): Promise<{}> => {

    return await localDB<{}>('items/' + id, {
        method: 'DELETE'
    })
}

export let update_item = async (id: number, item: Item): Promise<Item> => {
    return await localDB<Item>('items/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
}

