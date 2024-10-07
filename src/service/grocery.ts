import {GroceryItemState, TGroceryItem} from '../types';

const BASE = 'http://localhost:3000/grocery';

export async function fetchGrocery(
  state: GroceryItemState = 'all',
): Promise<TGroceryItem[]> {
  const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`;

  const res = await fetch(`${BASE}/${queries}`);

  if (!res.ok) throw new Error('Failed to fetch grocery list!');

  return res.json();
}

export async function createItem(title: string) {
  const res = await fetch(BASE, {
    method: 'POST',
    body: JSON.stringify({title, amount: 0, completed: false}),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function toggleItemStatus(ItemId: string, completed: boolean) {
  const res = await fetch(`${BASE}/${ItemId}`, {
    method: 'PATCH',
    body: JSON.stringify({completed}),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function changeAmountOfItem(ItemId: string, amount: number) {
  const res = await fetch(`${BASE}/${ItemId}`, {
    method: 'PATCH',
    body: JSON.stringify({amount}),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function deleteItem(ItemId: string) {
  const res = await fetch(`${BASE}/${ItemId}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('Failed to delete item!');

  return res.json();
}

export async function changeItemTitle(ItemId: string, title: string) {
  const res = await fetch(`${BASE}/${ItemId}`, {
    method: 'PATCH',
    body: JSON.stringify({title}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) throw new Error('Failed to update item title!');

  return res.json();
}
