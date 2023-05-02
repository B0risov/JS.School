import {dataFetch} from "./api";
import {Item} from "../types/Item";

let serverAPI = dataFetch('http://localhost:3004')

export let loadItems = async (): Promise<Item[]> => {
    return await serverAPI<Item[]>('items_simple');
}

export let load_item_by_id = async (id: string): Promise<Item> => {
    return await serverAPI<Item>(`items_simple/${id}`);
}

export let post_item = async (item: Item): Promise<Item> => {
    return await serverAPI<Item>('items_simple', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
}

export let delete_item = async (id: string): Promise<{}> => {

    return await serverAPI<{}>('items_simple/' + id, {
        method: 'DELETE'
    })
}

export let update_item = async (id: string, item: Item): Promise<Item> => {

    return await serverAPI<Item>('items_simple/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
}
